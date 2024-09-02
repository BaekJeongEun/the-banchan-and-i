//// 장바구니 담기
//
//function addCart(obj,pcSeq,pbCode){
//	var params = [];
//
//	//상품옵션
//	var PO_SEQs = "";
//	//상품옵션상품
//	var OP_SEQs = "";
//
//	params = {PB_CODE : pbCode , PC_SEQ : pcSeq, PB_CNT : 1, PO_SEQs : PO_SEQs, OP_SEQs : OP_SEQs, fnc : "addCartCallback"};
//
//
//	commonAddCart(params);
//}
//
////w 장바구니콜백
//function addCartCallback(arg){
//	$("#cartMsg").html(arg);
//	lyAllFadein(_CART_OBJ, '.layer_basket');
//}
//카테패스
function fnJsonCategroy(currentSeq,id){
    var sid=Number(id)+1;
    $("#navCate"+id+" li").show();
    $("#"+currentSeq).hide();
    $("#cate"+id).text($("#"+currentSeq).text());
    $("#navCate"+id).hide();
    if(id == '1'){
        $("#cate3").text("선택");
        $("#navCate3").html("");
    }
    $("#navCateId").val(currentSeq);
    if(id!='3'){
        $.ajax({
            async : false, type : 'POST', url : '/category/category_json.do',
            data : {"searchCategory" : currentSeq },
            dataType: 'json',
            success : function(result){
                var html ="<ul>";
                $.each(result.data,function(idx,data){
                    html += "<li id="+data.CC_SEQ+"><a href=\"#this\" onclick=\"javascript:fnJsonCategroy('"+data.CC_SEQ+"','"+sid+"');\"><span>"+data.CC_NM+"</span></a></li>";
                });
                html+="</ul>";
                $("#cate"+sid).text("선택");
                $("#navCate"+sid).html(html);
            },error : function() { alert("일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요."); }
        });
    }
    $('.lycurrent').focus();
}
function goNaviCate(){
    if($("#navCateId").val().length>=8){
        $(location).attr("href","/category/main.do?cate_id="+$("#navCateId").val());
    }else{
        alert("이동 경로를 선택해주세요.");
    }

}
var _ORG_CNT=1;
function fnOrgCnt(cnt){_ORG_CNT=cnt;}
//수량 up down
function fnCount(act) {
    var cntObj = $("#prCnt");
    var passYn=true;

    //직접입력시 focus 이동시에 org 값을 저장
    if(act != "") fnOrgCnt(cntObj.val());

    //up down
    var val = Number(cntObj.val());
    if (act == "up") {
        val+=1;
    } else if (act == "down") {
        val-=1;
    }else if(act == "sel"){
        if($("#optionLength").val()==0){
            val+=Number($("#prCnt").val());
        }else{
            val+=1;
        }
    }

    //최소수량
    if(val == 0 ){
        alert("최소 구매 가능 수량은 1개 이상입니다.");
        cntObj.val(1 );
        passYn = false;
        fnSetPrice();
        return false;
    }


    var minCnt = 9999999;
    //옵션 구매 제한
    if($("#optionPrLength").val() != 0){
        $("select[id^='optionPrSelect']").each(function(){
            if($(this).val()!=""){
                var id= $(this).val();
                if(Number($("#limitCnt"+id).val()) > 0)	minCnt = Number($("#limitCnt"+id).val()) ;
                if(Number(minCnt)> Number($("#leftCnt"+id).val()) ) minCnt = Number($("#leftCnt"+id).val());
            }
        });
    }
    //상품 구매 제한
    if(Number(minCnt)> Number($("#limitCnt").val()) && $("#limitCnt").val()> 0 ) minCnt = Number($("#limitCnt").val());

    if(Number(minCnt)> Number($("#leftCnt").val()) ) minCnt = $("#leftCnt").val();

    if(Number(minCnt) <= 0) minCnt=1;

    //최대구매수량 제한
    if(passYn && $("#limitCnt").val() < val && $("#limitCnt").val() !=0){
        alert("최대 "+$("#limitCnt").val()+"개까지 구매 가능한 상품입니다.");
        cntObj.val(minCnt);
        passYn = false;
        fnSetPrice();
        return false;
    }
    //남은수량 제한
    if(passYn && $("#leftCnt").val() < val && $("#PB_COM_CD").val()=="01"){
        alert("해당 상품의 남은 수량은 "+$("#leftCnt").val()+"개 입니다.");
        cntObj.val(minCnt);
        passYn = false;
        fnSetPrice();
        return false;
    }
    //추가구성품있을경우
    if($("#optionPrLength").val() != 0){
        $("select[id^='optionPrSelect']").each(function(){
            if($(this).val()!=""){

                var id= $(this).val();

                //최대구매수량 제한
                if(passYn && $("#limitCnt"+id).val() < val && $("#limitCnt"+id).val() !=0 ){
                    alert("최대 "+$("#limitCnt"+id).val()+"개까지 구매 가능한 상품입니다.");
                    cntObj.val(minCnt);
                    passYn = false;
                    fnSetPrice();
                    return false;

                }
                //남은수량 제한
                if(passYn && $("#leftCnt"+id).val() < val ){
                    alert("해당 상품의 남은 수량은 "+$("#leftCnt").val()+"개 입니다.");
                    cntObj.val(minCnt);
                    passYn = false;
                    fnSetPrice();
                    return false;
                }
            }
        });
    }

    if(passYn){
        cntObj.val(val);
        fnSetPrice();
    }

    //return passYn;
}

