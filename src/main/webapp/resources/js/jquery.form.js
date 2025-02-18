!function(e) {
    "use strict";
    var t = {};
    function a(t) {
        var a = t.data;
        t.isDefaultPrevented() || (t.preventDefault(),
        e(this).ajaxSubmit(a))
    }
    function r(t) {
        var a = t.target
          , r = e(a);
        if (!r.is(":submit,input:image")) {
            var n = r.closest(":submit");
            if (0 === n.length)
                return;
            a = n[0]
        }
        var i = this;
        if (i.clk = a,
        "image" == a.type)
            if (void 0 !== t.offsetX)
                i.clk_x = t.offsetX,
                i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
                var o = r.offset();
                i.clk_x = t.pageX - o.left,
                i.clk_y = t.pageY - o.top
            } else
                i.clk_x = t.pageX - a.offsetLeft,
                i.clk_y = t.pageY - a.offsetTop;
        setTimeout(function() {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }
    function n() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    t.fileapi = void 0 !== e("<input type='file'/>").get(0).files,
    t.formdata = void 0 !== window.FormData,
    e.fn.ajaxSubmit = function(a) {
        if (!this.length)
            return n("ajaxSubmit: skipping submit process - no element selected"),
            this;
        var r, i, o, s = this;
        "function" == typeof a && (a = {
            success: a
        }),
        r = this.attr("method"),
        (o = (o = "string" == typeof (i = this.attr("action")) ? e.trim(i) : "") || window.location.href || "") && (o = (o.match(/^([^#]+)/) || [])[1]),
        a = e.extend(!0, {
            url: o,
            success: e.ajaxSettings.success,
            type: r || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, a);
        var l = {};
        if (this.trigger("form-pre-serialize", [this, a, l]),
        l.veto)
            return n("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
            this;
        if (a.beforeSerialize && !1 === a.beforeSerialize(this, a))
            return n("ajaxSubmit: submit aborted via beforeSerialize callback"),
            this;
        var u = a.traditional;
        void 0 === u && (u = e.ajaxSettings.traditional);
        var c, f = [], m = this.formToArray(a.semantic, f);
        if (a.data && (a.extraData = a.data,
        c = e.param(a.data, u)),
        a.beforeSubmit && !1 === a.beforeSubmit(m, this, a))
            return n("ajaxSubmit: submit aborted via beforeSubmit callback"),
            this;
        if (this.trigger("form-submit-validate", [m, this, a, l]),
        l.veto)
            return n("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
            this;
        var d = e.param(m, u);
        c && (d = d ? d + "&" + c : c),
        "GET" == a.type.toUpperCase() ? (a.url += (a.url.indexOf("?") >= 0 ? "&" : "?") + d,
        a.data = null) : a.data = d;
        var p = [];
        if (a.resetForm && p.push(function() {
            s.resetForm()
        }),
        a.clearForm && p.push(function() {
            s.clearForm(a.includeHidden)
        }),
        !a.dataType && a.target) {
            var h = a.success || function() {}
            ;
            p.push(function(t) {
                var r = a.replaceTarget ? "replaceWith" : "html";
                e(a.target)[r](t).each(h, arguments)
            })
        } else
            a.success && p.push(a.success);
        a.success = function(e, t, r) {
            for (var n = a.context || a, i = 0, o = p.length; i < o; i++)
                p[i].apply(n, [e, t, r || s, s])
        }
        ;
        var v = e("input:file:enabled[value]", this).length > 0
          , g = "multipart/form-data"
          , x = s.attr("enctype") == g || s.attr("encoding") == g
          , b = t.fileapi && t.formdata;
        n("fileAPI :" + b);
        var y = (v || x) && !b;
        !1 !== a.iframe && (a.iframe || y) ? a.closeKeepAlive ? e.get(a.closeKeepAlive, function() {
            j(m)
        }) : j(m) : (v || x) && b ? function(t) {
            for (var r = new FormData, n = 0; n < t.length; n++)
                r.append(t[n].name, t[n].value);
            if (a.extraData)
                for (var i in a.extraData)
                    a.extraData.hasOwnProperty(i) && r.append(i, a.extraData[i]);
            a.data = null;
            var o = e.extend(!0, {}, e.ajaxSettings, a, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: "POST"
            });
            a.uploadProgress && (o.xhr = function() {
                var e = jQuery.ajaxSettings.xhr();
                return e.upload && (e.upload.onprogress = function(e) {
                    var t = 0
                      , r = e.loaded || e.position
                      , n = e.total;
                    e.lengthComputable && (t = Math.ceil(r / n * 100)),
                    a.uploadProgress(e, r, n, t)
                }
                ),
                e
            }
            );
            o.data = null;
            var s = o.beforeSend;
            o.beforeSend = function(e, t) {
                t.data = r,
                s && s.call(t, e, a)
            }
            ,
            e.ajax(o)
        }(m) : e.ajax(a);
        for (var T = 0; T < f.length; T++)
            f[T] = null;
        return this.trigger("form-submit-notify", [this, a]),
        this;
        function j(t) {
            var i, o, l, u, c, m, d, p, h, v, g, x, b = s[0], y = !!e.fn.prop;
            if (e(":input[name=submit],:input[id=submit]", b).length)
                alert('Error: Form elements must not have name or id of "submit".');
            else {
                if (t)
                    for (o = 0; o < f.length; o++)
                        i = e(f[o]),
                        y ? i.prop("disabled", !1) : i.removeAttr("disabled");
                if ((l = e.extend(!0, {}, e.ajaxSettings, a)).context = l.context || l,
                c = "jqFormIO" + (new Date).getTime(),
                l.iframeTarget ? (v = (m = e(l.iframeTarget)).attr("name")) ? c = v : m.attr("name", c) : (m = e('<iframe name="' + c + '" src="' + l.iframeSrc + '" />')).css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                }),
                d = m[0],
                p = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(t) {
                        var a = "timeout" === t ? "timeout" : "aborted";
                        n("aborting upload... " + a),
                        this.aborted = 1,
                        m.attr("src", l.iframeSrc),
                        p.error = a,
                        l.error && l.error.call(l.context, p, a, t),
                        u && e.event.trigger("ajaxError", [p, l, a]),
                        l.complete && l.complete.call(l.context, p, a)
                    }
                },
                (u = l.global) && 0 == e.active++ && e.event.trigger("ajaxStart"),
                u && e.event.trigger("ajaxSend", [p, l]),
                l.beforeSend && !1 === l.beforeSend.call(l.context, p, l))
                    l.global && e.active--;
                else if (!p.aborted) {
                    (h = b.clk) && (v = h.name) && !h.disabled && (l.extraData = l.extraData || {},
                    l.extraData[v] = h.value,
                    "image" == h.type && (l.extraData[v + ".x"] = b.clk_x,
                    l.extraData[v + ".y"] = b.clk_y));
                    var T = 1
                      , j = 2
                      , S = e("meta[name=csrf-token]").attr("content")
                      , k = e("meta[name=csrf-param]").attr("content");
                    k && S && (l.extraData = l.extraData || {},
                    l.extraData[k] = S),
                    l.forceSync ? O() : setTimeout(O, 10);
                    var w, D, A, L = 50, E = e.parseXML || function(e, t) {
                        return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
                        t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"),
                        t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                    }
                    , M = e.parseJSON || function(e) {
                        return window.eval("(" + e + ")")
                    }
                    , F = function(t, a, r) {
                        var n = t.getResponseHeader("content-type") || ""
                          , i = "xml" === a || !a && n.indexOf("xml") >= 0
                          , o = i ? t.responseXML : t.responseText;
                        return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"),
                        r && r.dataFilter && (o = r.dataFilter(o, a)),
                        "string" == typeof o && ("json" === a || !a && n.indexOf("json") >= 0 ? o = M(o) : ("script" === a || !a && n.indexOf("javascript") >= 0) && e.globalEval(o)),
                        o
                    }
                }
            }
            function X(e) {
                return e.contentWindow ? e.contentWindow.document : e.contentDocument ? e.contentDocument : e.document
            }
            function O() {
                var t = s.attr("target")
                  , a = s.attr("action");
                b.setAttribute("target", c),
                r || b.setAttribute("method", "POST"),
                a != l.url && b.setAttribute("action", l.url),
                l.skipEncodingOverride || r && !/post/i.test(r) || s.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }),
                l.timeout && (x = setTimeout(function() {
                    g = !0,
                    _(T)
                }, l.timeout));
                var i = [];
                try {
                    if (l.extraData)
                        for (var o in l.extraData)
                            l.extraData.hasOwnProperty(o) && i.push(e('<input type="hidden" name="' + o + '">').attr("value", l.extraData[o]).appendTo(b)[0]);
                    l.iframeTarget || (m.appendTo("body"),
                    d.attachEvent ? d.attachEvent("onload", _) : d.addEventListener("load", _, !1)),
                    setTimeout(function e() {
                        try {
                            var t = X(d).readyState;
                            n("state = " + t),
                            t && "uninitialized" == t.toLowerCase() && setTimeout(e, 50)
                        } catch (e) {
                            n("Server abort: ", e, " (", e.name, ")"),
                            _(j),
                            x && clearTimeout(x),
                            x = void 0
                        }
                    }, 15),
                    b.submit()
                } finally {
                    b.setAttribute("action", a),
                    t ? b.setAttribute("target", t) : s.removeAttr("target"),
                    e(i).remove()
                }
            }
            function _(t) {
                if (!p.aborted && !A) {
                    try {
                        D = X(d)
                    } catch (e) {
                        n("cannot access response document: ", e),
                        t = j
                    }
                    if (t === T && p)
                        p.abort("timeout");
                    else if (t == j && p)
                        p.abort("server abort");
                    else if (D && D.location.href != l.iframeSrc || g) {
                        d.detachEvent ? d.detachEvent("onload", _) : d.removeEventListener("load", _, !1);
                        var a, r = "success";
                        try {
                            if (g)
                                throw "timeout";
                            var i = "xml" == l.dataType || D.XMLDocument || e.isXMLDoc(D);
                            if (n("isXml=" + i),
                            !i && window.opera && (null === D.body || !D.body.innerHTML) && --L)
                                return n("requeing onLoad callback, DOM not available"),
                                void setTimeout(_, 250);
                            var o = D.body ? D.body : D.documentElement;
                            p.responseText = o ? o.innerHTML : null,
                            p.responseXML = D.XMLDocument ? D.XMLDocument : D,
                            i && (l.dataType = "xml"),
                            p.getResponseHeader = function(e) {
                                return {
                                    "content-type": l.dataType
                                }[e]
                            }
                            ,
                            o && (p.status = Number(o.getAttribute("status")) || p.status,
                            p.statusText = o.getAttribute("statusText") || p.statusText);
                            var s = (l.dataType || "").toLowerCase()
                              , c = /(json|script|text)/.test(s);
                            if (c || l.textarea) {
                                var f = D.getElementsByTagName("textarea")[0];
                                if (f)
                                    p.responseText = f.value,
                                    p.status = Number(f.getAttribute("status")) || p.status,
                                    p.statusText = f.getAttribute("statusText") || p.statusText;
                                else if (c) {
                                    var h = D.getElementsByTagName("pre")[0]
                                      , v = D.getElementsByTagName("body")[0];
                                    h ? p.responseText = h.textContent ? h.textContent : h.innerText : v && (p.responseText = v.textContent ? v.textContent : v.innerText)
                                }
                            } else
                                "xml" == s && !p.responseXML && p.responseText && (p.responseXML = E(p.responseText));
                            try {
                                w = F(p, s, l)
                            } catch (t) {
                                r = "parsererror",
                                p.error = a = t || r
                            }
                        } catch (t) {
                            n("error caught: ", t),
                            r = "error",
                            p.error = a = t || r
                        }
                        p.aborted && (n("upload aborted"),
                        r = null),
                        p.status && (r = p.status >= 200 && p.status < 300 || 304 === p.status ? "success" : "error"),
                        "success" === r ? (l.success && l.success.call(l.context, w, "success", p),
                        u && e.event.trigger("ajaxSuccess", [p, l])) : r && (void 0 === a && (a = p.statusText),
                        l.error && l.error.call(l.context, p, r, a),
                        u && e.event.trigger("ajaxError", [p, l, a])),
                        u && e.event.trigger("ajaxComplete", [p, l]),
                        u && !--e.active && e.event.trigger("ajaxStop"),
                        l.complete && l.complete.call(l.context, p, r),
                        A = !0,
                        l.timeout && clearTimeout(x),
                        setTimeout(function() {
                            l.iframeTarget || m.remove(),
                            p.responseXML = null
                        }, 100)
                    }
                }
            }
        }
    }
    ,
    e.fn.ajaxForm = function(t) {
        if ((t = t || {}).delegation = t.delegation && e.isFunction(e.fn.on),
        !t.delegation && 0 === this.length) {
            var i = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && i.s ? (n("DOM not ready, queuing ajaxForm"),
            e(function() {
                e(i.s, i.c).ajaxForm(t)
            }),
            this) : (n("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")),
            this)
        }
        return t.delegation ? (e(document).off("submit.form-plugin", this.selector, a).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, t, a).on("click.form-plugin", this.selector, t, r),
        this) : this.ajaxFormUnbind().bind("submit.form-plugin", t, a).bind("click.form-plugin", t, r)
    }
    ,
    e.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }
    ,
    e.fn.formToArray = function(a, r) {
        var n = [];
        if (0 === this.length)
            return n;
        var i, o, s, l, u, c, f, m = this[0], d = a ? m.getElementsByTagName("*") : m.elements;
        if (!d)
            return n;
        for (i = 0,
        c = d.length; i < c; i++)
            if (s = (u = d[i]).name)
                if (a && m.clk && "image" == u.type)
                    u.disabled || m.clk != u || (n.push({
                        name: s,
                        value: e(u).val(),
                        type: u.type
                    }),
                    n.push({
                        name: s + ".x",
                        value: m.clk_x
                    }, {
                        name: s + ".y",
                        value: m.clk_y
                    }));
                else if ((l = e.fieldValue(u, !0)) && l.constructor == Array)
                    for (r && r.push(u),
                    o = 0,
                    f = l.length; o < f; o++)
                        n.push({
                            name: s,
                            value: l[o]
                        });
                else if (t.fileapi && "file" == u.type && !u.disabled) {
                    r && r.push(u);
                    var p = u.files;
                    if (p.length)
                        for (o = 0; o < p.length; o++)
                            n.push({
                                name: s,
                                value: p[o],
                                type: u.type
                            });
                    else
                        n.push({
                            name: s,
                            value: "",
                            type: u.type
                        })
                } else
                    null !== l && void 0 !== l && (r && r.push(u),
                    n.push({
                        name: s,
                        value: l,
                        type: u.type,
                        required: u.required
                    }));
        if (!a && m.clk) {
            var h = e(m.clk)
              , v = h[0];
            (s = v.name) && !v.disabled && "image" == v.type && (n.push({
                name: s,
                value: h.val()
            }),
            n.push({
                name: s + ".x",
                value: m.clk_x
            }, {
                name: s + ".y",
                value: m.clk_y
            }))
        }
        return n
    }
    ,
    e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    }
    ,
    e.fn.fieldSerialize = function(t) {
        var a = [];
        return this.each(function() {
            var r = this.name;
            if (r) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; i < o; i++)
                        a.push({
                            name: r,
                            value: n[i]
                        });
                else
                    null !== n && void 0 !== n && a.push({
                        name: this.name,
                        value: n
                    })
            }
        }),
        e.param(a)
    }
    ,
    e.fn.fieldValue = function(t) {
        for (var a = [], r = 0, n = this.length; r < n; r++) {
            var i = this[r]
              , o = e.fieldValue(i, t);
            null === o || void 0 === o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(a, o) : a.push(o))
        }
        return a
    }
    ,
    e.fieldValue = function(t, a) {
        var r = t.name
          , n = t.type
          , i = t.tagName.toLowerCase();
        if (void 0 === a && (a = !0),
        a && (!r || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex))
            return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (o < 0)
                return null;
            for (var s = [], l = t.options, u = "select-one" == n, c = u ? o + 1 : l.length, f = u ? o : 0; f < c; f++) {
                var m = l[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value),
                    u)
                        return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }
    ,
    e.fn.clearForm = function(t) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(t)
        })
    }
    ,
    e.fn.clearFields = e.fn.clearInputs = function(t) {
        var a = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var r = this.type
              , n = this.tagName.toLowerCase();
            a.test(r) || "textarea" == n ? this.value = "" : "checkbox" == r || "radio" == r ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : t && (!0 === t && /hidden/.test(r) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }
    ,
    e.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }
    ,
    e.fn.enable = function(e) {
        return void 0 === e && (e = !0),
        this.each(function() {
            this.disabled = !e
        })
    }
    ,
    e.fn.selected = function(t) {
        return void 0 === t && (t = !0),
        this.each(function() {
            var a = this.type;
            if ("checkbox" == a || "radio" == a)
                this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var r = e(this).parent("select");
                t && r[0] && "select-one" == r[0].type && r.find("option").selected(!1),
                this.selected = t
            }
        })
    }
    ,
    e.fn.ajaxSubmit.debug = !1
}(jQuery);
