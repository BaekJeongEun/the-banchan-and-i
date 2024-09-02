/**
 * Debug Log
 */
 if (!window.console) {
    var Console = function() {
        return {
            log : function(message) {
            },
            info : function(message) {
            },
            warn : function(message) {
            },
            error : function(message) {
            }
        };
    };
}

$(document).ready(function(){
    //input 태그에 이모티콘 입력 제한
    $('.emojiblock').off('keyup').on('keyup', function (e) {
        var text = $(this).val();
        emojiTextBlock(text);
    });
});
function emojiTextBlock(obj){
    const emojiRegex = /[\p{Emoji}\p{Emoji_Modifier_Base}\p{Emoji_Component}\p{Extended_Pictographic}]+/gu;
    var filterText = '';
    var text = obj.value + '';
    // 입력 문자열을 한 문자씩 확인
    for (let char of text) {
        // 현재 문자가 이모지에 해당하는지 확인
        if (isNaN(char) && char != '' && char != '#' && char != '*' && char != '♡' && char != '♥' && char != '☆' && char != '★') {
            char = char.replace(emojiRegex, '');
        }
        if(char == '�' || char == '\ud83d' || char == '%' || char == ';' || char == "'" || char == '"'){
            char = char.replace(char, '');
        }
        filterText += char;
    }
    obj.value = filterText;
}

// input 글자수 제어. 한글은 maxLength 해도 뚫림
inputLimitCount = function(obj,cnt) {
    var inputText = obj.value;
    obj.value = inputText.substring(0, cnt);
    obj.maxLength = cnt;
}

// 신고
function declaration(SEQ, name, type) {
    checkLogin().done(
            function(data) {
                if (data.rst) {
                    if (type == "review") {
                        open_scroll_yes_center('/board/declarationPop.do?SEQ='
                                + SEQ + '&name=' + name + '&type=' + type,
                                '_blank', '550', '680'); // 불량글
                    } else if (type == "comment") {
                        open_scroll_yes_center('/board/declarationPop.do?SEQ='
                                + SEQ + '&name=' + name + '&type=' + type,
                                '_blank', '550', '720'); // 불량댓글
                    } else if (type == "error") {
                        open_scroll_yes_center('/board/declarationPop.do?SEQ='
                                + SEQ + '&name=' + name + '&type=' + type,
                                '_blank', '670', '700'); // 오류신고
                    }
                } else {
                    if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?")) {
                        goLogin();
                        return;
                    } else {
                        return;
                    }
                }
            });
}

/*
 * ClassName : Description :
 */
var callJson = {
    call : function(url, fnCallback, params, dataType) {
        if (typeof dataType != 'string') {
            dataType = 'json';
        }

        $.ajax({
            url : url,
            dataType : dataType,
            type : "post",
            data : params,
            success : function(jsonData) {
                if ($.isFunction(fnCallback)) {
                    callJson.callBackFunction(callJson.callback, jsonData,
                            fnCallback);
                }
            },
            error : function(e) {
                console.log(e);
            }
        });
    },
    callback : function(data, func) {
        func.call(this, data);
    },
    callBackFunction : function callBackFunction(func) {
        this.called = 'you';
        if (func.apply === Function.prototype.apply) {
            arguments.shift = Array.prototype.shift;
            arguments.shift().apply(this, arguments);
        }
    }
};

/*
 * ClassName : stringUtil Description : 문자열 관련 Class
 */
var stringUtil = {
    /*
     * 문자열확인 후 문자열 또는 기본값 리턴 str:체크 문자열 def:기본값
     */
    getString : function(str, def) {
        if (str && str != "" && str != undefined) {
            return $.trim(str);
        } else {
            return $.trim(def);
        }
    },
    /*
     * 정수형 확인 후 정수형 또는 기본값 리턴 num:체크 정수형 / def:기본값
     */
    getInt : function(num, def) {
        var val = parseInt(num, 10);

        if (isNaN(val)) {
            return def;
        } else {
            return val;
        }
    },
    /*
     * 공백제거 str: 공백 제거 할 문자열
     */
    trim : function(str) {
        return $.trim(str);
    },
    /*
     * Date
     */
    getDateView : function(regdt) {

        var yyyy = regdt.substring(0, 4);
        var MM = regdt.substring(4, 6) - 1;
        var dd = regdt.substring(6, 8);
        var hh = regdt.substring(8, 10);
        var mm = regdt.substring(10, 12);
        var ss = regdt.substring(12, 14);

        var nowDate = new Date();
        var regDate = new Date(yyyy, MM, dd, hh, mm, ss);

        var ss = Math.floor(nowDate.getTime() - regDate.getTime()) / 1000;
        var mm = Math.floor(ss / 60);
        var hh = Math.floor(mm / 60);
        var day = Math.floor(hh / 24);

        var diff_hour = Math.floor(hh % 24);
        var diff_minute = Math.floor(mm % 60);
        var diff_second = Math.floor(ss % 60);

        // console.log( regdt + ' 계산 시간 : ' + day + '일 ' + diff_hour + ' 시간 ' +
        // diff_minute + ' 분 ' + diff_second + ' 초 ');
        var returnDate = "";
        if (day > 1 || diff_hour > 1) {
            returnDate = regDate.format("yyyy.MM.dd HH:mm");
        } else {
            returnDate = diff_minute + "분 전";
        }

        return returnDate;
    }

};

String.prototype.string = function(len) {
    var s = '', i = 0;
    while (i++ < len) {
        s += this;
    }
    return s;
};
String.prototype.zf = function(len) {
    return "0".string(len - this.length) + this;
};
Number.prototype.zf = function(len) {
    return this.toString().zf(len);
};

Date.prototype.format = function(f) {
    if (!this.valueOf())
        return " ";

    var weekName = [ "일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일" ];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
        case "yyyy":
            return d.getFullYear();
        case "yy":
            return (d.getFullYear() % 1000).zf(2);
        case "MM":
            return (d.getMonth() + 1).zf(2);
        case "dd":
            return d.getDate().zf(2);
        case "E":
            return weekName[d.getDay()];
        case "HH":
            return d.getHours().zf(2);
        case "hh":
            return ((h = d.getHours() % 12) ? h : 12).zf(2);
        case "mm":
            return d.getMinutes().zf(2);
        case "ss":
            return d.getSeconds().zf(2);
        case "a/p":
            return d.getHours() < 12 ? "오전" : "오후";
        default:
            return $1;
        }
    });
};

function fnDateSet(v_start_name, v_end_name, s_year, s_month, s_day, e_year,
        e_month, e_day, seperator) {
    $("#" + v_start_name).val(
            getCalculatedDate(s_year, s_month, s_day, seperator));
    $("#" + v_end_name).val(
            getCalculatedDate(e_year, e_month, e_day, seperator));
}

function getCalculatedDate(iYear, iMonth, iDay, seperator) {
    // 현재 날짜 객체를 얻어옴.
    var gdCurDate = new Date();

    // 현재 날짜에 날짜 게산.
    gdCurDate.setYear(gdCurDate.getFullYear() + iYear);
    gdCurDate.setMonth(gdCurDate.getMonth() + iMonth);
    gdCurDate.setDate(gdCurDate.getDate() + iDay);

    // 실제 사용할 연, 월, 일 변수 받기.
    var giYear = gdCurDate.getFullYear();
    var giMonth = gdCurDate.getMonth() + 1;
    var giDay = gdCurDate.getDate();

    // 월, 일의 자릿수를 2자리로 맞춘다.
    giMonth = "0" + giMonth;
    giMonth = giMonth.substring(giMonth.length - 2, giMonth.length);
    giDay = "0" + giDay;
    giDay = giDay.substring(giDay.length - 2, giDay.length);

    // display 형태 맞추기.
    return giYear + seperator + giMonth + seperator + giDay;
}

