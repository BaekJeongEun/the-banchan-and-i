!function(a) {
    a.fn.countdown = function(s) {
        var t, n, e, p, r, o = a.extend({
            callback: function() {},
            starttimestamp: 0,
            endtimestamp: 0,
            dayview: "F"
        }, s), l = 0;
        return function a() {
            var s, c, i = o.starttimestamp.split(","), w = o.endtimestamp.split(",");
            s = new Date(w[0],w[1] - 1,w[2],w[3],w[4],w[5]),
            c = new Date(i[0],i[1] - 1,i[2],i[3],i[4],i[5]),
            (t = Math.floor((s - (Date.parse(c) + 1e3 * l)) / 1e3)) < 0 && (t = 0),
            n = Math.floor(t / 86400),
            t -= 86400 * n,
            e = Math.floor(t / 3600),
            t -= 3600 * e,
            p = Math.floor(t / 60),
            r = t -= 60 * p;
            var h, d, g = "", m = "";
            twelMessage = n + "일",
            "T" == o.dayview && (g += "<span class='txt_day'><strong><span>" + n + "</span></strong>일</span>"),
            g += "<span class='txt_hour'><strong><span>" + (d = (h = "" + (e < 10 ? e = "0" + e : e)).charAt(0)) + "</span><span>" + (m = h.charAt(1)) + "</span></strong></span><span class='dash'>:</span>",
            "twel" == o.dayview && (twelMessage += d + m + "시"),
            g += "<span class='txt_minute'><strong><span>" + (d = (h = "" + (p < 10 ? p = "0" + p : p)).charAt(0)) + "</span><span>" + (m = h.charAt(1)) + "</span></strong></span><span class='dash'>:</span>",
            "twel" == o.dayview && (twelMessage += d + m + "분"),
            g += "<span class='txt_second'><strong><span>" + (d = (h = "" + (r < 10 ? r = "0" + r : r)).charAt(0)) + "</span><span>" + (m = h.charAt(1)) + "</span></strong></span>",
            "twel" == o.dayview && (twelMessage += d + m + "초",
            g = twelMessage),
            o.callback(g),
            l++,
            ticktime = setTimeout(a, 1e3)
        }(),
        this
    }
}(jQuery);
