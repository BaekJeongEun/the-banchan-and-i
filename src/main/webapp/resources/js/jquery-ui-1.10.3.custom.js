!function(t, e) {
    var i, s, n = 0, o = /^ui-id-\d+$/;
    function a(e, i) {
        var s, n, o, a = e.nodeName.toLowerCase();
        return "area" === a ? (n = (s = e.parentNode).name,
        !(!e.href || !n || "map" !== s.nodeName.toLowerCase()) && (!!(o = t("img[usemap=#" + n + "]")[0]) && r(o))) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a && e.href || i) && r(e)
    }
    function r(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    t.ui = t.ui || {},
    t.extend(t.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    t.fn.extend({
        focus: (i = t.fn.focus,
        function(e, s) {
            return "number" == typeof e ? this.each(function() {
                var i = this;
                setTimeout(function() {
                    t(i).focus(),
                    s && s.call(i)
                }, e)
            }) : i.apply(this, arguments)
        }
        ),
        scrollParent: function() {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        },
        zIndex: function(i) {
            if (i !== e)
                return this.css("zIndex", i);
            if (this.length)
                for (var s, n, o = t(this[0]); o.length && o[0] !== document; ) {
                    if (("absolute" === (s = o.css("position")) || "relative" === s || "fixed" === s) && (n = parseInt(o.css("zIndex"), 10),
                    !isNaN(n) && 0 !== n))
                        return n;
                    o = o.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                o.test(this.id) && t(this).removeAttr("id")
            })
        }
    }),
    t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }) : function(e, i, s) {
            return !!t.data(e, s[3])
        }
        ,
        focusable: function(e) {
            return a(e, !isNaN(t.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var i = t.attr(e, "tabindex")
              , s = isNaN(i);
            return (s || i >= 0) && a(e, !s)
        }
    }),
    t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(i, s) {
        var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"]
          , o = s.toLowerCase()
          , a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        function r(e, i, s, o) {
            return t.each(n, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0,
                s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }),
            i
        }
        t.fn["inner" + s] = function(i) {
            return i === e ? a["inner" + s].call(this) : this.each(function() {
                t(this).css(o, r(this, i) + "px")
            })
        }
        ,
        t.fn["outer" + s] = function(e, i) {
            return "number" != typeof e ? a["outer" + s].call(this, e) : this.each(function() {
                t(this).css(o, r(this, e, !0, i) + "px")
            })
        }
    }),
    t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
    ),
    t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = (s = t.fn.removeData,
    function(e) {
        return arguments.length ? s.call(this, t.camelCase(e)) : s.call(this)
    }
    )),
    t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    t.support.selectstart = "onselectstart"in document.createElement("div"),
    t.fn.extend({
        disableSelection: function() {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    t.extend(t.ui, {
        plugin: {
            add: function(e, i, s) {
                var n, o = t.ui[e].prototype;
                for (n in s)
                    o.plugins[n] = o.plugins[n] || [],
                    o.plugins[n].push([i, s[n]])
            },
            call: function(t, e, i) {
                var s, n = t.plugins[e];
                if (n && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                    for (s = 0; s < n.length; s++)
                        t.options[n[s][0]] && n[s][1].apply(t.element, i)
            }
        },
        hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow"))
                return !1;
            var s, n = i && "left" === i ? "scrollLeft" : "scrollTop";
            return e[n] > 0 || (e[n] = 1,
            s = e[n] > 0,
            e[n] = 0,
            s)
        }
    })
}(jQuery),
function(t, e) {
    var i = 0
      , s = Array.prototype.slice
      , n = t.cleanData;
    t.cleanData = function(e) {
        for (var i, s = 0; null != (i = e[s]); s++)
            try {
                t(i).triggerHandler("remove")
            } catch (t) {}
        n(e)
    }
    ,
    t.widget = function(e, i, s) {
        var n, o, a, r, h = {}, l = e.split(".")[0];
        e = e.split(".")[1],
        n = l + "-" + e,
        s || (s = i,
        i = t.Widget),
        t.expr[":"][n.toLowerCase()] = function(e) {
            return !!t.data(e, n)
        }
        ,
        t[l] = t[l] || {},
        o = t[l][e],
        a = t[l][e] = function(t, e) {
            if (!this._createWidget)
                return new a(t,e);
            arguments.length && this._createWidget(t, e)
        }
        ,
        t.extend(a, o, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }),
        (r = new i).options = t.widget.extend({}, r.options),
        t.each(s, function(e, s) {
            var n, o;
            t.isFunction(s) ? h[e] = (n = function() {
                return i.prototype[e].apply(this, arguments)
            }
            ,
            o = function(t) {
                return i.prototype[e].apply(this, t)
            }
            ,
            function() {
                var t, e = this._super, i = this._superApply;
                return this._super = n,
                this._superApply = o,
                t = s.apply(this, arguments),
                this._super = e,
                this._superApply = i,
                t
            }
            ) : h[e] = s
        }),
        a.prototype = t.widget.extend(r, {
            widgetEventPrefix: o ? r.widgetEventPrefix : e
        }, h, {
            constructor: a,
            namespace: l,
            widgetName: e,
            widgetFullName: n
        }),
        o ? (t.each(o._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, a, i._proto)
        }),
        delete o._childConstructors) : i._childConstructors.push(a),
        t.widget.bridge(e, a)
    }
    ,
    t.widget.extend = function(i) {
        for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; r < h; r++)
            for (n in a[r])
                o = a[r][n],
                a[r].hasOwnProperty(n) && o !== e && (t.isPlainObject(o) ? i[n] = t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : i[n] = o);
        return i
    }
    ,
    t.widget.bridge = function(i, n) {
        var o = n.prototype.widgetFullName || i;
        t.fn[i] = function(a) {
            var r = "string" == typeof a
              , h = s.call(arguments, 1)
              , l = this;
            return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a,
            r ? this.each(function() {
                var s, n = t.data(this, o);
                return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h)) !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s,
                !1) : void 0 : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + a + "'")
            }) : this.each(function() {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new n(a,this))
            }),
            l
        }
    }
    ,
    t.Widget = function() {}
    ,
    t.Widget._childConstructors = [],
    t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, s) {
            s = t(s || this.defaultElement || this)[0],
            this.element = t(s),
            this.uuid = i++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
            this.bindings = t(),
            this.hoverable = t(),
            this.focusable = t(),
            s !== this && (t.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === s && this.destroy()
                }
            }),
            this.document = t(s.style ? s.ownerDocument : s.document || s),
            this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n, o, a, r = i;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (r = {},
                i = (n = i.split(".")).shift(),
                n.length) {
                    for (o = r[i] = t.widget.extend({}, this.options[i]),
                    a = 0; a < n.length - 1; a++)
                        o[n[a]] = o[n[a]] || {},
                        o = o[n[a]];
                    if (i = n.pop(),
                    s === e)
                        return o[i] === e ? null : o[i];
                    o[i] = s
                } else {
                    if (s === e)
                        return this.options[i] === e ? null : this.options[i];
                    r[i] = s
                }
            return this._setOptions(r),
            this
        },
        _setOptions: function(t) {
            var e;
            for (e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e,
            "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i,
            i = e,
            e = !1),
            s ? (i = n = t(i),
            this.bindings = this.bindings.add(i)) : (s = i,
            i = this.element,
            n = this.widget()),
            t.each(s, function(s, a) {
                function r() {
                    if (e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled"))
                        return ("string" == typeof a ? o[a] : a).apply(o, arguments)
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var h = s.match(/^(\w+)\s*(.*)$/)
                  , l = h[1] + o.eventNamespace
                  , c = h[2];
                c ? n.delegate(c, l, r) : i.bind(l, r)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e),
            this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e),
            this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {},
            (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
            i.target = this.element[0],
            o = i.originalEvent)
                for (n in o)
                    n in i || (i[n] = o[n]);
            return this.element.trigger(i, s),
            !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
        }
    },
    t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
            "number" == typeof (n = n || {}) && (n = {
                duration: n
            }),
            a = !t.isEmptyObject(n),
            n.complete = o,
            n.delay && s.delay(n.delay),
            a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](),
                o && o.call(s[0]),
                i()
            })
        }
    })
}(jQuery),
function(t, e) {
    var i = !1;
    t(document).mouseup(function() {
        i = !1
    }),
    t.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent"))
                    return t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                    i.stopImmediatePropagation(),
                    !1
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!i) {
                this._mouseStarted && this._mouseUp(e),
                this._mouseDownEvent = e;
                var s = this
                  , n = 1 === e.which
                  , o = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(n && !o && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e),
                !this._mouseStarted) ? (e.preventDefault(),
                !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(t) {
                    return s._mouseMove(t)
                }
                ,
                this._mouseUpDelegate = function(t) {
                    return s._mouseUp(t)
                }
                ,
                t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                e.preventDefault(),
                i = !0,
                !0))
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e),
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e),
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
            !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
            !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),