/*
 * 날짜 유효성 검사
 */
function isDate(dateStr) {
    try {
        dateStr = dateStr.replace(/-/g, "").replace(/\./g, "");

        var year = Number(dateStr.substring(0, 4));
        var month = Number(dateStr.substring(4, 6));
        var day = Number(dateStr.substring(6, 8));

        // console.log("year : " + year);
        // console.log("month : " + dateStr.substring(4,6));
        // console.log("day : " + dateStr.substring(6,8));
        if (month < 1 || month > 12) { // check month range
            // alert("Month must be between 1 and 12. ");
            return false;
        }
        if (day < 1 || day > 31) {
            // alert("Day must be between 1 and 31. ");
            return false;
        }
        if ((month == 4 || month == 6 || month == 9 || month == 11)
                && day == 31) {
            alert("Month " + month + " doesn't have 31 days!       ");
            return false;
        }
        if (month == 2) { // check for february 29th
            var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
            if (day > 29 || (day == 29 && !isleap)) {
                // alert("February " + year + " doesn't have " + day + " days!
                // ");
                return false;
            }
        }
        return true;
    } catch (e) {
        return false;
    }
}

/*
 * //2011년 09월 11일 오후 03시 45분 42초 //console.log(new Date().format("yyyy년 MM월 dd일
 * a/p hh시 mm분 ss초")); //2011-09-11 //console.log(new
 * Date().format("yyyy-MM-dd")); //'11 09.11 //console.log(new
 * Date().format("'yy MM.dd")); //2011-09-11 일요일 //console.log(new
 * Date().format("yyyy-MM-dd E")); //현재년도 : 2011 //console.log("현재년도 : " + new
 * Date().format("yyyy"));
 */

// SSL
function getSSL(url) {
    return $.ajax({
        url : "/secure/ssl.do",
        dataType : "json",
        type : "post",
        data : {
            "url" : url
        }
    });
}

//로그인 여부체크
function checkLogin(){
    return $.ajax({url:"/secure/checkLogin.do",dataType:"json",type:"post",async:false});
}

//로그인 여부체크(비회원 로그인 포함)
function checkOrderLogin(){
    return $.ajax({url:"/secure/checkOrderLogin.do",dataType:"json",type:"post",async:false});
}

/*
 * 로그인
 */
function goLogin(t) {
    //open_scroll_no_center("/secure/login.do",'_blank', '500', '720');
	if(t === undefined){
		getSSL('secure/login.do').done(function(data){$(location).attr("href",data.url);});
	}else if(t == 'N'){
		//비회원 구매
		getSSL('secure/login.do').done(function(data){$(location).attr("href",data.url + "?type=N");});
	}
}

/*
function goLogin() {
    open_scroll_no_center("/secure/login.do",'_blank', '520', '720');
}
*/

/*
 * 로그아웃
 */
function goLogout(goUrl) {
    getSSL('secure/logout.do').done(
    function(data) {
        $.ajax({
             type: 'GET', dataType: 'jsonp', url: data.url,
             jsonp: 'callback', success:function(json) {
                var result = json.callback;
                if (result == "Y") {
                    var expire = new Date();
                    expire.setSeconds(expire.getSeconds() + 10);
                    document.cookie = "cLpRt" + "=" + escape('out')
                            + "; path=/; expires=" + expire.toGMTString()
                            + ";";
                	  location.href = "/index.do";

                    /* AirBridge */
    		            // 로그아웃
    		            airbridge.events.send("airbridge.user.signout");
    		            airbridge.clearUser();
    		            /* AirBridge end */
                }
            }
        });
    });
    /*
    getSSL('secure/logout.do').done(
            function(data) {
                callJson.call(data.url, function(data) {
                    var result = data.result;
                    if (result == "Y") {
                        var expire = new Date();
                        expire.setSeconds(expire.getSeconds() + 10);
                        document.cookie = "cLpRt" + "=" + escape('out')
                                + "; path=/; expires=" + expire.toGMTString()
                                + ";";
                        location.reload();
                    }
                }, '');
            });*/
}

/*
 * 회원가입
 */
function goJoin() {
    checkLogin().done(function(data) {
        if(data.rst) {
            alert("이미 회원에 가입하셨습니다.\n회원가입은 로그아웃 후 이용해 주십시오.");
            return;
        }else{
            $(location).attr("href", "/member/join/step1.do");
        }
    });
}

/*
 * 장바구니 담기
 * 상품코드 : PB_CODE
 * 상품수량 : PB_CNT
 * 카테고리 : PC_SEQ
 * 상품옵션 : PO_SEQs - (여러개일경우 ,로 구분)
 * 상품옵션상품 : OP_PB_CODEs - (여러개일경우 , 로 구분)
 * 공통 : fnc - 성공시 스크립트 호출 할 경우 함수명
 * 바로구매여부 : ISNONSTOP (Y 바로구매)
 * 임직원몰여부 : EMPLOYEE_MALL_YN (Y 임직원)
 * 팝업여부 : ISPOPUP(Y 팝업)
 *
 * 장바구니 담기
 * 더반찬 골라담기 마스터상품코드 : PICK_PB_CODE
 * 골라담기수량 : PB_CNT : PC_SEQ
 * 구성품상품코드 : PB_CODE - (여러개일경우 _ 로 구분)
 * 공통 : fnc - 성공시 스크립트 호출 할 경우 함수명
 * 바로구매여부 : ISNONSTOP (Y 바로구매)
 *
 */
