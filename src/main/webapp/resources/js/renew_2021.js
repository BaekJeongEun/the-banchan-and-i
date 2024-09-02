// 레이어 팝업 : 공통
function layer_open(el) {
	var temp = $('#' + el); //레이어의 id를 temp변수에 저장
	var bg = temp.prev().hasClass('bg'); //dimmed 레이어를 감지하기 위한 boolean 변수
	
	if (bg) {
		$('.layer_pop').fadeIn(); //'bg' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다. 
	} else {
	  temp.fadeIn();
	}
	temp.find('.cbtn').click(function(e) {
		$('.layer_pop').fadeOut(); //'bg' 클래스가 존재하면 레이어를 사라지게 한다. 
		e.preventDefault();
	});
	$('.layer_pop .bg').click(function(e) { //배경을 클릭하면 레이어를 사라지게 하는 이벤트 핸들러
		$('.layer_pop').fadeOut();
		e.preventDefault();
	});
}

// 레이어 팝업 열기 : 공통
function popupOpen(num1){
    // console.log(idx);
	$(".pop" + num1).show();
	$("#hban_wrap").css("z-index", "-1");
	$("#header_wrap").css("z-index", "-1");
	$("#footer_wrap").css("z-index", "-1");
}

// 레이어 팝업 닫기 : 공통
function popupClose(num2){
    // console.log(idx);
	$(".pop" + num2).hide();
	$("#hban_wrap").css("z-index", "22");
	$("#header_wrap").css("z-index", "60");
	$("#footer_wrap").css("z-index", "30");
}

// 레이어 팝업 호출
function callLayerPopup(id) {
    var obj = $("#"+ id);
    if ( obj.length > 0 ) {
        obj.addClass('show');
    }
}
// 레이어 팝업 숨김
function hideLayerPopup(id) {
    var obj = $("#"+ id);
    if ( obj.length > 0 ) {
        obj.removeClass('show');
    }
}

// 탭 : 공통
function openTab(e, id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for(i=0; i<tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }
    document.getElementById(id).style.display="block";
    e.currentTarget.className += " active";
}
// document.getElementById("defaultOpen").click();

// 토글1 : 공통
function openToggleSimple(name) {
	var el = document.getElementById(name);
    if( el.style.display==="none"){
		el.style.display = "block";
		$('.time').addClass('active');
    }else{
		el.style.display = "none";
		$('.time').removeClass('active');
	}
}

// 토글2 : 공통
function openToggleComplex(name1, name2) {
	var item = document.getElementById(name1);
	var element = document.getElementById(name2);
    if( element.style.display==="none"){
		element.style.display = "block";
		item.classList.add("active");
    }else{
		element.style.display = "none";
		item.classList.remove("active");
	}
}

// 세로 텍스트롤링 : 주문결제
function fnRolling1(){
	var _this = $("#evt_txt_roll1 ul");
	var _first = $("#evt_txt_roll1 li:nth-child(-n+1)");
	_this.append(_first.clone());

	_this.animate({marginTop:"-30px"}, 500, function() {
		_this.css("margin-top", "0px");
		_first.remove();
	});
}
function fnRolling2(){
	var _this = $("#evt_txt_roll2 ul");
	var _first = $("#evt_txt_roll2 li:nth-child(-n+1)");
	_this.append(_first.clone());

	_this.animate({marginTop:"-30px"}, 500, function() {
		_this.css("margin-top", "0px");
		_first.remove();
	});
}

// 세로 텍스트롤링 열기 : 주문결제
function openRollingList1() {
	var _heightRolling1 = $("#evt_txt_roll1").height();
	if ( _heightRolling1 <= 30 ) {
		$("#btn_list_open1").addClass("active");
		$("#evt_txt_roll1").css("height", "auto");
		// 실행되고 있는 인터벌 함수를 중지
		$(function(){
			clearInterval(rolling1);
		});
	} else {
		$("#btn_list_open1").removeClass("active");
		$("#evt_txt_roll1").css("height", "30px");
		// 세로 텍스트롤링
		$(function() {
			rolling1 = setInterval(fnRolling1, 3000);
		});
	}
}
function openRollingList2() {
	var _heightRolling2 = $("#evt_txt_roll2").height();
	if ( _heightRolling2 <= 30 ) {
		$("#btn_list_open2").addClass("active");
		$("#evt_txt_roll2").css("height", "auto");
		// 실행되고 있는 인터벌 함수를 중지
		$(function(){
			clearInterval(rolling2);
		});
	} else {
		$("#btn_list_open2").removeClass("active");
		$("#evt_txt_roll2").css("height", "30px");
		// 세로 텍스트롤링
		$(function() {
			rolling2 = setInterval(fnRolling2, 3000);
		});
	}
}

