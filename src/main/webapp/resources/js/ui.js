/*!
* VERSION: beta 1.10.1
* DATE: 2013-07-10
* UPDATES AND DOCS AT: http://www.greensock.com
*
* Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
*
* @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
* This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
* Club GreenSock members, the software agreement that was issued with your membership.
*
* @author: Jack Doyle, jack@greensock.com
**/
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var s = [].slice
          , r = function(t, e, s) {
            i.call(this, t, e, s),
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0
        }
          , n = function(t) {
            return t.jquery || t.length && t !== window && t[0] && (t[0] === window || t[0].nodeType && t[0].style && !t.nodeType)
        }
          , a = r.prototype = i.to({}, .1, {})
          , o = [];
        r.version = "1.10.1",
        a.constructor = r,
        a.kill()._gc = !1,
        r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf,
        r.getTweensOf = i.getTweensOf,
        r.ticker = i.ticker,
        a.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        }
        ,
        a.updateTo = function(t, e) {
            var s, r = this.ratio;
            e && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
            this._uncache(!1),
            this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (s in t)
                this.vars[s] = t[s];
            if (this._initted)
                if (e)
                    this._initted = !1;
                else if (this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this),
                this._time / this._duration > .998) {
                    var n = this._time;
                    this.render(0, !0, !1),
                    this._initted = !1,
                    this.render(n, !0, !1)
                } else if (this._time > 0) {
                    this._initted = !1,
                    this._init();
                    for (var a, o = 1 / (1 - r), h = this._firstPT; h; )
                        a = h.s + h.c,
                        h.c *= o,
                        h.s = a - h.c,
                        h = h._next
                }
            return this
        }
        ,
        a.render = function(t, e, i) {
            var s, r, n, a, h, l, _, u = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, f = this._totalTime, c = this._cycle;
            if (t >= u ? (this._totalTime = u,
            this._cycle = this._repeat,
            this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = this._duration,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || (s = !0,
            r = "onComplete"),
            0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0,
            this._rawPrevTime > 0 && (r = "onReverseComplete",
            e && (t = -1))),
            this._rawPrevTime = t)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== f || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete",
            s = this._reversed),
            0 > t ? (this._active = !1,
            0 === this._duration && (this._rawPrevTime >= 0 && (i = !0),
            this._rawPrevTime = t)) : this._initted || (i = !0)) : (this._totalTime = this._time = t,
            0 !== this._repeat && (a = this._duration + this._repeatDelay,
            this._cycle = this._totalTime / a >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / a && this._cycle--,
            this._time = this._totalTime - this._cycle * a,
            this._yoyo && 0 !== (1 & this._cycle) && (this._time = this._duration - this._time),
            this._time > this._duration ? this._time = this._duration : 0 > this._time && (this._time = 0)),
            this._easeType ? (h = this._time / this._duration,
            l = this._easeType,
            _ = this._easePower,
            (1 === l || 3 === l && h >= .5) && (h = 1 - h),
            3 === l && (h *= 2),
            1 === _ ? h *= h : 2 === _ ? h *= h * h : 3 === _ ? h *= h * h * h : 4 === _ && (h *= h * h * h * h),
            this.ratio = 1 === l ? 1 - h : 2 === l ? h : .5 > this._time / this._duration ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / this._duration)),
            p === this._time && !i)
                return f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)),
                void 0;
            if (!this._initted) {
                if (this._init(),
                !this._initted)
                    return;
                this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0),
            0 === f && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
            this.vars.onStart && (0 !== this._totalTime || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o))),
            n = this._firstPT; n; )
                n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
                n = n._next;
            this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i),
            e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)),
            this._cycle !== c && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || o)),
            r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i),
            s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
            this._active = !1),
            !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || o)))
        }
        ,
        r.to = function(t, e, i) {
            return new r(t,e,i)
        }
        ,
        r.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new r(t,e,i)
        }
        ,
        r.fromTo = function(t, e, i, s) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new r(t,e,s)
        }
        ,
        r.staggerTo = r.allTo = function(t, e, a, h, l, _, u) {
            h = h || 0;
            var p, f, c, m, d = a.delay || 0, g = [], v = function() {
                a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments),
                l.apply(u || this, _ || o)
            };
            for (t instanceof Array || ("string" == typeof t && (t = i.selector(t) || t),
            n(t) && (t = s.call(t, 0))),
            p = t.length,
            c = 0; p > c; c++) {
                f = {};
                for (m in a)
                    f[m] = a[m];
                f.delay = d,
                c === p - 1 && l && (f.onComplete = v),
                g[c] = new r(t[c],e,f),
                d += h
            }
            return g
        }
        ,
        r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            r.staggerTo(t, e, i, s, n, a, o)
        }
        ,
        r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            r.staggerTo(t, e, s, n, a, o, h)
        }
        ,
        r.delayedCall = function(t, e, i, s, n) {
            return new r(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        }
        ,
        r.set = function(t, e) {
            return new r(t,0,e)
        }
        ,
        r.isTweening = function(t) {
            for (var e, s = i.getTweensOf(t), r = s.length; --r > -1; )
                if (e = s[r],
                e._active || e._startTime === e._timeline._time && e._timeline._active)
                    return !0;
            return !1
        }
        ;
        var h = function(t, e) {
            for (var s = [], r = 0, n = t._first; n; )
                n instanceof i ? s[r++] = n : (e && (s[r++] = n),
                s = s.concat(h(n, e)),
                r = s.length),
                n = n._next;
            return s
        }
          , l = r.getAllTweens = function(e) {
            return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
        }
        ;
        r.killAll = function(t, i, s, r) {
            null == i && (i = !0),
            null == s && (s = !0);
            var n, a, o, h = l(0 != r), _ = h.length, u = i && s && r;
            for (o = 0; _ > o; o++)
                a = h[o],
                (u || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1))
        }
        ,
        r.killChildTweensOf = function(t, e) {
            if (null != t) {
                var a, o, h, l, _, u = i._tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t),
                n(t) && (t = s(t, 0)),
                t instanceof Array)
                    for (l = t.length; --l > -1; )
                        r.killChildTweensOf(t[l], e);
                else {
                    a = [];
                    for (h in u)
                        for (o = u[h].target.parentNode; o; )
                            o === t && (a = a.concat(u[h].tweens)),
                            o = o.parentNode;
                    for (_ = a.length,
                    l = 0; _ > l; l++)
                        e && a[l].totalTime(a[l].totalDuration()),
                        a[l]._enabled(!1, !1)
                }
            }
        }
        ;
        var _ = function(t, i, s, r) {
            i = i !== !1,
            s = s !== !1,
            r = r !== !1;
            for (var n, a, o = l(r), h = i && s && r, _ = o.length; --_ > -1; )
                a = o[_],
                (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
        };
        return r.pauseAll = function(t, e, i) {
            _(!0, t, e, i)
        }
        ,
        r.resumeAll = function(t, e, i) {
            _(!1, t, e, i)
        }
        ,
        a.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }
        ,
        a.totalProgress = function(t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }
        ,
        a.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        a.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }
        ,
        a.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        a.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        a.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        a.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        r
    }, !0),
    window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var s = function(t) {
            e.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
            this.smoothChildTiming = this.vars.smoothChildTiming === !0,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var i, s, r = this.vars;
            for (s in r)
                i = r[s],
                i instanceof Array && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
            r.tweens instanceof Array && this.add(r.tweens, 0, r.align, r.stagger)
        }
          , r = []
          , n = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }
          , a = function(t, e, i, s) {
            t._timeline.pause(t._startTime),
            e && e.apply(s || t._timeline, i || r)
        }
          , o = r.slice
          , h = s.prototype = new e;
        return s.version = "1.10.1",
        h.constructor = s,
        h.kill()._gc = !1,
        h.to = function(t, e, s, r) {
            return e ? this.add(new i(t,e,s), r) : this.set(t, s, r)
        }
        ,
        h.from = function(t, e, s, r) {
            return this.add(i.from(t, e, s), r)
        }
        ,
        h.fromTo = function(t, e, s, r, n) {
            return e ? this.add(i.fromTo(t, e, s, r), n) : this.set(t, r, n)
        }
        ,
        h.staggerTo = function(t, e, r, a, h, l, _, u) {
            var p, f = new s({
                onComplete: l,
                onCompleteParams: _,
                onCompleteScope: u
            });
            for ("string" == typeof t && (t = i.selector(t) || t),
            !(t instanceof Array) && t.length && t !== window && t[0] && (t[0] === window || t[0].nodeType && t[0].style && !t.nodeType) && (t = o.call(t, 0)),
            a = a || 0,
            p = 0; t.length > p; p++)
                r.startAt && (r.startAt = n(r.startAt)),
                f.to(t[p], e, n(r), p * a);
            return this.add(f, h)
        }
        ,
        h.staggerFrom = function(t, e, i, s, r, n, a, o) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(t, e, i, s, r, n, a, o)
        }
        ,
        h.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            this.staggerTo(t, e, s, r, n, a, o, h)
        }
        ,
        h.call = function(t, e, s, r) {
            return this.add(i.delayedCall(0, t, e, s), r)
        }
        ,
        h.set = function(t, e, s) {
            return s = this._parseTimeOrLabel(s, 0, !0),
            null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused),
            this.add(new i(t,0,e), s)
        }
        ,
        s.exportRoot = function(t, e) {
            t = t || {},
            null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, n, a = new s(t), o = a._timeline;
            for (null == e && (e = !0),
            o._remove(a, !0),
            a._startTime = 0,
            a._rawPrevTime = a._time = a._totalTime = o._time,
            r = o._first; r; )
                n = r._next,
                e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay),
                r = n;
            return o.add(a, 0),
            a
        }
        ,
        h.add = function(r, n, a, o) {
            var h, l, _, u, p;
            if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)),
            !(r instanceof t)) {
                if (r instanceof Array) {
                    for (a = a || "normal",
                    o = o || 0,
                    h = n,
                    l = r.length,
                    _ = 0; l > _; _++)
                        (u = r[_])instanceof Array && (u = new s({
                            tweens: u
                        })),
                        this.add(u, h),
                        "string" != typeof u && "function" != typeof u && ("sequence" === a ? h = u._startTime + u.totalDuration() / u._timeScale : "start" === a && (u._startTime -= u.delay())),
                        h += o;
                    return this._uncache(!0)
                }
                if ("string" == typeof r)
                    return this.addLabel(r, n);
                if ("function" != typeof r)
                    throw "Cannot add " + r + " into the timeline; it is neither a tween, timeline, function, nor a string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, n),
            this._gc && !this._paused && this._time === this._duration && this._time < this.duration())
                for (p = this; p._gc && p._timeline; )
                    p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._enabled(!0, !1),
                    p = p._timeline;
            return this
        }
        ,
        h.remove = function(e) {
            if (e instanceof t)
                return this._remove(e, !1);
            if (e instanceof Array) {
                for (var i = e.length; --i > -1; )
                    this.remove(e[i]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }
        ,
        h._remove = function(t, i) {
            return e.prototype._remove.call(this, t, i),
            this._last ? this._time > this._last._startTime && (this._time = this.duration(),
            this._totalTime = this._totalDuration) : this._time = this._totalTime = 0,
            this
        }
        ,
        h.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }
        ,
        h.insert = h.insertMultiple = function(t, e, i, s) {
            return this.add(t, e || 0, i, s)
        }
        ,
        h.appendMultiple = function(t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
        }
        ,
        h.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        }
        ,
        h.addPause = function(t, e, i, s) {
            return this.call(a, ["{self}", e, i, s], this, t)
        }
        ,
        h.removeLabel = function(t) {
            return delete this._labels[t],
            this
        }
        ,
        h.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }
        ,
        h._parseTimeOrLabel = function(e, i, s, r) {
            var n;
            if (r instanceof t && r.timeline === this)
                this.remove(r);
            else if (r instanceof Array)
                for (n = r.length; --n > -1; )
                    r[n]instanceof t && r[n].timeline === this && this.remove(r[n]);
            if ("string" == typeof i)
                return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
            if (i = i || 0,
            "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = this.duration());
            else {
                if (n = e.indexOf("="),
                -1 === n)
                    return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)),
                e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
            }
            return Number(e) + i
        }
        ,
        h.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }
        ,
        h.stop = function() {
            return this.paused(!0)
        }
        ,
        h.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }
        ,
        h.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }
        ,
        h.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, a, o, h, l = this._dirty ? this.totalDuration() : this._totalDuration, _ = this._time, u = this._startTime, p = this._timeScale, f = this._paused;
            if (t >= l ? (this._totalTime = this._time = l,
            this._reversed || this._hasPausedChild() || (n = !0,
            o = "onComplete",
            0 === this._duration && (0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0,
            this._rawPrevTime > 0 && (o = "onReverseComplete"))),
            this._rawPrevTime = t,
            t = l + 1e-6) : 1e-7 > t ? (this._totalTime = this._time = 0,
            (0 !== _ || 0 === this._duration && this._rawPrevTime > 0) && (o = "onReverseComplete",
            n = this._reversed),
            0 > t ? (this._active = !1,
            0 === this._duration && this._rawPrevTime >= 0 && this._first && (h = !0)) : this._initted || (h = !0),
            this._rawPrevTime = t,
            t = 0) : this._totalTime = this._time = this._rawPrevTime = t,
            this._time !== _ && this._first || i || h) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._time !== _ && t > 0 && (this._active = !0),
                0 === _ && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)),
                this._time >= _)
                    for (s = this._first; s && (a = s._next,
                    !this._paused || f); )
                        (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                        s = a;
                else
                    for (s = this._last; s && (a = s._prev,
                    !this._paused || f); )
                        (s._active || _ >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                        s = a;
                this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)),
                o && (this._gc || (u === this._startTime || p !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || r)))
            }
        }
        ,
        h._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof s && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }
        ,
        h.getChildren = function(t, e, s, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, o = 0; a; )
                r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a),
                t !== !1 && (n = n.concat(a.getChildren(!0, e, s)),
                o = n.length))),
                a = a._next;
            return n
        }
        ,
        h.getTweensOf = function(t, e) {
            for (var s = i.getTweensOf(t), r = s.length, n = [], a = 0; --r > -1; )
                (s[r].timeline === this || e && this._contains(s[r])) && (n[a++] = s[r]);
            return n
        }
        ,
        h._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }
        ,
        h.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var s, r = this._first, n = this._labels; r; )
                r._startTime >= i && (r._startTime += t),
                r = r._next;
            if (e)
                for (s in n)
                    n[s] >= i && (n[s] += t);
            return this._uncache(!0)
        }
        ,
        h._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1; )
                i[s]._kill(t, e) && (r = !0);
            return r
        }
        ,
        h.clear = function(t) {
            var e = this.getChildren(!1, !0, !0)
              , i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        h.invalidate = function() {
            for (var t = this._first; t; )
                t.invalidate(),
                t = t._next;
            return this
        }
        ,
        h._enabled = function(t, i) {
            if (t === this._gc)
                for (var s = this._first; s; )
                    s._enabled(t, !0),
                    s = s._next;
            return e.prototype._enabled.call(this, t, i)
        }
        ,
        h.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * t, !1) : this._time / this.duration()
        }
        ,
        h.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        h.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, s = 0, r = this._last, n = 999999999999; r; )
                        e = r._prev,
                        r._dirty && r.totalDuration(),
                        r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime,
                        0 > r._startTime && !r._paused && (s -= r._startTime,
                        this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale),
                        this.shiftChildren(-r._startTime, !1, -9999999999),
                        n = 0),
                        i = r._startTime + r._totalDuration / r._timeScale,
                        i > s && (s = i),
                        r = e;
                    this._duration = this._totalDuration = s,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t),
            this
        }
        ,
        h.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === t._rootFramesTimeline
        }
        ,
        h.rawTime = function() {
            return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }
        ,
        s
    }, !0),
    window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
        var s = function(e) {
            t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._dirty = !0
        }
          , r = []
          , n = new i(null,null,1,0)
          , a = function(t) {
            for (; t; ) {
                if (t._paused)
                    return !0;
                t = t._timeline
            }
            return !1
        }
          , o = s.prototype = new t;
        return o.constructor = s,
        o.kill()._gc = !1,
        s.version = "1.10.1",
        o.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            t.prototype.invalidate.call(this)
        }
        ,
        o.addCallback = function(t, i, s, r) {
            return this.add(e.delayedCall(0, t, s, r), i)
        }
        ,
        o.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1; )
                        i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this
        }
        ,
        o.tweenTo = function(t, i) {
            i = i || {};
            var s, a, o = {
                ease: n,
                overwrite: 2,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (s in i)
                o[s] = i[s];
            return o.time = this._parseTimeOrLabel(t),
            a = new e(this,Math.abs(Number(o.time) - this._time) / this._timeScale || .001,o),
            o.onStart = function() {
                a.target.paused(!0),
                a.vars.time !== a.target.time() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale),
                i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || r)
            }
            ,
            a
        }
        ,
        o.tweenFromTo = function(t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                onCompleteScope: this
            },
            i.immediateRender = i.immediateRender !== !1;
            var s = this.tweenTo(e, i);
            return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
        }
        ,
        o.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, a, o, h, l, _ = this._dirty ? this.totalDuration() : this._totalDuration, u = this._duration, p = this._time, f = this._totalTime, c = this._startTime, m = this._timeScale, d = this._rawPrevTime, g = this._paused, v = this._cycle;
            if (t >= _ ? (this._locked || (this._totalTime = _,
            this._cycle = this._repeat),
            this._reversed || this._hasPausedChild() || (n = !0,
            o = "onComplete",
            0 === u && (0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0,
            this._rawPrevTime > 0 && (o = "onReverseComplete"))),
            this._rawPrevTime = t,
            this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = u,
            t = u + 1e-6)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0),
            this._time = 0,
            (0 !== p || 0 === u && this._rawPrevTime > 0 && !this._locked) && (o = "onReverseComplete",
            n = this._reversed),
            0 > t ? (this._active = !1,
            0 === u && this._rawPrevTime >= 0 && this._first && (h = !0)) : this._initted || (h = !0),
            this._rawPrevTime = t,
            t = 0) : (this._time = this._rawPrevTime = t,
            this._locked || (this._totalTime = t,
            0 !== this._repeat && (l = u + this._repeatDelay,
            this._cycle = this._totalTime / l >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--,
            this._time = this._totalTime - this._cycle * l,
            this._yoyo && 0 !== (1 & this._cycle) && (this._time = u - this._time),
            this._time > u ? (this._time = u,
            t = u + 1e-6) : 0 > this._time ? this._time = t = 0 : t = this._time))),
            this._cycle !== v && !this._locked) {
                var y = this._yoyo && 0 !== (1 & v)
                  , T = y === (this._yoyo && 0 !== (1 & this._cycle))
                  , w = this._totalTime
                  , x = this._cycle
                  , b = this._rawPrevTime
                  , P = this._time;
                if (this._totalTime = v * u,
                v > this._cycle ? y = !y : this._totalTime += u,
                this._time = p,
                this._rawPrevTime = 0 === u ? d - 1e-5 : d,
                this._cycle = v,
                this._locked = !0,
                p = y ? 0 : u,
                this.render(p, e, 0 === u),
                e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || r),
                T && (p = y ? u + 1e-6 : -1e-6,
                this.render(p, !0, !1)),
                this._locked = !1,
                this._paused && !g)
                    return;
                this._time = P,
                this._totalTime = w,
                this._cycle = x,
                this._rawPrevTime = b
            }
            if (!(this._time !== p && this._first || i || h))
                return f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)),
                void 0;
            if (this._initted || (this._initted = !0),
            this._active || !this._paused && this._totalTime !== f && t > 0 && (this._active = !0),
            0 === f && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)),
            this._time >= p)
                for (s = this._first; s && (a = s._next,
                !this._paused || g); )
                    (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                    s = a;
            else
                for (s = this._last; s && (a = s._prev,
                !this._paused || g); )
                    (s._active || p >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                    s = a;
            this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)),
            o && (this._locked || this._gc || (c === this._startTime || m !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
            this._active = !1),
            !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || r)))
        }
        ,
        o.getActive = function(t, e, i) {
            null == t && (t = !0),
            null == e && (e = !0),
            null == i && (i = !1);
            var s, r, n = [], o = this.getChildren(t, e, i), h = 0, l = o.length;
            for (s = 0; l > s; s++)
                r = o[s],
                r._paused || r._timeline._time >= r._startTime && r._timeline._time < r._startTime + r._totalDuration / r._timeScale && (a(r._timeline) || (n[h++] = r));
            return n
        }
        ,
        o.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), s = i.length;
            for (e = 0; s > e; e++)
                if (i[e].time > t)
                    return i[e].name;
            return null
        }
        ,
        o.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                if (t > e[i].time)
                    return e[i].name;
            return null
        }
        ,
        o.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {
                    time: this._labels[t],
                    name: t
                };
            return e.sort(function(t, e) {
                return t.time - e.time
            }),
            e
        }
        ,
        o.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }
        ,
        o.totalProgress = function(t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }
        ,
        o.totalDuration = function(e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        o.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        o.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        o.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        o.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        o.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        s
    }, !0),
    function() {
        var t = 180 / Math.PI
          , e = Math.PI / 180
          , i = []
          , s = []
          , r = []
          , n = {}
          , a = function(t, e, i, s) {
            this.a = t,
            this.b = e,
            this.c = i,
            this.d = s,
            this.da = s - t,
            this.ca = i - t,
            this.ba = e - t
        }
          , o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"
          , h = function(t, e, i, s) {
            var r = {
                a: t
            }
              , n = {}
              , a = {}
              , o = {
                c: s
            }
              , h = (t + e) / 2
              , l = (e + i) / 2
              , _ = (i + s) / 2
              , u = (h + l) / 2
              , p = (l + _) / 2
              , f = (p - u) / 8;
            return r.b = h + (t - h) / 4,
            n.b = u + f,
            r.c = n.a = (r.b + n.b) / 2,
            n.c = a.a = (u + p) / 2,
            a.b = p - f,
            o.b = _ + (s - _) / 4,
            a.c = o.a = (a.b + o.b) / 2,
            [r, n, a, o]
        }
          , l = function(t, e, n, a, o) {
            var l, _, u, p, f, c, m, d, g, v, y, T, w, x = t.length - 1, b = 0, P = t[0].a;
            for (l = 0; x > l; l++)
                f = t[b],
                _ = f.a,
                u = f.d,
                p = t[b + 1].d,
                o ? (y = i[l],
                T = s[l],
                w = .25 * (T + y) * e / (a ? .5 : r[l] || .5),
                c = u - (u - _) * (a ? .5 * e : 0 !== y ? w / y : 0),
                m = u + (p - u) * (a ? .5 * e : 0 !== T ? w / T : 0),
                d = u - (c + ((m - c) * (3 * y / (y + T) + .5) / 4 || 0))) : (c = u - .5 * (u - _) * e,
                m = u + .5 * (p - u) * e,
                d = u - (c + m) / 2),
                c += d,
                m += d,
                f.c = g = c,
                f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a),
                f.da = u - _,
                f.ca = g - _,
                f.ba = P - _,
                n ? (v = h(_, P, g, u),
                t.splice(b, 1, v[0], v[1], v[2], v[3]),
                b += 4) : b++,
                P = m;
            f = t[b],
            f.b = P,
            f.c = P + .4 * (f.d - P),
            f.da = f.d - f.a,
            f.ca = f.c - f.a,
            f.ba = P - f.a,
            n && (v = h(f.a, P, f.c, f.d),
            t.splice(b, 1, v[0], v[1], v[2], v[3]))
        }
          , _ = function(t, e, r, n) {
            var o, h, l, _, u, p, f = [];
            if (n)
                for (t = [n].concat(t),
                h = t.length; --h > -1; )
                    "string" == typeof (p = t[h][e]) && "=" === p.charAt(1) && (t[h][e] = n[e] + Number(p.charAt(0) + p.substr(2)));
            if (o = t.length - 2,
            0 > o)
                return f[0] = new a(t[0][e],0,0,t[-1 > o ? 0 : 1][e]),
                f;
            for (h = 0; o > h; h++)
                l = t[h][e],
                _ = t[h + 1][e],
                f[h] = new a(l,0,0,_),
                r && (u = t[h + 2][e],
                i[h] = (i[h] || 0) + (_ - l) * (_ - l),
                s[h] = (s[h] || 0) + (u - _) * (u - _));
            return f[h] = new a(t[h][e],0,0,t[h + 1][e]),
            f
        }
          , u = function(t, e, a, h, u, p) {
            var f, c, m, d, g, v, y, T, w = {}, x = [], b = p || t[0];
            u = "string" == typeof u ? "," + u + "," : o,
            null == e && (e = 1);
            for (c in t[0])
                x.push(c);
            if (t.length > 1) {
                for (T = t[t.length - 1],
                y = !0,
                f = x.length; --f > -1; )
                    if (c = x[f],
                    Math.abs(b[c] - T[c]) > .05) {
                        y = !1;
                        break
                    }
                y && (t = t.concat(),
                p && t.unshift(p),
                t.push(t[1]),
                p = t[t.length - 3])
            }
            for (i.length = s.length = r.length = 0,
            f = x.length; --f > -1; )
                c = x[f],
                n[c] = -1 !== u.indexOf("," + c + ","),
                w[c] = _(t, c, n[c], p);
            for (f = i.length; --f > -1; )
                i[f] = Math.sqrt(i[f]),
                s[f] = Math.sqrt(s[f]);
            if (!h) {
                for (f = x.length; --f > -1; )
                    if (n[c])
                        for (m = w[x[f]],
                        v = m.length - 1,
                        d = 0; v > d; d++)
                            g = m[d + 1].da / s[d] + m[d].da / i[d],
                            r[d] = (r[d] || 0) + g * g;
                for (f = r.length; --f > -1; )
                    r[f] = Math.sqrt(r[f])
            }
            for (f = x.length,
            d = a ? 4 : 1; --f > -1; )
                c = x[f],
                m = w[c],
                l(m, e, a, h, n[c]),
                y && (m.splice(0, d),
                m.splice(m.length - d, d));
            return w
        }
          , p = function(t, e, i) {
            e = e || "soft";
            var s, r, n, o, h, l, _, u, p, f, c, m = {}, d = "cubic" === e ? 3 : 2, g = "soft" === e, v = [];
            if (g && i && (t = [i].concat(t)),
            null == t || d + 1 > t.length)
                throw "invalid Bezier data";
            for (p in t[0])
                v.push(p);
            for (l = v.length; --l > -1; ) {
                for (p = v[l],
                m[p] = h = [],
                f = 0,
                u = t.length,
                _ = 0; u > _; _++)
                    s = null == i ? t[_][p] : "string" == typeof (c = t[_][p]) && "=" === c.charAt(1) ? i[p] + Number(c.charAt(0) + c.substr(2)) : Number(c),
                    g && _ > 1 && u - 1 > _ && (h[f++] = (s + h[f - 2]) / 2),
                    h[f++] = s;
                for (u = f - d + 1,
                f = 0,
                _ = 0; u > _; _ += d)
                    s = h[_],
                    r = h[_ + 1],
                    n = h[_ + 2],
                    o = 2 === d ? 0 : h[_ + 3],
                    h[f++] = c = 3 === d ? new a(s,r,n,o) : new a(s,(2 * r + s) / 3,(2 * r + n) / 3,n);
                h.length = f
            }
            return m
        }
          , f = function(t, e, i) {
            for (var s, r, n, a, o, h, l, _, u, p, f, c = 1 / i, m = t.length; --m > -1; )
                for (p = t[m],
                n = p.a,
                a = p.d - n,
                o = p.c - n,
                h = p.b - n,
                s = r = 0,
                _ = 1; i >= _; _++)
                    l = c * _,
                    u = 1 - l,
                    s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l),
                    f = m * i + _ - 1,
                    e[f] = (e[f] || 0) + s * s
        }
          , c = function(t, e) {
            e = e >> 0 || 6;
            var i, s, r, n, a = [], o = [], h = 0, l = 0, _ = e - 1, u = [], p = [];
            for (i in t)
                f(t[i], a, e);
            for (r = a.length,
            s = 0; r > s; s++)
                h += Math.sqrt(a[s]),
                n = s % e,
                p[n] = h,
                n === _ && (l += h,
                n = s / e >> 0,
                u[n] = p,
                o[n] = l,
                h = 0,
                p = []);
            return {
                length: l,
                lengths: o,
                segments: u
            }
        }
          , m = window._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t,
                e instanceof Array && (e = {
                    values: e
                }),
                this._func = {},
                this._round = {},
                this._props = [],
                this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var s, r, n, a, o, h = e.values || [], l = {}, _ = h[0], f = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]] : null;
                for (s in _)
                    this._props.push(s);
                for (n = this._props.length; --n > -1; )
                    s = this._props[n],
                    this._overwriteProps.push(s),
                    r = this._func[s] = "function" == typeof t[s],
                    l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]),
                    o || l[s] !== h[0][s] && (o = l);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : p(h, e.type, l),
                this._segCount = this._beziers[s].length,
                this._timeRes) {
                    var m = c(this._beziers, this._timeRes);
                    this._length = m.length,
                    this._lengths = m.lengths,
                    this._segments = m.segments,
                    this._l1 = this._li = this._s1 = this._si = 0,
                    this._l2 = this._lengths[0],
                    this._curSeg = this._segments[0],
                    this._s2 = this._curSeg[0],
                    this._prec = 1 / this._curSeg.length
                }
                if (f = this._autoRotate)
                    for (f[0]instanceof Array || (this._autoRotate = f = [f]),
                    n = f.length; --n > -1; )
                        for (a = 0; 3 > a; a++)
                            s = f[n][a],
                            this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                return !0
            },
            set: function(e) {
                var i, s, r, n, a, o, h, l, _, u, p = this._segCount, f = this._func, c = this._target;
                if (this._timeRes) {
                    if (_ = this._lengths,
                    u = this._curSeg,
                    e *= this._length,
                    r = this._li,
                    e > this._l2 && p - 1 > r) {
                        for (l = p - 1; l > r && e >= (this._l2 = _[++r]); )
                            ;
                        this._l1 = _[r - 1],
                        this._li = r,
                        this._curSeg = u = this._segments[r],
                        this._s2 = u[this._s1 = this._si = 0]
                    } else if (this._l1 > e && r > 0) {
                        for (; r > 0 && (this._l1 = _[--r]) >= e; )
                            ;
                        0 === r && this._l1 > e ? this._l1 = 0 : r++,
                        this._l2 = _[r],
                        this._li = r,
                        this._curSeg = u = this._segments[r],
                        this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                        this._s2 = u[this._si]
                    }
                    if (i = r,
                    e -= this._l1,
                    r = this._si,
                    e > this._s2 && u.length - 1 > r) {
                        for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]); )
                            ;
                        this._s1 = u[r - 1],
                        this._si = r
                    } else if (this._s1 > e && r > 0) {
                        for (; r > 0 && (this._s1 = u[--r]) >= e; )
                            ;
                        0 === r && this._s1 > e ? this._s1 = 0 : r++,
                        this._s2 = u[r],
                        this._si = r
                    }
                    o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                } else
                    i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0,
                    o = (e - i * (1 / p)) * p;
                for (s = 1 - o,
                r = this._props.length; --r > -1; )
                    n = this._props[r],
                    a = this._beziers[n][i],
                    h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a,
                    this._round[n] && (h = h + (h > 0 ? .5 : -.5) >> 0),
                    f[n] ? c[n](h) : c[n] = h;
                if (this._autoRotate) {
                    var m, d, g, v, y, T, w, x = this._autoRotate;
                    for (r = x.length; --r > -1; )
                        n = x[r][2],
                        T = x[r][3] || 0,
                        w = x[r][4] === !0 ? 1 : t,
                        a = this._beziers[x[r][0]],
                        m = this._beziers[x[r][1]],
                        a && m && (a = a[i],
                        m = m[i],
                        d = a.a + (a.b - a.a) * o,
                        v = a.b + (a.c - a.b) * o,
                        d += (v - d) * o,
                        v += (a.c + (a.d - a.c) * o - v) * o,
                        g = m.a + (m.b - m.a) * o,
                        y = m.b + (m.c - m.b) * o,
                        g += (y - g) * o,
                        y += (m.c + (m.d - m.c) * o - y) * o,
                        h = Math.atan2(y - g, v - d) * w + T,
                        f[n] ? c[n](h) : c[n] = h)
                }
            }
        })
          , d = m.prototype;
        m.bezierThrough = u,
        m.cubicToQuadratic = h,
        m._autoCSS = !0,
        m.quadraticToCubic = function(t, e, i) {
            return new a(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
        }
        ,
        m._cssRegister = function() {
            var t = window._gsDefine.globals.CSSPlugin;
            if (t) {
                var i = t._internals
                  , s = i._parseToProxy
                  , r = i._setPluginRatio
                  , n = i.CSSPropTween;
                i._registerComplexSpecialProp("bezier", {
                    parser: function(t, i, a, o, h, l) {
                        i instanceof Array && (i = {
                            values: i
                        }),
                        l = new m;
                        var _, u, p, f = i.values, c = f.length - 1, d = [], g = {};
                        if (0 > c)
                            return h;
                        for (_ = 0; c >= _; _++)
                            p = s(t, f[_], o, h, l, c !== _),
                            d[_] = p.end;
                        for (u in i)
                            g[u] = i[u];
                        return g.values = d,
                        h = new n(t,"bezier",0,0,p.pt,2),
                        h.data = p,
                        h.plugin = l,
                        h.setRatio = r,
                        0 === g.autoRotate && (g.autoRotate = !0),
                        !g.autoRotate || g.autoRotate instanceof Array || (_ = g.autoRotate === !0 ? 0 : Number(g.autoRotate) * e,
                        g.autoRotate = null != p.end.left ? [["left", "top", "rotation", _, !0]] : null != p.end.x ? [["x", "y", "rotation", _, !0]] : !1),
                        g.autoRotate && (o._transform || o._enableTransforms(!1),
                        p.autoRotate = o._target._gsTransform),
                        l._onInitTween(p.proxy, g, o._tween),
                        h
                    }
                })
            }
        }
        ,
        d._roundProps = function(t, e) {
            for (var i = this._overwriteProps, s = i.length; --s > -1; )
                (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
        }
        ,
        d._kill = function(t) {
            var e, i, s = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e],
                    delete this._func[e],
                    i = s.length; --i > -1; )
                        s[i] === e && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(),
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, s, r, n, a = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0
        }, o = {}, h = a.prototype = new t("css");
        h.constructor = a,
        a.version = "1.10.1",
        a.API = 2,
        a.defaultTransformPerspective = 0,
        h = "px",
        a.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h
        };
        var l, _, u, p, f, c, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g, d = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /[^\d\-\.]/g, y = /(?:\d|\-|\+|=|#|\.)*/g, T = /opacity *= *([^)]*)/, w = /opacity:([^;]*)/, x = /alpha\(opacity *=.+?\)/i, b = /^(rgb|hsl)/, P = /([A-Z])/g, k = /-([a-z])/gi, S = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, R = function(t, e) {
            return e.toUpperCase()
        }, A = /(?:Left|Right|Width)/i, C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, D = /,(?=[^\)]*(?:\(|$))/gi, M = Math.PI / 180, I = 180 / Math.PI, F = {}, E = document, N = E.createElement("div"), L = E.createElement("img"), X = a._internals = {
            _specialProps: o
        }, z = navigator.userAgent, U = function() {
            var t, e = z.indexOf("Android"), i = E.createElement("div");
            return u = -1 !== z.indexOf("Safari") && -1 === z.indexOf("Chrome") && (-1 === e || Number(z.substr(e + 8, 1)) > 3),
            f = u && 6 > Number(z.substr(z.indexOf("Version/") + 8, 1)),
            p = -1 !== z.indexOf("Firefox"),
            /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z),
            c = parseFloat(RegExp.$1),
            i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>",
            t = i.getElementsByTagName("a")[0],
            t ? /^0.55/.test(t.style.opacity) : !1
        }(), Y = function(t) {
            return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, j = function(t) {
            window.console && console.log(t)
        }, B = "", q = "", V = function(t, e) {
            e = e || N;
            var i, s, r = e.style;
            if (void 0 !== r[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            s = 5; --s > -1 && void 0 === r[i[s] + t]; )
                ;
            return s >= 0 ? (q = 3 === s ? "ms" : i[s],
            B = "-" + q.toLowerCase() + "-",
            q + t) : null
        }, Z = E.defaultView ? E.defaultView.getComputedStyle : function() {}
        , G = a.getStyle = function(t, e, i, s, r) {
            var n;
            return U || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t, null)) ? (t = i.getPropertyValue(e.replace(P, "-$1").toLowerCase()),
            n = t || i.length ? t : i[e]) : t.currentStyle && (n = t.currentStyle[e]),
            null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : Y(t)
        }
        , $ = function(t, e, i, s, r) {
            if ("px" === s || !s)
                return i;
            if ("auto" === s || !i)
                return 0;
            var n, a = A.test(e), o = t, h = N.style, l = 0 > i;
            return l && (i = -i),
            "%" === s && -1 !== e.indexOf("border") ? n = i / 100 * (a ? t.clientWidth : t.clientHeight) : (h.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;",
            "%" !== s && o.appendChild ? h[a ? "borderLeftWidth" : "borderTopWidth"] = i + s : (o = t.parentNode || E.body,
            h[a ? "width" : "height"] = i + s),
            o.appendChild(N),
            n = parseFloat(N[a ? "offsetWidth" : "offsetHeight"]),
            o.removeChild(N),
            0 !== n || r || (n = $(t, e, i, s, !0))),
            l ? -n : n
        }, Q = function(t, e, i) {
            if ("absolute" !== G(t, "position", i))
                return 0;
            var s = "left" === e ? "Left" : "Top"
              , r = G(t, "margin" + s, i);
            return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(y, "")) || 0)
        }, W = function(t, e) {
            var i, s, r = {};
            if (e = e || Z(t, null))
                if (i = e.length)
                    for (; --i > -1; )
                        r[e[i].replace(k, R)] = e.getPropertyValue(e[i]);
                else
                    for (i in e)
                        r[i] = e[i];
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    r[i.replace(k, R)] = e[i];
            return U || (r.opacity = Y(t)),
            s = be(t, e, !1),
            r.rotation = s.rotation * I,
            r.skewX = s.skewX * I,
            r.scaleX = s.scaleX,
            r.scaleY = s.scaleY,
            r.x = s.x,
            r.y = s.y,
            xe && (r.z = s.z,
            r.rotationX = s.rotationX * I,
            r.rotationY = s.rotationY * I,
            r.scaleZ = s.scaleZ),
            r.filters && delete r.filters,
            r
        }, H = function(t, e, i, s, r) {
            var n, a, o, h = {}, l = t.style;
            for (a in i)
                "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : Q(t, a),
                void 0 !== l[a] && (o = new ue(l,a,l[a],o)));
            if (s)
                for (a in s)
                    "className" !== a && (h[a] = s[a]);
            return {
                difs: h,
                firstMPT: o
            }
        }, K = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, J = ["marginLeft", "marginRight", "marginTop", "marginBottom"], te = function(t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
              , r = K[e]
              , n = r.length;
            for (i = i || Z(t, null); --n > -1; )
                s -= parseFloat(G(t, "padding" + r[n], i, !0)) || 0,
                s -= parseFloat(G(t, "border" + r[n] + "Width", i, !0)) || 0;
            return s
        }, ee = function(t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
            var i = t.split(" ")
              , s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0]
              , r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == r ? r = "0" : "center" === r && (r = "50%"),
            ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"),
            e && (e.oxp = -1 !== s.indexOf("%"),
            e.oyp = -1 !== r.indexOf("%"),
            e.oxr = "=" === s.charAt(1),
            e.oyr = "=" === r.charAt(1),
            e.ox = parseFloat(s.replace(v, "")),
            e.oy = parseFloat(r.replace(v, ""))),
            s + " " + r + (i.length > 2 ? " " + i[2] : "")
        }, ie = function(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }, se = function(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
        }, re = function(t, e, i, s) {
            var r, n, a, o, h = 1e-6;
            return null == t ? o = e : "number" == typeof t ? o = t * M : (r = 2 * Math.PI,
            n = t.split("_"),
            a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? M : 1) - ("=" === t.charAt(1) ? 0 : e),
            n.length && (s && (s[i] = e + a),
            -1 !== t.indexOf("short") && (a %= r,
            a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)),
            -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)),
            o = e + a),
            h > o && o > -h && (o = 0),
            o
        }, ne = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, ae = function(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t,
            0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        }, oe = function(t) {
            var e, i, s, r, n, a;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
            ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1),
            i = t.charAt(2),
            s = t.charAt(3),
            t = "#" + e + e + i + i + s + s),
            t = parseInt(t.substr(1), 16),
            [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m),
            r = Number(t[0]) % 360 / 360,
            n = Number(t[1]) / 100,
            a = Number(t[2]) / 100,
            i = .5 >= a ? a * (n + 1) : a + n - a * n,
            e = 2 * a - i,
            t.length > 3 && (t[3] = Number(t[3])),
            t[0] = ae(r + 1 / 3, e, i),
            t[1] = ae(r, e, i),
            t[2] = ae(r - 1 / 3, e, i),
            t) : (t = t.match(m) || ne.transparent,
            t[0] = Number(t[0]),
            t[1] = Number(t[1]),
            t[2] = Number(t[2]),
            t.length > 3 && (t[3] = Number(t[3])),
            t)) : ne.black
        }, he = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (h in ne)
            he += "|" + h + "\\b";
        he = RegExp(he + ")", "gi");
        var le = function(t, e, i, s) {
            if (null == t)
                return function(t) {
                    return t
                }
                ;
            var r, n = e ? (t.match(he) || [""])[0] : "", a = t.split(n).join("").match(g) || [], o = t.substr(0, t.indexOf(a[0])), h = ")" === t.charAt(t.length - 1) ? ")" : "", l = -1 !== t.indexOf(" ") ? " " : ",", _ = a.length, u = _ > 0 ? a[0].replace(m, "") : "";
            return _ ? r = e ? function(t) {
                var e, p, f, c;
                if ("number" == typeof t)
                    t += u;
                else if (s && D.test(t)) {
                    for (c = t.replace(D, "|").split("|"),
                    f = 0; c.length > f; f++)
                        c[f] = r(c[f]);
                    return c.join(",")
                }
                if (e = (t.match(he) || [n])[0],
                p = t.split(e).join("").match(g) || [],
                f = p.length,
                _ > f--)
                    for (; _ > ++f; )
                        p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            : function(t) {
                var e, n, p;
                if ("number" == typeof t)
                    t += u;
                else if (s && D.test(t)) {
                    for (n = t.replace(D, "|").split("|"),
                    p = 0; n.length > p; p++)
                        n[p] = r(n[p]);
                    return n.join(",")
                }
                if (e = t.match(g) || [],
                p = e.length,
                _ > p--)
                    for (; _ > ++p; )
                        e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                return o + e.join(l) + h
            }
            : function(t) {
                return t
            }
        }
          , _e = function(t) {
            return t = t.split(","),
            function(e, i, s, r, n, a, o) {
                var h, l = (i + "").split(" ");
                for (o = {},
                h = 0; 4 > h; h++)
                    o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                return r.parse(e, o, n, a)
            }
        }
          , ue = (X._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o; )
                e = a[o.v],
                o.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : h > e && e > -h && (e = 0),
                o.t[o.p] = e,
                o = o._next;
            if (n.autoRotate && (n.autoRotate.rotation = a.rotation),
            1 === t)
                for (o = n.firstMPT; o; ) {
                    if (i = o.t,
                    i.type) {
                        if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1,
                            s = 1; i.l > s; s++)
                                r += i["xn" + s] + i["xs" + (s + 1)];
                            i.e = r
                        }
                    } else
                        i.e = i.s + i.xs0;
                    o = o._next
                }
        }
        ,
        function(t, e, i, s, r) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = r,
            s && (s._prev = this,
            this._next = s)
        }
        )
          , pe = (X._parseToProxy = function(t, e, i, s, r, n) {
            var a, o, h, l, _, u = s, p = {}, f = {}, c = i._transform, m = F;
            for (i._transform = null,
            F = e,
            s = _ = i.parse(t, e, s, r),
            F = m,
            n && (i._transform = c,
            u && (u._prev = null,
            u._prev && (u._prev._next = null))); s && s !== u; ) {
                if (1 >= s.type && (o = s.p,
                f[o] = s.s + s.c,
                p[o] = s.s,
                n || (l = new ue(s,"s",o,l,s.r),
                s.c = 0),
                1 === s.type))
                    for (a = s.l; --a > 0; )
                        h = "xn" + a,
                        o = s.p + "_" + h,
                        f[o] = s.data[h],
                        p[o] = s[h],
                        n || (l = new ue(s,h,o,l,s.rxp[h]));
                s = s._next
            }
            return {
                proxy: p,
                end: f,
                firstMPT: l,
                pt: _
            }
        }
        ,
        X.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) {
            this.t = t,
            this.p = e,
            this.s = s,
            this.c = r,
            this.n = h || e,
            t instanceof pe || n.push(this.n),
            this.r = l,
            this.type = o || 0,
            _ && (this.pr = _,
            i = !0),
            this.b = void 0 === u ? s : u,
            this.e = void 0 === p ? s + r : p,
            a && (this._next = a,
            a._prev = this)
        }
        )
          , fe = a.parseComplex = function(t, e, i, s, r, n, a, o, h, _) {
            i = i || n || "",
            a = new pe(t,e,0,0,a,_ ? 2 : 1,null,!1,o,i,s),
            s += "";
            var u, p, f, c, g, v, y, T, w, x, P, k, S = i.split(", ").join(",").split(" "), R = s.split(", ").join(",").split(" "), A = S.length, C = l !== !1;
            for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(D, ", ").split(" "),
            R = R.join(" ").replace(D, ", ").split(" "),
            A = S.length),
            A !== R.length && (S = (n || "").split(" "),
            A = S.length),
            a.plugin = h,
            a.setRatio = _,
            u = 0; A > u; u++)
                if (c = S[u],
                g = R[u],
                T = parseFloat(c),
                T || 0 === T)
                    a.appendXtra("", T, ie(g, T), g.replace(d, ""), C && -1 !== g.indexOf("px"), !0);
                else if (r && ("#" === c.charAt(0) || ne[c] || b.test(c)))
                    k = "," === g.charAt(g.length - 1) ? ")," : ")",
                    c = oe(c),
                    g = oe(g),
                    w = c.length + g.length > 6,
                    w && !U && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent",
                    a.e = a.e.split(R[u]).join("transparent")) : (U || (w = !1),
                    a.appendXtra(w ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], w ? "," : k, !0),
                    w && (c = 4 > c.length ? 1 : c[3],
                    a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, k, !1)));
                else if (v = c.match(m)) {
                    if (y = g.match(d),
                    !y || y.length !== v.length)
                        return a;
                    for (f = 0,
                    p = 0; v.length > p; p++)
                        P = v[p],
                        x = c.indexOf(P, f),
                        a.appendXtra(c.substr(f, x - f), Number(P), ie(y[p], P), "", C && "px" === c.substr(x + P.length, 2), 0 === p),
                        f = x + P.length;
                    a["xs" + a.l] += c.substr(f)
                } else
                    a["xs" + a.l] += a.l ? " " + c : c;
            if (-1 !== s.indexOf("=") && a.data) {
                for (k = a.xs0 + a.data.s,
                u = 1; a.l > u; u++)
                    k += a["xs" + u] + a.data["xn" + u];
                a.e = k + a["xs" + u]
            }
            return a.l || (a.type = -1,
            a.xs0 = a.e),
            a.xfirst || a
        }
          , ce = 9;
        for (h = pe.prototype,
        h.l = h.pr = 0; --ce > 0; )
            h["xn" + ce] = 0,
            h["xs" + ce] = "";
        h.xs0 = "",
        h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null,
        h.appendXtra = function(t, e, i, s, r, n) {
            var a = this
              , o = a.l;
            return a["xs" + o] += n && o ? " " + t : t || "",
            i || 0 === o || a.plugin ? (a.l++,
            a.type = a.setRatio ? 2 : 1,
            a["xs" + a.l] = s || "",
            o > 0 ? (a.data["xn" + o] = e + i,
            a.rxp["xn" + o] = r,
            a["xn" + o] = e,
            a.plugin || (a.xfirst = new pe(a,"xn" + o,e,i,a.xfirst || a,0,a.n,r,a.pr),
            a.xfirst.xs0 = 0),
            a) : (a.data = {
                s: e + i
            },
            a.rxp = {},
            a.s = e,
            a.c = i,
            a.r = r,
            a)) : (a["xs" + o] += e + (s || ""),
            a)
        }
        ;
        var me = function(t, e) {
            e = e || {},
            this.p = e.prefix ? V(t) || t : t,
            o[t] = o[this.p] = this,
            this.format = e.formatter || le(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        }
          , de = X._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var s, r, n = t.split(","), a = e.defaultValue;
            for (i = i || [a],
            s = 0; n.length > s; s++)
                e.prefix = 0 === s && e.prefix,
                e.defaultValue = i[s] || a,
                r = new me(n[s],e)
        }
          , ge = function(t) {
            if (!o[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                de(t, {
                    parser: function(t, i, s, r, n, a, h) {
                        var l = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                        return l ? (l._cssRegister(),
                        o[s].parse(t, i, s, r, n, a, h)) : (j("Error: " + e + " js file not loaded."),
                        n)
                    }
                })
            }
        };
        h = me.prototype,
        h.parseComplex = function(t, e, i, s, r, n) {
            var a, o, h, l, _, u, p = this.keyword;
            if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"),
            h = i.replace(D, "|").split("|")) : p && (o = [e],
            h = [i])),
            h) {
                for (l = h.length > o.length ? h.length : o.length,
                a = 0; l > a; a++)
                    e = o[a] = o[a] || this.dflt,
                    i = h[a] = h[a] || this.dflt,
                    p && (_ = e.indexOf(p),
                    u = i.indexOf(p),
                    _ !== u && (i = -1 === u ? h : o,
                    i[a] += " " + p));
                e = o.join(", "),
                i = h.join(", ")
            }
            return fe(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
        }
        ,
        h.parse = function(t, e, i, s, n, a) {
            return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
        }
        ,
        a.registerSpecialProp = function(t, e, i) {
            de(t, {
                parser: function(t, s, r, n, a, o) {
                    var h = new pe(t,r,0,0,a,2,r,!1,i);
                    return h.plugin = o,
                    h.setRatio = e(t, s, n._tween, r),
                    h
                },
                priority: i
            })
        }
        ;
        var ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(",")
          , ye = V("transform")
          , Te = B + "transform"
          , we = V("transformOrigin")
          , xe = null !== V("perspective")
          , be = function(t, e, i, s) {
            if (t._gsTransform && i && !s)
                return t._gsTransform;
            var r, n, o, h, l, _, u, p, f, c, m, d, g, v = i ? t._gsTransform || {
                skewY: 0
            } : {
                skewY: 0
            }, y = 0 > v.scaleX, T = 2e-5, w = 1e5, x = -Math.PI + 1e-4, b = Math.PI - 1e-4, P = xe ? parseFloat(G(t, we, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
            for (ye ? r = G(t, Te, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(C),
            r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""),
            n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
            o = n.length; --o > -1; )
                h = Number(n[o]),
                n[o] = (l = h - (h |= 0)) ? (0 | l * w + (0 > l ? -.5 : .5)) / w + h : h;
            if (16 === n.length) {
                var k = n[8]
                  , S = n[9]
                  , R = n[10]
                  , A = n[12]
                  , O = n[13]
                  , D = n[14];
                if (v.zOrigin && (D = -v.zOrigin,
                A = k * D - n[12],
                O = S * D - n[13],
                D = R * D + v.zOrigin - n[14]),
                !i || s || null == v.rotationX) {
                    var M, I, F, E, N, L, X, z = n[0], U = n[1], Y = n[2], j = n[3], B = n[4], q = n[5], V = n[6], Z = n[7], $ = n[11], Q = v.rotationX = Math.atan2(V, R), W = x > Q || Q > b;
                    Q && (E = Math.cos(-Q),
                    N = Math.sin(-Q),
                    M = B * E + k * N,
                    I = q * E + S * N,
                    F = V * E + R * N,
                    k = B * -N + k * E,
                    S = q * -N + S * E,
                    R = V * -N + R * E,
                    $ = Z * -N + $ * E,
                    B = M,
                    q = I,
                    V = F),
                    Q = v.rotationY = Math.atan2(k, z),
                    Q && (L = x > Q || Q > b,
                    E = Math.cos(-Q),
                    N = Math.sin(-Q),
                    M = z * E - k * N,
                    I = U * E - S * N,
                    F = Y * E - R * N,
                    S = U * N + S * E,
                    R = Y * N + R * E,
                    $ = j * N + $ * E,
                    z = M,
                    U = I,
                    Y = F),
                    Q = v.rotation = Math.atan2(U, q),
                    Q && (X = x > Q || Q > b,
                    E = Math.cos(-Q),
                    N = Math.sin(-Q),
                    z = z * E + B * N,
                    I = U * E + q * N,
                    q = U * -N + q * E,
                    V = Y * -N + V * E,
                    U = I),
                    X && W ? v.rotation = v.rotationX = 0 : X && L ? v.rotation = v.rotationY = 0 : L && W && (v.rotationY = v.rotationX = 0),
                    v.scaleX = (0 | Math.sqrt(z * z + U * U) * w + .5) / w,
                    v.scaleY = (0 | Math.sqrt(q * q + S * S) * w + .5) / w,
                    v.scaleZ = (0 | Math.sqrt(V * V + R * R) * w + .5) / w,
                    v.skewX = 0,
                    v.perspective = $ ? 1 / (0 > $ ? -$ : $) : 0,
                    v.x = A,
                    v.y = O,
                    v.z = D
                }
            } else if (!(xe && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === G(t, "display", e))) {
                var H = n.length >= 6
                  , K = H ? n[0] : 1
                  , J = n[1] || 0
                  , te = n[2] || 0
                  , ee = H ? n[3] : 1;
                v.x = n[4] || 0,
                v.y = n[5] || 0,
                _ = Math.sqrt(K * K + J * J),
                u = Math.sqrt(ee * ee + te * te),
                p = K || J ? Math.atan2(J, K) : v.rotation || 0,
                f = te || ee ? Math.atan2(te, ee) + p : v.skewX || 0,
                c = _ - Math.abs(v.scaleX || 0),
                m = u - Math.abs(v.scaleY || 0),
                Math.abs(f) > Math.PI / 2 && Math.abs(f) < 1.5 * Math.PI && (y ? (_ *= -1,
                f += 0 >= p ? Math.PI : -Math.PI,
                p += 0 >= p ? Math.PI : -Math.PI) : (u *= -1,
                f += 0 >= f ? Math.PI : -Math.PI)),
                d = (p - v.rotation) % Math.PI,
                g = (f - v.skewX) % Math.PI,
                (void 0 === v.skewX || c > T || -T > c || m > T || -T > m || d > x && b > d && false | d * w || g > x && b > g && false | g * w) && (v.scaleX = _,
                v.scaleY = u,
                v.rotation = p,
                v.skewX = f),
                xe && (v.rotationX = v.rotationY = v.z = 0,
                v.perspective = parseFloat(a.defaultTransformPerspective) || 0,
                v.scaleZ = 1)
            }
            v.zOrigin = P;
            for (o in v)
                T > v[o] && v[o] > -T && (v[o] = 0);
            return i && (t._gsTransform = v),
            v
        }
          , Pe = function(t) {
            var e, i, s = this.data, r = -s.rotation, n = r + s.skewX, a = 1e5, o = (0 | Math.cos(r) * s.scaleX * a) / a, h = (0 | Math.sin(r) * s.scaleX * a) / a, l = (0 | Math.sin(n) * -s.scaleY * a) / a, _ = (0 | Math.cos(n) * s.scaleY * a) / a, u = this.t.style, p = this.t.currentStyle;
            if (p) {
                i = h,
                h = -l,
                l = -i,
                e = p.filter,
                u.filter = "";
                var f, m, d = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== p.position, w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _, x = s.x, b = s.y;
                if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2,
                m = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2,
                x += f - (f * o + m * h),
                b += m - (f * l + m * _)),
                v)
                    f = d / 2,
                    m = g / 2,
                    w += ", Dx=" + (f - (f * o + m * h) + x) + ", Dy=" + (m - (f * l + m * _) + b) + ")";
                else {
                    var P, k, S, R = 8 > c ? 1 : -1;
                    for (f = s.ieOffsetX || 0,
                    m = s.ieOffsetY || 0,
                    s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + x),
                    s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b),
                    ce = 0; 4 > ce; ce++)
                        k = J[ce],
                        P = p[k],
                        i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, k, parseFloat(P), P.replace(y, "")) || 0,
                        S = i !== s[k] ? 2 > ce ? -s.ieOffsetX : -s.ieOffsetY : 2 > ce ? f - s.ieOffsetX : m - s.ieOffsetY,
                        u[k] = (s[k] = Math.round(i - S * (0 === ce || 2 === ce ? 1 : R))) + "px";
                    w += ", sizingMethod='auto expand')"
                }
                u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, w) : w + " " + e,
                (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === w.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(") && u.removeAttribute("filter"))
            }
        }
          , ke = function() {
            var t, e, i, s, r, n, a, o, h, l, _, u, f, c, m, d, g, v, y, T, w, x, b, P, k, S, R, A = this.data, C = this.t.style, O = A.rotation, D = A.scaleX, M = A.scaleY, I = A.scaleZ;
            if (p && (k = C.top ? "top" : C.bottom ? "bottom" : parseFloat(G(this.t, "top", null, !1)) ? "bottom" : "top",
            w = G(this.t, k, null, !1),
            S = parseFloat(w) || 0,
            R = w.substr((S + "").length) || "px",
            A._ffFix = !A._ffFix,
            C[k] = (A._ffFix ? S + .05 : S - .05) + R),
            O || A.skewX)
                y = Math.cos(O),
                T = Math.sin(O),
                t = y,
                r = T,
                A.skewX && (O -= A.skewX,
                y = Math.cos(O),
                T = Math.sin(O)),
                e = -T,
                n = y;
            else {
                if (!A.rotationY && !A.rotationX && 1 === I)
                    return C[ye] = "translate3d(" + A.x + "px," + A.y + "px," + A.z + "px)" + (1 !== D || 1 !== M ? " scale(" + D + "," + M + ")" : ""),
                    void 0;
                t = n = 1,
                e = r = 0
            }
            _ = 1,
            i = s = a = o = h = l = u = f = c = 0,
            d = A.perspective,
            m = d ? -1 / d : 0,
            g = A.zOrigin,
            v = 1e5,
            O = A.rotationY,
            O && (y = Math.cos(O),
            T = Math.sin(O),
            h = _ * -T,
            f = m * -T,
            i = t * T,
            a = r * T,
            _ *= y,
            m *= y,
            t *= y,
            r *= y),
            O = A.rotationX,
            O && (y = Math.cos(O),
            T = Math.sin(O),
            w = e * y + i * T,
            x = n * y + a * T,
            b = l * y + _ * T,
            P = c * y + m * T,
            i = e * -T + i * y,
            a = n * -T + a * y,
            _ = l * -T + _ * y,
            m = c * -T + m * y,
            e = w,
            n = x,
            l = b,
            c = P),
            1 !== I && (i *= I,
            a *= I,
            _ *= I,
            m *= I),
            1 !== M && (e *= M,
            n *= M,
            l *= M,
            c *= M),
            1 !== D && (t *= D,
            r *= D,
            h *= D,
            f *= D),
            g && (u -= g,
            s = i * u,
            o = a * u,
            u = _ * u + g),
            s = (w = (s += A.x) - (s |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + s : s,
            o = (w = (o += A.y) - (o |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + o : o,
            u = (w = (u += A.z) - (u |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + u : u,
            C[ye] = "matrix3d(" + [(0 | t * v) / v, (0 | r * v) / v, (0 | h * v) / v, (0 | f * v) / v, (0 | e * v) / v, (0 | n * v) / v, (0 | l * v) / v, (0 | c * v) / v, (0 | i * v) / v, (0 | a * v) / v, (0 | _ * v) / v, (0 | m * v) / v, s, o, u, d ? 1 + -u / d : 1].join(",") + ")"
        }
          , Se = function() {
            var t, e, i, s, r, n, a, o, h, l = this.data, _ = this.t, u = _.style;
            p && (t = u.top ? "top" : u.bottom ? "bottom" : parseFloat(G(_, "top", null, !1)) ? "bottom" : "top",
            e = G(_, t, null, !1),
            i = parseFloat(e) || 0,
            s = e.substr((i + "").length) || "px",
            l._ffFix = !l._ffFix,
            u[t] = (l._ffFix ? i + .05 : i - .05) + s),
            l.rotation || l.skewX ? (r = l.rotation,
            n = r - l.skewX,
            a = 1e5,
            o = l.scaleX * a,
            h = l.scaleY * a,
            u[ye] = "matrix(" + (0 | Math.cos(r) * o) / a + "," + (0 | Math.sin(r) * o) / a + "," + (0 | Math.sin(n) * -h) / a + "," + (0 | Math.cos(n) * h) / a + "," + l.x + "," + l.y + ")") : u[ye] = "matrix(" + l.scaleX + ",0,0," + l.scaleY + "," + l.x + "," + l.y + ")"
        };
        de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
            parser: function(t, e, i, s, n, a, o) {
                if (s._transform)
                    return n;
                var h, l, _, u, p, f, c, m = s._transform = be(t, r, !0, o.parseTransform), d = t.style, g = 1e-6, v = ve.length, y = o, T = {};
                if ("string" == typeof y.transform && ye)
                    _ = d.cssText,
                    d[ye] = y.transform,
                    d.display = "block",
                    h = be(t, null, !1),
                    d.cssText = _;
                else if ("object" == typeof y) {
                    if (h = {
                        scaleX: se(null != y.scaleX ? y.scaleX : y.scale, m.scaleX),
                        scaleY: se(null != y.scaleY ? y.scaleY : y.scale, m.scaleY),
                        scaleZ: se(null != y.scaleZ ? y.scaleZ : y.scale, m.scaleZ),
                        x: se(y.x, m.x),
                        y: se(y.y, m.y),
                        z: se(y.z, m.z),
                        perspective: se(y.transformPerspective, m.perspective)
                    },
                    c = y.directionalRotation,
                    null != c)
                        if ("object" == typeof c)
                            for (_ in c)
                                y[_] = c[_];
                        else
                            y.rotation = c;
                    h.rotation = re("rotation"in y ? y.rotation : "shortRotation"in y ? y.shortRotation + "_short" : "rotationZ"in y ? y.rotationZ : m.rotation * I, m.rotation, "rotation", T),
                    xe && (h.rotationX = re("rotationX"in y ? y.rotationX : "shortRotationX"in y ? y.shortRotationX + "_short" : m.rotationX * I || 0, m.rotationX, "rotationX", T),
                    h.rotationY = re("rotationY"in y ? y.rotationY : "shortRotationY"in y ? y.shortRotationY + "_short" : m.rotationY * I || 0, m.rotationY, "rotationY", T)),
                    h.skewX = null == y.skewX ? m.skewX : re(y.skewX, m.skewX),
                    h.skewY = null == y.skewY ? m.skewY : re(y.skewY, m.skewY),
                    (l = h.skewY - m.skewY) && (h.skewX += l,
                    h.rotation += l)
                }
                for (null != y.force3D && (m.force3D = y.force3D,
                f = !0),
                p = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective,
                p || null == y.scale || (h.scaleZ = 1); --v > -1; )
                    i = ve[v],
                    u = h[i] - m[i],
                    (u > g || -g > u || null != F[i]) && (f = !0,
                    n = new pe(m,i,m[i],u,n),
                    i in T && (n.e = T[i]),
                    n.xs0 = 0,
                    n.plugin = a,
                    s._overwriteProps.push(n.n));
                return u = y.transformOrigin,
                (u || xe && p && m.zOrigin) && (ye ? (f = !0,
                i = we,
                u = (u || G(t, i, r, !1, "50% 50%")) + "",
                n = new pe(d,i,0,0,n,-1,"transformOrigin"),
                n.b = d[i],
                n.plugin = a,
                xe ? (_ = m.zOrigin,
                u = u.split(" "),
                m.zOrigin = (u.length > 2 && (0 === _ || "0px" !== u[2]) ? parseFloat(u[2]) : _) || 0,
                n.xs0 = n.e = d[i] = u[0] + " " + (u[1] || "50%") + " 0px",
                n = new pe(m,"zOrigin",0,0,n,-1,n.n),
                n.b = _,
                n.xs0 = n.e = m.zOrigin) : n.xs0 = n.e = d[i] = u) : ee(u + "", m)),
                f && (s._transformType = p || 3 === this._transformType ? 3 : 2),
                n
            },
            prefix: !0
        }),
        de("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        de("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, a) {
                e = this.format(e);
                var o, h, l, _, u, p, f, c, m, d, g, v, y, T, w, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], P = t.style;
                for (m = parseFloat(t.offsetWidth),
                d = parseFloat(t.offsetHeight),
                o = e.split(" "),
                h = 0; b.length > h; h++)
                    this.p.indexOf("border") && (b[h] = V(b[h])),
                    u = _ = G(t, b[h], r, !1, "0px"),
                    -1 !== u.indexOf(" ") && (_ = u.split(" "),
                    u = _[0],
                    _ = _[1]),
                    p = l = o[h],
                    f = parseFloat(u),
                    v = u.substr((f + "").length),
                    y = "=" === p.charAt(1),
                    y ? (c = parseInt(p.charAt(0) + "1", 10),
                    p = p.substr(2),
                    c *= parseFloat(p),
                    g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p),
                    g = p.substr((c + "").length)),
                    "" === g && (g = s[i] || v),
                    g !== v && (T = $(t, "borderLeft", f, v),
                    w = $(t, "borderTop", f, v),
                    "%" === g ? (u = 100 * (T / m) + "%",
                    _ = 100 * (w / d) + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"),
                    u = T / x + "em",
                    _ = w / x + "em") : (u = T + "px",
                    _ = w + "px"),
                    y && (p = parseFloat(u) + c + g,
                    l = parseFloat(_) + c + g)),
                    a = fe(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: le("0px 0px 0px 0px", !1, !0)
        }),
        de("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, s, n, a) {
                var o, h, l, _, u, p, f = "background-position", m = r || Z(t, null), d = this.format((m ? c ? m.getPropertyValue(f + "-x") + " " + m.getPropertyValue(f + "-y") : m.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = G(t, "backgroundImage").replace(S, ""),
                p && "none" !== p)) {
                    for (o = d.split(" "),
                    h = g.split(" "),
                    L.setAttribute("src", p),
                    l = 2; --l > -1; )
                        d = o[l],
                        _ = -1 !== d.indexOf("%"),
                        _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - L.width : t.offsetHeight - L.height,
                        o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                    d = o.join(" ")
                }
                return this.parseComplex(t.style, d, g, n, a)
            },
            formatter: ee
        }),
        de("backgroundSize", {
            defaultValue: "0 0",
            formatter: ee
        }),
        de("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        de("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        de("transformStyle", {
            prefix: !0
        }),
        de("backfaceVisibility", {
            prefix: !0
        }),
        de("margin", {
            parser: _e("marginTop,marginRight,marginBottom,marginLeft")
        }),
        de("padding", {
            parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        de("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, s, n, a) {
                var o, h, l;
                return 9 > c ? (h = t.currentStyle,
                l = 8 > c ? " " : ",",
                o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")",
                e = this.format(e).split(",").join(l)) : (o = this.format(G(t, this.p, r, !1, this.dflt)),
                e = this.format(e)),
                this.parseComplex(t.style, o, e, n, a)
            }
        }),
        de("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        de("autoRound,strictUnits", {
            parser: function(t, e, i, s, r) {
                return r
            }
        }),
        de("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, s, n, a) {
                return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", r, !1, "0px") + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(he) || ["#000"])[0]
            }
        }),
        de("float,cssFloat,styleFloat", {
            parser: function(t, e, i, s, r) {
                var n = t.style
                  , a = "cssFloat"in n ? "cssFloat" : "styleFloat";
                return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)
            }
        });
        var Re = function(t) {
            var e, i = this.t, s = i.filter || G(this.data, "filter"), r = 0 | this.s + this.c * t;
            100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") ? (i.removeAttribute("filter"),
            e = !G(this.data, "filter")) : (i.filter = s.replace(x, ""),
            e = !0)),
            e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"),
            -1 === s.indexOf("opacity") ? 0 === r && this.xn1 || (i.filter += " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
        };
        de("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, s, n, a) {
                var o = parseFloat(G(t, "opacity", r, !1, "1"))
                  , h = t.style
                  , l = "autoAlpha" === i;
                return e = parseFloat(e),
                l && 1 === o && "hidden" === G(t, "visibility", r) && 0 !== e && (o = 0),
                U ? n = new pe(h,"opacity",o,e - o,n) : (n = new pe(h,"opacity",100 * o,100 * (e - o),n),
                n.xn1 = l ? 1 : 0,
                h.zoom = 1,
                n.type = 2,
                n.b = "alpha(opacity=" + n.s + ")",
                n.e = "alpha(opacity=" + (n.s + n.c) + ")",
                n.data = t,
                n.plugin = a,
                n.setRatio = Re),
                l && (n = new pe(h,"visibility",0,0,n,-1,null,!1,0,0 !== o ? "visible" : "hidden",0 === e ? "hidden" : "visible"),
                n.xs0 = "visible",
                s._overwriteProps.push(n.n)),
                n
            }
        });
        var Ae = function(t, e) {
            e && (t.removeProperty ? t.removeProperty(e.replace(P, "-$1").toLowerCase()) : t.removeAttribute(e))
        }
          , Ce = function(t) {
            if (this.t._gsClassPT = this,
            1 === t || 0 === t) {
                this.t.className = 0 === t ? this.b : this.e;
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Ae(i, e.p),
                    e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.className !== this.e && (this.t.className = this.e)
        };
        de("className", {
            parser: function(t, e, s, n, a, o, h) {
                var l, _, u, p, f, c = t.className, m = t.style.cssText;
                if (a = n._classNamePT = new pe(t,s,0,0,a,2),
                a.setRatio = Ce,
                a.pr = -11,
                i = !0,
                a.b = c,
                _ = W(t, r),
                u = t._gsClassPT) {
                    for (p = {},
                    f = u.data; f; )
                        p[f.p] = 1,
                        f = f._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = a,
                a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                n._tween._duration && (t.className = a.e,
                l = H(t, _, W(t), h, p),
                t.className = c,
                a.data = l.firstMPT,
                t.style.cssText = m,
                a = a.xfirst = n.parse(t, l.difs, a, o)),
                a
            }
        });
        var Oe = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration) {
                if ("all" === this.e)
                    return this.t.style.cssText = "",
                    this.t._gsTransform && delete this.t._gsTransform,
                    void 0;
                for (var e, i = this.t.style, s = this.e.split(","), r = s.length, n = o.transform.parse; --r > -1; )
                    e = s[r],
                    o[e] && (e = o[e].parse === n ? ye : o[e].p),
                    Ae(i, e)
            }
        };
        for (de("clearProps", {
            parser: function(t, e, s, r, n) {
                return n = new pe(t,s,0,0,n,2),
                n.setRatio = Oe,
                n.e = e,
                n.pr = -10,
                n.data = r._tween,
                i = !0,
                n
            }
        }),
        h = "bezier,throwProps,physicsProps,physics2D".split(","),
        ce = h.length; ce--; )
            ge(h[ce]);
        h = a.prototype,
        h._firstPT = null,
        h._onInitTween = function(t, e, o) {
            if (!t.nodeType)
                return !1;
            this._target = t,
            this._tween = o,
            this._vars = e,
            l = e.autoRound,
            i = !1,
            s = e.suffixMap || a.suffixMap,
            r = Z(t, ""),
            n = this._overwriteProps;
            var h, p, c, m, d, g, v, y, T, x = t.style;
            if (_ && "" === x.zIndex && (h = G(t, "zIndex", r),
            ("auto" === h || "" === h) && (x.zIndex = 0)),
            "string" == typeof e && (m = x.cssText,
            h = W(t, r),
            x.cssText = m + ";" + e,
            h = H(t, h, W(t)).difs,
            !U && w.test(e) && (h.opacity = parseFloat(RegExp.$1)),
            e = h,
            x.cssText = m),
            this._firstPT = p = this.parse(t, e, null),
            this._transformType) {
                for (T = 3 === this._transformType,
                ye ? u && (_ = !0,
                "" === x.zIndex && (v = G(t, "zIndex", r),
                ("auto" === v || "" === v) && (x.zIndex = 0)),
                f && (x.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : x.zoom = 1,
                c = p; c && c._next; )
                    c = c._next;
                y = new pe(t,"transform",0,0,null,2),
                this._linkCSSP(y, null, c),
                y.setRatio = T && xe ? ke : ye ? Se : Pe,
                y.data = this._transform || be(t, r, !0),
                n.pop()
            }
            if (i) {
                for (; p; ) {
                    for (g = p._next,
                    c = m; c && c.pr > p.pr; )
                        c = c._next;
                    (p._prev = c ? c._prev : d) ? p._prev._next = p : m = p,
                    (p._next = c) ? c._prev = p : d = p,
                    p = g
                }
                this._firstPT = m
            }
            return !0
        }
        ,
        h.parse = function(t, e, i, n) {
            var a, h, _, u, p, f, c, m, d, g, v = t.style;
            for (a in e)
                f = e[a],
                h = o[a],
                h ? i = h.parse(t, f, a, this, i, n, e) : (p = G(t, a, r) + "",
                d = "string" == typeof f,
                "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && b.test(f) ? (d || (f = oe(f),
                f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"),
                i = fe(v, a, p, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (_ = parseFloat(p),
                c = _ || 0 === _ ? p.substr((_ + "").length) : "",
                ("" === p || "auto" === p) && ("width" === a || "height" === a ? (_ = te(t, a, r),
                c = "px") : "left" === a || "top" === a ? (_ = Q(t, a, r),
                c = "px") : (_ = "opacity" !== a ? 0 : 1,
                c = "")),
                g = d && "=" === f.charAt(1),
                g ? (u = parseInt(f.charAt(0) + "1", 10),
                f = f.substr(2),
                u *= parseFloat(f),
                m = f.replace(y, "")) : (u = parseFloat(f),
                m = d ? f.substr((u + "").length) || "" : ""),
                "" === m && (m = s[a] || c),
                f = u || 0 === u ? (g ? u + _ : u) + m : e[a],
                c !== m && "" !== m && (u || 0 === u) && (_ || 0 === _) && (_ = $(t, a, _, c),
                "%" === m ? (_ /= $(t, a, 100, "%") / 100,
                _ > 100 && (_ = 100),
                e.strictUnits !== !0 && (p = _ + "%")) : "em" === m ? _ /= $(t, a, 1, "em") : (u = $(t, a, u, m),
                m = "px"),
                g && (u || 0 === u) && (f = u + _ + m)),
                g && (u += _),
                !_ && 0 !== _ || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pe(v,a,u || _ || 0,0,i,-1,a,!1,0,p,f),
                i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : p) : j("invalid " + a + " tween value: " + e[a]) : (i = new pe(v,a,_,u - _,i,0,a,l !== !1 && ("px" === m || "zIndex" === a),0,p,f),
                i.xs0 = m)) : i = fe(v, a, p, f, !0, null, i, 0, n)),
                n && i && !i.plugin && (i.plugin = n);
            return i
        }
        ,
        h.setRatio = function(t) {
            var e, i, s, r = this._firstPT, n = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; r; ) {
                        if (e = r.c * t + r.s,
                        r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : n > e && e > -n && (e = 0),
                        r.type)
                            if (1 === r.type)
                                if (s = r.l,
                                2 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1,
                                    s = 1; r.l > s; s++)
                                        i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                }
                            else
                                -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else
                            r.t[r.p] = e + r.xs0;
                        r = r._next
                    }
                else
                    for (; r; )
                        2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t),
                        r = r._next;
            else
                for (; r; )
                    2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t),
                    r = r._next
        }
        ,
        h._enableTransforms = function(t) {
            this._transformType = t || 3 === this._transformType ? 3 : 2,
            this._transform = this._transform || be(this._target, r, !0)
        }
        ,
        h._linkCSSP = function(t, e, i, s) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
            i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t),
            t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next),
            t._next = e,
            t._prev = i),
            t
        }
        ,
        h._kill = function(e) {
            var i, s, r, n = e;
            if (e.autoAlpha || e.alpha) {
                n = {};
                for (s in e)
                    n[s] = e[s];
                n.opacity = 1,
                n.autoAlpha && (n.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst,
            r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next),
            i._next && this._linkCSSP(i._next, i._next._next, r._prev),
            this._classNamePT = null),
            t.prototype._kill.call(this, n)
        }
        ;
        var De = function(t, e, i) {
            var s, r, n, a;
            if (t.slice)
                for (r = t.length; --r > -1; )
                    De(t[r], e, i);
            else
                for (s = t.childNodes,
                r = s.length; --r > -1; )
                    n = s[r],
                    a = n.type,
                    n.style && (e.push(W(n)),
                    i && i.push(n)),
                    1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || De(n, e, i)
        };
        return a.cascadeTo = function(t, i, s) {
            var r, n, a, o = e.to(t, i, s), h = [o], l = [], _ = [], u = [], p = e._internals.reservedProps;
            for (t = o._targets || o.target,
            De(t, l, u),
            o.render(i, !0),
            De(t, _),
            o.render(0, !0),
            o._enabled(!0),
            r = u.length; --r > -1; )
                if (n = H(u[r], l[r], _[r]),
                n.firstMPT) {
                    n = n.difs;
                    for (a in s)
                        p[a] && (n[a] = s[a]);
                    h.push(e.to(u[r], i, n))
                }
            return h
        }
        ,
        t.activate([a]),
        a
    }, !0),
    function() {
        var t = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i,
                !0
            }
        })
          , e = t.prototype;
        e._onInitAllProps = function() {
            for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1; )
                a[r[n]] = 1;
            for (n = r.length; --n > -1; )
                for (t = r[n],
                e = s._firstPT; e; )
                    i = e._next,
                    e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c),
                    i && (i._prev = e._prev),
                    e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i),
                    e._next = e._prev = null,
                    s._propLookup[t] = o),
                    e = i;
            return !1
        }
        ,
        e._add = function(t, e, i, s) {
            this._addTween(t, e, i, i + s, e, !0),
            this._overwriteProps.push(e)
        }
    }(),
    window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        init: function(t, e) {
            var i;
            if ("function" != typeof t.setAttribute)
                return !1;
            this._target = t,
            this._proxy = {};
            for (i in e)
                this._addTween(this._proxy, i, parseFloat(t.getAttribute(i)), e[i], i) && this._overwriteProps.push(i);
            return !0
        },
        set: function(t) {
            this._super.setRatio.call(this, t);
            for (var e, i = this._overwriteProps, s = i.length; --s > -1; )
                e = i[s],
                this._target.setAttribute(e, this._proxy[e] + "")
        }
    }),
    window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        init: function(t, e) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360, l = 1e-6;
            for (i in e)
                "useRadians" !== i && (o = (e[i] + "").split("_"),
                s = o[0],
                r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()),
                n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0,
                a = n - r,
                o.length && (s = o.join("_"),
                -1 !== s.indexOf("short") && (a %= h,
                a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)),
                -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)),
                (a > l || -l > a) && (this._addTween(t, i, r, r + a, i),
                this._overwriteProps.push(i)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                    e = e._next
        }
    })._autoCSS = !0,
    window._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, s, r = window.GreenSockGlobals || window, n = r.com.greensock, a = 2 * Math.PI, o = Math.PI / 2, h = n._class, l = function(e, i) {
            var s = h("easing." + e, function() {}, !0)
              , r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            s
        }, _ = t.register || function() {}
        , u = function(t, e, i, s) {
            var r = h("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new s
            }, !0);
            return _(r, t),
            r
        }, p = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i,
            i.prev = this,
            this.c = i.v - e,
            this.gap = i.t - t)
        }, f = function(e, i) {
            var s = h("easing." + e, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            r.config = function(t) {
                return new s(t)
            }
            ,
            s
        }, c = u("Back", f("BackOut", function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), f("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), f("BackInOut", function(t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), m = h("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = i === !0
        }, !0), d = m.prototype = new t;
        return d.constructor = m,
        d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }
        ,
        m.ease = new m(.7,.7),
        d.config = m.config = function(t, e, i) {
            return new m(t,e,i)
        }
        ,
        e = h("easing.SteppedEase", function(t) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + 1
        }, !0),
        d = e.prototype = new t,
        d.constructor = e,
        d.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            (this._p2 * t >> 0) * this._p1
        }
        ,
        d.config = e.config = function(t) {
            return new e(t)
        }
        ,
        i = h("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, c = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1; )
                i = c ? Math.random() : 1 / u * f,
                s = d ? d.getRatio(i) : i,
                "none" === h ? r = g : "out" === h ? (n = 1 - i,
                r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i,
                r = .5 * n * n * g) : (n = 2 * (1 - i),
                r = .5 * n * n * g),
                c ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r,
                m && (s > 1 ? s = 1 : 0 > s && (s = 0)),
                l[_++] = {
                    x: i,
                    y: s
                };
            for (l.sort(function(t, e) {
                return t.x - e.x
            }),
            o = new p(1,1,null),
            f = u; --f > -1; )
                a = l[f],
                o = new p(a.x,a.y,o);
            this._prev = new p(0,0,0 !== o.t ? o : o.next)
        }, !0),
        d = i.prototype = new t,
        d.constructor = i,
        d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t; )
                    e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        }
        ,
        d.config = function(t) {
            return new i(t)
        }
        ,
        i.ease = new i,
        u("Bounce", l("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1,
            t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        u("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        s = function(e, i, s) {
            var r = h("easing." + e, function(t, e) {
                this._p1 = t || 1,
                this._p2 = e || s,
                this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
            }, !0)
              , n = r.prototype = new t;
            return n.constructor = r,
            n.getRatio = i,
            n.config = function(t, e) {
                return new r(t,e)
            }
            ,
            r
        }
        ,
        u("Elastic", s("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), s("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, .3), s("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .45)),
        u("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        u("Sine", l("SineOut", function(t) {
            return Math.sin(t * o)
        }), l("SineIn", function(t) {
            return -Math.cos(t * o) + 1
        }), l("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })),
        h("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0),
        _(r.SlowMo, "SlowMo", "ease,"),
        _(i, "RoughEase", "ease,"),
        _(e, "SteppedEase", "ease,"),
        c
    }, !0)
}),
function(t) {
    "use strict";
    var e, i, s, r, n, a = t.GreenSockGlobals || t, o = function(t) {
        var e, i = t.split("."), s = a;
        for (e = 0; i.length > e; e++)
            s[i[e]] = s = s[i[e]] || {};
        return s
    }, h = o("com.greensock"), l = [].slice, _ = function() {}, u = {}, p = function(e, i, s, r) {
        this.sc = u[e] ? u[e].sc : [],
        u[e] = this,
        this.gsClass = null,
        this.func = s;
        var n = [];
        this.check = function(h) {
            for (var l, _, f, c, m = i.length, d = m; --m > -1; )
                (l = u[i[m]] || new p(i[m],[])).gsClass ? (n[m] = l.gsClass,
                d--) : h && l.sc.push(this);
            if (0 === d && s)
                for (_ = ("com.greensock." + e).split("."),
                f = _.pop(),
                c = o(_.join("."))[f] = this.gsClass = s.apply(s, n),
                r && (a[f] = c,
                "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").join("/"), [], function() {
                    return c
                }) : "undefined" != typeof module && module.exports && (module.exports = c)),
                m = 0; this.sc.length > m; m++)
                    this.sc[m].check()
        }
        ,
        this.check(!0)
    }, f = t._gsDefine = function(t, e, i, s) {
        return new p(t,e,i,s)
    }
    , c = h._class = function(t, e, i) {
        return e = e || function() {}
        ,
        f(t, [], function() {
            return e
        }, i),
        e
    }
    ;
    f.globals = a;
    var m = [0, 0, 1, 1]
      , d = []
      , g = c("easing.Ease", function(t, e, i, s) {
        this._func = t,
        this._type = i || 0,
        this._power = s || 0,
        this._params = e ? m.concat(e) : m
    }, !0)
      , v = g.map = {}
      , y = g.register = function(t, e, i, s) {
        for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1; )
            for (n = l[_],
            r = s ? c("easing." + n, null, !0) : h.easing[n] || {},
            a = u.length; --a > -1; )
                o = u[a],
                v[n + "." + o] = v[o + n] = r[o] = t.getRatio ? t : t[o] || new t
    }
    ;
    for (s = g.prototype,
    s._calcEnd = !1,
    s.getRatio = function(t) {
        if (this._func)
            return this._params[0] = t,
            this._func.apply(null, this._params);
        var e = this._type
          , i = this._power
          , s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
        return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s),
        1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
    }
    ,
    e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
    i = e.length; --i > -1; )
        s = e[i] + ",Power" + i,
        y(new g(null,null,1,i), s, "easeOut", !0),
        y(new g(null,null,2,i), s, "easeIn" + (0 === i ? ",easeNone" : "")),
        y(new g(null,null,3,i), s, "easeInOut");
    v.linear = h.easing.Linear.easeIn,
    v.swing = h.easing.Quad.easeInOut;
    var T = c("events.EventDispatcher", function(t) {
        this._listeners = {},
        this._eventTarget = t || this
    });
    s = T.prototype,
    s.addEventListener = function(t, e, i, s, a) {
        a = a || 0;
        var o, h, l = this._listeners[t], _ = 0;
        for (null == l && (this._listeners[t] = l = []),
        h = l.length; --h > -1; )
            o = l[h],
            o.c === e && o.s === i ? l.splice(h, 1) : 0 === _ && a > o.pr && (_ = h + 1);
        l.splice(_, 0, {
            c: e,
            s: i,
            up: s,
            pr: a
        }),
        this !== r || n || r.wake()
    }
    ,
    s.removeEventListener = function(t, e) {
        var i, s = this._listeners[t];
        if (s)
            for (i = s.length; --i > -1; )
                if (s[i].c === e)
                    return s.splice(i, 1),
                    void 0
    }
    ,
    s.dispatchEvent = function(t) {
        var e, i, s, r = this._listeners[t];
        if (r)
            for (e = r.length,
            i = this._eventTarget; --e > -1; )
                s = r[e],
                s.up ? s.c.call(s.s || i, {
                    type: t,
                    target: i
                }) : s.c.call(s.s || i)
    }
    ;
    var w = t.requestAnimationFrame
      , x = t.cancelAnimationFrame
      , b = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    for (e = ["ms", "moz", "webkit", "o"],
    i = e.length; --i > -1 && !w; )
        w = t[e[i] + "RequestAnimationFrame"],
        x = t[e[i] + "CancelAnimationFrame"] || t[e[i] + "CancelRequestAnimationFrame"];
    c("Ticker", function(t, e) {
        var i, s, a, o, h, l = this, u = b(), p = e !== !1 && w, f = function(t) {
            l.time = (b() - u) / 1e3;
            var e = a
              , r = l.time - h;
            (!i || r > 0 || t === !0) && (l.frame++,
            h += r + (r >= o ? .004 : o - r),
            l.dispatchEvent("tick")),
            t !== !0 && e === a && (a = s(f))
        };
        T.call(l),
        this.time = this.frame = 0,
        this.tick = function() {
            f(!0)
        }
        ,
        this.sleep = function() {
            null != a && (p && x ? x(a) : clearTimeout(a),
            s = _,
            a = null,
            l === r && (n = !1))
        }
        ,
        this.wake = function() {
            null !== a && l.sleep(),
            s = 0 === i ? _ : p && w ? w : function(t) {
                return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
            }
            ,
            l === r && (n = !0),
            f(2)
        }
        ,
        this.fps = function(t) {
            return arguments.length ? (i = t,
            o = 1 / (i || 60),
            h = this.time + o,
            l.wake(),
            void 0) : i
        }
        ,
        this.useRAF = function(t) {
            return arguments.length ? (l.sleep(),
            p = t,
            l.fps(i),
            void 0) : p
        }
        ,
        l.fps(t),
        setTimeout(function() {
            p && (!a || 5 > l.frame) && l.useRAF(!1)
        }, 1500)
    }),
    s = h.Ticker.prototype = new h.events.EventDispatcher,
    s.constructor = h.Ticker;
    var P = c("core.Animation", function(t, e) {
        if (this.vars = e || {},
        this._duration = this._totalDuration = t || 0,
        this._delay = Number(this.vars.delay) || 0,
        this._timeScale = 1,
        this._active = this.vars.immediateRender === !0,
        this.data = this.vars.data,
        this._reversed = this.vars.reversed === !0,
        N) {
            n || r.wake();
            var i = this.vars.useFrames ? E : N;
            i.add(this, i._time),
            this.vars.paused && this.paused(!0)
        }
    });
    r = P.ticker = new h.Ticker,
    s = P.prototype,
    s._dirty = s._gc = s._initted = s._paused = !1,
    s._totalTime = s._time = 0,
    s._rawPrevTime = -1,
    s._next = s._last = s._onUpdate = s._timeline = s.timeline = null,
    s._paused = !1,
    s.play = function(t, e) {
        return arguments.length && this.seek(t, e),
        this.reversed(!1).paused(!1)
    }
    ,
    s.pause = function(t, e) {
        return arguments.length && this.seek(t, e),
        this.paused(!0)
    }
    ,
    s.resume = function(t, e) {
        return arguments.length && this.seek(t, e),
        this.paused(!1)
    }
    ,
    s.seek = function(t, e) {
        return this.totalTime(Number(t), e !== !1)
    }
    ,
    s.restart = function(t, e) {
        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
    }
    ,
    s.reverse = function(t, e) {
        return arguments.length && this.seek(t || this.totalDuration(), e),
        this.reversed(!0).paused(!1)
    }
    ,
    s.render = function() {}
    ,
    s.invalidate = function() {
        return this
    }
    ,
    s._enabled = function(t, e) {
        return n || r.wake(),
        this._gc = !t,
        this._active = t && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration,
        e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
        !1
    }
    ,
    s._kill = function() {
        return this._enabled(!1, !1)
    }
    ,
    s.kill = function(t, e) {
        return this._kill(t, e),
        this
    }
    ,
    s._uncache = function(t) {
        for (var e = t ? this : this.timeline; e; )
            e._dirty = !0,
            e = e.timeline;
        return this
    }
    ,
    s._swapSelfInParams = function(t) {
        for (var e = t.length, i = t.concat(); --e > -1; )
            "{self}" === t[e] && (i[e] = this);
        return i
    }
    ,
    s.eventCallback = function(t, e, i, s) {
        if ("on" === (t || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length)
                return r[t];
            null == e ? delete r[t] : (r[t] = e,
            r[t + "Params"] = i instanceof Array && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
            r[t + "Scope"] = s),
            "onUpdate" === t && (this._onUpdate = e)
        }
        return this
    }
    ,
    s.delay = function(t) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
        this._delay = t,
        this) : this._delay
    }
    ,
    s.duration = function(t) {
        return arguments.length ? (this._duration = this._totalDuration = t,
        this._uncache(!0),
        this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
        this) : (this._dirty = !1,
        this._duration)
    }
    ,
    s.totalDuration = function(t) {
        return this._dirty = !1,
        arguments.length ? this.duration(t) : this._totalDuration
    }
    ,
    s.time = function(t, e) {
        return arguments.length ? (this._dirty && this.totalDuration(),
        this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
    }
    ,
    s.totalTime = function(t, e, i) {
        if (n || r.wake(),
        !arguments.length)
            return this._totalTime;
        if (this._timeline) {
            if (0 > t && !i && (t += this.totalDuration()),
            this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var s = this._totalDuration
                  , a = this._timeline;
                if (t > s && !i && (t = s),
                this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? s - t : t) / this._timeScale,
                a._dirty || this._uncache(!1),
                a._timeline)
                    for (; a._timeline; )
                        a._timeline._time !== (a._startTime + a._totalTime) / a._timeScale && a.totalTime(a._totalTime, !0),
                        a = a._timeline
            }
            this._gc && this._enabled(!0, !1),
            this._totalTime !== t && this.render(t, e, !1)
        }
        return this
    }
    ,
    s.startTime = function(t) {
        return arguments.length ? (t !== this._startTime && (this._startTime = t,
        this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
        this) : this._startTime
    }
    ,
    s.timeScale = function(t) {
        if (!arguments.length)
            return this._timeScale;
        if (t = t || 1e-6,
        this._timeline && this._timeline.smoothChildTiming) {
            var e = this._pauseTime
              , i = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = i - (i - this._startTime) * this._timeScale / t
        }
        return this._timeScale = t,
        this._uncache(!1)
    }
    ,
    s.reversed = function(t) {
        return arguments.length ? (t != this._reversed && (this._reversed = t,
        this.totalTime(this._totalTime, !0)),
        this) : this._reversed
    }
    ,
    s.paused = function(t) {
        if (!arguments.length)
            return this._paused;
        if (t != this._paused && this._timeline) {
            n || t || r.wake();
            var e = this._timeline
              , i = e.rawTime()
              , s = i - this._pauseTime;
            !t && e.smoothChildTiming && (this._startTime += s,
            this._uncache(!1)),
            this._pauseTime = t ? i : null,
            this._paused = t,
            this._active = !t && this._totalTime > 0 && this._totalTime < this._totalDuration,
            t || 0 === s || 0 === this._duration || this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
        }
        return this._gc && !t && this._enabled(!0, !1),
        this
    }
    ;
    var k = c("core.SimpleTimeline", function(t) {
        P.call(this, 0, t),
        this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    s = k.prototype = new P,
    s.constructor = k,
    s.kill()._gc = !1,
    s._first = s._last = null,
    s._sortChildren = !1,
    s.add = s.insert = function(t, e) {
        var i, s;
        if (t._startTime = Number(e || 0) + t._delay,
        t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
        t.timeline && t.timeline._remove(t, !0),
        t.timeline = t._timeline = this,
        t._gc && t._enabled(!0, !0),
        i = this._last,
        this._sortChildren)
            for (s = t._startTime; i && i._startTime > s; )
                i = i._prev;
        return i ? (t._next = i._next,
        i._next = t) : (t._next = this._first,
        this._first = t),
        t._next ? t._next._prev = t : this._last = t,
        t._prev = i,
        this._timeline && this._uncache(!0),
        this
    }
    ,
    s._remove = function(t, e) {
        return t.timeline === this && (e || t._enabled(!1, !0),
        t.timeline = null,
        t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
        t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
        this._timeline && this._uncache(!0)),
        this
    }
    ,
    s.render = function(t, e, i) {
        var s, r = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; r; )
            s = r._next,
            (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
            r = s
    }
    ,
    s.rawTime = function() {
        return n || r.wake(),
        this._totalTime
    }
    ;
    var S = c("TweenLite", function(e, i, s) {
        if (P.call(this, i, s),
        null == e)
            throw "Cannot tween a null target.";
        this.target = e = "string" != typeof e ? e : S.selector(e) || e;
        var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), h = this.vars.overwrite;
        if (this._overwrite = h = null == h ? F[S.defaultOverwrite] : "number" == typeof h ? h >> 0 : F[h],
        (o || e instanceof Array) && "number" != typeof e[0])
            for (this._targets = a = l.call(e, 0),
            this._propLookup = [],
            this._siblings = [],
            r = 0; a.length > r; r++)
                n = a[r],
                n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1),
                this._targets = a = a.concat(l.call(n, 0))) : (this._siblings[r] = L(n, this, !1),
                1 === h && this._siblings[r].length > 1 && X(n, this, null, 1, this._siblings[r])) : (n = a[r--] = S.selector(n),
                "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
        else
            this._propLookup = {},
            this._siblings = L(e, this, !1),
            1 === h && this._siblings.length > 1 && X(e, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
    }, !0)
      , R = function(e) {
        return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
    }
      , A = function(t, e) {
        var i, s = {};
        for (i in t)
            I[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!O[i] || O[i] && O[i]._autoCSS) || (s[i] = t[i],
            delete t[i]);
        t.css = s
    };
    s = S.prototype = new P,
    s.constructor = S,
    s.kill()._gc = !1,
    s.ratio = 0,
    s._firstPT = s._targets = s._overwrittenProps = s._startAt = null,
    s._notifyPluginsOfEnabled = !1,
    S.version = "1.10.1",
    S.defaultEase = s._ease = new g(null,null,1,1),
    S.defaultOverwrite = "auto",
    S.ticker = r,
    S.autoSleep = !0,
    S.selector = t.$ || t.jQuery || function(e) {
        return t.$ ? (S.selector = t.$,
        t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
    }
    ;
    var C = S._internals = {}
      , O = S._plugins = {}
      , D = S._tweenLookup = {}
      , M = 0
      , I = C.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1
    }
      , F = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        "true": 1,
        "false": 0
    }
      , E = P._rootFramesTimeline = new k
      , N = P._rootTimeline = new k;
    N._startTime = r.time,
    E._startTime = r.frame,
    N._active = E._active = !0,
    P._updateRoot = function() {
        if (N.render((r.time - N._startTime) * N._timeScale, !1, !1),
        E.render((r.frame - E._startTime) * E._timeScale, !1, !1),
        !(r.frame % 120)) {
            var t, e, i;
            for (i in D) {
                for (e = D[i].tweens,
                t = e.length; --t > -1; )
                    e[t]._gc && e.splice(t, 1);
                0 === e.length && delete D[i]
            }
            if (i = N._first,
            (!i || i._paused) && S.autoSleep && !E._first && 1 === r._listeners.tick.length) {
                for (; i && i._paused; )
                    i = i._next;
                i || r.sleep()
            }
        }
    }
    ,
    r.addEventListener("tick", P._updateRoot);
    var L = function(t, e, i) {
        var s, r, n = t._gsTweenID;
        if (D[n || (t._gsTweenID = n = "t" + M++)] || (D[n] = {
            target: t,
            tweens: []
        }),
        e && (s = D[n].tweens,
        s[r = s.length] = e,
        i))
            for (; --r > -1; )
                s[r] === e && s.splice(r, 1);
        return D[n].tweens
    }
      , X = function(t, e, i, s, r) {
        var n, a, o, h;
        if (1 === s || s >= 4) {
            for (h = r.length,
            n = 0; h > n; n++)
                if ((o = r[n]) !== e)
                    o._gc || o._enabled(!1, !1) && (a = !0);
                else if (5 === s)
                    break;
            return a
        }
        var l, _ = e._startTime + 1e-10, u = [], p = 0, f = 0 === e._duration;
        for (n = r.length; --n > -1; )
            (o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || z(e, 0, f),
            0 === z(o, l, f) && (u[p++] = o)) : _ >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + 1e-10 > _ && ((f || !o._initted) && 2e-10 >= _ - o._startTime || (u[p++] = o)));
        for (n = p; --n > -1; )
            o = u[n],
            2 === s && o._kill(i, t) && (a = !0),
            (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
        return a
    }
      , z = function(t, e, i) {
        for (var s = t._timeline, r = s._timeScale, n = t._startTime, a = 1e-10; s._timeline; ) {
            if (n += s._startTime,
            r *= s._timeScale,
            s._paused)
                return -100;
            s = s._timeline
        }
        return n /= r,
        n > e ? n - e : i && n === e || !t._initted && 2 * a > n - e ? a : (n += t.totalDuration() / t._timeScale / r) > e + a ? 0 : n - e - a
    };
    s._init = function() {
        var t, e, i, s, r = this.vars, n = this._overwrittenProps, a = this._duration, o = r.ease;
        if (r.startAt) {
            if (r.startAt.overwrite = 0,
            r.startAt.immediateRender = !0,
            this._startAt = S.to(this.target, 0, r.startAt),
            r.immediateRender && (this._startAt = null,
            0 === this._time && 0 !== a))
                return
        } else if (r.runBackwards && r.immediateRender && 0 !== a)
            if (this._startAt)
                this._startAt.render(-1, !0),
                this._startAt = null;
            else if (0 === this._time) {
                i = {};
                for (s in r)
                    I[s] && "autoCSS" !== s || (i[s] = r[s]);
                return i.overwrite = 0,
                this._startAt = S.to(this.target, 0, i),
                void 0
            }
        if (this._ease = o ? o instanceof g ? r.easeParams instanceof Array ? o.config.apply(o, r.easeParams) : o : "function" == typeof o ? new g(o,r.easeParams) : v[o] || S.defaultEase : S.defaultEase,
        this._easeType = this._ease._type,
        this._easePower = this._ease._power,
        this._firstPT = null,
        this._targets)
            for (t = this._targets.length; --t > -1; )
                this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], n ? n[t] : null) && (e = !0);
        else
            e = this._initProps(this.target, this._propLookup, this._siblings, n);
        if (e && S._onPluginEvent("_onInitAllProps", this),
        n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
        r.runBackwards)
            for (i = this._firstPT; i; )
                i.s += i.c,
                i.c = -i.c,
                i = i._next;
        this._onUpdate = r.onUpdate,
        this._initted = !0
    }
    ,
    s._initProps = function(e, i, s, r) {
        var n, a, o, h, l, _;
        if (null == e)
            return !1;
        this.vars.css || e.style && e !== t && e.nodeType && O.css && this.vars.autoCSS !== !1 && A(this.vars, e);
        for (n in this.vars) {
            if (_ = this.vars[n],
            I[n])
                _ instanceof Array && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
            else if (O[n] && (h = new O[n])._onInitTween(e, this.vars[n], this)) {
                for (this._firstPT = l = {
                    _next: this._firstPT,
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: !0,
                    n: n,
                    pg: !0,
                    pr: h._priority
                },
                a = h._overwriteProps.length; --a > -1; )
                    i[h._overwriteProps[a]] = this._firstPT;
                (h._priority || h._onInitAllProps) && (o = !0),
                (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
            } else
                this._firstPT = i[n] = l = {
                    _next: this._firstPT,
                    t: e,
                    p: n,
                    f: "function" == typeof e[n],
                    n: n,
                    pg: !1,
                    pr: 0
                },
                l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]),
                l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
            l && l._next && (l._next._prev = l)
        }
        return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && X(e, this, i, this._overwrite, s) ? (this._kill(i, e),
        this._initProps(e, i, s, r)) : o
    }
    ,
    s.render = function(t, e, i) {
        var s, r, n, a = this._time;
        if (t >= this._duration)
            this._totalTime = this._time = this._duration,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
            this._reversed || (s = !0,
            r = "onComplete"),
            0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0,
            this._rawPrevTime > 0 && (r = "onReverseComplete",
            e && (t = -1))),
            this._rawPrevTime = t);
        else if (1e-7 > t)
            this._totalTime = this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== a || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete",
            s = this._reversed),
            0 > t ? (this._active = !1,
            0 === this._duration && (this._rawPrevTime >= 0 && (i = !0),
            this._rawPrevTime = t)) : this._initted || (i = !0);
        else if (this._totalTime = this._time = t,
        this._easeType) {
            var o = t / this._duration
              , h = this._easeType
              , l = this._easePower;
            (1 === h || 3 === h && o >= .5) && (o = 1 - o),
            3 === h && (o *= 2),
            1 === l ? o *= o : 2 === l ? o *= o * o : 3 === l ? o *= o * o * o : 4 === l && (o *= o * o * o * o),
            this.ratio = 1 === h ? 1 - o : 2 === h ? o : .5 > t / this._duration ? o / 2 : 1 - o / 2
        } else
            this.ratio = this._ease.getRatio(t / this._duration);
        if (this._time !== a || i) {
            if (!this._initted) {
                if (this._init(),
                !this._initted)
                    return;
                this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0),
            0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
            this.vars.onStart && (0 !== this._time || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || d))),
            n = this._firstPT; n; )
                n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
                n = n._next;
            this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i),
            e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || d)),
            r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i),
            s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
            this._active = !1),
            !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || d)))
        }
    }
    ,
    s._kill = function(t, e) {
        if ("all" === t && (t = null),
        null == t && (null == e || e === this.target))
            return this._enabled(!1, !1);
        e = "string" != typeof e ? e || this._targets || this.target : S.selector(e) || e;
        var i, s, r, n, a, o, h, l;
        if ((e instanceof Array || R(e)) && "number" != typeof e[0])
            for (i = e.length; --i > -1; )
                this._kill(t, e[i]) && (o = !0);
        else {
            if (this._targets) {
                for (i = this._targets.length; --i > -1; )
                    if (e === this._targets[i]) {
                        a = this._propLookup[i] || {},
                        this._overwrittenProps = this._overwrittenProps || [],
                        s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                        break
                    }
            } else {
                if (e !== this.target)
                    return !1;
                a = this._propLookup,
                s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
            }
            if (a) {
                h = t || a,
                l = t !== s && "all" !== s && t !== a && (null == t || t._tempKill !== !0);
                for (r in h)
                    (n = a[r]) && (n.pg && n.t._kill(h) && (o = !0),
                    n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next),
                    n._next && (n._next._prev = n._prev),
                    n._next = n._prev = null),
                    delete a[r]),
                    l && (s[r] = 1);
                !this._firstPT && this._initted && this._enabled(!1, !1)
            }
        }
        return o
    }
    ,
    s.invalidate = function() {
        return this._notifyPluginsOfEnabled && S._onPluginEvent("_onDisable", this),
        this._firstPT = null,
        this._overwrittenProps = null,
        this._onUpdate = null,
        this._startAt = null,
        this._initted = this._active = this._notifyPluginsOfEnabled = !1,
        this._propLookup = this._targets ? {} : [],
        this
    }
    ,
    s._enabled = function(t, e) {
        if (n || r.wake(),
        t && this._gc) {
            var i, s = this._targets;
            if (s)
                for (i = s.length; --i > -1; )
                    this._siblings[i] = L(s[i], this, !0);
            else
                this._siblings = L(this.target, this, !0)
        }
        return P.prototype._enabled.call(this, t, e),
        this._notifyPluginsOfEnabled && this._firstPT ? S._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
    }
    ,
    S.to = function(t, e, i) {
        return new S(t,e,i)
    }
    ,
    S.from = function(t, e, i) {
        return i.runBackwards = !0,
        i.immediateRender = 0 != i.immediateRender,
        new S(t,e,i)
    }
    ,
    S.fromTo = function(t, e, i, s) {
        return s.startAt = i,
        s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
        new S(t,e,s)
    }
    ,
    S.delayedCall = function(t, e, i, s, r) {
        return new S(e,0,{
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            onCompleteScope: s,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            onReverseCompleteScope: s,
            immediateRender: !1,
            useFrames: r,
            overwrite: 0
        })
    }
    ,
    S.set = function(t, e) {
        return new S(t,0,e)
    }
    ,
    S.killTweensOf = S.killDelayedCallsTo = function(t, e) {
        for (var i = S.getTweensOf(t), s = i.length; --s > -1; )
            i[s]._kill(e, t)
    }
    ,
    S.getTweensOf = function(t) {
        if (null == t)
            return [];
        t = "string" != typeof t ? t : S.selector(t) || t;
        var e, i, s, r;
        if ((t instanceof Array || R(t)) && "number" != typeof t[0]) {
            for (e = t.length,
            i = []; --e > -1; )
                i = i.concat(S.getTweensOf(t[e]));
            for (e = i.length; --e > -1; )
                for (r = i[e],
                s = e; --s > -1; )
                    r === i[s] && i.splice(e, 1)
        } else
            for (i = L(t).concat(),
            e = i.length; --e > -1; )
                i[e]._gc && i.splice(e, 1);
        return i
    }
    ;
    var U = c("plugins.TweenPlugin", function(t, e) {
        this._overwriteProps = (t || "").split(","),
        this._propName = this._overwriteProps[0],
        this._priority = e || 0,
        this._super = U.prototype
    }, !0);
    if (s = U.prototype,
    U.version = "1.10.1",
    U.API = 2,
    s._firstPT = null,
    s._addTween = function(t, e, i, s, r, n) {
        var a, o;
        return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
            _next: this._firstPT,
            t: t,
            p: e,
            s: i,
            c: a,
            f: "function" == typeof t[e],
            n: r || e,
            r: n
        },
        o._next && (o._next._prev = o),
        o) : void 0
    }
    ,
    s.setRatio = function(t) {
        for (var e, i = this._firstPT, s = 1e-6; i; )
            e = i.c * t + i.s,
            i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : s > e && e > -s && (e = 0),
            i.f ? i.t[i.p](e) : i.t[i.p] = e,
            i = i._next
    }
    ,
    s._kill = function(t) {
        var e, i = this._overwriteProps, s = this._firstPT;
        if (null != t[this._propName])
            this._overwriteProps = [];
        else
            for (e = i.length; --e > -1; )
                null != t[i[e]] && i.splice(e, 1);
        for (; s; )
            null != t[s.n] && (s._next && (s._next._prev = s._prev),
            s._prev ? (s._prev._next = s._next,
            s._prev = null) : this._firstPT === s && (this._firstPT = s._next)),
            s = s._next;
        return !1
    }
    ,
    s._roundProps = function(t, e) {
        for (var i = this._firstPT; i; )
            (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e),
            i = i._next
    }
    ,
    S._onPluginEvent = function(t, e) {
        var i, s, r, n, a, o = e._firstPT;
        if ("_onInitAllProps" === t) {
            for (; o; ) {
                for (a = o._next,
                s = r; s && s.pr > o.pr; )
                    s = s._next;
                (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o,
                (o._next = s) ? s._prev = o : n = o,
                o = a
            }
            o = e._firstPT = r
        }
        for (; o; )
            o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
            o = o._next;
        return i
    }
    ,
    U.activate = function(t) {
        for (var e = t.length; --e > -1; )
            t[e].API === U.API && (O[(new t[e])._propName] = t[e]);
        return !0
    }
    ,
    f.plugin = function(t) {
        if (!(t && t.propName && t.init && t.API))
            throw "illegal plugin definition.";
        var e, i = t.propName, s = t.priority || 0, r = t.overwriteProps, n = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_roundProps",
            initAll: "_onInitAllProps"
        }, a = c("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
            U.call(this, i, s),
            this._overwriteProps = r || []
        }, t.global === !0), o = a.prototype = new U(i);
        o.constructor = a,
        a.API = t.API;
        for (e in n)
            "function" == typeof t[e] && (o[n[e]] = t[e]);
        return a.version = t.version,
        U.activate([a]),
        a
    }
    ,
    e = t._gsQueue) {
        for (i = 0; e.length > i; i++)
            e[i]();
        for (s in u)
            u[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
    }
    n = !1
}(window);