function commonAddCart(map) {
    var fnc = map["fnc"];
    var ISNONSTOP = map["ISNONSTOP"];
    var ISPOPUP = map["ISPOPUP"];
    var DELIVERY_SEQ = map["DELIVERY_SEQ"];
    var E_SEQ = map["E_SEQ"] == undefined ? "" : map["E_SEQ"];
 	var soldChkUrl = "/product/pr_discontinue_json.do";

	//품절 단종여부 체크
    var disConParam = "pb_Code="+map["PB_CODE"];
    var disConYn = "Y";
    $.ajax({
           type	 : "POST",
           url		 : soldChkUrl,
           data	 : disConParam,
           dataType : 'json',
           async    : false,
           success	 : function(data){
               disConYn = data.disConYn;
                       },
           error    : function(data){ alert( "에러가 발생 하였습니다.1" ); return;}
     });

     if(disConYn == "Y"){
         alert("품절 또는 단종된 상품입니다.");
           return;
     }

    if (ISNONSTOP == "Y" || ISNONSTOP == "R" || ISNONSTOP == "REORDER") {
        var isLogin = false;
        checkOrderLogin().done(function(data) {
            if (!data.rst) {
                isLogin = true;
            }
        });
        if (isLogin) {
        	goLogin('N');
        }
    }

    var result = 0;
    var alertMsg = "";
    var BC_CART_SEQ = "";
    var HID_BP_PB_CODE = "";

    $.ajax({
        type : "POST",
        url : "/order/cart/jsonInsertCartProc.do",
        data : map,
        dataType : 'json',
        async : false,
        success : function(data) {
        	if(data["certify"] == "Y"){
        		result = "1111"; //19금인증필요
        	}else if(data["certify"] == "M"){ //19금 인증만료
        		result = "2222"; //19금인증필요
        		alertMsg = data["alertMsg"];
        	}else if(data["certify"] == "S"){ //19금 인증필요
        		result = "3333"; //19금인증필요
        	}else{
        		   alertMsg = data["alertMsg"];
                   result = data["result"];
                   BC_CART_SEQ = data["BC_CART_SEQ"];
                   HID_BP_PB_CODE = data["PB_CODE"];

                   if(typeof(window["initQuik"]) == "function" && initQuik()){}//우측윙메뉴 새로고침
        	}

        },
        error : function(data) {
            alert("에러가 발생 하였습니다.2");
            return;
        }
    });

    if(result == "1111"){ //19금 인증필요
    	$(location).attr('href',"/secure/login.do?certify=Y");
    	return;
    }else if(result == "2222"){//19금 만료
    	alert(alertMsg);
    	pccV3('certify');
    	return;
    }else if(result == "3333"){//19금 필요
    	open_scroll_no_center("/secure/ageCertPop.do",'_blank', '510', '389');
    	return;
    }else if(result == "9999" || result == "8888"){
        alert(alertMsg);
        return;
    }


    if (ISNONSTOP == "Y") {
        if(ISPOPUP == "Y"){
            $(opener.location).attr('href',"/order/order/orderForm.do?HID_BP_ITEM_SEQ=" + result + "&BC_CART_SEQ=" + BC_CART_SEQ + "&HID_BP_PB_CODE=" + HID_BP_PB_CODE + "&NONSTOP=" + ISNONSTOP);
            this.close();
        }
        else{
            $(location).attr('href',"/order/order/orderForm.do?HID_BP_ITEM_SEQ=" + result + "&BC_CART_SEQ=" + BC_CART_SEQ + "&E_SEQ=" + E_SEQ + "&HID_BP_PB_CODE=" + HID_BP_PB_CODE + "&NONSTOP=" + ISNONSTOP);
        }

    } else if (ISNONSTOP == "R") {
        $(location).attr('href',"/order/order/orderForm_Regular.do?HID_BP_ITEM_SEQ=" + result + "&BC_CART_SEQ=" + BC_CART_SEQ + "&HID_BP_PB_CODE=" + HID_BP_PB_CODE);
    } else if (ISNONSTOP == "REORDER") {
		return {"ITEM_SEQ" : result , "BC_CART_SEQ" : BC_CART_SEQ , "PB_CODE" : HID_BP_PB_CODE};
	}

    if (fnc != null && ISNONSTOP != "Y" && result != "1111" && result != "2222" && result != "3333") {
        this[fnc].apply(this, new Array(alertMsg));
    }
}

/*
 * 체크박스 전체 선택 해제 obj : 전체 클릭 되는 id값 nmObj : 해당 checkbox name값
 */
function setAllCheckBox(obj, nmObj) {

    jQuery("input[name=" + nmObj + "]").each(function() {
        $(this).prop("checked", jQuery("#" + obj).is(":checked"));
    });

}

// 폼체크
function checkForm(type, objv, objv2) {
    if (type == "text") {
        if ($.trim($('[name=' + objv + ']').val()) == '') {
            alert('' + objv2 + ' 입력해주세요');
            $('[name=' + objv + ']').focus();
            return true;
        }
    } else if (type == "radio") {
        if ($(':radio[name=' + objv + ']:checked').length < 1) {
            alert('' + objv2 + ' 선택해주세요');
            $(':radio[name=' + objv + ']:eq(0)').focus();
            return true;
        }
    }
    return false;
}

function checkFormTxt(type, objv, objv2) {
    if (type == "text") {
        if ($.trim($('[name=' + objv + ']').val()) == '') {
            alert(objv2);
            $('[name=' + objv + ']').focus();
            return true;
        }
    } else if (type == "radio") {
        if ($(':radio[name=' + objv + ']:checked').length < 1) {
            alert(objv2);
            $(':radio[name=' + objv + ']:eq(0)').focus();
            return true;
        }
    }
    return false;
}

// 아이핀 인증
function ipin(type) {
    getSSL("ipin/"+type +".do").done(function(data) {
        var CBA_window = window.open(data.url, 'IPINWindow', 'width=450, height=500, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=300, top=200' );
        if(CBA_window == null){
            alert("※ 윈도우 XP SP2 또는 인터넷 익스플로러 7 사용자일 경우에는 \n    화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
        }
    });
}

// 휴대폰인증
function pccV3(type, obj) {
    getSSL("pccV3/"+type +".do").done(function(data) {
        var PCC_window =window.open(data.url+'?'+obj, 'PCCV3Window', 'width=430, height=560, resizable=1, scrollbars=no, status=0, titlebar=0, toolbar=0, left=300, top=200' );
        if(PCC_window == null){
             alert(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 7 사용자일 경우에는 \n    화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
        }
    });
}

/*
 * 콤마 만들기
 */
function setComma(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");

    return x;
}

/*
 * 콤마 제거
 */
function removeComma(val) {
    self.focus();
    return val.split(",").join("");
    // return val.replace(/,/gi,"");
}

/*
 * 숫자만 입력받기
 */
function handlerNum(obj) {
    e = window.event;

    if ((e.keyCode >= 48 && e.keyCode <= 57)
            || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode == 8
            || e.keyCode == 46 || e.keyCode == 37 || e.keyCode == 39
            || e.keyCode == 35 || e.keyCode == 36 || e.keyCode == 9 || e.keyCode == 16) {
        if (e.keyCode == 48 || e.keyCode == 96) {
            if (obj.value == "" || obj.value == '0') {
                e.returnValue = false;
            } else {
                return;
            }
        } else {
            return;
        }
    } else {
        alert('숫자만 입력가능합니다');
        e.returnValue = false;
    }
}

// 숫자만 입력받기(0포함)
function onlyNum(obj) {
    e = window.event;
    if ((e.keyCode >= 48 && e.keyCode <= 57)
            || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode == 8
            || e.keyCode == 46 || e.keyCode == 37 || e.keyCode == 39
            || e.keyCode == 35 || e.keyCode == 36 || e.keyCode == 9
            || e.keyCode == 16) {
    } else {
        alert('숫자만 입력가능합니다');
        e.returnValue = false;
    }
}

// 쿠키
function goAcl(ov) {
    checkLogin().done(function(data) {
        if (data.rst) {
            if(ov!=""){
                $(location).attr("href", ov);
            }
        } else {
            if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?")) {
                goLogin();
            }
        }
    });
}

function goGoldCard(ov) {
    checkLogin().done(function(data) {
        if (data.rst) {
			if(ov!="") {
				if ($("#pr_pop_yn").val() == "Y"){
					opener.document.location.href = ov;
		            self.close();
				} else {
					$(location).attr("href", ov);
				}
            }
        } else {
            if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?")) {
                goLogin();
            }
        }
    });
}