function fnRsetOptionPr(grp){
//	$("#prCnt"+grp).val(1);leftText
    $("#leftText"+grp).hide();
    $("#limitText"+grp).hide();
    $("#noneText"+grp).show();
    if($("#optionPrSelect"+grp).val() != ""){
        var cd=$("#optionPrSelect"+grp).val();

        if($("#pbBiOrderYn"+cd).val() == "Y"){
            $("#leftText"+grp).html("남은수량 <em>"+setComma($("#leftCnt"+cd).val())+"</em>개");
            $("#noneText"+grp).hide();
            $("#leftText"+grp).show();
        }else if($("#limitCnt"+cd).val()!=0){
            $("#limitText"+grp).html("<em>1</em>인당 <em>"+$("#limitCnt"+cd).val()+"</em>개");
            $("#noneText"+grp).hide();
            $("#limitText"+grp).show();
        }
    }

    fnCount('');
}

function fnSetPrice(){
    var tot=0;
    var cnt=Number($("#prCnt").val());

	var isEmpYN = $("#EMPLOYEE_MALL_YN").val();
	if(isEmpYN == null || isEmpYN == "" || $("#EMPLOYEE_MALL_YN").val() != "Y"){
		isEmpYN = "N";
	}

    $.ajax({
        type	 : "POST",
        url		 : "/product/json_selectMultiPrice.do",
        data	 : {"PB_CNT" : cnt, "PB_CODE": $("#PB_CODE").val(), "EMPLOYEE_MALL_YN": isEmpYN},
        dataType : 'json',
        async    : false,
        success	 : function(data){
            if(data.result > 0){
            	if(data.result < $("#originPriceMultiBefo").val()){
            		$("#memberPrice").val(data.result);
            	}else{
            		$("#memberPrice").val($("#originPriceMultiBefo").val());
            	}
            		
            }else{
            		$("#memberPrice").val($("#originPriceMultiBefo").val());
            }
                    },
        error    : function(data){ alert( "에러가 발생 하였습니다.12" ); return;}
    });
    tot= cnt * Number($("#memberPrice").val());

    if($("#optionPrLength").val() != 0){
        $("select[id^='optionPrSelect']").each(function(){
            if($(this).val()!=""){
                var id= $(this).val();
                tot=Number(tot)+(Number($("#memberPrice"+id).val())*cnt);
            }
        });
    }

    $("#userPrice").val(tot);
    $("#userPriceText").text(setComma(tot));

}

function searchBandNanumOrder(obj){
	var requestObj = obj;
	var returnObj = "N";
	
	//console.log("pr_web.js.searchBandNanumOrder.requestObj:"+requestObj);
     $.ajax({
         type	 : "POST",
         url		 : "/product/searchBandNanumOrder_json.do",
         data	 : requestObj,
         dataType : 'json',
         async    : false,
         success	 : function(data){
        	 //console.log("pr_web.js.searchBandNanumOrder.ajax.data:"+data.prePurchas);
        	 returnObj = data.prePurchas;
                     },
         error    : function(data){ alert( "에러가 발생 하였습니다.13" ); return;}
     });
	
     //console.log("pr_web.js.searchBandNanumOrder.returnObj:"+returnObj);
     return returnObj;
}

