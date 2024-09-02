window.requestIdleCallback = window.requestIdleCallback || function(e) {
    return setTimeout(function() {
        var t = Date.now();
        e({
            didTimeout: !1,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - t))
            }
        })
    }, 1)
}, window.cancelIdleCallback = window.cancelIdleCallback || function(e) {
    clearTimeout(e)
};
var lazyloadImages, nowLocationHref_evt = location.href,
    todayDate = new Date,
    wid = Number(window.document.documentElement.clientWidth),
    hei = Number(window.document.documentElement.clientHeight),
    BlnAllCategory = !1,
    rquickfixed = 0,
    rquicky = 0,
    lquickfixed = 0,
    lquicky = 0,
    lquicky02 = 0;

function lazyloadFunc() {
    var lazyloadImages;
    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        var imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image)
                }
            })
        });
        lazyloadImages.forEach(function(image) {
            imageObserver.observe(image)
        })
    } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout)
            }
            lazyloadThrottleTimeout = setTimeout(function() {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function(img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy')
                    }
                });
                if (lazyloadImages.length == 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload)
                }
            }, 20)
        }
        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload)
    }
}

function wait(e) {
    var t = $.Deferred();
    return setTimeout(t.resolve, e), t.promise()
}

function open_scroll_no(e, t, n, i, a, o) {
    set = "width=" + n + ",height=" + i + ",top=" + a + ",left=" + o + ", toolbar=no,location=no,directory=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no", win = window.open(e, t, set)
}

function open_scroll_yes(e, n, i, a) {
    set = "width=" + i + ",height=" + a + ",top=" + t + ",left=" + l + ", toolbar=no,location=no,directory=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no", win = window.open(e, n, set)
}

function open_scroll_no_center(e, t, n, i) {
    var a = (screen.width - n) / 2,
        o = (screen.height - i) / 2;
    set = "width=" + n + ",height=" + i + ",top=" + o + ",left=" + a + ", toolbar=no,location=no,directory=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no", win = window.open(e, t, set)
}

function open_scroll_yes_center(e, t, n, i) {
    var a = (screen.width - n) / 2,
        o = (screen.height - i) / 2;
    set = "width=" + n + ",height=" + i + ",top=" + o + ",left=" + a + ", toolbar=no,location=no,directory=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no", win = window.open(e, t, set)
}

function p_closeWin() {
    window.close()
}

function winprint() {
    window.print()
}

function resizePop(e, t) {
    var n = 0,
        i = 0,
        a = new Object;
    a.isIE_10 = -1 != navigator.userAgent.toLowerCase().indexOf("msie 10"), a.isIE_9 = -1 != navigator.userAgent.toLowerCase().indexOf("msie 9"), a.isIE_8 = -1 != navigator.userAgent.toLowerCase().indexOf("msie 8"), a.isIE_7 = -1 != navigator.userAgent.toLowerCase().indexOf("msie 7"), a.isFirefox = -1 != navigator.userAgent.toLowerCase().indexOf("firefox"), a.isSafari = -1 != navigator.userAgent.toLowerCase().indexOf("safari"), a.isOpera = -1 != navigator.userAgent.toLowerCase().indexOf("opera"), a.isChrome = -1 != navigator.userAgent.toLowerCase().indexOf("chrome");
    document.getElementById("popup_wrap");
    var o = e,
        l = t + 23;
    l < 700 ? (a.isIE_10 ? (n = 20, i = 47) : a.isIE_9 ? (n = 10, i = 27) : a.isIE_8 ? (n = 10, i = 56) : a.isIE_7 ? (n = 10, i = 45) : a.isFirefox ? (n = 8, i = 37) : a.isOpera ? (n = 20, i = 33) : a.isChrome ? (n = 10, i = 47) : a.isSafari && (n = 16, i = 75), wait(100).done(function() {
        window.resizeTo(o + n, l + i), document.body.scroll = "no"
    })) : wait(100).done(function() {
        window.resizeTo(o + n, 700), document.body.scroll = "yes"
    })
}

function lyFadeout(e) {
    $(e).fadeOut(200)
}

function lyHide(e) {
    $(e).hide(200)
}

function lySlideup(e) {
    $(e).slideUp(200)
}

function lyFadein(e) {
    $(e).fadeIn(400)
}

function lyShow(e) {
    $(e).show(400)
}

function lySlidedown(e) {
    $(e).slideDown(400)
}

function lyAllFadeinout(e, t) {
    var n = $(".stitle").innerHeight();
    $(".stitle .layer_ccatelist").css("top", n), "none" == $(e).next(t).css("display") ? ($(".layer_box").fadeOut(0), $(".lycurrent").removeClass("lycurrent"), $(e).next(t).fadeIn(400), $(t).attr("tabindex", "0").focus(), $(e).addClass("lycurrent")) : ($(".lycurrent").focus(), $(t).fadeOut(200))
}

function lyAllFadein(e, t) {
    $(t).fadeOut(0), $(".layer_box").fadeOut(0), $(".lycurrent").removeClass("lycurrent"), $(t).fadeIn(400), $(t + ">div").attr("tabindex", "0").focus(), $(e).addClass("lycurrent")
}

function lyAllFadeout(e, t) {
    wait(300).done(function() {
        $(".lycurrent").focus()
    }), $(t).fadeOut(200)
}

function lyAllSlideinout(e, t) {
    "none" == $(e).next(t).css("display") ? ($(".layer_box").slideUp(0), $(".lycurrent").removeClass("lycurrent"), $(e).next(t).slideDown(400), $(t).attr("tabindex", "0").focus(), $(e).addClass("lycurrent")) : ($(".lycurrent").focus(), $(t).slideUp(200))
}

function lyLyFadeinout(e, t) {
    "none" == $(e).next(t).css("display") ? ($(".lycurrent").removeClass("lycurrent"), $(e).next(t).fadeIn(400), $(t).attr("tabindex", "0").focus(), $(e).addClass("lycurrent")) : ($(".lycurrent").focus(), $(t).fadeOut(200))
}

function loadingShow() {
    $("html").append("<div class='loading'></div>")
}

function loadingHide() {
    $(".loading").fadeOut(), wait(1500).done(function() {
        $(".loading").remove()
    })
}

function getCookie(e) {
    for (var t = e + "=", n = 0; n <= document.cookie.length;) {
        var i = n + t.length;
        if (document.cookie.substring(n, i) == t) return -1 == (endOfCookie = document.cookie.indexOf(";", i)) && (endOfCookie = document.cookie.length), unescape(document.cookie.substring(i, endOfCookie));
        if (0 == (n = document.cookie.indexOf(" ", n) + 1)) break
    }
    return ""
}

function setCookie_Layer(e, t, n) {
    var i = new Date;
    i.setDate(i.getDate() + n), document.cookie = e + "=" + escape(t) + ";path=/;domain=.dongwonmall.com;expires=" + i.toGMTString(), document.cookie = e + "=" + escape(t) + ";path=/;domain=.dongwonmall.com:70;expires=" + i.toGMTString()
}

function closeLayer(e) {
    document.getElementById("checkBox_" + e).checked && setCookie_Layer(e, "no", 1)
}

function lyselectxy() {
    ($("div:has('.layer_basket_buy')").length || $("div:has('.layer_selected')").length || $("div:has('.layer_basket')").length || $("div:has('.layer_multideliver')").length || $("div:has('.layer_calculator')").length || $("div:has('.layer_thebanchan')").length) && ($(".layer_basket_buy").css({
        top: +(hei / 2 - $(".layer_basket_buy").height() / 2) + "px",
        left: +(wid / 2 - $(".layer_basket_buy").width() / 2) + "px"
    }), $(".layer_thebanchan").css({
        top: +(hei / 2 - $(".layer_thebanchan").height() / 2) + "px",
        left: +(wid / 2 - $(".layer_thebanchan").width() / 2) + "px"
    }), $(".layer_selected").css({
        top: +(hei / 2 - $(".layer_selected").height()) + "px",
        left: +(wid / 2 - $(".layer_selected").width() / 2) + "px"
    }), $(".layer_basket").css({
        top: +(hei / 2 - $(".layer_basket").height() / 2) + "px",
        left: +(wid / 2 - $(".layer_basket").width() / 2) + "px"
    }), $(".layer_multideliver").css({
        top: "50px",
        left: +(wid / 2 - $(".layer_multideliver").width() / 2) + "px"
    }), $(".layer_calculator").css({
        top: +(hei / 2 - $(".layer_calculator").height() / 2) + "px",
        left: +(wid / 2 - $(".layer_calculator").width() / 2) + "px"
    }))
}