// 쿠폰다운받기
var downCouponROneClick = true;
function downCoupon(ov) {
    checkLogin().done(function(data) {
        if (data.rst) {
			if(downCouponROneClick) {
        		downCouponROneClick = false;
	            $.ajax({
	                url : "/benefit/coupn_proc.do",
	                dataType : "json",
	                type : "post",
	                data : {
	                    "TG" : ov
	                }
	            }).done(function(data) {
					downCouponROneClick = true;
	                // 쇼핑지원금
	                if (data.rtn == '10') {
	                    alert("다운이 완료되었습니다.");
	                    location.reload();
	                } else if (data.rtn == '89') {
	                    alert("이미 다운 받았습니다.");
	                } else if (data.rtn == '87') {
	                    alert("적립 가능시간이 아닙니다.");
	                } else if (data.rtn == '86') {
	                    alert("3만 원 이상 주문 시 리필 받으실 수 있습니다.");
					} else if (data.rtn == '85') {
	                    alert("2만원 이상 2회 이상 주문 시 다운 받을 수 있습니다.");
	                } else if (data.rtn == '88') {
	                    alert("이미 다운 받으셨습니다.");
	                } else if (data.rtn == '90') {
	    				alert("앱에서만 받을 수 있는 쿠폰입니다.");
	                } else if (data.rtn == '91') {
	    				alert("신규회원 전용 쿠폰입니다.");
	                } else if (data.rtn == '00') {
	                    alert("축하합니다. 쿠폰이 발급되었습니다. 발급된 쿠폰은 MY더반찬 > 쿠폰에서 확인 가능합니다.");
	                    location.reload();
	                } else if (data.rtn == '96') {
	                    alert("이미 발급받은 쿠폰입니다.");
	                } else if(data.rtn == '97'){
	                    alert("다운 가능 수량을 초과하였습니다.\nMY더반찬 > 쿠폰에서 확인 가능합니다.");
	                } else if (data.rtn == '98') {
	                    alert("다운 가능한 쿠폰이 아닙니다.");
	                } else if (data.rtn == '95') {
	                    alert("다운로드 가능시간이 아닙니다.");
	                } else if (data.rtn == '94') {
	                    alert("다운 가능한 회원등급이 아닙니다.");
	                    // 씨앗(쿠폰교환)
	                } else if(data.rtn == '93'){
	                    alert("일일 제한 수량이 모두 소진되었습니다.");
	                } else if (data.rtn == '20') {
	                    alert("쿠폰 교환 완료!\nMY더반찬 > 쿠폰에서 확인 가능합니다.");
	                    location.reload();
	                } else if (data.rtn == '78') {
	                    alert("씨앗 사용에 실패했습니다.");
	                } else if (data.rtn == '79') {
	                    alert("교환할 씨앗이 부족합니다.");
	                } else if (data.rtn == '100') {
	                    alert("지금은 등급 산정 시간입니다. 02시 이후 다운로드 가능합니다.");
	                }
	            });
			} else {
        		alert('요청을 처리중입니다.\n잠시만 기다려주세요.');
        	}
        } else {
            if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?")) {
                goLogin();
            }
        }
    });
};


// 쿠폰다운받기 - 리로드 없는 펑션 추가
var downCouponOneClick = true;
function downCoupon_noReload(ov) {
    checkLogin().done(function(data) {
        if (data.rst) {
			if(downCouponOneClick){
        		downCouponOneClick = false;
				$.ajax({
	                url : "/benefit/coupn_proc.do",
	                dataType : "json",
	                type : "post",
	                data : {
	                    "TG" : ov
	                }
	            }).done(function(data) {
	                // alert(data.rtn);
					downCouponOneClick = true;
	                // 쇼핑지원금
	                if (data.rtn == '10') {
	                    alert("다운이 완료되었습니다.");
	                    location.reload();
	                } else if (data.rtn == '89') {
	                    alert("이미 다운 받았습니다.");
	                } else if (data.rtn == '87') {
	                    alert("적립 가능시간이 아닙니다.");
	                } else if (data.rtn == '86') {
	                    alert("3만 원 이상 주문 시 리필 받으실 수 있습니다.");
	                } else if (data.rtn == '88') {
	                    alert("이미 다운 받으셨습니다.");
	                } else if (data.rtn == '90') {
	    				alert("앱에서만 받을 수 있는 쿠폰입니다.");
	                } else if (data.rtn == '91') {
	    				alert("신규회원 전용 쿠폰입니다.");
	                } else if (data.rtn == '00') {
	                    alert("축하합니다. 쿠폰이 발급되었습니다. 발급된 쿠폰은 MY더반찬 > 쿠폰에서 확인 가능합니다.");
	                } else if (data.rtn == '96') {
	                    alert("이미 발급받은 쿠폰입니다.");
	                } else if(data.rtn == '97'){
	                	if( ov.indexOf("22202") > -1 || ov.indexOf("22201") > -1 || ov.indexOf("22199") > -1 || ov.indexOf("22200") > -1 ){
	                		alert("이미 발급받은 쿠폰입니다.\nMY더반찬 > 쿠폰에서 확인 가능합니다.");
	                	}else{
	                		alert("다운 가능 수량을 초과하였습니다.\nMY더반찬 > 쿠폰에서 확인 가능합니다.");
	                	}
	                } else if (data.rtn == '98') {
	                    alert("다운 가능한 쿠폰이 아닙니다.");
	                } else if (data.rtn == '95') {
	                    alert("다운로드 가능시간이 아닙니다.");
	                } else if (data.rtn == '94') {
	                    alert("다운 가능한 회원등급이 아닙니다.");
	                    // 씨앗(쿠폰교환)
	                } else if(data.rtn == '93'){
	                    alert("일일 제한 수량이 모두 소진되었습니다.");
	                } else if (data.rtn == '20') {
	                    alert("쿠폰 교환 완료!\nMY더반찬 > 쿠폰에서 확인 가능합니다.");
	                    location.reload();
	                } else if (data.rtn == '78') {
	                    alert("씨앗 사용에 실패했습니다.");
	                } else if (data.rtn == '79') {
	                    alert("교환할 씨앗이 부족합니다.");
	                } else if (data.rtn == '100') {
	                    alert("지금은 등급 산정 시간입니다. 02시 이후 다운로드 가능합니다.");
	                }
	            });
			} else {
				alert('요청을 처리중입니다.\n잠시만 기다려주세요.');
			}
		} else {
			if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?")) {
				goLogin();
			}
		}
    });
};


