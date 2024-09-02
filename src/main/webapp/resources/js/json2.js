this.JSON || (this.JSON = {}),
function() {
    "use strict";
    function f(t) {
        return t < 10 ? "0" + t : t
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(t) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }
    ,
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(t) {
        return this.valueOf()
    }
    );
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    function quote(t) {
        return escapable.lastIndex = 0,
        escapable.test(t) ? '"' + t.replace(escapable, function(t) {
            var e = meta[t];
            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + t + '"'
    }
    function str(t, e) {
        var n, r, f, o, u, i = gap, a = e[t];
        switch (a && "object" == typeof a && "function" == typeof a.toJSON && (a = a.toJSON(t)),
        "function" == typeof rep && (a = rep.call(e, t, a)),
        typeof a) {
        case "string":
            return quote(a);
        case "number":
            return isFinite(a) ? String(a) : "null";
        case "boolean":
        case "null":
            return String(a);
        case "object":
            if (!a)
                return "null";
            if (gap += indent,
            u = [],
            "[object Array]" === Object.prototype.toString.apply(a)) {
                for (o = a.length,
                n = 0; n < o; n += 1)
                    u[n] = str(n, a) || "null";
                return f = 0 === u.length ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + i + "]" : "[" + u.join(",") + "]",
                gap = i,
                f
            }
            if (rep && "object" == typeof rep)
                for (o = rep.length,
                n = 0; n < o; n += 1)
                    "string" == typeof (r = rep[n]) && (f = str(r, a)) && u.push(quote(r) + (gap ? ": " : ":") + f);
            else
                for (r in a)
                    Object.hasOwnProperty.call(a, r) && (f = str(r, a)) && u.push(quote(r) + (gap ? ": " : ":") + f);
            return f = 0 === u.length ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + i + "}" : "{" + u.join(",") + "}",
            gap = i,
            f
        }
    }
    "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, n) {
        var r;
        if (gap = "",
        indent = "",
        "number" == typeof n)
            for (r = 0; r < n; r += 1)
                indent += " ";
        else
            "string" == typeof n && (indent = n);
        if (rep = e,
        e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
            throw new Error("JSON.stringify");
        return str("", {
            "": t
        })
    }
    ),
    "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        var j;
        function walk(t, e) {
            var n, r, f = t[e];
            if (f && "object" == typeof f)
                for (n in f)
                    Object.hasOwnProperty.call(f, n) && (void 0 !== (r = walk(f, n)) ? f[n] = r : delete f[n]);
            return reviver.call(t, e, f)
        }
        if (text = String(text),
        cx.lastIndex = 0,
        cx.test(text) && (text = text.replace(cx, function(t) {
            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        })),
        /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"),
            "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    }
    )
}();