function showTabContent(e) {
    $(".tContent").hide(), $(".tContent").eq(e).show(), $(".tbox .tTitle").removeClass("current").css({
        "z-index": "1"
    }), $(".tbox .tTitle").eq(e).addClass("current").css({
        "z-index": "2"
    })
}

function idNumber(e) {
    return e
}

function tabinit() {
    var e = 0,
        t = 0,
        n = $(".tbox").attr("class");
    n = n.split(" "), n = Number(n[0].substring(4) - 1);
    for (var i = 0; i < $(".tbox .tTitle").length; i++) n > 0 ? (i % n == 0 && (e = 0, t = ($(".tbox .tTitle").height() + 1) * Math.ceil(i / n), $(".tbox .tTitle").eq(i).addClass("f")), $(".tbox .tTitle").eq(i).css({
        top: +t + "px",
        left: +e + "px"
    })) : $(".tbox .tTitle").eq(i).css({
        left: +e + "px"
    }), e += $(".tbox .tTitle").eq(i).width() - 1
}

function tabpinit() {
    for (var e = 0, t = 0, n = ((new Date).getFullYear(), 0); n < $(".full_tab .sub_tab li").length; n++) tboxpNum > 0 ? (n % tboxpNum == 0 && (e = 0, t = ($(".sub_tab li").height() + 1) * Math.ceil(n / tboxpNum), $(".sub_tab li").eq(n).css({
        width: "17.5%"
    }), $(".sub_tab li:eq(" + n + ") a").css({
        margin: "-1px 0 0 0"
    })), $(".sub_tab li").eq(n).css({
        top: +t + "px",
        left: +e + "px"
    })) : $(".sub_tab li").eq(n).css({
        left: +e + "px"
    }), e += $(".sub_tab li").eq(n).width() - 1
}

function tabPageGo() {
    if (location.hash) {
        var e = location.hash;
        "#this" != e && ($(".tbox .tContent").hide(), $(".tbox " + e).show(), $(".tbox .tTitle").removeClass("current").css({
            "z-index": "1"
        }), $(".tbox .tTitle:eq(" + e.substr(e.length - 1, e.length) + ")").addClass("current").css({
            "z-index": "2"
        }))
    }
}
window.addEventListener("DOMContentLoaded", function() {
    lazyloadFunc(), $("a").not(".storageClear a").click(function() {
        "undefined" != typeof Storage && localStorage.clear()
    }), $.ajaxSetup({
        cache: !1
    })
});
var FG_layerPopup, FG_layerPopup02, FG_layerPopup03, FG_layerPopupDeal, datepickerInTxt = "";

function datepickerValue(e) {
    var t = e.split("-");
    t[1] = t[1] < 10 ? "0" + t[1] : t[1], t[2] = t[2] < 10 ? "0" + t[2] : t[2], datepickerInTxt.val(t[0] + "-" + t[1] + "-" + t[2]), $(".datecurrent").focus(), $(".datePicker").hide()
}

function datepickerClose() {
    $(".datecurrent").focus(), $(".datePicker").hide()
}

function lnbOn(e, t, n) {
    e = e, t -= 1, n -= 1;
    $("#lnb .lnb_" + e).show(0), t >= 0 && $("#lnb .lnb_" + e + " .lnbls>li:eq(" + t + ")>ul>li>a:eq(" + n + ")").addClass("cnt"), $("#lnb .lnbls>li:last-child").addClass("l")
}

function imgOveflowResize(e) {
    wait(200).done(function() {
        for (var t = 0; t < $(e + " img").length; t++) $(e + " img").eq(t).width() > 960 && $(e + " img").eq(t).css({
            width: "960px"
        })
    })
}

function slideProType1(e, t, n, i) {
    var a = e,
        o = t,
        l = n,
        s = $(a + ">ul>li").length,
        r = ($(a + ">ul>li").width(), 0),
        c = Math.ceil(s / l);
    if (s > l) {
        $(a + " ul").addClass("oldls").css({
            display: "none"
        }), $(o + " p").css({
            display: "none"
        }), $(a).has(".slidecon").length ? $(a + " .slidecon").html("") : $(a).append("<div class='slidecon'></div>");
        for (var d = 0; d < c; d++) {
            $(a + " .slidecon").append("<div class='newls newls" + d + "'><ul></ul></div>"), $(a + " .slidecon").append("<div class='page page" + d + "'><strong>" + (d + 1) + "</strong>/" + c + "<a href='#this' class='btnprev'>이전</a><a href='#this' class='btnnext'>다음</a></div>");
            for (var u = 0; u < l; u++) $(a + " .oldls li:eq(" + (d * l + u) + ")").clone().appendTo(a + " .newls" + d + " ul")
        }

        function p() {
            $(a + " .newls, " + a + " .page").css({
                display: "none"
            }), $(a + " .newls" + r + ", " + a + " .page" + r).fadeIn(i), $(a + " .newls" + r).attr("tabindex", 0).focus()
        }
        $(a + " .oldls").html(""), $(a + " .newls, " + a + " .page").css({
            display: "none"
        }), $(a + " .newls0, " + a + " .page0").fadeIn(i), $(a + " .page .btnprev").click(function() {
            --r < 0 && (r = c - 1), p()
        }), $(a + " .page .btnnext").click(function() {
            ++r > c - 1 && (r = 0), p()
        })
    }
}

function slideProType2(e, t, n, i, a) {
    var o = e,
        l = t,
        s = n,
        r = 99999999,
        c = 1,
        d = $(o + " ul li").length,
        u = $(o + " ul li").width(),
        p = 0;
    if (void 0 !== a && (r = a), 0 == u && (u = $(o + " ul li img").width()), $(l + " .page").html("<strong>" + c + "</strong>/" + Math.ceil(d / s)), d > s) {
        if (d % s != 0) {
            for (var h = 0; h < s - d % s; h++) $(o + " ul ").append("<li></li>");
            d += s - d % s
        }

        function f() {
            p < 0 ? (p = d - s, c = Math.ceil(d / s)) : p > d - 1 && (p = 0, c = 1), $(o + " ul").fadeOut(0).css({
                "margin-left": + -p * u + "px"
            }), $(o + " ul").fadeIn(i), $(l + " .page strong").text(c)
        }
        $(o + " ul").css({
            "margin-left": "0px",
            width: +d * u + "px"
        }), $(l + " .btnprev").click(function() {
            p -= s, c--, f()
        }), $(l + " .btnnext").click(function() {
            p += s, c++, f()
        }), $(o + " ul li a").focusin(function() {
            var e = $(this).parent().index();
            p = e, c = Math.ceil((p + 1) / s), $(o + " ul").css({
                "margin-left": + -p * u + "px"
            }), $(l + " .page strong").text(c)
        });
        setInterval(function() {
            p += s, c++, f()
        }, r)
    }
}

function slideProType3(e, t, n, i) {
    var a = e,
        o = n,
        l = i;
    slideProType3init(a, t, o);
    var s = 0,
        r = setInterval(function() {
            $(a + " ul li:eq(" + s + ")").removeClass("cnt cnt" + s), ++s >= $(a + " ul li").length && (s = 0), $(a + " ul li:eq(" + s + ")").addClass("ls" + s + " cnt cnt" + s), $(a + " ul li .binfo").fadeOut(o), $(a + " ul li:eq(" + s + ") .binfo").fadeIn(o)
        }, l);
    $(a + " ul li a").focusin(function() {
        clearInterval(r)
    }), $(a + " ul li .sti a").click(function() {
        clearInterval(r), slideProType3init(a, $(this).parent().parent().index())
    })
}

function slideProType3init(e, t, n) {
    for (var i = e, a = t, o = n, l = 0; l < $(i + " ul li").length; l++) $(i + " ul li:eq(" + l + ")").removeClass("cnt cnt" + l), $(i + " ul li:eq(" + l + ")").addClass("ls" + l);
    $(i + " ul li:eq(" + a + ")").addClass("ls" + a + " cnt cnt" + a), $(i + " ul li .binfo").fadeOut(o), $(i + " ul li:eq(" + a + ") .binfo").fadeIn(o)
}

