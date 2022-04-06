"""
Module for building a complete dataset from DSE data with csv files.
Columns -> date, open, high, low, close, volume, dividends, stock_dividends
"""
import os
import sys
import numpy as np

from logbook import Logger, StreamHandler
from numpy import empty
from pandas import DataFrame, read_csv, Index, Timedelta, NaT
from zipline.utils.calendar_utils import register_calendar_alias

from zipline.utils.cli import maybe_show_progress

from . import core as bundles

handler = StreamHandler(sys.stdout, format_string=" | {record.message}")
logger = Logger(__name__)
logger.handlers.append(handler)


def csvdir_dse(tframes=None, csvdir=None):
    """
    Generate an ingest function for custom data bundle
    This function can be used in ~/.zipline/extension.py
    to register bundle with custom parameters, e.g. with
    a custom trading calendar.

    Parameters
    ----------
    tframes: tuple, optional
        The data time frames, supported timeframes: 'daily' and 'minute'
    csvdir : string, optional, default: CSVDIR environment variable
        The path to the directory of this structure:
        <directory>/<timeframe1>/<symbol1>.csv
        <directory>/<timeframe1>/<symbol2>.csv
        <directory>/<timeframe1>/<symbol3>.csv
        <directory>/<timeframe2>/<symbol1>.csv
        <directory>/<timeframe2>/<symbol2>.csv
        <directory>/<timeframe2>/<symbol3>.csv

    Returns
    -------
    ingest : callable
        The bundle ingest function

    Examples
    --------
    This code should be added to ~/.zipline/extension.py
    .. code-block:: python
       from zipline.data.bundles import csvdir_equities, register
       register('custom-csvdir-bundle',
                csvdir_equities(["daily", "minute"],
                '/full/path/to/the/csvdir/directory'))
    """

    return CSVDIRBundle(tframes, csvdir).ingest


class CSVDIRBundle:
    """
    Wrapper class to call csvdir_bundle with provided
    list of time frames and a path to the csvdir directory
    """

    def __init__(self, tframes=None, csvdir=None):
        self.tframes = tframes
        self.csvdir = csvdir

    def ingest(
        self,
        environ,
        asset_db_writer,
        minute_bar_writer,
        daily_bar_writer,
        adjustment_writer,
        calendar,
        start_session,
        end_session,
        cache,
        show_progress,
        output_dir,
    ):

        csvdir_dse_bundle(
            environ,
            asset_db_writer,
            minute_bar_writer,
            daily_bar_writer,
            adjustment_writer,
            calendar,
            start_session,
            end_session,
            cache,
            show_progress,
            output_dir,
            self.tframes,
            self.csvdir,
        )


@bundles.register("csvdir_dse")
def csvdir_dse_bundle(
    environ,
    asset_db_writer,
    minute_bar_writer,
    daily_bar_writer,
    adjustment_writer,
    calendar,
    start_session,
    end_session,
    cache,
    show_progress,
    output_dir,
    tframes=None,
    csvdir=None,
):
    """
    Build a zipline data bundle from the directory with csv files.
    """
    if not csvdir:
        csvdir = environ.get("CSVDIR")
        if not csvdir:
            raise ValueError("CSVDIR environment variable is not set")

    if not os.path.isdir(csvdir):
        raise ValueError("%s is not a directory" % csvdir)

    if not tframes:
        tframes = set(["daily", "minute"]).intersection(os.listdir(csvdir))

        if not tframes:
            raise ValueError(
                "'daily' and 'minute' directories " "not found in '%s'" % csvdir
            )

    divs_splits_stdivs = {
        "divs": DataFrame(
            columns=[
                "sid",
                "amount",
                "ex_date",
                "record_date",
                "declared_date",
                "pay_date",
            ]
        ),
        "splits": DataFrame(columns=["sid", "ratio", "effective_date"]),
        "stdivs": DataFrame(
            columns=[
                "sid",
                "ex_date",
                "declared_date",
                "pay_date",
                "record_date",
                "payment_sid",
                "ratio",
            ]
        ),
    }
    for tframe in tframes:
        ddir = os.path.join(csvdir, tframe)

        symbols = sorted(
            item.split(".csv")[0] for item in os.listdir(ddir) if ".csv" in item
        )
        if not symbols:
            raise ValueError("no <symbol>.csv* files found in %s" % ddir)

        dtype = [
            ("start_date", "datetime64[ns]"),
            ("end_date", "datetime64[ns]"),
            ("auto_close_date", "datetime64[ns]"),
            ("symbol", "object"),
        ]
        metadata = DataFrame(empty(len(symbols), dtype=dtype))

        if tframe == "minute":
            writer = minute_bar_writer
        else:
            writer = daily_bar_writer

        writer.write(
            _pricing_iter(ddir, symbols, metadata, divs_splits_stdivs, show_progress),
            show_progress=show_progress,
        )

        # Hardcode the exchange to "CSVDIR" for all assets and (elsewhere)
        # register "CSVDIR" to resolve to the NYSE calendar, because these
        # are all equities and thus can use the NYSE calendar.
        metadata["exchange"] = "DSE"

        asset_db_writer.write(equities=metadata)

        divs_splits_stdivs["divs"]["sid"] = divs_splits_stdivs["divs"]["sid"].astype(
            int
        )
        divs_splits_stdivs["splits"]["sid"] = divs_splits_stdivs["splits"][
            "sid"
        ].astype(int)
        adjustment_writer.write(
            splits=divs_splits_stdivs["splits"],
            dividends=divs_splits_stdivs["divs"],
            stock_dividends=divs_splits_stdivs["stdivs"],
        )