function addCartDetail(){
   if($("#leftCnt").val() - $("#prCnt").val() < 0){
	   alert("죄송합니다. 상품의 재고수량이 부족합니다.");
       return;
   }

   var PO_SEQ = [];
   var passYn=true;
   var optoinNM = [];
   var optoinHtml="";

   var prCnt = $("#prCnt").val();
   var reData = /[0-9]/gi;

   if(!reData.test(prCnt)){
       alert("수량은 숫자만 입력 가능합니다.");
       return;
   }else{
       if(parseInt(prCnt,0) <= 0){
           alert("최소 구매 가능 수량은 1개 이상입니다.");
           return;
       }
   }

   //밴드플러스 나눔이벤트 상품
   var prePurchasYes = 'N';
   if($("#BANC_NANUM_CNT").val() != 0)
   { 	
	   	var cpParam = "PB_CODE="+$("#PB_CODE").val();
		checkLogin().done(function(data) {
			if (data.rst) {
				if($("#SESSION_CM_PAIDUP_YN").val() == "Y"){
					 var prePurchas = "N";
					 prePurchas = searchBandNanumOrder(cpParam);
				     if(prePurchas == "Y"){
				    	 alert("나눔이벤트 상품 구매 가능 최대 횟수는 매월 밴드/쿨밴드 나눔 상품 각각 1개씩 입니다.\r\n다음 달 나눔 이벤트를 기대해 주세요!");
				    	 prePurchasYes ="Y";
				    	 return false;
				     }
				}
			}else{
				alert("로그인이 필요합니다.");
				goLogin();
			}

       });
   }
   
   if(prePurchasYes === "Y"){
	   return;
   }
   
    //쿠프마케팅 상품 체크
   if (stringUtil.getString(arguments[0], "") == ""){
        var cpParam = "pb_Code="+$("#PB_CODE").val();
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
           error    : function(data){ alert( "에러가 발생 하였습니다.14" ); return;}
       });

       if(cpProductYn == "Y"){
           alert("장바구니에 담을 수 없는 상품입니다.\n\"바로구매\"만 가능합니다.");
           return;
       }
   }

    if($("#optionLength").val()!=0){
        $("select[id^=optionSelect]").each(function(){
            if($(this).val()==""){
                var thisId=$(this).attr("id");
                alert("필수 옵션("+$("#"+thisId+" > option:selected").text()+")을 선택하세요.");
                passYn = false;
                return false;
            }
            PO_SEQ.push($(this).val());
            optoinNM.push($(this).find(":selected").text());
           });
        optoinHtml = "<li>필수옵션<strong>("+optoinNM.join("_")+")</strong></li>";
    }
    var OP_SEQ = [];
    var optoinPrNM=[];
    var optoinPrHtml="";
    if(passYn && $("#optionPrLength").val()!=0){
        $("select[id^=optionPrSelect]").each(function(){
            var id=$(this).attr("id").replace("optionPrSelect","");
            //alert(id);
            //alert($("#reqYn"+id).val());
            if($(this).val()=="" && $("#reqYn"+id).val()=="Y"){
                var thisId=$(this).attr("id");
                alert("추가구성품("+$("#"+thisId+" > option:selected").text()+")을 선택하세요.");
                passYn = false;
                return false;
            }

            if($(this).val()!=""){
                OP_SEQ.push($(this).val());
                var oPr=[];
                oPr=$(this).find(":selected").text().split("+");
                oPr.splice(oPr.length-1,1);
                //alert(oPr);
                optoinPrNM.push(oPr.join("+"));
            }
           });
        optoinPrHtml = "<li>추가구성<strong>("+optoinPrNM.join("/")+")</strong></li>";
    }

    if(optoinNM.length>0 || optoinPrNM.length >0){
        var cartHtml = "<ul>";
        cartHtml+=optoinHtml;
        cartHtml+=optoinPrHtml;
        cartHtml+="</ul>";
        $("#optionListCart").html(cartHtml);
        $("#optionListCart").show();
    }

    var pr_pop_yn = $("#pr_pop_yn").val();
    if(passYn){
        var params = [];
        if($("#EMPLOYEE_MALL_YN").val()!="Y"){
            if(arguments.length==1 && arguments[0] == "Y"){
                if(pr_pop_yn=="Y"){
                    params = {PB_CODE : $("#PB_CODE").val() , PC_SEQ : $("#ATTR_CC_SEQ").val(), PB_CNT : $("#prCnt").val(), PO_SEQs : PO_SEQ.join(","), OP_SEQs : OP_SEQ.join(","), BP_KOOST_INFO : $("#BP_KOOST_INFO").val(), ISNONSTOP : "Y" ,ISPOPUP : "Y" };
                }else{
                    params = {PB_CODE : $("#PB_CODE").val() , PC_SEQ : $("#ATTR_CC_SEQ").val(), PB_CNT : $("#prCnt").val(), PO_SEQs : PO_SEQ.join(","), OP_SEQs : OP_SEQ.join(","), BP_KOOST_INFO : $("#BP_KOOST_INFO").val(), ISNONSTOP : "Y" };
                }
            }else if(arguments.length==1 && arguments[0] == "R"){
                //미리계싼 콜백 다름
                params = {PB_CODE : $("#PB_CODE").val() , PC_SEQ : $("#ATTR_CC_SEQ").val(), PB_CNT : $("#prCnt").val(), PO_SEQs : PO_SEQ.join(","), OP_SEQs : OP_SEQ.join(","), BP_KOOST_INFO : $("#BP_KOOST_INFO").val(), ISNONSTOP : "R", fnc : "addCartCallback2"};
            }else{
                params = {PB_CODE : $("#PB_CODE").val() , PC_SEQ : $("#ATTR_CC_SEQ").val(), PB_CNT : $("#prCnt").val(), PO_SEQs : PO_SEQ.join(","), OP_SEQs : OP_SEQ.join(","), BP_KOOST_INFO : $("#BP_KOOST_INFO").val(), fnc : "addCartCallback"};
            }
        }else{
            if(arguments.length==1 && arguments[0] == "Y"){
                if(pr_pop_yn=="Y"){
                    params = {PB_CODE : $("#PB_CODE").val() , PC_SEQ : $("#ATTR_CC_SEQ").val(), PB_CNT : $("#prCnt").val(), PO_SEQs : PO_SEQ.join(","), OP_SEQs : OP_SEQ.join(","),EMPLOYEE_MALL_YN_CART: 'Y', BP_KOOST_INFO : $("#BP_KOOST_INFO").val(), ISNONSTOP : "Y", ISPOPUP : "Y" };
                }else{
                    params = {PB_CODE : $("#PB_CODE").val() , PC_SEQ : $("#ATTR_CC_SEQ").val(), PB_CNT : $("#prCnt").val(), PO_SEQs : PO_SEQ.join(","), OP_SEQs : OP_SEQ.join(","),EMPLOYEE_MALL_YN_CART: 'Y', BP_KOOST_INFO : $("#BP_KOOST_INFO").val(), ISNONSTOP : "Y" };
                }
            }else if(arguments.length==1 && arguments[0] == "R"){
                //미리계싼 콜백 다름
                params = {PB_CODE : $("#PB_CODE").val() , PC_SEQ : $("#ATTR_CC_SEQ").val(), PB_CNT : $("#prCnt").val(), PO_SEQs : PO_SEQ.join(","), OP_SEQs : OP_SEQ.join(","),EMPLOYEE_MALL_YN_CART: 'Y', BP_KOOST_INFO : $("#BP_KOOST_INFO").val(), ISNONSTOP : "R", fnc : "addCartCallback2"};
            }else{
                params = {PB_CODE : $("#PB_CODE").val() , PC_SEQ : $("#ATTR_CC_SEQ").val(), PB_CNT : $("#prCnt").val(), PO_SEQs : PO_SEQ.join(","), OP_SEQs : OP_SEQ.join(","),EMPLOYEE_MALL_YN_CART: 'Y', BP_KOOST_INFO : $("#BP_KOOST_INFO").val(), fnc : "addCartCallback"};
            }
        }
        //alert(params.EMPLOYEE_MALL_YN_CART);
//alert($("#ATTR_CC_SEQ").val());
        commonAddCart(params);
    }

}