function slideProType4(e, t, n, i, a) {
    var o = e,
        l = t,
        s = n,
        r = i,
        c = a,
        d = 1,
        u = $(o + " ul li").length,
        p = ($(o + " ul li").width(), 0),
        h = 0;
    if ($(l + " .page").html("<strong>" + d + "</strong>/" + Math.ceil(u / s)), u > s) {
        $(o + " ul li").css({
            "z-index": "0"
        }), $(o + " ul li:eq(0)").css({
            "z-index": "2"
        }), $(o + " ul li").css({
            clear: "left",
            position: "absolute",
            top: "0px"
        });
        var f = setInterval(function() {
            p += s, d++, m()
        }, c);
        if (u % s != 0) {
            for (var b = 0; b < s - u % s; b++) $(o + " ul ").append("<li></li>");
            u += s - u % s
        }

        function m() {
            p < 0 ? (p = u - s, d = Math.ceil(u / s)) : p > u - 1 && (p = 0, d = 1), $(o + " ul li").css({
                "z-index": "0"
            }), $(o + " ul li:eq(" + h + ")").css({
                "z-index": "1"
            }), $(o + " ul li:eq(" + p + ")").fadeOut(0), $(o + " ul li:eq(" + p + ")").fadeIn(r).css({
                "z-index": "2"
            }), h = p, $(l + " .page strong").text(d)
        }
        $(l + " .btnprev").click(function() {
            clearInterval(f), p -= s, d--, m()
        }), $(l + " .btnnext").click(function() {
            clearInterval(f), p += s, d++, m()
        }), $(o + " ul li a").focusin(function() {
            clearInterval(f);
            var e = $(this).parent().index();
            p = e, d = Math.ceil((p + 1) / s), $(o + " ul li").css({
                "z-index": "0"
            }), $(o + " ul li:eq(" + p + ")").fadeIn(0).css({
                "z-index": "2"
            }), $(l + " .page strong").text(d)
        })
    }
}

function slideProType5(e, t, n, i) {
    var a = e,
        o = t,
        l = n,
        s = 1,
        r = $(a + " ul li").length,
        c = $(a + " ul li").width(),
        d = 0;
    if ($(o + " .page").html("<strong>" + s + "</strong>/" + Math.ceil(r / l)), r > l) {
        if ($(a + " ul").css({
                "margin-left": "0px",
                width: +r * c + "px"
            }), $(o + " .btnnext").addClass("btnnexton"), r % l != 0) {
            for (var u = 0; u < l - r % l; u++) $(a + " ul ").append("<li></li>");
            r += l - r % l
        }

        function p() {
            $(a + " ul").animate({
                "margin-left": + -d * c + "px"
            }), $(o + " .btnprev").addClass("btnprevon"), $(o + " .btnnext").addClass("btnnexton"), d <= 0 ? $(o + " .btnprev").removeClass("btnprevon") : d > r - l - 1 && $(o + " .btnnext").removeClass("btnnexton"), $(o + " .page strong").text(s)
        }
        $(o + " .btnprev").click(function() {
            s--, (d -= l) <= 0 && (d = 0, s = 1), p()
        }), $(o + " .btnnext").click(function() {
            s++, (d += l) >= r - l - 1 && (d = r - l, s = Math.ceil(r / l)), p()
        })
    }
}

function chSelectBox(e) {
    var t = e;
    $(t).next("div").children("ul").children("li:eq(" + $(t)[0].selectedIndex + ")").addClass("open_selected").siblings().removeClass("open_selected"), $(t).next("div").children("a").html($(t + " option:selected").text())
}

function chAllSelectBox() {
    for (var e = $("select").length, t = 0; t < e; t++) $("select:eq(" + t + ")").next("div").children("ul").children("li:eq(" + $("select:eq(" + t + ")")[0].selectedIndex + ")").addClass("open_selected").siblings().removeClass("open_selected"), $("select:eq(" + t + ")").next("div").children("a").html($("select:eq(" + t + ") option:selected").text())
}

function resetSelectBox(e) {
    var t = e;
    $(t).next("div").remove(), wait(100).done(function() {
        $(t).selectCss()
    })
}

function proImgType(e, t) {
    var n = e,
        i = t;
    if ($(n).length > 1)
        for (var a = 0; a < $(n).length; a++) {
            $(n + ":eq(" + a + ") ul li").removeClass("f");
            for (var o = 0; o < $(n + ":eq(" + a + ") ul li").length; o++) o % i || $(n + ":eq(" + a + ") ul li:eq(" + o + ")").addClass("f")
        } else {
            $(n + " ul li").removeClass("f");
            for (o = 0; o < $(n + " ul li").length; o++) o % i || $(n + " ul li:eq(" + o + ")").addClass("f")
        }
}

function proListType(e) {
    var t = e;
    $(t + " ul li").removeClass("f"), $(t + " ul li:eq(0)").addClass("f")
}

function proCut(e, t, n) {
    for (var i = e, a = null == n ? $(i + " ul li").length : n, o = 0, l = 1; l <= a; l++) l % t == 0 && (o += 1);
    $(i + " ul li:gt(" + (t * o - 1) + ")").remove()
}

function specialtyImg() {
    var e = $(".specialtyti .specialtycon img").attr("src");
    $(".specialtyti").css({
        background: "url(" + e + ") no-repeat 50% 0"
    }), $(".specialtyti .specialtycon img").css({
        "margin-left": + -($(".specialtyti .specialtycon img").width() - 1060) / 2 + "px"
    })
}

function eventMenu(e, t) {
    $(".i0" + e).addClass("hover"), $(".sni" + (e - 1)).fadeIn(400), $(".sni" + (e - 1) + " ul li:eq(" + (t - 1) + ")").addClass("cnt")
}

function replyOpen(e) {
    $(".tbl_list_type1 .tbl_reply table .replywrite").fadeOut(0), $(e).fadeIn(0).attr("tabindex", "0").focus()
}

function proComSubOpen(e) {
    $(".tbl_list_type1 .recomcontent").fadeOut(0), $(e).fadeIn(0).attr("tabindex", "0").focus(), imgOveflowResize(".cmt_cont")
}

function qnaOpen(e) {
    $(".tbl_list_type1 .proqnacon").fadeOut(0), $(e).fadeIn(0)
}

function isNumberKey(e) {
    var t = e.which ? e.which : e.keyCode;
    return !(t > 31 && (t < 48 || t > 57) && (t < 96 || t > 105))
}

function banextend() {
    !(nowLocationHref_evt = location.href).indexOf("https") > -1 && !nowLocationHref_evt.indexOf("/event/affiliatesForm.do") > -1 && !nowLocationHref_evt.indexOf("/display/plan.do") > -1 && "no" != banextendgetCookie("dwextendban") && wait(500).done(function() {
        $("#hban .hbandbanner .ban_extend .banedetail").animate({
            height: "555px"
        }, 800, "easeOutBounce").css({
            height: "555px"
        }).addClass("open"), wait(300).done(function() {
            $(this).addClass("cnt")
        })
    }), (!nowLocationHref_evt.indexOf("/display/plan.do") > -1 || !nowLocationHref_evt.indexOf("/event/affiliatesForm.do") > -1) && banextendsetCookie("dwextendban", "no", 0)
}

function btnbanextend() {
    $("#hban .hbandbanner .ban_extend .banedetail").hasClass("open") ? banextendsetCookie("dwextendban", "no", 0) : (banextendsetCookie("dwextendban", "yes", 0), setTimeout(function() {}, 1500))
}

function banextendsetCookie(e, t, n) {
    (todayDate = new Date).setDate(todayDate.getDate() + n), document.cookie = e + "=" + escape(t) + ";path=/;"
}

function banextendgetCookie(e) {
    for (var t, n, i = !1, a = 0; a <= document.cookie.length;) {
        if (n = (t = a) + e.length, document.cookie.substring(t, n) == e) {
            i = !0;
            break
        }
        a++
    }
    return 1 == i ? (t = n + 1, (n = document.cookie.indexOf(";", t)) < t && (n = document.cookie.length), document.cookie.substring(t, n)) : ""
}

function layerPopupOpen(e) {
    "no" != getCookie(e) && ($("#" + e).show(), $("#" + e + " .btn_close").focus())
}