def _pricing_iter(csvdir, symbols, metadata, divs_splits_stdivs, show_progress):
    with maybe_show_progress(
        symbols, show_progress, label="Loading custom pricing data: "
    ) as it:
        files = os.listdir(csvdir)
        for sid, symbol in enumerate(it):
            logger.debug("%s: sid %s" % (symbol, sid))

            try:
                fname = [fname for fname in files if "%s.csv" % symbol in fname][0]
            except IndexError:
                raise ValueError("%s.csv file is not in %s" % (symbol, csvdir))

            dfr = read_csv(
                os.path.join(csvdir, fname),
                parse_dates=[0],
                infer_datetime_format=True,
                index_col=0,
            ).sort_index()

            start_date = dfr.index[0]
            end_date = dfr.index[-1]

            # The auto_close date is the day after the last trade.
            ac_date = end_date + Timedelta(days=1)
            metadata.iloc[sid] = start_date, end_date, ac_date, symbol

            if "split" in dfr.columns:
                tmp = 1.0 / dfr[dfr["split"] != 1.0]["split"]
                split = DataFrame(data=tmp.index.tolist(), columns=["effective_date"])
                split["ratio"] = tmp.tolist()
                split["sid"] = sid

                splits = divs_splits_stdivs["splits"]
                index = Index(range(splits.shape[0], splits.shape[0] + split.shape[0]))
                split.set_index(index, inplace=True)
                divs_splits_stdivs["splits"] = splits.append(split)

            if "dividend" in dfr.columns:
                # ex_date   amount  sid record_date declared_date pay_date
                tmp = dfr[dfr["dividend"] != 0.0]["dividend"]
                div = DataFrame(data=tmp.index.tolist(), columns=["ex_date"])
                div["record_date"] = NaT
                div["declared_date"] = NaT
                div["pay_date"] = NaT
                div["amount"] = tmp.tolist()
                div["sid"] = sid

                divs = divs_splits_stdivs["divs"]
                ind = Index(range(divs.shape[0], divs.shape[0] + div.shape[0]))
                div.set_index(ind, inplace=True)
                divs_splits_stdivs["divs"] = divs.append(div).astype(
                    dtype={
                        "ex_date": "datetime64[s]",
                        "record_date": "datetime64[s]",
                        "declared_date": "datetime64[s]",
                        "pay_date": "datetime64[s]",
                        "amount": "float",
                        "sid": "int64",
                    }
                )

            if "stock_dividend" in dfr.columns:
                # ex_date   amount  sid record_date declared_date pay_date payment sid
                tmp = dfr[dfr["stock_dividend"] != 0.0]["stock_dividend"]
                stock_div = DataFrame(data=tmp.index.tolist(), columns=["ex_date"])
                stock_div["record_date"] = NaT
                stock_div["declared_date"] = NaT
                stock_div["pay_date"] = NaT
                stock_div["ratio"] = tmp.tolist()
                stock_div["sid"] = sid
                stock_div["payment_sid"] = sid

                stdivs = divs_splits_stdivs["stdivs"]
                ind = Index(
                    range(stdivs.shape[0], stdivs.shape[0] + stock_div.shape[0])
                )
                stock_div.set_index(ind, inplace=True)
                divs_splits_stdivs["stdivs"] = stdivs.append(stock_div).astype(
                    {
                        "ex_date": "datetime64[s]",
                        "record_date": "datetime64[s]",
                        "declared_date": "datetime64[s]",
                        "pay_date": "datetime64[s]",
                        "sid": "int64",
                        "payment_sid": "int64",
                        "ratio": "float",
                    }
                )

            yield sid, dfr


register_calendar_alias("DSE", "XDSE")