/**
 * 미리계산기에서 장바구니 갈때
 * @param arg
 */
function addCartCallback2(arg){
    $("#cartMsg").html(arg);
    lyFadein(_CART_OBJ, '.layer_basket');
}


//http://bit.ly/1atEJnahttp://bit.ly/1hfaDcy
//http://bit.ly/1hfaDcy
//http://api.bit.ly/shorten?version=2.0.1&longUrl=${serverDomain}/product/detail.do?productId=000512727&login=dongwonmall&apiKey=R_15e5e44ec697533c2763f5acfabeb852
function getShortURL(longURL,type,idx,pbCode,pbNm,ppSalePrice) {
    var ret=longURL,
        _url = longURL;
    if(type=='copy'){
        $.getJSON(
                "http://api.bit.ly/shorten?version=2.0.1&longUrl="+longURL+"&login=zenice&apiKey=R_a22943131a89a102f1ab79dc973a593c&callback=?",
                function(data) {
                    if (data.statusCode == "OK") {
                        ret = data.results[_url].shortUrl;
                        $('#shortURLValue').val(ret);
                    }else{
                        $('#shortURLValue').val(longURL);
                    }
                    var _shortUrl =$("#shortURLValue").val();
                    if ( window.clipboardData ) {//IE
                        window.clipboardData.setData("Text", _shortUrl);
                    } else {
                            var forExecElement = CreateElementForExecCommand (_shortUrl);
                            SelectContent (forExecElement);
                            var supported = true;
                            try {
                                if (window.netscape && netscape.security) {
                                    netscape.security.PrivilegeManager.enablePrivilege ("UniversalXPConnect");
                                }
                                success = document.execCommand ("copy", false, null);
                            }
                            catch (e) {
                                success = false;
                            }
                            document.body.removeChild (forExecElement);
                    }
                    if ( success ) alert("URL이 클립보드에 복사되었습니다. CTRL+V하시면 URL이 입력됩니다"); else {
                        alert('브라우저가 클립보드 접근을 허용하지 않아 복사되지 않았습니다. 다른 브라우저로 시도해주세요!');
                    }
                }
            );
    }else{
        $.getJSON(
                "http://api.bit.ly/shorten?version=2.0.1&longUrl="+longURL+"&login=zenice&apiKey=R_a22943131a89a102f1ab79dc973a593c&callback=?",
                function(data) {
                    if (data.statusCode == "OK") {
                        ret = data.results[_url].shortUrl;
                        $('#shortURLValue').val(ret);
                    }else{
                        $('#shortURLValue').val(longURL);
                    }
                    var url ="",
                    	title = "★이 상품 강추★ [동원몰] "+""+pbNm+setComma(ppSalePrice)+"원",
                    	link = $('#shortURLValue').val(),
                    	tag = "믿을수 있는 식품 전문 쇼핑몰 - 동원몰 -";

                    switch(idx) {
                        //페이스북
                        case 0 : url = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(longURL) + "&t=" + encodeURIComponent(title);window.open(url, "snsWin_face", "width=800, height=630, scrollbars=0");break;
                        //트위터
                        case 1 : url = "http://twitter.com/share?url=" + encodeURIComponent(link) + "&text=" + encodeURIComponent(title);window.open(url, "snsWin_twit", "width=650, height=400, scrollbars=0");break;
                        //미투데이
                        case 2 : url = "http://me2day.net/posts/new?new_post[body]="+encodeURIComponent(title)+" "+link+"&new_post[tags]=" + encodeURIComponent(tag);window.open(url);break;
                    }
                }
            );
    }

    //return ret;
}