function kakaoStart() {
    /**
	 * Kakao Javascript SDK for Kakao Open Platform Service - v1.1.0
	 *
	 * Copyright 2016 Kakao Corp.
	 *
	 * Redistribution and modification in source are not permitted without specific prior written permission.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *    http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    }
    ;
    !function(e) {
        if ("object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module)
            module.exports = e();
        else if ("function" == typeof define && define.amd)
            define([], e);
        else {
            var t;
            t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
            t.Kakao = e()
        }
    }(function() {
        return function e(t, n, r) {
            function o(a, u) {
                if (!n[a]) {
                    if (!t[a]) {
                        var s = "function" == typeof require && require;
                        if (!u && s)
                            return s(a, !0);
                        if (i)
                            return i(a, !0);
                        var l = new Error("Cannot find module '" + a + "'");
                        throw l.code = "MODULE_NOT_FOUND",
                        l
                    }
                    var c = n[a] = {
                        exports: {}
                    };
                    t[a][0].call(c.exports, function(e) {
                        var n = t[a][1][e];
                        return o(n ? n : e)
                    }, c, c.exports, e, t, n, r)
                }
                return n[a].exports
            }
            for (var i = "function" == typeof require && require, a = 0; a < r.length; a++)
                o(r[a]);
            return o
        }({
            1: [function(e, t) {
                t.exports = function() {
                    var t = {}
                      , n = e("./util.js")
                      , r = e("../vendor/userAgent.js")
                      , o = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
                    t.VERSION = "1.1.0",
                    t.KAKAO_AGENT = "sdk/" + t.VERSION + " os/javascript lang/" + (navigator.userLanguage || navigator.language) + " device/" + navigator.platform.replace(/ /g, "_") + " origin/" + encodeURIComponent(o),
                    t.URL = {
                        authorize: "https://kauth.kakao.com/oauth/authorize",
                        loginWidget: "https://kauth.kakao.com/public/widget/login/kakaoLoginWidget.html",
                        apiRemote: "https://kapi.kakao.com/cors/",
                        storyChannel: "https://kauth.kakao.com/story/select_channel",
                        storyShare: "https://story.kakao.com/s/share",
                        channelFollow: "https://story.kakao.com/s/follow",
                        storyIcon: "//dev.kakao.com/sdk/js/resources/story/icon_small.png",
                        universalKakaoLink: "https://talk-apps.kakao.com/scheme/",
                        talkLoginScheme: "kakaokompassauth://authorize",
                        talkLoginRedirectUri: "https://kapi.kakao.com/cors/afterlogin.html",
                        authDomain: "https://kauth.kakao.com"
                    },
                    t.RUNTIME = {
                        appKey: "",
                        accessToken: "",
                        refreshToken: ""
                    },
                    t.DUMMY_KEY = "YOUR APP KEY",
                    t.UA = r();
                    var i = function(e) {
                        Error.prototype.constructor.apply(this, arguments),
                        this.name = "KakaoError",
                        this.message = e
                    };
                    return i.prototype = new Error,
                    t.KakaoError = i,
                    t.isDebug = function() {
                        return !1
                    }
                    ,
                    t.logDebug = function(e) {
                        t.isDebug() && window.console && console.log(JSON.stringify(e))
                    }
                    ,
                    t.validate = function(e, t, n) {
                        if (t(e) !== !0)
                            throw new i("Illegal argument for " + n)
                    }
                    ,
                    t.processRules = function(e, r, o) {
                        e = e || {},
                        r.before && r.before(e),
                        n.isFunction(r.defaults) ? n.defaults(e, r.defaults(e)) : n.defaults(e, r.defaults);
                        var a = r.required || {}
                          , u = n.difference(n.keys(a), n.keys(e));
                        if (u.length)
                            throw new i("Missing required keys: " + u.join(",") + " at " + o);
                        var s = r.optional || {}
                          , l = n.extend({}, a, s)
                          , c = n.difference(n.keys(e), n.keys(l));
                        if (c.length)
                            throw new i("Invalid parameter keys: " + c.join(",") + " at " + o);
                        return n.each(e, function(e, n) {
                            var r = l[n];
                            t.validate(e, r, '"' + n + '" in ' + o)
                        }),
                        r.after && r.after(e),
                        e
                    }
                    ,
                    t.getInstallUrl = function(e, n) {
                        if (t.UA.os.android) {
                            var r = {
                                appkey: t.RUNTIME.appKey,
                                KA: t.KAKAO_AGENT
                            };
                            return "market://details?id=" + e + "&referrer=" + JSON.stringify(r)
                        }
                        return t.UA.os.ios ? "https://itunes.apple.com/app/id" + n : location.href
                    }
                    ,
                    t.isRetinaDisplay = function() {
                        var e = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
                        return window.devicePixelRatio > 1 ? !0 : window.matchMedia && window.matchMedia(e).matches ? !0 : !1
                    }
                    ,
                    t.createHiddenIframe = function(e, t) {
                        var n = document.getElementById(e);
                        return null !== n && n.parentNode.removeChild(n),
                        n = document.createElement("iframe"),
                        n.id = e,
                        n.style.border = "none",
                        n.style.display = "none",
                        n.style.width = "0px",
                        n.style.height = "0px",
                        n.src = t,
                        n
                    }
                    ,
                    t.guardCreateEasyXDM = function(e) {
                        try {
                            return e()
                        } catch (t) {
                            throw t instanceof TypeError ? new i("kakao.js should be loaded from a web server") : new i("EasyXDM -" + t.message)
                        }
                    }
                    ,
                    t.serializeFile = function(e) {
                        return new Promise(function(t, r) {
                            "undefined" == typeof FileReader && r(new i("File API is not supported for this browser."));
                            var o = new FileReader;
                            o.onload = function(e) {
                                try {
                                    t(n.arrayBufferToString(e.target.result))
                                } catch (e) {
                                    r(e)
                                }
                            }
                            ,
                            o.onerror = function() {
                                r(new i("Cannot read file: " + e.name))
                            }
                            ,
                            o.readAsArrayBuffer(e)
                        }
                        )
                    }
                    ,
                    t.popupWindows = {},
                    t.windowOpen = function(e, n, r) {
                        var o = t.popupWindows[n];
                        return o && o.close && !o.closed && o.close(),
                        t.popupWindows[n] = window.open(e, n, r),
                        t.popupWindows[n]
                    }
                    ,
                    t
                }()
            }
            , {
                "../vendor/userAgent.js": 5,
                "./util.js": 4
            }],
            2: [function(e, t) {
                t.exports = function(t) {
                    t.Kakao = t.Kakao || {};
                    var n = t.Kakao
                      , r = e("./util.js")
                      , o = e("./common.js");
                    return n.VERSION = o.VERSION,
                    n.Story = e("./story.js"),
                    n.init = function(e) {
                        if (o.RUNTIME.appKey)
                            throw new o.KakaoError("Kakao.init: Already initialized.");
                        if (!r.isString(e) || e === o.DUMMY_KEY)
                            throw new o.KakaoError("Kakao.init: App key must be provided");
                        o.RUNTIME.appKey = e
                    }
                    ,
                    n.cleanup = function() {
                        n.Auth && n.Auth.cleanup(),
                        n.API && n.API.cleanup(),
                        n.Link && n.Link.cleanup(),
                        n.Story && n.Story.cleanup(),
                        n.Emoticon && n.Emoticon.cleanup(),
                        r.nullify(o.RUNTIME)
                    }
                    ,
                    window.kakaoAsyncInit && window.kakaoAsyncInit(),
                    n
                }(window)
            }
            , {
                "./common.js": 1,
                "./story.js": 3,
                "./util.js": 4
            }],
            3: [function(e, t) {
                t.exports = function() {
                    function t(e, t) {
                        var n = {
                            url: e
                        };
                        return t && (n.text = t),
                        a.extend(n, o()),
                        u.URL.storyShare + "?" + a.buildQueryString(n)
                    }
                    function n(e, t, n, r) {
                        var i = {
                            post: e,
                            appver: u.VERSION,
                            appid: t,
                            apiver: "1.0",
                            appname: n
                        };
                        return r && (i.urlinfo = r),
                        a.extend(i, o()),
                        "storylink://posting?" + a.buildQueryString(i)
                    }
                    function r(e, t) {
                        var n = {
                            id: e.id,
                            type: e.type,
                            hideFollower: !e.showFollowerCount,
                            frameId: t
                        };
                        return a.extend(n, o()),
                        u.URL.channelFollow + "?" + a.buildQueryString(n)
                    }
                    function o() {
                        var e = {
                            kakao_agent: u.KAKAO_AGENT
                        };
                        return u.RUNTIME.appKey && (e.app_key = u.RUNTIME.appKey),
                        e
                    }
                    var i = {}
                      , a = e("./util.js")
                      , u = e("./common.js")
                      , s = e("../vendor/web2app.js")
                      , l = "kakaostory_social_plugin"
                      , c = "width=670, height=471"
                      , f = [];
                    i.createShareButton = function(e) {
                        e = u.processRules(e, d.createShareButton, "Story.createShareButton");
                        var n = a.getElement(e.container);
                        if (!n)
                            throw new u.KakaoError("container is required for KakaoStory share button: pass in element or id");
                        var r = document.createElement("a")
                          , o = document.createElement("img");
                        r.appendChild(o);
                        var i = t(e.url, e.text);
                        r.setAttribute("href", i),
                        r.setAttribute("target", "_blank");
                        var s = function(e) {
                            e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                            u.windowOpen(i, l, c)
                        };
                        a.addEvent(r, "click", s);
                        var p = function() {
                            a.removeEvent(r, "click", s),
                            n.removeChild(r)
                        };
                        f.push(p),
                        o.onload = function(e) {
                            var t, i;
                            n.appendChild(r),
                            u.UA.browser.msie && parseInt(u.UA.browser.version.major) <= 10 ? (t = o.width,
                            i = o.height) : (t = e.target.width,
                            i = e.target.height),
                            o.width = t,
                            o.height = i
                        }
                        ,
                        o.src = u.URL.storyIcon
                    }
                    ,
                    i.share = function(e) {
                        e = u.processRules(e, d.share, "Story.share");
                        var n = t(e.url, e.text);
                        u.windowOpen(n, l, c)
                    }
                    ,
                    i.open = function(e) {
                        e = u.processRules(e, d.open, "Story.open");
                        var t, r, o = (e.text ? e.text + "\n" : "") + (e.url || ""), i = location.hostname || "";
                        e.urlInfo && (t = u.processRules(e.urlInfo, d.openUrlInfo, "Story.open"),
                        r = t.name || "");
                        var a = n(o, i, r || i, JSON.stringify(t))
                          , l = {
                            urlScheme: a,
                            intentURI: "intent:" + a + "#Intent;package=com.kakao.story;end;",
                            appname: "KakaoStory",
                            storeURL: u.getInstallUrl("com.kakao.story", "486244601"),
                            onUnsupportedEnvironment: function() {
                                e.fail && e.fail()
                            }
                        };
                        s(l)
                    }
                    ;
                    var p = 0;
                    i.createFollowButton = function(e) {
                        e = u.processRules(e, d.createFollowButton, "Story.createFollowButton");
                        var t = a.getElement(e.container);
                        if (!t)
                            throw new u.KakaoError("container is required for KakaoStory follow button: pass in element or id");
                        var n = document.createElement("iframe")
                          , o = p++;
                        n.src = r(e, o),
                        n.setAttribute("frameborder", "0"),
                        n.setAttribute("marginwidth", "0"),
                        n.setAttribute("marginheight", "0"),
                        n.setAttribute("scrolling", "no");
                        var i = e.showFollowerCount && "horizontal" === e.type ? 85 : 59
                          , s = e.showFollowerCount && "vertical" === e.type ? 46 : 20;
                        n.style.width = i + "px",
                        n.style.height = s + "px";
                        var l = function(e) {
                            if (e.data && /\.kakao\.com$/.test(e.origin)) {
                                var t = e.data.split(",")
                                  , r = parseInt(t[0], 10)
                                  , a = parseInt(t[1], 10)
                                  , u = parseInt(t[2], 10);
                                if (r !== o)
                                    return;
                                i !== a && (i = a,
                                n.style.width = a + "px"),
                                s !== u && (s = u,
                                n.style.height = u + "px")
                            }
                        };
                        t.appendChild(n),
                        a.addEvent(window, "message", l);
                        var c = function() {
                            a.removeEvent(window, "message", l),
                            t.removeChild(n)
                        };
                        f.push(c)
                    }
                    ;
                    var d = {
                        createShareButton: {
                            required: {
                                container: a.passesOneOf([a.isElement, a.isString])
                            },
                            optional: {
                                url: a.isString,
                                text: a.isString
                            },
                            defaults: function(e) {
                                var t = a.getElement(e.container);
                                return t ? {
                                    url: t.getAttribute("data-url") || location.href
                                } : null
                            }
                        },
                        share: {
                            optional: {
                                url: a.isString,
                                text: a.isString
                            },
                            defaults: {
                                url: location.href
                            }
                        },
                        open: {
                            optional: {
                                url: a.isString,
                                text: a.isString,
                                urlInfo: a.isObject
                            },
                            defaults: {
                                url: location.href
                            }
                        },
                        openUrlInfo: {
                            required: {
                                title: a.isString
                            },
                            optional: {
                                desc: a.isString,
                                name: a.isString,
                                images: a.isArray,
                                imageurl: a.isArray,
                                type: a.isString
                            },
                            defaults: {
                                type: "website"
                            },
                            before: function(e) {
                                e.images && (e.imageurl = e.images,
                                delete e.images)
                            }
                        },
                        createFollowButton: {
                            required: {
                                container: a.passesOneOf([a.isElement, a.isString]),
                                id: a.isString
                            },
                            optional: {
                                type: a.isOneOf(["horizontal", "vertical"]),
                                showFollowerCount: a.isBoolean
                            },
                            defaults: function(e) {
                                var t = a.getElement(e.container);
                                if (t) {
                                    var n = {
                                        type: t.getAttribute("data-type") || "horizontal",
                                        showFollowerCount: "false" !== t.getAttribute("data-show-follower-count")
                                    }
                                      , r = t.getAttribute("data-id");
                                    return r && (n.id = r),
                                    n
                                }
                                return null
                            },
                            after: function(e) {
                                "@" !== e.id.substr(0, 1) && (e.id = "@" + e.id)
                            }
                        }
                    };
                    return i.cleanup = function() {
                        a.each(f, function(e) {
                            e()
                        }),
                        f.length = 0
                    }
                    ,
                    i
                }()
            }
            , {
                "../vendor/web2app.js": 6,
                "./common.js": 1,
                "./util.js": 4
            }],
            4: [function(e, t) {
                t.exports = function() {
                    var e = {}
                      , t = {}
                      , n = Array.prototype
                      , r = Object.prototype
                      , o = n.slice
                      , i = n.concat
                      , a = r.toString
                      , u = r.hasOwnProperty
                      , s = n.forEach
                      , l = n.map
                      , c = n.filter
                      , f = n.every
                      , p = n.some
                      , d = n.indexOf
                      , m = Array.isArray
                      , h = Object.keys
                      , w = e.each = function(n, r, o) {
                        if (null == n)
                            return n;
                        if (s && n.forEach === s)
                            n.forEach(r, o);
                        else if (n.length === +n.length) {
                            for (var i = 0, a = n.length; a > i; i++)
                                if (r.call(o, n[i], i, n) === t)
                                    return
                        } else
                            for (var u = e.keys(n), i = 0, a = u.length; a > i; i++)
                                if (r.call(o, n[u[i]], u[i], n) === t)
                                    return;
                        return n
                    }
                    ;
                    e.map = function(e, t, n) {
                        var r = [];
                        return null == e ? r : l && e.map === l ? e.map(t, n) : (w(e, function(e, o, i) {
                            r.push(t.call(n, e, o, i))
                        }),
                        r)
                    }
                    ,
                    e.filter = function(e, t, n) {
                        var r = [];
                        return null == e ? r : c && e.filter === c ? e.filter(t, n) : (w(e, function(e, o, i) {
                            t.call(n, e, o, i) && r.push(e)
                        }),
                        r)
                    }
                    ,
                    e.every = function(n, r, o) {
                        r || (r = e.identity);
                        var i = !0;
                        return null == n ? i : f && n.every === f ? n.every(r, o) : (w(n, function(e, n, a) {
                            return (i = i && r.call(o, e, n, a)) ? void 0 : t
                        }),
                        !!i)
                    }
                    ;
                    var v = e.any = function(n, r, o) {
                        r || (r = e.identity);
                        var i = !1;
                        return null == n ? i : p && n.some === p ? n.some(r, o) : (w(n, function(e, n, a) {
                            return i || (i = r.call(o, e, n, a)) ? t : void 0
                        }),
                        !!i)
                    }
                    ;
                    return e.contains = function(e, t) {
                        return null == e ? !1 : d && e.indexOf === d ? -1 != e.indexOf(t) : v(e, function(e) {
                            return e === t
                        })
                    }
                    ,
                    e.difference = function(t) {
                        var r = i.apply(n, o.call(arguments, 1));
                        return e.filter(t, function(t) {
                            return !e.contains(r, t)
                        })
                    }
                    ,
                    e.partial = function(t) {
                        var n = o.call(arguments, 1);
                        return function() {
                            for (var r = 0, o = n.slice(), i = 0, a = o.length; a > i; i++)
                                o[i] === e && (o[i] = arguments[r++]);
                            for (; r < arguments.length; )
                                o.push(arguments[r++]);
                            return t.apply(this, o)
                        }
                    }
                    ,
                    e.after = function(e, t) {
                        return function() {
                            return --e < 1 ? t.apply(this, arguments) : void 0
                        }
                    }
                    ,
                    e.keys = function(t) {
                        if (!e.isObject(t))
                            return [];
                        if (h)
                            return h(t);
                        var n = [];
                        for (var r in t)
                            e.has(t, r) && n.push(r);
                        return n
                    }
                    ,
                    e.extend = function(e) {
                        return w(o.call(arguments, 1), function(t) {
                            if (t)
                                for (var n in t)
                                    e[n] = t[n]
                        }),
                        e
                    }
                    ,
                    e.defaults = function(e) {
                        return w(o.call(arguments, 1), function(t) {
                            if (t)
                                for (var n in t)
                                    void 0 === e[n] && (e[n] = t[n])
                        }),
                        e
                    }
                    ,
                    e.isElement = function(e) {
                        return !(!e || 1 !== e.nodeType)
                    }
                    ,
                    e.isArray = m || function(e) {
                        return "[object Array]" == a.call(e)
                    }
                    ,
                    e.isObject = function(e) {
                        return e === Object(e)
                    }
                    ,
                    w(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Blob", "File", "FileList"], function(t) {
                        e["is" + t] = function(e) {
                            return a.call(e) == "[object " + t + "]"
                        }
                    }),
                    e.isBoolean = function(e) {
                        return e === !0 || e === !1 || "[object Boolean]" == a.call(e)
                    }
                    ,
                    e.has = function(e, t) {
                        return u.call(e, t)
                    }
                    ,
                    e.identity = function(e) {
                        return e
                    }
                    ,
                    e.emptyFunc = function() {}
                    ,
                    e.getElement = function(t) {
                        return e.isElement(t) ? t : e.isString(t) ? document.querySelector(t) : null
                    }
                    ,
                    e.addEvent = function(e, t, n) {
                        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
                    }
                    ,
                    e.removeEvent = function(e, t, n) {
                        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
                    }
                    ,
                    e.buildQueryString = function(t, n) {
                        var r = [];
                        for (var o in t)
                            if (t.hasOwnProperty(o)) {
                                var i = t[o];
                                e.isObject(i) && (i = JSON.stringify(i));
                                var a = n === !1 ? o : encodeURIComponent(o)
                                  , u = n === !1 ? i : encodeURIComponent(i);
                                r.push(a + "=" + u)
                            }
                        return r.join("&")
                    }
                    ,
                    e.getRandomString = function() {
                        return Math.random().toString(36).slice(2)
                    }
                    ,
                    e.nullify = function(t) {
                        e.each(t, function(e, n) {
                            t[n] = null
                        })
                    }
                    ,
                    e.isOneOf = function(t) {
                        return e.partial(e.contains, t)
                    }
                    ,
                    e.passesOneOf = function(t) {
                        if (!e.isArray(t))
                            throw new Error("validators should be an Array");
                        return function(n) {
                            return e.any(t, function(e) {
                                return e(n)
                            })
                        }
                    }
                    ,
                    e.isURL = function(e) {
                        var t = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
                        return t.test(e)
                    }
                    ,
                    e.arrayBufferToString = function(e) {
                        var t, n, r, o = "", i = new Uint8Array(e), a = i.length, u = Math.pow(2, 16);
                        for (t = 0; a > t; t += u)
                            n = Math.min(u, a - t),
                            r = i.subarray(t, t + n),
                            o += String.fromCharCode.apply(null, r);
                        return o
                    }
                    ,
                    e.localStorage = function() {
                        var e = {
                            _data: {},
                            setItem: function(e, t) {
                                return this._data[e] = String(t)
                            },
                            getItem: function(e) {
                                return this._data.hasOwnProperty(e) ? this._data[e] : null
                            },
                            removeItem: function(e) {
                                return delete this._data[e]
                            },
                            clear: function() {
                                return this._data = {}
                            }
                        };
                        try {
                            return "localStorage"in window ? window.localStorage : e
                        } catch (t) {
                            return e
                        }
                    }(),
                    e
                }()
            }
            , {}],
            5: [function(e, t) {
                t.exports = function() {
                    var e = function(e) {
                        function t(e) {
                            var t = {}
                              , r = /(dolfin)[ \/]([\w.]+)/.exec(e) || /(edge)[ \/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(e) || ["", "unknown"];
                            return "webkit" === r[1] ? r = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e) || /(android)[ \/]([\w._\-]+);/.exec(e) || [r[0], "safari", r[2]] : "mozilla" === r[1] ? r[1] = /trident/.test(e) ? "msie" : "firefox" : "edge" === r[1] ? r[1] = "spartan" : /polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e) && (r[1] = "polaris"),
                            t[r[1]] = !0,
                            t.name = r[1],
                            t.version = n(r[2]),
                            t
                        }
                        function n(e) {
                            var t = {}
                              , n = e ? e.split(/\.|-|_/) : ["0", "0", "0"];
                            return t.info = n.join("."),
                            t.major = n[0] || "0",
                            t.minor = n[1] || "0",
                            t.patch = n[2] || "0",
                            t
                        }
                        function r(e) {
                            return o(e) ? "pc" : i(e) ? "tablet" : a(e) ? "mobile" : ""
                        }
                        function o(e) {
                            return e.match(/linux|windows (nt|98)|macintosh/) && !e.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/) ? !0 : !1
                        }
                        function i(e) {
                            return e.match(/ipad/) || e.match(/android/) && !e.match(/mobi|mini|fennec/) ? !0 : !1
                        }
                        function a(e) {
                            return e.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/) ? !0 : !1
                        }
                        function u(e) {
                            var t = {}
                              , r = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e) || /(android)[ \/]([\w._\-]+);/.exec(e) || (/android/.test(e) ? ["", "android", "0.0.0"] : !1) || (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e) ? ["", "polaris", "0.0.0"] : !1) || /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(e) || (/(windows)/.test(e) ? ["", "windows", "0.0.0"] : !1) || /(mac) os x ([\w._\-]+)/.exec(e) || (/(linux)/.test(e) ? ["", "linux", "0.0.0"] : !1) || (/webos/.test(e) ? ["", "webos", "0.0.0"] : !1) || /(bada)[ \/]([\w._\-]+)/.exec(e) || (/bada/.test(e) ? ["", "bada", "0.0.0"] : !1) || (/(rim|blackberry|bb10)/.test(e) ? ["", "blackberry", "0.0.0"] : !1) || ["", "unknown", "0.0.0"];
                            return "iphone" === r[1] || "ipad" === r[1] || "ipod" === r[1] ? r[1] = "ios" : "windows" === r[1] && "98" === r[2] && (r[2] = "0.98.0"),
                            t[r[1]] = !0,
                            t.name = r[1],
                            t.version = n(r[2]),
                            t
                        }
                        function s(e) {
                            var t = {}
                              , r = /(crios)[ \/]([\w.]+)/.exec(e) || /(daumapps)[ \/]([\w.]+)/.exec(e) || ["", ""];
                            return r[1] ? (t.isApp = !0,
                            t.name = r[1],
                            t.version = n(r[2])) : t.isApp = !1,
                            t
                        }
                        return e = (e || window.navigator.userAgent).toString().toLowerCase(),
                        {
                            ua: e,
                            browser: t(e),
                            platform: r(e),
                            os: u(e),
                            app: s(e)
                        }
                    };
                    return e
                }()
            }
            , {}],
            6: [function(e, t) {
                t.exports = function() {
                    function t(e) {
                        window.location.href = e
                    }
                    function n(e) {
                        var n = "function" == typeof e.willInvokeApp ? e.willInvokeApp : function() {}
                          , i = "function" == typeof e.onAppMissing ? e.onAppMissing : t
                          , s = "function" == typeof e.onUnsupportedEnvironment ? e.onUnsupportedEnvironment : function() {}
                        ;
                        n(),
                        k.android ? r() && e.intentURI && !e.useUrlScheme ? a(e.intentURI) : e.storeURL && o(e.urlScheme, e.storeURL, i) : k.ios && e.storeURL ? u(e.urlScheme, e.storeURL, i, e.universalLink) : setTimeout(function() {
                            s()
                        }, 100)
                    }
                    function r() {
                        var e = g.browser.chrome && +g.browser.version.major >= 25
                          , t = new RegExp(b.join("|"),"i")
                          , n = new RegExp(E.join("|"),"i");
                        return e && !t.test(g.ua) || n.test(g.ua)
                    }
                    function o(e, t, n) {
                        i(v, t, n),
                        p(e)
                    }
                    function i(e, t, n) {
                        var r = (new Date).getTime();
                        return setTimeout(function() {
                            var o = (new Date).getTime();
                            c() && e + y > o - r && n(t)
                        }, e)
                    }
                    function a(e) {
                        function t() {
                            top.location.href = e
                        }
                        g.browser.chrome ? t() : setTimeout(t, 100)
                    }
                    function u(e, t, n, r) {
                        var o = i(w, t, n);
                        parseInt(g.os.version.major, 10) < 8 ? s(o) : l(o),
                        m() ? (void 0 === r ? r = e : clearTimeout(o),
                        f(r)) : p(e)
                    }
                    function s(e) {
                        window.addEventListener("pagehide", function t() {
                            c() && (clearTimeout(e),
                            window.removeEventListener("pagehide", t))
                        })
                    }
                    function l(e) {
                        document.addEventListener("visibilitychange", function t() {
                            c() && (clearTimeout(e),
                            document.removeEventListener("visibilitychange", t))
                        })
                    }
                    function c() {
                        for (var e = ["hidden", "webkitHidden"], t = 0, n = e.length; n > t; t++)
                            if ("undefined" != typeof document[e[t]])
                                return !document[e[t]];
                        return !0
                    }
                    function f(e) {
                        window.top.location.href = e
                    }
                    function p(e) {
                        setTimeout(function() {
                            var t = d("appLauncher");
                            t.src = e
                        }, 100)
                    }
                    function d(e) {
                        var t = document.createElement("iframe");
                        return t.id = e,
                        t.style.border = "none",
                        t.style.width = "0",
                        t.style.height = "0",
                        t.style.display = "none",
                        t.style.overflow = "hidden",
                        document.body.appendChild(t),
                        t
                    }
                    function m() {
                        return parseInt(g.os.version.major, 10) > 8 && g.os.ios
                    }
                    var h = e("./userAgent.js")
                      , w = 2e3
                      , v = 300
                      , y = 100
                      , g = h()
                      , k = g.os
                      , b = ["firefox", "opr"]
                      , E = ["KAKAOTALK"];
                    return n
                }()
            }
            , {
                "./userAgent.js": 5
            }]
        }, {}, [2])(2)
    });

    Kakao.init("40e7ba20bd6673736df7199ff97fcae9");
}

function shareStory(sharekakaourl, sharekakaotext) {
    Kakao.Story.share({
        url: sharekakaourl,
        text: sharekakaotext
    });
}

var sharekakaourl = ""
  , sharekakaotext = ""
  , nowLocationHref_evt = location.href
  , rgEx2 = /(\d{4}|\d{3})/g
  , rgEx3 = /\d{4}$/g
  , rgEx = /(01[016789])[-](\d{4}|\d{3})[-]\d{4}$/g
  , numbersList = ["010", "011", "016", "017", "018", "019", "070"];

function focusPhoneNumber(ipt) {
    alert("정확한 핸드폰 번호를 입력해주세요.");
    $(ipt).focus();
}
function goSendSms(numbers, idx) {
    var phoneNumbeResult = numbers[0].concat(numbers[1], numbers[2])
      , strValue = numbers[0] + "-" + numbers[1] + "-" + numbers[2]
      , imgUrl = "/event/evtls/wpSms.do";
    if (numbers[0] != "" && !rgEx.test(strValue)) {
        alert("정확한 핸드폰 번호를 입력해주세요.");
        return;
    }
    if (idx == "appDn") {
        $.ajax({
            url: "/event/evtls/appSms.do",
            dataType: "json",
            type: "post",
            data: {
                hpNumber: phoneNumbeResult
            },
            success: function(data) {
                $(".event_20160330 .popup.request").hide();
                $(".event_20160330 .popup.complete").show();
                $(".event_20160330 .appDn-hpNumber").val("");
                return;
            },
            error: function() {
                alert("오류가 발생하였습니다. 다시 시도해 주세요.");
                return;
            }
        });
    } else {
        if (idx == 1) {
            imgUrl = "/event/evtls/wpSmsSong.do";
        }
        $.ajax({
            url: imgUrl,
            dataType: "json",
            type: "post",
            data: {
                hpNumber: phoneNumbeResult
            },
            success: function(data) {
                $(".wpDN-hpNumber").val("");
                $(".layer_down").hide();
                alert("해당 번호로 다운로드 URL을 전송하였습니다.")
                return;
            },
            error: function() {
                alert("오류가 발생하였습니다. 다시 시도해 주세요.");
                return;
            }
        });
    }
}
function numberChkTest(numbers, numberIpt, idx) {
    if (numbers.includes("000") || numbers.includes("0000")) {
        focusPhoneNumber(numberIpt + "1");
        return;
    }
    if (!numbersList.includes(numbers[0])) {
        focusPhoneNumber(numberIpt + "1");
        return;
    }
    if (!rgEx2.test(numbers)) {
        focusPhoneNumber(numberIpt + "2");
        return;
    }
    if (!rgEx3.test(numbers)) {
        focusPhoneNumber(numberIpt + "3");
        return;
    }
    goSendSms(numbers, idx);
}
function wpSms(gbn) {
    var phoneNumber01 = $("#wpDN-hpNumber01").val()
      , phoneNumber02 = $("#wpDN-hpNumber02").val()
      , phoneNumber03 = $("#wpDN-hpNumber03").val()
      , numbers = [phoneNumber01, phoneNumber02, phoneNumber03];
    if (phoneNumber01 == "" || phoneNumber02 == "" || phoneNumber03 == "") {
        focusPhoneNumber("#wpDN-hpNumber01");
        return;
    }
    numberChkTest(numbers, "#wpDN-hpNumber0", gbn);
}
function appSms02() {
    var phoneNumber01 = $("#appDn-hpNumber11").val()
      , phoneNumber02 = $("#appDn-hpNumber12").val()
      , phoneNumber03 = $("#appDn-hpNumber13").val()
      , numbers = [phoneNumber01, phoneNumber02, phoneNumber03];
    if (phoneNumber01 == "" || phoneNumber02 == "" || phoneNumber03 == "") {
        focusPhoneNumber("#appDn-hpNumber11");
        return;
    }
    numberChkTest(numbers, "#appDn-hpNumber1", "appDn");
}
function appSms03() {
    if ($("#appDn-hpNumber160428").val() == "") {
        focusPhoneNumber("#appDn-hpNumber160428");
        return;
    }
    var phoneNumbeResult = $("#appDn-hpNumber160428").val();
    $.ajax({
        url: "/event/evtls/appSms.do",
        dataType: "json",
        type: "post",
        data: {
            hpNumber: phoneNumbeResult
        },
        success: function(data) {
            alert("문자 메시지를 발송했습니다.");
            return;
        },
        error: function() {
            alert("오류가 발생하였습니다. 다시 시도해 주세요.");
            return;
        }
    });
    return false;
}
//기프티모아
function giftimoaFunc() {
    $("html").addClass("gifti_moa");
    var midSlideTxt = $(".gifti_moa .mid_slide .slide .txt")
      , slide01 = $(".gifti_moa .mid_slide .slide .slide01")
      , midSlide = $(".gifti_moa .mid_slide .slide")
      , midSlideClass = "0";
    //상단 슬라이드
    $(".gifti_moa .top_area .slide ul").bxSlider({
        pager: false,
        auto: true,
        autoHover: true,
        controls: false,
        speed: 1000,
        pause: 2000,
        autoDelay: 1000,
        mode: "fade"
    });
    giftisliderInit();
    $(".gifti_moa .sms span").click(function() {
        if ($(".gifti_moa .sms input").val() === "") {
            alert("핸드폰 번호를 입력해주세요.");
            $(".gifti_moa .sms input").focus();
        } else if ($(".gifti_moa .sms input").val().length < 10) {
            focusPhoneNumber(".gifti_moa .sms input");
        } else {
            var phoneNumbeResult = $(".gifti_moa .sms input").val();
            $.ajax({
                url: "/event/evtls/sendMsg.do",
                dataType: "json",
                type: "post",
                data: {
                    hpNumber: phoneNumbeResult
                },
                success: function(data) {
                    alert("SMS를 전송하였습니다!")
                    return;
                },
                error: function() {
                    alert("오류가 발생하였습니다. 다시 시도해 주세요.");
                    return;
                }
            });
        }
        return false;
    });
}

function giftisliderInit() {
    var midSlideTxt = $(".gifti_moa .mid_slide .slide .txt")
      , slide01 = $(".gifti_moa .mid_slide .slide .slide01")
      , midSlide = $(".gifti_moa .mid_slide .slide")
      , midSlideClass = "0";
    if (typeof slider == "undefined") {
        slider = $(".gifti_moa .mid_slide .slide01 ul").bxSlider({
            auto: false,
            speed: 400,
            pause: 4000,
            onSlideNext: function(d1, d2, d3) {
                if (d2 === 0) {
                    midSlideClass = "0";
                } else if (d2 === 2) {
                    midSlideClass = "1";
                } else if (d2 === 4) {
                    slide01.removeClass("right");
                    midSlide.css("background-position", "0 -529px");
                    midSlideClass = "2";
                } else if (d2 === 5) {
                    slide01.addClass("right");
                    midSlide.css("background-position", "0 -1058px");
                } else if (d2 === 6) {
                    midSlideClass = "3";
                } else if (d2 === 8) {
                    midSlideClass = "4";
                } else if (d2 === 9) {
                    midSlide.css("background-position", "0 0");
                    slide01.removeClass("right");
                    midSlideClass = "5";
                }
                midSlideTxt.attr("class", "txt bgpos" + midSlideClass);
            },
            onSlidePrev: function(d1, d2, d3) {
                if (d2 === 0) {
                    midSlide.css("background-position", "0 -1058px");
                    slide01.addClass("right");
                    midSlideClass = "4";
                } else if (d2 === 1) {
                    midSlideClass = "5";
                } else if (d2 === 3) {
                    midSlideClass = "0";
                } else if (d2 === 5) {
                    midSlide.css("background-position", "0 0");
                    midSlideClass = "1";
                } else if (d2 === 6) {
                    midSlide.css("background-position", "0 -529px");
                    slide01.removeClass("right");
                } else if (d2 === 7) {
                    midSlideClass = "2";
                } else if (d2 === 9) {
                    midSlideClass = "3";
                }
                midSlideTxt.attr("class", "txt bgpos" + midSlideClass);
            }
        });
    }

    $(window).scroll(function() {
        var yoset = 0;
        if (window.pageYOffset) {
            yoset = Number(window.pageYOffset);
        } else {
            yoset = Number(document.documentElement.scrollTop);
        }
        if (yoset > 600) {
            midSlide.css("background-position", "0 0");
            slide01.removeClass("right");
            midSlideTxt.attr("class", "txt bgpos5");
        }
    });

}
//전단특가
function jundanSaleFunc() {
    var bandWeekDate = new Date(), bandDay = bandWeekDate.getDay(), timeHours = bandWeekDate.getHours(), preBandWeekDate, nextBandWeekDate, bandWeek, preTimeMonth, preTimeDate, nextTimeMonth, nextTimeDate;

    $("#planshopList3,#planshopList4,#planshopList5,#planshopList6,#planshopList7,#planshopList8").addClass("stab_area01");
    $("#planshopList0,#planshopList1,#planshopList2").addClass("jundan_area");
    $(".stab_area01 .planshop_tab").each(function(index) {
        $(".stab_area01 .productimgtype4:eq(" + index + ") ul li").each(function(index03) {
            if ($(this).find('.prc_box span').hasClass('prc_new')) {
                $(this).parents('.productimgtype4').addClass('evt_item_layout');
                var prePrice = $(this).find(".prc_old").html();
                if (prePrice === undefined) {
                    prePrice = '';
                } else {
                    prePrice = $(this).find(".prc_old").html();
                }
                var buyPrice = $(this).find(".prc_new").html();
                $(this).children(".pro").append('<span class="lkprice">' + buyPrice + '<del>' + prePrice + '</del></span>');
                $(this).addClass("slist" + (index03 + 1));
            } else if ($(this).find('td').hasClass('p1')) {
                var price01 = $(this).find(".p1 em").html();
                if (price01 === undefined) {
                    price01 = '';
                } else {
                    price01 = $(this).find(".p1 em").html() + "원";
                }
                var price02 = $(this).find(".p2").html();
                $(this).children(".pro").append('<span class="lkprice"><del>' + price01 + '</del>' + price02 + '</span>')
                $(this).addClass("slist" + (index03 + 1));

            }
        });
    });
    $(".jundan_area .planshop_tab").each(function(index) {
        $(".jundan_area .productimgtype4:eq(" + index + ") ul li").each(function(index03) {
            if ($(this).find('.prc_box span').hasClass('prc_new')) {
                $(this).parents('.productimgtype4').addClass('evt_item_layout');
                var prePrice = $(this).find(".prc_old").html();
                if (prePrice === undefined) {
                    prePrice = '';
                } else {
                    prePrice = $(this).find(".prc_old").html();
                }
                var buyPrice = $(this).find(".prc_new").html();
                $(this).children(".pro").append('<span class="lkprice">' + buyPrice + '<del>' + prePrice + '</del></span>');
                $(this).addClass("slist" + (index03 + 1));
            } else if ($(this).find('td').hasClass('p1')) {
                var price01 = $(this).find(".p1 em").html();
                if (price01 === undefined) {
                    price01 = '';
                } else {
                    price01 = $(this).find(".p1 em").html() + "원";
                }
                var price02 = $(this).find(".p2").html();
                $(this).children(".pro").append('<span class="lkprice">' + price02 + '</span>')
                $(this).addClass("slist" + (index03 + 1));
            }
        });
    })
    $(".stab_area01 .planshop_tab li a").hover(function() {
        var tabIndex = $(this).attr("href");
        $(".stab_area01").hide();
        $(tabIndex).show();
    }, function() {});

    //전단특가 layout 강제변경 20170419
    $("#planshopList0, #planshopList1, #planshopList2").removeClass("stab_area01");
    $("#planshopList0 .planshop_tab, #planshopList1 .planshop_tab, #planshopList2 .planshop_tab").addClass("hidden");
    $(".planshop_tab li:nth-child(1), .planshop_tab li:nth-child(2), .planshop_tab li:nth-child(3)").addClass("hidden");
    $(".jundansale #planshopList0 .productimgtype4 h4, .jundansale #planshopList1 .productimgtype4 h4, .jundansale #planshopList2 .productimgtype4 h4").removeClass("hide");
    $(".jundansale #planshopList2").after("<div class='band_banner'><a href='http://www.dongwonmall.com/display/band.do?cate_id=01120008' class='bn1'></a><a href='http://www.dongwonmall.com/display/band.do?cate_id=01120009' class='bn2'></a><div class='bn3'></div></div>");
    $('.event_20161013 .layer').click(function() {
        $(this).hide();
        return false;
    });

    $('.btn_layer').click(function() {
        $(".event_20161013 .layer").show();
        return false;
    });
    $('.btn_layer').click(function() {
        $(".layer_notice_20161110").show();
        return false;
    });
    $('.layer_notice_20161110').click(function() {
        $(this).hide();
        return false;
    });

    if (timeHours >= 10 && bandDay == 4) {
        preBandWeekDate = bandWeekDate;
        nextBandWeekDate = new Date(Date.parse(bandWeekDate) + 7 * 1000 * 60 * 60 * 24);
    } else if (timeHours < 10 && bandDay == 4) {
        preBandWeekDate = new Date(Date.parse(bandWeekDate) - 7 * 1000 * 60 * 60 * 24);
        nextBandWeekDate = bandWeekDate;
    } else {
        for (var i = 1; i < 7; i++) {
            preBandWeekDate = new Date(Date.parse(bandWeekDate) - i * 1000 * 60 * 60 * 24);
            if (preBandWeekDate.getDay() == 4) {
                break;
            }
        }
        for (var j = 1; j < 7; j++) {
            nextBandWeekDate = new Date(Date.parse(bandWeekDate) + j * 1000 * 60 * 60 * 24);
            if (nextBandWeekDate.getDay() == 4) {
                break;
            }
        }
    }
    preTimeMonth = preBandWeekDate.getMonth() + 1;
    preTimeMonth = preTimeMonth < 10 ? "0" + preTimeMonth : preTimeMonth;
    preTimeDate = preBandWeekDate.getDate();
    preTimeDate = preTimeDate < 10 ? "0" + preTimeDate : preTimeDate;
    nextTimeMonth = nextBandWeekDate.getMonth() + 1;
    nextTimeMonth = nextTimeMonth < 10 ? "0" + nextTimeMonth : nextTimeMonth;
    nextTimeDate = nextBandWeekDate.getDate();
    nextTimeDate = nextTimeDate < 10 ? "0" + nextTimeDate : nextTimeDate;
    bandWeek = preTimeMonth + '. ' + preTimeDate + '  ~  ' + nextTimeMonth + '. ' + nextTimeDate;
    $("#bandWeek")[0].textContent = bandWeek;
}

// 동원몰앱다운
function appDownFunc() {
    var currIndex, mySlider = $(".event_160428 .section04 .bxslider").bxSlider({
        pager: false,
        auto: true,
        speed: 1000,
        autoHover: true,
        captions: true,
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
            currIndex = mySlider.getCurrentSlide();
            $(".event_160428 .section04 .bxslider li img").css({
                "marginTop": "0"
            });
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            currIndex = mySlider.getCurrentSlide();
            // console.log(oldIndex, newIndex, currIndex, 'old,new,curr');
            $(".event_160428 .section04 .bxslider li img").stop().animate({
                "marginTop": "-289px"
            }, 600);
        }
    }), d = new Date(), month = d.getMonth() + 1;
    $(".date").html(month + "월");
    $(".event_160428 .tab a").click(function() {
        var link = $(this).attr("href")
          , offset = $(link).offset();
        $("html, body").animate({
            scrollTop: offset.top
        }, 400);
        return false;
    });
}

// 계열사 바로가기
$.fn.affiliate = function() {
    const affiliateBody = this;
    const affiliateBtn = affiliateBody.find('.js-affiliate');
    const affiliateList = affiliateBody.find('.affiliate-list');
    affiliateBtn.on('click', function(e) {
        e.preventDefault();
        if (affiliateBody.hasClass('opened')) {
            affiliateBody.removeClass('opened');
            affiliateList.stop().slideUp(200);
        } else {
            affiliateBody.addClass('opened');
            affiliateList.stop().slideDown(200);
        }
    });
    affiliateBtn.on('blur', function() {
        affiliateBody.removeClass('opened');
        setTimeout(function() {
            affiliateList.stop().slideUp(200);
        }, 100)
    });
}

var getCookie = function(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
};

var setCookie = function(name, value, day) {
    var date = new Date();
    date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

function PopupNoDisplay_1() {
    setCookie("top-banner-cont", "done", 1);
    //쿠키값 변경
    PopupHide();
}

function PopupHide() {
    //팝업창 지우기
    $('#top-banner-wrap').remove();
}

// 행운의 룰렛 이달의 이벤트 영역에서 노출 비활성화
$(document).ready(function() {
    // if(getCookie("leftbanner") != "yes/"){
    // 	$(".leftbanner_20161114 a").fadeIn();
    // };
    // $(".leftbanner_20161114 .close").on("click", function() {
    // 	setCookie("leftbanner", "yes" , 1);
    // 	$(".leftbanner_20161114 a").fadeOut();
    // })

    /* 임시 기획전 */
    $("#tno18").prev(".tTitle").remove();

    /* 비밀번호 찾기 다시입력 */
    $("#targetPw .input_popup dl dd em").click(function() {
        var valuePw = $("#targetPw .input_popup dl dd");
        valuePw.find("input[name=changepw]").val("");
        valuePw.find("input[name=confirmpw]").val("");
    });

    //동원몰앱다운
    if (nowLocationHref_evt.indexOf(".do?seq=00000001005") > -1 || nowLocationHref_evt.indexOf("000000300397") > -1) {
        appDownFunc();
    }

    /* 밴드배송 전단특가 start */
    if (nowLocationHref_evt.indexOf(".do?seq=00000001433") > -1) {
        jundanSaleFunc();
    }

    //기프티모아
    if (nowLocationHref_evt.indexOf(".do?seq=00000000877") > -1) {
        giftimoaFunc();
    }

    //gnb
    const mun_all = $(".mnu-type");
    const gnb_sub = $(".gnb-sub-wrap");

    mun_all.on("mouseleave", function() {
        gnb_sub.removeClass("active");
    });

    //카테고리 선택자 변경 
    $('.season-menu').on('mouseenter', function() {
        gnb_sub.addClass('active');
        if (gnb_sub.hasClass('active')) {
            gnb_sub.addClass('active');
        }
        return false;
    });

    $('.season-menu').on('mouseleave', function(e) {
        gnb_sub.removeClass('active');
        if (!gnb_sub.hasClass('active')) {
            $(this).removeClass('active');
        }
        return false;
    });

    gnb_sub.hover(function(e) {
        $(this).addClass('active');
        $('.season-menu').addClass('active');
    }, function() {
        $(this).removeClass('active');
        $('.season-menu').removeClass('active');
    });

    // 푸터 계열사 바로가기
    $('.footer .affiliate').affiliate();

    // 헤더 최근검색어
    $(".sch-inp input").on('focusin', function() {
        $(this).addClass("active");
        $(".sch-box").fadeIn();
    });
    $(".sch-inp input").on('focusout', function() {
        $(this).removeClass("active");
        $(".sch-box").fadeOut();
    });
    $(".sch-box").on('mouseleave', function(e) {
        $(this).fadeOut();
    });

    // 탑버튼
    $(".return_top").removeClass('btnon');
    // 탑 버튼 숨김
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1080) {
                // 스크롤 내릴 표시
                $('.return_top').addClass('btnon');
            } else {
                $('.return_top').removeClass('btnon');
            }
        });

        $('.return_top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 200);
            // 탑 이동 스크롤 속도
            return false;
        });
    });

    // 탑배너 열기
    if (document.getElementById("top-banner-cont")) {
        $('.top-banner').show();
        cookiedata = document.cookie;
        if (cookiedata.indexOf("top-banner-cont=done") < 0) {
            //쿠키 변경 여부 불러오기
            document.getElementById('top-banner-cont').style.visibility = "visible";
        } else {
            document.getElementById('top-banner-cont').style.display = "none";
            $('#top-banner-wrap').remove();
        }
    }

    // 딤 클릭 시 팝업 닫기
    $(document).mouseup(function(e) {
        var LayerPopup = $(".popup_dim");
        if (LayerPopup.has(e.target).length === 0) {
            LayerPopup.hide();
        }
    });
});
