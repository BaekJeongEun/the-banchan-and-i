var today = (new Date).format("yyyyMMdd")
  , todayNow = (new Date).format("yyyyMMddHHmmss");
function chkStartEndDate(t, e) {
    return null == t && (t = 0),
    parseInt(today) >= parseInt(t) && parseInt(today) <= parseInt(e)
}
function cartPlusCouponDown(t) {
    var e = (new Date).format("yyyyMMddHHmmss").substring(8, 10);
    t *= 1,
    e *= 1,
    checkLogin().done(function(n) {
        if (n.rst) {
            var o = !1
              , a = ""
              , r = ""
              , s = 100;
            if (chkStartEndDate(20160501, 20160531) ? r = "000000022241" : chkStartEndDate(20160601, 20160631) ? r = "000000022258" : chkStartEndDate(20160701, 20160731) ? (r = "000000022284",
            s = 200) : chkStartEndDate(20160801, 20160823) ? (r = "000000022313",
            s = 100) : chkStartEndDate(201608241, 20160831) ? (r = "000000022340",
            s = 100) : chkStartEndDate(20160901, 20160931) && (r = "000000022346",
            s = 100),
            10 == t) {
                if (!(10 <= e && e < 16 && chkStartEndDate(20160701, 20160931)))
                    return void alert("이벤트 시간이 아닙니다.");
                a = "오전 장바구니 쿠폰",
                o = !0
            } else if (16 == t) {
                if (!(16 <= e && e <= 23 && chkStartEndDate(20160701, 20160931)))
                    return void alert("이벤트 시간이 아닙니다.");
                a = "오후 장바구니 쿠폰",
                o = !0
            }
            if (!o)
                return void alert("이벤트 기간이 아닙니다.");
            $.ajax({
                url: "/event/evtls/CouponIssuedCountByTime.do",
                dataType: "json",
                type: "post",
                data: {
                    MC_SEQ: r,
                    EventHistoryOption: t
                }
            }).done(function(t) {
                t.rntCount < s ? downCoupon(r) : alert(a + " 이 마감되었습니다. 다음 장바구니 쿠폰에 응모해주세요!.")
            })
        } else
            confirm("로그인이 필요합니다.\n로그인하시겠습니까?") && goLogin()
    })
}
function samsungDirect() {
    checkLogin().done(function(t) {
        if (!t.rst)
            return alert("로그인이 필요합니다."),
            void goLogin();
        "" != $("#sessionCM_SEQ").val() && "9999999999999999" != $("#sessionCM_SEQ").val() ? window.open("http://direct.samsungfire.com/CR_MyAnycarWeb/overture_index.jsp?OTK=A1608AF0034&Response_idx=" + $("#sessionCM_SEQ").val(), "_blank") : "9999999999999999" == $("#sessionCM_SEQ").val() ? alert("세션이 종료되었습니다. 다시 로그인 하시기 바랍니다.") : alert("고객번호가 잘못되었습니다.\n고객센터에 문의바랍니다.")
    })
}
function samsungDirect2() {
    checkLogin().done(function(t) {
        if (!t.rst)
            return alert("로그인이 필요합니다."),
            void goLogin();
        "" != $("#sessionCM_SEQ").val() && "9999999999999999" != $("#sessionCM_SEQ").val() ? window.open("http://direct.samsungfire.com/CR_MyAnycarWeb/overture_index.jsp?OTK=A1611AF0015&Response_idx=" + $("#sessionCM_SEQ").val(), "_blank") : "9999999999999999" == $("#sessionCM_SEQ").val() ? alert("세션이 종료되었습니다. 다시 로그인 하시기 바랍니다.") : alert("고객번호가 잘못되었습니다.\n고객센터에 문의바랍니다.")
    })
}
function fromNaverCustomerDownCoupon() {
    chkStartEndDate(20150819, 20150906) ? downCoupon_noReload("000000021596") : alert("기간이 종료되었습니다.")
}
function newArrivalCollectionDcEvent() {
    downCoupon("000000020419")
}
function goEventRecommend(t, e) {
    checkLogin().done(function(n) {
        n.rst ? $.ajax({
            url: "/event/evtls/eventRecommendProc.do",
            dataType: "json",
            type: "post",
            data: {
                EES_SEQ: t,
                EEM_SEQ: e
            }
        }).done(function(t) {
            alert(t.messages)
        }) : confirm("로그인이 필요합니다.\n로그인하시겠습니까?") && goLogin()
    })
}
function addEventComment(t, e, n) {
    checkLogin().done(function(o) {
        if (o.rst) {
            var a = "";
            "RR" == (n = void 0 !== n ? n : "B") ? (procUrl = "/event/evtls/eventCommentRProc_Json.do",
            listUrl = "/event/evtls/eventRepleCmtList.do",
            o = {
                EECS_COMMENT: a = $.trim($("#EEC_COMMENT_R" + e).val()),
                EEC_SEQ: e,
                pageStatus: t
            }) : (procUrl = "/event/evtls/eventCommentProc_Json.do",
            listUrl = "R" == n ? "/event/evtls/eventRepleCmtList.do" : "/event/evtls/eventCmtList.do",
            o = {
                EEC_COMMENT: a = $.trim($("#EEC_COMMENT").val()),
                EES_SEQ: e,
                pageStatus: t
            }),
            a ? ($.ajax({
                url: procUrl,
                dataType: "json",
                data: o,
                type: "POST",
                success: function(t) {
                    $("#EEC_COMMENT").val(""),
                    $("#reviewComments").load(listUrl, {
                        EES_SEQ: $("#EES_SEQ").val(),
                        gotoPage: $("#gotoPage").val()
                    }),
                    alert(t.messages)
                },
                error: function() {
                    alert("오류가 발생하였습니다. 다시 시도해 주세요."),
                    $("#EEC_COMMENT").focus()
                }
            }),
            $("#EEC_COMMENT_BTN").focus()) : alert("댓글 내용을 입력해주세요.")
        } else
            confirm("로그인이 필요합니다.\n로그인하시겠습니까?") && goLogin()
    })
}
function delEventComment(t, e, n, o) {
    confirm("댓글을 삭제하시겠습니까?") && ("RR" == (o = void 0 !== o ? o : "B") ? (procUrl = "/event/evtls/eventCommentRProc_Json.do",
    listUrl = "/event/evtls/eventRepleCmtList.do",
    data = {
        EECS_SEQ: e,
        EEC_SEQ: n,
        pageStatus: t
    }) : (procUrl = "/event/evtls/eventCommentProc_Json.do",
    listUrl = "R" == o ? "/event/evtls/eventRepleCmtList.do" : "/event/evtls/eventCmtList.do",
    data = {
        EES_SEQ: e,
        EEC_SEQ: n,
        pageStatus: t
    }),
    $.ajax({
        url: procUrl,
        dataType: "json",
        data: data,
        type: "POST",
        success: function(t) {
            $("#reviewComments").load(listUrl, {
                EES_SEQ: $("#EES_SEQ").val(),
                gotoPage: $("#gotoPage").val()
            }),
            alert(t.messages)
        },
        error: function() {
            alert("오류가 발생하였습니다. 다시 시도해 주세요."),
            $("#EEC_COMMENT").focus()
        }
    }))
}
function goEventCommentForm(t, e, n) {
    var o = $("#commentForm_YN").val()
      , a = $("#commentForm_id").val();
    if ("Y" == o && a == e)
        $("#tr_" + e + "_form").remove(),
        $("#commentForm_YN").val("N");
    else if ("Y" == o && a != e) {
        $(".reply_form").remove();
        var r = "";
        r += '<tr id="tr_' + e + '_form" class="reply_form">',
        r += '<td class="tpl">',
        r += '<div class="content">',
        t || (r += "<em>로그인 후 작성 해 주십시오.</em>"),
        r += '<div class="form_area">',
        r += '<textarea id="EEC_COMMENT_R' + n + '" name="EEC_COMMENT_R' + n + '" cols="10" rows="10" class="" title="댓글 입력"></textarea>',
        r += '<input type="submit" class="crounded" value="작성" onclick="javascript:addEventComment(\'N\',\'' + n + "','RR');return false;\" />",
        r += "</div>",
        r += "</div>",
        r += "</td>",
        r += "<td></td>",
        r += "<td></td>",
        r += "</tr>",
        $("#tr_" + e).after(r),
        $("#EEC_COMMENT_R" + n).focus(),
        $("#commentForm_YN").val("Y"),
        $("#commentForm_id").val(e)
    } else {
        r = "";
        r += '<tr id="tr_' + e + '_form" class="reply_form">',
        r += '<td class="tpl">',
        r += '<div class="content">',
        t || (r += "<em>로그인 후 작성 해 주십시오.</em>"),
        r += '<div class="form_area">',
        r += '<textarea id="EEC_COMMENT_R' + n + '" name="EEC_COMMENT_R' + n + '" cols="10" rows="10" class="" title="댓글 입력"></textarea>',
        r += '<input type="submit" class="crounded" value="작성" onclick="javascript:addEventComment(\'N\',\'' + n + "','RR');return false;\" />",
        r += "</div>",
        r += "</div>",
        r += "</td>",
        r += "<td></td>",
        r += "<td></td>",
        r += "</tr>",
        $("#tr_" + e).after(r),
        $("#EEC_COMMENT_R" + n).focus(),
        $("#commentForm_YN").val("Y"),
        $("#commentForm_id").val(e)
    }
}
var btnSts = !0;
function mellodyCampCoupon() {
    checkLogin().done(function(t) {
        if (t.rst) {
            if (!chkStartEndDate(null, 20150915))
                return void alert("이벤트 기간이 아닙니다.");
            if (!btnSts)
                return void alert("이벤트 신청중입니다..[중복클릭 방지]");
            btnSts = !1,
            $.ajax({
                url: "/event/evtls/mellodyCampCoupon.do",
                dataType: "json",
                type: "post",
                data: {},
                success: function(t) {
                    alert(t.messages),
                    btnSts = !0
                },
                error: function() {
                    alert("오류가 발생하였습니다. 다시 시도해 주세요."),
                    btnSts = !0
                }
            })
        } else if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?"))
            return void goLogin()
    })
}
function goResearch() {
    checkLogin().done(function(t) {
        t.rst ? $.ajax({
            url: "/event/evtls/makeResearchIpin.do",
            dataType: "json",
            type: "post"
        }).done(function(t) {
            "9999999999999999" == t.ipin ? alert("고객님 대단히 죄송합니다.\n\n안타깝게도, 본 조사 중 1차 진행이 완료되어 설문이 중단되었습니다.\n다음 번 진행되는 설문에도 많은 관심과 참여를 부탁드립니다.\n항상 고객님의 소중한 의견을 귀담아 듣는 동원몰이 되겠습니다.\n 감사합니다.\n") : open_scroll_yes_center("http://www.insight-korea.com/suv/dongwonmall.asp?pin=" + t.ipin, "_blank", "1024", "800")
        }) : confirm("로그인이 필요합니다.\n로그인하시겠습니까?") && goLogin()
    })
}
function mobileSuperCouponEvent() {
    checkLogin().done(function(t) {
        if (t.rst)
            $.ajax({
                url: "/event/evtls/mobileSuperCouponEvt.do",
                dataType: "json",
                type: "post",
                data: {},
                success: function(t) {
                    alert(t.messages)
                },
                error: function() {
                    alert("오류가 발생하였습니다. 다시 시도해 주세요.")
                }
            });
        else if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?"))
            return void goLogin()
    })
}
function mobileSuperCouponEvent_noSuccessMsg() {
    checkLogin().done(function(t) {
        if (t.rst)
            $.ajax({
                url: "/event/evtls/mobileSuperCouponEvt.do",
                dataType: "json",
                type: "post",
                data: {},
                success: function(t) {},
                error: function() {
                    alert("오류가 발생하였습니다. 다시 시도해 주세요.")
                }
            });
        else if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?"))
            return void goLogin()
    })
}
function eventCouponDown(t) {
    var e, n = 12;
    (n -= t.toString().length) > 0 && (e = new Array(n + (/\./.test(t) ? 2 : 1)).join("0") + t),
    checkLogin().done(function(t) {
        t.rst ? downCoupon_noReload(e) : confirm("로그인이 필요합니다.\n로그인하시겠습니까?") && goLogin()
    })
}
function eventCouponDownChenGrdCd(t) {
    var e, n = 12;
    (n -= t.toString().length) > 0 && (e = new Array(n + (/\./.test(t) ? 2 : 1)).join("0") + t),
    checkLogin().done(function(t) {
        if (t.rst) {
            var n = $("#sessionCM_GRD_CD").val();
            "12" == n || "17" == n ? downCoupon_noReload(e) : alert("레드, 레드+ 등급 회원만 쿠폰다운 가능합니다.")
        } else
            confirm("로그인이 필요합니다.\n로그인하시겠습니까?") && goLogin()
    })
}
function eventCouponDownNew(t, e, n) {
    var o = (new Date).format("yyyyMMddHHmm");
    if (parseInt(o) >= parseInt(t) && parseInt(today) <= parseInt(e)) {
        var a, r = 12;
        (r -= n.toString().length) > 0 && (a = new Array(r + (/\./.test(n) ? 2 : 1)).join("0") + n),
        checkLogin().done(function(t) {
            t.rst ? downCoupon_noReload(a) : confirm("로그인이 필요합니다.\n로그인하시겠습니까?") && goLogin()
        })
    } else
        alert("이벤트 기간이 아닙니다.")
}
function eventSecureCouponDownNew(t, e, n) {
    var o = (new Date).format("yyyyMMddHHmm");
    parseInt(o) >= parseInt(t) && parseInt(today) <= parseInt(e) ? checkLogin().done(function(t) {
        t.rst ? downSecureCoupon_noReload(n) : confirm("로그인이 필요합니다.\n로그인하시겠습니까?") && goLogin()
    }) : alert("이벤트 기간이 아닙니다.")
}
var evtItemLayoutChange = function() {
    $(".evt_item_layout .planshop_tab").each(function(t) {
        $(".evt_item_layout .productimgtype4:eq(" + t + ") ul li").each(function(t) {
            if ($(this).find(".prc_box span").hasClass("prc_new")) {
                n = void 0 === (n = $(this).find(".prc_old").html()) ? "" : $(this).find(".prc_old").html();
                var e = $(this).find(".prc_new").html();
                $(this).children(".pro").append('<span class="lkprice">' + e + "<del>" + n + "</del></span>")
            } else if ($(this).find("td").hasClass("p1")) {
                var n;
                n = void 0 === (n = $(this).find(".p1 em").html()) ? "" : $(this).find(".p1 em").html() + "원";
                e = $(this).find(".p2").html();
                $(this).children(".pro").append('<span class="lkprice">' + e + "<del>" + n + "</del></span>")
            }
        })
    })
}
  , dwEvtSchedular = function() {
    var t;
    $(".schedular_wrap .time_cont").each(function(e) {
        t = $(this).data("startDate").replace(/\-/g, "").replace(/\:/g, "").replace(/\s/g, ""),
        $(this).data("endDate").replace(/\-/g, "").replace(/\:/g, "").replace(/\s/g, "") <= todayNow ? $(this).hide() : t <= todayNow && $(this).show()
    })
};
function imgDummy() {
    var t = new Date;
    $(".imgDummy").each(function() {
        var e = $(this).attr("src");
        $(this).attr("src", e + "?" + t.getTime())
    })
}
function remindCouponCnt(t, e, n) {
    var o = 0;
    return $.ajax({
        url: "/ajax02/event/evtls/DisplayCouponStockList.do",
        dataType: "json",
        type: "post",
        async: !1,
        data: {
            MC_SEQS: [e, e],
            isDaily: n
        },
        success: function(e) {
            e.stockList.forEach(function(e, n) {
                o = t - e.COUPON_ISSUED_COUNT
            })
        },
        error: function() {
            o = 0
        }
    }),
    o
}
function couponEvtForNewbie(t, e, n) {
    if (confirm("지급받은 쿠폰은 취소 및 변경이 불가합니다. \n해당 웰컴딜 상품 쿠폰을 받으시겠습니까?")) {
        var o = (new Date).format("yyyyMMddHHmm");
        parseInt(o) >= parseInt(t) && parseInt(o) <= parseInt(e) ? (n < 10 && (n = "0" + n),
        checkLogin().done(function(t) {
            if (t.rst)
                $.ajax({
                    url: "/event/evtls/CouponEvt.do?Minor=" + n,
                    dataType: "json",
                    type: "post",
                    data: {},
                    success: function(t) {
                        alert(t.messages)
                    },
                    error: function() {
                        alert("오류가 발생하였습니다. 다시 시도해 주세요.")
                    }
                });
            else if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?"))
                return void goLogin()
        })) : alert("이벤트 기간이 아닙니다.")
    }
}