function snsLinker(idx,serverDomain,pbCode,pbNm,ppSalePrice) {
    var longUrl = serverDomain+"product/detail.do?productId="+pbCode;
    if($("#shortURLValue").val()=="") getShortURL(longUrl,'sns',idx,pbCode,pbNm,ppSalePrice);
    else{
        var url ="",
            title = "★이 상품 강추★ [동원몰] "+""+pbNm+setComma(ppSalePrice)+"원",
            link = $('#shortURLValue').val(),
            tag = "믿을수 있는 식품 전문 쇼핑몰 - 동원몰 -";
        switch(idx) {
            //페이스북
            case 0 : url = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(longUrl) + "&t=" + encodeURIComponent(title); window.open(url, "snsWin_face", "width=800, height=630, scrollbars=0");break;
            //트위터
            case 1 : url = "http://twitter.com/share?url=" + encodeURIComponent(link) + "&text=" + encodeURIComponent(title);window.open(url, "snsWin_twit", "width=650, height=400, scrollbars=0");break;
            //미투데이
            case 2 : url = "http://me2day.net/posts/new?new_post[body]="+encodeURIComponent(title)+" "+link+"&new_post[tags]=" + encodeURIComponent(tag);window.open(url);break;
            }
        }
}
function CreateElementForExecCommand (textToClipboard) {
    var forExecElement = document.createElement ("div");
    forExecElement.style.position = "absolute";
    forExecElement.style.left = "-10000px";
    forExecElement.style.top = "-10000px";
    forExecElement.textContent = textToClipboard;
    document.body.appendChild (forExecElement);
    forExecElement.contentEditable = true;
    return forExecElement;
}