function layerPopupClose(e) {
    $("#" + e).hide(), $("#skipNavi").focus()
}

function thistabScroll(e) {
    (document.documentElement && document.documentElement.scrollTop || document.body.scrollTop) > 2200 ? (e.attr("style", "position:fixed;top:0;left:50%;margin-top:0;margin-left:-545px;z-index:100;"), e.find("li").attr("onclick", "window.scrollTo(0,2180);")) : (e.attr("style", ""), e.children("li").attr("onclick", ""))
}

function bandfTabShowHide() {
    var e;
    e = $(".bandfresh_wrap .tab"), $(window).scroll(function() {
        thistabScroll(e)
    })
}

function dwEncode(e) {
    var t, n, i;
    for (t = new Array, n = new Array, i = 0; i < 26; i++) t[t.length] = String.fromCharCode(65 + i);
    for (i = 0; i < 26; i++) t[t.length] = String.fromCharCode(97 + i);
    for (i = 0; i < 10; i++) t[t.length] = String.fromCharCode(48 + i);
    for (t[t.length] = "+", t[t.length] = "/", i = 0; i < 128; i++) n[n.length] = -1;
    for (i = 0; i < 64; i++) n[t[i].charCodeAt(0)] = i;
    for (var a, o, l, s, r, c, d, u = 0, p = -1, h = e.split(""), f = ""; 0 == u;) a = void 0 !== h[++p] ? h[p].charCodeAt(0) : (u = 1, 0), o = void 0 !== h[++p] ? h[p].charCodeAt(0) : (u += 1, 0), l = void 0 !== h[++p] ? h[p].charCodeAt(0) : (u += 1, 0), s = t[a >> 2], r = t[(3 & a) << 4 | o >> 4], c = t[(15 & o) << 2 | l >> 6], d = t[63 & l], u >= 1 && (d = "="), 2 == u && (c = "="), u < 3 && (f += s + r + c + d);
    for (var b = ""; f.length > 76;) b += f.substring(0, 76), f = f.substring(76);
    return b += f
}

function dwDecode(e) {
    var t, n;
    for (t = new Array, n = new Array, s = 0; s < 26; s++) t[t.length] = String.fromCharCode(65 + s);
    for (s = 0; s < 26; s++) t[t.length] = String.fromCharCode(97 + s);
    for (s = 0; s < 10; s++) t[t.length] = String.fromCharCode(48 + s);
    for (t[t.length] = "+", t[t.length] = "/", s = 0; s < 128; s++) n[n.length] = -1;
    for (s = 0; s < 64; s++) n[t[s].charCodeAt(0)] = s;
    var i = 0,
        a = 0,
        o = 0,
        l = 0,
        s = 0,
        r = 0,
        c = e.split(""),
        d = "",
        u = 0;
    do {
        s = n[l = c[u++].charCodeAt(0)], l >= 0 && l < 128 && -1 != s && (r % 4 == 0 ? i = s << 2 : r % 4 == 1 ? (i |= s >> 4, a = (15 & s) << 4) : r % 4 == 2 ? (a |= s >> 2, o = (3 & s) << 6) : o |= s, ++r % 4 == 0 && (d += String.fromCharCode(i) + String.fromCharCode(a) + String.fromCharCode(o)))
    } while (void 0 !== c[u]);
    return d += r % 4 == 3 ? String.fromCharCode(i) + String.fromCharCode(a) : r % 4 == 2 ? String.fromCharCode(i) : ""
}

function utf8_encode(e) {
    e = e.replace(/\r\n/g, "\n");
    for (var t = "", n = "", i = 0; i < e.length; i++)(n = e.charCodeAt(i)) < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192), t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(63 & n | 128));
    return t
}

function utf8_decode(e) {
    for (var t = "", n = 0, i = c1 = c2 = 0; n < e.length;)(i = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(i), n++) : i > 191 && i < 224 ? (c2 = e.charCodeAt(n + 1), t += String.fromCharCode((31 & i) << 6 | 63 & c2), n += 2) : (c2 = e.charCodeAt(n + 1), c3 = e.charCodeAt(n + 2), t += String.fromCharCode((15 & i) << 12 | (63 & c2) << 6 | 63 & c3), n += 3);
    return t
}

function toggleCont(obj, btn, anitime){
	if ( !anitime ){
		anitime = 400;
	}
	if( $(btn).hasClass("cnt") ){
		$(btn).removeClass("cnt");
		$(btn).children("i").children(".chtxt").text("내용보기");
		$(btn).parent().parent().children(obj).slideUp(anitime);
	}else{
		$(btn).addClass("cnt");
		$(btn).children("i").children(".chtxt").text("내용닫기");
		$(btn).parent().parent().children(obj).slideDown(anitime);
	}
}

