import os
from zipline.data import bundles
from zipline.data.data_portal import DataPortal
from trading_calendars import get_calendar
import pandas as pd
from zipline.utils.run_algo import load_extensions

environ = os.environ

load_extensions(
    default=True,
    extensions=[],
    strict=True,
    environ=os.environ,
)
# Create a data portal
def create_data_portal(bundle, calendar):
    bundle_data = bundles.load(bundle)
    if calendar==None:
        raise ValueError("You need to pass a calendar name")
    trading_calendar = get_calendar(calendar)
    data_portal = DataPortal(
        bundle_data.asset_finder,
        trading_calendar=trading_calendar,
        first_trading_day=bundle_data.equity_daily_bar_reader.first_trading_day,
        equity_daily_reader=bundle_data.equity_daily_bar_reader,
        adjustment_reader=bundle_data.adjustment_reader,
    )

    return data_portal



# Implement Quantopian's get_pricing
def get_pricing(assets, start_date, end_date, fields, trading_calendar, bundle):
    """
    Approximate Quantopian function `get_pricing` available
    in online environment at quantopian.com
    """
    bundle_data = bundles.load(bundle)
    trading_calendar = get_calendar(trading_calendar)
    data_portal = create_data_portal(bundle, trading_calendar)

    # Set the given start and end dates to Timestamps.
    end_date = pd.Timestamp(end_date, tz="utc")
    start_date = pd.Timestamp(start_date, tz="utc")

    # Get the locations of the start and end dates
    sessions = trading_calendar.sessions_in_range(start_date, end_date)
    bar_count = len(sessions)

    # Get identifiers for asset symbols
    equities = bundle_data.asset_finder.lookup_symbols(assets, start_date)

    # return the historical data for the given window
    return data_portal.get_history_window(
        assets=equities,
        end_dt=end_date,
        bar_count=bar_count,
        frequency="1d",
        field=fields,
        data_frequency="daily",
    )