function SelectContent (element) {
    var rangeToSelect = document.createRange ();
    rangeToSelect.selectNodeContents (element);
    var selection = window.getSelection ();
    selection.removeAllRanges ();
    selection.addRange (rangeToSelect);
}
function urlCopy(serverDomain,pbCode){
    if($("#shortURLValue").val()=="") getShortURL(serverDomain+"/product/detail.do?productId="+pbCode,'copy',0,pbCode,'','');
    else{
        var success = true,
            _shortUrl =$("#shortURLValue").val();
        if ( window.clipboardData ) {//IE
            window.clipboardData.setData("Text", _shortUrl);
        } else {
                var forExecElement = CreateElementForExecCommand (_shortUrl);
                SelectContent (forExecElement);
                var supported = true;
                try {
                    if (window.netscape && netscape.security) {
                        netscape.security.PrivilegeManager.enablePrivilege ("UniversalXPConnect");
                    }
                    success = document.execCommand ("copy", false, null);
                }
                catch (e) {
                    success = false;
                }
                document.body.removeChild (forExecElement);
        }
        if ( success ) alert("URL이 클립보드에 복사되었습니다. CTRL+V하시면 URL이 입력됩니다"); else {
            alert('브라우저가 클립보드 접근을 허용하지 않아 복사되지 않았습니다. 다른 브라우저로 시도해주세요!');
        }
    }
}


function fnReview(){
    $("#prReview").click();
}

//미리계산기
function fnSelPrice(arg){
    var dcPrice = $("#"+arg+"SelectBox").val();
    $("#"+arg+"PriceText").text("-"+setComma(dcPrice)+"원");
    fnTotDcPre();
}
function fnAllPoint(){
	$("input[name='layercalsaved']").prop("checked",true);
    if($("#pointPriceOrg").val()!=0 && $("#pointPriceOrg").val()!=""){
        $("#pointPrice").val(setComma($("#pointPriceOrg").val()));
        $("#pointPriceText").text("-"+setComma($("#pointPriceOrg").val())+"원");

    }else{
        alert("사용 가능한 적립금이 없습니다.");
        $("#pointPrice").val("0");
    }
    fnTotDcPre();

}

$(document).on("click",".layer_calculator .tag_options li",function(){
	$("input#layercalcou1").prop("checked",true);
	fnSelPrice("cp");
});
$(document).ready(function() {
	$("input[name=layercalsavedmoney]").focusout(function(){
		$("input[name='layercalsaved']").prop("checked",true);
	});
});