// 쿠폰다운받기 - 완료 액션 없는 펑션 추가
function downCoupon_noSuccessMsg(ov) {
    checkLogin().done(function(data) {
        if (data.rst) {
            $.ajax({
                url : "/benefit/coupn_proc.do",
                dataType : "json",
                type : "post",
                data : {
                    "TG" : ov
                }
            }).done(function(data) {
                // alert(data.rtn);
                // 쇼핑지원금
                if (data.rtn == '10') {
                    return data.rtn;
                } else if (data.rtn == '89') {
                    alert("이미 적립받았습니다.");
                } else if (data.rtn == '87') {
                    alert("적립 가능시간이 아닙니다.");
                } else if (data.rtn == '86') {
                    alert("3만 원 이상 주문 시 리필 받으실 수 있습니다.");
                } else if (data.rtn == '88') {
                    alert("이미 다운 받으셨습니다.");
                } else if (data.rtn == '90') {
	    			alert("앱에서만 받을 수 있는 쿠폰입니다.");
	            } else if (data.rtn == '91') {
	    			alert("신규회원 전용 쿠폰입니다.");
	            } else if (data.rtn == '00') {
                    return data.rtn;
                } else if (data.rtn == '96') {
                    alert("이미 발급받은 쿠폰입니다.");
                } else if(data.rtn == '97'){
                	if( ov.indexOf("22202") > -1 || ov.indexOf("22201") > -1 || ov.indexOf("22199") > -1 || ov.indexOf("22200") > -1 ){
                		alert("이미 발급받은 쿠폰입니다.\nMY더반찬 > 쿠폰에서 확인 가능합니다.");
                	}else{
                		alert("다운 가능 수량을 초과하였습니다.\nMY더반찬 > 쿠폰에서 확인 가능합니다.");
                	}
                } else if (data.rtn == '98') {
                    alert("다운 가능한 쿠폰이 아닙니다.");
                } else if (data.rtn == '95') {
                    alert("다운로드 가능시간이 아닙니다.");
                } else if (data.rtn == '94') {
                    alert("다운 가능한 회원등급이 아닙니다.");
                    // 씨앗(쿠폰교환)
                } else if(data.rtn == '93'){
                    alert("일일 제한 수량이 모두 소진되었습니다.");
                } else if (data.rtn == '20') {
                    alert("쿠폰 교환 완료!\nMY더반찬 > 쿠폰에서 확인 가능합니다.");
                    location.reload();
                } else if (data.rtn == '78') {
                    alert("씨앗 사용에 실패했습니다.");
                } else if (data.rtn == '79') {
                    alert("교환할 씨앗이 부족합니다.");
                } else if (data.rtn == '100') {
                    alert("지금은 등급 산정 시간입니다. 02시 이후 다운로드 가능합니다.");
                }
            });
        } else {
            if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?")) {
                goLogin();
            }
        }
    });
};



function addBookmark(title, url) {
    if(document.all) {
        // IE
        window.external.AddFavorite(url, title);
    }else if (window.chrome) {
        // Chrome
        alert('Ctrl+D 키를 누르면 즐겨찾기에 추가하실 수 있습니다.');
    }else if (window.sidebar) {
        // firefox
        window.sidebar.addPanel(title, url, "");
    }else{
        //그 외 브라우져
        alert('사용하고 계시는 브라우저에서는 이 버튼으로 즐겨찾기를 추가할수 없습니다. 수동으로 링크를 추가해주세요');
    }
};

/*
 * -------------------------------------- 글자제한 onkeyup="getStrByte(this,'#byte',
 * 200);" ----------------------------------------
 */
function getStrByte(obj, tgt, size) {
    var str = obj.value;
    var str_max = size;
    var p = 0;
    var bytes = 0;
    var len_num = 0;
    var str2 = "";

    for (p = 0; p < str.length; p++) {
        (str.charCodeAt(p) > 255) ? bytes += 3 : bytes++; // 한글은 3byte, 영문,
                                                            // 숫자, 공백은 1byte
        if (bytes <= str_max) {
            len_num = p + 1;
        } else {
            alert(size + " byte를 초과 입력할수 없습니다.\n초과된 내용은 자동으로 삭제 됩니다.");
            str2 = str.substr(0, len_num);
            obj.value = str2;
            break;
        }
        $(tgt).text(bytes);
    }
    obj.focus();
}

function changeCount(obj, tgt, size) {
    $(tgt).html($(obj).val().length);

    if($(obj).val().length > size) {
        $(obj).val($(obj).val().substring(0, size));
        $(tgt).html(size);
    }
}

/*
 * 찜하기 상품코드 : PB_CODE 카테고리 : PC_SEQ 임직원몰여부 : EMPLOYEE_MALL_YN (Y 임직원) 공통 : fnc -
 * 성공시 스크립트 호출 할 경우 함수명
 */
function commonAddWish(map) {

    checkLogin().done(function(data) {
        if (data.rst) {
            sendWish(map);
        } else {
            if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?")) {
                goLogin();
            }
        }
    });

}

function sendWish(map) {

    var fnc = map["fnc"];
    var result = 0;

    $.ajax({
        type : "POST",
        url : "/order/cart/jsonInsertWishProc.do",
        data : map,
        dataType : 'json',
        async : false,
        success : function(data) {
            result = data["result"];
            if(typeof(window["initQuik"]) == "function" && initQuik()){}
        },
        error : function(data) {
            alert("에러가 발생 하였습니다.3");
            return;
        }
    });

    if (fnc != null && result != "0") {
        this[fnc].apply();
    }
}


function searchBandNanum(obj){
	var requestObj = obj;
	var returnObj = "N";

	//console.log("dw_web.js.searchBandNanum.requestObj:"+requestObj);

    $.ajax({
        type	 : "POST",
        url		 : "/product/searchBandNanum_json.do",
        data	 : requestObj,
        dataType : 'json',
        async    : false,
        success	 : function(data){
        	//console.log("dw_web.js.searchBandNanum.ajax.data:"+data.isPossibleAddCart);
        	returnObj = data.isPossibleAddCart;
                    },
        error    : function(data){ alert( "에러가 발생 하였습니다.4" ); return;}
    });

    //console.log("dw_web.js.searchBandNanum.returnObj:"+returnObj);
	return returnObj;
}

/*
 * 장바구니 상품코드 : PB_CODE 카테고리 : PC_SEQ 공통 : fnc - 성공시 스크립트 호출 할 경우 함수명
 */
var _CART_OBJ = null;
function addCart() {
    var params = [];
    var obj = arguments[0];
    var pcSeq = arguments[1];
    var pbCode = arguments[2];
    var koostProductYN = arguments[6];
	var a = "pb_Code=" + pbCode,
	        c = "Y";

    if(koostProductYN == null || koostProductYN == ""){
    	koostProductYN = "N";
    }


    _CART_OBJ = obj;
    // alert(arguments.length );
    if (arguments.length == 4) {
        if (arguments[3] == 'N')
            pcSeq = "";
    }


    //쿠폰마케팅 상품 체크
    var cpParam = "pb_Code="+pbCode;
    var cpProductYn = "Y";
    $.ajax({
        type	 : "POST",
        url		 : "/product/cp_product_json.do",
        data	 : cpParam,
        dataType : 'json',
        async    : false,
        success	 : function(data){
            cpProductYn = data.cpProductYn;
                    },
        error    : function(data){ alert( "에러가 발생 하였습니다.5" ); return;}
    });

	var i = "pb_Code=" + pbCode,
        d = 1;
    if ($.ajax({
        type: "POST",
        url: "/product/reqOption_json.do",
        data: {"PB_CODE" : pbCode},
        dataType: "json",
        async: !1,
        success: function(e) {
            d = parseInt(e.reqOptionCount, 10)
        },
        error: function(e) {
            alert("에러가 발생 하였습니다.6")
        }
    }), d > 0){
		alert("옵션 선택상품입니다.\n상세페이지에서 옵션을 선택하세요.");
		return;
	}

    if(cpProductYn == "Y"){
        alert("장바구니에 담을 수 없는 상품입니다.");
        return;
    }


    // 상품옵션
    var PO_SEQs = "";
    // 상품옵션상품
    var OP_SEQs = "";
    // alert(pcSeq);
    params = {
        PB_CODE : pbCode,
        PC_SEQ : pcSeq,
        PB_CNT : 1,
        PO_SEQs : PO_SEQs,
        OP_SEQs : OP_SEQs,
        BP_KOOST_INFO : koostProductYN,
        fnc : "addCartCallback"
    };
    if (arguments.length == 5) {
        var reGularYn = arguments[4];
        // ISNONSTOP
        if (reGularYn == "Y")
            params = {
                PB_CODE : pbCode,
                PC_SEQ : pcSeq,
                PB_CNT : 1,
                PO_SEQs : PO_SEQs,
                OP_SEQs : OP_SEQs,
                BP_KOOST_INFO : koostProductYN,
                "ISNONSTOP" : "R"
            };
    }
    if (arguments.length == 6) {
        var isNonStopYn = arguments[5];
        // ISNONSTOP
        if (isNonStopYn == "Y")
            params = {
                PB_CODE : pbCode,
                PC_SEQ : pcSeq,
                PB_CNT : 1,
                PO_SEQs : PO_SEQs,
                OP_SEQs : OP_SEQs,
                BP_KOOST_INFO : koostProductYN,
                "ISNONSTOP" : "Y"
            };
    }

    commonAddCart(params);
    // 장바구니 담기 팝업 효과 추가
    $('.add-to-cart').addClass('add');
    var popTimeOut = function(){
        $('.layer_box').fadeOut();
    }
    setTimeout(popTimeOut,3000);
}

