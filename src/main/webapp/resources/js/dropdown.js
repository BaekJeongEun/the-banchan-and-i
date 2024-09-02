!function(t) {
    function e(i) {
        i.data && (i = i.data),
        t(document).data("nowselectoptions") && (t(t(document).data("nowselectoptions")).slideUp(i),
        t(t(document).data("nowselectoptions")).prev("div").removeClass("tag_select_open"),
        t(document).data("nowselectoptions", null),
        t(document).unbind("click", e),
        t(document).unbind("keyup", s))
    }
    function s(t) {
        27 == (t || window.event).keyCode && e(t.data)
    }
    function i(i) {
        t(document).bind("click", i, e),
        t(document).bind("keyup", i, s),
        t(t(document).data("nowselectoptions")).slideDown(i),
        t(t(document).data("nowselectoptions")).prev("div").addClass("tag_select_open")
    }
    t.fn.selectCss = function(s) {
        t(this).each(function() {
            var a = s || "fast";
            t(this).data("cssobj") && t(t(this).data("cssobj")).remove(),
            t(this).hide();
            var o = t("<a href='#this' title='" + t(this).attr("title") + "'></a>").insertAfter(this).addClass("tag_select");
            t(this).attr("id") ? o.wrap('<div id="sel_' + t(this).attr("id") + '" class="outSel"></div>') : o.wrap('<div class="outSel"></div>'),
            t(this).data("cssobj", o);
            var n = t("<ul></ul>").insertAfter(o).addClass("tag_options").hide();
            if (o.click(function(s) {
                t(t(document).data("nowselectoptions")).get(0) != t(this).next("ul").get(0) && e(a),
                t(this).next("ul").is(":visible") || (s.stopPropagation(),
                t(document).data("nowselectoptions", t(this).next("ul")),
                i(a))
            }),
            o.hover(function() {
                t(this).addClass("tag_select_hover")
            }, function() {
                t(this).removeClass("tag_select_hover")
            }),
            t(this).hasClass("etc"))
                var l = "li";
            else {
                l = "option";
                t(this).change(function() {
                    t(this).nextAll("ul").children("li:eq(" + t(this)[0].selectedIndex + ")").addClass("open_selected").siblings().removeClass("open_selected"),
                    t(this).next("div").children("a").html(t(this).children(l + ":eq(" + t(this)[0].selectedIndex + ")").text())
                })
            }
            t(this).children(l).each(function(e) {
                if ("option" === l) {
                    var s = t("<li></li>").html("<a href='#this'>" + t(this).text() + "</a>").attr("title", t(this).attr("title")).appendTo(n);
                    t(this).prop("selected") && (s.addClass("open_selected"),
                    o.html(t(this).text())),
                    t(this).attr("data-soldout") && s.addClass("soldout")
                } else {
                    s = t("<li></li>").html("<span class='txt'>" + t(this).html() + "</span>").attr("title", t(this).attr("title")).appendTo(n);
                    t(this).hasClass("active") && (s.addClass("open_selected"),
                    o.html(t(this).html()))
                }
                s.data(l, this),
                s.click(function() {
                    t(this).hasClass("soldout") || (s.data(l).selected = !0,
                    t(this).parent().children("li").removeClass("open_selected"),
                    t(this).addClass("open_selected"),
                    "li" === l && o.html(t(this).html()),
                    t(s.data(l)).trigger("change", !0))
                }),
                s.hover(function() {
                    t(this).addClass("open_hover")
                }, function() {
                    t(this).removeClass("open_hover")
                })
            })
        })
    }
    ,
    t.fn.selectScoreCss = function(s) {
        t(this).each(function() {
            var a = s || "fast";
            t(this).data("cssobj") && t(t(this).data("cssobj")).remove(),
            t(this).hide();
            var o = t("<a href='#this'></a>").insertAfter(this).addClass("tag_select");
            o.wrap('<div class="outSelScore"></div>'),
            t(this).data("cssobj", o);
            var n = t("<ul></ul>").insertAfter(o).addClass("tag_options").hide();
            t(".outSelScore .tag_options li:nth-child(1) a").addClass("score0"),
            t(".outSelScore .tag_options li:nth-child(2) a").addClass("score1"),
            t(".outSelScore .tag_options li:nth-child(3) a").addClass("score2"),
            t(".outSelScore .tag_options li:nth-child(4) a").addClass("score3"),
            t(".outSelScore .tag_options li:nth-child(5) a").addClass("score4"),
            o.click(function(s) {
                t(t(document).data("nowselectoptions")).get(0) != t(this).next("ul").get(0) && e(a),
                t(this).next("ul").is(":visible") || (s.stopPropagation(),
                t(document).data("nowselectoptions", t(this).next("ul")),
                i(a))
            }),
            o.hover(function() {
                t(this).addClass("tag_select_hover")
            }, function() {
                t(this).removeClass("tag_select_hover")
            }),
            t(this).change(function() {
                t(this).nextAll("ul").children("li:eq(" + t(this)[0].selectedIndex + ")").addClass("open_selected").siblings().removeClass("open_selected"),
                t(this).next("div").children("a").html("<span class='score" + t(this)[0].selectedIndex + "'>" + t(this).children("option:eq(" + t(this)[0].selectedIndex + ")").text() + "</span>")
            }),
            t(this).children("option").each(function(e) {
                var s = t("<li></li>").html("<a href='#this'>" + t(this).text() + "</a>").attr("title", t(this).attr("title")).appendTo(n);
                t(this).attr("selected") && (s.addClass("open_selected"),
                o.html("<span class='score" + t(this).index() + "'>" + t(this).text() + "</span>")),
                s.data("option", this),
                s.click(function() {
                    s.data("option").selected = !0,
                    t(this).parent().children("li").removeClass("open_selected"),
                    t(this).addClass("open_selected"),
                    t(s.data("option")).trigger("change", !0)
                }),
                s.hover(function() {
                    t(this).addClass("open_hover")
                }, function() {
                    t(this).removeClass("open_hover")
                })
            })
        })
    }
}(jQuery);