function fnTotDcPre(){
    var dcPrice=0;
    //쿠폰& 회원할인
    $("input[name='layercalcoupon']").each(function(){

        if($(this).prop("checked") == true){
            var dc=$("#"+$(this).val()).text();
            dc=dc.replace("-","").replace(/,/gi,"").replace("원","");
            dcPrice=Number(dcPrice)+Number(dc);
        }
    });

    //배송비할인
    if($("input[name='layercaldeliver']").prop("checked") == true){
        var dc=$("#dcpPriceText").text();
        dc=dc.replace("-","").replace(/,/gi,"").replace("원","");
        dcPrice=Number(dcPrice)+Number(dc);
    }

    //적립금
    if($("input[name='layercalsaved']").prop("checked") == true){
        var dc=$("#pointPriceText").text();
        dc=dc.replace("-","").replace(/,/gi,"").replace("원","");
        dcPrice=Number(dcPrice)+Number(dc);
    }

    //카드
    $("input[name='layercalcard']").each(function(){
        if($(this).prop("checked") == true){
            var dc=$("#"+$(this).val()).text();
            dc=dc.replace("-","").replace(/,/gi,"").replace("원","");
            dcPrice=Number(dcPrice)+Number(dc);
        }
    });
    //if(dcPrice>0){

        //preTotText
    //alert(Number($("#preTot").val())-Number(dcPrice));
    //alert(Number($("#preTot").val()));
    var tmp =Number($("#preTot").val())-Number(dcPrice);

    if(Number(tmp)<0 ){
        //alert(tmp);
        if($("input[name='layercalsaved']").prop("checked") == true){
            var minus = Number($("#pointPrice").val().replace(/,/gi,"")) + Number(tmp);
            dcPrice = Number(dcPrice)+ Number(tmp);
            $("#pointPrice").val(setComma(minus));
            $("#pointPriceText").text("-"+setComma(minus)+"원");
        }
        tmp=0;
    }
    $("#totDcPriceText").text("-"+setComma(dcPrice)+"원");
    $("#preTotText").text(setComma(tmp)+"원");
    //}
}

function fnPreclear(arg){
    $("input[name='layercalcoupon']").prop("checked",false);
    $("#cpPriceText").text("");
    //alert($("#cpSelectBox").val());
    if($("#cpSelectBox").val()){
         $("#cpSelectBox").val("0");
         chSelectBox("#cpSelectBox");
    }

    //alert($("#cpSelectBox").val());

    $("input[name='layercaldeliver']").prop("checked",false);
    $("#dcpPriceText").text("");

     if($("#dcpSelectBox").val()){
         $("#dcpSelectBox").val("0");
        chSelectBox("#dcpSelectBox");
    }

    $("input[name='layercalsaved']").prop("checked",false);
    $("#pointPriceText").text("");
    $("#pointPrice").val("");

    $("input[name='layercalcard']").prop("checked",false);

    $("#totDcPriceText").text("");
    $("#preTotText").text("");

    if(arg=="1")	lyAllFadeout(this, '.layer_calculator');
}

//찜
function fnaddWish(obj,pbCode){
    //this,'${pr.PB_CODE}'
    addWish(obj,$("#ATTR_CC_SEQ").val(),pbCode);
}

//네이버 체크아웃 주문
function buy_nc(url){
	//네이버페이 점검 처리 시작 =======================
	if( new Date().format("yyyyMMddHHmmss") >= parseInt("20160512030000") && new Date().format("yyyyMMddHHmmss") <= parseInt("20160512050000")){
	    alert("03시-05시네이버 페이 점검중입니다.\n이용에 불편을 드려 죄송합니다.");
	    return;
	}
	//네이버페이 점검 처리 끝 =======================
    var passYn = true;
    var PO_SEQ = [];
    var optoinNM = [];

    //옵션 체크
    if($("#optionLength").val()!=0){
        $("select[id^=optionSelect]").each(function(){
            if($(this).val()==""){
                var thisId=$(this).attr("id");
                alert("필수 옵션("+$("#"+thisId+" > option:selected").text()+")을 선택하세요.");
                passYn = false;
                return false;
            }
            PO_SEQ.push($(this).val());
            optoinNM.push($(this).find(":selected").text());
           });
    }

    //옵션 상품 체크
    // if(passYn && $("#optionPrLength").val()!=0){
    //     alert("죄송합니다.NAVER Checkout으로 구매가 불가한 상품입니다.");
    //     passYn = false;
    //     return;
    // }

    $("#item_qty").val($("#prCnt").val());
    $("#category_id").val($("#ATTR_CC_SEQ").val());
    $("#product_option").val(PO_SEQ.join("/"));
    $("#product_option_nm").val(optoinNM.join("/"));

     if(passYn){
         //네이버 체크아웃으로 주문 정보를 등록하는 가맹점 페이지로 이동.
         //해당 페이지에서 주문 정보 등록 후 네이버 체크아웃 주문서 페이지로 이동.

         var form = document.naverCheckOut;
         if(window.location.pathname == "/product/pr_detail_pop.do"){
        	 form.target = "_blank";
             form.action = url;
             form.submit();

         }else{
        	 form.action = url;
             form.submit();
         }

     }
     return false;
}