// w 장바구니콜백
function addCartCallback(arg) {
    $("#cartMsg").html(arg);
    lyAllFadein(_CART_OBJ, '.layer_basket');
}

// 상품 간편보기
function goPrDetailPop() {
    var url = "";
    if(arguments.length == 4){
    	url = "/product/pr_detail_pop.do?productId=" + arguments[0]
        + "&BP_KOOST_INFO=" + arguments[3];
    } else if (arguments.length == 3) {
        url = "/product/pr_detail_pop.do?productId=" + arguments[0]
                + "&cate_id=" + arguments[1] + "&cateYn=" + arguments[2];
    } else if (arguments.length == 2) {
        url = "/product/pr_detail_pop.do?productId=" + arguments[0]
                + "&cate_id=" + arguments[1];
    } else {
        url = "/product/pr_detail_pop.do?productId=" + arguments[0];
    }
    open_scroll_no_center(url, '_blank', '1110', '786');
}

// 상품 새창
function goPrDetailNew() {
    if (arguments.length == 2) {
        $(arguments[1]).attr({
            target : "_blank",
            href : "/product/detail.do?productId=" + arguments[0]
        });
    } else if (arguments.length == 3) {
        $(arguments[2]).attr(
                {
                    target : "_blank",
                    href : "/product/detail.do?productId=" + arguments[0]
                            + "&cate_id=" + arguments[1]
                });
    }
}

/*
 * 찜 상품코드 : PB_CODE 카테고리 : PC_SEQ 임직원몰여부 : EMPLOYEE_MALL_YN (Y 임직원) 공통 : fnc -
 * 성공시 스크립트 호출 할 경우 함수명
 */
var _WISH_OBJ = null;
function addWish() {
    var params = [];

    var obj = arguments[0];
    var pcSeq = arguments[1];
    var pbCode = arguments[2];
    _WISH_OBJ = obj;
    // alert(arguments.length );
    if (arguments.length == 4) {
        if (arguments[3] == 'N')
            pcSeq = "";
    }
    // alert(pcSeq);
    params = {
        PB_CODE : pbCode,
        PC_SEQ : pcSeq,
        fnc : "addWishCallback"
    };

    //밴드플러스 나눔이벤트 상품 체크
    var isPossibleAddWish = "Y";
    isPossibleAddCart = searchBandNanum("pb_Code="+pbCode+"&actionGbn=wish");

    if(isPossibleAddCart == "N"){
    	alert("나눔이벤트 상품 구매 가능 최대 횟수는 매월 밴드/쿨밴드 나눔 상품 각각 1개씩 입니다.\r\n다음 달 나눔 이벤트를 기대해 주세요!");
 	   return;
    }

    commonAddWish(params);
    // 장바구니 담기 팝업 효과 추가
    $('.add-to-cart').addClass('add');
    var popTimeOut = function(){
        $('.layer_box').fadeOut();
    }
    setTimeout(popTimeOut,3000);
}

// w 장바구니콜백
function addWishCallback(arg) {
    // $("#cartMsg").html(arg);
    lyAllFadein(_WISH_OBJ, '.layer_selected');
}

/**
 * 상품상세 페이지 이동 상품평
 */
function goPrDetailReview() {
	if (arguments.length == 1) {
		url = "/product/pr_detail_pop.do?productId=" + arguments[0] + "#tno3";
	} else {
		url = "/product/pr_detail_pop.do?productId=" + arguments[0] + "&cate_id=" + arguments[1] + "#tno3";
	}

	open_scroll_no_center(url, '_blank', '1110', '786');
}

// 상품 삭제하기
function jsonDeleteCartByQuickMenu(BP_ITEM_SEQ) {
    var params = [];
    if (BP_ITEM_SEQ != null) {
        params = {
            BP_ITEM_SEQ : BP_ITEM_SEQ
        }
    } else {
        if ($('[name=BP_ITEM_SEQ]:checked').length < 1) {
            alert("삭제할 상품을 선택 하여 주십시오.");
            return;
        }
        var BP_ITEM_SEQs = $('[name=BP_ITEM_SEQ]:checked').map(function() {
            if ($(this).val() != "")
                return $(this).val();
        }).get().join(",");
        params = {
            BP_ITEM_SEQ : BP_ITEM_SEQs
        };
    }

    if (!confirm("선택한 상품을 삭제 하시겠습니까?")){
	    return;
	} else {
	    $.ajax({
	        type : "POST",
	        url : "/order/cart/jsonDeleteCartProc.do",
	        data : params,
	        dataType : 'json',
	        async : false,
	        success : function(data) {
	            alert("성공적으로 처리하였습니다.");
	            jQuery("#DivCartList").load("/order/cart/list_Result.do", null);
	            // 우측퀵메뉴 장바구니수정
	            $("#rcart_" + BP_ITEM_SEQ).remove();
	            $("#rcartCnt").text($("#rcartls").find("li").length);
	            $('#rcartls').pajinate();
	            if($("#rcartls").find("li").length==0){
	                $(".rcart").find(".rprobox").html("<h5 class='sti'>장바구니</h5><p class='rpronone'>장바구니 담긴 <br />상품이 없습니다.</p><div class='btn'><p class='rprobtnclose'><a href='#this' class='rprobtn_close' title='장바구니 화면 닫기'>닫기</a></p></div>");
	            }
	        },
	        error : function(data) {
	            alert("에러가 발생 하였습니다.7");
	            return;
	        }
	    });
	}
}

