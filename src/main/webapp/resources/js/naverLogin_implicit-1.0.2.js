BUTTON_TYPE = 1,
BANNER_SMALL_TYPE = 2,
BANNER_BIG_TYPE = 3,
BUTTON_COLOR_WHITE = "white",
BUTTON_COLOR_GREEN = "green";
var naver_id_login = function(client_id, redirect_uri) {
    this.button_color = BUTTON_COLOR_GREEN,
    this.button_type = BUTTON_TYPE,
    this.button_height = 40,
    this.nil_domain = "",
    this.response_type = "token",
    this.authorize_url = "https://nid.naver.com/oauth2.0/authorize",
    this.state = "",
    this.scope = "",
    this.client_id = client_id,
    this.redirect_uri = redirect_uri,
    this.cookie_name = "nil_state",
    this.popup = !1,
    this.oauthParams = {},
    this.profileParams = {},
    this.is_callback = !1,
    this.callback_status = "",
    this.callback_message = "",
    this.setPopup = function() {
        this.popup = !0
    }
    ,
    this.setState = function(t) {
        this.state = void 0 !== t && "" != t ? t : ""
    }
    ,
    this.setDomain = function(t) {
        this.nil_domain = void 0 !== t && "" != t ? t : ""
    }
    ,
    this.setButton = function(t, e, i) {
        this.button_color = void 0 !== t && "" != t ? t : BUTTON_COLOR_GREEN,
        this.button_type = void 0 !== e && "" != e ? e : BUTTON_TYPE,
        this.button_height = void 0 !== i && "" != i ? i : 40
    }
    ,
    this.getUniqState = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var e = 16 * Math.random() | 0;
            return ("x" === t ? e : 3 & e | 8).toString(16)
        })
    }
    ,
    this.getLocalStorageItemSafely = function() {
        try {
            var t = localStorage.getItem(this.cookie_name);
            return null == t || 0 == t.length ? t : t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        } catch (t) {
            return null
        }
    }
    ,
    this.setStateStore = function() {
        try {
            if ("" != this.nil_domain ? document.cookie = this.cookie_name + "=; path=/; domain=" + this.nil_domain + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;" : document.cookie = this.cookie_name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC",
            localStorage.setItem("nil_state", this.state),
            "" != this.nil_domain) {
                var t = new Date
                  , e = new Date(t.getTime() + 3e5)
                  , i = this.cookie_name + "=" + escape(this.state) + "; expires=" + e.toGMTString() + "; domain=" + this.nil_domain + ";path=/;";
                document.cookie = i
            }
        } catch (a) {
            t = new Date,
            e = new Date(t.getTime() + 3e5),
            i = this.cookie_name + "=" + escape(this.state) + "; expires=" + e.toGMTString() + ";path=/;";
            document.cookie = i
        }
    }
    ,
    this.getNaverIdLoginLink = function() {
        return this.is_callback ? this.state = this.oauthParams.state : this.setStateStore(),
        void 0 == this.client_id || "등록한 ClientID 값" == this.client_id || this.client_id.length < 5 ? (alert("등록한 ClientID 값을 입력해 주세요."),
        !1) : void 0 == this.redirect_uri || "등록한 Callback URL 값" == this.redirect_uri || this.redirect_uri.length < 5 ? (alert("등록한 Callback URL 값을 입력해 주세요."),
        !1) : (call_url = this.authorize_url + "?response_type=" + this.response_type + "&client_id=" + this.client_id + "&redirect_uri=" + encodeURIComponent(this.redirect_uri) + "&state=" + encodeURIComponent(this.state),
        "" != this.scope && (call_url = call_url + "&scope=" + encodeURIComponent(this.scope)),
        call_url)
    }
    ,
    this.init_naver_id_login = function() {
        var t = document.getElementById("naver_id_login");
        if (void 0 == t)
            return alert("id 가 naver_id_login 인 div tag 가 존재해야 합니다."),
            !1;
        "green" == this.button_color ? color = "g" : color = "w",
        t.innerHTML = "",
        naver_id_login_contents = "",
        naver_id_login_url = this.getNaverIdLoginLink(),
        void 0 != this.state && "" != this.state || (this.state = this.getUniqState()),
        naver_id_popup_option = "",
        this.popup && (naver_id_popup_option = " onClick=\"window.open(this.href, 'naverloginpop', 'titlebar=1, resizable=1, scrollbars=yes, width=600, height=550'); return false\" "),
        this.button_type == BUTTON_TYPE ? naver_id_login_contents = "<a href='" + naver_id_login_url + "' " + naver_id_popup_option + " id='naver_id_login_anchor'><img src='http://static.nid.naver.com/oauth/button_" + color + ".PNG' border='0' title='네이버 아이디로 로그인' width='" + this.button_height + "' height='" + this.button_height + "'></a> " : this.button_type == BANNER_SMALL_TYPE ? naver_id_login_contents = "<a href='" + naver_id_login_url + "' " + naver_id_popup_option + " id='naver_id_login_anchor'><img src='http://static.nid.naver.com/oauth/small_" + color + "_in.PNG' border='0' title='네이버 아이디로 로그인' width='" + 656 * this.button_height / 250 + "px' height='" + this.button_height + "'></a> " : naver_id_login_contents = "<a href='" + naver_id_login_url + "' " + naver_id_popup_option + " id='naver_id_login_anchor'><img src='http://static.nid.naver.com/oauth/big_" + color + ".PNG' border='0' title='네이버 아이디로 로그인' width='" + 185 * this.button_height / 40 + "px' height='" + this.button_height + "px'></a> ",
        t.innerHTML = naver_id_login_contents,
        this.is_callback && this.init_naver_id_login_callback()
    }
    ,
    this.checkStateStore = function(t) {
        if (void 0 != this.state || "" == this.state ? state = this.getLocalStorageItemSafely() : state = this.state,
        null != state && state.length > 10) {
            if (state == t) {
                try {
                    localStorage.removeItem(this.cookie_name)
                } catch (t) {}
                return !0
            }
            try {
                localStorage.removeItem(this.cookie_name)
            } catch (t) {}
            return !1
        }
        return void 0 != this.state || "" == this.state ? state = this.getCookie() : state = this.state,
        null != state && state.length > 10 && (state == t ? ("" != this.nil_domain ? document.cookie = this.cookie_name + "=; path=/; domain=" + this.nil_domain + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;" : document.cookie = this.cookie_name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC",
        !0) : ("" != this.nil_domain ? document.cookie = this.cookie_name + "=; path=/; domain=" + this.nil_domain + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;" : document.cookie = this.cookie_name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC",
        !1))
    }
    ,
    this.getCookie = function() {
        for (var t = "nil_state=", e = t.length, i = document.cookie.length, a = 0; a < i; ) {
            var s = a + e;
            if (document.cookie.substring(a, s) == t) {
                var n = document.cookie.indexOf(";", s);
                return -1 == n && (n = document.cookie.length),
                unescape(document.cookie.substring(s, n))
            }
            if (0 == (a = document.cookie.indexOf(" ", a) + 1))
                break
        }
        return null
    }
    ,
    this.parseCallBack = function() {
        for (var t, e = {}, i = (document.location + "").substring(1), a = /([^#?&=]+)=([^&]*)/g; null !== (t = a.exec(i)); )
            e[decodeURIComponent(t[1])] = decodeURIComponent(t[2]);
        this.oauthParams = e
    }
    ,
    this.parseCallBack_check = function() {
        this.parseCallBack(),
        void 0 != this.oauthParams.access_token ? this.is_callback = !0 : this.is_callback = !1
    }
    ,
    this.init_naver_id_login_callback = function() {
        this.parseCallBack_check(),
        this.is_callback && (void 0 == this.oauthParams.error ? void 0 != this.oauthParams.access_token && (this.checkStateStore(this.oauthParams.state) ? (this.callback_status = "success",
        this.callback_message = "state check success") : this.state == this.oauthParams.state ? (this.callback_status = "success",
        this.callback_message = "state check success") : (alert("state 값이 맞이 않습니다."),
        this.callback_status = "warning",
        this.callback_message = "state miss match")) : (this.callback_status = "fail",
        this.callback_message = "invalid access"))
    }
    ,
    this.parseCallBack_check(),
    this.get_naver_userprofile = function(callback_func1) {
        $.ajax({
            url: "https://openapi.naver.com/v1/nid/getUserProfile.json?response_type=json",
            type: "GET",
            data: {
                access_token: this.oauthParams.access_token
            },
            dataType: "jsonp",
            jsonp: "oauth_callback",
            success: function(result) {
                inner_profileParams.age = result.response.age,
                inner_profileParams.birthday = result.response.birthday,
                inner_profileParams.email = result.response.email,
                inner_profileParams.enc_id = result.response.enc_id,
                inner_profileParams.gender = result.response.gender,
                inner_profileParams.id = result.response.id,
                inner_profileParams.nickname = result.response.nickname,
                inner_profileParams.profile_image = result.response.profile_image,
                inner_profileParams.name = result.response.name,
                eval(callback_func1)
            },
            error: function(t, e, i) {
                alert(t.status),
                alert(i)
            }
        })
    }
    ,
    this.getProfileData = function(t) {
        return inner_profileParams[t]
    }
    ,
    this.getOauthMessage = function() {
        return this.callback_message
    }
    ,
    this.getOauthStatus = function() {
        return this.callback_status
    }
    ,
    this.getAccessToken = function() {
        return this.oauthParams.access_token
    }
}
  , inner_profileParams = {};