// 말풍선 텍스트 애니메이션 : 상품상세
function textAni(){
	$('.txt_ani').fadeIn('fast').delay(3000).fadeOut('slow');
}

// 상품수량 증가감소 : 상품상세
function onlyNumber() { 
	var str = 100;
	var Mynum = document.getElementById("inptext").value;
	Mynum =Mynum.replace(/[^0-9]/g,'');
	document.getElementById("inptext").value=Mynum;
	var plus = document.getElementById("inptext").value=Mynum;
	if (plus < str)
	{
		document.getElementById("inptext").value=100;
	}else if (plus > 300)
	{
		document.getElementById("inptext").value=300;
	}
}

// 툴팁 열기 : 공통
function tooltipOpen(num1) {
	$(".tooltip" + num1).show();
}

// 툴팁 닫기 : 공통
function tooltipClose(num2) {
	$(".tooltip" + num2).hide();
}

// 글자수세기 : 공통
function getStrLength(target, id, num){
	$(target).keyup(function (e){
		var content = $(this).val(); //입력한 것
		$(id).html(content.length+"/"+num+"자");  //글자수 카운팅
	
		if (content.length > num){ //n자 이상일 때
			alert("최대 "+num+"자까지 입력 가능합니다.");
			$(this).val(content.substring(0, num)); //넘어간 글자 자르기
			$(id).html(num/num);
		}
	});
}

function starRatingFunc() {
	//별점 스크립트 적용
	$(".star-rating").each(function(){
		if ( $(this).hasClass('binded') ) {
			// 이미 적용된 별점이 있으면 스킵
			return 
		}
		var v = $(this).find('input').val();
		var size = $(this).data('size');
		if ( !size ) size = 16;

		// 강제 기본값 설정
		$(this).find('input').attr({
			min: '0',
			max: '5',
			step: $(this).data('step') ? $(this).data('step') : '1',
			value: v,
			disabled: $(this).hasClass('disabled'),
		}).on('change', function(){
			// 2021-03-22 0.1 단위 인식으로 변경
			var rate = ($(this).val() * 1).toFixed(1).split('.');
			var rate_html = '';
			for(var i = 0; i < 5; i++) {
				var cls = `icon icon-star box-${size} gradient`;
				if ( i < rate[0] ) {
					cls += '10';
				} else if ( i == rate[0] ) {
					cls += rate[1];
				} else {
					cls += '0';
				}
				//rate_html += `<i class="${cls}"></i>`;
				rate_html += `<i class="icon icon-star box-16"></i>`;
			}
			$(this).next('.stars').html(rate_html);
			
			// 밸류값 자동 인식
			/*var auto_value_target = $(this).parent().data('target');
		   
			if ( auto_value_target ) {
				$(auto_value_target).text(rate.join('.'));
			}

			var rating_value_text_target = $(this).parent().data('word');
			if ( rating_value_text_target ) {
			   
				var wordIndex = Math.ceil($(this).val());

				$(rating_value_text_target).text(`“ ${starRatingWords[wordIndex]} ”`);
			} 

			if(rate[0] == 0 || rate[0] == "0" ) {
				$('.reviewWordPrint').removeClass('on');
				$(this).closest('.star-rating').removeClass('binded');
			} else {
				$('.reviewWordPrint').addClass('on');
				$(this).closest('.star-rating').addClass('binded');
			}*/
			
		}).trigger('change');

		$(this).addClass('binded');
		
		// 별점 붙이기
		var star_rating_value = $(this).find('input').val();
		var icon_star_item = $(this).find(".icon-star");
		// console.log(star_rating_value);
	
		if( star_rating_value >= 1.0 && star_rating_value < 2.0 ) {
			icon_star_item.eq(0).addClass("gradient10");
		} else if( star_rating_value >= 2.0 && star_rating_value < 3.0) {
			icon_star_item.eq(0).addClass("gradient10");
			icon_star_item.eq(1).addClass("gradient10");
		} else if( star_rating_value >= 3.0 && star_rating_value < 4.0 ) {
			icon_star_item.eq(0).addClass("gradient10");
			icon_star_item.eq(1).addClass("gradient10");
			icon_star_item.eq(2).addClass("gradient10");
		} else if( star_rating_value >= 4.0 && star_rating_value < 5.0) {
			icon_star_item.eq(0).addClass("gradient10");
			icon_star_item.eq(1).addClass("gradient10");
			icon_star_item.eq(2).addClass("gradient10");
			icon_star_item.eq(3).addClass("gradient10");
		} else if( star_rating_value >= 5.0 ) {
			icon_star_item.addClass("gradient10");
		} else {
			icon_star_item.removeClass("gradient10");
		}
					
	});
}