//최근본상품 삭제
removePck=function(ov){
	$.ajax({url:"/common/removePrdCookie.do",dataType:"json",type:"post",data:{"TG":ov}}).done(function(){
		$("#rcnt_"+ov).remove();
		$("#rcntCnt").text($("#rseels").find("li").length);
		$('#rseels').pajinate({
			items_per_page : 1
		});
		if($("#rseels").find("li").length==0){
			$(".rsee").find(".rprobox .etc01").html('<h5 class="sti">최근 본</h5><p class="rpronone">최근 본 상품 상품이<br />없습니다.</p>');
		}
	});
};
//찜 삭제
removeWish=function(ov){
	$.ajax({url:"/common/removeWish.do",dataType:"json",type:"post",data:{"CW_WISH_LIST_SEQ":ov}}).done(function(){
		$("#rwish_"+ov).remove();
		$("#rwishCnt").text($("#rselectedls").find("li").length);
		$('#rselectedls').pajinate({
			items_per_page : 2
		});
		if($("#rselectedls").find("li").length==0){
			$(".rselected").find(".rprobox").html('<h5 class="sti">찜목록</h5><p class="rpronone">찜목록이<br />없습니다.</p><div class="btn"><a href="/mypage/myorder/wishList.do" class="btn_gray_27 btn_go" title="찜목록 바로가기"><i>더보기</i></a></div><span class="bl"></span>');
		}
	});
};

//메인영역별 클릭
function mainAreaClick(areaSeq){
    if(typeof areaSeq != "undefined"){
        var param = "areaSeq="+areaSeq;

        $.postJsonMainClickAjax("/index/mainarea_click.do", param);
    }
    return true;
}


//이벤트용 짧은 URL 구하는 기능
function getShortURL_event(longURL,type,idx,E_NM) {
	var ret=longURL;
	var _url = longURL;
	if(type=='copy'){
		$.getJSON(
				"http://api.bit.ly/v3/shorten?login=zenice&apiKey=R_a22943131a89a102f1ab79dc973a593c&format=json&longUrl="+encodeURIComponent(longURL)+"&callback=?",
				//"http://api.bit.ly/shorten?version=2.0.1&longUrl="+longURL+"&login=dongwonmall&apiKey=R_15e5e44ec697533c2763f5acfabeb852&callback=?",
				function(data) {
					if (data.status_txt == "OK"){
					//if (data.statusCode == "OK") {
						ret = data.data.url;
						//ret = data.results[_url].shortUrl;
						$('#shortURLValue').val(ret);
					}else{
						$('#shortURLValue').val(longURL);
					}

					var _shortUrl =$("#shortURLValue").val();
					var IE=(document.all)?true:false;
					if (IE) {
						if(confirm("이 글의 URL을 클립보드에 복사하시겠습니까?")){
							window.clipboardData.setData("Text", _shortUrl);
						}
					} else {
						temp = prompt("이 글의 URL 주소입니다. Ctrl+C를 눌러 클립보드로 복사하세요", _shortUrl);
					}
				}
			);
	}else{

		$.getJSON(
				"http://api.bit.ly/v3/shorten?login=zenice&apiKey=R_a22943131a89a102f1ab79dc973a593c&format=json&longUrl="+encodeURIComponent(longURL)+"&callback=?",
				//"http://api.bit.ly/shorten?version=2.0.1&longUrl="+longURL+"&login=dongwonmall&apiKey=R_15e5e44ec697533c2763f5acfabeb852&callback=?",
				function(data) {
					if (data.status_txt == "OK"){
						ret = data.data.url;
						$('#shortURLValue').val(ret);
					}else{
						$('#shortURLValue').val(longURL);
					}

					var url ="";
					var title = "★이 이벤트 강추★ [더반찬] "+""+E_NM;
					var link = $('#shortURLValue').val();
					var tag = "믿을수 있는 식품 전문 쇼핑몰 - 더반찬 -";

					switch(idx) {
					//페이스북
					case 0 : url = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(longURL) + "&t=" + encodeURIComponent(title);break;
					//트위터
					case 1 : url = "http://twitter.com/share?url=" + encodeURIComponent(link) + "&text=" + encodeURIComponent(title);break;
					//미투데이
					case 2 : url = "http://me2day.net/posts/new?new_post[body]="+encodeURIComponent(title)+" "+link+"&new_post[tags]=" + encodeURIComponent(tag);break;
					}

					switch(idx) {
					//페이스북
					case 0 : window.open(url, "snsWin_face", "width=800, height=630, scrollbars=0");break;
					//트위터
					case 1 : window.open(url, "snsWin_twit", "width=650, height=400, scrollbars=0");break;
					//미투데이
					case 2 : window.open(url);break;
					}
				}
			);

	}

	//return ret;
}


// SNS 링크
function snsLinker_event(idx,serverDomain,E_NM,E_SEQ,E_GBN_CD,pageName) {
	var longUrl = serverDomain+"event/"+pageName+".do?E_SEQ="+E_SEQ+"&E_GBN_CD="+E_GBN_CD;
	if($("#shortURLValue").val()=="") getShortURL_event(longUrl,'sns',idx,E_NM);
	else{
		var url ="";
		var title = "★이 이벤트 강추★ [더반찬] "+""+E_NM;
		var link = $('#shortURLValue').val();
		var tag = "믿을수 있는 식품 전문 쇼핑몰 - 더반찬 -";

		switch(idx) {
		//페이스북
		case 0 : url = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(longUrl) + "&t=" + encodeURIComponent(title);break;
		//트위터
		case 1 : url = "http://twitter.com/share?url=" + encodeURIComponent(link) + "&text=" + encodeURIComponent(title);break;
		//미투데이
		case 2 : url = "http://me2day.net/posts/new?new_post[body]="+encodeURIComponent(title)+" "+link+"&new_post[tags]=" + encodeURIComponent(tag);break;
		}

		switch(idx) {
		//페이스북
		case 0 : window.open(url, "snsWin_face", "width=800, height=630, scrollbars=0");break;
		//트위터
		case 1 : window.open(url, "snsWin_twit", "width=650, height=400, scrollbars=0");break;
		//미투데이
		case 2 : window.open(url);break;
		}
	}
}


// URL 복사하기
function urlCopy_event(serverDomain,E_SEQ,E_GBN_CD,pageName){
	if($("#shortURLValue").val()=="") getShortURL_event(serverDomain+"event/"+pageName+".do?E_SEQ="+E_SEQ+"&E_GBN_CD="+E_GBN_CD,'copy',0,'');
	else{
		var _shortUrl =$("#shortURLValue").val();
		/* window.clipboardData.setData("Text", _shortUrl);
		alert("URL이 클립보드에 복사되었습니다. CTRL+V하시면 URL이 입력됩니다"); */
		var IE=(document.all)?true:false;
		if (IE) {
			if(confirm("이 글의 URL을 클립보드에 복사하시겠습니까?")){
				window.clipboardData.setData("Text", _shortUrl);
			}
		} else {
			temp = prompt("이 글의 URL 주소입니다. Ctrl+C를 눌러 클립보드로 복사하세요", _shortUrl);
		}
	}
}

var secureToken = {
		set: function(selector) {
			if($(selector).length > 0){
				var p = $.ajax({
					type : "POST",
					url : "/secure/setTokenKey.do",dataType : 'json',contentType: 'application/json; charset=UTF-8',
					success : function(data) {
						if(data["resCode"] == 'ook'){
							$(selector).data('reskey', data["resKey"]);
						}else{return;}
					},
					error : function(data) {
						return;
					}
				});
				return p;
			}else{
				return;
			}
		},
		get: function(selector) {
			return $(selector).data('reskey');
		}
}