function(t, e) {
    t.ui = t.ui || {};
    var i, s = Math.max, n = Math.abs, o = Math.round, a = /left|center|right/, r = /top|center|bottom/, h = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, c = /%$/, u = t.fn.position;
    function d(t, e, i) {
        return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)]
    }
    function p(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }
    t.position = {
        scrollbarWidth: function() {
            if (void 0 !== i)
                return i;
            var e, s, n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = n.children()[0];
            return t("body").append(n),
            e = o.offsetWidth,
            n.css("overflow", "scroll"),
            e === (s = o.offsetWidth) && (s = n[0].clientWidth),
            n.remove(),
            i = e - s
        },
        getScrollInfo: function(e) {
            var i = e.isWindow ? "" : e.element.css("overflow-x")
              , s = e.isWindow ? "" : e.element.css("overflow-y")
              , n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
            return {
                width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                height: n ? t.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(e) {
            var i = t(e || window)
              , s = t.isWindow(i[0]);
            return {
                element: i,
                isWindow: s,
                offset: i.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: s ? i.width() : i.outerWidth(),
                height: s ? i.height() : i.outerHeight()
            }
        }
    },
    t.fn.position = function(e) {
        if (!e || !e.of)
            return u.apply(this, arguments);
        e = t.extend({}, e);
        var i, c, f, g, m, v, _, b, y = t(e.of), w = t.position.getWithinInfo(e.within), k = t.position.getScrollInfo(w), x = (e.collision || "flip").split(" "), D = {};
        return v = 9 === (b = (_ = y)[0]).nodeType ? {
            width: _.width(),
            height: _.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : t.isWindow(b) ? {
            width: _.width(),
            height: _.height(),
            offset: {
                top: _.scrollTop(),
                left: _.scrollLeft()
            }
        } : b.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: b.pageY,
                left: b.pageX
            }
        } : {
            width: _.outerWidth(),
            height: _.outerHeight(),
            offset: _.offset()
        },
        y[0].preventDefault && (e.at = "left top"),
        c = v.width,
        f = v.height,
        g = v.offset,
        m = t.extend({}, g),
        t.each(["my", "at"], function() {
            var t, i, s = (e[this] || "").split(" ");
            1 === s.length && (s = a.test(s[0]) ? s.concat(["center"]) : r.test(s[0]) ? ["center"].concat(s) : ["center", "center"]),
            s[0] = a.test(s[0]) ? s[0] : "center",
            s[1] = r.test(s[1]) ? s[1] : "center",
            t = h.exec(s[0]),
            i = h.exec(s[1]),
            D[this] = [t ? t[0] : 0, i ? i[0] : 0],
            e[this] = [l.exec(s[0])[0], l.exec(s[1])[0]]
        }),
        1 === x.length && (x[1] = x[0]),
        "right" === e.at[0] ? m.left += c : "center" === e.at[0] && (m.left += c / 2),
        "bottom" === e.at[1] ? m.top += f : "center" === e.at[1] && (m.top += f / 2),
        i = d(D.at, c, f),
        m.left += i[0],
        m.top += i[1],
        this.each(function() {
            var a, r, h = t(this), l = h.outerWidth(), u = h.outerHeight(), v = p(this, "marginLeft"), _ = p(this, "marginTop"), b = l + v + p(this, "marginRight") + k.width, C = u + _ + p(this, "marginBottom") + k.height, I = t.extend({}, m), P = d(D.my, h.outerWidth(), h.outerHeight());
            "right" === e.my[0] ? I.left -= l : "center" === e.my[0] && (I.left -= l / 2),
            "bottom" === e.my[1] ? I.top -= u : "center" === e.my[1] && (I.top -= u / 2),
            I.left += P[0],
            I.top += P[1],
            t.support.offsetFractions || (I.left = o(I.left),
            I.top = o(I.top)),
            a = {
                marginLeft: v,
                marginTop: _
            },
            t.each(["left", "top"], function(s, n) {
                t.ui.position[x[s]] && t.ui.position[x[s]][n](I, {
                    targetWidth: c,
                    targetHeight: f,
                    elemWidth: l,
                    elemHeight: u,
                    collisionPosition: a,
                    collisionWidth: b,
                    collisionHeight: C,
                    offset: [i[0] + P[0], i[1] + P[1]],
                    my: e.my,
                    at: e.at,
                    within: w,
                    elem: h
                })
            }),
            e.using && (r = function(t) {
                var i = g.left - I.left
                  , o = i + c - l
                  , a = g.top - I.top
                  , r = a + f - u
                  , d = {
                    target: {
                        element: y,
                        left: g.left,
                        top: g.top,
                        width: c,
                        height: f
                    },
                    element: {
                        element: h,
                        left: I.left,
                        top: I.top,
                        width: l,
                        height: u
                    },
                    horizontal: o < 0 ? "left" : i > 0 ? "right" : "center",
                    vertical: r < 0 ? "top" : a > 0 ? "bottom" : "middle"
                };
                c < l && n(i + o) < c && (d.horizontal = "center"),
                f < u && n(a + r) < f && (d.vertical = "middle"),
                s(n(i), n(o)) > s(n(a), n(r)) ? d.important = "horizontal" : d.important = "vertical",
                e.using.call(this, t, d)
            }
            ),
            h.offset(t.extend(I, {
                using: r
            }))
        })
    }
    ,
    t.ui.position = {
        fit: {
            left: function(t, e) {
                var i, n = e.within, o = n.isWindow ? n.scrollLeft : n.offset.left, a = n.width, r = t.left - e.collisionPosition.marginLeft, h = o - r, l = r + e.collisionWidth - a - o;
                e.collisionWidth > a ? h > 0 && l <= 0 ? (i = t.left + h + e.collisionWidth - a - o,
                t.left += h - i) : t.left = l > 0 && h <= 0 ? o : h > l ? o + a - e.collisionWidth : o : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = s(t.left - r, t.left)
            },
            top: function(t, e) {
                var i, n = e.within, o = n.isWindow ? n.scrollTop : n.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, h = o - r, l = r + e.collisionHeight - a - o;
                e.collisionHeight > a ? h > 0 && l <= 0 ? (i = t.top + h + e.collisionHeight - a - o,
                t.top += h - i) : t.top = l > 0 && h <= 0 ? o : h > l ? o + a - e.collisionHeight : o : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = s(t.top - r, t.top)
            }
        },
        flip: {
            left: function(t, e) {
                var i, s, o = e.within, a = o.offset.left + o.scrollLeft, r = o.width, h = o.isWindow ? o.scrollLeft : o.offset.left, l = t.left - e.collisionPosition.marginLeft, c = l - h, u = l + e.collisionWidth - r - h, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                c < 0 ? ((i = t.left + d + p + f + e.collisionWidth - r - a) < 0 || i < n(c)) && (t.left += d + p + f) : u > 0 && ((s = t.left - e.collisionPosition.marginLeft + d + p + f - h) > 0 || n(s) < u) && (t.left += d + p + f)
            },
            top: function(t, e) {
                var i, s, o = e.within, a = o.offset.top + o.scrollTop, r = o.height, h = o.isWindow ? o.scrollTop : o.offset.top, l = t.top - e.collisionPosition.marginTop, c = l - h, u = l + e.collisionHeight - r - h, d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, f = -2 * e.offset[1];
                c < 0 ? (s = t.top + d + p + f + e.collisionHeight - r - a,
                t.top + d + p + f > c && (s < 0 || s < n(c)) && (t.top += d + p + f)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + d + p + f - h,
                t.top + d + p + f > u && (i > 0 || n(i) < u) && (t.top += d + p + f))
            }
        },
        flipfit: {
            left: function() {
                t.ui.position.flip.left.apply(this, arguments),
                t.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                t.ui.position.flip.top.apply(this, arguments),
                t.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function() {
        var e, i, s, n, o, a = document.getElementsByTagName("body")[0], r = document.createElement("div");
        e = document.createElement(a ? "div" : "body"),
        s = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        },
        a && t.extend(s, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (o in s)
            e.style[o] = s[o];
        e.appendChild(r),
        (i = a || document.documentElement).insertBefore(e, i.firstChild),
        r.style.cssText = "position: absolute; left: 10.7432222px;",
        n = t(r).offset().left,
        t.support.offsetFractions = n > 10 && n < 11,
        e.innerHTML = "",
        i.removeChild(e)
    }()
}(jQuery),
function(t, e) {
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e),
            !!this.handle && (t(!0 === i.iframeFix ? "iframe" : i.iframeFix).each(function() {
                t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            }),
            !0))
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offsetParent = this.helper.offsetParent(),
            this.offsetParentCssPosition = this.offsetParent.css("position"),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            this.offset.scroll = !1,
            t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(e),
            this.originalPageX = e.pageX,
            this.originalPageY = e.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            this._setContainment(),
            !1 === this._trigger("start", e) ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
            this._mouseDrag(e, !0),
            t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
            !0)
        },
        _mouseDrag: function(e, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()),
            this.position = this._generatePosition(e),
            this.positionAbs = this._convertPositionTo("absolute"),
            !i) {
                var s = this._uiHash();
                if (!1 === this._trigger("drag", e, s))
                    return this._mouseUp({}),
                    !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            !1
        },
        _mouseStop: function(e) {
            var i = this
              , s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)),
            this.dropped && (s = this.dropped,
            this.dropped = !1),
            !("original" === this.options.helper && !t.contains(this.element[0].ownerDocument, this.element[0])) && ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== i._trigger("stop", e) && i._clear()
            }) : !1 !== this._trigger("stop", e) && this._clear(),
            !1)
        },
        _mouseUp: function(e) {
            return t("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
            t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(e) {
            return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
        },
        _createHelper: function(e) {
            var i = this.options
              , s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
            s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"),
            s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left"in e && (this.offset.click.left = e.left + this.margins.left),
            "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top"in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
            e.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            n.containment ? "window" !== n.containment ? "document" !== n.containment ? n.containment.constructor !== Array ? ("parent" === n.containment && (n.containment = this.helper[0].parentNode),
            (s = (i = t(n.containment))[0]) && (e = "hidden" !== i.css("overflow"),
            this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
            this.relative_container = i)) : this.containment = n.containment : this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1
              , n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: n.scrollTop(),
                left: n.scrollLeft()
            }),
            {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n, o, a = this.options, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = e.pageX, l = e.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: r.scrollTop(),
                left: r.scrollLeft()
            }),
            this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(),
            i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment,
            e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left),
            e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top),
            e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left),
            e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)),
            a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY,
            l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n,
            o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX,
            h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o)),
            {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(),
            t.ui.plugin.call(this, e, [i, s]),
            "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")),
            t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i) {
            var s = t(this).data("ui-draggable")
              , n = s.options
              , o = t.extend({}, i, {
                item: s.element
            });
            s.sortables = [],
            t(n.connectToSortable).each(function() {
                var i = t.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }),
                i.refreshPositions(),
                i._trigger("activate", e, o))
            })
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable")
              , n = t.extend({}, i, {
                item: s.element
            });
            t.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0,
                s.cancelHelperRemoval = !0,
                this.instance.cancelHelperRemoval = !1,
                this.shouldRevert && (this.instance.options.revert = this.shouldRevert),
                this.instance._mouseStop(e),
                this.instance.options.helper = this.instance.options._helper,
                "original" === s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1,
                this.instance._trigger("deactivate", e, n))
            })
        },
        drag: function(e, i) {
            var s = t(this).data("ui-draggable")
              , n = this;
            t.each(s.sortables, function() {
                var o = !1
                  , a = this;
                this.instance.positionAbs = s.positionAbs,
                this.instance.helperProportions = s.helperProportions,
                this.instance.offset.click = s.offset.click,
                this.instance._intersectsWith(this.instance.containerCache) && (o = !0,
                t.each(s.sortables, function() {
                    return this.instance.positionAbs = s.positionAbs,
                    this.instance.helperProportions = s.helperProportions,
                    this.instance.offset.click = s.offset.click,
                    this !== a && this.instance._intersectsWith(this.instance.containerCache) && t.contains(a.instance.element[0], this.instance.element[0]) && (o = !1),
                    o
                })),
                o ? (this.instance.isOver || (this.instance.isOver = 1,
                this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0),
                this.instance.options._helper = this.instance.options.helper,
                this.instance.options.helper = function() {
                    return i.helper[0]
                }
                ,
                e.target = this.instance.currentItem[0],
                this.instance._mouseCapture(e, !0),
                this.instance._mouseStart(e, !0, !0),
                this.instance.offset.click.top = s.offset.click.top,
                this.instance.offset.click.left = s.offset.click.left,
                this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left,
                this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top,
                s._trigger("toSortable", e),
                s.dropped = this.instance.element,
                s.currentItem = s.element,
                this.instance.fromOutside = s),
                this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0,
                this.instance.cancelHelperRemoval = !0,
                this.instance.options.revert = !1,
                this.instance._trigger("out", e, this.instance._uiHash(this.instance)),
                this.instance._mouseStop(e, !0),
                this.instance.options.helper = this.instance.options._helper,
                this.instance.currentItem.remove(),
                this.instance.placeholder && this.instance.placeholder.remove(),
                s._trigger("fromSortable", e),
                s.dropped = !1)
            })
        }
    }),
    t.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var e = t("body")
              , i = t(this).data("ui-draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")),
            e.css("cursor", i.cursor)
        },
        stop: function() {
            var e = t(this).data("ui-draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }
    }),
    t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i) {
            var s = t(i.helper)
              , n = t(this).data("ui-draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")),
            s.css("opacity", n.opacity)
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable").options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }),
    t.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var e = t(this).data("ui-draggable");
            e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        },
        drag: function(e) {
            var i = t(this).data("ui-draggable")
              , s = i.options
              , n = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)),
            s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))),
            s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))),
            !1 !== n && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }
    }),
    t.ui.plugin.add("draggable", "snap", {
        start: function() {
            var e = t(this).data("ui-draggable")
              , i = e.options;
            e.snapElements = [],
            t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = t(this)
                  , s = i.offset();
                this !== e.element[0] && e.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        },
        drag: function(e, i) {
            var s, n, o, a, r, h, l, c, u, d, p = t(this).data("ui-draggable"), f = p.options, g = f.snapTolerance, m = i.offset.left, v = m + p.helperProportions.width, _ = i.offset.top, b = _ + p.helperProportions.height;
            for (u = p.snapElements.length - 1; u >= 0; u--)
                h = (r = p.snapElements[u].left) + p.snapElements[u].width,
                c = (l = p.snapElements[u].top) + p.snapElements[u].height,
                v < r - g || m > h + g || b < l - g || _ > c + g || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {
                    snapItem: p.snapElements[u].item
                })),
                p.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (s = Math.abs(l - b) <= g,
                n = Math.abs(c - _) <= g,
                o = Math.abs(r - v) <= g,
                a = Math.abs(h - m) <= g,
                s && (i.position.top = p._convertPositionTo("relative", {
                    top: l - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top),
                n && (i.position.top = p._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top - p.margins.top),
                o && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: r - p.helperProportions.width
                }).left - p.margins.left),
                a && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left - p.margins.left)),
                d = s || n || o || a,
                "outer" !== f.snapMode && (s = Math.abs(l - _) <= g,
                n = Math.abs(c - b) <= g,
                o = Math.abs(r - m) <= g,
                a = Math.abs(h - v) <= g,
                s && (i.position.top = p._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top - p.margins.top),
                n && (i.position.top = p._convertPositionTo("relative", {
                    top: c - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top),
                o && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: r
                }).left - p.margins.left),
                a && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: h - p.helperProportions.width
                }).left - p.margins.left)),
                !p.snapElements[u].snapping && (s || n || o || a || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {
                    snapItem: p.snapElements[u].item
                })),
                p.snapElements[u].snapping = s || n || o || a || d)
        }
    }),
    t.ui.plugin.add("draggable", "stack", {
        start: function() {
            var e, i = this.data("ui-draggable").options, s = t.makeArray(t(i.stack)).sort(function(e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
            });
            s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0,
            t(s).each(function(i) {
                t(this).css("zIndex", e + i)
            }),
            this.css("zIndex", e + s.length))
        }
    }),
    t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i) {
            var s = t(i.helper)
              , n = t(this).data("ui-draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")),
            s.css("zIndex", n.zIndex)
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable").options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    })
}(jQuery),
function(t, e) {
    function i(t, e, i) {
        return t > e && t < e + i
    }
    t.widget("ui.droppable", {
        version: "1.10.3",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var e = this.options
              , i = e.accept;
            this.isover = !1,
            this.isout = !0,
            this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }
            ,
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            },
            t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [],
            t.ui.ddmanager.droppables[e.scope].push(this),
            e.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; e < i.length; e++)
                i[e] === this && i.splice(e, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(e, i) {
            "accept" === e && (this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }
            ),
            t.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass),
            i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass),
            i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass),
            this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
            this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var s = i || t.ui.ddmanager.current
              , n = !1;
            return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var e = t.data(this, "ui-droppable");
                if (e.options.greedy && !e.options.disabled && e.options.scope === s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {
                    offset: e.element.offset()
                }), e.options.tolerance))
                    return n = !0,
                    !1
            }),
            !n && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass),
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
            this._trigger("drop", e, this.ui(s)),
            this.element)))
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }),
    t.ui.intersect = function(t, e, s) {
        if (!e.offset)
            return !1;
        var n, o = (t.positionAbs || t.position.absolute).left, a = o + t.helperProportions.width, r = (t.positionAbs || t.position.absolute).top, h = r + t.helperProportions.height, l = e.offset.left, c = l + e.proportions.width, u = e.offset.top, d = u + e.proportions.height;
        switch (s) {
        case "fit":
            return l <= o && a <= c && u <= r && h <= d;
        case "intersect":
            return l < o + t.helperProportions.width / 2 && a - t.helperProportions.width / 2 < c && u < r + t.helperProportions.height / 2 && h - t.helperProportions.height / 2 < d;
        case "pointer":
            return n = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
            i((t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, u, e.proportions.height) && i(n, l, e.proportions.width);
        case "touch":
            return (r >= u && r <= d || h >= u && h <= d || r < u && h > d) && (o >= l && o <= c || a >= l && a <= c || o < l && a > c);
        default:
            return !1
        }
    }
    ,
    t.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(e, i) {
            var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [], a = i ? i.type : null, r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; s < o.length; s++)
                if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                    for (n = 0; n < r.length; n++)
                        if (r[n] === o[s].element[0]) {
                            o[s].proportions.height = 0;
                            continue t
                        }
                    o[s].visible = "none" !== o[s].element.css("display"),
                    o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i),
                    o[s].offset = o[s].element.offset(),
                    o[s].proportions = {
                        width: o[s].element[0].offsetWidth,
                        height: o[s].element[0].offsetHeight
                    })
                }
        },
        drop: function(e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s),
                !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0,
                this.isover = !1,
                this._deactivate.call(this, i)))
            }),
            s
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").bind("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
            t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, o, a = t.ui.intersect(e, this, this.options.tolerance), r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope,
                    (o = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t.data(this, "ui-droppable").options.scope === n
                    })).length && ((s = t.data(o[0], "ui-droppable")).greedyChild = "isover" === r)),
                    s && "isover" === r && (s.isover = !1,
                    s.isout = !0,
                    s._out.call(s, i)),
                    this[r] = !0,
                    this["isout" === r ? "isover" : "isout"] = !1,
                    this["isover" === r ? "_over" : "_out"].call(this, i),
                    s && "isout" === r && (s.isout = !1,
                    s.isover = !0,
                    s._over.call(s, i)))
                }
            })
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").unbind("scroll.droppable"),
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }
}(jQuery),
function(t, e) {
    function i(t) {
        return parseInt(t, 10) || 0
    }
    function s(t) {
        return !isNaN(parseInt(t, 10))
    }
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var e, i, s, n, o = this, a = this.options;
            if (this.element.addClass("ui-resizable"),
            t.extend(this, {
                _aspectRatio: !!a.aspectRatio,
                aspectRatio: a.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
            }),
            this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")),
            this.elementIsWrapper = !0,
            this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }),
            this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css({
                margin: this.originalElement.css("margin")
            }),
            this._proportionallyResize()),
            this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"),
            this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                e = this.handles.split(","),
                this.handles = {},
                i = 0; i < e.length; i++)
                    s = t.trim(e[i]),
                    (n = t("<div class='ui-resizable-handle " + ("ui-resizable-" + s) + "'></div>")).css({
                        zIndex: a.zIndex
                    }),
                    "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                    this.handles[s] = ".ui-resizable-" + s,
                    this.element.append(n);
            this._renderAxis = function(e) {
                var i, s, n, o;
                e = e || this.element;
                for (i in this.handles)
                    this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element),
                    o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(),
                    n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""),
                    e.css(n, o),
                    this._proportionallyResize()),
                    t(this.handles[i]).length
            }
            ,
            this._renderAxis(this.element),
            this._handles = t(".ui-resizable-handle", this.element).disableSelection(),
            this._handles.mouseover(function() {
                o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                o.axis = n && n[1] ? n[1] : "se")
            }),
            a.autoHide && (this._handles.hide(),
            t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                a.disabled || (t(this).removeClass("ui-resizable-autohide"),
                o._handles.show())
            }).mouseleave(function() {
                a.disabled || o.resizing || (t(this).addClass("ui-resizable-autohide"),
                o._handles.hide())
            })),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element),
            e = this.element,
            this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e),
            e.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _mouseCapture: function(e) {
            var i, s, n = !1;
            for (i in this.handles)
                ((s = t(this.handles[i])[0]) === e.target || t.contains(s, e.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function(e) {
            var s, n, o, a = this.options, r = this.element.position(), h = this.element;
            return this.resizing = !0,
            /absolute/.test(h.css("position")) ? h.css({
                position: "absolute",
                top: h.css("top"),
                left: h.css("left")
            }) : h.is(".ui-draggable") && h.css({
                position: "absolute",
                top: r.top,
                left: r.left
            }),
            this._renderProxy(),
            s = i(this.helper.css("left")),
            n = i(this.helper.css("top")),
            a.containment && (s += t(a.containment).scrollLeft() || 0,
            n += t(a.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: s,
                top: n
            },
            this.size = this._helper ? {
                width: h.outerWidth(),
                height: h.outerHeight()
            } : {
                width: h.width(),
                height: h.height()
            },
            this.originalSize = this._helper ? {
                width: h.outerWidth(),
                height: h.outerHeight()
            } : {
                width: h.width(),
                height: h.height()
            },
            this.originalPosition = {
                left: s,
                top: n
            },
            this.sizeDiff = {
                width: h.outerWidth() - h.width(),
                height: h.outerHeight() - h.height()
            },
            this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            },
            this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            o = t(".ui-resizable-" + this.axis).css("cursor"),
            t("body").css("cursor", "auto" === o ? this.axis + "-resize" : o),
            h.addClass("ui-resizable-resizing"),
            this._propagate("start", e),
            !0
        },
        _mouseDrag: function(e) {
            var i, s = this.helper, n = {}, o = this.originalMousePosition, a = this.axis, r = this.position.top, h = this.position.left, l = this.size.width, c = this.size.height, u = e.pageX - o.left || 0, d = e.pageY - o.top || 0, p = this._change[a];
            return !!p && (i = p.apply(this, [e, u, d]),
            this._updateVirtualBoundaries(e.shiftKey),
            (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)),
            i = this._respectSize(i, e),
            this._updateCache(i),
            this._propagate("resize", e),
            this.position.top !== r && (n.top = this.position.top + "px"),
            this.position.left !== h && (n.left = this.position.left + "px"),
            this.size.width !== l && (n.width = this.size.width + "px"),
            this.size.height !== c && (n.height = this.size.height + "px"),
            s.css(n),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            t.isEmptyObject(n) || this._trigger("resize", e, this.ui()),
            !1)
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, s, n, o, a, r, h, l = this.options, c = this;
            return this._helper && (n = (s = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height,
            o = s ? 0 : c.sizeDiff.width,
            a = {
                width: c.helper.width() - o,
                height: c.helper.height() - n
            },
            r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null,
            h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null,
            l.animate || this.element.css(t.extend(a, {
                top: h,
                left: r
            })),
            c.helper.height(c.size.height),
            c.helper.width(c.size.width),
            this._helper && !l.animate && this._proportionallyResize()),
            t("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", e),
            this._helper && this.helper.remove(),
            !1
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, n, o, a, r = this.options;
            a = {
                minWidth: s(r.minWidth) ? r.minWidth : 0,
                maxWidth: s(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: s(r.minHeight) ? r.minHeight : 0,
                maxHeight: s(r.maxHeight) ? r.maxHeight : 1 / 0
            },
            (this._aspectRatio || t) && (e = a.minHeight * this.aspectRatio,
            n = a.minWidth / this.aspectRatio,
            i = a.maxHeight * this.aspectRatio,
            o = a.maxWidth / this.aspectRatio,
            e > a.minWidth && (a.minWidth = e),
            n > a.minHeight && (a.minHeight = n),
            i < a.maxWidth && (a.maxWidth = i),
            o < a.maxHeight && (a.maxHeight = o)),
            this._vBoundaries = a
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(),
            s(t.left) && (this.position.left = t.left),
            s(t.top) && (this.position.top = t.top),
            s(t.height) && (this.size.height = t.height),
            s(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position
              , i = this.size
              , n = this.axis;
            return s(t.height) ? t.width = t.height * this.aspectRatio : s(t.width) && (t.height = t.width / this.aspectRatio),
            "sw" === n && (t.left = e.left + (i.width - t.width),
            t.top = null),
            "nw" === n && (t.top = e.top + (i.height - t.height),
            t.left = e.left + (i.width - t.width)),
            t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries
              , i = this.axis
              , n = s(t.width) && e.maxWidth && e.maxWidth < t.width
              , o = s(t.height) && e.maxHeight && e.maxHeight < t.height
              , a = s(t.width) && e.minWidth && e.minWidth > t.width
              , r = s(t.height) && e.minHeight && e.minHeight > t.height
              , h = this.originalPosition.left + this.originalSize.width
              , l = this.position.top + this.size.height
              , c = /sw|nw|w/.test(i)
              , u = /nw|ne|n/.test(i);
            return a && (t.width = e.minWidth),
            r && (t.height = e.minHeight),
            n && (t.width = e.maxWidth),
            o && (t.height = e.maxHeight),
            a && c && (t.left = h - e.minWidth),
            n && c && (t.left = h - e.maxWidth),
            r && u && (t.top = l - e.minHeight),
            o && u && (t.top = l - e.maxHeight),
            t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
            t
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var t, e, i, s, n, o = this.helper || this.element;
                for (t = 0; t < this._proportionallyResizeElements.length; t++) {
                    if (n = this._proportionallyResizeElements[t],
                    !this.borderDif)
                        for (this.borderDif = [],
                        i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")],
                        s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")],
                        e = 0; e < i.length; e++)
                            this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
                    n.css({
                        height: o.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: o.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var e = this.element
              , i = this.options;
            this.elementOffset = e.offset(),
            this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"),
            this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }),
            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]),
            "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).data("ui-resizable")
              , s = i.options
              , n = i._proportionallyResizeElements
              , o = n.length && /textarea/i.test(n[0].nodeName)
              , a = o && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height
              , r = o ? 0 : i.sizeDiff.width
              , h = {
                width: i.size.width - r,
                height: i.size.height - a
            }
              , l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null
              , c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(h, c && l ? {
                top: c,
                left: l
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }),
                    i._updateCache(s),
                    i._propagate("resize", e)
                }
            })
        }
    }),
    t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, s, n, o, a, r, h, l = t(this).data("ui-resizable"), c = l.options, u = l.element, d = c.containment, p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
            p && (l.containerElement = t(p),
            /document/.test(d) || d === document ? (l.containerOffset = {
                left: 0,
                top: 0
            },
            l.containerPosition = {
                left: 0,
                top: 0
            },
            l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(p),
            s = [],
            t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
                s[t] = i(e.css("padding" + n))
            }),
            l.containerOffset = e.offset(),
            l.containerPosition = e.position(),
            l.containerSize = {
                height: e.innerHeight() - s[3],
                width: e.innerWidth() - s[1]
            },
            n = l.containerOffset,
            o = l.containerSize.height,
            a = l.containerSize.width,
            r = t.ui.hasScroll(p, "left") ? p.scrollWidth : a,
            h = t.ui.hasScroll(p) ? p.scrollHeight : o,
            l.parentData = {
                element: p,
                left: n.left,
                top: n.top,
                width: r,
                height: h
            }))
        },
        resize: function(e) {
            var i, s, n, o, a = t(this).data("ui-resizable"), r = a.options, h = a.containerOffset, l = a.position, c = a._aspectRatio || e.shiftKey, u = {
                top: 0,
                left: 0
            }, d = a.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (u = h),
            l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left),
            c && (a.size.height = a.size.width / a.aspectRatio),
            a.position.left = r.helper ? h.left : 0),
            l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top),
            c && (a.size.width = a.size.height * a.aspectRatio),
            a.position.top = a._helper ? h.top : 0),
            a.offset.left = a.parentData.left + a.position.left,
            a.offset.top = a.parentData.top + a.position.top,
            i = Math.abs((a._helper,
            a.offset.left - u.left + a.sizeDiff.width)),
            s = Math.abs((a._helper ? a.offset.top - u.top : a.offset.top - h.top) + a.sizeDiff.height),
            n = a.containerElement.get(0) === a.element.parent().get(0),
            o = /relative|absolute/.test(a.containerElement.css("position")),
            n && o && (i -= a.parentData.left),
            i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i,
            c && (a.size.height = a.size.width / a.aspectRatio)),
            s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s,
            c && (a.size.width = a.size.height * a.aspectRatio))
        },
        stop: function() {
            var e = t(this).data("ui-resizable")
              , i = e.options
              , s = e.containerOffset
              , n = e.containerPosition
              , o = e.containerElement
              , a = t(e.helper)
              , r = a.offset()
              , h = a.outerWidth() - e.sizeDiff.width
              , l = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }),
            e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            })
        }
    }),
    t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).data("ui-resizable").options
              , i = function(e) {
                t(e).each(function() {
                    var e = t(this);
                    e.data("ui-resizable-alsoresize", {
                        width: parseInt(e.width(), 10),
                        height: parseInt(e.height(), 10),
                        left: parseInt(e.css("left"), 10),
                        top: parseInt(e.css("top"), 10)
                    })
                })
            };
            "object" != typeof e.alsoResize || e.alsoResize.parentNode ? i(e.alsoResize) : e.alsoResize.length ? (e.alsoResize = e.alsoResize[0],
            i(e.alsoResize)) : t.each(e.alsoResize, function(t) {
                i(t)
            })
        },
        resize: function(e, i) {
            var s = t(this).data("ui-resizable")
              , n = s.options
              , o = s.originalSize
              , a = s.originalPosition
              , r = {
                height: s.size.height - o.height || 0,
                width: s.size.width - o.width || 0,
                top: s.position.top - a.top || 0,
                left: s.position.left - a.left || 0
            }
              , h = function(e, s) {
                t(e).each(function() {
                    var e = t(this)
                      , n = t(this).data("ui-resizable-alsoresize")
                      , o = {}
                      , a = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    t.each(a, function(t, e) {
                        var i = (n[e] || 0) + (r[e] || 0);
                        i && i >= 0 && (o[e] = i || null)
                    }),
                    e.css(o)
                })
            };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function(t, e) {
                h(t, e)
            })
        },
        stop: function() {
            t(this).removeData("resizable-alsoresize")
        }
    }),
    t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).data("ui-resizable")
              , i = e.options
              , s = e.size;
            e.ghost = e.originalElement.clone(),
            e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""),
            e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }),
    t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e = t(this).data("ui-resizable")
              , i = e.options
              , s = e.size
              , n = e.originalSize
              , o = e.originalPosition
              , a = e.axis
              , r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid
              , h = r[0] || 1
              , l = r[1] || 1
              , c = Math.round((s.width - n.width) / h) * h
              , u = Math.round((s.height - n.height) / l) * l
              , d = n.width + c
              , p = n.height + u
              , f = i.maxWidth && i.maxWidth < d
              , g = i.maxHeight && i.maxHeight < p
              , m = i.minWidth && i.minWidth > d
              , v = i.minHeight && i.minHeight > p;
            i.grid = r,
            m && (d += h),
            v && (p += l),
            f && (d -= h),
            g && (p -= l),
            /^(se|s|e)$/.test(a) ? (e.size.width = d,
            e.size.height = p) : /^(ne)$/.test(a) ? (e.size.width = d,
            e.size.height = p,
            e.position.top = o.top - u) : /^(sw)$/.test(a) ? (e.size.width = d,
            e.size.height = p,
            e.position.left = o.left - c) : (e.size.width = d,
            e.size.height = p,
            e.position.top = o.top - u,
            e.position.left = o.left - c)
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.selectable", t.ui.mouse, {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e, i = this;
            this.element.addClass("ui-selectable"),
            this.dragged = !1,
            this.refresh = function() {
                (e = t(i.options.filter, i.element[0])).addClass("ui-selectee"),
                e.each(function() {
                    var e = t(this)
                      , i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                })
            }
            ,
            this.refresh(),
            this.selectees = e.addClass("ui-selectee"),
            this._mouseInit(),
            this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
            this.element.removeClass("ui-selectable ui-selectable-disabled"),
            this._mouseDestroy()
        },
        _mouseStart: function(e) {
            var i = this
              , s = this.options;
            this.opos = [e.pageX, e.pageY],
            this.options.disabled || (this.selectees = t(s.filter, this.element[0]),
            this._trigger("start", e),
            t(s.appendTo).append(this.helper),
            this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }),
            s.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0,
                e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"),
                s.selected = !1,
                s.$element.addClass("ui-unselecting"),
                s.unselecting = !0,
                i._trigger("unselecting", e, {
                    unselecting: s.element
                }))
            }),
            t(e.target).parents().addBack().each(function() {
                var s, n = t.data(this, "selectable-item");
                if (n)
                    return s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"),
                    n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"),
                    n.unselecting = !s,
                    n.selecting = s,
                    n.selected = s,
                    s ? i._trigger("selecting", e, {
                        selecting: n.element
                    }) : i._trigger("unselecting", e, {
                        unselecting: n.element
                    }),
                    !1
            }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0,
            !this.options.disabled) {
                var i, s = this, n = this.options, o = this.opos[0], a = this.opos[1], r = e.pageX, h = e.pageY;
                return o > r && (i = r,
                r = o,
                o = i),
                a > h && (i = h,
                h = a,
                a = i),
                this.helper.css({
                    left: o,
                    top: a,
                    width: r - o,
                    height: h - a
                }),
                this.selectees.each(function() {
                    var i = t.data(this, "selectable-item")
                      , l = !1;
                    i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || i.right < o || i.top > h || i.bottom < a) : "fit" === n.tolerance && (l = i.left > o && i.right < r && i.top > a && i.bottom < h),
                    l ? (i.selected && (i.$element.removeClass("ui-selected"),
                    i.selected = !1),
                    i.unselecting && (i.$element.removeClass("ui-unselecting"),
                    i.unselecting = !1),
                    i.selecting || (i.$element.addClass("ui-selecting"),
                    i.selecting = !0,
                    s._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"),
                    i.selecting = !1,
                    i.$element.addClass("ui-selected"),
                    i.selected = !0) : (i.$element.removeClass("ui-selecting"),
                    i.selecting = !1,
                    i.startselected && (i.$element.addClass("ui-unselecting"),
                    i.unselecting = !0),
                    s._trigger("unselecting", e, {
                        unselecting: i.element
                    }))),
                    i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"),
                    i.selected = !1,
                    i.$element.addClass("ui-unselecting"),
                    i.unselecting = !0,
                    s._trigger("unselecting", e, {
                        unselecting: i.element
                    })))))
                }),
                !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1,
            t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"),
                s.unselecting = !1,
                s.startselected = !1,
                i._trigger("unselected", e, {
                    unselected: s.element
                })
            }),
            t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"),
                s.selecting = !1,
                s.selected = !0,
                s.startselected = !0,
                i._trigger("selected", e, {
                    selected: s.element
                })
            }),
            this._trigger("stop", e),
            this.helper.remove(),
            !1
        }
    })
}(jQuery),
function(t, e) {
    function i(t, e, i) {
        return t > e && t < e + i
    }
    function s(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {},
            this.element.addClass("ui-sortable"),
            this.refresh(),
            this.floating = !!this.items.length && ("x" === t.axis || s(this.items[0].item)),
            this.offset = this.element.offset(),
            this._mouseInit(),
            this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"),
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--)
                this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i,
            this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, i) {
            var s = null
              , n = !1
              , o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e),
            t(e.target).parents().each(function() {
                if (t.data(this, o.widgetName + "-item") === o)
                    return s = t(this),
                    !1
            }),
            t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)),
            !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (n = !0)
            }),
            !n)) && (this.currentItem = s,
            this._removeCurrentsFromItems(),
            !0))))
        },
        _mouseStart: function(e, i, s) {
            var n, o, a = this.options;
            if (this.currentContainer = this,
            this.refreshPositions(),
            this.helper = this._createHelper(e),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            this.originalPosition = this._generatePosition(e),
            this.originalPageX = e.pageX,
            this.originalPageY = e.pageY,
            a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            a.containment && this._setContainment(),
            a.cursor && "auto" !== a.cursor && (o = this.document.find("body"),
            this.storedCursor = o.css("cursor"),
            o.css("cursor", a.cursor),
            this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)),
            a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", a.opacity)),
            a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", a.zIndex)),
            this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", e, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !s)
                for (n = this.containers.length - 1; n >= 0; n--)
                    this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this),
            t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(e),
            !0
        },
        _mouseDrag: function(e) {
            var i, s, n, o, a = this.options, r = !1;
            for (this.position = this._generatePosition(e),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)),
            e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))),
            !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            i = this.items.length - 1; i >= 0; i--)
                if (n = (s = this.items[i]).item[0],
                (o = this._intersectsWithPointer(s)) && s.instance === this.currentContainer && !(n === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === n || t.contains(this.placeholder[0], n) || "semi-dynamic" === this.options.type && t.contains(this.element[0], n))) {
                    if (this.direction = 1 === o ? "down" : "up",
                    "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))
                        break;
                    this._rearrange(e, s),
                    this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            this._trigger("sort", e, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e),
                this.options.revert) {
                    var s = this
                      , n = this.placeholder.offset()
                      , o = this.options.axis
                      , a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)),
                    o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)),
                    this.reverting = !0,
                    t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e)
                    })
                } else
                    this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }),
                "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--)
                    this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
                    this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)),
                    this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected)
              , s = [];
            return e = e || {},
            t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }),
            !s.length && e.key && s.push(e.key + "="),
            s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected)
              , s = [];
            return e = e || {},
            i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }),
            s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left
              , i = e + this.helperProportions.width
              , s = this.positionAbs.top
              , n = s + this.helperProportions.height
              , o = t.left
              , a = o + t.width
              , r = t.top
              , h = r + t.height
              , l = this.offset.click.top
              , c = this.offset.click.left
              , u = "x" === this.options.axis || s + l > r && s + l < h
              , d = "y" === this.options.axis || e + c > o && e + c < a
              , p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < h
        },
        _intersectsWithPointer: function(t) {
            var e = "x" === this.options.axis || i(this.positionAbs.top + this.offset.click.top, t.top, t.height)
              , s = "y" === this.options.axis || i(this.positionAbs.left + this.offset.click.left, t.left, t.width)
              , n = e && s
              , o = this._getDragVerticalDirection()
              , a = this._getDragHorizontalDirection();
            return !!n && (this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var e = i(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height)
              , s = i(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width)
              , n = this._getDragVerticalDirection()
              , o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && e || "up" === n && !e)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            var i, s, n, o, a = [], r = [], h = this._connectWith();
            if (h && e)
                for (i = h.length - 1; i >= 0; i--)
                    for (s = (n = t(h[i])).length - 1; s >= 0; s--)
                        (o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && r.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
            for (r.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
            i = r.length - 1; i >= 0; i--)
                r[i][0].each(function() {
                    a.push(this)
                });
            return t(a)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; i < e.length; i++)
                    if (e[i] === t.item[0])
                        return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [],
            this.containers = [this];
            var i, s, n, o, a, r, h, l, c = this.items, u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this]], d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (s = (n = t(d[i])).length - 1; s >= 0; s--)
                        (o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                            item: this.currentItem
                        }) : t(o.options.items, o.element), o]),
                        this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1],
                s = 0,
                l = (r = u[i][0]).length; s < l; s++)
                    (h = t(r[s])).data(this.widgetName + "-item", a),
                    c.push({
                        item: h,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        refreshPositions: function(e) {
            var i, s, n, o;
            for (this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()),
            i = this.items.length - 1; i >= 0; i--)
                (s = this.items[i]).instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item,
                e || (s.width = n.outerWidth(),
                s.height = n.outerHeight()),
                o = n.offset(),
                s.left = o.left,
                s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--)
                    o = this.containers[i].element.offset(),
                    this.containers[i].containerCache.left = o.left,
                    this.containers[i].containerCache.top = o.top,
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            var i, s = (e = e || this).options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder,
            s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase()
                      , n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? e.currentItem.children().each(function() {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
                    }) : "img" === s && n.attr("src", e.currentItem.attr("src")),
                    i || n.css("visibility", "hidden"),
                    n
                },
                update: function(t, n) {
                    i && !s.forcePlaceholderSize || (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)),
                    n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)),
            e.currentItem.after(e.placeholder),
            s.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function(e) {
            var n, o, a, r, h, l, c, u, d, p, f = null, g = null;
            for (n = this.containers.length - 1; n >= 0; n--)
                if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (f && t.contains(this.containers[n].element[0], f.element[0]))
                            continue;
                        f = this.containers[n],
                        g = n
                    } else
                        this.containers[n].containerCache.over && (this.containers[n]._trigger("out", e, this._uiHash(this)),
                        this.containers[n].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length)
                    this.containers[g].containerCache.over || (this.containers[g]._trigger("over", e, this._uiHash(this)),
                    this.containers[g].containerCache.over = 1);
                else {
                    for (a = 1e4,
                    r = null,
                    h = (p = f.floating || s(this.currentItem)) ? "left" : "top",
                    l = p ? "width" : "height",
                    c = this.positionAbs[h] + this.offset.click[h],
                    o = this.items.length - 1; o >= 0; o--)
                        t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (p && !i(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height) || (u = this.items[o].item.offset()[h],
                        d = !1,
                        Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (d = !0,
                        u += this.items[o][l]),
                        Math.abs(u - c) < a && (a = Math.abs(u - c),
                        r = this.items[o],
                        this.direction = d ? "up" : "down")));
                    if (!r && !this.options.dropOnEmpty)
                        return;
                    if (this.currentContainer === this.containers[g])
                        return;
                    r ? this._rearrange(e, r, null, !0) : this._rearrange(e, null, this.containers[g].element, !0),
                    this._trigger("change", e, this._uiHash()),
                    this.containers[g]._trigger("change", e, this._uiHash(this)),
                    this.currentContainer = this.containers[g],
                    this.options.placeholder.update(this.currentContainer, this.placeholder),
                    this.containers[g]._trigger("over", e, this._uiHash(this)),
                    this.containers[g].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options
              , s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]),
            s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            s[0].style.width && !i.forceHelperSize || s.width(this.currentItem.width()),
            s[0].style.height && !i.forceHelperSize || s.height(this.currentItem.height()),
            s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left"in e && (this.offset.click.left = e.left + this.margins.left),
            "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top"in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
            e.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode),
            "document" !== n.containment && "window" !== n.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0],
            i = t(n.containment).offset(),
            s = "hidden" !== t(e).css("overflow"),
            this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1
              , n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n = this.options, o = e.pageX, a = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left),
            e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top),
            e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left),
            e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)),
            n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1],
            a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i,
            s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0],
            o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)),
            {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(t, e) {
            this.reverting = !1;
            var i, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null,
            this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)
                    "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !e && s.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }),
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                this._trigger("update", t, this._uiHash())
            }),
            this !== this.currentContainer && (e || (s.push(function(t) {
                this._trigger("remove", t, this._uiHash())
            }),
            s.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            s.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)))),
            i = this.containers.length - 1; i >= 0; i--)
                e || s.push(function(t) {
                    return function(e) {
                        t._trigger("deactivate", e, this._uiHash(this))
                    }
                }
                .call(this, this.containers[i])),
                this.containers[i].containerCache.over && (s.push(function(t) {
                    return function(e) {
                        t._trigger("out", e, this._uiHash(this))
                    }
                }
                .call(this, this.containers[i])),
                this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
            this.dragging = !1,
            this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()),
                    i = 0; i < s.length; i++)
                        s[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1,
                !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            this.helper = null,
            !e) {
                for (i = 0; i < s.length; i++)
                    s[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function() {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}(jQuery),
function(t, e) {
    var i = 0
      , s = {}
      , n = {};
    s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "hide",
    n.height = n.paddingTop = n.paddingBottom = n.borderTopWidth = n.borderBottomWidth = "show",
    t.widget("ui.accordion", {
        version: "1.10.3",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(),
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"),
            e.collapsible || !1 !== e.active && null != e.active || (e.active = 0),
            this._processPanels(),
            e.active < 0 && (e.active += this.headers.length),
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t(),
                content: this.active.length ? this.active.next() : t()
            }
        },
        _createIcons: function() {
            var e = this.options.icons;
            e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers),
            this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),
            this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var t;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }),
            this._destroyIcons(),
            t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }),
            "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) {
            "active" !== t ? ("event" === t && (this.options.event && this._off(this.headers, this.options.event),
            this._setupEvents(e)),
            this._super(t, e),
            "collapsible" !== t || e || !1 !== this.options.active || this._activate(0),
            "icons" === t && (this._destroyIcons(),
            e && this._createIcons()),
            "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e)) : this._activate(e)
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode
                  , s = this.headers.length
                  , n = this.headers.index(e.target)
                  , o = !1;
                switch (e.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    o = this.headers[(n + 1) % s];
                    break;
                case i.LEFT:
                case i.UP:
                    o = this.headers[(n - 1 + s) % s];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._eventHandler(e);
                    break;
                case i.HOME:
                    o = this.headers[0];
                    break;
                case i.END:
                    o = this.headers[s - 1]
                }
                o && (t(e.target).attr("tabIndex", -1),
                t(o).attr("tabIndex", 0),
                o.focus(),
                e.preventDefault())
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(),
            !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1,
            this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1,
            this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active),
            this._destroyIcons(),
            this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),
            this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var e, s = this.options, n = s.heightStyle, o = this.element.parent(), a = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++i);
            this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),
            this.active.next().addClass("ui-accordion-content-active").show(),
            this.headers.attr("role", "tab").each(function(e) {
                var i = t(this)
                  , s = i.attr("id")
                  , n = i.next()
                  , o = n.attr("id");
                s || (s = a + "-header-" + e,
                i.attr("id", s)),
                o || (o = a + "-panel-" + e,
                n.attr("id", o)),
                i.attr("aria-controls", o),
                n.attr("aria-labelledby", s)
            }).next().attr("role", "tabpanel"),
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(),
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(s.event),
            "fill" === n ? (e = o.height(),
            this.element.siblings(":visible").each(function() {
                var i = t(this)
                  , s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
            }),
            this.headers.each(function() {
                e -= t(this).outerHeight(!0)
            }),
            this.headers.next().each(function() {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === n && (e = 0,
            this.headers.next().each(function() {
                e = Math.max(e, t(this).css("height", "").height())
            }).height(e))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0],
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }),
            this._hoverable(this.headers),
            this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i = this.options
              , s = this.active
              , n = t(e.currentTarget)
              , o = n[0] === s[0]
              , a = o && i.collapsible
              , r = a ? t() : n.next()
              , h = {
                oldHeader: s,
                oldPanel: s.next(),
                newHeader: a ? t() : n,
                newPanel: r
            };
            e.preventDefault(),
            o && !i.collapsible || !1 === this._trigger("beforeActivate", e, h) || (i.active = !a && this.headers.index(n),
            this.active = o ? t() : n,
            this._toggle(h),
            s.removeClass("ui-accordion-header-active ui-state-active"),
            i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),
            o || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),
            i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),
            n.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel
              , s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0),
            this.prevShow = i,
            this.prevHide = s,
            this.options.animate ? this._animate(i, s, e) : (s.hide(),
            i.show(),
            this._toggleComplete(e)),
            s.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            s.prev().attr("aria-selected", "false"),
            i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1),
            i.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(t, e, i) {
            var o, a, r, h = this, l = 0, c = t.length && (!e.length || t.index() < e.index()), u = this.options.animate || {}, d = c && u.down || u, p = function() {
                h._toggleComplete(i)
            };
            return "number" == typeof d && (r = d),
            "string" == typeof d && (a = d),
            a = a || d.easing || u.easing,
            r = r || d.duration || u.duration,
            e.length ? t.length ? (o = t.show().outerHeight(),
            e.animate(s, {
                duration: r,
                easing: a,
                step: function(t, e) {
                    e.now = Math.round(t)
                }
            }),
            void t.hide().animate(n, {
                duration: r,
                easing: a,
                complete: p,
                step: function(t, i) {
                    i.now = Math.round(t),
                    "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(o - e.outerHeight() - l),
                    l = 0)
                }
            })) : e.animate(s, r, a, p) : t.animate(n, r, a, p)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel;
            e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
            e.length && (e.parent()[0].className = e.parent()[0].className),
            this._trigger("activate", null, t)
        }
    })
}(jQuery),
function(t, e) {
    var i = 0;
    t.widget("ui.autocomplete", {
        version: "1.10.3",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(), o = "textarea" === n, a = "input" === n;
            this.isMultiLine = !!o || !a && this.element.prop("isContentEditable"),
            this.valueMethod = this.element[o || a ? "val" : "text"],
            this.isNewMenu = !0,
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly"))
                        return e = !0,
                        s = !0,
                        void (i = !0);
                    e = !1,
                    s = !1,
                    i = !1;
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                    case o.PAGE_UP:
                        e = !0,
                        this._move("previousPage", n);
                        break;
                    case o.PAGE_DOWN:
                        e = !0,
                        this._move("nextPage", n);
                        break;
                    case o.UP:
                        e = !0,
                        this._keyEvent("previous", n);
                        break;
                    case o.DOWN:
                        e = !0,
                        this._keyEvent("next", n);
                        break;
                    case o.ENTER:
                    case o.NUMPAD_ENTER:
                        this.menu.active && (e = !0,
                        n.preventDefault(),
                        this.menu.select(n));
                        break;
                    case o.TAB:
                        this.menu.active && this.menu.select(n);
                        break;
                    case o.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term),
                        this.close(n),
                        n.preventDefault());
                        break;
                    default:
                        i = !0,
                        this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (e)
                        return e = !1,
                        void (this.isMultiLine && !this.menu.element.is(":visible") || s.preventDefault());
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                        case n.PAGE_UP:
                            this._move("previousPage", s);
                            break;
                        case n.PAGE_DOWN:
                            this._move("nextPage", s);
                            break;
                        case n.UP:
                            this._keyEvent("previous", s);
                            break;
                        case n.DOWN:
                            this._keyEvent("next", s)
                        }
                    }
                },
                input: function(t) {
                    if (s)
                        return s = !1,
                        void t.preventDefault();
                    this._searchTimeout(t)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(t) {
                    this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching),
                    this.close(t),
                    this._change(t))
                }
            }),
            this._initSource(),
            this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"),
            this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                        var e = this;
                        this.document.one("mousedown", function(s) {
                            s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close()
                        })
                    })
                },
                menufocus: function(e, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1,
                    e.originalEvent && /^mouse/.test(e.originalEvent.type)))
                        return this.menu.blur(),
                        void this.document.one("mousemove", function() {
                            t(e.target).trigger(e.originalEvent)
                        });
                    var s = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", e, {
                        item: s
                    }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                },
                menuselect: function(t, e) {
                    var i = e.item.data("ui-autocomplete-item")
                      , s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(),
                    this.previous = s,
                    this._delay(function() {
                        this.previous = s,
                        this.selectedItem = i
                    })),
                    !1 !== this._trigger("select", t, {
                        item: i
                    }) && this._value(i.value),
                    this.term = this._value(),
                    this.close(t),
                    this.selectedItem = i
                }
            }),
            this.liveRegion = t("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
            "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            e || (e = this.element.closest(".ui-front")),
            e.length || (e = this.document[0].body),
            e
        },
        _initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source,
            this.source = function(i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }
            ) : "string" == typeof this.options.source ? (i = this.options.source,
            this.source = function(e, n) {
                s.xhr && s.xhr.abort(),
                s.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        n(t)
                    },
                    error: function() {
                        n([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching),
            this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null,
                this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(),
            this.term = this._value(),
            t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var t = this
              , e = ++i;
            return function(s) {
                e === i && t.__response(s),
                t.pending--,
                t.pending || t.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(t) {
            t && (t = this._normalize(t)),
            this._trigger("response", null, {
                content: t
            }),
            !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t),
            this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0,
            this._close(t)
        },
        _close: function(t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e)
            })
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e),
            this.isNewMenu = !0,
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(t.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i, function(t, i) {
                s._renderItemData(e, i)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
        },
        _move: function(t, e) {
            if (this.menu.element.is(":visible"))
                return this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term),
                void this.menu.blur()) : void this.menu[t](e);
            this.search(null, e)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e),
            e.preventDefault())
        }
    }),
    t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, i) {
            var s = new RegExp(t.ui.autocomplete.escapeRegex(i),"i");
            return t.grep(e, function(t) {
                return s.test(t.label || t.value || t)
            })
        }
    }),
    t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var e;
            this._superApply(arguments),
            this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults,
            this.liveRegion.text(e))
        }
    })
}(jQuery),
function(t, e) {
    var i, s, n, o, a = "ui-button ui-widget ui-state-default ui-corner-all", r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", h = function() {
        var e = t(this);
        setTimeout(function() {
            e.find(":ui-button").button("refresh")
        }, 1)
    }, l = function(e) {
        var i = e.name
          , s = e.form
          , n = t([]);
        return i && (i = i.replace(/'/g, "\\'"),
        n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function() {
            return !this.form
        })),
        n
    };
    t.widget("ui.button", {
        version: "1.10.3",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, h),
            "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled),
            this._determineButtonType(),
            this.hasTitle = !!this.buttonElement.attr("title");
            var e = this
              , r = this.options
              , c = "checkbox" === this.type || "radio" === this.type
              , u = c ? "" : "ui-state-active"
              , d = "ui-state-focus";
            null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()),
            this._hoverable(this.buttonElement),
            this.buttonElement.addClass(a).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                r.disabled || this === i && t(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                r.disabled || t(this).removeClass(u)
            }).bind("click" + this.eventNamespace, function(t) {
                r.disabled && (t.preventDefault(),
                t.stopImmediatePropagation())
            }),
            this.element.bind("focus" + this.eventNamespace, function() {
                e.buttonElement.addClass(d)
            }).bind("blur" + this.eventNamespace, function() {
                e.buttonElement.removeClass(d)
            }),
            c && (this.element.bind("change" + this.eventNamespace, function() {
                o || e.refresh()
            }),
            this.buttonElement.bind("mousedown" + this.eventNamespace, function(t) {
                r.disabled || (o = !1,
                s = t.pageX,
                n = t.pageY)
            }).bind("mouseup" + this.eventNamespace, function(t) {
                r.disabled || s === t.pageX && n === t.pageY || (o = !0)
            })),
            "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (r.disabled || o)
                    return !1
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (r.disabled || o)
                    return !1;
                t(this).addClass("ui-state-active"),
                e.buttonElement.attr("aria-pressed", "true");
                var i = e.element[0];
                l(i).not(i).map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                if (r.disabled)
                    return !1;
                t(this).addClass("ui-state-active"),
                i = this,
                e.document.one("mouseup", function() {
                    i = null
                })
            }).bind("mouseup" + this.eventNamespace, function() {
                if (r.disabled)
                    return !1;
                t(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(e) {
                if (r.disabled)
                    return !1;
                e.keyCode !== t.ui.keyCode.SPACE && e.keyCode !== t.ui.keyCode.ENTER || t(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                t(this).removeClass("ui-state-active")
            }),
            this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            })),
            this._setOption("disabled", r.disabled),
            this._resetButton()
        },
        _determineButtonType: function() {
            var t, e, i;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button",
            "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(),
            e = "label[for='" + this.element.attr("id") + "']",
            this.buttonElement = t.find(e),
            this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(),
            this.buttonElement = t.filter(e),
            this.buttonElement.length || (this.buttonElement = t.find(e))),
            this.element.addClass("ui-helper-hidden-accessible"),
            (i = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"),
            this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"),
            this.buttonElement.removeClass(a + " ui-state-hover ui-state-active  " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "disabled" !== t ? this._resetButton() : e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)
        },
        refresh: function() {
            var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOption("disabled", e),
            "radio" === this.type ? l(this.element[0]).each(function() {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" !== this.type) {
                var e = this.buttonElement.removeClass(r)
                  , i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text()
                  , s = this.options.icons
                  , n = s.primary && s.secondary
                  , o = [];
                s.primary || s.secondary ? (this.options.text && o.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")),
                s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"),
                s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"),
                this.options.text || (o.push(n ? "ui-button-icons-only" : "ui-button-icon-only"),
                this.hasTitle || e.attr("title", t.trim(i)))) : o.push("ui-button-text-only"),
                e.addClass(o.join(" "))
            } else
                this.options.label && this.element.val(this.options.label)
        }
    }),
    t.widget("ui.buttonset", {
        version: "1.10.3",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(t, e) {
            "disabled" === t && this.buttons.button("option", t, e),
            this._super(t, e)
        },
        refresh: function() {
            var e = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"),
            this.buttons.map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery),
function(t, e) {
    t.extend(t.ui, {
        datepicker: {
            version: "1.10.3"
        }
    });
    var i, s = "datepicker";
    function n() {
        this._curInst = null,
        this._keyEvent = !1,
        this._disabledInputs = [],
        this._datepickerShowing = !1,
        this._inDialog = !1,
        this._mainDivId = "ui-datepicker-div",
        this._inlineClass = "ui-datepicker-inline",
        this._appendClass = "ui-datepicker-append",
        this._triggerClass = "ui-datepicker-trigger",
        this._dialogClass = "ui-datepicker-dialog",
        this._disableClass = "ui-datepicker-disabled",
        this._unselectableClass = "ui-datepicker-unselectable",
        this._currentClass = "ui-datepicker-current-day",
        this._dayOverClass = "ui-datepicker-days-cell-over",
        this.regional = [],
        this.regional[""] = {
            closeText: "Done",
            prevText: "이전달",
            nextText: "다음달",
            currentText: "Today",
            monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
            weekHeader: "Wk",
            dateFormat: "yy-mm-dd",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: ""
        },
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        },
        t.extend(this._defaults, this.regional[""]),
        this.dpDiv = o(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function o(e) {
        var s = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(s, "mouseout", function() {
            t(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).delegate(s, "mouseover", function() {
            t.datepicker._isDisabledDatepicker(i.inline ? e.parent()[0] : i.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
            t(this).addClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        })
    }
    function a(e, i) {
        t.extend(e, i);
        for (var s in i)
            null == i[s] && (e[s] = i[s]);
        return e
    }
    t.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return a(this._defaults, t || {}),
            this
        },
        _attachDatepicker: function(e, i) {
            var s, n, o;
            n = "div" === (s = e.nodeName.toLowerCase()) || "span" === s,
            e.id || (this.uuid += 1,
            e.id = "dp" + this.uuid),
            (o = this._newInst(t(e), n)).settings = t.extend({}, i || {}),
            "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
        },
        _newInst: function(e, i) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? o(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var n = t(e);
            i.append = t([]),
            i.trigger = t([]),
            n.hasClass(this.markerClassName) || (this._attachments(n, i),
            n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),
            this._autoSize(i),
            t.data(e, s, i),
            i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var s, n, o, a = this._get(i, "appendText"), r = this._get(i, "isRTL");
            i.append && i.append.remove(),
            a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"),
            e[r ? "before" : "after"](i.append)),
            e.unbind("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            "focus" !== (s = this._get(i, "showOn")) && "both" !== s || e.focus(this._showDatepicker),
            "button" !== s && "both" !== s || (n = this._get(i, "buttonText"),
            o = this._get(i, "buttonImage"),
            i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: n,
                title: n
            }) : n)),
            e[r ? "before" : "after"](i.trigger),
            i.trigger.click(function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(),
                t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]),
                !1
            }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, o = new Date(2009,11,20), a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function(t) {
                    for (i = 0,
                    s = 0,
                    n = 0; n < t.length; n++)
                        t[n].length > i && (i = t[n].length,
                        s = n);
                    return s
                }
                ,
                o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())),
                t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var n = t(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv),
            t.data(e, s, i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(e),
            i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, n, o, r) {
            var h, l, c, u, d, p = this._dialogInst;
            return p || (this.uuid += 1,
            h = "dp" + this.uuid,
            this._dialogInput = t("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"),
            this._dialogInput.keydown(this._doKeyDown),
            t("body").append(this._dialogInput),
            (p = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {},
            t.data(this._dialogInput[0], s, p)),
            a(p.settings, o || {}),
            i = i && i.constructor === Date ? this._formatDate(p, i) : i,
            this._dialogInput.val(i),
            this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null,
            this._pos || (l = document.documentElement.clientWidth,
            c = document.documentElement.clientHeight,
            u = document.documentElement.scrollLeft || document.body.scrollLeft,
            d = document.documentElement.scrollTop || document.body.scrollTop,
            this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]),
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            p.settings.onSelect = n,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            t.blockUI && t.blockUI(this.dpDiv),
            t.data(this._dialogInput[0], s, p),
            this
        },
        _destroyDatepicker: function(e) {
            var i, n = t(e), o = t.data(e, s);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
            t.removeData(e, s),
            "input" === i ? (o.append.remove(),
            o.trigger.remove(),
            n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || n.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(e) {
            var i, n, o = t(e), a = t.data(e, s);
            o.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1,
            a.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : "div" !== i && "span" !== i || ((n = o.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"),
            n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
            this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function(e) {
            var i, n, o = t(e), a = t.data(e, s);
            o.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0,
            a.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : "div" !== i && "span" !== i || ((n = o.children("." + this._inlineClass)).children().addClass("ui-state-disabled"),
            n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
            this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }),
            this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t)
                return !1;
            for (var e = 0; e < this._disabledInputs.length; e++)
                if (this._disabledInputs[e] === t)
                    return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return t.data(e, s)
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(i, s, n) {
            var o, r, h, l, c = this._getInst(i);
            if (2 === arguments.length && "string" == typeof s)
                return "defaults" === s ? t.extend({}, t.datepicker._defaults) : c ? "all" === s ? t.extend({}, c.settings) : this._get(c, s) : null;
            o = s || {},
            "string" == typeof s && ((o = {})[s] = n),
            c && (this._curInst === c && this._hideDatepicker(),
            r = this._getDateDatepicker(i, !0),
            h = this._getMinMaxDate(c, "min"),
            l = this._getMinMaxDate(c, "max"),
            a(c.settings, o),
            null !== h && o.dateFormat !== e && o.minDate === e && (c.settings.minDate = this._formatDate(c, h)),
            null !== l && o.dateFormat !== e && o.maxDate === e && (c.settings.maxDate = this._formatDate(c, l)),
            "disabled"in o && (o.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)),
            this._attachments(t(i), c),
            this._autoSize(c),
            this._setDate(c, r),
            this._updateAlternate(c),
            this._updateDatepicker(c))
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e),
            this._updateDatepicker(i),
            this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e),
            i ? this._getDate(i) : null
        },
        _doKeyDown: function(e) {
            var i, s, n, o = t.datepicker._getInst(e.target), a = !0, r = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0,
            t.datepicker._datepickerShowing)
                switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(),
                    a = !1;
                    break;
                case 13:
                    return (n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]),
                    (i = t.datepicker._get(o, "onSelect")) ? (s = t.datepicker._formatDate(o),
                    i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                    a = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                    a = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
                    a = e.ctrlKey || e.metaKey,
                    e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"),
                    a = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
                    a = e.ctrlKey || e.metaKey,
                    e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"),
                    a = e.ctrlKey || e.metaKey;
                    break;
                default:
                    a = !1
                }
            else
                36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(),
            e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var i, s, n = t.datepicker._getInst(e.target);
            if (t.datepicker._get(n, "constrainInput"))
                return i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")),
                s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode),
                e.ctrlKey || e.metaKey || s < " " || !i || i.indexOf(s) > -1
        },
        _doKeyUp: function(e) {
            var i = t.datepicker._getInst(e.target);
            if (i.input.val() !== i.lastVal)
                try {
                    t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i),
                    t.datepicker._updateAlternate(i),
                    t.datepicker._updateDatepicker(i))
                } catch (t) {}
            return !0
        },
        _showDatepicker: function(e) {
            var i, s, n, o, r, h, l;
            ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]),
            t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e) || (i = t.datepicker._getInst(e),
            t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0),
            i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
            !1 !== (n = (s = t.datepicker._get(i, "beforeShow")) ? s.apply(e, [e, i]) : {}) && (a(i.settings, n),
            i.lastVal = null,
            t.datepicker._lastInput = e,
            t.datepicker._setDateFromField(i),
            t.datepicker._inDialog && (e.value = ""),
            t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e),
            t.datepicker._pos[1] += e.offsetHeight),
            o = !1,
            t(e).parents().each(function() {
                return !(o |= "fixed" === t(this).css("position"))
            }),
            r = {
                left: t.datepicker._pos[0],
                top: t.datepicker._pos[1]
            },
            t.datepicker._pos = null,
            i.dpDiv.empty(),
            i.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }),
            t.datepicker._updateDatepicker(i),
            r = t.datepicker._checkOffset(i, r, o),
            i.dpDiv.css({
                position: t.datepicker._inDialog && t.blockUI ? "static" : o ? "fixed" : "absolute",
                display: "none",
                left: r.left + "px",
                top: r.top + "px"
            }),
            i.inline || (h = t.datepicker._get(i, "showAnim"),
            l = t.datepicker._get(i, "duration"),
            i.dpDiv.zIndex(t(e).zIndex() + 1),
            t.datepicker._datepickerShowing = !0,
            t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null),
            t.datepicker._shouldFocusInput(i) && i.input.focus(),
            t.datepicker._curInst = i)))
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4,
            i = e,
            e.dpDiv.empty().append(this._generateHTML(e)),
            this._attachHandlers(e),
            e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var s, n = this._getNumberOfMonths(e), o = n[1];
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
            o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", 17 * o + "em"),
            e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
            e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
            e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(),
            e.yearshtml && (s = e.yearshtml,
            setTimeout(function() {
                s === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),
                s = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function(e, i, s) {
            var n = e.dpDiv.outerWidth()
              , o = e.dpDiv.outerHeight()
              , a = e.input ? e.input.outerWidth() : 0
              , r = e.input ? e.input.outerHeight() : 0
              , h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft())
              , l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - a : 0,
            i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0,
            i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0,
            i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0),
            i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0),
            i
        },
        _findPos: function(e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); )
                e = e[n ? "previousSibling" : "nextSibling"];
            return [(i = t(e).offset()).left, i.top]
        },
        _hideDatepicker: function(e) {
            var i, n, o, a, r = this._curInst;
            !r || e && r !== t.data(e, s) || this._datepickerShowing && (i = this._get(r, "showAnim"),
            n = this._get(r, "duration"),
            o = function() {
                t.datepicker._tidyDialog(r)
            }
            ,
            t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), n, o) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, o),
            i || o(),
            this._datepickerShowing = !1,
            (a = this._get(r, "onClose")) && a.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]),
            this._lastInput = null,
            this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }),
            t.blockUI && (t.unblockUI(),
            t("body").append(this.dpDiv))),
            this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target)
                  , s = t.datepicker._getInst(i[0]);
                (i[0].id === t.datepicker._mainDivId || 0 !== i.parents("#" + t.datepicker._mainDivId).length || i.hasClass(t.datepicker.markerClassName) || i.closest("." + t.datepicker._triggerClass).length || !t.datepicker._datepickerShowing || t.datepicker._inDialog && t.blockUI) && (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === s) || t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, s) {
            var n = t(e)
              , o = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s),
            this._updateDatepicker(o))
        },
        _gotoToday: function(e) {
            var i, s = t(e), n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay,
            n.drawMonth = n.selectedMonth = n.currentMonth,
            n.drawYear = n.selectedYear = n.currentYear) : (i = new Date,
            n.selectedDay = i.getDate(),
            n.drawMonth = n.selectedMonth = i.getMonth(),
            n.drawYear = n.selectedYear = i.getFullYear()),
            this._notifyChange(n),
            this._adjustDate(s)
        },
        _selectMonthYear: function(e, i, s) {
            var n = t(e)
              , o = this._getInst(n[0]);
            o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
            this._notifyChange(o),
            this._adjustDate(n)
        },
        _selectDay: function(e, i, s, n) {
            var o, a = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || ((o = this._getInst(a[0])).selectedDay = o.currentDay = t("a", n).html(),
            o.selectedMonth = o.currentMonth = i,
            o.selectedYear = o.currentYear = s,
            this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var s, n = t(e), o = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(o),
            o.input && o.input.val(i),
            this._updateAlternate(o),
            (s = this._get(o, "onSelect")) ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"),
            o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(),
            this._lastInput = o.input[0],
            "object" != typeof o.input[0] && o.input.focus(),
            this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, s, n, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
            s = this._getDate(e),
            n = this.formatDate(i, s, this._getFormatConfig(e)),
            t(o).each(function() {
                t(this).val(n)
            }))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && e < 6, ""]
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
            e = i.getTime(),
            i.setMonth(0),
            i.setDate(1),
            Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(e, i, s) {
            if (null == e || null == i)
                throw "Invalid arguments";
            if ("" === (i = "object" == typeof i ? i.toString() : i + ""))
                return null;
            var n, o, a, r, h = 0, l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10), u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, d = (s ? s.dayNames : null) || this._defaults.dayNames, p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, f = (s ? s.monthNames : null) || this._defaults.monthNames, g = -1, m = -1, v = -1, _ = -1, b = !1, y = function(t) {
                var i = n + 1 < e.length && e.charAt(n + 1) === t;
                return i && n++,
                i
            }, w = function(t) {
                var e = y(t)
                  , s = new RegExp("^\\d{1," + ("@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2) + "}")
                  , n = i.substring(h).match(s);
                if (!n)
                    throw "Missing number at position " + h;
                return h += n[0].length,
                parseInt(n[0], 10)
            }, k = function(e, s, n) {
                var o = -1
                  , a = t.map(y(e) ? n : s, function(t, e) {
                    return [[e, t]]
                }).sort(function(t, e) {
                    return -(t[1].length - e[1].length)
                });
                if (t.each(a, function(t, e) {
                    var s = e[1];
                    if (i.substr(h, s.length).toLowerCase() === s.toLowerCase())
                        return o = e[0],
                        h += s.length,
                        !1
                }),
                -1 !== o)
                    return o + 1;
                throw "Unknown name at position " + h
            }, x = function() {
                if (i.charAt(h) !== e.charAt(n))
                    throw "Unexpected literal at position " + h;
                h++
            };
            for (n = 0; n < e.length; n++)
                if (b)
                    "'" !== e.charAt(n) || y("'") ? x() : b = !1;
                else
                    switch (e.charAt(n)) {
                    case "d":
                        v = w("d");
                        break;
                    case "D":
                        k("D", u, d);
                        break;
                    case "o":
                        _ = w("o");
                        break;
                    case "m":
                        m = w("m");
                        break;
                    case "M":
                        m = k("M", p, f);
                        break;
                    case "y":
                        g = w("y");
                        break;
                    case "@":
                        g = (r = new Date(w("@"))).getFullYear(),
                        m = r.getMonth() + 1,
                        v = r.getDate();
                        break;
                    case "!":
                        g = (r = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(),
                        m = r.getMonth() + 1,
                        v = r.getDate();
                        break;
                    case "'":
                        y("'") ? x() : b = !0;
                        break;
                    default:
                        x()
                    }
            if (h < i.length && (a = i.substr(h),
            !/^\s+/.test(a)))
                throw "Extra/unparsed characters found in date: " + a;
            if (-1 === g ? g = (new Date).getFullYear() : g < 100 && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g <= c ? 0 : -100)),
            _ > -1)
                for (m = 1,
                v = _; ; ) {
                    if (v <= (o = this._getDaysInMonth(g, m - 1)))
                        break;
                    m++,
                    v -= o
                }
            if ((r = this._daylightSavingAdjust(new Date(g,m - 1,v))).getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== v)
                throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(t, e, i) {
            if (!e)
                return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, h = function(e) {
                var i = s + 1 < t.length && t.charAt(s + 1) === e;
                return i && s++,
                i
            }, l = function(t, e, i) {
                var s = "" + e;
                if (h(t))
                    for (; s.length < i; )
                        s = "0" + s;
                return s
            }, c = function(t, e, i, s) {
                return h(t) ? s[e] : i[e]
            }, u = "", d = !1;
            if (e)
                for (s = 0; s < t.length; s++)
                    if (d)
                        "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
                    else
                        switch (t.charAt(s)) {
                        case "d":
                            u += l("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), n, o);
                            break;
                        case "o":
                            u += l("o", Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime() - new Date(e.getFullYear(),0,0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += l("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), a, r);
                            break;
                        case "y":
                            u += h("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(s)
                        }
            return u
        },
        _possibleChars: function(t) {
            var e, i = "", s = !1, n = function(i) {
                var s = e + 1 < t.length && t.charAt(e + 1) === i;
                return s && e++,
                s
            };
            for (e = 0; e < t.length; e++)
                if (s)
                    "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                else
                    switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += t.charAt(e)
                    }
            return i
        },
        _get: function(t, i) {
            return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat")
                  , s = t.lastVal = t.input ? t.input.val() : null
                  , n = this._getDefaultDate(t)
                  , o = n
                  , a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, s, a) || n
                } catch (t) {
                    s = e ? "" : s
                }
                t.selectedDay = o.getDate(),
                t.drawMonth = t.selectedMonth = o.getMonth(),
                t.drawYear = t.selectedYear = o.getFullYear(),
                t.currentDay = s ? o.getDate() : 0,
                t.currentMonth = s ? o.getMonth() : 0,
                t.currentYear = s ? o.getFullYear() : 0,
                this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(e, i, s) {
            var n, o, a = null == i || "" === i ? s : "string" == typeof i ? function(i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                } catch (t) {}
                for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, n = s.getFullYear(), o = s.getMonth(), a = s.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = r.exec(i); h; ) {
                    switch (h[2] || "d") {
                    case "d":
                    case "D":
                        a += parseInt(h[1], 10);
                        break;
                    case "w":
                    case "W":
                        a += 7 * parseInt(h[1], 10);
                        break;
                    case "m":
                    case "M":
                        o += parseInt(h[1], 10),
                        a = Math.min(a, t.datepicker._getDaysInMonth(n, o));
                        break;
                    case "y":
                    case "Y":
                        n += parseInt(h[1], 10),
                        a = Math.min(a, t.datepicker._getDaysInMonth(n, o))
                    }
                    h = r.exec(i)
                }
                return new Date(n,o,a)
            }(i) : "number" == typeof i ? isNaN(i) ? s : (n = i,
            (o = new Date).setDate(o.getDate() + n),
            o) : new Date(i.getTime());
            return (a = a && "Invalid Date" === a.toString() ? s : a) && (a.setHours(0),
            a.setMinutes(0),
            a.setSeconds(0),
            a.setMilliseconds(0)),
            this._daylightSavingAdjust(a)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0),
            t) : null
        },
        _setDate: function(t, e, i) {
            var s = !e
              , n = t.selectedMonth
              , o = t.selectedYear
              , a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(),
            t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(),
            t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(),
            n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t),
            this._adjustInstDate(t),
            t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths")
              , s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(s, -i, "M")
                    },
                    next: function() {
                        t.datepicker._adjustDate(s, +i, "M")
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker()
                    },
                    today: function() {
                        t.datepicker._gotoToday(s)
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(s, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(s, this, "Y"),
                        !1
                    }
                };
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, v, _, b, y, w, k, x, D, C, I, P, M, T, S, z, A, H, E, W, N, O, F, R, Y = new Date, L = this._daylightSavingAdjust(new Date(Y.getFullYear(),Y.getMonth(),Y.getDate())), j = this._get(t, "isRTL"), B = this._get(t, "showButtonPanel"), K = this._get(t, "hideIfNoPrevNext"), U = this._get(t, "navigationAsDateFormat"), q = this._getNumberOfMonths(t), V = this._get(t, "showCurrentAtPos"), Q = this._get(t, "stepMonths"), X = 1 !== q[0] || 1 !== q[1], $ = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear,t.currentMonth,t.currentDay) : new Date(9999,9,9)), G = this._getMinMaxDate(t, "min"), Z = this._getMinMaxDate(t, "max"), J = t.drawMonth - V, tt = t.drawYear;
            if (J < 0 && (J += 12,
            tt--),
            Z)
                for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(),Z.getMonth() - q[0] * q[1] + 1,Z.getDate())),
                e = G && e < G ? G : e; this._daylightSavingAdjust(new Date(tt,J,1)) > e; )
                    --J < 0 && (J = 11,
                    tt--);
            for (t.drawMonth = J,
            t.drawYear = tt,
            i = this._get(t, "prevText"),
            i = U ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt,J - Q,1)), this._getFormatConfig(t)) : i,
            s = this._canAdjustMonth(t, -1, tt, J) ? "<a href='#1" + t.id + "' class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + t.drawYear + "년 " + (t.drawMonth + 1) + "월 " + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + tt + "년 " + (t.drawMonth + 1) + "월 " + i + "</span></a>" : K ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + t.drawYear + "년 " + (t.drawMonth + 1) + "월 " + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + t.drawYear + "년 " + (t.drawMonth + 1) + "월 " + i + "</span></a>",
            n = this._get(t, "nextText"),
            n = U ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt,J + Q,1)), this._getFormatConfig(t)) : n,
            o = this._canAdjustMonth(t, 1, tt, J) ? "<a href='#1" + t.id + "' class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + t.drawYear + "년 " + (t.drawMonth + 1) + "월 " + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + t.drawYear + "년 " + (t.drawMonth + 1) + "월 " + n + "</span></a>" : K ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + t.drawYear + "년 " + (t.drawMonth + 1) + "월 " + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + t.drawYear + "년 " + (t.drawMonth + 1) + "월 " + n + "</span></a>",
            a = this._get(t, "currentText"),
            r = this._get(t, "gotoCurrent") && t.currentDay ? $ : L,
            a = U ? this.formatDate(a, r, this._getFormatConfig(t)) : a,
            h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>",
            l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (j ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (j ? "" : h) + "</div>" : "",
            c = parseInt(this._get(t, "firstDay"), 10),
            c = isNaN(c) ? 0 : c,
            u = this._get(t, "showWeek"),
            d = this._get(t, "dayNames"),
            p = this._get(t, "dayNamesMin"),
            f = this._get(t, "monthNames"),
            g = this._get(t, "monthNamesShort"),
            m = this._get(t, "beforeShowDay"),
            v = this._get(t, "showOtherMonths"),
            _ = this._get(t, "selectOtherMonths"),
            b = this._getDefaultDate(t),
            y = "",
            k = 0; k < q[0]; k++) {
                for (x = "",
                this.maxRows = 4,
                D = 0; D < q[1]; D++) {
                    if (C = this._daylightSavingAdjust(new Date(tt,J,t.selectedDay)),
                    I = " ui-corner-all",
                    P = "",
                    X) {
                        if (P += "<div class='ui-datepicker-group",
                        q[1] > 1)
                            switch (D) {
                            case 0:
                                P += " ui-datepicker-group-first",
                                I = " ui-corner-" + (j ? "right" : "left");
                                break;
                            case q[1] - 1:
                                P += " ui-datepicker-group-last",
                                I = " ui-corner-" + (j ? "left" : "right");
                                break;
                            default:
                                P += " ui-datepicker-group-middle",
                                I = ""
                            }
                        P += "'>"
                    }
                    for (P += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? j ? o : s : "") + (/all|right/.test(I) && 0 === k ? j ? s : o : "") + this._generateMonthYearHeader(t, J, tt, G, Z, k > 0 || D > 0, f, g) + "</div><table class='ui-datepicker-calendar' summary='일, 월, 화, 수, 목, 금, 토 표'><caption>" + tt + "년 " + f[J] + "달력 표</caption><thead><tr>",
                    M = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                    w = 0; w < 7; w++)
                        T = (w + c) % 7,
                        M += "<th" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[T] + "'>" + p[T] + "</span></th>";
                    for (P += M + "</tr></thead><tbody>",
                    S = this._getDaysInMonth(tt, J),
                    tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)),
                    z = (this._getFirstDayOfMonth(tt, J) - c + 7) % 7,
                    A = Math.ceil((z + S) / 7),
                    H = X && this.maxRows > A ? this.maxRows : A,
                    this.maxRows = H,
                    E = this._daylightSavingAdjust(new Date(tt,J,1 - z)),
                    W = 0; W < H; W++) {
                        for (P += "<tr>",
                        N = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(E) + "</td>" : "",
                        w = 0; w < 7; w++)
                            O = m ? m.apply(t.input ? t.input[0] : null, [E]) : [!0, ""],
                            R = (F = E.getMonth() !== J) && !_ || !O[0] || G && E < G || Z && E > Z,
                            N += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (E.getTime() === C.getTime() && J === t.selectedMonth && t._keyEvent || b.getTime() === E.getTime() && b.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !v ? "" : " " + O[1] + (E.getTime() === $.getTime() ? " " + this._currentClass : "") + (E.getTime() === L.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + E.getMonth() + "' data-year='" + E.getFullYear() + "'") + ">" + (F && !v ? "&#xa0;" : R ? "<span class='ui-state-default'>" + E.getDate() + "</span>" : "<a title='날짜 선택 후 달력 선택 화면 닫기' onclick='datepickerValue(\"" + E.getFullYear() + "-" + (E.getMonth() + 1) + "-" + E.getDate() + "\");' class='ui-state-default" + (E.getTime() === L.getTime() ? " ui-state-highlight" : "") + (E.getTime() === $.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + E.getDate() + "</a>") + "</td>",
                            E.setDate(E.getDate() + 1),
                            E = this._daylightSavingAdjust(E);
                        P += N + "</tr>"
                    }
                    ++J > 11 && (J = 0,
                    tt++),
                    x += P += "</tbody></table><p class='ui-datepicker-btn'><a href='#this' onclick='datepickerClose();' class='btn_close' title='달력 선택 화면 닫기'>닫기</a></p>" + (X ? "</div>" + (q[0] > 0 && D === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                y += x
            }
            return y += l,
            t._keyEvent = !1,
            y
        },
        _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
            var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), _ = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
            if (o || !m)
                y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
            else {
                for (h = s && s.getFullYear() === i,
                l = n && n.getFullYear() === i,
                y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                c = 0; c < 12; c++)
                    (!h || c >= s.getMonth()) && (!l || c <= n.getMonth()) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                y += "</select>"
            }
            if (_ || (b += y + (!o && m && v ? "" : "&#xa0;")),
            !t.yearshtml)
                if (t.yearshtml = "",
                o || !v)
                    b += "<span class='ui-datepicker-year'>" + i + "년</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"),
                    d = (new Date).getFullYear(),
                    f = (p = function(t) {
                        var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                        return isNaN(e) ? d : e
                    }
                    )(u[0]),
                    g = Math.max(f, p(u[1] || "")),
                    f = s ? Math.max(f, s.getFullYear()) : f,
                    g = n ? Math.min(g, n.getFullYear()) : g,
                    t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++)
                        t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>",
                    b += t.yearshtml,
                    t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"),
            _ && (b += (!o && m && v ? "" : "&#xa0;") + y),
            b += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.drawYear + ("Y" === i ? e : 0)
              , n = t.drawMonth + ("M" === i ? e : 0)
              , o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0)
              , a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s,n,o)));
            t.selectedDay = a.getDate(),
            t.drawMonth = t.selectedMonth = a.getMonth(),
            t.drawYear = t.selectedYear = a.getFullYear(),
            "M" !== i && "Y" !== i || this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min")
              , s = this._getMinMaxDate(t, "max")
              , n = i && e < i ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t,e,32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t,e,1).getDay()
        },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t)
              , o = this._daylightSavingAdjust(new Date(i,s + (e < 0 ? e : n[0] * n[1]),1));
            return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
            this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), a = null, r = null, h = this._get(t, "yearRange");
            return h && (i = h.split(":"),
            s = (new Date).getFullYear(),
            a = parseInt(i[0], 10),
            r = parseInt(i[1], 10),
            i[0].match(/[+\-].*/) && (a += s),
            i[1].match(/[+\-].*/) && (r += s)),
            (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r)
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return {
                shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, s) {
            e || (t.currentDay = t.selectedDay,
            t.currentMonth = t.selectedMonth,
            t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s,i,e)) : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }),
    t.fn.datepicker = function(e) {
        if (!this.length)
            return this;
        t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick),
        t.datepicker.initialized = !0),
        0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }
    ,
    t.datepicker = new n,
    t.datepicker.initialized = !1,
    t.datepicker.uuid = (new Date).getTime(),
    t.datepicker.version = "1.10.3"
}(jQuery),
function(t, e) {
    var i = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }
      , s = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
    };
    t.widget("ui.dialog", {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    i < 0 && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            },
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            },
            this.originalTitle = this.element.attr("title"),
            this.options.title = this.options.title || this.originalTitle,
            this._createWrapper(),
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),
            this._createTitlebar(),
            this._createButtonPane(),
            this.options.draggable && t.fn.draggable && this._makeDraggable(),
            this.options.resizable && t.fn.resizable && this._makeResizable(),
            this._isOpen = !1
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._destroyOverlay(),
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),
            this.uiDialog.stop(!0, !0).remove(),
            this.originalTitle && this.element.attr("title", this.originalTitle),
            (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1,
            this._destroyOverlay(),
            this.opener.filter(":focusable").focus().length || t(this.document[0].activeElement).blur(),
            this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", e)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, e) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !e && this._trigger("focus", t),
            i
        },
        open: function() {
            var e = this;
            this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0,
            this.opener = t(this.document[0].activeElement),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this._show(this.uiDialog, this.options.show, function() {
                e._focusTabbable(),
                e._trigger("focus")
            }),
            this._trigger("open"))
        },
        _focusTabbable: function() {
            var t = this.element.find("[autofocus]");
            t.length || (t = this.element.find(":tabbable")),
            t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
            t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
            t.length || (t = this.uiDialog),
            t.eq(0).focus()
        },
        _keepFocus: function(e) {
            function i() {
                var e = this.document[0].activeElement;
                this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
            }
            e.preventDefault(),
            i.call(this),
            this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()),
            this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE)
                        return e.preventDefault(),
                        void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable")
                          , s = i.filter(":first")
                          , n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (n.focus(1),
                        e.preventDefault()) : (s.focus(1),
                        e.preventDefault())
                    }
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }),
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),
            this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }),
            this.uiDialogTitlebarClose = t("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),
            this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(),
                    this.close(t)
                }
            }),
            e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),
            this._title(e),
            this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            })
        },
        _title: function(t) {
            this.options.title || t.html("&#160;"),
            t.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
            this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),
            this._createButtons()
        },
        _createButtons: function() {
            var e = this
              , i = this.options.buttons;
            this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            t.isEmptyObject(i) || t.isArray(i) && !i.length ? this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i, function(i, s) {
                var n, o;
                s = t.isFunction(s) ? {
                    click: s,
                    text: i
                } : s,
                s = t.extend({
                    type: "button"
                }, s),
                n = s.click,
                s.click = function() {
                    n.apply(e.element[0], arguments)
                }
                ,
                o = {
                    icons: s.icons,
                    text: s.showText
                },
                delete s.icons,
                delete s.showText,
                t("<button></button>", s).button(o).appendTo(e.uiButtonSet)
            }),
            this.uiDialog.addClass("ui-dialog-buttons"),
            this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            var e = this
              , i = this.options;
            function s(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(i, n) {
                    t(this).addClass("ui-dialog-dragging"),
                    e._blockFrames(),
                    e._trigger("dragStart", i, s(n))
                },
                drag: function(t, i) {
                    e._trigger("drag", t, s(i))
                },
                stop: function(n, o) {
                    i.position = [o.position.left - e.document.scrollLeft(), o.position.top - e.document.scrollTop()],
                    t(this).removeClass("ui-dialog-dragging"),
                    e._unblockFrames(),
                    e._trigger("dragStop", n, s(o))
                }
            })
        },
        _makeResizable: function() {
            var e = this
              , i = this.options
              , s = i.resizable
              , n = this.uiDialog.css("position")
              , o = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
            function a(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function(i, s) {
                    t(this).addClass("ui-dialog-resizing"),
                    e._blockFrames(),
                    e._trigger("resizeStart", i, a(s))
                },
                resize: function(t, i) {
                    e._trigger("resize", t, a(i))
                },
                stop: function(s, n) {
                    i.height = t(this).height(),
                    i.width = t(this).width(),
                    t(this).removeClass("ui-dialog-resizing"),
                    e._unblockFrames(),
                    e._trigger("resizeStop", s, a(n))
                }
            }).css("position", n)
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(),
            this.uiDialog.position(this.options.position),
            t || this.uiDialog.hide()
        },
        _setOptions: function(e) {
            var n = this
              , o = !1
              , a = {};
            t.each(e, function(t, e) {
                n._setOption(t, e),
                t in i && (o = !0),
                t in s && (a[t] = e)
            }),
            o && (this._size(),
            this._position()),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", a)
        },
        _setOption: function(t, e) {
            var i, s, n = this.uiDialog;
            "dialogClass" === t && n.removeClass(this.options.dialogClass).addClass(e),
            "disabled" !== t && (this._super(t, e),
            "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
            "buttons" === t && this._createButtons(),
            "closeText" === t && this.uiDialogTitlebarClose.button({
                label: "" + e
            }),
            "draggable" === t && ((i = n.is(":data(ui-draggable)")) && !e && n.draggable("destroy"),
            !i && e && this._makeDraggable()),
            "position" === t && this._position(),
            "resizable" === t && ((s = n.is(":data(ui-resizable)")) && !e && n.resizable("destroy"),
            s && "string" == typeof e && n.resizable("option", "handles", e),
            s || !1 === e || this._makeResizable()),
            "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, e, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }),
            s.minWidth > s.width && (s.width = s.minWidth),
            t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(),
            e = Math.max(0, s.minHeight - t),
            i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none",
            "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _allowInteraction: function(e) {
            return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = this
                  , i = this.widgetFullName;
                t.ui.dialog.overlayInstances || this._delay(function() {
                    t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(s) {
                        e._allowInteraction(s) || (s.preventDefault(),
                        t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                }),
                this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }),
                t.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function() {
            this.options.modal && this.overlay && (t.ui.dialog.overlayInstances--,
            t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"),
            this.overlay.remove(),
            this.overlay = null)
        }
    }),
    t.ui.dialog.overlayInstances = 0,
    !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
        _position: function() {
            var e, i = this.options.position, s = [], n = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0"in i) && (1 === (s = i.split ? i.split(" ") : [i[0], i[1]]).length && (s[1] = s[0]),
            t.each(["left", "top"], function(t, e) {
                +s[t] === s[t] && (n[t] = s[t],
                s[t] = e)
            }),
            i = {
                my: s[0] + (n[0] < 0 ? n[0] : "+" + n[0]) + " " + s[1] + (n[1] < 0 ? n[1] : "+" + n[1]),
                at: s.join(" ")
            }),
            i = t.extend({}, t.ui.dialog.prototype.options.position, i)) : i = t.ui.dialog.prototype.options.position,
            (e = this.uiDialog.is(":visible")) || this.uiDialog.show(),
            this.uiDialog.position(i),
            e || this.uiDialog.hide()
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.menu", {
        version: "1.10.3",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.mouseHandled = !1,
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function(t) {
                this.options.disabled && t.preventDefault()
            }, this)),
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
            this._on({
                "mousedown .ui-menu-item > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-state-disabled > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0,
                    this.select(e),
                    i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]),
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"),
                    this.focus(e, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e),
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }),
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(e) {
            var i, s, n, o, a, r = !0;
            function h(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case t.ui.keyCode.UP:
                this.previous(e);
                break;
            case t.ui.keyCode.DOWN:
                this.next(e);
                break;
            case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                r = !1,
                s = this.previousFilter || "",
                n = String.fromCharCode(e.keyCode),
                o = !1,
                clearTimeout(this.filterTimer),
                n === s ? o = !0 : n = s + n,
                a = new RegExp("^" + h(n),"i"),
                i = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return a.test(t(this).children("a").text())
                }),
                (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (n = String.fromCharCode(e.keyCode),
                a = new RegExp("^" + h(n),"i"),
                i = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return a.test(t(this).children("a").text())
                })),
                i.length ? (this.focus(e, i),
                i.length > 1 ? (this.previousFilter = n,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            r && e.preventDefault()
        },
        _activate: function(t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e, i = this.options.icons.submenu, s = this.element.find(this.options.menus);
            s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this)
                  , s = e.prev("a")
                  , n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(n),
                e.attr("aria-labelledby", s.attr("id"))
            }),
            (e = s.add(this.element)).children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            e.children(":not(.ui-menu-item)").each(function() {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }),
            e.children(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),
            this._super(t, e)
        },
        focus: function(t, e) {
            var i, s;
            this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            this.active = e.first(),
            s = this.active.children("a").addClass("ui-state-focus"),
            this.options.role && this.element.attr("aria-activedescendant", s.attr("id")),
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),
            t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay),
            (i = e.children(".ui-menu")).length && /^mouse/.test(t.type) && this._startOpening(i),
            this.activeMenu = e.parent(),
            this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i, s, n, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0,
            s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0,
            n = e.offset().top - this.activeMenu.offset().top - i - s,
            o = this.activeMenu.scrollTop(),
            a = this.activeMenu.height(),
            r = e.height(),
            n < 0 ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer),
            this.active && (this.active.children("a").removeClass("ui-state-focus"),
            this.active = null,
            this._trigger("blur", t, {
                item: this.active
            }))
        },
        _startOpening: function(t) {
            clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(),
                this._open(t)
            }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element),
                this._close(s),
                this.blur(e),
                this.activeMenu = s
            }, this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element),
            t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(),
            this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()),
            this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
            s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()),
            this.focus(i, s)
        },
        nextPage: function(e) {
            var i, s, n;
            this.active ? this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top,
            n = this.element.height(),
            this.active.nextAll(".ui-menu-item").each(function() {
                return (i = t(this)).offset().top - s - n < 0
            }),
            this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())) : this.next(e)
        },
        previousPage: function(e) {
            var i, s, n;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top,
            n = this.element.height(),
            this.active.prevAll(".ui-menu-item").each(function() {
                return (i = t(this)).offset().top - s + n > 0
            }),
            this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())) : this.next(e)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, i)
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.progressbar", {
        version: "1.10.3",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(),
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }),
            this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
            this.valueDiv.remove()
        },
        value: function(t) {
            if (void 0 === t)
                return this.options.value;
            this.options.value = this._constrainedValue(t),
            this._refreshValue()
        },
        _constrainedValue: function(t) {
            return void 0 === t && (t = this.options.value),
            this.indeterminate = !1 === t,
            "number" != typeof t && (t = 0),
            !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value,
            this._super(t),
            this.options.value = this._constrainedValue(e),
            this._refreshValue()
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)),
            this._super(t, e)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var e = this.options.value
              , i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"),
            this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate),
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
            this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }),
            this.overlayDiv && (this.overlayDiv.remove(),
            this.overlayDiv = null)),
            this.oldValue !== e && (this.oldValue = e,
            this._trigger("change")),
            e === this.options.max && this._trigger("complete")
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"),
            this._refresh(),
            this._setOption("disabled", this.options.disabled),
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function() {
            var e, i, s = this.options, n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), o = [];
            for (i = s.values && s.values.length || 1,
            n.length > i && (n.slice(i).remove(),
            n = n.slice(0, i)),
            e = n.length; e < i; e++)
                o.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
            this.handles = n.add(t(o.join("")).appendTo(this.element)),
            this.handle = this.handles.eq(0),
            this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function() {
            var e = this.options
              , i = "";
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element),
            i = "ui-slider-range ui-widget-header ui-corner-all"),
            this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : this.range = t([])
        },
        _setupEvents: function() {
            var t = this.handles.add(this.range).filter("a");
            this._off(t),
            this._on(t, this._handleEvents),
            this._hoverable(t),
            this._focusable(t)
        },
        _destroy: function() {
            this.handles.remove(),
            this.range.remove(),
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
            this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, s, n, o, a, r, h, l = this, c = this.options;
            return !c.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            i = {
                x: e.pageX,
                y: e.pageY
            },
            s = this._normValueFromMouse(i),
            n = this._valueMax() - this._valueMin() + 1,
            this.handles.each(function(e) {
                var i = Math.abs(s - l.values(e));
                (n > i || n === i && (e === l._lastChangedValue || l.values(e) === c.min)) && (n = i,
                o = t(this),
                a = e)
            }),
            !1 !== this._start(e, a) && (this._mouseSliding = !0,
            this._handleIndex = a,
            o.addClass("ui-state-active").focus(),
            r = o.offset(),
            h = !t(e.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - r.left - o.width() / 2,
                top: e.pageY - r.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(e, a, s),
            this._animateOff = !0,
            !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }
              , i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i),
            !1
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width,
            i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height,
            i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            (s = i / e) > 1 && (s = 1),
            s < 0 && (s = 0),
            "vertical" === this.orientation && (s = 1 - s),
            n = this._valueMax() - this._valueMin(),
            o = this._valueMin() + s * n,
            this._trimAlignValue(o)
        },
        _start: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e),
            i.values = this.values()),
            this._trigger("start", t, i)
        },
        _slide: function(t, e, i) {
            var s, n, o;
            this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1),
            2 === this.options.values.length && !0 === this.options.range && (0 === e && i > s || 1 === e && i < s) && (i = s),
            i !== this.values(e) && ((n = this.values())[e] = i,
            o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: n
            }),
            s = this.values(e ? 0 : 1),
            !1 !== o && this.values(e, i, !0))) : i !== this.value() && !1 !== (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            })) && this.value(i)
        },
        _stop: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e),
            i.values = this.values()),
            this._trigger("stop", t, i)
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e),
                i.values = this.values()),
                this._lastChangedValue = e,
                this._trigger("change", t, i)
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t),
            this._refreshValue(),
            void this._change(null, 0)) : this._value()
        },
        values: function(e, i) {
            var s, n, o;
            if (arguments.length > 1)
                return this.options.values[e] = this._trimAlignValue(i),
                this._refreshValue(),
                void this._change(null, e);
            if (!arguments.length)
                return this._values();
            if (!t.isArray(arguments[0]))
                return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (s = this.options.values,
            n = arguments[0],
            o = 0; o < s.length; o += 1)
                s[o] = this._trimAlignValue(n[o]),
                this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0),
            this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null)),
            t.isArray(this.options.values) && (n = this.options.values.length),
            t.Widget.prototype._setOption.apply(this, arguments),
            e) {
            case "orientation":
                this._detectOrientation(),
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                this._refreshValue();
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                s = 0; s < n; s += 1)
                    this._change(null, s);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0,
                this._refreshValue(),
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length)
                return e = this.options.values[t],
                e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(),
                s = 0; s < i.length; s += 1)
                    i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (t <= this._valueMin())
                return this._valueMin();
            if (t >= this._valueMax())
                return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1
              , i = (t - this._valueMin()) % e
              , s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
            parseFloat(s.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var e, i, s, n, o, a = this.options.range, r = this.options, h = this, l = !this._animateOff && r.animate, c = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) {
                i = (h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin()) * 100,
                c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%",
                t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate),
                !0 === h.options.range && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate),
                1 === s && h.range[l ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate),
                1 === s && h.range[l ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))),
                e = i
            }) : (s = this.value(),
            n = this._valueMin(),
            o = this._valueMax(),
            i = o !== n ? (s - n) / (o - n) * 100 : 0,
            c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%",
            this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate),
            "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: i + "%"
            }, r.animate),
            "max" === a && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }),
            "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: i + "%"
            }, r.animate),
            "max" === a && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function(e) {
                var i, s, n, o = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_UP:
                case t.ui.keyCode.PAGE_DOWN:
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (e.preventDefault(),
                    !this._keySliding && (this._keySliding = !0,
                    t(e.target).addClass("ui-state-active"),
                    !1 === this._start(e, o)))
                        return
                }
                switch (n = this.options.step,
                i = s = this.options.values && this.options.values.length ? this.values(o) : this.value(),
                e.keyCode) {
                case t.ui.keyCode.HOME:
                    s = this._valueMin();
                    break;
                case t.ui.keyCode.END:
                    s = this._valueMax();
                    break;
                case t.ui.keyCode.PAGE_UP:
                    s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / 5);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / 5);
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                    if (i === this._valueMax())
                        return;
                    s = this._trimAlignValue(i + n);
                    break;
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (i === this._valueMin())
                        return;
                    s = this._trimAlignValue(i - n)
                }
                this._slide(e, o, s)
            },
            click: function(t) {
                t.preventDefault()
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(e, i),
                this._change(e, i),
                t(e.target).removeClass("ui-state-active"))
            }
        }
    })
}(jQuery),
function(t) {
    function e(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments),
            this._refresh(),
            e !== this.element.val() && this._trigger("change")
        }
    }
    t.widget("ui.spinner", {
        version: "1.10.3",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max),
            this._setOption("min", this.options.min),
            this._setOption("step", this.options.step),
            this._value(this.element.val(), !0),
            this._draw(),
            this._on(this._events),
            this._refresh(),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var e = {}
              , i = this.element;
            return t.each(["min", "max", "step"], function(t, s) {
                var n = i.attr(s);
                void 0 !== n && n.length && (e[s] = n)
            }),
            e
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(t) {
                this.cancelBlur ? delete this.cancelBlur : (this._stop(),
                this._refresh(),
                this.previous !== this.element.val() && this._trigger("change", t))
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t))
                        return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t),
                    clearTimeout(this.mousewheelTimer),
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t)
                    }, 100),
                    t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                var i;
                function s() {
                    this.element[0] === this.document[0].activeElement || (this.element.focus(),
                    this.previous = i,
                    this._delay(function() {
                        this.previous = i
                    }))
                }
                i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(),
                e.preventDefault(),
                s.call(this),
                this.cancelBlur = !0,
                this._delay(function() {
                    delete this.cancelBlur,
                    s.call(this)
                }),
                !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) {
                if (t(e.currentTarget).hasClass("ui-state-active"))
                    return !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"),
            this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"),
            this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()),
            this.options.disabled && this.disable()
        },
        _keydown: function(e) {
            var i = this.options
              , s = t.ui.keyCode;
            switch (e.keyCode) {
            case s.UP:
                return this._repeat(null, 1, e),
                !0;
            case s.DOWN:
                return this._repeat(null, -1, e),
                !0;
            case s.PAGE_UP:
                return this._repeat(null, i.page, e),
                !0;
            case s.PAGE_DOWN:
                return this._repeat(null, -i.page, e),
                !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function(t) {
            return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1),
            this.spinning = !0,
            !0)
        },
        _repeat: function(t, e, i) {
            t = t || 500,
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                this._repeat(40, e, i)
            }, t),
            this._spin(e * this.options.step, i)
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1),
            i = this._adjustValue(i + t * this._increment(this.counter)),
            this.spinning && !1 === this._trigger("spin", e, {
                value: i
            }) || (this._value(i),
            this.counter++)
        },
        _increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
            t
        },
        _precisionOf: function(t) {
            var e = t.toString()
              , i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) {
            var e, i, s = this.options;
            return i = t - (e = null !== s.min ? s.min : 0),
            t = e + (i = Math.round(i / s.step) * s.step),
            t = parseFloat(t.toFixed(this._precision())),
            null !== s.max && t > s.max ? s.max : null !== s.min && t < s.min ? s.min : t
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer),
            clearTimeout(this.mousewheelTimer),
            this.counter = 0,
            this.spinning = !1,
            this._trigger("stop", t))
        },
        _setOption: function(t, e) {
            if ("culture" === t || "numberFormat" === t) {
                var i = this._parse(this.element.val());
                return this.options[t] = e,
                void this.element.val(this._format(i))
            }
            "max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)),
            "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),
            this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),
            this._super(t, e),
            "disabled" === t && (e ? (this.element.prop("disabled", !0),
            this.buttons.button("disable")) : (this.element.prop("disabled", !1),
            this.buttons.button("enable")))
        },
        _setOptions: e(function(t) {
            this._super(t),
            this._value(this.element.val())
        }),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
            "" === t || isNaN(t) ? null : t
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(t, e) {
            var i;
            "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)),
            t = this._format(i)),
            this.element.val(t),
            this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function(t) {
            this._stepUp(t)
        }),
        _stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step),
            this._stop())
        },
        stepDown: e(function(t) {
            this._stepDown(t)
        }),
        _stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step),
            this._stop())
        },
        pageUp: e(function(t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function(t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function(t) {
            if (!arguments.length)
                return this._parse(this.element.val());
            e(this._value).call(this, t)
        },
        widget: function() {
            return this.uiSpinner
        }
    })
}(jQuery),
function(t, e) {
    var i = 0
      , s = /#.*$/;
    function n(t) {
        return t.hash.length > 1 && decodeURIComponent(t.href.replace(s, "")) === decodeURIComponent(location.href.replace(s, ""))
    }
    t.widget("ui.tabs", {
        version: "1.10.3",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var e = this
              , i = this.options;
            this.running = !1,
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }),
            this._processTabs(),
            i.active = this._initialActive(),
            t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()),
            !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(),
            this._refresh(),
            this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var e = this.options.active
              , i = this.options.collapsible
              , s = location.hash.substring(1);
            return null === e && (s && this.tabs.each(function(i, n) {
                if (t(n).attr("aria-controls") === s)
                    return e = i,
                    !1
            }),
            null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            null !== e && -1 !== e || (e = !!this.tabs.length && 0)),
            !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0),
            !i && !1 === e && this.anchors.length && (e = 0),
            e
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function(e) {
            var i = t(this.document[0].activeElement).closest("li")
              , s = this.tabs.index(i)
              , n = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                    s++;
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.LEFT:
                    n = !1,
                    s--;
                    break;
                case t.ui.keyCode.END:
                    s = this.anchors.length - 1;
                    break;
                case t.ui.keyCode.HOME:
                    s = 0;
                    break;
                case t.ui.keyCode.SPACE:
                    return e.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(s);
                case t.ui.keyCode.ENTER:
                    return e.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(s !== this.options.active && s);
                default:
                    return
                }
                e.preventDefault(),
                clearTimeout(this.activating),
                s = this._focusNextTab(s, n),
                e.ctrlKey || (i.attr("aria-selected", "false"),
                this.tabs.eq(s).attr("aria-selected", "true"),
                this.activating = this._delay(function() {
                    this.option("active", s)
                }, this.delay))
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(),
            this.active.focus())
        },
        _handlePageNav: function(e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0) : void 0
        },
        _findNextTab: function(e, i) {
            var s = this.tabs.length - 1;
            for (; -1 !== t.inArray((e > s && (e = 0),
            e < 0 && (e = s),
            e), this.options.disabled); )
                e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e),
            this.tabs.eq(t).focus(),
            t
        },
        _setOption: function(t, e) {
            "active" !== t ? "disabled" !== t ? (this._super(t, e),
            "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e),
            e || !1 !== this.options.active || this._activate(0)),
            "event" === t && this._setupEvents(e),
            "heightStyle" === t && this._setupHeightStyle(e)) : this._setupDisabled(e) : this._activate(e)
        },
        _tabId: function(t) {
            return t.attr("aria-controls") || "ui-tabs-" + ++i
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var e = this.options
              , i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t)
            }),
            this._processTabs(),
            !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1,
            this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1,
            this.active = t()),
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }),
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }),
            this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"),
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }),
            this.anchors = this.tabs.map(function() {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }),
            this.panels = t(),
            this.anchors.each(function(i, s) {
                var o, a, r, h = t(s).uniqueId().attr("id"), l = t(s).closest("li"), c = l.attr("aria-controls");
                n(s) ? (o = s.hash,
                a = e.element.find(e._sanitizeSelector(o))) : (o = "#" + (r = e._tabId(l)),
                (a = e.element.find(o)).length || (a = e._createPanel(r)).insertAfter(e.panels[i - 1] || e.tablist),
                a.attr("aria-live", "polite")),
                a.length && (e.panels = e.panels.add(a)),
                c && l.data("ui-tabs-aria-controls", c),
                l.attr({
                    "aria-controls": o.substring(1),
                    "aria-labelledby": h
                }),
                a.attr("aria-labelledby", h)
            }),
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, s = 0; i = this.tabs[s]; s++)
                !0 === e || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },
        _setupEvents: function(e) {
            var i = {
                click: function(t) {
                    t.preventDefault()
                }
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(this.anchors, i),
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }),
            this._on(this.panels, {
                keydown: "_panelKeydown"
            }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(),
            i -= this.element.outerHeight() - this.element.height(),
            this.element.siblings(":visible").each(function() {
                var e = t(this)
                  , s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }),
            this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0)
            }),
            this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0,
            this.panels.each(function() {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options
              , s = this.active
              , n = t(e.currentTarget).closest("li")
              , o = n[0] === s[0]
              , a = o && i.collapsible
              , r = a ? t() : this._getPanelForTab(n)
              , h = s.length ? this._getPanelForTab(s) : t()
              , l = {
                oldTab: s,
                oldPanel: h,
                newTab: a ? t() : n,
                newPanel: r
            };
            e.preventDefault(),
            n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, l) || (i.active = !a && this.tabs.index(n),
            this.active = o ? t() : n,
            this.xhr && this.xhr.abort(),
            h.length || r.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."),
            r.length && this.load(this.tabs.index(n), e),
            this._toggle(e, l))
        },
        _toggle: function(e, i) {
            var s = this
              , n = i.newPanel
              , o = i.oldPanel;
            function a() {
                s.running = !1,
                s._trigger("activate", e, i)
            }
            function r() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
                n.length && s.options.show ? s._show(n, s.options.show, a) : (n.show(),
                a())
            }
            this.running = !0,
            o.length && this.options.hide ? this._hide(o, this.options.hide, function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                r()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
            o.hide(),
            r()),
            o.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            i.oldTab.attr("aria-selected", "false"),
            n.length && o.length ? i.oldTab.attr("tabIndex", -1) : n.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1),
            n.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }),
            i.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active),
            i = s.find(".ui-tabs-anchor")[0],
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return !1 === e ? t() : this.tabs.eq(e)
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))),
            t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(),
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),
            this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }),
            this.tabs.each(function() {
                var e = t(this)
                  , i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }),
            this.panels.show(),
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(e) {
            var i = this.options.disabled;
            !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e),
            i = t.isArray(i) ? t.map(i, function(t) {
                return t !== e ? t : null
            }) : t.map(this.tabs, function(t, i) {
                return i !== e ? i : null
            })),
            this._setupDisabled(i))
        },
        disable: function(e) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === e)
                    i = !0;
                else {
                    if (e = this._getIndex(e),
                    -1 !== t.inArray(e, i))
                        return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setupDisabled(i)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var s = this
              , o = this.tabs.eq(e)
              , a = o.find(".ui-tabs-anchor")
              , r = this._getPanelForTab(o)
              , h = {
                tab: o,
                panel: r
            };
            n(a[0]) || (this.xhr = t.ajax(this._ajaxSettings(a, i, h)),
            this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"),
            r.attr("aria-busy", "true"),
            this.xhr.success(function(t) {
                setTimeout(function() {
                    r.html(t),
                    s._trigger("load", i, h)
                }, 1)
            }).complete(function(t, e) {
                setTimeout(function() {
                    "abort" === e && s.panels.stop(!1, !0),
                    o.removeClass("ui-tabs-loading"),
                    r.removeAttr("aria-busy"),
                    t === s.xhr && delete s.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(e, i, s) {
            var n = this;
            return {
                url: e.attr("href"),
                beforeSend: function(e, o) {
                    return n._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, s))
                }
            }
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
}(jQuery),
function(t) {
    var e = 0;
    t.widget("ui.tooltip", {
        version: "1.10.3",
        options: {
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }),
            this.tooltips = {},
            this.parents = {},
            this.options.disabled && this._disable()
        },
        _setOption: function(e, i) {
            var s = this;
            if ("disabled" === e)
                return this[i ? "_disable" : "_enable"](),
                void (this.options[e] = i);
            this._super(e, i),
            "content" === e && t.each(this.tooltips, function(t, e) {
                s._updateContent(e)
            })
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0],
                e.close(n, !0)
            }),
            this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            })
        },
        open: function(e) {
            var i = this
              , s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")),
            s.data("ui-tooltip-open", !0),
            e && "mouseover" === e.type && s.parents().each(function() {
                var e, s = t(this);
                s.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this,
                i.close(e, !0)),
                s.attr("title") && (s.uniqueId(),
                i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                },
                s.attr("title", ""))
            }),
            this._updateContent(s, e))
        },
        _updateContent: function(t, e) {
            var i, s = this.options.content, n = this, o = e ? e.type : null;
            if ("string" == typeof s)
                return this._open(e, t, s);
            (i = s.call(t[0], function(i) {
                t.data("ui-tooltip-open") && n._delay(function() {
                    e && (e.type = o),
                    this._open(e, t, i)
                })
            })) && this._open(e, t, i)
        },
        _open: function(e, i, s) {
            var n, o, a, r, h, l, c = t.extend({}, this.options.position);
            s && ((n = this._find(i)).length ? n.find(".ui-tooltip-content").html(s) : (i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")),
            n = this._tooltip(i),
            r = i,
            h = n.attr("id"),
            (l = (r.attr("aria-describedby") || "").split(/\s+/)).push(h),
            r.data("ui-tooltip-id", h).attr("aria-describedby", t.trim(l.join(" "))),
            n.find(".ui-tooltip-content").html(s),
            this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                mousemove: u
            }),
            u(e)) : n.position(t.extend({
                of: i
            }, this.options.position)),
            n.hide(),
            this._show(n, this.options.show),
            this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function() {
                n.is(":visible") && (u(c.of),
                clearInterval(a))
            }, t.fx.interval)),
            this._trigger("open", e, {
                tooltip: n
            }),
            o = {
                keyup: function(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var s = t.Event(e);
                        s.currentTarget = i[0],
                        this.close(s, !0)
                    }
                },
                remove: function() {
                    this._removeTooltip(n)
                }
            },
            e && "mouseover" !== e.type || (o.mouseleave = "close"),
            e && "focusin" !== e.type || (o.focusout = "close"),
            this._on(!0, i, o)));
            function u(t) {
                c.of = t,
                n.is(":hidden") || n.position(c)
            }
        },
        close: function(e) {
            var i, s, n, o, a = this, r = t(e ? e.currentTarget : this.element), h = this._find(r);
            this.closing || (clearInterval(this.delayedShow),
            r.data("ui-tooltip-title") && r.attr("title", r.data("ui-tooltip-title")),
            s = (i = r).data("ui-tooltip-id"),
            n = (i.attr("aria-describedby") || "").split(/\s+/),
            -1 !== (o = t.inArray(s, n)) && n.splice(o, 1),
            i.removeData("ui-tooltip-id"),
            (n = t.trim(n.join(" "))) ? i.attr("aria-describedby", n) : i.removeAttr("aria-describedby"),
            h.stop(!0),
            this._hide(h, this.options.hide, function() {
                a._removeTooltip(t(this))
            }),
            r.removeData("ui-tooltip-open"),
            this._off(r, "mouseleave focusout keyup"),
            r[0] !== this.element[0] && this._off(r, "remove"),
            this._off(this.document, "mousemove"),
            e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title),
                delete a.parents[e]
            }),
            this.closing = !0,
            this._trigger("close", e, {
                tooltip: h
            }),
            this.closing = !1)
        },
        _tooltip: function(i) {
            var s = "ui-tooltip-" + e++
              , n = t("<div>").attr({
                id: s,
                role: "tooltip"
            }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return t("<div>").addClass("ui-tooltip-content").appendTo(n),
            n.appendTo(this.document[0].body),
            this.tooltips[s] = i,
            n
        },
        _find: function(e) {
            var i = e.data("ui-tooltip-id");
            return i ? t("#" + i) : t()
        },
        _removeTooltip: function(t) {
            t.remove(),
            delete this.tooltips[t.attr("id")]
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0],
                e.close(n, !0),
                t("#" + i).remove(),
                s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")),
                s.removeData("ui-tooltip-title"))
            })
        }
    })
}(jQuery),
function(t, e) {
    var i, s = "ui-effects-";
    t.effects = {
        effect: {}
    },
    function(t, e) {
        var i, s = /^([\-+])=\s*(\d+\.?\d*)/, n = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
        }], o = t.Color = function(e, i, s, n) {
            return new t.Color.fn.parse(e,i,s,n)
        }
        , a = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, r = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, h = o.support = {}, l = t("<p>")[0], c = t.each;
        function u(t, e, i) {
            var s = r[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t),
            isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : s.max < t ? s.max : t)
        }
        function d(e) {
            var s = o()
              , r = s._rgba = [];
            return e = e.toLowerCase(),
            c(n, function(t, i) {
                var n, o = i.re.exec(e), h = o && i.parse(o), l = i.space || "rgba";
                if (h)
                    return n = s[l](h),
                    s[a[l].cache] = n[a[l].cache],
                    r = s._rgba = n._rgba,
                    !1
            }),
            r.length ? ("0,0,0,0" === r.join() && t.extend(r, i.transparent),
            s) : i[e]
        }
        function p(t, e, i) {
            return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        l.style.cssText = "background-color:rgba(1,1,1,.5)",
        h.rgba = l.style.backgroundColor.indexOf("rgba") > -1,
        c(a, function(t, e) {
            e.cache = "_" + t,
            e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        o.fn = t.extend(o.prototype, {
            parse: function(s, n, r, h) {
                if (s === e)
                    return this._rgba = [null, null, null, null],
                    this;
                (s.jquery || s.nodeType) && (s = t(s).css(n),
                n = e);
                var l = this
                  , p = t.type(s)
                  , f = this._rgba = [];
                return n !== e && (s = [s, n, r, h],
                p = "array"),
                "string" === p ? this.parse(d(s) || i._default) : "array" === p ? (c(a.rgba.props, function(t, e) {
                    f[e.idx] = u(s[e.idx], e)
                }),
                this) : "object" === p ? (c(a, s instanceof o ? function(t, e) {
                    s[e.cache] && (l[e.cache] = s[e.cache].slice())
                }
                : function(e, i) {
                    var n = i.cache;
                    c(i.props, function(t, e) {
                        if (!l[n] && i.to) {
                            if ("alpha" === t || null == s[t])
                                return;
                            l[n] = i.to(l._rgba)
                        }
                        l[n][e.idx] = u(s[t], e, !0)
                    }),
                    l[n] && t.inArray(null, l[n].slice(0, 3)) < 0 && (l[n][3] = 1,
                    i.from && (l._rgba = i.from(l[n])))
                }
                ),
                this) : void 0
            },
            is: function(t) {
                var e = o(t)
                  , i = !0
                  , s = this;
                return c(a, function(t, n) {
                    var o, a = e[n.cache];
                    return a && (o = s[n.cache] || n.to && n.to(s._rgba) || [],
                    c(n.props, function(t, e) {
                        if (null != a[e.idx])
                            return i = a[e.idx] === o[e.idx]
                    })),
                    i
                }),
                i
            },
            _space: function() {
                var t = []
                  , e = this;
                return c(a, function(i, s) {
                    e[s.cache] && t.push(i)
                }),
                t.pop()
            },
            transition: function(t, e) {
                var i = o(t)
                  , s = i._space()
                  , n = a[s]
                  , h = 0 === this.alpha() ? o("transparent") : this
                  , l = h[n.cache] || n.to(h._rgba)
                  , d = l.slice();
                return i = i[n.cache],
                c(n.props, function(t, s) {
                    var n = s.idx
                      , o = l[n]
                      , a = i[n]
                      , h = r[s.type] || {};
                    null !== a && (null === o ? d[n] = a : (h.mod && (a - o > h.mod / 2 ? o += h.mod : o - a > h.mod / 2 && (o -= h.mod)),
                    d[n] = u((a - o) * e + o, s)))
                }),
                this[s](d)
            },
            blend: function(e) {
                if (1 === this._rgba[3])
                    return this;
                var i = this._rgba.slice()
                  , s = i.pop()
                  , n = o(e)._rgba;
                return o(t.map(i, function(t, e) {
                    return (1 - s) * n[e] + s * t
                }))
            },
            toRgbaString: function() {
                var e = "rgba("
                  , i = t.map(this._rgba, function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === i[3] && (i.pop(),
                e = "rgb("),
                e + i.join() + ")"
            },
            toHslaString: function() {
                var e = "hsla("
                  , i = t.map(this.hsla(), function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0),
                    e && e < 3 && (t = Math.round(100 * t) + "%"),
                    t
                });
                return 1 === i[3] && (i.pop(),
                e = "hsl("),
                e + i.join() + ")"
            },
            toHexString: function(e) {
                var i = this._rgba.slice()
                  , s = i.pop();
                return e && i.push(~~(255 * s)),
                "#" + t.map(i, function(t) {
                    return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }),
        o.fn.parse.prototype = o.fn,
        a.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, o = t[2] / 255, a = t[3], r = Math.max(s, n, o), h = Math.min(s, n, o), l = r - h, c = r + h, u = .5 * c;
            return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240,
            i = 0 === l ? 0 : u <= .5 ? l / c : l / (2 - c),
            [Math.round(e) % 360, i, u, null == a ? 1 : a]
        }
        ,
        a.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e = t[0] / 360
              , i = t[1]
              , s = t[2]
              , n = t[3]
              , o = s <= .5 ? s * (1 + i) : s + i - s * i
              , a = 2 * s - o;
            return [Math.round(255 * p(a, o, e + 1 / 3)), Math.round(255 * p(a, o, e)), Math.round(255 * p(a, o, e - 1 / 3)), n]
        }
        ,
        c(a, function(i, n) {
            var a = n.props
              , r = n.cache
              , h = n.to
              , l = n.from;
            o.fn[i] = function(i) {
                if (h && !this[r] && (this[r] = h(this._rgba)),
                i === e)
                    return this[r].slice();
                var s, n = t.type(i), d = "array" === n || "object" === n ? i : arguments, p = this[r].slice();
                return c(a, function(t, e) {
                    var i = d["object" === n ? t : e.idx];
                    null == i && (i = p[e.idx]),
                    p[e.idx] = u(i, e)
                }),
                l ? ((s = o(l(p)))[r] = p,
                s) : o(p)
            }
            ,
            c(a, function(e, n) {
                o.fn[e] || (o.fn[e] = function(o) {
                    var a, r = t.type(o), h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : i, l = this[h](), c = l[n.idx];
                    return "undefined" === r ? c : ("function" === r && (o = o.call(this, c),
                    r = t.type(o)),
                    null == o && n.empty ? this : ("string" === r && (a = s.exec(o)) && (o = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1)),
                    l[n.idx] = o,
                    this[h](l)))
                }
                )
            })
        }),
        o.hook = function(e) {
            var i = e.split(" ");
            c(i, function(e, i) {
                t.cssHooks[i] = {
                    set: function(e, s) {
                        var n, a, r = "";
                        if ("transparent" !== s && ("string" !== t.type(s) || (n = d(s)))) {
                            if (s = o(n || s),
                            !h.rgba && 1 !== s._rgba[3]) {
                                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style; )
                                    try {
                                        r = t.css(a, "backgroundColor"),
                                        a = a.parentNode
                                    } catch (t) {}
                                s = s.blend(r && "transparent" !== r ? r : "_default")
                            }
                            s = s.toRgbaString()
                        }
                        try {
                            e.style[i] = s
                        } catch (t) {}
                    }
                },
                t.fx.step[i] = function(e) {
                    e.colorInit || (e.start = o(e.elem, i),
                    e.end = o(e.end),
                    e.colorInit = !0),
                    t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }
        ,
        o.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),
        t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return c(["Top", "Right", "Bottom", "Left"], function(i, s) {
                    e["border" + s + "Color"] = t
                }),
                e
            }
        },
        i = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery),
    function() {
        var e, i, s, n = ["add", "remove", "toggle"], o = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        function a(e) {
            var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {};
            if (n && n.length && n[0] && n[n[0]])
                for (s = n.length; s--; )
                    "string" == typeof n[i = n[s]] && (o[t.camelCase(i)] = n[i]);
            else
                for (i in n)
                    "string" == typeof n[i] && (o[i] = n[i]);
            return o
        }
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
            t.fx.step[i] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end),
                t.setAttr = !0)
            }
        }),
        t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
        ),
        t.effects.animateClass = function(e, i, s, r) {
            var h = t.speed(i, s, r);
            return this.queue(function() {
                var i, s = t(this), r = s.attr("class") || "", l = h.children ? s.find("*").addBack() : s;
                l = l.map(function() {
                    return {
                        el: t(this),
                        start: a(this)
                    }
                }),
                (i = function() {
                    t.each(n, function(t, i) {
                        e[i] && s[i + "Class"](e[i])
                    })
                }
                )(),
                l = l.map(function() {
                    return this.end = a(this.el[0]),
                    this.diff = function(e, i) {
                        var s, n, a = {};
                        for (s in i)
                            n = i[s],
                            e[s] !== n && (o[s] || !t.fx.step[s] && isNaN(parseFloat(n)) || (a[s] = n));
                        return a
                    }(this.start, this.end),
                    this
                }),
                s.attr("class", r),
                l = l.map(function() {
                    var e = this
                      , i = t.Deferred()
                      , s = t.extend({}, h, {
                        queue: !1,
                        complete: function() {
                            i.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, s),
                    i.promise()
                }),
                t.when.apply(t, l.get()).done(function() {
                    i(),
                    t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "")
                        })
                    }),
                    h.complete.call(s[0])
                })
            })
        }
        ,
        t.fn.extend({
            addClass: (s = t.fn.addClass,
            function(e, i, n, o) {
                return i ? t.effects.animateClass.call(this, {
                    add: e
                }, i, n, o) : s.apply(this, arguments)
            }
            ),
            removeClass: (i = t.fn.removeClass,
            function(e, s, n, o) {
                return arguments.length > 1 ? t.effects.animateClass.call(this, {
                    remove: e
                }, s, n, o) : i.apply(this, arguments)
            }
            ),
            toggleClass: (e = t.fn.toggleClass,
            function(i, s, n, o, a) {
                return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
                    add: i
                } : {
                    remove: i
                }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                    toggle: i
                }, s, n, o)
            }
            ),
            switchClass: function(e, i, s, n, o) {
                return t.effects.animateClass.call(this, {
                    add: i,
                    remove: e
                }, s, n, o)
            }
        })
    }(),
    function() {
        function e(e, i, s, n) {
            return t.isPlainObject(e) && (i = e,
            e = e.effect),
            e = {
                effect: e
            },
            null == i && (i = {}),
            t.isFunction(i) && (n = i,
            s = null,
            i = {}),
            ("number" == typeof i || t.fx.speeds[i]) && (n = s,
            s = i,
            i = {}),
            t.isFunction(s) && (n = s,
            s = null),
            i && t.extend(e, i),
            s = s || i.duration,
            e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default,
            e.complete = n || i.complete,
            e
        }
        function i(e) {
            return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
        }
        var n, o, a;
        t.extend(t.effects, {
            version: "1.10.3",
            save: function(t, e) {
                for (var i = 0; i < e.length; i++)
                    null !== e[i] && t.data(s + e[i], t[0].style[e[i]])
            },
            restore: function(t, e) {
                var i, n;
                for (n = 0; n < e.length; n++)
                    null !== e[n] && (void 0 === (i = t.data(s + e[n])) && (i = ""),
                    t.css(e[n], i))
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
                e
            },
            getBaseline: function(t, e) {
                var i, s;
                switch (t[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = t[0] / e.height
                }
                switch (t[1]) {
                case "left":
                    s = 0;
                    break;
                case "center":
                    s = .5;
                    break;
                case "right":
                    s = 1;
                    break;
                default:
                    s = t[1] / e.width
                }
                return {
                    x: s,
                    y: i
                }
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper"))
                    return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    float: e.css("float")
                }
                  , s = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , n = {
                    width: e.width(),
                    height: e.height()
                }
                  , o = document.activeElement;
                try {
                    o.id
                } catch (t) {
                    o = document.body
                }
                return e.wrap(s),
                (e[0] === o || t.contains(e[0], o)) && t(o).focus(),
                s = e.parent(),
                "static" === e.css("position") ? (s.css({
                    position: "relative"
                }),
                e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }),
                t.each(["top", "left", "bottom", "right"], function(t, s) {
                    i[s] = e.css(s),
                    isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }),
                e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                e.css(n),
                s.css(i).show()
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e),
                (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
                e
            },
            setTransition: function(e, i, s, n) {
                return n = n || {},
                t.each(i, function(t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (n[i] = o[0] * s + o[1])
                }),
                n
            }
        }),
        t.fn.extend({
            effect: function() {
                var i = e.apply(this, arguments)
                  , s = i.mode
                  , n = i.queue
                  , o = t.effects.effect[i.effect];
                if (t.fx.off || !o)
                    return s ? this[s](i.duration, i.complete) : this.each(function() {
                        i.complete && i.complete.call(this)
                    });
                function a(e) {
                    var s = t(this)
                      , n = i.complete
                      , a = i.mode;
                    function r() {
                        t.isFunction(n) && n.call(s[0]),
                        t.isFunction(e) && e()
                    }
                    (s.is(":hidden") ? "hide" === a : "show" === a) ? (s[a](),
                    r()) : o.call(s[0], i, r)
                }
                return !1 === n ? this.each(a) : this.queue(n || "fx", a)
            },
            show: (a = t.fn.show,
            function(t) {
                if (i(t))
                    return a.apply(this, arguments);
                var s = e.apply(this, arguments);
                return s.mode = "show",
                this.effect.call(this, s)
            }
            ),
            hide: (o = t.fn.hide,
            function(t) {
                if (i(t))
                    return o.apply(this, arguments);
                var s = e.apply(this, arguments);
                return s.mode = "hide",
                this.effect.call(this, s)
            }
            ),
            toggle: (n = t.fn.toggle,
            function(t) {
                if (i(t) || "boolean" == typeof t)
                    return n.apply(this, arguments);
                var s = e.apply(this, arguments);
                return s.mode = "toggle",
                this.effect.call(this, s)
            }
            ),
            cssUnit: function(e) {
                var i = this.css(e)
                  , s = [];
                return t.each(["em", "px", "%", "pt"], function(t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }),
                s
            }
        })
    }(),
    i = {},
    t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, e) {
        i[e] = function(e) {
            return Math.pow(e, t + 2)
        }
    }),
    t.extend(i, {
        Sine: function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        Circ: function(t) {
            return 1 - Math.sqrt(1 - t * t)
        },
        Elastic: function(t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
        },
        Back: function(t) {
            return t * t * (3 * t - 2)
        },
        Bounce: function(t) {
            for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; )
                ;
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }
    }),
    t.each(i, function(e, i) {
        t.easing["easeIn" + e] = i,
        t.easing["easeOut" + e] = function(t) {
            return 1 - i(1 - t)
        }
        ,
        t.easing["easeInOut" + e] = function(t) {
            return t < .5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
        }
    })
}(jQuery),
function(t, e) {
    var i = /up|down|vertical/
      , s = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function(e, n) {
        var o, a, r, h = t(this), l = ["position", "top", "bottom", "left", "right", "height", "width"], c = t.effects.setMode(h, e.mode || "hide"), u = e.direction || "up", d = i.test(u), p = d ? "height" : "width", f = d ? "top" : "left", g = s.test(u), m = {}, v = "show" === c;
        h.parent().is(".ui-effects-wrapper") ? t.effects.save(h.parent(), l) : t.effects.save(h, l),
        h.show(),
        a = (o = t.effects.createWrapper(h).css({
            overflow: "hidden"
        }))[p](),
        r = parseFloat(o.css(f)) || 0,
        m[p] = v ? a : 0,
        g || (h.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
            position: "absolute"
        }),
        m[f] = v ? r : a + r),
        v && (o.css(p, 0),
        g || o.css(f, r + a)),
        o.animate(m, {
            duration: e.duration,
            easing: e.easing,
            queue: !1,
            complete: function() {
                "hide" === c && h.hide(),
                t.effects.restore(h, l),
                t.effects.removeWrapper(h),
                n()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.bounce = function(e, i) {
        var s, n, o, a = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = t.effects.setMode(a, e.mode || "effect"), l = "hide" === h, c = "show" === h, u = e.direction || "up", d = e.distance, p = e.times || 5, f = 2 * p + (c || l ? 1 : 0), g = e.duration / f, m = e.easing, v = "up" === u || "down" === u ? "top" : "left", _ = "up" === u || "left" === u, b = a.queue(), y = b.length;
        for ((c || l) && r.push("opacity"),
        t.effects.save(a, r),
        a.show(),
        t.effects.createWrapper(a),
        d || (d = a["top" === v ? "outerHeight" : "outerWidth"]() / 3),
        c && ((o = {
            opacity: 1
        })[v] = 0,
        a.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(o, g, m)),
        l && (d /= Math.pow(2, p - 1)),
        (o = {})[v] = 0,
        s = 0; s < p; s++)
            (n = {})[v] = (_ ? "-=" : "+=") + d,
            a.animate(n, g, m).animate(o, g, m),
            d = l ? 2 * d : d / 2;
        l && ((n = {
            opacity: 0
        })[v] = (_ ? "-=" : "+=") + d,
        a.animate(n, g, m)),
        a.queue(function() {
            l && a.hide(),
            t.effects.restore(a, r),
            t.effects.removeWrapper(a),
            i()
        }),
        y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))),
        a.dequeue()
    }
}(jQuery),
function(t, e) {
    t.effects.effect.clip = function(e, i) {
        var s, n, o, a = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = "show" === t.effects.setMode(a, e.mode || "hide"), l = "vertical" === (e.direction || "vertical"), c = l ? "height" : "width", u = l ? "top" : "left", d = {};
        t.effects.save(a, r),
        a.show(),
        s = t.effects.createWrapper(a).css({
            overflow: "hidden"
        }),
        o = (n = "IMG" === a[0].tagName ? s : a)[c](),
        h && (n.css(c, 0),
        n.css(u, o / 2)),
        d[c] = h ? o : 0,
        d[u] = h ? 0 : o / 2,
        n.animate(d, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                h || a.hide(),
                t.effects.restore(a, r),
                t.effects.removeWrapper(a),
                i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.drop = function(e, i) {
        var s, n = t(this), o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], a = t.effects.setMode(n, e.mode || "hide"), r = "show" === a, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left", c = "up" === h || "left" === h ? "pos" : "neg", u = {
            opacity: r ? 1 : 0
        };
        t.effects.save(n, o),
        n.show(),
        t.effects.createWrapper(n),
        s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2,
        r && n.css("opacity", 0).css(l, "pos" === c ? -s : s),
        u[l] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s,
        n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === a && n.hide(),
                t.effects.restore(n, o),
                t.effects.removeWrapper(n),
                i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.explode = function(e, i) {
        var s, n, o, a, r, h, l = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, c = l, u = t(this), d = "show" === t.effects.setMode(u, e.mode || "hide"), p = u.show().css("visibility", "hidden").offset(), f = Math.ceil(u.outerWidth() / c), g = Math.ceil(u.outerHeight() / l), m = [];
        function v() {
            m.push(this),
            m.length === l * c && function() {
                u.css({
                    visibility: "visible"
                }),
                t(m).remove(),
                d || u.hide();
                i()
            }()
        }
        for (s = 0; s < l; s++)
            for (a = p.top + s * g,
            h = s - (l - 1) / 2,
            n = 0; n < c; n++)
                o = p.left + n * f,
                r = n - (c - 1) / 2,
                u.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -n * f,
                    top: -s * g
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: f,
                    height: g,
                    left: o + (d ? r * f : 0),
                    top: a + (d ? h * g : 0),
                    opacity: d ? 0 : 1
                }).animate({
                    left: o + (d ? 0 : r * f),
                    top: a + (d ? 0 : h * g),
                    opacity: d ? 1 : 0
                }, e.duration || 500, e.easing, v)
    }
}(jQuery),
function(t, e) {
    t.effects.effect.fade = function(e, i) {
        var s = t(this)
          , n = t.effects.setMode(s, e.mode || "toggle");
        s.animate({
            opacity: n
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.fold = function(e, i) {
        var s, n, o = t(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], r = t.effects.setMode(o, e.mode || "hide"), h = "show" === r, l = "hide" === r, c = e.size || 15, u = /([0-9]+)%/.exec(c), d = !!e.horizFirst, p = h !== d, f = p ? ["width", "height"] : ["height", "width"], g = e.duration / 2, m = {}, v = {};
        t.effects.save(o, a),
        o.show(),
        s = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }),
        n = p ? [s.width(), s.height()] : [s.height(), s.width()],
        u && (c = parseInt(u[1], 10) / 100 * n[l ? 0 : 1]),
        h && s.css(d ? {
            height: 0,
            width: c
        } : {
            height: c,
            width: 0
        }),
        m[f[0]] = h ? n[0] : c,
        v[f[1]] = h ? n[1] : 0,
        s.animate(m, g, e.easing).animate(v, g, e.easing, function() {
            l && o.hide(),
            t.effects.restore(o, a),
            t.effects.removeWrapper(o),
            i()
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.highlight = function(e, i) {
        var s = t(this)
          , n = ["backgroundImage", "backgroundColor", "opacity"]
          , o = t.effects.setMode(s, e.mode || "show")
          , a = {
            backgroundColor: s.css("backgroundColor")
        };
        "hide" === o && (a.opacity = 0),
        t.effects.save(s, n),
        s.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(a, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && s.hide(),
                t.effects.restore(s, n),
                i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.pulsate = function(e, i) {
        var s, n = t(this), o = t.effects.setMode(n, e.mode || "show"), a = "show" === o, r = "hide" === o, h = a || "hide" === o, l = 2 * (e.times || 5) + (h ? 1 : 0), c = e.duration / l, u = 0, d = n.queue(), p = d.length;
        for (!a && n.is(":visible") || (n.css("opacity", 0).show(),
        u = 1),
        s = 1; s < l; s++)
            n.animate({
                opacity: u
            }, c, e.easing),
            u = 1 - u;
        n.animate({
            opacity: u
        }, c, e.easing),
        n.queue(function() {
            r && n.hide(),
            i()
        }),
        p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, l + 1))),
        n.dequeue()
    }
}(jQuery),
function(t, e) {
    t.effects.effect.puff = function(e, i) {
        var s = t(this)
          , n = t.effects.setMode(s, e.mode || "hide")
          , o = "hide" === n
          , a = parseInt(e.percent, 10) || 150
          , r = a / 100
          , h = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: n,
            complete: i,
            percent: o ? a : 100,
            from: o ? h : {
                height: h.height * r,
                width: h.width * r,
                outerHeight: h.outerHeight * r,
                outerWidth: h.outerWidth * r
            }
        }),
        s.effect(e)
    }
    ,
    t.effects.effect.scale = function(e, i) {
        var s = t(this)
          , n = t.extend(!0, {}, e)
          , o = t.effects.setMode(s, e.mode || "effect")
          , a = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100)
          , r = e.direction || "both"
          , h = e.origin
          , l = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        }
          , c = "horizontal" !== r ? a / 100 : 1
          , u = "vertical" !== r ? a / 100 : 1;
        n.effect = "size",
        n.queue = !1,
        n.complete = i,
        "effect" !== o && (n.origin = h || ["middle", "center"],
        n.restore = !0),
        n.from = e.from || ("show" === o ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : l),
        n.to = {
            height: l.height * c,
            width: l.width * u,
            outerHeight: l.outerHeight * c,
            outerWidth: l.outerWidth * u
        },
        n.fade && ("show" === o && (n.from.opacity = 0,
        n.to.opacity = 1),
        "hide" === o && (n.from.opacity = 1,
        n.to.opacity = 0)),
        s.effect(n)
    }
    ,
    t.effects.effect.size = function(e, i) {
        var s, n, o, a = t(this), r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], h = ["width", "height", "overflow"], l = ["fontSize"], c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], u = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], d = t.effects.setMode(a, e.mode || "effect"), p = e.restore || "effect" !== d, f = e.scale || "both", g = e.origin || ["middle", "center"], m = a.css("position"), v = p ? r : ["position", "top", "bottom", "left", "right", "overflow", "opacity"], _ = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === d && a.show(),
        s = {
            height: a.height(),
            width: a.width(),
            outerHeight: a.outerHeight(),
            outerWidth: a.outerWidth()
        },
        "toggle" === e.mode && "show" === d ? (a.from = e.to || _,
        a.to = e.from || s) : (a.from = e.from || ("show" === d ? _ : s),
        a.to = e.to || ("hide" === d ? _ : s)),
        o = {
            from: {
                y: a.from.height / s.height,
                x: a.from.width / s.width
            },
            to: {
                y: a.to.height / s.height,
                x: a.to.width / s.width
            }
        },
        "box" !== f && "both" !== f || (o.from.y !== o.to.y && (v = v.concat(c),
        a.from = t.effects.setTransition(a, c, o.from.y, a.from),
        a.to = t.effects.setTransition(a, c, o.to.y, a.to)),
        o.from.x !== o.to.x && (v = v.concat(u),
        a.from = t.effects.setTransition(a, u, o.from.x, a.from),
        a.to = t.effects.setTransition(a, u, o.to.x, a.to))),
        "content" !== f && "both" !== f || o.from.y !== o.to.y && (v = v.concat(l).concat(h),
        a.from = t.effects.setTransition(a, l, o.from.y, a.from),
        a.to = t.effects.setTransition(a, l, o.to.y, a.to)),
        t.effects.save(a, v),
        a.show(),
        t.effects.createWrapper(a),
        a.css("overflow", "hidden").css(a.from),
        g && (n = t.effects.getBaseline(g, s),
        a.from.top = (s.outerHeight - a.outerHeight()) * n.y,
        a.from.left = (s.outerWidth - a.outerWidth()) * n.x,
        a.to.top = (s.outerHeight - a.to.outerHeight) * n.y,
        a.to.left = (s.outerWidth - a.to.outerWidth) * n.x),
        a.css(a.from),
        "content" !== f && "both" !== f || (c = c.concat(["marginTop", "marginBottom"]).concat(l),
        u = u.concat(["marginLeft", "marginRight"]),
        h = r.concat(c).concat(u),
        a.find("*[width]").each(function() {
            var i = t(this)
              , s = i.height()
              , n = i.width()
              , a = i.outerHeight()
              , r = i.outerWidth();
            p && t.effects.save(i, h),
            i.from = {
                height: s * o.from.y,
                width: n * o.from.x,
                outerHeight: a * o.from.y,
                outerWidth: r * o.from.x
            },
            i.to = {
                height: s * o.to.y,
                width: n * o.to.x,
                outerHeight: s * o.to.y,
                outerWidth: n * o.to.x
            },
            o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, c, o.from.y, i.from),
            i.to = t.effects.setTransition(i, c, o.to.y, i.to)),
            o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, u, o.from.x, i.from),
            i.to = t.effects.setTransition(i, u, o.to.x, i.to)),
            i.css(i.from),
            i.animate(i.to, e.duration, e.easing, function() {
                p && t.effects.restore(i, h)
            })
        })),
        a.animate(a.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                0 === a.to.opacity && a.css("opacity", a.from.opacity),
                "hide" === d && a.hide(),
                t.effects.restore(a, v),
                p || ("static" === m ? a.css({
                    position: "relative",
                    top: a.to.top,
                    left: a.to.left
                }) : t.each(["top", "left"], function(t, e) {
                    a.css(e, function(e, i) {
                        var s = parseInt(i, 10)
                          , n = t ? a.to.left : a.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })),
                t.effects.removeWrapper(a),
                i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.shake = function(e, i) {
        var s, n = t(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], a = t.effects.setMode(n, e.mode || "effect"), r = e.direction || "left", h = e.distance || 20, l = e.times || 3, c = 2 * l + 1, u = Math.round(e.duration / c), d = "up" === r || "down" === r ? "top" : "left", p = "up" === r || "left" === r, f = {}, g = {}, m = {}, v = n.queue(), _ = v.length;
        for (t.effects.save(n, o),
        n.show(),
        t.effects.createWrapper(n),
        f[d] = (p ? "-=" : "+=") + h,
        g[d] = (p ? "+=" : "-=") + 2 * h,
        m[d] = (p ? "-=" : "+=") + 2 * h,
        n.animate(f, u, e.easing),
        s = 1; s < l; s++)
            n.animate(g, u, e.easing).animate(m, u, e.easing);
        n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function() {
            "hide" === a && n.hide(),
            t.effects.restore(n, o),
            t.effects.removeWrapper(n),
            i()
        }),
        _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))),
        n.dequeue()
    }
}(jQuery),
function(t, e) {
    t.effects.effect.slide = function(e, i) {
        var s, n = t(this), o = ["position", "top", "bottom", "left", "right", "width", "height"], a = t.effects.setMode(n, e.mode || "show"), r = "show" === a, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left", c = "up" === h || "left" === h, u = {};
        t.effects.save(n, o),
        n.show(),
        s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0),
        t.effects.createWrapper(n).css({
            overflow: "hidden"
        }),
        r && n.css(l, c ? isNaN(s) ? "-" + s : -s : s),
        u[l] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s,
        n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === a && n.hide(),
                t.effects.restore(n, o),
                t.effects.removeWrapper(n),
                i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.transfer = function(e, i) {
        var s = t(this)
          , n = t(e.to)
          , o = "fixed" === n.css("position")
          , a = t("body")
          , r = o ? a.scrollTop() : 0
          , h = o ? a.scrollLeft() : 0
          , l = n.offset()
          , c = {
            top: l.top - r,
            left: l.left - h,
            height: n.innerHeight(),
            width: n.innerWidth()
        }
          , u = s.offset()
          , d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
            top: u.top - r,
            left: u.left - h,
            height: s.innerHeight(),
            width: s.innerWidth(),
            position: o ? "fixed" : "absolute"
        }).animate(c, e.duration, e.easing, function() {
            d.remove(),
            i()
        })
    }
}(jQuery);