Object.extend = function(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    },
    function() {
        var e = function(e, t) {
            this.hook = e, this.currentNum = t, this.objAnchor = [], this.objLink = [], this.objLI = e.find("li")
        };
        e.prototype = {
            _load: function() {
                for (var e = 0; e < this.objLI.length; e++) this.objLink[e] = this.objLI[e].getElementsByTagName("a")[0], this.objAnchor[e] = document.getElementById(this.objLink[e].getAttribute("href").split("#")[1]), 0 != e ? this.objAnchor[e].className += " hidden" : this.objLink[e].parentNode.className += " visible", this.objEvent(e);
                this.currentNum || this.objLink[0].onclick(), this.currentNum && this.objLink[this.currentNum - 1].onclick()
            },
            objEvent: function(e) {
                var t = this;
                t.objLink[e].onclick = function() {
                    for (var n = 0; n < t.objLI.length; n++) {
                        var i = t.objLink[n].getElementsByTagName("img")[0];
                        n == e ? (i && (i.src = i.src.replace("_off.gif", "_over.gif")), -1 == t.objLink[n].parentNode.className.indexOf("visible") && (t.objLink[n].parentNode.className += " visible"), t.objAnchor[n].className = t.objAnchor[n].className.replace("hidden", "")) : (i && (i.src = i.src.replace("_over.gif", "_off.gif")), t.objLink[n].parentNode.className = t.objLink[n].parentNode.className.replace("visible", ""), -1 == t.objAnchor[n].className.indexOf("hidden") && (t.objAnchor[n].className += " hidden"))
                    }
                    return !1
                }
            }
        }, window.FG_tabContent = e
    }(),
    function() {
        var e = function() {
            this.modalStyle = {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 99,
                height: this._size.oHeight,
                backgroundColor: "#000",
                opacity: .75
            }, this.layerStyle = {
                display: "block",
                position: "absolute",
                left: "50%",
                top: "100px",
                zIndex: 100
            }, this.option = {
                modalHide: !1,
                modalClose: !1
            }, this._target = null
        };
        return e.prototype = {
            _size: {
                cWidth: document.documentElement.clientWidth,
                cHeight: document.documentElement.clientHeight,
                oHeight: function() {
                    return Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight))
                }
            },
            show: function(e) {
                null == arguments.callee.caller ? this._target = null : (this._target = window.event || arguments.callee.caller.arguments[0], null != this._target && (this._target = this._target.srcElement ? this._target.srcElement : this._target.target)), this.layer = $(e), Object.extend(this.layerStyle, {
                    marginLeft: this.layer.width() / 2 * -1
                }), this.layer.css(this.layerStyle).attr("tabindex", 0).focus(), this.option.modalHide || (this.lightBox = $("<div />").appendTo("body").css(this.modalStyle).addClass("popupBg"), !0 === this.option.modalClose && this.lightBox.click($.proxy(this.hide, this))), this.layer.find(".layer-close").bind("click", $.proxy(this.hide, this))
            },
            hide: function(e) {
                return void 0 !== e && void 0 !== e[0] && (this.layer = $(e)), this.option.modalHide || this.lightBox && this.lightBox.remove(), null != this._target && $(this._target).attr("tabindex", 0).focus(), this.layer.hide(), !1
            }
        }, window.LAYER_POPUP = e, {
            load: function() {
                FG_layerPopup = new e
            }
        }
    }().load(),
    function() {
        var e = function() {
            this.modalStyle = {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 99,
                height: this._size.oHeight,
                backgroundColor: "#000",
                opacity: .7
            }, this.layerStyle = {
                display: "block",
                position: "absolute",
                left: "50%",
                top: "0",
                zIndex: 100
            }, this.option = {
                modalHide: !1,
                modalClose: !1
            }, this._target = null
        };
        return e.prototype = {
            _size: {
                cWidth: document.documentElement.clientWidth,
                cHeight: document.documentElement.clientHeight,
                oHeight: function() {
                    return Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight))
                }
            },
            show: function(e, t) {
                null == arguments.callee.caller ? this._target = null : (this._target = window.event || arguments.callee.caller.arguments[0], null != this._target && (this._target = this._target.srcElement ? this._target.srcElement : this._target.target)), tarTop = $(t).offset().top, this.layer = $(e), Object.extend(this.layerStyle, {
                    marginTop: tarTop + 35,
                    marginLeft: this.layer.width() / 2 * -1
                }), $("html, body").animate({
                    scrollTop: tarTop
                }, 1200, "easeOutExpo"), this.layer.css(this.layerStyle).attr("tabindex", 0).focus(), this.option.modalHide || (this.lightBox = $("<div />").appendTo("body").css(this.modalStyle).addClass("popupBg"), !0 === this.option.modalClose && this.lightBox.click($.proxy(this.hide, this))), this.layer.find(".layer-close").bind("click", $.proxy(this.hide, this))
            },
            hide: function(e) {
                return void 0 !== e && void 0 !== e[0] && (this.layer = $(e)), this.option.modalHide || this.lightBox && this.lightBox.remove(), null != this._target && $(this._target).attr("tabindex", 0).focus(), this.layer.hide(), !1
            }
        }, window.LAYER_POPUP02 = e, {
            load: function() {
                FG_layerPopup02 = new e
            }
        }
    }().load(),
    function() {
        var e = function() {
            this.modalStyle = {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 99,
                height: this._size.oHeight,
                backgroundColor: "#000",
                opacity: .75
            }, this.layerStyle = {
                display: "block",
                position: "fixed",
                left: "50%",
                top: "50%",
                zIndex: 100
            }, this.option = {
                modalHide: !1,
                modalClose: !1
            }, this._target = null
        };
        return e.prototype = {
            _size: {
                cWidth: document.documentElement.clientWidth,
                cHeight: document.documentElement.clientHeight,
                oHeight: function() {
                    return Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight))
                }
            },
            show: function(e) {
                null == arguments.callee.caller ? this._target = null : (this._target = window.event || arguments.callee.caller.arguments[0], null != this._target && (this._target = this._target.srcElement ? this._target.srcElement : this._target.target)), this.layer = $(e), Object.extend(this.layerStyle, {
                    marginTop: this.layer.height() / 2 * -1,
                    marginLeft: this.layer.width() / 2 * -1
                }), this.layer.css(this.layerStyle).attr("tabindex", 0).focus(), this.option.modalHide || (this.lightBox = $("<div />").appendTo("body").css(this.modalStyle).addClass("popupBg"), !0 === this.option.modalClose && this.lightBox.click($.proxy(this.hide, this))), this.layer.find(".layer-close").bind("click", $.proxy(this.hide, this))
            },
            hide: function(e) {
                return void 0 !== e && void 0 !== e[0] && (this.layer = $(e)), this.option.modalHide || this.lightBox && this.lightBox.remove(), null != this._target && $(this._target).attr("tabindex", 0).focus(), this.layer.hide(), !1
            }
        }, window.LAYER_POPUP03 = e, {
            load: function() {
                FG_layerPopup03 = new e
            }
        }
    }().load(),
    function() {
        var e = function() {
            this.modalStyle = {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 99,
                height: this._size.oHeight,
                backgroundColor: "#000",
                opacity: .75
            }, this.layerStyle = {
                display: "block",
                position: "fixed",
                left: "50%",
                top: "10px",
                bottom: "10px",
                zIndex: 100
            }, this.option = {
                modalHide: !1,
                modalClose: !1
            }, this._target = null
        };
        return e.prototype = {
            _size: {
                cWidth: document.documentElement.clientWidth,
                cHeight: document.documentElement.clientHeight,
                oHeight: function() {
                    return Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight))
                }
            },
            show: function(e) {
                null == arguments.callee.caller ? this._target = null : (this._target = window.event || arguments.callee.caller.arguments[0], null != this._target && (this._target = this._target.srcElement ? this._target.srcElement : this._target.target)), this.layer = $(e), Object.extend(this.layerStyle, {
                    marginLeft: this.layer.width() / 2 * -1
                }), this.layer.css(this.layerStyle).attr("tabindex", 0).focus(), this.option.modalHide || (this.lightBox = $("<div />").appendTo("body").css(this.modalStyle).addClass("popupBg"), !0 === this.option.modalClose && this.lightBox.click($.proxy(this.hide, this))), this.layer.find(".layer-close").bind("click", $.proxy(this.hide, this))
            },
            hide: function(e) {
                void 0 !== e && void 0 !== e[0] && (this.layer = $(e)), this.option.modalHide || this.lightBox && this.lightBox.remove(), null != this._target && $(this._target).attr("tabindex", 0).focus(), this.layer.hide(), goodIdxActive = 0
            }
        }, window.LAYER_POPUP_DEAL = e, {
            load: function() {
                FG_layerPopupDeal = new e
            }
        }
    }().load(), $(document).on("click", ".rbtntop a", function() {
        var e = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop,
            t = window.document.documentElement.clientHeight;
        return $(this).hasClass("btn_up") ? ($("html, body").stop().animate({
            scrollTop: e - t
        }, 400), !1) : $(this).hasClass("btn_down") ? ($("html, body").stop().animate({
            scrollTop: e + t
        }, 400), !1) : void 0
    }), window.addEventListener("DOMContentLoaded", function() {
        if (nowLocationHref_evt = location.href, todayDate = new Date, wid = Number(window.document.documentElement.clientWidth), hei = Number(window.document.documentElement.clientHeight), BlnAllCategory = !1, $("*").is(".tbox")) {
            $(".tbox").find(".tContent").hide(), 
            $(".tbox").find(".tContent:first").show(),
            $(".tbox").find("#settleBankPaymentMethod .tContent").hide(),
            $(".tbox").find(".tTitle:first").addClass("f"),
            $(".tbox").find(".tTitle:first").css({
                "z-index": "2"
            }).addClass("current");
            var e = $(".tbox").attr("class");
            if (e = e.split(" "), "" != (e = Number(e[0].substring(4) - 1))) {
                var t = $(".tbox .tTitle").length;
                Math.ceil(t / e)
            }
            if ($(".tbox").find(function() {
                    wait(10).done(function() {
                        tabinit()
                    })
                }), $(".tbox .tContent").attr("id", function() {
                    return idNumber("tno") + $(".tbox .tContent").index(this)
                }), $(".tbox .tTitle").click(function() {
                    $(this).find("input[disabled='disabled']").length > 0 || (showTabContent($(".tbox .tTitle").index(this)), tabinit())
                }), $("*").is(".full_tab .sub_tab")) {
                var n = $(".sub_tab").attr("class");
                if (n = n.split(" "), "" != (n = Number(n[1].substring(8)))) {
                    var i = $(".sub_tab li").length;
                    Math.ceil(i / n)
                }
            }
            $(".full_tab .sub_tab").find(function() {
                tabpinit()
            })
        }
        $(".layer_basket_buy a:last, .layer_selected a:last, .layer_basket a:last, .layer_multideliver a:last .layer_calculator a:last").focusout(function() {
            $(".lycurrent").focus()
        }), wait(100).done(function() {
            lyselectxy()
        }), $(".main_slide .tab ul li .depth2 .banner ul").each(function(e) {
            $(this).find("li").length < 3 && $(this).parents(".depth2").addClass("none")
        }), $("#header .hgnb .hm_allcategory").click(function() {
            BlnAllCategory || ($(this).addClass("cnt"), $.ajax({
                url: "/common/category.do",
                dataType: "json",
                async: !1
            }).done(function(e) {
                var t = "",
                    n = "",
                    i = "<div class='gnballcatels'>";
                $.each(e.list, function(a) {
                    var o = e.list[a].CC_LIST[0].CC_DEPTH,
                        l = e.list[a].CC_LIST[0].CC_SEQ,
                        s = e.list[a].CC_LIST[0].CC_NM,
                        r = e.list[a].CC_LIST[0].CC_GBN_CD;
                    if ("2" == o && ("3" != t && "2" != t || (i += "</ul></dd></dl></li>"), r != n && ("01" == r && (i += "<ul class='gnballtype gnballtype1'>"), "02" == r && (i += "</ul><ul class='gnballtype gnballtype2'>"), "03" == r && (i += "</ul><ul class='gnballtype gnballtype3'>")), i += "<li class='cate_" + l + "'><dl><dt>", i += "<a href='/category/main.do?cate_id=" + l + "'>" + s + "</a><a href='#none;' class='jumpcont'>" + s + " 카테고리 건너뛰기</a>", i += "</dt><dd><ul class='gnbdept2'>"), "3" == o) {
                        i += "<li><a href='/category/main.do?cate_id=" + l + "'>" + s + "</a>";
                        var c = !1,
                            d = "<ul class='gnbdept3'>";
                        $.each(e.list[a].CC_LIST, function(t) {
                            "4" == e.list[a].CC_LIST[t].CC_DEPTH && (c = !0, d += "<li><a href='/category/main.do?cate_id=" + e.list[a].CC_LIST[t].CC_SEQ + "'>" + e.list[a].CC_LIST[t].CC_NM + "</a></li>")
                        }), d += "</ul>", c && (i += d), i += "</li>"
                    }
                    t = o, n = r
                }), i += "</ul></dd></dl></li></ul>", i += "<p class='btn_gnbclose'><a href='#none' title='전체 카테고리 화면 닫기'>닫기</a></p></div>", $("#target_allCategory").html(i), $("#hban_wrap").css({
                    "z-index": "10"
                }), $("#header").css({
                    "z-index": "10"
                }), $("#leftquick, #rightquick").css({
                    "z-index": "21"
                }), $("#footer_wrap").css({
                    "z-index": "8"
                }), $(".gnbmart").fadeOut(200), $(".gnballcatels").show(), $(".gnbdim").show(), $("#header .gnballtype1 li:last-child dt, #header .gnballtype2 li:last-child dt, #header .gnballtype3 li:last-child dt").addClass("l"), $("#header .gnballtype1 li:last-child dd, #header .gnballtype2 li:last-child dd, #header .gnballtype3 li:last-child dd").addClass("l"), $("#header .gnballtype li dd li:last-child").addClass("l")
            }), $("#header").on("click", ".btn_gnbclose a", function() {
                $("#header .hgnb .hm_allcategory").removeClass("cnt"), $(".gnballcatels").hide(), $(".gnbdim").hide(0, function() {
                    $("#hban_wrap").css({
                        "z-index": "60"
                    }), $("#header .hsearch, #header .hsearchrank, #header .hrmenu").css({
                        "z-index": "8"
                    }), $("#header .hbandbanner").css({
                        "z-index": "9"
                    }), $("#leftquick, #rightquick").css({
                        "z-index": "50"
                    }), $("#footer_wrap").css({
                        "z-index": "40"
                    })
                })
            }), $("#header").on("mouseover focusin", ".gnbdept2>li", function() {
                $(this).children(".gnbdept3").find("li").length
            }), $("#header").on("mouseout focusout", ".gnbdept2>li", function() {}), $("#header").on("click", ".jumpcont", function() {
                var e = Number($(this).parent().parent().parent().parent().get(0).className.substring(21)),
                    t = Number($(this).parent().parent().parent().index() + 1);
                "" != $(".gnballtype" + e + ">li:eq(" + t + ")").text() ? $(".gnballtype" + e + ">li:eq(" + t + ") dl dt a:first").focus() : "" != $(".gnballtype" + (e + 1) + ">li:eq(0)").text() ? $(".gnballtype" + (e + 1) + ">li:eq(0) dl dt a:first").focus() : $(".gnballcatels .btn_gnbclose a").focus()
            }), BlnAllCategory = !1)
        }), nowLocationHref_evt.indexOf("bandFresh") > -1 && bandfTabShowHide();
        var a = "#" + $("#hban .ban_extend .banedetail .hbandbg_left").data("bgcolor"),
            o = "#" + $("#hban .ban_extend .banedetail .hbandbg_right").data("bgcolor"),
            l = "#" + $("#hban .ban_extend .banes .hbandbg_left").data("bgcolor"),
            s = "#" + $("#hban .ban_extend .banes .hbandbg_right").data("bgcolor");
        $("#hban .ban_extend .banedetail").css({
            background: "linear-gradient(to right," + a + " 20%, " + o + " 80%)"
        }), $("#hban .ban_extend .banes").css({
            background: "linear-gradient(to right," + l + " 20%, " + s + " 80%)"
        }), $("#hban .ban_default .hbandbg_left").css({
            background: "url(" + $("#hban .ban_default .hbandbg_left img").attr("src") + ") no-repeat"
        }), $("#hban .ban_default .hbandbg_right").css({
            background: "url(" + $("#hban .ban_default .hbandbg_right img").attr("src") + ") no-repeat"
        }), $("#hban .hbandbanner .ban_extend .banes .btn").click(function() {
            $("#hban .hbandbanner .ban_extend .banedetail").hasClass("open") ? ($("#hban .hbandbanner .ban_extend .banedetail").animate({
                height: "0"
            }, 400).removeClass("open"), $("#hban .hbandbanner .ban_extend .banedetail").attr("tabindex", "0").focus(), $(this).removeClass("cnt")) : ($("#hban .hbandbanner .ban_extend .banedetail").animate({
                height: "555px"
            }, 800, "easeOutBounce").addClass("open"), $(this).addClass("cnt"))
        }), $("#hban .hbandbanner .ban_extend .btn_close").click(function() {
            $("#hban .hbandbanner .ban_extend .banedetail").animate({
                height: "0"
            }, 400).removeClass("open"), $("#hban .hbandbanner .ban_extend .banedetail").attr("tabindex", "0").focus(), $("#hban .hbandbanner .ban_extend .banes .btn").removeClass("cnt")
        }), $("#header .hbookmark .popup .inner .send_sms").click(function() {
            if ("" == $("#appDn-hpNumber01").val() || "" == $("#appDn-hpNumber02").val() || "" == $("#appDn-hpNumber03").val()) return alert("정확한 핸드폰 번호를 입력해주세요."), $("#appDn-hpNumber01").focus(), !1;
            if ("000" == $("#appDn-hpNumber02").val() || "0000" == $("#appDn-hpNumber02").val()) return alert("정확한 핸드폰 번호를 입력해주세요."), $("#appDn-hpNumber02").focus(), !1;
            if ("000" == $("#appDn-hpNumber03").val() || "0000" == $("#appDn-hpNumber03").val()) return alert("정확한 핸드폰 번호를 입력해주세요."), $("#appDn-hpNumber03").focus(), !1;
            if (0 == ("010" == $("#appDn-hpNumber01").val() || "011" == $("#appDn-hpNumber01").val() || "016" == $("#appDn-hpNumber01").val() || "017" == $("#appDn-hpNumber01").val() || "018" == $("#appDn-hpNumber01").val() || "019" == $("#appDn-hpNumber01").val() || "070" == $("#appDn-hpNumber01").val())) return alert("정확한 핸드폰 번호를 입력해주세요."), $("#appDn-hpNumber01").focus(), !1;
            if (!/(\d{4}|\d{3})/g.test($("#appDn-hpNumber02").val())) return $("#appDn-hpNumber02").focus(), alert("정확한 핸드폰 번호를 입력해주세요."), !1;
            if (!/\d{4}$/g.test($("#appDn-hpNumber03").val())) return $("#appDn-hpNumber03").focus(), alert("정확한 핸드폰 번호를 입력해주세요."), !1;
            if ($("#appDn-hpNumber01").value) {
                var e = $("#appDn-hpNumber01").val() + "-" + $("#appDn-hpNumber02").val() + "-" + $("#appDn-hpNumber03").val();
                if (!/(01[016789])[-](\d{4}|\d{3})[-]\d{4}$/g.test(e)) return alert("정확한 핸드폰 번호를 입력해주세요."), !1
            }
            var t = $("#appDn-hpNumber01").val(),
                n = $("#appDn-hpNumber02").val(),
                i = $("#appDn-hpNumber03").val(),
                a = t.concat(n, i);
            $.ajax({
                url: "/event/evtls/appSms.do",
                dataType: "json",
                type: "post",
                data: {
                    hpNumber: a
                },
                success: function(e) {
                    $(".popup.request").hide(), $(".popup.complete").show(), $(".appDn-hpNumber").val("")
                },
                error: function() {
                    alert("오류가 발생하였습니다. 다시 시도해 주세요.")
                }
            })
        }), $("#header .hsearchrank").bind("mouseover focusin", function() {
            $(".hsearchrank .hsrls").addClass("cnt")
        }), $("#header .hsearchrank").bind("mouseout focusout", function() {
            $(".hsearchrank .hsrls").removeClass("cnt")
        }), $("#header .hsearch .inbtn").focusin(function() {
            $("#header .hsearch .hsearchauto").hide(0)
        }), $("#header .hsearch form fieldset>.jumpcont").click(function() {
            $("#header .hsearch .hsearchauto").attr("tabindex", "0").focus()
        }), $("#header .hsearch .hsearchauto .btn").bind("click", function() {
            $("#header .hsearch .inbtn").attr("tabindex", "0").focus()
        }), $("#header .hsearch .autotxt .jumpcont").click(function() {
            $(this).addClass("autojumcnt"), $("#header .hsearch #autosearchcon li:first-child a").attr("tabindex", "0").focus()
        }), $("#header .hsearch #autosearchcon li:last-child a").focusout(function() {
            $("#header .hsearch .autotxt .autojumcnt").attr("tabindex", "0").focus(), $("#header .hsearch .autotxt a").removeClass("autojumcnt")
        }), $("#gnb .gnbls .hm_allcategory").click(function() {
            $(".hgnb a").removeClass("hgnbcurrent")
        }), $("#gnb .gnbdim").click(function() {
            $(".gnballcatels").fadeOut(200), $(".gnbdim").fadeOut(0, function() {
                $("#hban_wrap").css({
                    "z-index": "60"
                }), $("#header .hsearch, #header .hsearchrank, #header .hrmenu").css({
                    "z-index": "8"
                }), $("#header .hbandbanner").css({
                    "z-index": "9"
                }), $("#leftquick, #rightquick").css({
                    "z-index": "50"
                }), $("#footer_wrap").css({
                    "z-index": "40"
                })
            })
        }), nowLocationHref_evt.indexOf("plan.do") > -1 && $(".content_box1060").hasClass("etc") && ($("#leftquick").remove(), $(".layer_popup_small").remove()), $(window).resize(function() {
            lyselectxy()
        }), wait(200).done(function() {
            slideProType2(".left_marketing .lqsmart", ".left_marketing .lqsmartbtn", 1, 400, 4e3), slideProType2(".left_plan .lqsmart", ".left_plan .lqsmartbtn", 1, 400, 4e3)
        });
        var r = document.getElementById("leftquick"),
            c = document.getElementById("rightquick"),
            d = window.document.documentElement.clientHeight / 2 - 100;
        Number(document.documentElement && document.documentElement.scrollTop || document.body.scrollTop);
        (wait(300).done(function() {
            r && (r.style.display = "block"), c && (c.style.display = "block"), nowLocationHref_evt.indexOf("/main.do?cate_id=01110040") > -1 || nowLocationHref_evt.indexOf("/gnc/") > -1 ? (r && (r.style.display = "none"), c && (c.style.display = "none")) : nowLocationHref_evt.indexOf("/order/") > -1 && r && (r.style.display = "none"), ($("*").is(".band_search") || $("*").is(".search")) && (r && (r.style.marginTop = "0"), c && (c.style.marginTop = "0"))
        }), $(window).scroll(function() {
            Number(document.documentElement && document.documentElement.scrollTop || document.body.scrollTop) > d ? (r && r.setAttribute("class", "scrolldown"), c && c.setAttribute("class", "scrolldown")) : (r && r.setAttribute("class", ""), c && c.setAttribute("class", ""))
        }), nowLocationHref_evt.indexOf("/secure/login.do") > -1 || nowLocationHref_evt.indexOf("/employee/emp_Main.do") > -1) || "hidden" !== $("#leftquick").css("visibility") && ($(document).on("click", ".left_pop .link", function() {
            $(this).next(".popup").show()
        }), $(document).on("click", ".left_pop .btn_close", function() {
            $(this).parents(".popup").hide()
        }), $(document).on("click", ".left_pop p span", function() {
            var e = $(this).parents(".popup").find("input").attr("id"),
                t = e.substring(e.length - 2, e.length);
            $("#notToday" + t).prop("checked") && setCookie_Layer("layerPopup" + t, "no", 1), $(this).parents(".popup").hide()
        }), $(document).on("click", ".layer_popup_small.ly_all", function() {
            $("#wrap").append('<div class="dim"></div>'), $(".layer_popup_big").show()
        }), $(document).on("click", ".layer_popup_big .btn", function() {
            $(".dim").remove(), $(".layer_popup_big").hide(), setCookie_Layer("layerPopup", "no", 1)
        }), $(document).on("click", ".layer_popup_big a", function() {
            setCookie_Layer("layerPopup", "no", 1)
        }));
        if (nowLocationHref_evt.indexOf("/index.do") > -1 && (getCookie("layerPopup01"), getCookie("layerPopup02"), getCookie("layerPopup")), $("*").is("#event_header")) {
            $("#nav_event>li>a").click(function() {
                $("#nav_event>li>a").removeClass("hover"), $($(this).parent().index() + 1).addClass("hover"), $(".s_nav").fadeOut(200), $(".sni" + $(this).parent().index()).fadeIn(400)
            }), slideProType4("#eventnotice", "#eventnotice_btn", 1, 400, 5e3);
            for (var u = 0; u < $(".reviewList_wrap").length; u++) $(".reviewList_wrap:eq(" + u + ") .title_event h3 img").attr("src").indexOf("title_cultureReview_event.gif") > 0 && $(".reviewList_wrap:eq(" + u + ") .event_reviewList .item a img").css({
                width: "224px",
                height: "313px"
            })
        }
        $(".btn_datePicker").click(function() {
            $(".datecurrent").removeClass("datecurrent"), datepickerInTxt = $(this).prev("input"), $(this).attr("tabindex", "0").addClass("datecurrent"), $(".datePicker").hide(), lyFadein($(this).next(".datePicker"))
        }), $(".datePicker").datepicker({}), $(".biz_order").on("click", "#tdProduct .del_product", function() {
            var e = $(this).parent().index();
            wait(200).done(function() {
                $("#tdProduct div:eq(" + e + ")").prop("tagName") ? $("#tdProduct div:eq(" + e + ")").focus() : $("#OM_DELIVERY_TYPE1").focus()
            })
        }), $(".shipping_type_list .catelisttype1 ul").each(function(e) {
            $(this).find("li").length < 3 && $(this).remove()
        }), $(".event").on("click", "#tdRecipeProduct .del_recipe_product", function() {
            $(this).parent().next("div").prop("tagName") ? $(this).parent().next("div").focus() : $("#tdRecipeProduct").parent().parent().parent().parent().next("div").focus()
        });
        var p = 0;
        if ($("#path .pathls>li>a").click(function() {
                $(".lycurrent").removeClass("lycurrent"), $(this).addClass("lycurrent"), lySlideup(".psubls"), p = $(this).parent().index(), "block" == $(this).next(".psubls").css("display") ? lySlideup($(this).next(".psubls")) : lySlidedown($(this).next(".psubls"))
            }), $("#content_title #path .pathls .psubls ul li a").click(function() {
                $("#path .pathls>li:eq(" + p + ") a em").text($(this).text()), lySlideup(".psubls"), $(".lycurrent").focus()
            }), $(".categorylist .cclose").click(function() {
                $(this).text().indexOf("열기") > 0 ? $(this).html("카테고리 접기<span class='bl'></span>") : $(this).html("카테고리 열기<span class='bl blon'></span>")
            }), $("*").is(".catelisttype1"))
            for (j = 0; j < $(".catelisttype1").length; j++)
                for (u = 0; u <= $(".catelisttype1:eq(" + j + ") ul li").length; u++) u % 5 == 0 && $(".catelisttype1:eq(" + j + ") ul li:eq(" + u + ")").addClass("f"), $(".catelisttype1 ul li:eq(1)").addClass("top"), $(".catelisttype1 ul li:eq(2)").addClass("top"), $(".catelisttype1 ul li:eq(1) .btn_quick").addClass("small"), $(".catelisttype1 ul li:eq(2) .btn_quick").addClass("small"), $(".catelisttype1 ul li:eq(3) .btn_quick").addClass("small"), $(".catelisttype1 ul li:eq(4) .btn_quick").addClass("small");
        if ($("*").is(".shipping_recom .catelisttype1") && $(".shipping_recom .catelisttype1 ul li:first-child").removeClass("f"), $("*").is(".shipping_type_list .catelisttype1") && $(".shipping_type_list .catelisttype1 ul li").removeClass("f"), $("*").is("#content_title") && $("#content_title #path .pathls li:last-child").addClass("l"), $("*").is(".tbl_list_type1") && ($(".tbl_list_type1 table tbody tr:first-child td").addClass("f"), $(".tbl_list_type1 table tbody tr:first-child th").addClass("f")), $("*").is(".staff_menu") && $(".staff_menu .staff_sale ul li:last-child").addClass("l"), $("*").is(".freight_economy_pop") && $(".cart_popup .freight_economy_pop .tab li:first-child").addClass("f"), $("*").is(".category") && $(".category #content .content_box1060 .jumpcont").click(function() {
                $(this).parent().parent().parent().next("div").focus()
            }), $(".recipe_slist .list>ul>li:last").addClass("last"), $(".comments_list table tbody tr:last").addClass("tr_last"), $(".notice_mydw ul li:last-child").addClass("last_child"), $(".tbl_list_mydw tbody tr:last-child").addClass("last"), $(".mydw .order_payable .other .i_discount>ul>li:last-child").addClass("bdr_none"), $(".customer").on("click", ".tbl_list_type1 .proqnacon .close", function() {
                $(this).parent().parent().parent().prev("tr").children("td").children("a").focus()
            }), $("*").is(".search") && $("*").is(".search_result_list") && $("*").is(".search_result_box") && $(".search .search_result_list .search_result_box:even").addClass("bg"), $("select.select_style_footer").selectCss(), $("#footer .fsite .btn_fsite").click(function() {
                $("#fsitels option:selected").attr("value") ? window.open($("#fsitels option:selected").attr("value"), "_blank") : (alert("계열사를 선택해주세요."), $("#footer .fsite .outSel").attr("tabindex", "0").focus())
            }), window.navigator.userAgent.toLowerCase().match(/mobile/i) && ($("#footer .fbtnmobile").css({
                display: "block"
            }), $(window).on("scroll resize", function() {
                $("#leftquick").css("left", "0px")
            })), $("*").is("#recipe_view")) {
            var h = $("#recipe_view .particular .contxt img").length;
            for (u = 0; u < h; u++) $("#recipe_view .particular .contxt img:eq(" + u + ")").attr("alt") || $("#recipe_view .particular .contxt img:eq(" + u + ")").attr("alt", "")
        }
        wait(400).done(function() {
            banextend()
        }), $(".overlap").append('<span class="bg"></span>'), $(".overlap").each(function(e) {
            var t = $(this).children("div").length;
            3 === t ? $(this).addClass("idx3") : 2 === t ? $(this).addClass("idx2") : 1 === t && $(this).addClass("idx1")
        }), wait(500).done(function() {
            $(".band_search .inner .model .obj").animate({
                left: "20px",
                opacity: "1"
            }, 600)
        }), wait(1e3).done(function() {
            $(".band_search .inner p").animate({
                left: "962px",
                opacity: "1"
            }, 1e3, "easeOutBack")
        }), null != $(".layerPopupType01").val() && (floating = function() {
            $(".layerPopupType01 .popup_big_con").animate({
                top: "0px"
            }, 400).animate({
                top: "-10px"
            }, 500, function() {
                floating()
            })
        }, floating(), $(".layerPopupType01 .popup_small").hover(function() {
            $(".layerPopupType01 .popup_small .txt").effect("bounce", {
                times: 3,
                distance: 5
            }, "slow"), bounce = setInterval(function() {
                $(".layerPopupType01 .popup_small .txt").effect("bounce", {
                    times: 3,
                    distance: 5
                }, "slow")
            }, 1200)
        }, function() {
            clearInterval(bounce)
        }), "no" === getCookie("layerPopup") ? ($(".layerPopupType01 .btn_close").hide(), $(".layerPopupType01 .popup_big").addClass("active"), $(".layerPopupType01 .popup_big").css({
            opacity: "0.2"
        }, 400), $(".layerPopupType01 .popup_big img").css({
            width: "0"
        }, 400), $(".layerPopupType01 .popup_small").fadeIn()) : wait(500).done(function() {
            $(".layerPopupType01 .btn_close").focus()
        }), $(".layerPopupType01 .btn_close").click(function() {
            return $(".layerPopupType01 .btn_close").hide(), $(".layerPopupType01 .popup_big").addClass("active"), $(".layerPopupType01 .popup_big").animate({
                opacity: "0.2"
            }, 400), $(".layerPopupType01 .popup_big img").animate({
                width: "0"
            }, 400), $(".layerPopupType01 .popup_small").fadeIn(), setCookie_Layer("layerPopup", "no", 1), !1
        }), $(".layerPopupType01 .popup_small").click(function() {
            return $(".dim").fadeIn(), $(".layerPopupType01 .popup_big").removeClass("active"), $(".layerPopupType01 .popup_big").animate({
                opacity: "1"
            }, 400), $(".layerPopupType01 .popup_big img").animate({
                width: "100%"
            }, 400, function() {
                $(".layerPopupType01 .btn_close").fadeIn()
            }), $(".layerPopupType01 .popup_small").fadeOut(), !1
        }), $(document).keyup(function(e) {
            27 == e.keyCode && ($(".layerPopupType01 .btn_close").click(), $("#skipNavi").focus())
        })), null != $(".layerPopupType01").val() && (DW = $(document).width(), DW < 1320 ? closeWidth = "-155" : closeWidth = "-250", $(window).resize(function() {
            DW = window.document.documentElement.clientWidth, closeWidth = DW < 1320 ? "-155" : "-250", $(".layerPopupType02").hasClass("hidestatus") && $(".layerPopupType02").css({
                left: "100%",
                marginLeft: +closeWidth + "px"
            }, 1e3, "easeOutBack")
        }), "no" == getCookie("layerPopup02") && ($(".layerPopupType02").addClass("hidestatus"), $(".layerPopupType02").css({
            left: "100%",
            marginLeft: +closeWidth + "px"
        }, 1e3, "easeOutBack"), $(".layerPopupType02 .img01").css({
            marginLeft: "64px"
        }, 1e3, "easeOutBack"), $(".layerPopupType02 .btn02img").fadeIn(), $(".layerPopupType02 .btn02").show()), wait(500).done(function() {
            $(".layerPopupType02").animate({
                top: "265px",
                opacity: "1"
            }, 800, "easeOutBack")
        }), wait(1500).done(function() {
            $(".layerPopupType02 .btn").fadeIn(800)
        }), $(".layerPopupType02 .btn").click(function() {
            return $(".layerPopupType02").addClass("hidestatus"), $(".layerPopupType02").animate({
                left: "100%",
                marginLeft: +closeWidth + "px"
            }, 1e3, "easeOutBack"), $(".layerPopupType02 .img01").animate({
                marginLeft: "64px"
            }, 1e3, "easeOutBack"), $(".layerPopupType02 .btn02img").fadeIn(), $(".layerPopupType02 .btn02").show(), setCookie_Layer("layerPopup02", "no", 1), !1
        }), $(".layerPopupType02 .btn02").click(function() {
            return $(".layerPopupType02").removeClass("hidestatus"), $(".layerPopupType02 .btn02img").fadeOut(), $(".layerPopupType02 .btn02").hide(), $(".layerPopupType02").animate({
                left: "50%",
                marginLeft: "-514px"
            }, 1e3, "easeOutBack"), $(".layerPopupType02 .img01").animate({
                marginLeft: "0"
            }, 1e3, "easeOutBack"), !1
        }), $(document).keyup(function(e) {
            27 == e.keyCode && ($(".layerPopupType02 .btn").click(), $("#skipNavi").focus())
        }));
        var f = $(".planls").length;
        f > 1 ? $(".planls").each(function(e) {
            proCut("#tno" + e + " .planls", 3)
        }) : 1 === f && proCut(".planls", 3), $(".todaybuy").click(function() {
            location.href = "/display/todayMainNew.do"
        })
    });