/*
 * coupon 다운로드 신규
 * 주의: TG를 STG로 변경
 */
function downSecureCoupon_noSuccessMsg(ov) {
    checkLogin().done(function(data) {
        if (data.rst) {
            $.ajax({
                url : "/benefit/coupon_secu_proc.do",
                dataType : "json",
                type : "post",
                data : {
                    "STG" : ov
                }
            }).done(function(data) {
				downCouponAlertFunc(data.rtn, "noSuccess");
            });
        } else {
            if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?")) {
                goLogin();
            }
        }
    });
};

var downCouponOneClick = true;
function downSecureCoupon_noReload(ov) {
    checkLogin().done(function(data) {
        if (data.rst) {
			if(downCouponOneClick){
        		downCouponOneClick = false;
				$.ajax({
	                url : "/benefit/coupon_secu_proc.do",
	                dataType : "json",
	                type : "post",
	                data : {
	                    "STG" : ov
	                }
	            }).done(function(data) {
					if(data.cmGrdCdYn == 'N') {
						alert(data.couponCmGrdNm + " 등급 전용 쿠폰입니다.");
					} else {
						downCouponOneClick = true;
						downCouponAlertFunc(data.rtn, ov);
					}
	            });
			} else {
				alert('요청을 처리중입니다.\n잠시만 기다려주세요.');
			}
		} else {
			if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?")) {
				goLogin();
			}
		}
    });
};

function downSecureCoupon(ov) {
    checkLogin().done(function(data) {
        if (data.rst) {
			if(downCouponROneClick) {
        		downCouponROneClick = false;
	            $.ajax({
	                url : "/benefit/coupon_secu_proc.do",
	                dataType : "json",
	                type : "post",
	                data : {
	                    "STG" : ov
	                }
	            }).done(function(data) {
					if(data.cmGrdCdYn == 'N') {
						alert(data.couponCmGrdNm + " 등급 전용 쿠폰입니다.");
					} else {
						downCouponOneClick = true;
						downCouponAlertFunc(data.rtn, ov);
					}
	            });
			} else {
        		alert('요청을 처리중입니다.\n잠시만 기다려주세요.');
        	}
        } else {
            if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?")) {
                goLogin();
            }
        }
    });
};

function alertAndReloadFunc( alertTxt, reloadBool ) {
    alert(alertTxt);
    if ( reloadBool ) location.reload();
}
// 쿠폰다운받기
function downCouponAlertFunc(rtn, ov){
    var alertTxt = "",
        reloadBool = false;
	if ( ov.indexOf("22202") == -1 && ov.indexOf("22201") == -1 && ov.indexOf("22199") == -1 && ov.indexOf("22200") == -1 && ov.indexOf("noSuccess") == -1 ){
		ov = "ov";
	}
    switch (rtn) {
        case "00" :
             alertTxt = "쿠폰 다운로드 완료!\nMy더반찬>쿠폰함을 확인해주세요.";
             reloadBool = true;
             break;
        case "10" :
            alertTxt ="다운이 완료되었습니다.";
            if ( ov == "ov" ) reloadBool = true;
            break;
        case "89" :
            alertTxt = "이미 다운 받았습니다.";
            break;
        case "87" :
            alertTxt = "적립 가능시간이 아닙니다.";
            break;
        case "86" :
            alertTxt = "3만 원 이상 주문 시 리필 받으실 수 있습니다.";
            break;
        case "85" :
            alertTxt = "2만원 이상 2회 이상 주문 시 다운 받을 수 있습니다.";
            break;
        case "88" :
            alertTxt = "이미 다운 받으셨습니다.";
            break;
        case "90":
	    	alertTxt = "앱에서만 받을 수 있는 쿠폰입니다.";
	    	break;
	    case "91":
	    	alertTxt = "신규회원 전용 쿠폰입니다.";
	    	break;
        case "96" :
            alertTxt = "이미 발급받은 쿠폰입니다.";
            break;
        case "97" :
            if ( ov.indexOf("22202") > -1 || ov.indexOf("22201") > -1 || ov.indexOf("22199") > -1 || ov.indexOf("22200") > -1 ){
                alertTxt = "이미 발급받은 쿠폰입니다.\nMy더반찬 > 쿠폰에서 확인 가능합니다.";
            } else {
                alertTxt = "다운 가능 수량을 초과하였습니다.";
            }
            break;
        case "98" :
            alertTxt = "다운 가능한 쿠폰이 아닙니다.";
            break;
        case "95" :
            alertTxt = "다운로드 가능시간이 아닙니다.";
            break;
        case "94" :
            alertTxt = "등록 불가능한 회원등급입니다. (고객센터 1644-6844 혹은 1:1 상담을 통한 문의 가능)";
            break;
            // 씨앗(쿠폰교환)
        case "93" :
            alertTxt = "일일 제한 수량이 모두 소진되었습니다.";
            break;
        case "20" :
            alertTxt = "쿠폰 교환 완료!\nMy더반찬 > 쿠폰에서 확인 가능합니다.";
            reloadBool = true;
            break;
        case "78" :
            alertTxt = "씨앗 사용에 실패했습니다.";
            break;
        case "79" :
            alertTxt = "교환할 씨앗이 부족합니다.";
            break;
        case "100" :
            alertTxt = "지금은 등급 산정 시간입니다. 02시 이후 다운로드 가능합니다.";
            break;
		case "404" :
            alertTxt = "쿠폰 다운로드 오류입니다.";
            break;
    }
	if(!((rtn == "00" || rtn == "88") && ov == "noSuccess")){
		alertAndReloadFunc(alertTxt,reloadBool);
	}
}

// 2021.11.02 간편결제 추가
function nicepay(e, obj) {
    window.open("/nicepay/"+ e+".do?" + obj, 'nicepayFrame', 'top=100, left=300, width=420px, height=670px, resizble=no, scrollbars=yes');
}

function nicepayDone(flag, message) {
    if(flag){
        alert(message);
    } else {
        alert(message);
        setTimeout(function(){location.href = "/mypage/member/myPayInfo.do";},1800);
    }
}

function nicepayForm(e){
    $.ajax({
        type     : "POST",
        url      : "/ajax/insertNicePayOrderFormData.do",
        data     : $('#KSPayWeb').serialize(),
        dataType : 'json',
        async    : false,
        success  : function(data){
            nicepay(e);
        },
        error    : function(data){ alert( "에러가 발생 하였습니다.8" ); return;}
    });
}

function validationPassword(pwd){
	var msg = "";
	var special_pattern = /[!@#$%^&*()-+=_]/gi;
	var returnMsg = "10~20자의 영문,숫자 또는 8~20자의 영문,숫자,특수문자의 조합";
	if(special_pattern.test(pwd)){
		if( !pwd.match(/^[a-zA-Z0-9!@#$%^&*()-+=_]{8,20}$/)) {
			msg = returnMsg;
		} else {
			msg = "O";
		}
	} else if(!pwd.match(/^(?=.*[a-zA-Z]+)(?=.*[0-9]+).{10,20}$/)) {
		msg = returnMsg + "으로 입력해주세요";
	} else if(/(\w)\1\1/.test(pwd)){
		msg = "같은 문자를 3번 이상 사용하실 수 없습니다.";
	} else {
		msg = "O";
	}

	return msg;
}