/**
 * 상품상세 페이지 이동
 */
function goPrDetail() {
	// console.log("상세 상품으로 이동");
	try{
	    if (arguments.length == 1) {
	    	if(typeof(Storage) !== "undefined") {
	    		for(var i = 0; i<$("#searchForm input").length; i++){
	    			localStorage.setItem( $($("#searchForm input")[i]).attr("id"), $($("#searchForm input")[i]).val() );
	            }
	    	}
	        $(location).attr("href", "/product/detail.do?productId=" + arguments[0]);
	    } else if (arguments.length == 2) {
	    	if(typeof(Storage) !== "undefined") {
	    		for(var i = 0; i<$("#searchForm input").length; i++){
	    			localStorage.setItem( $($("#searchForm input")[i]).attr("id"), $($("#searchForm input")[i]).val() );
	            }
	    	}
	    	$(location).attr("href","/product/detail.do?productId=" + arguments[0] + "&cate_id="+ arguments[1]);
	    } else if (arguments.length == 3) {
	    	if(typeof(Storage) !== "undefined") {
	    		for(var i = 0; i<$("#searchForm input").length; i++){
	    			localStorage.setItem( $($("#searchForm input")[i]).attr("id"), $($("#searchForm input")[i]).val() );
	            }
	    	}
			if(arguments[2] == "07"){
				$(location).attr("href","/product/detail_deal.do?productId=" + arguments[0] + "&cate_id="+ arguments[1]);
			}else{
				$(location).attr("href","/product/detail.do?productId=" + arguments[0] + "&cate_id="+ arguments[1]);
			}

		} else if (arguments.length == 4) {
	    	if(typeof(Storage) !== "undefined") {
	    		for(var i = 0; i<$("#searchForm input").length; i++){
	    			localStorage.setItem( $($("#searchForm input")[i]).attr("id"), $($("#searchForm input")[i]).val() );
	            }
	    	}
			if(arguments[2] == "07"){
				$(location).attr("href","/product/detail_deal.do?productId=" + arguments[0] + "&cate_id="+ arguments[1] + "&keyword="+ arguments[3]);
			}else{
				$(location).attr("href","/product/detail.do?productId=" + arguments[0] + "&cate_id="+ arguments[1] + "&keyword="+ arguments[3]);
			}
			
			console.log("keyword: " + arguments[3]);

	    }
    }catch (e){ console.log(e); }
}

/**
 * 상품상세 페이지 내 고객 후기 탭으로 이동 
 */
function goPrDetailReviewTab() {
	// console.log("상품상세 페이지 내 고객 후기 탭으로 이동");
	try{
	    $(location).attr("href","/product/detail.do?productId=" + arguments[0] + "#prReview");
    }catch (e){ console.log(e); }
}

/* 2023-01-14 후기 */
//일반팝업 열기
function popOpen(num){
    $(".pop"+num).show();
}

//일반팝업 닫기
function popClose(num){
    $(".pop"+num).hide();
}

//후기팝업 열기
function openLayerPopup(idx) {
	$(".cd-popup"+idx).addClass("is-visible");
}