//네이버 체크아웃 찜
function wishlist_nc(url){
	//네이버페이 점검 처리 시작 =======================
	if( new Date().format("yyyyMMddHHmmss") >= parseInt("20160512030000") && new Date().format("yyyyMMddHHmmss") <= parseInt("20160512050000")){
	    alert("03시-05시 네이버 페이 점검중입니다.\n이용에 불편을 드려 죄송합니다.");
	    return;
	}
	//네이버페이 점검 처리 끝 =======================
    var passYn = true;

    //옵션 상품 체크
    // if(passYn && $("#optionLength").val()!=0){
    //     alert("죄송합니다.NAVER Checkout으로 구매가 불가한 상품입니다.");
    //     passYn = false;
    //     return;
    // }

    $("#item_qty").val($("#prCnt").val());
    $("#category_id").val($("#ATTR_CC_SEQ").val());

     if(passYn){
          // 네이버 체크아웃으로 찜 정보를 등록하는 가맹점 페이지 팝업 창 생성.
          // 해당 페이지에서 찜 정보 등록 후 네이버 체크아웃 찜 페이지로 이동.

         var form = document.naverCheckOut;
         var win = window.open('',"wishlist_nc","scrollbars=yes,width=400,height=267");
         form.action = url;
         form.target = "wishlist_nc";
         form.submit();
     }
     return false;
}

//네이버 체크아웃 주문
function buy_nc(url) {
	//네이버페이 점검 처리 시작 =======================
	if (new Date().format("yyyyMMddHHmmss") >= parseInt("20160512030000") && new Date().format("yyyyMMddHHmmss") <= parseInt("20160512050000")) {
		alert("03시-05시네이버 페이 점검중입니다.\n이용에 불편을 드려 죄송합니다.");
		return;
	}
	//네이버페이 점검 처리 끝 =======================
	var passYn = true;
	var option = [];	//옵션키
	var optionNM = [];	//옵션명
	var cnt = [];	//수량

	//옵션상품일 경우
	if ($("#optionLength").val() != 0) {
		// 필수옵션 체크
		$("div[id^=choose_result]").each(function(){
			if ($(".choose_result").length == 0) {
				if ($(this).find("li.selected").length == 0) {
					passYn = false;
					alert("필수 옵션(" + $(this).data('option') + ")을 선택하세요.");
					return false;
				}
			}
		});
		
		$(".choose_result").each(function() {	//선택한 옵션상품
			var optionkey = $(this).data('optionkey');
			cnt.push($(this).find('#prCnt_option_' + optionkey).val());
			optionNM.push($(this).data('optionnm'));
			option.push((optionkey + "").replace('_','/'));
		});
		//옵션 상품 체크
		if (passYn && $("#optionPrLength").val() != 0) {
			alert("죄송합니다.NAVER Checkout으로 구매가 불가한 상품입니다.");
			passYn = false;
			return;
		}
	
		$("#product_multi").val($(".choose_result").length);
		$("#item_qty").val(cnt.join(","));
		$("#category_id").val($("#ATTR_CC_SEQ").val());
		$("#product_option").val(option.join(","));
		$("#product_option_nm").val(optionNM.join(","));
	} else {
		$("#item_qty").val($("#prCnt").val());
		$("#category_id").val($("#ATTR_CC_SEQ").val());
	}

	if (passYn) {
		//네이버 체크아웃으로 주문 정보를 등록하는 가맹점 페이지로 이동.
		//해당 페이지에서 주문 정보 등록 후 네이버 체크아웃 주문서 페이지로 이동.

		var form = document.naverCheckOut;
		if (window.location.pathname == "/product/pr_detail_pop.do") {
			form.target = "_blank";
			form.action = url;
			form.submit();

		} else {
			form.action = url;
			form.submit();
		}

	}
	return false;
}