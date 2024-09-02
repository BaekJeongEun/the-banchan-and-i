!function(e) {
    e.fn.pajinate = function(a) {
        var i, n, s, t, l, _, r = "current_page", d = "items_per_page", p = (a = e.extend({
            item_container_id: ".pacontent",
            items_per_page: 3,
            nav_panel_id: ".page_navigation",
            nav_info_id: ".info_text",
            num_page_links_to_display: 0,
            start_page: 0,
            wrap_around: !0,
            nav_label_first: "처음",
            nav_label_prev: "이전",
            nav_label_next: "다음",
            nav_label_last: "마지막",
            nav_order: ["first", "prev", "num", "next", "last"],
            nav_label_info: "Showing {0}-{1} of {2} results",
            show_first_last: !0,
            abort_on_small_lists: !1,
            jquery_ui: !1,
            jquery_ui_active: "ui-state-highlight",
            jquery_ui_default: "ui-state-default",
            jquery_ui_disabled: "ui-state-disabled"
        }, a)).jquery_ui ? a.jquery_ui_default : "", c = a.jquery_ui ? a.jquery_ui_active : "", o = a.jquery_ui ? a.jquery_ui_disabled : "";
        return this.each(function() {
            if (s = e(this),
            n = e(this).find(a.item_container_id),
            t = s.find(a.item_container_id).children(),
            a.abort_on_small_lists && a.items_per_page >= t.size())
                return s;
            (i = s).data(r, 0),
            i.data(d, a.items_per_page);
            var o = n.children().size()
              , k = Math.ceil(o / a.items_per_page)
              , m = a.show_first_last ? '<a class="first_link ' + p + '" href="">' + a.nav_label_first + "</a>" : ""
              , b = a.show_first_last ? '<a class="last_link ' + p + '" href="">' + a.nav_label_last + "</a>" : ""
              , w = "";
            w = "<span class='ptxt'><strong class='pnum'>1</strong>/ <span class='ptot'>" + k + "</span></span>";
            for (var y = 0; y < a.nav_order.length; y++)
                switch (a.nav_order[y]) {
                case "first":
                    w += m;
                    break;
                case "last":
                    w += b;
                    break;
                case "next":
                    w += '<a class="next_link ' + p + '" href="">' + a.nav_label_next + "</a>";
                    break;
                case "prev":
                    w += '<a class="previous_link ' + p + '" href="">' + a.nav_label_prev + "</a>";
                    break;
                case "num":
                    w += "";
                    for (var x = 0; k > x; )
                        w += '<a class="page_link ' + p + '" href="" longdesc="' + x + '">' + (x + 1) + "</a>",
                        x++;
                    w += ""
                }
            l = s.find(a.nav_panel_id),
            o > a.items_per_page ? l.html(w).each(function() {
                e(this).find(".page_link:first").addClass("first"),
                e(this).find(".page_link:last").addClass("last")
            }) : s.find(".page_navigation").text(""),
            l.children(".ellipse").hide(),
            l.find(".previous_link").next().next().addClass("active_page " + c),
            t.hide(),
            t.slice(0, i.data(d)).show(),
            _ = s.find(a.nav_panel_id + ":first").children(".page_link").size(),
            a.num_page_links_to_display = Math.min(a.num_page_links_to_display, _),
            l.children(".page_link").hide(),
            l.each(function() {
                e(this).children(".page_link").slice(0, a.num_page_links_to_display).show()
            }),
            s.find(".first_link").click(function(a) {
                a.preventDefault(),
                g(e(this), 0),
                h(0)
            }),
            s.find(".last_link").click(function(a) {
                a.preventDefault();
                var i = _ - 1;
                f(e(this), i),
                h(i)
            }),
            s.find(".previous_link").click(function(s) {
                var t;
                s.preventDefault(),
                t = e(this),
                new_page = parseInt(i.data(r)) - 1,
                1 == e(t).siblings(".active_page").prev(".page_link").length ? (g(t, new_page),
                h(new_page)) : a.wrap_around && h(_ - 1),
                n.attr("tabindex", "0").focus()
            }),
            s.find(".next_link").click(function(s) {
                var t;
                s.preventDefault(),
                t = e(this),
                new_page = parseInt(i.data(r)) + 1,
                1 == e(t).siblings(".active_page").next(".page_link").length ? (f(t, new_page),
                h(new_page)) : a.wrap_around && h(0),
                n.attr("tabindex", "0").focus()
            }),
            s.find(".page_link").click(function(a) {
                a.preventDefault(),
                h(e(this).attr("longdesc"))
            }),
            h(parseInt(a.start_page)),
            u(),
            a.wrap_around || v()
        });
        function h(e) {
            e = parseInt(e, 10),
            s.find(".pnum").text(e + 1);
            var l = parseInt(i.data(d));
            start_from = e * l,
            end_on = start_from + l;
            var _ = t.hide().slice(start_from, end_on);
            _.show(),
            s.find(a.nav_panel_id).children(".page_link[longdesc=" + e + "]").addClass("active_page " + c).siblings(".active_page").removeClass("active_page " + c),
            i.data(r, e);
            var p = parseInt(i.data(r) + 1)
              , o = n.children().size()
              , h = Math.ceil(o / a.items_per_page);
            s.find(a.nav_info_id).html(a.nav_label_info.replace("{0}", start_from + 1).replace("{1}", start_from + _.length).replace("{2}", t.length).replace("{3}", p).replace("{4}", h)),
            u(),
            v(),
            void 0 !== a.onPageDisplayed && a.onPageDisplayed.call(this, e + 1)
        }
        function f(i, n) {
            var s = n;
            "none" == e(i).siblings(".active_page").siblings(".page_link[longdesc=" + s + "]").css("display") && l.each(function() {
                e(this).children(".page_link").hide().slice(parseInt(s - a.num_page_links_to_display + 1), s + 1).show()
            })
        }
        function g(i, n) {
            var s = n;
            "none" == e(i).siblings(".active_page").siblings(".page_link[longdesc=" + s + "]").css("display") && l.each(function() {
                e(this).children(".page_link").hide().slice(s, s + parseInt(a.num_page_links_to_display)).show()
            })
        }
        function u() {
            l.children(".page_link:visible").hasClass("last") ? l.children(".more").hide() : l.children(".more").show(),
            l.children(".page_link:visible").hasClass("first") ? l.children(".less").hide() : l.children(".less").show()
        }
        function v() {
            l.children(".last").hasClass("active_page") ? l.children(".next_link").add(".last_link").addClass("no_more " + o) : l.children(".next_link").add(".last_link").removeClass("no_more " + o),
            l.children(".first").hasClass("active_page") ? l.children(".previous_link").add(".first_link").addClass("no_more " + o) : l.children(".previous_link").add(".first_link").removeClass("no_more " + o)
        }
    }
}(jQuery);