$(document).ready(function () {
    
    //후기팝업 닫기(공통)
	$(".cd-popup").on("click", function(event){
		if( $(event.target).is(".cd-popup-close") || $(event.target).is(".cd-popup") ) {
			event.preventDefault();
			$(this).removeClass("is-visible");
		}
	});
	
	//일반팝업 닫기
    $(".pop-layer-close").click(function(){
        $(this).parent().parent().hide();
    });
    
    // 새벽배송만족도조사 : 만족 또는 불만족 선택 시
    $(".p_like button").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        if( $(this).hasClass("bad") ) {
            $(".review-write.big").show();
        } else {
            $(".review-write.big").hide();
        }
    });
    
    //후기 한눈에 보기 펼쳤을 때 가로그래프
    $(".graph-bar").each(function() {
        var dataWidth = $(this).data('value');
        $(this).css("width", dataWidth + "%");
    });    
    
    /* 2023-01-14 후기 (E)*/

	// 별점 스크립트 적용
	starRatingFunc();

	// 상품 섬네일 슬라이드 호출 : 상품상세
	if( $(".prd_detail_bxslider").length > 0 ) {
		$(".prd_detail_bxslider").bxSlider({
			auto: false,
			speed: 500,
			pause: 5000,
			mode: 'horizontal',
			autoControls: false, // 시작 및 중지버튼 보여짐
			//stopAutoOnClick: false, //prev, next 누르면 stop됨
			pager: false, // 페이지 표시 보여짐
			minSlides: 4,
			maxSlides: 4,
			slideWidth: 60,
			slideHeight: 60,
			slideMargin: 3,
			infiniteLoop: false,
			onSliderLoad: function (){
				$(".prd_detail_bxslider").css("overflow", "visible");
			}
		});
	}
	
	// 상단 검색바 스크롤 : 밴드배송
    var topHeight = $( ".band_search_wrap" ).height();
    $(window).scroll( function() {
		//밴드배송 메인만 스크롤O
        if ( $( document ).scrollTop() > topHeight && $(".band_top_slide").length > 0 ) {
            $( ".band_search_wrap" ).addClass( "fixed" );
			$(".category_wrapper").css("top", "60px");
        }
        else {
            $( ".band_search_wrap" ).removeClass( "fixed" );
			$(".category_wrapper").css("top", "47px");
        }		
	});	

	// 말풍선 텍스트 애니메이션 : 상품상세
	textAni();

	// 상품수량 증가감소 : 상품상세
	var inp = $("input").val();
	$(".btn_up").on("click",function(){
		inp ++;
		$(".choose_result .choose_calc .num").text(inp);
	});
	$(".btn_down").on("click",function(){
		inp--;
		$(".choose_result .choose_calc .num").text(inp);
	});

	$(".order_coupon_select .btn_toggle").removeClass("active");
		$(this).parent().parent().parent().parent().siblings('li').find(".select_drop_title").siblings('ul').slideUp();
		$(this).addClass("active");

	// 옵션 선택 : 상품상세
	// 옵션 클릭하여 펼침
	$(".detail .btn_toggle").click(function () {
		//alert("클릭이벤트발생");
		var cont_toggle  = $(this).parent().parent().find(".option_list");
		if ( cont_toggle.css("display") === "none" ){
			cont_toggle.slideDown();			
			$(this).parent().parent().siblings().find(".option_list").hide().prev().find(".btn_toggle").removeClass("active"); //형제 리스트 닫기
			$(this).addClass("active");
		}else{
			cont_toggle.slideUp();
			$(this).removeClass("active");
		}
	});

	// 옵션 리스트 클릭하면 셀렉트박스에 반영
	$(".detail .option_list li").click(function () {
		var opt_content = $(this).text();
		$(this).parent().parent().find(".txt_sel").text(opt_content);
		$(this).parent().hide();
		$(this).parent().parent().children().find(".btn_toggle").removeClass("active");
	});

	// 세로 텍스트롤링 : 주문결제
	rolling1 = setInterval(fnRolling1, 3000); //간편결제 결제혜택
 	rolling2 = setInterval(fnRolling2, 3000); //일반결제 결제혜택
	
	// 스크롤시 탭리스트 고정 : 아울렛
	$(window).scroll(function () {
		var calcHeight1 = $("#header_wrap").height();
		var calcHeight2 = $(".outlet_bar_wrap .outlet_bar").height();
		var totalHeight = calcHeight1 + calcHeight2;
		if ($(document).scrollTop() > totalHeight) {
			$(".outlet_new_product .outlet_new_category").addClass("fixed");
		} else {
			$(".outlet_new_product .outlet_new_category").removeClass("fixed");
		}
	});

	// 해지사유 선택  : 마이동원몰
	$(".tbl_cancel input[type='radio']").click(function (e) {
		if (e.target.className == "view_etc") {
			// 기타 클릭 시, 하단에 기타 상세사유 입력 인풋박스 노출됨
			$(".tbl_cancel .etc .input_text").css("display", "inline-block");
			// Default 미선택 상태로, 사유 선택 전 하단 해지하기 버튼 비활성화
			$("#btn_deactivate").attr("disabled", true);
			// Input box 클릭 시, ‘최대 30자까지 입력 가능합니다.’ 도움말 텍스트 노출
			$(".tbl_cancel .etc .input_text").focusin(function () {
				$(".tbl_cancel .etc .small_text").css("display", "block");
			}).focusout(function () {
				// 미입력 후 Inputbox 이탈 시, ‘상세사유를 입력해 주세요.‘ 알럿문구 노출
				var _noValue = $(".input_text").val() == "";
				if (_noValue == true) {
					alert("상세사유를 입력해 주세요.");	
				}
			});
			// 상세사유 입력 시 하단 해지하기 버튼 활성화
			$(".tbl_cancel .etc .input_text").on("input", function () {
				if ($(".tbl_cancel .etc .input_text").val() == "") {
					$("#btn_deactivate").attr("disabled", true);
				} else {
					$("#btn_deactivate").attr("disabled", false);
				}
			});
		} else {
			// Default 미선택 상태로, 선택 시 하단 해지하기 버튼 활성화
			$("#btn_deactivate").attr("disabled", false);
			$(".tbl_cancel .etc .input_text").css("display", "none");
			$(".tbl_cancel .etc .small_text").css("display", "none");			
		}
	});

	// 상품선택 버튼 추가 :  D-DAY딜 상세
	$(".select_ico .txt").click(function(e){
		e.stopPropagation();
		// alert("select_ico");
	});

	// 결제하기 스크롤 : 주문결제
	$(window).scroll(function(){
		var conT = $('#container_wrap').height() - $('footer').height();
		var conB = $('#container_wrap').height() - $('footer').height() - $('footer').height() + 150;
		if($(document).scrollTop() > 418 ){
			$("#order_form .right").css({
				"position":"fixed","top":"0px"
			})
		}else{$("#order_form .right").css({
				"position":"absolute","top":"70px"
			})
			
		};
		if ($(document).scrollTop() > conT ){
			$("#order_form .right").css({
				"position":"absolute","top":conB,"bottom":"auto"
			})
		}
	});	

	// 밴드플러스 회원명 15자 까지 이후 말줄임 : 마이동원몰
	var b_open = $(".user_bandplus").text();
	var b_preNm = b_open.substring(0, 15);
	if (b_open.length >= 16) {
		$(".user_bandplus").text(b_preNm + '...');
	};
	
	// 검색창 벗어나면 자동 검색 비노출 : 검색
	$(".hsearch").on("mouseleave", function(e){
		$("#hsearchauto").css("display","none");
	});

	// 클릭 시 위치 이동
	$(".btn_bene").click(function(event){
		var targetOffset = $(".bandplus_benefits .row2"); //선택한 태그의 위치를 반환
		//animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
		event.preventDefault();
		$("html,body").animate({scrollTop : targetOffset.offset().top}, 400);
	});

	// 딜상세 품절 disabled 처리
	$(".detail_d_day_deal .price_info2 .outSel .tag_options li").each(function(){
		var _soldoutYn = $(this).find("input[name=soldoutYn]").val();
		if( _soldoutYn == "Y" ){
			$(this).attr("disabled","disabled");
			$(this).addClass("soldout");
			return;
		}
	});
	
	// 클릭하여 펼침
	$(".bp_btn_toggle").click(function() {
		var bandplus_toggle  = $(this).parent().find(".bandplus_toggle");
		if ( bandplus_toggle.css("display") == "none" ){
			bandplus_toggle.slideDown();
			$(this).addClass("active");
		}else{
			bandplus_toggle.slideUp();
			$(this).removeClass("active");
		}
	});

	// 셀렉트박스는 현재 선택한 것 하나만 펼치고 나머지는 자동 닫히도록 수정 : 주문결제 상품쿠폰
	$(".order_coupon_select .btn_toggle").click(function(){
		$(".order_coupon_select .btn_toggle").removeClass("active");
		$(this).parent().parent().parent().parent().siblings('li').find(".select_drop_title").siblings('ul').slideUp();
		$(this).addClass("active");
	});

	// 옵션 클릭하여 펼침
	$(".popup_dim .btn_toggle").off("click").on("click", function () {
		//alert("클릭이벤트발생");
		var cont_toggle2 = $(this).parent().parent().find(".option_list");
		if ( cont_toggle2.css("display") === "none" ){
			cont_toggle2.slideDown();
			$(this).addClass("active");
		}else{
			cont_toggle2.slideUp();
			$(this).removeClass("active");
		}
	});

	// 옵션 리스트 클릭하면 셀렉트박스에 반영
	$(".popup_dim .option_item").on("click", function (e) {
		e.preventDefault();
		$(this).parent().hide();
		$(this).parent().parent().children().find(".btn_toggle").removeClass("active");

		if($(this).text() === "사용하실 쿠폰을 선택하세요") {
			var thisText = $(this).text();
			$(this).parent().parent().find(".select_drop_title .txt_sel").text(thisText);
		}
	});

	// 이벤트 및 기획전 유의사항 토글
	$(".important_tit").on("click",function(e){
		$(this).toggleClass("on").siblings(".important_content").slideToggle();        
	});

	// 기획전 일반탭	
    var tabList = $(".planshop_tab li");
	if( $(".product_section").length > 0 ) { //(구버전)대표상품 있을시
		var tabNumber= $("#prListLength").val() - 1;
	} else {
		var tabNumber= $("#prListLength").val();
	}

    if( tabNumber == 1 ) {  //탭 갯수
        tabList.css("width","100%");
    } else if ( tabNumber == 2 ) {
        tabList.css("width","50%");
    } else if ( tabNumber == 3 ) {
        tabList.css("width","33.333%");
    } else if ( tabNumber == 4 ) {
        tabList.css("width","25%");
    } else if ( tabNumber == 5 ) {
        tabList.css("width","20%");
    } else if ( tabNumber == 6 ) {
        tabList.css("width","16.666%");
    } else if ( tabNumber == 7 ) {
        tabList.css("width","14.285%");
    } else if ( tabNumber == 8 ) {
        tabList.css("width","12.5%");
    } else if ( tabNumber == 9 ) {
        tabList.css("width","11.111%");
    } else {
        tabList.css("width","10%");
    }

	//main quick 고정행사 배너
	if( $(".left_plan > .lqsevent").length > 0 ) { //최하단 배너 등록 or 미등록
		$("#leftquick .lqcon .left_plan").css("display","block");
	} else {
		$("#leftquick .lqcon .left_plan").css("display","none");
	}

	//상단 띠배너 comm.js 참고
	bnrColorFull = $("#hban .hbandbanner .fullbanner").data("bnrColor");
	bnrColorLeft = $("#hban .hbandbanner .leftbanner").data("bnrColor");
	bnrColorRight = $("#hban .hbandbanner .rightbanner").data("bnrColor");
	$("#hban .hbandbanner .fullbanner").css("background-color", bnrColorFull);
	$("#hban .hbandbanner .leftbanner").css("background-color", bnrColorLeft);
	$("#hban .hbandbanner .rightbanner").css("background-color", bnrColorRight);

	//상품상세 toggle
	$("body").on('click', '.info.toggle',function(e){
		$(this).find('i').toggleClass('down');
		$(this).find('.toggle-content').slideToggle();
	});

	//상품상세 결제혜택 bxslider
	if( $(".pay-bxslider").length > 0 ) {
		$(".pay-bxslider").css("overflow", "hidden");
		var popupSlider = $(".pay-bxslider").bxSlider({
			auto: false,
			speed: 500,
			pause: 5000,
			mode: 'fade',
			pager: false,
			//pager: ($(this).find("li").length > 1) ? true : false,
			minSlides: 2,
			maxSlides: 2,
			moveSlides: 1,
			// slideWidth: 270,
			// slideHeight: 558,
			adaptiveHeight: true, //높이 0일때 해결
			//infiniteLoop: true,
			onSliderLoad: function () {
				// 페이지 로딩 후 노출
				$(".pay-bxslider").css("overflow", "visible");
			}
		});
	}

	// 푸터 토글
    $(".important-tit").on("click",function(e){
        if ( $(this).closest('label').length > 0 ) {
            // form 요소는 동작안함
            return;
        }
        $(this).toggleClass("on").siblings(".important-content").slideToggle();        
    });	

});