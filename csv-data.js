function downloadCSV() {
  var n = parseInt($("input:radio[name=QuotesType]:checked").val());
  window.location =
    baseURL +
    "data/download/CSV?date=" +
    $("#dtpStart").val() +
    "&dataType=" +
    n;
}
!(function (n) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], n)
    : n("object" == typeof exports ? require("jquery") : jQuery);
})(function (n) {
  "use strict";
  n.Zebra_DatePicker = function (t, i) {
    var p,
      o,
      l,
      ft,
      b,
      nt,
      tt,
      ht,
      ct,
      et,
      bt,
      s,
      c,
      y,
      e,
      f,
      lt,
      rt,
      it,
      at,
      g,
      kt,
      v,
      w,
      dt,
      ot,
      vt,
      oi,
      si,
      hi,
      k,
      ui,
      gt,
      yt,
      ni,
      ci,
      ut,
      li = {
        always_visible: !1,
        container: n("body"),
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        days_abbr: !1,
        default_position: "above",
        direction: 0,
        disabled_dates: !1,
        enabled_dates: !1,
        first_day_of_week: 1,
        format: "Y-m-d",
        header_captions: { days: "F, Y", months: "Y", years: "Y1 - Y2" },
        header_navigation: ["&#171;", "&#187;"],
        inside: !0,
        lang_clear_date: "Clear date",
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        months_abbr: !1,
        offset: [5, -5],
        pair: !1,
        readonly_element: !0,
        select_other_months: !1,
        show_clear_date: 0,
        show_icon: !0,
        show_other_months: !0,
        show_select_today: "Today",
        show_week_number: !1,
        start_date: !1,
        strict: !1,
        view: "days",
        weekend_days: [0, 6],
        zero_pad: !1,
        onChange: null,
        onClear: null,
        onOpen: null,
        onClose: null,
        onSelect: null,
      },
      r = this,
      u,
      fi;
    r.settings = {};
    u = n(t);
    fi = function (t) {
      var ri, nr, pi, fi, bi, kt, vi, ki, di, ei, oi, ir, sr;
      if (((ut = Math.floor(65536 * (1 + Math.random())).toString(16)), !t)) {
        r.settings = n.extend({}, li, i);
        for (ri in u.data())
          0 === ri.indexOf("zdp_") &&
            ((ri = ri.replace(/^zdp\_/, "")),
            void 0 !== li[ri] &&
              (r.settings[ri] =
                "pair" == ri ? n(u.data("zdp_" + ri)) : u.data("zdp_" + ri)));
      }
      r.settings.readonly_element && u.attr("readonly", "readonly");
      var tr = {
          days: ["d", "j", "D"],
          months: ["F", "m", "M", "n", "t"],
          years: ["o", "Y", "y"],
        },
        si = !1,
        hi = !1,
        ai = !1;
      for (var gi in tr)
        n.each(tr[gi], function (n, t) {
          r.settings.format.indexOf(t) > -1 &&
            ("days" == gi
              ? (si = !0)
              : "months" == gi
              ? (hi = !0)
              : "years" == gi && (ai = !0));
        });
      for (
        k =
          si && hi && ai
            ? ["years", "months", "days"]
            : !si && hi && ai
            ? ["years", "months"]
            : si && hi && !ai
            ? ["months", "days"]
            : si || hi || !ai
            ? si || !hi || ai
              ? ["years", "months", "days"]
              : ["months"]
            : ["years"],
          -1 == n.inArray(r.settings.view, k) &&
            (r.settings.view = k[k.length - 1]),
          g = [],
          at = [],
          pi = 0;
        2 > pi;
        pi++
      )
        (nr = 0 === pi ? r.settings.disabled_dates : r.settings.enabled_dates),
          n.isArray(nr) &&
            nr.length > 0 &&
            n.each(nr, function () {
              for (var r, f, u, t = this.split(" "), i = 0; 4 > i; i++) {
                for (
                  t[i] || (t[i] = "*"),
                    t[i] =
                      t[i].indexOf(",") > -1
                        ? t[i].split(",")
                        : new Array(t[i]),
                    r = 0;
                  r < t[i].length;
                  r++
                )
                  if (
                    t[i][r].indexOf("-") > -1 &&
                    ((f = t[i][r].match(/^([0-9]+)\-([0-9]+)/)), null !== f)
                  ) {
                    for (u = h(f[1]); u <= h(f[2]); u++)
                      -1 == n.inArray(u, t[i]) && t[i].push(u + "");
                    t[i].splice(r, 1);
                  }
                for (r = 0; r < t[i].length; r++)
                  t[i][r] = isNaN(h(t[i][r])) ? t[i][r] : h(t[i][r]);
              }
              0 === pi ? g.push(t) : at.push(t);
            });
      if (
        ((kt = new Date()),
        (vi = r.settings.reference_date
          ? r.settings.reference_date
          : u.data("zdp_reference_date") &&
            void 0 !== u.data("zdp_reference_date")
          ? u.data("zdp_reference_date")
          : kt),
        (v = void 0),
        (w = void 0),
        (s = vi.getMonth()),
        (ct = kt.getMonth()),
        (c = vi.getFullYear()),
        (et = kt.getFullYear()),
        (y = vi.getDate()),
        (bt = kt.getDate()),
        r.settings.direction === !0)
      )
        v = vi;
      else if (r.settings.direction === !1)
        (w = vi),
          (vt = w.getMonth()),
          (ot = w.getFullYear()),
          (dt = w.getDate());
      else if (
        (!n.isArray(r.settings.direction) &&
          pt(r.settings.direction) &&
          h(r.settings.direction) > 0) ||
        (n.isArray(r.settings.direction) &&
          ((fi = ti(r.settings.direction[0])) ||
            r.settings.direction[0] === !0 ||
            (pt(r.settings.direction[0]) && r.settings.direction[0] > 0)) &&
          ((bi = ti(r.settings.direction[1])) ||
            r.settings.direction[1] === !1 ||
            (pt(r.settings.direction[1]) && r.settings.direction[1] >= 0)))
      )
        (v = fi
          ? fi
          : new Date(
              c,
              s,
              y +
                h(
                  n.isArray(r.settings.direction)
                    ? r.settings.direction[0] === !0
                      ? 0
                      : r.settings.direction[0]
                    : r.settings.direction
                )
            )),
          (s = v.getMonth()),
          (c = v.getFullYear()),
          (y = v.getDate()),
          bi && +bi >= +v
            ? (w = bi)
            : !bi &&
              r.settings.direction[1] !== !1 &&
              n.isArray(r.settings.direction) &&
              (w = new Date(c, s, y + h(r.settings.direction[1]))),
          w &&
            ((vt = w.getMonth()), (ot = w.getFullYear()), (dt = w.getDate()));
      else if (
        (!n.isArray(r.settings.direction) &&
          pt(r.settings.direction) &&
          h(r.settings.direction) < 0) ||
        (n.isArray(r.settings.direction) &&
          (r.settings.direction[0] === !1 ||
            (pt(r.settings.direction[0]) && r.settings.direction[0] < 0)) &&
          ((fi = ti(r.settings.direction[1])) ||
            (pt(r.settings.direction[1]) && r.settings.direction[1] >= 0)))
      )
        (w = new Date(
          c,
          s,
          y +
            h(
              n.isArray(r.settings.direction)
                ? r.settings.direction[0] === !1
                  ? 0
                  : r.settings.direction[0]
                : r.settings.direction
            )
        )),
          (vt = w.getMonth()),
          (ot = w.getFullYear()),
          (dt = w.getDate()),
          fi && +w > +fi
            ? (v = fi)
            : !fi &&
              n.isArray(r.settings.direction) &&
              (v = new Date(ot, vt, dt - h(r.settings.direction[1]))),
          v && ((s = v.getMonth()), (c = v.getFullYear()), (y = v.getDate()));
      else if (
        n.isArray(r.settings.disabled_dates) &&
        r.settings.disabled_dates.length > 0
      )
        for (ki in g)
          if (
            "*" == g[ki][0] &&
            "*" == g[ki][1] &&
            "*" == g[ki][2] &&
            "*" == g[ki][3]
          ) {
            di = [];
            (n.each(at, function () {
              var n = this;
              "*" != n[2][0] &&
                di.push(
                  parseInt(
                    n[2][0] +
                      ("*" == n[1][0] ? "12" : a(n[1][0], 2)) +
                      ("*" == n[0][0]
                        ? "*" == n[1][0]
                          ? "31"
                          : new Date(n[2][0], n[1][0], 0).getDate()
                        : a(n[0][0], 2)),
                    10
                  )
                );
            }),
            di.sort(),
            di.length > 0) &&
              ((ei = (di[0] + "").match(/([0-9]{4})([0-9]{2})([0-9]{2})/)),
              (c = parseInt(ei[1], 10)),
              (s = parseInt(ei[2], 10) - 1),
              (y = parseInt(ei[3], 10)));
            break;
          }
      if (d(c, s, y)) {
        for (; d(c); ) v ? (c++, (s = 0)) : (c--, (s = 11));
        for (; d(c, s); )
          v ? (s++, (y = 1)) : (s--, (y = new Date(c, s + 1, 0).getDate())),
            s > 11
              ? (c++, (s = 0), (y = 1))
              : 0 > s && (c--, (s = 11), (y = new Date(c, s + 1, 0).getDate()));
        for (; d(c, s, y); )
          v ? y++ : y--,
            (kt = new Date(c, s, y)),
            (c = kt.getFullYear()),
            (s = kt.getMonth()),
            (y = kt.getDate());
        kt = new Date(c, s, y);
        c = kt.getFullYear();
        s = kt.getMonth();
        y = kt.getDate();
      }
      if (
        ((oi = ti(
          u.val() || (r.settings.start_date ? r.settings.start_date : "")
        )),
        (oi &&
          r.settings.strict &&
          d(oi.getFullYear(), oi.getMonth(), oi.getDate()) &&
          u.val(""),
        t || (void 0 === v && void 0 === oi) || yi(void 0 !== v ? v : oi),
        !r.settings.always_visible) &&
          (t ||
            (r.settings.show_icon
              ? ("firefox" == wt.name &&
                  u.is('input[type="text"]') &&
                  "inline" == u.css("display") &&
                  u.css("display", "inline-block"),
                (ir = n(
                  '<span class="Zebra_DatePicker_Icon_Wrapper"></span>'
                ).css({
                  display: u.css("display"),
                  position:
                    "static" == u.css("position")
                      ? "relative"
                      : u.css("position"),
                  float: u.css("float"),
                  top: u.css("top"),
                  right: u.css("right"),
                  bottom: u.css("bottom"),
                  left: u.css("left"),
                })),
                u
                  .wrap(ir)
                  .css({
                    position: "relative",
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto",
                  }),
                (l = n(
                  '<button type="button" class="Zebra_DatePicker_Icon' +
                    ("disabled" == u.attr("disabled")
                      ? " Zebra_DatePicker_Icon_Disabled"
                      : "") +
                    '">Pick a date</button>'
                )),
                (r.icon = l),
                (ui = l.add(u)))
              : (ui = u),
            ui.bind("click", function (n) {
              n.preventDefault();
              u.attr("disabled") ||
                (o.hasClass("dp_visible") ? r.hide() : r.show());
            }),
            void 0 !== l && l.insertAfter(u)),
          void 0 !== l))
      ) {
        l.attr("style", "");
        r.settings.inside && l.addClass("Zebra_DatePicker_Icon_Inside");
        var rr = u.outerWidth(),
          ur = u.outerHeight(),
          fr = parseInt(u.css("marginLeft"), 10) || 0,
          er = parseInt(u.css("marginTop"), 10) || 0,
          hr = l.outerWidth(),
          or = l.outerHeight(),
          cr = parseInt(l.css("marginLeft"), 10) || 0,
          lr = parseInt(l.css("marginRight"), 10) || 0;
        l.css(
          r.settings.inside
            ? { top: er + (ur - or) / 2, left: fr + (rr - hr - lr) }
            : { top: er + (ur - or) / 2, left: fr + rr + cr }
        );
        l.removeClass(" Zebra_DatePicker_Icon_Disabled");
        "disabled" == u.attr("disabled") &&
          l.addClass("Zebra_DatePicker_Icon_Disabled");
      }
      ((ni =
        r.settings.show_select_today !== !1 &&
        n.inArray("days", k) > -1 &&
        !d(et, ct, bt)
          ? r.settings.show_select_today
          : !1),
      t) ||
        (n(window).bind("resize.Zebra_DatePicker_" + ut, function () {
          r.hide();
          void 0 !== l &&
            (clearTimeout(ci),
            (ci = setTimeout(function () {
              r.update();
            }, 100)));
        }),
        (sr =
          '<div class="Zebra_DatePicker"><table class="dp_header"><tr><td class="dp_previous">' +
          r.settings.header_navigation[0] +
          '</td><td class="dp_caption">&#032;</td><td class="dp_next">' +
          r.settings.header_navigation[1] +
          '</td></tr></table><table class="dp_daypicker"></table><table class="dp_monthpicker"></table><table class="dp_yearpicker"></table><table class="dp_footer"><tr><td class="dp_today"' +
          (r.settings.show_clear_date !== !1 ? ' style="width:50%"' : "") +
          ">" +
          ni +
          '</td><td class="dp_clear"' +
          (ni !== !1 ? ' style="width:50%"' : "") +
          ">" +
          r.settings.lang_clear_date +
          "</td></tr></table></div>"),
        (o = n(sr)),
        (r.datepicker = o),
        (ft = n("table.dp_header", o)),
        (b = n("table.dp_daypicker", o)),
        (nt = n("table.dp_monthpicker", o)),
        (tt = n("table.dp_yearpicker", o)),
        (yt = n("table.dp_footer", o)),
        (gt = n("td.dp_today", yt)),
        (ht = n("td.dp_clear", yt)),
        r.settings.always_visible
          ? u.attr("disabled") ||
            (r.settings.always_visible.append(o), r.show())
          : r.settings.container.append(o),
        o
          .delegate(
            "td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)",
            "mouseover",
            function () {
              n(this).addClass("dp_hover");
            }
          )
          .delegate(
            "td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)",
            "mouseout",
            function () {
              n(this).removeClass("dp_hover");
            }
          ),
        wi(n("td", ft)),
        n(".dp_previous", ft).bind("click", function () {
          "months" == p
            ? f--
            : "years" == p
            ? (f -= 12)
            : --e < 0 && ((e = 11), f--);
          st();
        }),
        n(".dp_caption", ft).bind("click", function () {
          p =
            "days" == p
              ? n.inArray("months", k) > -1
                ? "months"
                : n.inArray("years", k) > -1
                ? "years"
                : "days"
              : "months" == p
              ? n.inArray("years", k) > -1
                ? "years"
                : n.inArray("days", k) > -1
                ? "days"
                : "months"
              : n.inArray("days", k) > -1
              ? "days"
              : n.inArray("months", k) > -1
              ? "months"
              : "years";
          st();
        }),
        n(".dp_next", ft).bind("click", function () {
          "months" == p
            ? f++
            : "years" == p
            ? (f += 12)
            : 12 == ++e && ((e = 0), f++);
          st();
        }),
        b.delegate(
          "td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)",
          "click",
          function () {
            r.settings.select_other_months &&
            n(this).attr("class") &&
            null !==
              (ei = n(this)
                .attr("class")
                .match(
                  /date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/
                ))
              ? ii(ei[1], ei[2] - 1, ei[3], "days", n(this))
              : ii(f, e, h(n(this).html()), "days", n(this));
          }
        ),
        nt.delegate("td:not(.dp_disabled)", "click", function () {
          var t = n(this)
            .attr("class")
            .match(/dp\_month\_([0-9]+)/);
          e = h(t[1]);
          -1 == n.inArray("days", k)
            ? ii(f, e, 1, "months", n(this))
            : ((p = "days"), r.settings.always_visible && u.val(""), st());
        }),
        tt.delegate("td:not(.dp_disabled)", "click", function () {
          f = h(n(this).html());
          -1 == n.inArray("months", k)
            ? ii(f, 1, 1, "years", n(this))
            : ((p = "months"), r.settings.always_visible && u.val(""), st());
        }),
        n(gt).bind("click", function (t) {
          t.preventDefault();
          ii(et, ct, bt, "days", n(".dp_current", b));
          r.settings.always_visible && r.show();
          r.hide();
        }),
        n(ht).bind("click", function (t) {
          t.preventDefault();
          u.val("");
          r.settings.always_visible
            ? ((lt = null),
              (rt = null),
              (it = null),
              n("td.dp_selected", o).removeClass("dp_selected"))
            : ((lt = null), (rt = null), (it = null), (e = null), (f = null));
          r.hide();
          r.settings.onClear &&
            "function" == typeof r.settings.onClear &&
            r.settings.onClear.call(u, u);
        }),
        r.settings.always_visible ||
          (n(document).bind(
            "mousedown.Zebra_DatePicker_" +
              ut +
              ", touchstart.Zebra_DatePicker_" +
              ut,
            function (t) {
              if (o.hasClass("dp_visible")) {
                if (r.settings.show_icon && n(t.target).get(0) === l.get(0))
                  return !0;
                0 ===
                  n(t.target).parents().filter(".Zebra_DatePicker").length &&
                  r.hide();
              }
            }
          ),
          n(document).bind("keyup.Zebra_DatePicker_" + ut, function (n) {
            o.hasClass("dp_visible") && 27 == n.which && r.hide();
          })),
        st());
    };
    r.destroy = function () {
      void 0 !== r.icon && r.icon.remove();
      r.datepicker.remove();
      n(document).unbind("keyup.Zebra_DatePicker_" + ut);
      n(document).unbind("mousedown.Zebra_DatePicker_" + ut);
      n(window).unbind("resize.Zebra_DatePicker_" + ut);
      u.removeData("Zebra_DatePicker");
    };
    r.hide = function () {
      r.settings.always_visible ||
        (vi("hide"),
        o.removeClass("dp_visible").addClass("dp_hidden"),
        r.settings.onClose &&
          "function" == typeof r.settings.onClose &&
          r.settings.onClose.call(u, u));
    };
    r.show = function () {
      var t;
      if (
        ((p = r.settings.view),
        (t = ti(
          u.val() || (r.settings.start_date ? r.settings.start_date : "")
        )),
        t
          ? ((rt = t.getMonth()),
            (e = t.getMonth()),
            (it = t.getFullYear()),
            (f = t.getFullYear()),
            (lt = t.getDate()),
            d(it, rt, lt) && (r.settings.strict && u.val(""), (e = s), (f = c)))
          : ((e = s), (f = c)),
        st(),
        r.settings.always_visible)
      )
        o.removeClass("dp_hidden").addClass("dp_visible");
      else {
        if (r.settings.container.is("body")) {
          var w = o.outerWidth(),
            y = o.outerHeight(),
            h =
              (void 0 !== l
                ? l.offset().left + l.outerWidth(!0)
                : u.offset().left + u.outerWidth(!0)) + r.settings.offset[0],
            i =
              (void 0 !== l ? l.offset().top : u.offset().top) -
              y +
              r.settings.offset[1],
            b = n(window).width(),
            k = n(window).height(),
            a = n(window).scrollTop(),
            v = n(window).scrollLeft();
          "below" == r.settings.default_position &&
            (i =
              (void 0 !== l ? l.offset().top : u.offset().top) +
              r.settings.offset[1]);
          h + w > v + b && (h = v + b - w);
          v > h && (h = v);
          i + y > a + k && (i = a + k - y);
          a > i && (i = a);
          o.css({ left: h, top: i });
        } else o.css({ left: 0, top: 0 });
        o.removeClass("dp_hidden").addClass("dp_visible");
        vi();
      }
      r.settings.onOpen &&
        "function" == typeof r.settings.onOpen &&
        r.settings.onOpen.call(u, u);
    };
    r.update = function (t) {
      r.original_direction && (r.original_direction = r.direction);
      r.settings = n.extend(r.settings, t);
      fi(!0);
    };
    var ti = function (t) {
        var s;
        if (((t += ""), "" !== n.trim(t))) {
          for (
            var c = bi(r.settings.format),
              v = [
                "d",
                "D",
                "j",
                "l",
                "N",
                "S",
                "w",
                "F",
                "m",
                "M",
                "n",
                "Y",
                "y",
              ],
              f = [],
              i = [],
              p = null,
              u = null,
              l = 0;
            l < v.length;
            l++
          )
            (p = c.indexOf(v[l])) > -1 &&
              f.push({ character: v[l], position: p });
          if (
            (f.sort(function (n, t) {
              return n.position - t.position;
            }),
            n.each(f, function (n, t) {
              switch (t.character) {
                case "d":
                  i.push("0[1-9]|[12][0-9]|3[01]");
                  break;
                case "D":
                  i.push("[a-z]{3}");
                  break;
                case "j":
                  i.push("[1-9]|[12][0-9]|3[01]");
                  break;
                case "l":
                  i.push("[a-z]+");
                  break;
                case "N":
                  i.push("[1-7]");
                  break;
                case "S":
                  i.push("st|nd|rd|th");
                  break;
                case "w":
                  i.push("[0-6]");
                  break;
                case "F":
                  i.push("[a-z]+");
                  break;
                case "m":
                  i.push("0[1-9]|1[012]+");
                  break;
                case "M":
                  i.push("[a-z]{3}");
                  break;
                case "n":
                  i.push("[1-9]|1[012]");
                  break;
                case "Y":
                  i.push("[0-9]{4}");
                  break;
                case "y":
                  i.push("[0-9]{2}");
              }
            }),
            i.length &&
              (f.reverse(),
              n.each(f, function (n, t) {
                c = c.replace(t.character, "(" + i[i.length - n - 1] + ")");
              }),
              (i = new RegExp("^" + c + "$", "ig")),
              (u = i.exec(t))))
          ) {
            var w,
              b = new Date(),
              y = 1,
              e = b.getMonth() + 1,
              a = b.getFullYear(),
              k = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              d = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              o = !0;
            if (
              (f.reverse(),
              n.each(f, function (t, i) {
                if (!o) return !0;
                switch (i.character) {
                  case "m":
                  case "n":
                    e = h(u[t + 1]);
                    break;
                  case "d":
                  case "j":
                    y = h(u[t + 1]);
                    break;
                  case "D":
                  case "l":
                  case "F":
                  case "M":
                    w =
                      "D" == i.character || "l" == i.character
                        ? r.settings.days
                        : r.settings.months;
                    o = !1;
                    n.each(w, function (n, r) {
                      if (o) return !0;
                      if (
                        u[t + 1].toLowerCase() ==
                        r
                          .substring(
                            0,
                            "D" == i.character || "M" == i.character
                              ? 3
                              : r.length
                          )
                          .toLowerCase()
                      ) {
                        switch (i.character) {
                          case "D":
                            u[t + 1] = k[n].substring(0, 3);
                            break;
                          case "l":
                            u[t + 1] = k[n];
                            break;
                          case "F":
                            u[t + 1] = d[n];
                            e = n + 1;
                            break;
                          case "M":
                            u[t + 1] = d[n].substring(0, 3);
                            e = n + 1;
                        }
                        o = !0;
                      }
                    });
                    break;
                  case "Y":
                    a = h(u[t + 1]);
                    break;
                  case "y":
                    a = "19" + h(u[t + 1]);
                }
              }),
              o) &&
              ((s = new Date(a, (e || 1) - 1, y || 1)),
              s.getFullYear() == a &&
                s.getDate() == (y || 1) &&
                s.getMonth() == (e || 1) - 1)
            )
              return s;
          }
          return !1;
        }
      },
      wi = function (n) {
        "firefox" == wt.name
          ? n.css("MozUserSelect", "none")
          : "explorer" == wt.name
          ? n.bind("selectstart", function () {
              return !1;
            })
          : n.mousedown(function () {
              return !1;
            });
      },
      bi = function (n) {
        return n.replace(/([-.,*+?^${}()|[\]\/\\])/g, "\\$1");
      },
      ki = function (t) {
        for (
          var h,
            i = "",
            u = t.getDate(),
            e = t.getDay(),
            c = r.settings.days[e],
            f = t.getMonth() + 1,
            l = r.settings.months[f - 1],
            o = t.getFullYear() + "",
            s = 0;
          s < r.settings.format.length;
          s++
        ) {
          h = r.settings.format.charAt(s);
          switch (h) {
            case "y":
              o = o.substr(2);
            case "Y":
              i += o;
              break;
            case "m":
              f = a(f, 2);
            case "n":
              i += f;
              break;
            case "M":
              l =
                n.isArray(r.settings.months_abbr) &&
                void 0 !== r.settings.months_abbr[f - 1]
                  ? r.settings.months_abbr[f - 1]
                  : r.settings.months[f - 1].substr(0, 3);
            case "F":
              i += l;
              break;
            case "d":
              u = a(u, 2);
            case "j":
              i += u;
              break;
            case "D":
              c =
                n.isArray(r.settings.days_abbr) &&
                void 0 !== r.settings.days_abbr[e]
                  ? r.settings.days_abbr[e]
                  : r.settings.days[e].substr(0, 3);
            case "l":
              i += c;
              break;
            case "N":
              e++;
            case "w":
              i += e;
              break;
            case "S":
              i +=
                u % 10 == 1 && "11" != u
                  ? "st"
                  : u % 10 == 2 && "12" != u
                  ? "nd"
                  : u % 10 == 3 && "13" != u
                  ? "rd"
                  : "th";
              break;
            default:
              i += h;
          }
        }
        return i;
      },
      ai = function () {
        var c = new Date(f, e + 1, 0).getDate(),
          w = new Date(f, e, 1).getDay(),
          k = new Date(f, e, 0).getDate(),
          o = w - r.settings.first_day_of_week,
          i,
          t,
          u,
          p,
          s;
        for (
          o = 0 > o ? 7 + o : o,
            ei(r.settings.header_captions.days),
            i = "<tr>",
            r.settings.show_week_number &&
              (i += "<th>" + r.settings.show_week_number + "</th>"),
            t = 0;
          7 > t;
          t++
        )
          i +=
            "<th>" +
            (n.isArray(r.settings.days_abbr) &&
            void 0 !==
              r.settings.days_abbr[(r.settings.first_day_of_week + t) % 7]
              ? r.settings.days_abbr[(r.settings.first_day_of_week + t) % 7]
              : r.settings.days[(r.settings.first_day_of_week + t) % 7].substr(
                  0,
                  2
                )) +
            "</th>";
        for (i += "</tr><tr>", t = 0; 42 > t; t++) {
          if (
            (t > 0 && t % 7 == 0 && (i += "</tr><tr>"),
            t % 7 == 0 &&
              r.settings.show_week_number &&
              (i +=
                '<td class="dp_week_number">' +
                pi(new Date(f, e, t - o + 1)) +
                "</td>"),
            (u = t - o + 1),
            r.settings.select_other_months && (o > t || u > c))
          ) {
            var h = new Date(f, e, u),
              l = h.getFullYear(),
              v = h.getMonth(),
              y = h.getDate();
            h = l + a(v + 1, 2) + a(y, 2);
          }
          o > t
            ? (i +=
                '<td class="' +
                (r.settings.select_other_months && !d(l, v, y)
                  ? "dp_not_in_month_selectable date_" + h
                  : "dp_not_in_month") +
                '">' +
                (r.settings.select_other_months || r.settings.show_other_months
                  ? a(k - o + t + 1, r.settings.zero_pad ? 2 : 0)
                  : "&nbsp;") +
                "</td>")
            : u > c
            ? (i +=
                '<td class="' +
                (r.settings.select_other_months && !d(l, v, y)
                  ? "dp_not_in_month_selectable date_" + h
                  : "dp_not_in_month") +
                '">' +
                (r.settings.select_other_months || r.settings.show_other_months
                  ? a(u - c, r.settings.zero_pad ? 2 : 0)
                  : "&nbsp;") +
                "</td>")
            : ((p = (r.settings.first_day_of_week + t) % 7),
              (s = ""),
              d(f, e, u)
                ? (n.inArray(p, r.settings.weekend_days) > -1
                    ? (s = "dp_weekend_disabled")
                    : (s += " dp_disabled"),
                  e == ct &&
                    f == et &&
                    bt == u &&
                    (s += " dp_disabled_current"))
                : (n.inArray(p, r.settings.weekend_days) > -1 &&
                    (s = "dp_weekend"),
                  e == rt && f == it && lt == u && (s += " dp_selected"),
                  e == ct && f == et && bt == u && (s += " dp_current")),
              (i +=
                "<td" +
                ("" !== s ? ' class="' + n.trim(s) + '"' : "") +
                ">" +
                ((r.settings.zero_pad ? a(u, 2) : u) || "&nbsp;") +
                "</td>"));
        }
        i += "</tr>";
        b.html(n(i));
        r.settings.always_visible &&
          (oi = n(
            "td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)",
            b
          ));
        b.show();
      },
      di = function () {
        var i, t, u;
        for (
          ei(r.settings.header_captions.months), i = "<tr>", t = 0;
          12 > t;
          t++
        )
          t > 0 && t % 3 == 0 && (i += "</tr><tr>"),
            (u = "dp_month_" + t),
            d(f, t)
              ? (u += " dp_disabled")
              : rt !== !1 && rt == t && f == it
              ? (u += " dp_selected")
              : ct == t && et == f && (u += " dp_current"),
            (i +=
              '<td class="' +
              n.trim(u) +
              '">' +
              (n.isArray(r.settings.months_abbr) &&
              void 0 !== r.settings.months_abbr[t]
                ? r.settings.months_abbr[t]
                : r.settings.months[t].substr(0, 3)) +
              "</td>");
        i += "</tr>";
        nt.html(n(i));
        r.settings.always_visible && (si = n("td:not(.dp_disabled)", nt));
        nt.show();
      },
      gi = function () {
        var u, t, i;
        for (
          ei(r.settings.header_captions.years), u = "<tr>", t = 0;
          12 > t;
          t++
        )
          t > 0 && t % 3 == 0 && (u += "</tr><tr>"),
            (i = ""),
            d(f - 7 + t)
              ? (i += " dp_disabled")
              : it && it == f - 7 + t
              ? (i += " dp_selected")
              : et == f - 7 + t && (i += " dp_current"),
            (u +=
              "<td" +
              ("" !== n.trim(i) ? ' class="' + n.trim(i) + '"' : "") +
              ">" +
              (f - 7 + t) +
              "</td>");
        u += "</tr>";
        tt.html(n(u));
        r.settings.always_visible && (hi = n("td:not(.dp_disabled)", tt));
        tt.show();
      },
      vi = function (t) {
        var r, i;
        if ("explorer" == wt.name && 6 == wt.version) {
          kt ||
            ((r = h(o.css("zIndex")) - 1),
            (kt = n("<iframe>", {
              src: 'javascript:document.write("")',
              scrolling: "no",
              frameborder: 0,
              css: {
                zIndex: r,
                position: "absolute",
                top: -1e3,
                left: -1e3,
                width: o.outerWidth(),
                height: o.outerHeight(),
                filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)",
                display: "none",
              },
            })),
            n("body").append(kt));
          switch (t) {
            case "hide":
              kt.hide();
              break;
            default:
              i = o.offset();
              kt.css({ top: i.top, left: i.left, display: "block" });
          }
        }
      },
      d = function (t, i, u) {
        var e, l, o, f;
        return (void 0 === t || isNaN(t)) &&
          (void 0 === i || isNaN(i)) &&
          (void 0 === u || isNaN(u))
          ? !1
          : (n.isArray(r.settings.direction) ||
              0 !== h(r.settings.direction)) &&
            (((e = h(
              ri(
                t,
                "undefined" != typeof i ? a(i, 2) : "",
                "undefined" != typeof u ? a(u, 2) : ""
              )
            )),
            (l = (e + "").length),
            8 == l &&
              (("undefined" != typeof v && e < h(ri(c, a(s, 2), a(y, 2)))) ||
                ("undefined" != typeof w &&
                  e > h(ri(ot, a(vt, 2), a(dt, 2)))))) ||
              (6 == l &&
                (("undefined" != typeof v && e < h(ri(c, a(s, 2)))) ||
                  ("undefined" != typeof w && e > h(ri(ot, a(vt, 2)))))) ||
              (4 == l &&
                (("undefined" != typeof v && c > e) ||
                  ("undefined" != typeof w && e > ot))))
          ? !0
          : ("undefined" != typeof i && (i += 1),
            (o = !1),
            (f = !1),
            g &&
              n.each(g, function () {
                var r, f;
                if (
                  !o &&
                  ((r = this),
                  (n.inArray(t, r[2]) > -1 || n.inArray("*", r[2]) > -1) &&
                    (("undefined" != typeof i && n.inArray(i, r[1]) > -1) ||
                      n.inArray("*", r[1]) > -1) &&
                    (("undefined" != typeof u && n.inArray(u, r[0]) > -1) ||
                      n.inArray("*", r[0]) > -1) &&
                    ("*" == r[3] ||
                      ((f = new Date(t, i - 1, u).getDay()),
                      n.inArray(f, r[3]) > -1)))
                )
                  return (o = !0);
              }),
            at &&
              n.each(at, function () {
                var r, e;
                if (
                  !f &&
                  ((r = this),
                  (n.inArray(t, r[2]) > -1 || n.inArray("*", r[2]) > -1) &&
                    ((f = !0), "undefined" != typeof i))
                )
                  if (
                    ((f = !0),
                    n.inArray(i, r[1]) > -1 || n.inArray("*", r[1]) > -1)
                  ) {
                    if ("undefined" != typeof u)
                      if (
                        ((f = !0),
                        n.inArray(u, r[0]) > -1 || n.inArray("*", r[0]) > -1)
                      ) {
                        if (
                          "*" == r[3] ||
                          ((e = new Date(t, i - 1, u).getDay()),
                          n.inArray(e, r[3]) > -1)
                        )
                          return (f = !0);
                        f = !1;
                      } else f = !1;
                  } else f = !1;
              }),
            at && f ? !1 : g && o ? !0 : !1);
      },
      pt = function (n) {
        return (n + "").match(/^\-?[0-9]+$/) ? !0 : !1;
      },
      ei = function (t) {
        !isNaN(parseFloat(e)) &&
          isFinite(e) &&
          (t = t.replace(/\bm\b|\bn\b|\bF\b|\bM\b/, function (t) {
            switch (t) {
              case "m":
                return a(e + 1, 2);
              case "n":
                return e + 1;
              case "F":
                return r.settings.months[e];
              case "M":
                return n.isArray(r.settings.months_abbr) &&
                  void 0 !== r.settings.months_abbr[e]
                  ? r.settings.months_abbr[e]
                  : r.settings.months[e].substr(0, 3);
              default:
                return t;
            }
          }));
        !isNaN(parseFloat(f)) &&
          isFinite(f) &&
          (t = t
            .replace(/\bY\b/, f)
            .replace(/\by\b/, (f + "").substr(2))
            .replace(/\bY1\b/i, f - 7)
            .replace(/\bY2\b/i, f + 4));
        n(".dp_caption", ft).html(t);
      },
      st = function () {
        var t, i, s;
        "" === b.text() || "days" == p
          ? ("" === b.text()
              ? (r.settings.always_visible || o.css("left", -1e3),
                o.css("visibility", "visible"),
                ai(),
                (t = b.outerWidth()),
                (i = b.outerHeight()),
                nt.css({ width: t, height: i }),
                tt.css({ width: t, height: i }),
                ft.css("width", t),
                yt.css("width", t),
                o.css("visibility", "").addClass("dp_hidden"))
              : ai(),
            nt.hide(),
            tt.hide())
          : "months" == p
          ? (di(), b.hide(), tt.hide())
          : "years" == p && (gi(), b.hide(), nt.hide());
        r.settings.onChange &&
          "function" == typeof r.settings.onChange &&
          void 0 !== p &&
          ((s =
            "days" == p
              ? b.find(
                  "td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month)"
                )
              : "months" == p
              ? nt.find(
                  "td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month)"
                )
              : tt.find(
                  "td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month)"
                )),
          s.each(function () {
            var t;
            "days" == p
              ? n(this).hasClass("dp_not_in_month_selectable")
                ? ((t = n(this)
                    .attr("class")
                    .match(
                      /date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/
                    )),
                  n(this).data("date", t[1] + "-" + t[2] + "-" + t[3]))
                : n(this).data(
                    "date",
                    f + "-" + a(e + 1, 2) + "-" + a(h(n(this).text()), 2)
                  )
              : "months" == p
              ? ((t = n(this)
                  .attr("class")
                  .match(/dp\_month\_([0-9]+)/)),
                n(this).data("date", f + "-" + a(h(t[1]) + 1, 2)))
              : n(this).data("date", h(n(this).text()));
          }),
          r.settings.onChange.call(u, p, s, u));
        yt.show();
        r.settings.show_clear_date === !0 ||
        (0 === r.settings.show_clear_date && "" !== u.val()) ||
        (r.settings.always_visible && r.settings.show_clear_date !== !1)
          ? (ht.show(),
            ni
              ? (gt.css("width", "50%"), ht.css("width", "50%"))
              : (gt.hide(), ht.css("width", "100%")))
          : (ht.hide(), ni ? gt.show().css("width", "100%") : yt.hide());
      },
      ii = function (n, t, i, o, s) {
        var h = new Date(n, t, i, 12, 0, 0),
          l = "days" == o ? oi : "months" == o ? si : hi,
          c = ki(h);
        u.val(c);
        r.settings.always_visible &&
          ((rt = h.getMonth()),
          (e = h.getMonth()),
          (it = h.getFullYear()),
          (f = h.getFullYear()),
          (lt = h.getDate()),
          l.removeClass("dp_selected"),
          s.addClass("dp_selected"),
          "days" == o && s.hasClass("dp_not_in_month_selectable") && r.show());
        r.hide();
        yi(h);
        r.settings.onSelect &&
          "function" == typeof r.settings.onSelect &&
          r.settings.onSelect.call(
            u,
            c,
            n + "-" + a(t + 1, 2) + "-" + a(i, 2),
            h,
            u,
            pi(h)
          );
        u.focus();
      },
      ri = function () {
        for (var t = "", n = 0; n < arguments.length; n++)
          t += arguments[n] + "";
        return t;
      },
      a = function (n, t) {
        for (n += ""; n.length < t; ) n = "0" + n;
        return n;
      },
      h = function (n) {
        return parseInt(n, 10);
      },
      yi = function (t) {
        r.settings.pair &&
          n.each(r.settings.pair, function () {
            var r = n(this),
              i;
            r.data && r.data("Zebra_DatePicker")
              ? ((i = r.data("Zebra_DatePicker")),
                i.update({
                  reference_date: t,
                  direction:
                    0 === i.settings.direction ? 1 : i.settings.direction,
                }),
                i.settings.always_visible && i.show())
              : r.data("zdp_reference_date", t);
          });
      },
      pi = function (n) {
        var t,
          r,
          u,
          i,
          s,
          f,
          h,
          e,
          a,
          l = n.getFullYear(),
          c = n.getMonth() + 1,
          o = n.getDate();
        return (
          3 > c
            ? ((t = l - 1),
              (r = ((t / 4) | 0) - ((t / 100) | 0) + ((t / 400) | 0)),
              (u =
                (((t - 1) / 4) | 0) -
                (((t - 1) / 100) | 0) +
                (((t - 1) / 400) | 0)),
              (i = r - u),
              (s = 0),
              (f = o - 1 + 31 * (c - 1)))
            : ((t = l),
              (r = ((t / 4) | 0) - ((t / 100) | 0) + ((t / 400) | 0)),
              (u =
                (((t - 1) / 4) | 0) -
                (((t - 1) / 100) | 0) +
                (((t - 1) / 400) | 0)),
              (i = r - u),
              (s = i + 1),
              (f = o + (((153 * (c - 3) + 2) / 5) | 0) + 58 + i)),
          (h = (t + r) % 7),
          (o = (f + h - s) % 7),
          (e = f + 3 - o),
          (a =
            0 > e
              ? 53 - (((h - i) / 5) | 0)
              : e > 364 + i
              ? 1
              : ((e / 7) | 0) + 1)
        );
      },
      wt = {
        init: function () {
          this.name = this.searchString(this.dataBrowser) || "";
          this.version =
            this.searchVersion(navigator.userAgent) ||
            this.searchVersion(navigator.appVersion) ||
            "";
        },
        searchString: function (n) {
          for (var i, r, t = 0; t < n.length; t++)
            if (
              ((i = n[t].string),
              (r = n[t].prop),
              (this.versionSearchString = n[t].versionSearch || n[t].identity),
              i)
            ) {
              if (-1 != i.indexOf(n[t].subString)) return n[t].identity;
            } else if (r) return n[t].identity;
        },
        searchVersion: function (n) {
          var t = n.indexOf(this.versionSearchString);
          if (-1 != t)
            return parseFloat(
              n.substring(t + this.versionSearchString.length + 1)
            );
        },
        dataBrowser: [
          {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "firefox",
          },
          {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "explorer",
            versionSearch: "MSIE",
          },
        ],
      };
    wt.init();
    fi();
  };
  n.fn.Zebra_DatePicker = function (t) {
    return this.each(function () {
      void 0 !== n(this).data("Zebra_DatePicker") &&
        n(this).data("Zebra_DatePicker").destroy();
      var i = new n.Zebra_DatePicker(this, t);
      n(this).data("Zebra_DatePicker", i);
    });
  };
}),
  (function (n, t) {
    typeof exports == "object" && typeof module != "undefined"
      ? (module.exports = t())
      : typeof define == "function" && define.amd
      ? define(t)
      : (n.moment = t());
  })(this, function () {
    "use strict";
    function t() {
      return bf.apply(null, arguments);
    }
    function oh(n) {
      bf = n;
    }
    function ft(n) {
      return (
        n instanceof Array ||
        Object.prototype.toString.call(n) === "[object Array]"
      );
    }
    function vi(n) {
      return (
        n != null && Object.prototype.toString.call(n) === "[object Object]"
      );
    }
    function sh(n) {
      if (Object.getOwnPropertyNames)
        return Object.getOwnPropertyNames(n).length === 0;
      for (var t in n) if (n.hasOwnProperty(t)) return !1;
      return !0;
    }
    function b(n) {
      return n === void 0;
    }
    function dt(n) {
      return (
        typeof n == "number" ||
        Object.prototype.toString.call(n) === "[object Number]"
      );
    }
    function tr(n) {
      return (
        n instanceof Date ||
        Object.prototype.toString.call(n) === "[object Date]"
      );
    }
    function kf(n, t) {
      for (var r = [], i = 0; i < n.length; ++i) r.push(t(n[i], i));
      return r;
    }
    function l(n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }
    function wt(n, t) {
      for (var i in t) l(t, i) && (n[i] = t[i]);
      return (
        l(t, "toString") && (n.toString = t.toString),
        l(t, "valueOf") && (n.valueOf = t.valueOf),
        n
      );
    }
    function et(n, t, i, r) {
      return go(n, t, i, r, !0).utc();
    }
    function hh() {
      return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1,
      };
    }
    function u(n) {
      return n._pf == null && (n._pf = hh()), n._pf;
    }
    function fu(n) {
      if (n._isValid == null) {
        var t = u(n),
          r = df.call(t.parsedDateParts, function (n) {
            return n != null;
          }),
          i =
            !isNaN(n._d.getTime()) &&
            t.overflow < 0 &&
            !t.empty &&
            !t.invalidMonth &&
            !t.invalidWeekday &&
            !t.weekdayMismatch &&
            !t.nullInput &&
            !t.invalidFormat &&
            !t.userInvalidated &&
            (!t.meridiem || (t.meridiem && r));
        if (
          (n._strict &&
            (i =
              i &&
              t.charsLeftOver === 0 &&
              t.unusedTokens.length === 0 &&
              t.bigHour === undefined),
          Object.isFrozen != null && Object.isFrozen(n))
        )
          return i;
        n._isValid = i;
      }
      return n._isValid;
    }
    function ir(n) {
      var t = et(NaN);
      return n != null ? wt(u(t), n) : (u(t).userInvalidated = !0), t;
    }
    function eu(n, t) {
      var i, r, f;
      if (
        (b(t._isAMomentObject) || (n._isAMomentObject = t._isAMomentObject),
        b(t._i) || (n._i = t._i),
        b(t._f) || (n._f = t._f),
        b(t._l) || (n._l = t._l),
        b(t._strict) || (n._strict = t._strict),
        b(t._tzm) || (n._tzm = t._tzm),
        b(t._isUTC) || (n._isUTC = t._isUTC),
        b(t._offset) || (n._offset = t._offset),
        b(t._pf) || (n._pf = u(t)),
        b(t._locale) || (n._locale = t._locale),
        rr.length > 0)
      )
        for (i = 0; i < rr.length; i++)
          (r = rr[i]), (f = t[r]), b(f) || (n[r] = f);
      return n;
    }
    function yi(n) {
      eu(this, n);
      this._d = new Date(n._d != null ? n._d.getTime() : NaN);
      this.isValid() || (this._d = new Date(NaN));
      ur === !1 && ((ur = !0), t.updateOffset(this), (ur = !1));
    }
    function ot(n) {
      return n instanceof yi || (n != null && n._isAMomentObject != null);
    }
    function d(n) {
      return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
    }
    function f(n) {
      var t = +n,
        i = 0;
      return t !== 0 && isFinite(t) && (i = d(t)), i;
    }
    function gf(n, t, i) {
      for (
        var e = Math.min(n.length, t.length),
          o = Math.abs(n.length - t.length),
          u = 0,
          r = 0;
        r < e;
        r++
      )
        ((i && n[r] !== t[r]) || (!i && f(n[r]) !== f(t[r]))) && u++;
      return u + o;
    }
    function ne(n) {
      t.suppressDeprecationWarnings === !1 &&
        typeof console != "undefined" &&
        console.warn &&
        console.warn("Deprecation warning: " + n);
    }
    function g(n, i) {
      var r = !0;
      return wt(function () {
        var e, u, f, o;
        if (
          (t.deprecationHandler != null && t.deprecationHandler(null, n), r)
        ) {
          for (e = [], f = 0; f < arguments.length; f++) {
            if (((u = ""), typeof arguments[f] == "object")) {
              u += "\n[" + f + "] ";
              for (o in arguments[0]) u += o + ": " + arguments[0][o] + ", ";
              u = u.slice(0, -2);
            } else u = arguments[f];
            e.push(u);
          }
          ne(
            n +
              "\nArguments: " +
              Array.prototype.slice.call(e).join("") +
              "\n" +
              new Error().stack
          );
          r = !1;
        }
        return i.apply(this, arguments);
      }, i);
    }
    function te(n, i) {
      t.deprecationHandler != null && t.deprecationHandler(n, i);
      ou[n] || (ne(i), (ou[n] = !0));
    }
    function st(n) {
      return (
        n instanceof Function ||
        Object.prototype.toString.call(n) === "[object Function]"
      );
    }
    function ch(n) {
      var t;
      for (var i in n) (t = n[i]), st(t) ? (this[i] = t) : (this["_" + i] = t);
      this._config = n;
      this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
          "|" +
          /\d{1,2}/.source
      );
    }
    function ie(n, t) {
      var r = wt({}, n);
      for (var i in t)
        l(t, i) &&
          (vi(n[i]) && vi(t[i])
            ? ((r[i] = {}), wt(r[i], n[i]), wt(r[i], t[i]))
            : t[i] != null
            ? (r[i] = t[i])
            : delete r[i]);
      for (i in n) l(n, i) && !l(t, i) && vi(n[i]) && (r[i] = wt({}, r[i]));
      return r;
    }
    function su(n) {
      n != null && this.set(n);
    }
    function lh(n, t, i) {
      var r = this._calendar[n] || this._calendar.sameElse;
      return st(r) ? r.call(t, i) : r;
    }
    function ah(n) {
      var t = this._longDateFormat[n],
        i = this._longDateFormat[n.toUpperCase()];
      return t || !i
        ? t
        : ((this._longDateFormat[n] = i.replace(
            /MMMM|MM|DD|dddd/g,
            function (n) {
              return n.slice(1);
            }
          )),
          this._longDateFormat[n]);
    }
    function vh() {
      return this._invalidDate;
    }
    function yh(n) {
      return this._ordinal.replace("%d", n);
    }
    function ph(n, t, i, r) {
      var u = this._relativeTime[i];
      return st(u) ? u(n, t, i, r) : u.replace(/%d/i, n);
    }
    function wh(n, t) {
      var i = this._relativeTime[n > 0 ? "future" : "past"];
      return st(i) ? i(t) : i.replace(/%s/i, t);
    }
    function p(n, t) {
      var i = n.toLowerCase();
      ui[i] = ui[i + "s"] = ui[t] = n;
    }
    function nt(n) {
      return typeof n == "string" ? ui[n] || ui[n.toLowerCase()] : undefined;
    }
    function hu(n) {
      var r = {},
        t;
      for (var i in n) l(n, i) && ((t = nt(i)), t && (r[t] = n[i]));
      return r;
    }
    function w(n, t) {
      cu[n] = t;
    }
    function bh(n) {
      var t = [];
      for (var i in n) t.push({ unit: i, priority: cu[i] });
      return (
        t.sort(function (n, t) {
          return n.priority - t.priority;
        }),
        t
      );
    }
    function lt(n, t, i) {
      var r = "" + Math.abs(n),
        u = t - r.length,
        f = n >= 0;
      return (
        (f ? (i ? "+" : "") : "-") +
        Math.pow(10, Math.max(0, u)).toString().substr(1) +
        r
      );
    }
    function r(n, t, i, r) {
      var u = r;
      typeof r == "string" &&
        (u = function () {
          return this[r]();
        });
      n && (fi[n] = u);
      t &&
        (fi[t[0]] = function () {
          return lt(u.apply(this, arguments), t[1], t[2]);
        });
      i &&
        (fi[i] = function () {
          return this.localeData().ordinal(u.apply(this, arguments), n);
        });
    }
    function kh(n) {
      return n.match(/\[[\s\S]/)
        ? n.replace(/^\[|\]$/g, "")
        : n.replace(/\\/g, "");
    }
    function dh(n) {
      for (var t = n.match(ce), i = 0, r = t.length; i < r; i++)
        t[i] = fi[t[i]] ? fi[t[i]] : kh(t[i]);
      return function (i) {
        for (var f = "", u = 0; u < r; u++)
          f += st(t[u]) ? t[u].call(i, n) : t[u];
        return f;
      };
    }
    function er(n, t) {
      return n.isValid()
        ? ((t = le(t, n.localeData())), (lu[t] = lu[t] || dh(t)), lu[t](n))
        : n.localeData().invalidDate();
    }
    function le(n, t) {
      function r(n) {
        return t.longDateFormat(n) || n;
      }
      var i = 5;
      for (fr.lastIndex = 0; i >= 0 && fr.test(n); )
        (n = n.replace(fr, r)), (fr.lastIndex = 0), (i -= 1);
      return n;
    }
    function i(n, t, i) {
      yu[n] = st(t)
        ? t
        : function (n) {
            return n && i ? i : t;
          };
    }
    function nc(n, t) {
      return l(yu, n) ? yu[n](t._strict, t._locale) : new RegExp(tc(n));
    }
    function tc(n) {
      return gt(
        n
          .replace("\\", "")
          .replace(
            /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
            function (n, t, i, r, u) {
              return t || i || r || u;
            }
          )
      );
    }
    function gt(n) {
      return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function h(n, t) {
      var i,
        r = t;
      for (
        typeof n == "string" && (n = [n]),
          dt(t) &&
            (r = function (n, i) {
              i[t] = f(n);
            }),
          i = 0;
        i < n.length;
        i++
      )
        ar[n[i]] = r;
    }
    function wi(n, t) {
      h(n, function (n, i, r, u) {
        r._w = r._w || {};
        t(n, r._w, r, u);
      });
    }
    function ic(n, t, i) {
      t != null && l(ar, n) && ar[n](t, i._a, i, n);
    }
    function bi(n) {
      return vr(n) ? 366 : 365;
    }
    function vr(n) {
      return (n % 4 == 0 && n % 100 != 0) || n % 400 == 0;
    }
    function fc() {
      return vr(this.year());
    }
    function ei(n, i) {
      return function (r) {
        return r != null
          ? (we(this, n, r), t.updateOffset(this, i), this)
          : yr(this, n);
      };
    }
    function yr(n, t) {
      return n.isValid() ? n._d["get" + (n._isUTC ? "UTC" : "") + t]() : NaN;
    }
    function we(n, t, i) {
      n.isValid() &&
        !isNaN(i) &&
        (t === "FullYear" && vr(n.year()) && n.month() === 1 && n.date() === 29
          ? n._d["set" + (n._isUTC ? "UTC" : "") + t](
              i,
              n.month(),
              pr(i, n.month())
            )
          : n._d["set" + (n._isUTC ? "UTC" : "") + t](i));
    }
    function ec(n) {
      return ((n = nt(n)), st(this[n])) ? this[n]() : this;
    }
    function oc(n, t) {
      var r, i;
      if (typeof n == "object")
        for (n = hu(n), r = bh(n), i = 0; i < r.length; i++)
          this[r[i].unit](n[r[i].unit]);
      else if (((n = nt(n)), st(this[n]))) return this[n](t);
      return this;
    }
    function sc(n, t) {
      return ((n % t) + t) % t;
    }
    function pr(n, t) {
      if (isNaN(n) || isNaN(t)) return NaN;
      var i = sc(t, 12);
      return (
        (n += (t - i) / 12), i === 1 ? (vr(n) ? 29 : 28) : 31 - ((i % 7) % 2)
      );
    }
    function hc(n, t) {
      return n
        ? ft(this._months)
          ? this._months[n.month()]
          : this._months[
              (this._months.isFormat || wu).test(t) ? "format" : "standalone"
            ][n.month()]
        : ft(this._months)
        ? this._months
        : this._months.standalone;
    }
    function cc(n, t) {
      return n
        ? ft(this._monthsShort)
          ? this._monthsShort[n.month()]
          : this._monthsShort[wu.test(t) ? "format" : "standalone"][n.month()]
        : ft(this._monthsShort)
        ? this._monthsShort
        : this._monthsShort.standalone;
    }
    function lc(n, t, i) {
      var u,
        r,
        e,
        f = n.toLocaleLowerCase();
      if (!this._monthsParse)
        for (
          this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            u = 0;
          u < 12;
          ++u
        )
          (e = et([2e3, u])),
            (this._shortMonthsParse[u] = this.monthsShort(
              e,
              ""
            ).toLocaleLowerCase()),
            (this._longMonthsParse[u] = this.months(e, "").toLocaleLowerCase());
      return i
        ? t === "MMM"
          ? ((r = a.call(this._shortMonthsParse, f)), r !== -1 ? r : null)
          : ((r = a.call(this._longMonthsParse, f)), r !== -1 ? r : null)
        : t === "MMM"
        ? ((r = a.call(this._shortMonthsParse, f)), r !== -1)
          ? r
          : ((r = a.call(this._longMonthsParse, f)), r !== -1 ? r : null)
        : ((r = a.call(this._longMonthsParse, f)), r !== -1)
        ? r
        : ((r = a.call(this._shortMonthsParse, f)), r !== -1 ? r : null);
    }
    function ac(n, t, i) {
      var r, u, f;
      if (this._monthsParseExact) return lc.call(this, n, t, i);
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          r = 0;
        r < 12;
        r++
      )
        if (
          ((u = et([2e3, r])),
          i &&
            !this._longMonthsParse[r] &&
            ((this._longMonthsParse[r] = new RegExp(
              "^" + this.months(u, "").replace(".", "") + "$",
              "i"
            )),
            (this._shortMonthsParse[r] = new RegExp(
              "^" + this.monthsShort(u, "").replace(".", "") + "$",
              "i"
            ))),
          i ||
            this._monthsParse[r] ||
            ((f = "^" + this.months(u, "") + "|^" + this.monthsShort(u, "")),
            (this._monthsParse[r] = new RegExp(f.replace(".", ""), "i"))),
          i && t === "MMMM" && this._longMonthsParse[r].test(n)) ||
          (i && t === "MMM" && this._shortMonthsParse[r].test(n)) ||
          (!i && this._monthsParse[r].test(n))
        )
          return r;
    }
    function ke(n, t) {
      var i;
      if (!n.isValid()) return n;
      if (typeof t == "string")
        if (/^\d+$/.test(t)) t = f(t);
        else if (((t = n.localeData().monthsParse(t)), !dt(t))) return n;
      return (
        (i = Math.min(n.date(), pr(n.year(), t))),
        n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, i),
        n
      );
    }
    function de(n) {
      return n != null
        ? (ke(this, n), t.updateOffset(this, !0), this)
        : yr(this, "Month");
    }
    function vc() {
      return pr(this.year(), this.month());
    }
    function yc(n) {
      return this._monthsParseExact
        ? (l(this, "_monthsRegex") || to.call(this),
          n ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = ge),
          this._monthsShortStrictRegex && n
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex);
    }
    function pc(n) {
      return this._monthsParseExact
        ? (l(this, "_monthsRegex") || to.call(this),
          n ? this._monthsStrictRegex : this._monthsRegex)
        : (l(this, "_monthsRegex") || (this._monthsRegex = no),
          this._monthsStrictRegex && n
            ? this._monthsStrictRegex
            : this._monthsRegex);
    }
    function to() {
      function f(n, t) {
        return t.length - n.length;
      }
      for (var i = [], r = [], t = [], u, n = 0; n < 12; n++)
        (u = et([2e3, n])),
          i.push(this.monthsShort(u, "")),
          r.push(this.months(u, "")),
          t.push(this.months(u, "")),
          t.push(this.monthsShort(u, ""));
      for (i.sort(f), r.sort(f), t.sort(f), n = 0; n < 12; n++)
        (i[n] = gt(i[n])), (r[n] = gt(r[n]));
      for (n = 0; n < 24; n++) t[n] = gt(t[n]);
      this._monthsRegex = new RegExp("^(" + t.join("|") + ")", "i");
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
      this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
    }
    function wc(n, t, i, r, u, f, e) {
      var o;
      return (
        n < 100 && n >= 0
          ? ((o = new Date(n + 400, t, i, r, u, f, e)),
            isFinite(o.getFullYear()) && o.setFullYear(n))
          : (o = new Date(n, t, i, r, u, f, e)),
        o
      );
    }
    function ki(n) {
      var t, i;
      return (
        n < 100 && n >= 0
          ? ((i = Array.prototype.slice.call(arguments)),
            (i[0] = n + 400),
            (t = new Date(Date.UTC.apply(null, i))),
            isFinite(t.getUTCFullYear()) && t.setUTCFullYear(n))
          : (t = new Date(Date.UTC.apply(null, arguments))),
        t
      );
    }
    function wr(n, t, i) {
      var r = 7 + t - i,
        u = (7 + ki(n, 0, r).getUTCDay() - t) % 7;
      return -u + r - 1;
    }
    function io(n, t, i, r, u) {
      var s = (7 + i - r) % 7,
        h = wr(n, r, u),
        f = 1 + 7 * (t - 1) + s + h,
        e,
        o;
      return (
        f <= 0
          ? ((e = n - 1), (o = bi(e) + f))
          : f > bi(n)
          ? ((e = n + 1), (o = f - bi(n)))
          : ((e = n), (o = f)),
        { year: e, dayOfYear: o }
      );
    }
    function di(n, t, i) {
      var e = wr(n.year(), t, i),
        r = Math.floor((n.dayOfYear() - e - 1) / 7) + 1,
        f,
        u;
      return (
        r < 1
          ? ((u = n.year() - 1), (f = r + ti(u, t, i)))
          : r > ti(n.year(), t, i)
          ? ((f = r - ti(n.year(), t, i)), (u = n.year() + 1))
          : ((u = n.year()), (f = r)),
        { week: f, year: u }
      );
    }
    function ti(n, t, i) {
      var r = wr(n, t, i),
        u = wr(n + 1, t, i);
      return (bi(n) - r + u) / 7;
    }
    function bc(n) {
      return di(n, this._week.dow, this._week.doy).week;
    }
    function kc() {
      return this._week.dow;
    }
    function dc() {
      return this._week.doy;
    }
    function gc(n) {
      var t = this.localeData().week(this);
      return n == null ? t : this.add((n - t) * 7, "d");
    }
    function nl(n) {
      var t = di(this, 1, 4).week;
      return n == null ? t : this.add((n - t) * 7, "d");
    }
    function tl(n, t) {
      return typeof n != "string"
        ? n
        : isNaN(n)
        ? ((n = t.weekdaysParse(n)), typeof n == "number")
          ? n
          : null
        : parseInt(n, 10);
    }
    function il(n, t) {
      return typeof n == "string"
        ? t.weekdaysParse(n) % 7 || 7
        : isNaN(n)
        ? null
        : n;
    }
    function ku(n, t) {
      return n.slice(t, 7).concat(n.slice(0, t));
    }
    function rl(n, t) {
      var i = ft(this._weekdays)
        ? this._weekdays
        : this._weekdays[
            n && n !== !0 && this._weekdays.isFormat.test(t)
              ? "format"
              : "standalone"
          ];
      return n === !0 ? ku(i, this._week.dow) : n ? i[n.day()] : i;
    }
    function ul(n) {
      return n === !0
        ? ku(this._weekdaysShort, this._week.dow)
        : n
        ? this._weekdaysShort[n.day()]
        : this._weekdaysShort;
    }
    function fl(n) {
      return n === !0
        ? ku(this._weekdaysMin, this._week.dow)
        : n
        ? this._weekdaysMin[n.day()]
        : this._weekdaysMin;
    }
    function el(n, t, i) {
      var f,
        r,
        e,
        u = n.toLocaleLowerCase();
      if (!this._weekdaysParse)
        for (
          this._weekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._minWeekdaysParse = [],
            f = 0;
          f < 7;
          ++f
        )
          (e = et([2e3, 1]).day(f)),
            (this._minWeekdaysParse[f] = this.weekdaysMin(
              e,
              ""
            ).toLocaleLowerCase()),
            (this._shortWeekdaysParse[f] = this.weekdaysShort(
              e,
              ""
            ).toLocaleLowerCase()),
            (this._weekdaysParse[f] = this.weekdays(e, "").toLocaleLowerCase());
      return i
        ? t === "dddd"
          ? ((r = a.call(this._weekdaysParse, u)), r !== -1 ? r : null)
          : t === "ddd"
          ? ((r = a.call(this._shortWeekdaysParse, u)), r !== -1 ? r : null)
          : ((r = a.call(this._minWeekdaysParse, u)), r !== -1 ? r : null)
        : t === "dddd"
        ? ((r = a.call(this._weekdaysParse, u)), r !== -1)
          ? r
          : ((r = a.call(this._shortWeekdaysParse, u)), r !== -1)
          ? r
          : ((r = a.call(this._minWeekdaysParse, u)), r !== -1 ? r : null)
        : t === "ddd"
        ? ((r = a.call(this._shortWeekdaysParse, u)), r !== -1)
          ? r
          : ((r = a.call(this._weekdaysParse, u)), r !== -1)
          ? r
          : ((r = a.call(this._minWeekdaysParse, u)), r !== -1 ? r : null)
        : ((r = a.call(this._minWeekdaysParse, u)), r !== -1)
        ? r
        : ((r = a.call(this._weekdaysParse, u)), r !== -1)
        ? r
        : ((r = a.call(this._shortWeekdaysParse, u)), r !== -1 ? r : null);
    }
    function ol(n, t, i) {
      var r, u, f;
      if (this._weekdaysParseExact) return el.call(this, n, t, i);
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          r = 0;
        r < 7;
        r++
      )
        if (
          ((u = et([2e3, 1]).day(r)),
          i &&
            !this._fullWeekdaysParse[r] &&
            ((this._fullWeekdaysParse[r] = new RegExp(
              "^" + this.weekdays(u, "").replace(".", "\\.?") + "$",
              "i"
            )),
            (this._shortWeekdaysParse[r] = new RegExp(
              "^" + this.weekdaysShort(u, "").replace(".", "\\.?") + "$",
              "i"
            )),
            (this._minWeekdaysParse[r] = new RegExp(
              "^" + this.weekdaysMin(u, "").replace(".", "\\.?") + "$",
              "i"
            ))),
          this._weekdaysParse[r] ||
            ((f =
              "^" +
              this.weekdays(u, "") +
              "|^" +
              this.weekdaysShort(u, "") +
              "|^" +
              this.weekdaysMin(u, "")),
            (this._weekdaysParse[r] = new RegExp(f.replace(".", ""), "i"))),
          i && t === "dddd" && this._fullWeekdaysParse[r].test(n)) ||
          (i && t === "ddd" && this._shortWeekdaysParse[r].test(n)) ||
          (i && t === "dd" && this._minWeekdaysParse[r].test(n)) ||
          (!i && this._weekdaysParse[r].test(n))
        )
          return r;
    }
    function sl(n) {
      if (!this.isValid()) return n != null ? this : NaN;
      var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return n != null
        ? ((n = tl(n, this.localeData())), this.add(n - t, "d"))
        : t;
    }
    function hl(n) {
      if (!this.isValid()) return n != null ? this : NaN;
      var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return n == null ? t : this.add(n - t, "d");
    }
    function cl(n) {
      if (!this.isValid()) return n != null ? this : NaN;
      if (n != null) {
        var t = il(n, this.localeData());
        return this.day(this.day() % 7 ? t : t - 7);
      }
      return this.day() || 7;
    }
    function ll(n) {
      return this._weekdaysParseExact
        ? (l(this, "_weekdaysRegex") || gu.call(this),
          n ? this._weekdaysStrictRegex : this._weekdaysRegex)
        : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = eo),
          this._weekdaysStrictRegex && n
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex);
    }
    function al(n) {
      return this._weekdaysParseExact
        ? (l(this, "_weekdaysRegex") || gu.call(this),
          n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = oo),
          this._weekdaysShortStrictRegex && n
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex);
    }
    function vl(n) {
      return this._weekdaysParseExact
        ? (l(this, "_weekdaysRegex") || gu.call(this),
          n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = so),
          this._weekdaysMinStrictRegex && n
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex);
    }
    function gu() {
      function u(n, t) {
        return t.length - n.length;
      }
      for (var e = [], i = [], r = [], t = [], f, o, s, h, n = 0; n < 7; n++)
        (f = et([2e3, 1]).day(n)),
          (o = this.weekdaysMin(f, "")),
          (s = this.weekdaysShort(f, "")),
          (h = this.weekdays(f, "")),
          e.push(o),
          i.push(s),
          r.push(h),
          t.push(o),
          t.push(s),
          t.push(h);
      for (e.sort(u), i.sort(u), r.sort(u), t.sort(u), n = 0; n < 7; n++)
        (i[n] = gt(i[n])), (r[n] = gt(r[n])), (t[n] = gt(t[n]));
      this._weekdaysRegex = new RegExp("^(" + t.join("|") + ")", "i");
      this._weekdaysShortRegex = this._weekdaysRegex;
      this._weekdaysMinRegex = this._weekdaysRegex;
      this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
      this._weekdaysShortStrictRegex = new RegExp(
        "^(" + i.join("|") + ")",
        "i"
      );
      this._weekdaysMinStrictRegex = new RegExp("^(" + e.join("|") + ")", "i");
    }
    function nf() {
      return this.hours() % 12 || 12;
    }
    function yl() {
      return this.hours() || 24;
    }
    function ho(n, t) {
      r(n, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), t);
      });
    }
    function co(n, t) {
      return t._meridiemParse;
    }
    function pl(n) {
      return (n + "").toLowerCase().charAt(0) === "p";
    }
    function wl(n, t, i) {
      return n > 11 ? (i ? "pm" : "PM") : i ? "am" : "AM";
    }
    function vo(n) {
      return n ? n.toLowerCase().replace("_", "-") : n;
    }
    function kl(n) {
      for (var r = 0, i, t, f, u; r < n.length; ) {
        for (
          u = vo(n[r]).split("-"),
            i = u.length,
            t = vo(n[r + 1]),
            t = t ? t.split("-") : null;
          i > 0;

        ) {
          if (((f = br(u.slice(0, i).join("-"))), f)) return f;
          if (t && t.length >= i && gf(u, t, !0) >= i - 1) break;
          i--;
        }
        r++;
      }
      return nr;
    }
    function br(n) {
      var t = null,
        i;
      if (!y[n] && typeof module != "undefined" && module && module.exports)
        try {
          t = nr._abbr;
          i = require;
          i("./locale/" + n);
          oi(t);
        } catch (r) {}
      return y[n];
    }
    function oi(n, t) {
      var i;
      return (
        n &&
          ((i = b(t) ? bt(n) : tf(n, t)),
          i
            ? (nr = i)
            : typeof console != "undefined" &&
              console.warn &&
              console.warn(
                "Locale " + n + " not found. Did you forget to load it?"
              )),
        nr._abbr
      );
    }
    function tf(n, t) {
      if (t !== null) {
        var r,
          i = ao;
        if (((t.abbr = n), y[n] != null))
          te(
            "defineLocaleOverride",
            "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
          ),
            (i = y[n]._config);
        else if (t.parentLocale != null)
          if (y[t.parentLocale] != null) i = y[t.parentLocale]._config;
          else if (((r = br(t.parentLocale)), r != null)) i = r._config;
          else
            return (
              gi[t.parentLocale] || (gi[t.parentLocale] = []),
              gi[t.parentLocale].push({ name: n, config: t }),
              null
            );
        return (
          (y[n] = new su(ie(i, t))),
          gi[n] &&
            gi[n].forEach(function (n) {
              tf(n.name, n.config);
            }),
          oi(n),
          y[n]
        );
      }
      return delete y[n], null;
    }
    function dl(n, t) {
      if (t != null) {
        var i,
          r,
          u = ao;
        r = br(n);
        r != null && (u = r._config);
        t = ie(u, t);
        i = new su(t);
        i.parentLocale = y[n];
        y[n] = i;
        oi(n);
      } else y[n] != null && (y[n].parentLocale != null ? (y[n] = y[n].parentLocale) : y[n] != null && delete y[n]);
      return y[n];
    }
    function bt(n) {
      var t;
      if ((n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n))
        return nr;
      if (!ft(n)) {
        if (((t = br(n)), t)) return t;
        n = [n];
      }
      return kl(n);
    }
    function gl() {
      return re(y);
    }
    function rf(n) {
      var i,
        t = n._a;
      return (
        t &&
          u(n).overflow === -2 &&
          ((i =
            t[at] < 0 || t[at] > 11
              ? at
              : t[ht] < 1 || t[ht] > pr(t[tt], t[at])
              ? ht
              : t[v] < 0 ||
                t[v] > 24 ||
                (t[v] === 24 && (t[it] !== 0 || t[vt] !== 0 || t[ni] !== 0))
              ? v
              : t[it] < 0 || t[it] > 59
              ? it
              : t[vt] < 0 || t[vt] > 59
              ? vt
              : t[ni] < 0 || t[ni] > 999
              ? ni
              : -1),
          u(n)._overflowDayOfYear && (i < tt || i > ht) && (i = ht),
          u(n)._overflowWeeks && i === -1 && (i = rc),
          u(n)._overflowWeekday && i === -1 && (i = uc),
          (u(n).overflow = i)),
        n
      );
    }
    function si(n, t, i) {
      return n != null ? n : t != null ? t : i;
    }
    function na(n) {
      var i = new Date(t.now());
      return n._useUTC
        ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()]
        : [i.getFullYear(), i.getMonth(), i.getDate()];
    }
    function uf(n) {
      var t,
        i,
        r = [],
        f,
        o,
        e;
      if (!n._d) {
        for (
          f = na(n),
            n._w && n._a[ht] == null && n._a[at] == null && ta(n),
            n._dayOfYear != null &&
              ((e = si(n._a[tt], f[tt])),
              (n._dayOfYear > bi(e) || n._dayOfYear === 0) &&
                (u(n)._overflowDayOfYear = !0),
              (i = ki(e, 0, n._dayOfYear)),
              (n._a[at] = i.getUTCMonth()),
              (n._a[ht] = i.getUTCDate())),
            t = 0;
          t < 3 && n._a[t] == null;
          ++t
        )
          n._a[t] = r[t] = f[t];
        for (; t < 7; t++)
          n._a[t] = r[t] = n._a[t] == null ? (t === 2 ? 1 : 0) : n._a[t];
        n._a[v] === 24 &&
          n._a[it] === 0 &&
          n._a[vt] === 0 &&
          n._a[ni] === 0 &&
          ((n._nextDay = !0), (n._a[v] = 0));
        n._d = (n._useUTC ? ki : wc).apply(null, r);
        o = n._useUTC ? n._d.getUTCDay() : n._d.getDay();
        n._tzm != null && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
        n._nextDay && (n._a[v] = 24);
        n._w &&
          typeof n._w.d != "undefined" &&
          n._w.d !== o &&
          (u(n).weekdayMismatch = !0);
      }
    }
    function ta(n) {
      var t, o, f, i, r, e, h, s, l;
      t = n._w;
      t.GG != null || t.W != null || t.E != null
        ? ((r = 1),
          (e = 4),
          (o = si(t.GG, n._a[tt], di(c(), 1, 4).year)),
          (f = si(t.W, 1)),
          (i = si(t.E, 1)),
          (i < 1 || i > 7) && (s = !0))
        : ((r = n._locale._week.dow),
          (e = n._locale._week.doy),
          (l = di(c(), r, e)),
          (o = si(t.gg, n._a[tt], l.year)),
          (f = si(t.w, l.week)),
          t.d != null
            ? ((i = t.d), (i < 0 || i > 6) && (s = !0))
            : t.e != null
            ? ((i = t.e + r), (t.e < 0 || t.e > 6) && (s = !0))
            : (i = r));
      f < 1 || f > ti(o, r, e)
        ? (u(n)._overflowWeeks = !0)
        : s != null
        ? (u(n)._overflowWeekday = !0)
        : ((h = io(o, f, i, r, e)),
          (n._a[tt] = h.year),
          (n._dayOfYear = h.dayOfYear));
    }
    function yo(n) {
      var t,
        r,
        o = n._i,
        i = ia.exec(o) || ra.exec(o),
        s,
        e,
        f,
        h;
      if (i) {
        for (u(n).iso = !0, t = 0, r = kr.length; t < r; t++)
          if (kr[t][1].exec(i[1])) {
            e = kr[t][0];
            s = kr[t][2] !== !1;
            break;
          }
        if (e == null) {
          n._isValid = !1;
          return;
        }
        if (i[3]) {
          for (t = 0, r = ff.length; t < r; t++)
            if (ff[t][1].exec(i[3])) {
              f = (i[2] || " ") + ff[t][0];
              break;
            }
          if (f == null) {
            n._isValid = !1;
            return;
          }
        }
        if (!s && f != null) {
          n._isValid = !1;
          return;
        }
        if (i[4])
          if (ua.exec(i[4])) h = "Z";
          else {
            n._isValid = !1;
            return;
          }
        n._f = e + (f || "") + (h || "");
        ef(n);
      } else n._isValid = !1;
    }
    function ea(n, t, i, r, u, f) {
      var e = [
        oa(n),
        bu.indexOf(t),
        parseInt(i, 10),
        parseInt(r, 10),
        parseInt(u, 10),
      ];
      return f && e.push(parseInt(f, 10)), e;
    }
    function oa(n) {
      var t = parseInt(n, 10);
      return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
    }
    function sa(n) {
      return n
        .replace(/\([^)]*\)|[\n\t]/g, " ")
        .replace(/(\s\s+)/g, " ")
        .replace(/^\s\s*/, "")
        .replace(/\s\s*$/, "");
    }
    function ha(n, t, i) {
      if (n) {
        var r = du.indexOf(n),
          f = new Date(t[0], t[1], t[2]).getDay();
        if (r !== f) return (u(i).weekdayMismatch = !0), (i._isValid = !1), !1;
      }
      return !0;
    }
    function ca(n, t, i) {
      if (n) return wo[n];
      if (t) return 0;
      var r = parseInt(i, 10),
        u = r % 100,
        f = (r - u) / 100;
      return f * 60 + u;
    }
    function bo(n) {
      var t = po.exec(sa(n._i)),
        i;
      if (t) {
        if (((i = ea(t[4], t[3], t[2], t[5], t[6], t[7])), !ha(t[1], i, n)))
          return;
        n._a = i;
        n._tzm = ca(t[8], t[9], t[10]);
        n._d = ki.apply(null, n._a);
        n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
        u(n).rfc2822 = !0;
      } else n._isValid = !1;
    }
    function la(n) {
      var i = fa.exec(n._i);
      if (i !== null) {
        n._d = new Date(+i[1]);
        return;
      }
      if ((yo(n), n._isValid === !1)) delete n._isValid;
      else return;
      if ((bo(n), n._isValid === !1)) delete n._isValid;
      else return;
      t.createFromInputFallback(n);
    }
    function ef(n) {
      if (n._f === t.ISO_8601) {
        yo(n);
        return;
      }
      if (n._f === t.RFC_2822) {
        bo(n);
        return;
      }
      n._a = [];
      u(n).empty = !0;
      for (
        var i = "" + n._i,
          r,
          f,
          s,
          c = i.length,
          h = 0,
          o = le(n._f, n._locale).match(ce) || [],
          e = 0;
        e < o.length;
        e++
      )
        (f = o[e]),
          (r = (i.match(nc(f, n)) || [])[0]),
          r &&
            ((s = i.substr(0, i.indexOf(r))),
            s.length > 0 && u(n).unusedInput.push(s),
            (i = i.slice(i.indexOf(r) + r.length)),
            (h += r.length)),
          fi[f]
            ? (r ? (u(n).empty = !1) : u(n).unusedTokens.push(f), ic(f, r, n))
            : n._strict && !r && u(n).unusedTokens.push(f);
      u(n).charsLeftOver = c - h;
      i.length > 0 && u(n).unusedInput.push(i);
      n._a[v] <= 12 &&
        u(n).bigHour === !0 &&
        n._a[v] > 0 &&
        (u(n).bigHour = undefined);
      u(n).parsedDateParts = n._a.slice(0);
      u(n).meridiem = n._meridiem;
      n._a[v] = aa(n._locale, n._a[v], n._meridiem);
      uf(n);
      rf(n);
    }
    function aa(n, t, i) {
      var r;
      return i == null
        ? t
        : n.meridiemHour != null
        ? n.meridiemHour(t, i)
        : n.isPM != null
        ? ((r = n.isPM(i)),
          r && t < 12 && (t += 12),
          r || t !== 12 || (t = 0),
          t)
        : t;
    }
    function va(n) {
      var t, e, f, r, i;
      if (n._f.length === 0) {
        u(n).invalidFormat = !0;
        n._d = new Date(NaN);
        return;
      }
      for (r = 0; r < n._f.length; r++)
        ((i = 0),
        (t = eu({}, n)),
        n._useUTC != null && (t._useUTC = n._useUTC),
        (t._f = n._f[r]),
        ef(t),
        fu(t)) &&
          ((i += u(t).charsLeftOver),
          (i += u(t).unusedTokens.length * 10),
          (u(t).score = i),
          (f == null || i < f) && ((f = i), (e = t)));
      wt(n, e || t);
    }
    function ya(n) {
      if (!n._d) {
        var t = hu(n._i);
        n._a = kf(
          [
            t.year,
            t.month,
            t.day || t.date,
            t.hour,
            t.minute,
            t.second,
            t.millisecond,
          ],
          function (n) {
            return n && parseInt(n, 10);
          }
        );
        uf(n);
      }
    }
    function pa(n) {
      var t = new yi(rf(ko(n)));
      return t._nextDay && (t.add(1, "d"), (t._nextDay = undefined)), t;
    }
    function ko(n) {
      var t = n._i,
        i = n._f;
      return ((n._locale = n._locale || bt(n._l)),
      t === null || (i === undefined && t === ""))
        ? ir({ nullInput: !0 })
        : (typeof t == "string" && (n._i = t = n._locale.preparse(t)), ot(t))
        ? new yi(rf(t))
        : (tr(t) ? (n._d = t) : ft(i) ? va(n) : i ? ef(n) : wa(n),
          fu(n) || (n._d = null),
          n);
    }
    function wa(n) {
      var i = n._i;
      b(i)
        ? (n._d = new Date(t.now()))
        : tr(i)
        ? (n._d = new Date(i.valueOf()))
        : typeof i == "string"
        ? la(n)
        : ft(i)
        ? ((n._a = kf(i.slice(0), function (n) {
            return parseInt(n, 10);
          })),
          uf(n))
        : vi(i)
        ? ya(n)
        : dt(i)
        ? (n._d = new Date(i))
        : t.createFromInputFallback(n);
    }
    function go(n, t, i, r, u) {
      var f = {};
      return (
        (i === !0 || i === !1) && ((r = i), (i = undefined)),
        ((vi(n) && sh(n)) || (ft(n) && n.length === 0)) && (n = undefined),
        (f._isAMomentObject = !0),
        (f._useUTC = f._isUTC = u),
        (f._l = i),
        (f._i = n),
        (f._f = t),
        (f._strict = r),
        pa(f)
      );
    }
    function c(n, t, i, r) {
      return go(n, t, i, r, !1);
    }
    function is(n, t) {
      var r, i;
      if ((t.length === 1 && ft(t[0]) && (t = t[0]), !t.length)) return c();
      for (r = t[0], i = 1; i < t.length; ++i)
        (!t[i].isValid() || t[i][n](r)) && (r = t[i]);
      return r;
    }
    function ba() {
      var n = [].slice.call(arguments, 0);
      return is("isBefore", n);
    }
    function ka() {
      var n = [].slice.call(arguments, 0);
      return is("isAfter", n);
    }
    function da(n) {
      var i, r, t;
      for (i in n)
        if (!(a.call(hi, i) !== -1 && (n[i] == null || !isNaN(n[i]))))
          return !1;
      for (r = !1, t = 0; t < hi.length; ++t)
        if (n[hi[t]]) {
          if (r) return !1;
          parseFloat(n[hi[t]]) !== f(n[hi[t]]) && (r = !0);
        }
      return !0;
    }
    function ga() {
      return this._isValid;
    }
    function nv() {
      return rt(NaN);
    }
    function dr(n) {
      var t = hu(n),
        i = t.year || 0,
        r = t.quarter || 0,
        u = t.month || 0,
        f = t.week || t.isoWeek || 0,
        e = t.day || 0,
        o = t.hour || 0,
        s = t.minute || 0,
        h = t.second || 0,
        c = t.millisecond || 0;
      this._isValid = da(t);
      this._milliseconds = +c + h * 1e3 + s * 6e4 + o * 36e5;
      this._days = +e + f * 7;
      this._months = +u + r * 3 + i * 12;
      this._data = {};
      this._locale = bt();
      this._bubble();
    }
    function of(n) {
      return n instanceof dr;
    }
    function sf(n) {
      return n < 0 ? Math.round(-1 * n) * -1 : Math.round(n);
    }
    function us(n, t) {
      r(n, 0, 0, function () {
        var n = this.utcOffset(),
          i = "+";
        return (
          n < 0 && ((n = -n), (i = "-")),
          i + lt(~~(n / 60), 2) + t + lt(~~n % 60, 2)
        );
      });
    }
    function hf(n, t) {
      var i = (t || "").match(n);
      if (i === null) return null;
      var e = i[i.length - 1] || [],
        r = (e + "").match(fs) || ["-", 0, 0],
        u = +(r[1] * 60) + f(r[2]);
      return u === 0 ? 0 : r[0] === "+" ? u : -u;
    }
    function cf(n, i) {
      var r, u;
      return i._isUTC
        ? ((r = i.clone()),
          (u = (ot(n) || tr(n) ? n.valueOf() : c(n).valueOf()) - r.valueOf()),
          r._d.setTime(r._d.valueOf() + u),
          t.updateOffset(r, !1),
          r)
        : c(n).local();
    }
    function lf(n) {
      return -Math.round(n._d.getTimezoneOffset() / 15) * 15;
    }
    function tv(n, i, r) {
      var u = this._offset || 0,
        f;
      if (!this.isValid()) return n != null ? this : NaN;
      if (n != null) {
        if (typeof n == "string") {
          if (((n = hf(lr, n)), n === null)) return this;
        } else Math.abs(n) < 16 && !r && (n = n * 60);
        return (
          !this._isUTC && i && (f = lf(this)),
          (this._offset = n),
          (this._isUTC = !0),
          f != null && this.add(f, "m"),
          u !== n &&
            (!i || this._changeInProgress
              ? ls(this, rt(n - u, "m"), 1, !1)
              : this._changeInProgress ||
                ((this._changeInProgress = !0),
                t.updateOffset(this, !0),
                (this._changeInProgress = null))),
          this
        );
      }
      return this._isUTC ? u : lf(this);
    }
    function iv(n, t) {
      return n != null
        ? (typeof n != "string" && (n = -n), this.utcOffset(n, t), this)
        : -this.utcOffset();
    }
    function rv(n) {
      return this.utcOffset(0, n);
    }
    function uv(n) {
      return (
        this._isUTC &&
          (this.utcOffset(0, n),
          (this._isUTC = !1),
          n && this.subtract(lf(this), "m")),
        this
      );
    }
    function fv() {
      if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
      else if (typeof this._i == "string") {
        var n = hf(gh, this._i);
        n != null ? this.utcOffset(n) : this.utcOffset(0, !0);
      }
      return this;
    }
    function ev(n) {
      return this.isValid()
        ? ((n = n ? c(n).utcOffset() : 0), (this.utcOffset() - n) % 60 == 0)
        : !1;
    }
    function ov() {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }
    function sv() {
      var n, t;
      return b(this._isDSTShifted)
        ? ((n = {}),
          eu(n, this),
          (n = ko(n)),
          n._a
            ? ((t = n._isUTC ? et(n._a) : c(n._a)),
              (this._isDSTShifted =
                this.isValid() && gf(n._a, t.toArray()) > 0))
            : (this._isDSTShifted = !1),
          this._isDSTShifted)
        : this._isDSTShifted;
    }
    function hv() {
      return this.isValid() ? !this._isUTC : !1;
    }
    function cv() {
      return this.isValid() ? this._isUTC : !1;
    }
    function es() {
      return this.isValid() ? this._isUTC && this._offset === 0 : !1;
    }
    function rt(n, t) {
      var i = n,
        r = null,
        u,
        e,
        o;
      return (
        of(n)
          ? (i = { ms: n._milliseconds, d: n._days, M: n._months })
          : dt(n)
          ? ((i = {}), t ? (i[t] = n) : (i.milliseconds = n))
          : (r = os.exec(n))
          ? ((u = r[1] === "-" ? -1 : 1),
            (i = {
              y: 0,
              d: f(r[ht]) * u,
              h: f(r[v]) * u,
              m: f(r[it]) * u,
              s: f(r[vt]) * u,
              ms: f(sf(r[ni] * 1e3)) * u,
            }))
          : (r = ss.exec(n))
          ? ((u = r[1] === "-" ? -1 : 1),
            (i = {
              y: ii(r[2], u),
              M: ii(r[3], u),
              w: ii(r[4], u),
              d: ii(r[5], u),
              h: ii(r[6], u),
              m: ii(r[7], u),
              s: ii(r[8], u),
            }))
          : i == null
          ? (i = {})
          : typeof i == "object" &&
            ("from" in i || "to" in i) &&
            ((o = lv(c(i.from), c(i.to))),
            (i = {}),
            (i.ms = o.milliseconds),
            (i.M = o.months)),
        (e = new dr(i)),
        of(n) && l(n, "_locale") && (e._locale = n._locale),
        e
      );
    }
    function ii(n, t) {
      var i = n && parseFloat(n.replace(",", "."));
      return (isNaN(i) ? 0 : i) * t;
    }
    function hs(n, t) {
      var i = {};
      return (
        (i.months = t.month() - n.month() + (t.year() - n.year()) * 12),
        n.clone().add(i.months, "M").isAfter(t) && --i.months,
        (i.milliseconds = +t - +n.clone().add(i.months, "M")),
        i
      );
    }
    function lv(n, t) {
      var i;
      return n.isValid() && t.isValid()
        ? ((t = cf(t, n)),
          n.isBefore(t)
            ? (i = hs(n, t))
            : ((i = hs(t, n)),
              (i.milliseconds = -i.milliseconds),
              (i.months = -i.months)),
          i)
        : { milliseconds: 0, months: 0 };
    }
    function cs(n, t) {
      return function (i, r) {
        var u, f;
        return (
          r === null ||
            isNaN(+r) ||
            (te(
              t,
              "moment()." +
                t +
                "(period, number) is deprecated. Please use moment()." +
                t +
                "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
            ),
            (f = i),
            (i = r),
            (r = f)),
          (i = typeof i == "string" ? +i : i),
          (u = rt(i, r)),
          ls(this, u, n),
          this
        );
      };
    }
    function ls(n, i, r, u) {
      var o = i._milliseconds,
        f = sf(i._days),
        e = sf(i._months);
      n.isValid() &&
        ((u = u == null ? !0 : u),
        e && ke(n, yr(n, "Month") + e * r),
        f && we(n, "Date", yr(n, "Date") + f * r),
        o && n._d.setTime(n._d.valueOf() + o * r),
        u && t.updateOffset(n, f || e));
    }
    function av(n, t) {
      var i = n.diff(t, "days", !0);
      return i < -6
        ? "sameElse"
        : i < -1
        ? "lastWeek"
        : i < 0
        ? "lastDay"
        : i < 1
        ? "sameDay"
        : i < 2
        ? "nextDay"
        : i < 7
        ? "nextWeek"
        : "sameElse";
    }
    function vv(n, i) {
      var u = n || c(),
        f = cf(u, this).startOf("day"),
        r = t.calendarFormat(this, f) || "sameElse",
        e = i && (st(i[r]) ? i[r].call(this, u) : i[r]);
      return this.format(e || this.localeData().calendar(r, this, c(u)));
    }
    function yv() {
      return new yi(this);
    }
    function pv(n, t) {
      var i = ot(n) ? n : c(n);
      return this.isValid() && i.isValid()
        ? ((t = nt(t) || "millisecond"),
          t === "millisecond"
            ? this.valueOf() > i.valueOf()
            : i.valueOf() < this.clone().startOf(t).valueOf())
        : !1;
    }
    function wv(n, t) {
      var i = ot(n) ? n : c(n);
      return this.isValid() && i.isValid()
        ? ((t = nt(t) || "millisecond"),
          t === "millisecond"
            ? this.valueOf() < i.valueOf()
            : this.clone().endOf(t).valueOf() < i.valueOf())
        : !1;
    }
    function bv(n, t, i, r) {
      var u = ot(n) ? n : c(n),
        f = ot(t) ? t : c(t);
      return this.isValid() && u.isValid() && f.isValid()
        ? ((r = r || "()"),
          (r[0] === "(" ? this.isAfter(u, i) : !this.isBefore(u, i)) &&
            (r[1] === ")" ? this.isBefore(f, i) : !this.isAfter(f, i)))
        : !1;
    }
    function kv(n, t) {
      var i = ot(n) ? n : c(n),
        r;
      return this.isValid() && i.isValid()
        ? ((t = nt(t) || "millisecond"),
          t === "millisecond"
            ? this.valueOf() === i.valueOf()
            : ((r = i.valueOf()),
              this.clone().startOf(t).valueOf() <= r &&
                r <= this.clone().endOf(t).valueOf()))
        : !1;
    }
    function dv(n, t) {
      return this.isSame(n, t) || this.isAfter(n, t);
    }
    function gv(n, t) {
      return this.isSame(n, t) || this.isBefore(n, t);
    }
    function ny(n, t, i) {
      var r, f, u;
      if (!this.isValid()) return NaN;
      if (((r = cf(n, this)), !r.isValid())) return NaN;
      f = (r.utcOffset() - this.utcOffset()) * 6e4;
      t = nt(t);
      switch (t) {
        case "year":
          u = af(this, r) / 12;
          break;
        case "month":
          u = af(this, r);
          break;
        case "quarter":
          u = af(this, r) / 3;
          break;
        case "second":
          u = (this - r) / 1e3;
          break;
        case "minute":
          u = (this - r) / 6e4;
          break;
        case "hour":
          u = (this - r) / 36e5;
          break;
        case "day":
          u = (this - r - f) / 864e5;
          break;
        case "week":
          u = (this - r - f) / 6048e5;
          break;
        default:
          u = this - r;
      }
      return i ? u : d(u);
    }
    function af(n, t) {
      var r = (t.year() - n.year()) * 12 + (t.month() - n.month()),
        i = n.clone().add(r, "months"),
        u,
        f;
      return (
        t - i < 0
          ? ((u = n.clone().add(r - 1, "months")), (f = (t - i) / (i - u)))
          : ((u = n.clone().add(r + 1, "months")), (f = (t - i) / (u - i))),
        -(r + f) || 0
      );
    }
    function ty() {
      return this.clone()
        .locale("en")
        .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function iy(n) {
      if (!this.isValid()) return null;
      var i = n !== !0,
        t = i ? this.clone().utc() : this;
      return t.year() < 0 || t.year() > 9999
        ? er(
            t,
            i
              ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
              : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
          )
        : st(Date.prototype.toISOString)
        ? i
          ? this.toDate().toISOString()
          : new Date(this.valueOf() + this.utcOffset() * 6e4)
              .toISOString()
              .replace("Z", er(t, "Z"))
        : er(
            t,
            i ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
    }
    function ry() {
      var n, t;
      if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
      n = "moment";
      t = "";
      this.isLocal() ||
        ((n = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone"),
        (t = "Z"));
      var i = "[" + n + '("]',
        r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        u = t + '[")]';
      return this.format(i + r + "-MM-DD[T]HH:mm:ss.SSS" + u);
    }
    function uy(n) {
      n || (n = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
      var i = er(this, n);
      return this.localeData().postformat(i);
    }
    function fy(n, t) {
      return this.isValid() && ((ot(n) && n.isValid()) || c(n).isValid())
        ? rt({ to: this, from: n }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }
    function ey(n) {
      return this.from(c(), n);
    }
    function oy(n, t) {
      return this.isValid() && ((ot(n) && n.isValid()) || c(n).isValid())
        ? rt({ from: this, to: n }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }
    function sy(n) {
      return this.to(c(), n);
    }
    function ys(n) {
      var t;
      return n === undefined
        ? this._locale._abbr
        : ((t = bt(n)), t != null && (this._locale = t), this);
    }
    function ps() {
      return this._locale;
    }
    function li(n, t) {
      return ((n % t) + t) % t;
    }
    function bs(n, t, i) {
      return n < 100 && n >= 0
        ? new Date(n + 400, t, i) - ws
        : new Date(n, t, i).valueOf();
    }
    function ks(n, t, i) {
      return n < 100 && n >= 0
        ? Date.UTC(n + 400, t, i) - ws
        : Date.UTC(n, t, i);
    }
    function hy(n) {
      var i, r;
      if (
        ((n = nt(n)), n === undefined || n === "millisecond" || !this.isValid())
      )
        return this;
      r = this._isUTC ? ks : bs;
      switch (n) {
        case "year":
          i = r(this.year(), 0, 1);
          break;
        case "quarter":
          i = r(this.year(), this.month() - (this.month() % 3), 1);
          break;
        case "month":
          i = r(this.year(), this.month(), 1);
          break;
        case "week":
          i = r(this.year(), this.month(), this.date() - this.weekday());
          break;
        case "isoWeek":
          i = r(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1)
          );
          break;
        case "day":
        case "date":
          i = r(this.year(), this.month(), this.date());
          break;
        case "hour":
          i =
            this._d.valueOf() -
            li(i + (this._isUTC ? 0 : this.utcOffset() * ci), nu);
          break;
        case "minute":
          i = this._d.valueOf() - li(i, ci);
          break;
        case "second":
          i = this._d.valueOf() - li(i, gr);
      }
      return this._d.setTime(i), t.updateOffset(this, !0), this;
    }
    function cy(n) {
      var i, r;
      if (
        ((n = nt(n)), n === undefined || n === "millisecond" || !this.isValid())
      )
        return this;
      r = this._isUTC ? ks : bs;
      switch (n) {
        case "year":
          i = r(this.year() + 1, 0, 1) - 1;
          break;
        case "quarter":
          i = r(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
          break;
        case "month":
          i = r(this.year(), this.month() + 1, 1) - 1;
          break;
        case "week":
          i =
            r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;
        case "isoWeek":
          i =
            r(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7
            ) - 1;
          break;
        case "day":
        case "date":
          i = r(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case "hour":
          i =
            this._d.valueOf() +
            (nu - li(i + (this._isUTC ? 0 : this.utcOffset() * ci), nu) - 1);
          break;
        case "minute":
          i = this._d.valueOf() + (ci - li(i, ci) - 1);
          break;
        case "second":
          i = this._d.valueOf() + (gr - li(i, gr) - 1);
      }
      return this._d.setTime(i), t.updateOffset(this, !0), this;
    }
    function ly() {
      return this._d.valueOf() - (this._offset || 0) * 6e4;
    }
    function ay() {
      return Math.floor(this.valueOf() / 1e3);
    }
    function vy() {
      return new Date(this.valueOf());
    }
    function yy() {
      var n = this;
      return [
        n.year(),
        n.month(),
        n.date(),
        n.hour(),
        n.minute(),
        n.second(),
        n.millisecond(),
      ];
    }
    function py() {
      var n = this;
      return {
        years: n.year(),
        months: n.month(),
        date: n.date(),
        hours: n.hours(),
        minutes: n.minutes(),
        seconds: n.seconds(),
        milliseconds: n.milliseconds(),
      };
    }
    function wy() {
      return this.isValid() ? this.toISOString() : null;
    }
    function by() {
      return fu(this);
    }
    function ky() {
      return wt({}, u(this));
    }
    function dy() {
      return u(this).overflow;
    }
    function gy() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }
    function tu(n, t) {
      r(0, [n, n.length], 0, t);
    }
    function np(n) {
      return ds.call(
        this,
        n,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }
    function tp(n) {
      return ds.call(this, n, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function ip() {
      return ti(this.year(), 1, 4);
    }
    function rp() {
      var n = this.localeData()._week;
      return ti(this.year(), n.dow, n.doy);
    }
    function ds(n, t, i, r, u) {
      var f;
      return n == null
        ? di(this, r, u).year
        : ((f = ti(n, r, u)), t > f && (t = f), up.call(this, n, t, i, r, u));
    }
    function up(n, t, i, r, u) {
      var e = io(n, t, i, r, u),
        f = ki(e.year, 0, e.dayOfYear);
      return (
        this.year(f.getUTCFullYear()),
        this.month(f.getUTCMonth()),
        this.date(f.getUTCDate()),
        this
      );
    }
    function fp(n) {
      return n == null
        ? Math.ceil((this.month() + 1) / 3)
        : this.month((n - 1) * 3 + (this.month() % 3));
    }
    function ep(n) {
      var t =
        Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
      return n == null ? t : this.add(n - t, "d");
    }
    function op(n, t) {
      t[ni] = f(("0." + n) * 1e3);
    }
    function sp() {
      return this._isUTC ? "UTC" : "";
    }
    function hp() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }
    function cp(n) {
      return c(n * 1e3);
    }
    function lp() {
      return c.apply(null, arguments).parseZone();
    }
    function ih(n) {
      return n;
    }
    function iu(n, t, i, r) {
      var u = bt(),
        f = et().set(r, t);
      return u[i](f, n);
    }
    function rh(n, t, i) {
      if ((dt(n) && ((t = n), (n = undefined)), (n = n || ""), t != null))
        return iu(n, t, i, "month");
      for (var u = [], r = 0; r < 12; r++) u[r] = iu(n, r, i, "month");
      return u;
    }
    function pf(n, t, i, r) {
      var o, f, u, e;
      if (
        (typeof n == "boolean"
          ? (dt(t) && ((i = t), (t = undefined)), (t = t || ""))
          : ((t = n),
            (i = t),
            (n = !1),
            dt(t) && ((i = t), (t = undefined)),
            (t = t || "")),
        (o = bt()),
        (f = n ? o._week.dow : 0),
        i != null)
      )
        return iu(t, (i + f) % 7, r, "day");
      for (e = [], u = 0; u < 7; u++) e[u] = iu(t, (u + f) % 7, r, "day");
      return e;
    }
    function ap(n, t) {
      return rh(n, t, "months");
    }
    function vp(n, t) {
      return rh(n, t, "monthsShort");
    }
    function yp(n, t, i) {
      return pf(n, t, i, "weekdays");
    }
    function pp(n, t, i) {
      return pf(n, t, i, "weekdaysShort");
    }
    function wp(n, t, i) {
      return pf(n, t, i, "weekdaysMin");
    }
    function bp() {
      var n = this._data;
      return (
        (this._milliseconds = ct(this._milliseconds)),
        (this._days = ct(this._days)),
        (this._months = ct(this._months)),
        (n.milliseconds = ct(n.milliseconds)),
        (n.seconds = ct(n.seconds)),
        (n.minutes = ct(n.minutes)),
        (n.hours = ct(n.hours)),
        (n.months = ct(n.months)),
        (n.years = ct(n.years)),
        this
      );
    }
    function uh(n, t, i, r) {
      var u = rt(t, i);
      return (
        (n._milliseconds += r * u._milliseconds),
        (n._days += r * u._days),
        (n._months += r * u._months),
        n._bubble()
      );
    }
    function kp(n, t) {
      return uh(this, n, t, 1);
    }
    function dp(n, t) {
      return uh(this, n, t, -1);
    }
    function fh(n) {
      return n < 0 ? Math.floor(n) : Math.ceil(n);
    }
    function gp() {
      var r = this._milliseconds,
        n = this._days,
        t = this._months,
        i = this._data,
        u,
        f,
        e,
        s,
        o;
      return (
        (r >= 0 && n >= 0 && t >= 0) ||
          (r <= 0 && n <= 0 && t <= 0) ||
          ((r += fh(wf(t) + n) * 864e5), (n = 0), (t = 0)),
        (i.milliseconds = r % 1e3),
        (u = d(r / 1e3)),
        (i.seconds = u % 60),
        (f = d(u / 60)),
        (i.minutes = f % 60),
        (e = d(f / 60)),
        (i.hours = e % 24),
        (n += d(e / 24)),
        (o = d(eh(n))),
        (t += o),
        (n -= fh(wf(o))),
        (s = d(t / 12)),
        (t %= 12),
        (i.days = n),
        (i.months = t),
        (i.years = s),
        this
      );
    }
    function eh(n) {
      return (n * 4800) / 146097;
    }
    function wf(n) {
      return (n * 146097) / 4800;
    }
    function nw(n) {
      if (!this.isValid()) return NaN;
      var t,
        r,
        i = this._milliseconds;
      if (((n = nt(n)), n === "month" || n === "quarter" || n === "year")) {
        t = this._days + i / 864e5;
        r = this._months + eh(t);
        switch (n) {
          case "month":
            return r;
          case "quarter":
            return r / 3;
          case "year":
            return r / 12;
        }
      } else {
        t = this._days + Math.round(wf(this._months));
        switch (n) {
          case "week":
            return t / 7 + i / 6048e5;
          case "day":
            return t + i / 864e5;
          case "hour":
            return t * 24 + i / 36e5;
          case "minute":
            return t * 1440 + i / 6e4;
          case "second":
            return t * 86400 + i / 1e3;
          case "millisecond":
            return Math.floor(t * 864e5) + i;
          default:
            throw new Error("Unknown unit " + n);
        }
      }
    }
    function tw() {
      return this.isValid()
        ? this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            f(this._months / 12) * 31536e6
        : NaN;
    }
    function yt(n) {
      return function () {
        return this.as(n);
      };
    }
    function lw() {
      return rt(this);
    }
    function aw(n) {
      return (n = nt(n)), this.isValid() ? this[n + "s"]() : NaN;
    }
    function ri(n) {
      return function () {
        return this.isValid() ? this._data[n] : NaN;
      };
    }
    function gw() {
      return d(this.days() / 7);
    }
    function nb(n, t, i, r, u) {
      return u.relativeTime(t || 1, !!i, n, r);
    }
    function tb(n, t, i) {
      var r = rt(n).abs(),
        u = pt(r.as("s")),
        e = pt(r.as("m")),
        o = pt(r.as("h")),
        s = pt(r.as("d")),
        h = pt(r.as("M")),
        c = pt(r.as("y")),
        f = (u <= ut.ss && ["s", u]) ||
          (u < ut.s && ["ss", u]) ||
          (e <= 1 && ["m"]) ||
          (e < ut.m && ["mm", e]) ||
          (o <= 1 && ["h"]) ||
          (o < ut.h && ["hh", o]) ||
          (s <= 1 && ["d"]) ||
          (s < ut.d && ["dd", s]) ||
          (h <= 1 && ["M"]) ||
          (h < ut.M && ["MM", h]) ||
          (c <= 1 && ["y"]) || ["yy", c];
      return (f[2] = t), (f[3] = +n > 0), (f[4] = i), nb.apply(null, f);
    }
    function ib(n) {
      return n === undefined
        ? pt
        : typeof n == "function"
        ? ((pt = n), !0)
        : !1;
    }
    function rb(n, t) {
      return ut[n] === undefined
        ? !1
        : t === undefined
        ? ut[n]
        : ((ut[n] = t), n === "s" && (ut.ss = t - 1), !0);
    }
    function ub(n) {
      if (!this.isValid()) return this.localeData().invalidDate();
      var t = this.localeData(),
        i = tb(this, !n, t);
      return n && (i = t.pastFuture(+this, i)), t.postformat(i);
    }
    function ai(n) {
      return (n > 0) - (n < 0) || +n;
    }
    function uu() {
      if (!this.isValid()) return this.localeData().invalidDate();
      var t = ru(this._milliseconds) / 1e3,
        y = ru(this._days),
        r = ru(this._months),
        i,
        s,
        h;
      i = d(t / 60);
      s = d(i / 60);
      t %= 60;
      i %= 60;
      h = d(r / 12);
      r %= 12;
      var c = h,
        l = r,
        a = y,
        u = s,
        f = i,
        e = t ? t.toFixed(3).replace(/\.?0+$/, "") : "",
        n = this.asSeconds();
      if (!n) return "P0D";
      var p = n < 0 ? "-" : "",
        v = ai(this._months) !== ai(n) ? "-" : "",
        w = ai(this._days) !== ai(n) ? "-" : "",
        o = ai(this._milliseconds) !== ai(n) ? "-" : "";
      return (
        p +
        "P" +
        (c ? v + c + "Y" : "") +
        (l ? v + l + "M" : "") +
        (a ? w + a + "D" : "") +
        (u || f || e ? "T" : "") +
        (u ? o + u + "H" : "") +
        (f ? o + f + "M" : "") +
        (e ? o + e + "S" : "")
      );
    }
    var bf,
      df,
      rr,
      ur,
      ou,
      re,
      ue,
      fe,
      ee,
      oe,
      se,
      he,
      ui,
      cu,
      ar,
      pu,
      a,
      wu,
      be,
      bu,
      ge,
      no,
      ro,
      uo,
      du,
      fo,
      eo,
      oo,
      so,
      lo,
      po,
      wo,
      ns,
      ts,
      rs,
      hi,
      fs,
      os,
      ss,
      as,
      vs,
      vf,
      yf,
      gs,
      nh,
      kt,
      th,
      n,
      o,
      ct,
      pt,
      ut,
      ru,
      e;
    df = Array.prototype.some
      ? Array.prototype.some
      : function (n) {
          for (var i = Object(this), r = i.length >>> 0, t = 0; t < r; t++)
            if (t in i && n.call(this, i[t], t, i)) return !0;
          return !1;
        };
    rr = t.momentProperties = [];
    ur = !1;
    ou = {};
    t.suppressDeprecationWarnings = !1;
    t.deprecationHandler = null;
    re = Object.keys
      ? Object.keys
      : function (n) {
          var t,
            i = [];
          for (t in n) l(n, t) && i.push(t);
          return i;
        };
    ue = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L",
    };
    fe = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    };
    ee = "Invalid date";
    oe = "%d";
    se = /\d{1,2}/;
    he = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    };
    ui = {};
    cu = {};
    var ce =
        /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      fr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      lu = {},
      fi = {};
    var ae = /\d/,
      k = /\d\d/,
      ve = /\d{3}/,
      au = /\d{4}/,
      or = /[+-]?\d{6}/,
      s = /\d\d?/,
      ye = /\d\d\d\d?/,
      pe = /\d\d\d\d\d\d?/,
      sr = /\d{1,3}/,
      vu = /\d{1,4}/,
      hr = /[+-]?\d{1,6}/,
      cr = /[+-]?\d+/,
      gh = /Z|[+-]\d\d:?\d\d/gi,
      lr = /Z|[+-]\d\d(?::?\d\d)?/gi,
      pi =
        /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      yu = {};
    ar = {};
    var tt = 0,
      at = 1,
      ht = 2,
      v = 3,
      it = 4,
      vt = 5,
      ni = 6,
      rc = 7,
      uc = 8;
    r("Y", 0, 0, function () {
      var n = this.year();
      return n <= 9999 ? "" + n : "+" + n;
    });
    r(0, ["YY", 2], 0, function () {
      return this.year() % 100;
    });
    r(0, ["YYYY", 4], 0, "year");
    r(0, ["YYYYY", 5], 0, "year");
    r(0, ["YYYYYY", 6, !0], 0, "year");
    p("year", "y");
    w("year", 1);
    i("Y", cr);
    i("YY", s, k);
    i("YYYY", vu, au);
    i("YYYYY", hr, or);
    i("YYYYYY", hr, or);
    h(["YYYYY", "YYYYYY"], tt);
    h("YYYY", function (n, i) {
      i[tt] = n.length === 2 ? t.parseTwoDigitYear(n) : f(n);
    });
    h("YY", function (n, i) {
      i[tt] = t.parseTwoDigitYear(n);
    });
    h("Y", function (n, t) {
      t[tt] = parseInt(n, 10);
    });
    t.parseTwoDigitYear = function (n) {
      return f(n) + (f(n) > 68 ? 1900 : 2e3);
    };
    pu = ei("FullYear", !0);
    a = Array.prototype.indexOf
      ? Array.prototype.indexOf
      : function (n) {
          for (var t = 0; t < this.length; ++t) if (this[t] === n) return t;
          return -1;
        };
    r("M", ["MM", 2], "Mo", function () {
      return this.month() + 1;
    });
    r("MMM", 0, 0, function (n) {
      return this.localeData().monthsShort(this, n);
    });
    r("MMMM", 0, 0, function (n) {
      return this.localeData().months(this, n);
    });
    p("month", "M");
    w("month", 8);
    i("M", s);
    i("MM", s, k);
    i("MMM", function (n, t) {
      return t.monthsShortRegex(n);
    });
    i("MMMM", function (n, t) {
      return t.monthsRegex(n);
    });
    h(["M", "MM"], function (n, t) {
      t[at] = f(n) - 1;
    });
    h(["MMM", "MMMM"], function (n, t, i, r) {
      var f = i._locale.monthsParse(n, r, i._strict);
      f != null ? (t[at] = f) : (u(i).invalidMonth = n);
    });
    wu = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    be =
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      );
    bu = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    ge = pi;
    no = pi;
    r("w", ["ww", 2], "wo", "week");
    r("W", ["WW", 2], "Wo", "isoWeek");
    p("week", "w");
    p("isoWeek", "W");
    w("week", 5);
    w("isoWeek", 5);
    i("w", s);
    i("ww", s, k);
    i("W", s);
    i("WW", s, k);
    wi(["w", "ww", "W", "WW"], function (n, t, i, r) {
      t[r.substr(0, 1)] = f(n);
    });
    ro = { dow: 0, doy: 6 };
    r("d", 0, "do", "day");
    r("dd", 0, 0, function (n) {
      return this.localeData().weekdaysMin(this, n);
    });
    r("ddd", 0, 0, function (n) {
      return this.localeData().weekdaysShort(this, n);
    });
    r("dddd", 0, 0, function (n) {
      return this.localeData().weekdays(this, n);
    });
    r("e", 0, 0, "weekday");
    r("E", 0, 0, "isoWeekday");
    p("day", "d");
    p("weekday", "e");
    p("isoWeekday", "E");
    w("day", 11);
    w("weekday", 11);
    w("isoWeekday", 11);
    i("d", s);
    i("e", s);
    i("E", s);
    i("dd", function (n, t) {
      return t.weekdaysMinRegex(n);
    });
    i("ddd", function (n, t) {
      return t.weekdaysShortRegex(n);
    });
    i("dddd", function (n, t) {
      return t.weekdaysRegex(n);
    });
    wi(["dd", "ddd", "dddd"], function (n, t, i, r) {
      var f = i._locale.weekdaysParse(n, r, i._strict);
      f != null ? (t.d = f) : (u(i).invalidWeekday = n);
    });
    wi(["d", "e", "E"], function (n, t, i, r) {
      t[r] = f(n);
    });
    uo = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    du = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    fo = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    eo = pi;
    oo = pi;
    so = pi;
    r("H", ["HH", 2], 0, "hour");
    r("h", ["hh", 2], 0, nf);
    r("k", ["kk", 2], 0, yl);
    r("hmm", 0, 0, function () {
      return "" + nf.apply(this) + lt(this.minutes(), 2);
    });
    r("hmmss", 0, 0, function () {
      return (
        "" + nf.apply(this) + lt(this.minutes(), 2) + lt(this.seconds(), 2)
      );
    });
    r("Hmm", 0, 0, function () {
      return "" + this.hours() + lt(this.minutes(), 2);
    });
    r("Hmmss", 0, 0, function () {
      return "" + this.hours() + lt(this.minutes(), 2) + lt(this.seconds(), 2);
    });
    ho("a", !0);
    ho("A", !1);
    p("hour", "h");
    w("hour", 13);
    i("a", co);
    i("A", co);
    i("H", s);
    i("h", s);
    i("k", s);
    i("HH", s, k);
    i("hh", s, k);
    i("kk", s, k);
    i("hmm", ye);
    i("hmmss", pe);
    i("Hmm", ye);
    i("Hmmss", pe);
    h(["H", "HH"], v);
    h(["k", "kk"], function (n, t) {
      var i = f(n);
      t[v] = i === 24 ? 0 : i;
    });
    h(["a", "A"], function (n, t, i) {
      i._isPm = i._locale.isPM(n);
      i._meridiem = n;
    });
    h(["h", "hh"], function (n, t, i) {
      t[v] = f(n);
      u(i).bigHour = !0;
    });
    h("hmm", function (n, t, i) {
      var r = n.length - 2;
      t[v] = f(n.substr(0, r));
      t[it] = f(n.substr(r));
      u(i).bigHour = !0;
    });
    h("hmmss", function (n, t, i) {
      var r = n.length - 4,
        e = n.length - 2;
      t[v] = f(n.substr(0, r));
      t[it] = f(n.substr(r, 2));
      t[vt] = f(n.substr(e));
      u(i).bigHour = !0;
    });
    h("Hmm", function (n, t) {
      var i = n.length - 2;
      t[v] = f(n.substr(0, i));
      t[it] = f(n.substr(i));
    });
    h("Hmmss", function (n, t) {
      var i = n.length - 4,
        r = n.length - 2;
      t[v] = f(n.substr(0, i));
      t[it] = f(n.substr(i, 2));
      t[vt] = f(n.substr(r));
    });
    lo = /[ap]\.?m?\.?/i;
    var bl = ei("Hours", !0),
      ao = {
        calendar: ue,
        longDateFormat: fe,
        invalidDate: ee,
        ordinal: oe,
        dayOfMonthOrdinalParse: se,
        relativeTime: he,
        months: be,
        monthsShort: bu,
        week: ro,
        weekdays: uo,
        weekdaysMin: fo,
        weekdaysShort: du,
        meridiemParse: lo,
      },
      y = {},
      gi = {},
      nr;
    var ia =
        /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      ra =
        /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      ua = /Z|[+-]\d\d(?::?\d\d)?/,
      kr = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/],
      ],
      ff = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/],
      ],
      fa = /^\/?Date\((\-?\d+)/i;
    po =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    wo = {
      UT: 0,
      GMT: 0,
      EDT: -240,
      EST: -300,
      CDT: -300,
      CST: -360,
      MDT: -360,
      MST: -420,
      PDT: -420,
      PST: -480,
    };
    t.createFromInputFallback = g(
      "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
      function (n) {
        n._d = new Date(n._i + (n._useUTC ? " UTC" : ""));
      }
    );
    t.ISO_8601 = function () {};
    t.RFC_2822 = function () {};
    ns = g(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var n = c.apply(null, arguments);
        return this.isValid() && n.isValid() ? (n < this ? this : n) : ir();
      }
    );
    ts = g(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var n = c.apply(null, arguments);
        return this.isValid() && n.isValid() ? (n > this ? this : n) : ir();
      }
    );
    rs = function () {
      return Date.now ? Date.now() : +new Date();
    };
    hi = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond",
    ];
    us("Z", ":");
    us("ZZ", "");
    i("Z", lr);
    i("ZZ", lr);
    h(["Z", "ZZ"], function (n, t, i) {
      i._useUTC = !0;
      i._tzm = hf(lr, n);
    });
    fs = /([\+\-]|\d\d)/gi;
    t.updateOffset = function () {};
    os = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
    ss =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    rt.fn = dr.prototype;
    rt.invalid = nv;
    as = cs(1, "add");
    vs = cs(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    vf = g(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function (n) {
        return n === undefined ? this.localeData() : this.locale(n);
      }
    );
    var gr = 1e3,
      ci = 60 * gr,
      nu = 60 * ci,
      ws = 3506328 * nu;
    for (
      r(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100;
      }),
        r(0, ["GG", 2], 0, function () {
          return this.isoWeekYear() % 100;
        }),
        tu("gggg", "weekYear"),
        tu("ggggg", "weekYear"),
        tu("GGGG", "isoWeekYear"),
        tu("GGGGG", "isoWeekYear"),
        p("weekYear", "gg"),
        p("isoWeekYear", "GG"),
        w("weekYear", 1),
        w("isoWeekYear", 1),
        i("G", cr),
        i("g", cr),
        i("GG", s, k),
        i("gg", s, k),
        i("GGGG", vu, au),
        i("gggg", vu, au),
        i("GGGGG", hr, or),
        i("ggggg", hr, or),
        wi(["gggg", "ggggg", "GGGG", "GGGGG"], function (n, t, i, r) {
          t[r.substr(0, 2)] = f(n);
        }),
        wi(["gg", "GG"], function (n, i, r, u) {
          i[u] = t.parseTwoDigitYear(n);
        }),
        r("Q", 0, "Qo", "quarter"),
        p("quarter", "Q"),
        w("quarter", 7),
        i("Q", ae),
        h("Q", function (n, t) {
          t[at] = (f(n) - 1) * 3;
        }),
        r("D", ["DD", 2], "Do", "date"),
        p("date", "D"),
        w("date", 9),
        i("D", s),
        i("DD", s, k),
        i("Do", function (n, t) {
          return n
            ? t._dayOfMonthOrdinalParse || t._ordinalParse
            : t._dayOfMonthOrdinalParseLenient;
        }),
        h(["D", "DD"], ht),
        h("Do", function (n, t) {
          t[ht] = f(n.match(s)[0]);
        }),
        yf = ei("Date", !0),
        r("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
        p("dayOfYear", "DDD"),
        w("dayOfYear", 4),
        i("DDD", sr),
        i("DDDD", ve),
        h(["DDD", "DDDD"], function (n, t, i) {
          i._dayOfYear = f(n);
        }),
        r("m", ["mm", 2], 0, "minute"),
        p("minute", "m"),
        w("minute", 14),
        i("m", s),
        i("mm", s, k),
        h(["m", "mm"], it),
        gs = ei("Minutes", !1),
        r("s", ["ss", 2], 0, "second"),
        p("second", "s"),
        w("second", 15),
        i("s", s),
        i("ss", s, k),
        h(["s", "ss"], vt),
        nh = ei("Seconds", !1),
        r("S", 0, 0, function () {
          return ~~(this.millisecond() / 100);
        }),
        r(0, ["SS", 2], 0, function () {
          return ~~(this.millisecond() / 10);
        }),
        r(0, ["SSS", 3], 0, "millisecond"),
        r(0, ["SSSS", 4], 0, function () {
          return this.millisecond() * 10;
        }),
        r(0, ["SSSSS", 5], 0, function () {
          return this.millisecond() * 100;
        }),
        r(0, ["SSSSSS", 6], 0, function () {
          return this.millisecond() * 1e3;
        }),
        r(0, ["SSSSSSS", 7], 0, function () {
          return this.millisecond() * 1e4;
        }),
        r(0, ["SSSSSSSS", 8], 0, function () {
          return this.millisecond() * 1e5;
        }),
        r(0, ["SSSSSSSSS", 9], 0, function () {
          return this.millisecond() * 1e6;
        }),
        p("millisecond", "ms"),
        w("millisecond", 16),
        i("S", sr, ae),
        i("SS", sr, k),
        i("SSS", sr, ve),
        kt = "SSSS";
      kt.length <= 9;
      kt += "S"
    )
      i(kt, /\d+/);
    for (kt = "S"; kt.length <= 9; kt += "S") h(kt, op);
    th = ei("Milliseconds", !1);
    r("z", 0, 0, "zoneAbbr");
    r("zz", 0, 0, "zoneName");
    n = yi.prototype;
    n.add = as;
    n.calendar = vv;
    n.clone = yv;
    n.diff = ny;
    n.endOf = cy;
    n.format = uy;
    n.from = fy;
    n.fromNow = ey;
    n.to = oy;
    n.toNow = sy;
    n.get = ec;
    n.invalidAt = dy;
    n.isAfter = pv;
    n.isBefore = wv;
    n.isBetween = bv;
    n.isSame = kv;
    n.isSameOrAfter = dv;
    n.isSameOrBefore = gv;
    n.isValid = by;
    n.lang = vf;
    n.locale = ys;
    n.localeData = ps;
    n.max = ts;
    n.min = ns;
    n.parsingFlags = ky;
    n.set = oc;
    n.startOf = hy;
    n.subtract = vs;
    n.toArray = yy;
    n.toObject = py;
    n.toDate = vy;
    n.toISOString = iy;
    n.inspect = ry;
    n.toJSON = wy;
    n.toString = ty;
    n.unix = ay;
    n.valueOf = ly;
    n.creationData = gy;
    n.year = pu;
    n.isLeapYear = fc;
    n.weekYear = np;
    n.isoWeekYear = tp;
    n.quarter = n.quarters = fp;
    n.month = de;
    n.daysInMonth = vc;
    n.week = n.weeks = gc;
    n.isoWeek = n.isoWeeks = nl;
    n.weeksInYear = rp;
    n.isoWeeksInYear = ip;
    n.date = yf;
    n.day = n.days = sl;
    n.weekday = hl;
    n.isoWeekday = cl;
    n.dayOfYear = ep;
    n.hour = n.hours = bl;
    n.minute = n.minutes = gs;
    n.second = n.seconds = nh;
    n.millisecond = n.milliseconds = th;
    n.utcOffset = tv;
    n.utc = rv;
    n.local = uv;
    n.parseZone = fv;
    n.hasAlignedHourOffset = ev;
    n.isDST = ov;
    n.isLocal = hv;
    n.isUtcOffset = cv;
    n.isUtc = es;
    n.isUTC = es;
    n.zoneAbbr = sp;
    n.zoneName = hp;
    n.dates = g("dates accessor is deprecated. Use date instead.", yf);
    n.months = g("months accessor is deprecated. Use month instead", de);
    n.years = g("years accessor is deprecated. Use year instead", pu);
    n.zone = g(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      iv
    );
    n.isDSTShifted = g(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      sv
    );
    o = su.prototype;
    o.calendar = lh;
    o.longDateFormat = ah;
    o.invalidDate = vh;
    o.ordinal = yh;
    o.preparse = ih;
    o.postformat = ih;
    o.relativeTime = ph;
    o.pastFuture = wh;
    o.set = ch;
    o.months = hc;
    o.monthsShort = cc;
    o.monthsParse = ac;
    o.monthsRegex = pc;
    o.monthsShortRegex = yc;
    o.week = bc;
    o.firstDayOfYear = dc;
    o.firstDayOfWeek = kc;
    o.weekdays = rl;
    o.weekdaysMin = fl;
    o.weekdaysShort = ul;
    o.weekdaysParse = ol;
    o.weekdaysRegex = ll;
    o.weekdaysShortRegex = al;
    o.weekdaysMinRegex = vl;
    o.isPM = pl;
    o.meridiem = wl;
    oi("en", {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (n) {
        var t = n % 10,
          i =
            f((n % 100) / 10) === 1
              ? "th"
              : t === 1
              ? "st"
              : t === 2
              ? "nd"
              : t === 3
              ? "rd"
              : "th";
        return n + i;
      },
    });
    t.lang = g("moment.lang is deprecated. Use moment.locale instead.", oi);
    t.langData = g(
      "moment.langData is deprecated. Use moment.localeData instead.",
      bt
    );
    ct = Math.abs;
    var iw = yt("ms"),
      rw = yt("s"),
      uw = yt("m"),
      fw = yt("h"),
      ew = yt("d"),
      ow = yt("w"),
      sw = yt("M"),
      hw = yt("Q"),
      cw = yt("y");
    var vw = ri("milliseconds"),
      yw = ri("seconds"),
      pw = ri("minutes"),
      ww = ri("hours"),
      bw = ri("days"),
      kw = ri("months"),
      dw = ri("years");
    return (
      (pt = Math.round),
      (ut = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 }),
      (ru = Math.abs),
      (e = dr.prototype),
      (e.isValid = ga),
      (e.abs = bp),
      (e.add = kp),
      (e.subtract = dp),
      (e.as = nw),
      (e.asMilliseconds = iw),
      (e.asSeconds = rw),
      (e.asMinutes = uw),
      (e.asHours = fw),
      (e.asDays = ew),
      (e.asWeeks = ow),
      (e.asMonths = sw),
      (e.asQuarters = hw),
      (e.asYears = cw),
      (e.valueOf = tw),
      (e._bubble = gp),
      (e.clone = lw),
      (e.get = aw),
      (e.milliseconds = vw),
      (e.seconds = yw),
      (e.minutes = pw),
      (e.hours = ww),
      (e.days = bw),
      (e.weeks = gw),
      (e.months = kw),
      (e.years = dw),
      (e.humanize = ub),
      (e.toISOString = uu),
      (e.toString = uu),
      (e.toJSON = uu),
      (e.locale = ys),
      (e.localeData = ps),
      (e.toIsoString = g(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        uu
      )),
      (e.lang = vf),
      r("X", 0, 0, "unix"),
      r("x", 0, 0, "valueOf"),
      i("x", cr),
      i("X", /[+-]?\d+(\.\d{1,3})?/),
      h("X", function (n, t, i) {
        i._d = new Date(parseFloat(n, 10) * 1e3);
      }),
      h("x", function (n, t, i) {
        i._d = new Date(f(n));
      }),
      (t.version = "2.24.0"),
      oh(c),
      (t.fn = n),
      (t.min = ba),
      (t.max = ka),
      (t.now = rs),
      (t.utc = et),
      (t.unix = cp),
      (t.months = ap),
      (t.isDate = tr),
      (t.locale = oi),
      (t.invalid = ir),
      (t.duration = rt),
      (t.isMoment = ot),
      (t.weekdays = yp),
      (t.parseZone = lp),
      (t.localeData = bt),
      (t.isDuration = of),
      (t.monthsShort = vp),
      (t.weekdaysMin = wp),
      (t.defineLocale = tf),
      (t.updateLocale = dl),
      (t.locales = gl),
      (t.weekdaysShort = pp),
      (t.normalizeUnits = nt),
      (t.relativeTimeRounding = ib),
      (t.relativeTimeThreshold = rb),
      (t.calendarFormat = av),
      (t.prototype = n),
      (t.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM",
      }),
      t
    );
  });
$(function () {
  $("#dtpStart").val(moment(new Date()).format("YYYY-MM-DD"));
  $("input.datepicker").Zebra_DatePicker({
    inside: !0,
    direction: [!1, "2012-10-01"],
  });
});
