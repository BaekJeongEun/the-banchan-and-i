!function(a) {
    a.fn.extend(jQuery, {
        postXmlAjax: function(t, n, e) {
            try {
                a.ajax({
                    type: "POST",
                    dataType: "xml",
                    url: t,
                    data: n,
                    async: !0,
                    success: function(a) {
                        e(a)
                    },
                    error: function(a) {
                        alert("에러가 발생 하였습니다.9")
                    }
                })
            } catch (a) {
                alert("[AJAX ERROR] " + a.message)
            }
        },
        postSyncXmlAjax: function(t, n, e) {
            try {
                a.ajax({
                    type: "POST",
                    dataType: "xml",
                    url: t,
                    data: n,
                    async: !1,
                    success: function(a) {
                        e(a)
                    },
                    error: function(a) {
                        alert("에러가 발생 하였습니다.10")
                    }
                })
            } catch (a) {
                alert("[AJAX ERROR] " + a.message)
            }
        },
        postJsonAjax: function(t, n, e) {
            try {
                a.ajax({
                    type: "POST",
                    dataType: "json",
                    url: t,
                    data: n,
                    async: !0,
                    success: function(a) {
                        e(a)
                    },
                    error: function(a) {
                        alert("에러가 발생 하였습니다.11")
                    }
                })
            } catch (a) {
                alert("[AJAX ERROR] " + a.message)
            }
        },
        postJsonMainClickAjax: function(t, n) {
            try {
                a.ajax({
                    type: "POST",
                    dataType: "json",
                    url: t,
                    data: n,
                    async: !0,
                    success: function(a) {
                        return !0
                    },
                    error: function(a) {
                        return !0
                    }
                })
            } catch (a) {
                alert("[AJAX ERROR] " + a.message)
            }
        }
    })
}(jQuery);
