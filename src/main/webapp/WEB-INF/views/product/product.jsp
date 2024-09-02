<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
<title>${product.name}</title>
<link rel="shortcut icon"
	href="https://image.thebanchan.co.kr/tbcImg/web/images/common/favicon.ico">
</head>
<body>
	<noscript>
		<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W97P9F7"
			height="0" width="0" style="display: none; visibility: hidden"></iframe>
	</noscript>
	<input type="hidden" id="shortURLValue">

	<div id="wrap">
		<%@ include file="/WEB-INF/views/common/header.jsp"%>
		<script type="text/javascript"
			src="//dynamic.criteo.com/js/ld/ld.js?a=25834" async="true">
  </script>
		<meta name="keywords" content="더반찬,더반찬&amp;,더반찬앤드,더반찬엔드,더반찬앤,더반찬엔">
		<meta name="description"
			content="수제반찬부터 메인요리까지, 가장 간편하고 맛있는 식사는 더반찬&Iamp;!">
		<hr>
		<script type="text/javascript">
    $(document).ready(function() {
      if (document.getElementById("top-banner-cont")) {
        $('.top-banner').show();
        cookiedata = document.cookie;
        if ( cookiedata.indexOf("top-banner-cont=done") < 0 ){ //쿠키 변경 여부 불러오기
          document.getElementById('top-banner-cont').style.visibility = "visible";
        }
        else {
          document.getElementById('top-banner-cont').style.display = "none";
          $('#top-banner-wrap').remove();
        }
      }
      slideProType2("#cartprotogets", "#cartprotogets_btn", 1, 400);


      $('#hd_sch').keydown(function(event){
        if(event.keyCode == 13){
          goSearch();
        }
      })

      getSearchCookie("hsearch_");

      mnu_type_click();

      $("#hd_sch").attr("placeholder", "맛있는 여유, 더반찬&");

      //번쩍딜 Gnb 분기처리(시간)
      var date = new Date();
      var now = "";
      var hour = date.getHours().toString().length > 1 ? date.getHours() : "0" + date.getHours();
      var minute = date.getMinutes().toString().length > 1 ? date.getMinutes() : "0" + date.getMinutes();
      var second = date.getSeconds().toString().length > 1 ? date.getSeconds() : "0" + date.getSeconds();
      var day = date.getDay();
      now += hour;
      now += minute;
      now += second;

      var dealStHour = "14"+"0000"; // 기본값(분/시)
      var dealEdHour = "17"+"0000";

      if(day != 6 && now >= dealStHour && now < dealEdHour ){

      }

    });

    /*  상품검색 및 최근검색어를 통한 재검색  */
    function goSearch(searchWord){
      //재검색
      if(searchWord != null){
        $("#hd_sch").val(searchWord);
      }

      if ($("#hd_sch").val() == "") {

        location.href = "/";

      } else {
        var hd_sch = $("#hd_sch").val();
        hd_sch = $.trim(hd_sch); // 앞뒤 공백 제거
        hd_sch = hd_sch.replace(/\s{2,}/gi, ' '); // 문자열 한칸 이상 공백을 한칸 공백으로 치환
        hd_sch = hd_sch.replace(" ","$");
        setSearchCookie("hsearch_" + hd_sch, hd_sch, 1);

        $("#frm_search").attr({"target": "_self", "action": "/search/hsearch.do"}).submit();
      }
    }

    /*  최근검색어 > 검색어 쿠키에 저장  */
    function setSearchCookie(key, value, exp){
      var date = new Date();
      date.setTime(date.getTime() + exp*1000*60*60*24); // 쿠키값 유지 기간 설정
      document.cookie = key + "=" + value + ";expire=" + date.toUTCString() + ';path=/;';
    }


    /*  최근검색어리스트 쿠키에서 가져오기   */
    function getSearchCookie (cookie_name) {

      //최근검색어 리스트 삭제
      var list = document.getElementById('latelyKeyWordSearchList');
      while(list.firstChild){
        list.removeChild(list.firstChild);
      }

      var key, value;
      var html_list = "";
      var html_none = "";
      var index = 0;

      html_list += "<p class=\"title\">최근검색어</p>";
      html_list += "<a href=\"javascript:delSearchCookie();\" class=\"btn-all-del\">전체삭제</a><ul>";
      var cookieArr = document.cookie.split(";");
      for(var i=cookieArr.length-1; i>=0; i--){
        key = cookieArr[i].substr(0, cookieArr[i].indexOf('='));
        value = cookieArr[i].substr(cookieArr[i].indexOf('=') + 1);
        value = value.replace('$',' ');
        if(key.indexOf(cookie_name) != -1){
          if(index == 4){
            document.cookie = key + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;path=/;';
          } else {
            index += 1;
            html_list += "<li><a href=\"javascript:goSearch(`" + value + "`);\">" + value + "</a>";
            html_list += "<a href=\"javascript:delSearchCookie(`" + value + "`)\" class=\"btn-del\">삭제</a></li>";
          }


        }
      }
      html_list += "</ul>";

      if(index == 0){
        html_none +="<p class=\"title\">최근검색어</p>";
        html_none +="<div class=\"nodata-wrap\"><p>최근 검색어가 없습니다.</p></div>";
        $("#latelyKeyWordSearchList").append(html_none);

      } else {
        $("#latelyKeyWordSearchList").append(html_list);
      }

    }
    /*  최근검색어 전체 삭제  */
    function delSearchCookie(searchWord){
      if(searchWord == null){
        var cookieArr = document.cookie.split(";");
        for(var i=0; i<cookieArr.length; i++){
          key = cookieArr[i].substr(0, cookieArr[i].indexOf('='));
          value = cookieArr[i].substr(cookieArr[i].indexOf('=') + 1);
          if(key.indexOf("hsearch_") != -1){
            document.cookie = key + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;path=/;'; // 쿠키값 유지기간을 과거로 해서 삭제
          }
        }
      } else {
        searchWord = searchWord.replace(' ','$');
        document.cookie = 'hsearch_' + searchWord + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;path=/;';
      }

      getSearchCookie("hsearch_");
    }

    // 전체 카테고리 : 공통

    function mnu_type_click(){
		$.ajax({
			type : "POST",
			url : "/category",
			dataType : 'json',
			success : function(data) {
				$("#inner_box").empty();
	 			var html = "<ul class=\"mnu-type\">";
	 			var index = 0;
	 			for(var i=0; i<data.length;i++){
	 				//Data
	 				index = i+1;
	 				html += "<li class=\"\">";
	 				html += "<a data-click=\"300000040\" href=\"/category/main.do?cate_id=" + data[i].mainNum + "\"><span class=\"icon\">";
	 				html += "<img src=\"";
	 					html += data[i].mainOffImage;
	 				html += "\" alt=\""+ data[i].mainCategory + "\" class=\"off\" />";
		 			html += "<img src=\"";
	 					html += data[i].mainOnImage;
		 			html += "\" alt=\""+ data[i].mainCategory + "\" class=\"on\" />";
		 			html +=	"</span>"+ data[i].mainCategory + "</a>";
		 			
		 			html += "<div class=\"mnu-sub\"><ul>";
		 			for(var j=0; j<data[i].subCategories.length;j++) {
		 					html += "<li>";
		 					html += "<a data-click=\"300000040\" href=\"/category/main.do?cate_id=" + data[i].subCategories[j].subNum + "\">" + data[i].subCategories[j].subCategory + "</a>";
		 					html += "</li>";
		 				
		 			}
		 			html += "</ul></div></li>";
	 			}
	 			html += "</ul>";
	 			$("#inner_box").append(html);

	 			//hover
	 			if ($('.gnb-sub-wrap ul.mnu-type li').length > 0) {
					$(".gnb-sub-wrap .mnu-type li").hover(function(e){
						$(this).addClass('active');
						$('.gnb-sub-wrap').find('.mnu-type').addClass('active');
						$('.gnb-sub-wrap').addClass('active2');
					}, function(){
						$(this).removeClass('active');
						$('.gnb-sub-wrap').find('.mnu-type').removeClass('active');
						$('.gnb-sub-wrap').removeClass('active2');
					});
				}
			},
			error : function(data) {
			}
		});
	}
    //]]>

  </script>
		<div class="header_alliance"></div>
		<hr>
		<p class="skip">
			<a href="#container">본문 내용 바로가기</a>
		</p>
		</header>
		<!--// HEADER -->


		<a class="return_top" href="#">탑버튼</a>
		<!-- //header -->
		<!-- layer wrap -->
		<div id="layer_wrap"></div>
		<!-- //layer wrap -->
		<!-- container wrap -->
		<div id="container_wrap">
			<!-- container -->
			<div id="container100" class="detail">
				<!-- content -->
				<div id="content">
					<!-- 상품상세 -->
					<div class="content_box1280">
						<input type="hidden" id="EMPLOYEE_MALL_YN" value="N"> <input
							type="hidden" id="pr_pop_yn" value="N"> <input
							type="hidden" value="01" id="PB_COM_CD"> <input
							type="hidden" value="" id="BP_KOOST_INFO"> <input
							type="hidden" id="BANC_NANUM_CNT" value="0"> <input
							type="hidden" id="SESSION_CM_PAIDUP_YN" value=""> <input
							type="hidden" id="finalPrice_default"
							value="${product.priceFormat}"> <input type="hidden"
							id="finalPrice" value="${product.priceFormat}">
						<div class="product_detail">
							<input type="hidden" id="pbCode" value="${product.pbCode}">
							<div id="imgTagSrc" style="display: none;">
								<img src="${product.imgCode}" border="0" alt="" class=""
									onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
							</div>
							<input type="hidden" id="ATTR_CC_SEQ" value="">
							<!-- 이미지상세 -->
							<div class="product_info_left">
								<!-- 상품이미지 -->
								<div class="product_image">
									<!-- //뱃지 -->
									<img src="${product.imgCode}" border="0" alt="" width="550"
										height="550" class="photo"
										onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
								</div>
								<!-- //상품이미지 -->

								<!-- 상품정보 -->
								<div class="detail_info">
									<ul class="info_list">
										<li class="">상품코드 : ${product.pbCode}</li>
										<li>원산지 : 상품설명 참조</li>
									</ul>
									<div></div>
								</div>
								<!-- //상품정보 -->

							</div>
							<!-- //이미지상세 -->

							<!-- 내용상세 -->
							<div class="product_info_right">
								<section class="product-top-info">
									<!-- 상품상세 상단 -->
									<div class="product_assist_top">
										<!-- row1 -->
										<div class="row1">
											<div class="rate-n-share">
												<!-- 2022.03.22 별점 수정! -->
												<div class="left">
													<a href="#tno2" onclick="javascript:fnReview()">
														<div class="star-rating disabled binded">
															<input type="range" value="50" min="0" max="5" step="1"
																disabled="disabled">
															<div class="stars">
																<i class="icon icon-star box-16 gradient10"></i> <i
																	class="icon icon-star box-16 gradient10"></i> <i
																	class="icon icon-star box-16 gradient10"></i> <i
																	class="icon icon-star box-16 gradient10"></i> <i
																	class="icon icon-star box-16 gradient10"></i>
															</div>
														</div> <span class="line"></span> <span>${product.reviewCnt}</span>
													</a>
												</div>
												<div class="util_item">
													<button
														onclick="javascript:fnWishProc(this,'${product.pbCode}');return false;"
														id="pr_product_zzim_btn" type="button" class="btn_like2 ">찜</button>
													<button type="button" class="btn_example"
														onclick="layer_open('layer1');return false;">공유</button>
													<div id="layer1" class="layer_pop">
														<div class="bg"></div>
														<div class="tooltip">
															<div class="tooltip_container">
																<!--content //-->
																<div class="btn-r">
																	<button type="button" class="cbtn">닫기</button>
																</div>
																<dl class="tooltip_cont">
																	<dt class="title">공유하기</dt>
																	<dd class="cont">
																		<ul class="share_sns">
																			<li><a href="javascript:;"
																				class="sns_kakao kakao" id="kakao-link-btn">카카오톡</a></li>
																			<!-- <li><a href="#" onclick="shareInstagram();" class="sns_instagram">인스타그램</a></li> -->
																			<li><a href="#" onclick="shareUrl();"
																				class="url_copy">URL복사</a></li>
																		</ul>
																	</dd>
																</dl>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- //row1 -->
									</div>
									<!-- //상품상세 상단 -->
									<!-- 상품타이틀 -->
									<div class="title_wrap">
										<span class="sub_title">${product.subName}</span>
										<h2 class="product_title">${product.name}</h2>
										<input type="hidden" id="PB_NM" value="${product.name}">
									</div>
									<!-- //상품타이틀 -->

									<!-- bottom 아이콘 -->
									<div class="flag_area"></div>

									<!-- 상품가격(S) -->
									<div class="price_summary">
										<div class="price_product_sale">
											<div class="left">
												<span class="level-price"> <!-- 일반 회원 --> 판매가
												</span>

											</div>
											<div class="right">
												<!-- 할인가 -->
												<span class="sale_price"> <em class="value">${product.priceFormat}</em><em
													class="unit">원</em>
												</span>
												<!-- //할인가 -->

											</div>
										</div>
										<div class="detail_price_per_weight">(100g당
											${product.gramPrice}원)</div>
									</div>

									<div class="content-gap border"></div>
									<div class="row4">
										<ul>
											<li>
												<h5>배송정보</h5>
												<div class="info toggle">
													<div class="delivery-price">
														${product.shippingFeeFormat}원 (35,000원 이상 무료) <br>
													</div>

													최소주문금액 10,000원 이상 주문 가능
												</div>
											</li>
											<!-- 더반찬 배송안내 추가 -->
										</ul>
									</div>

									<div class="content-gap border"></div>
									<div class="row4">
										<ul>
											<li>
												<h5>중량</h5>
												<div class="info">
													<span>${product.weight}g</span>
												</div>
											</li>
											<li>
												<h5>소비기한</h5>
												<div class="info">
													<span>수령일 포함 2일 이상 남은 상품을 보내드립니다. /소비기한: 제조일로부터 냉장
														5일</span>
												</div>
											</li>
											<li>
												<h5>보관방법</h5>
												<div class="info">
													<span>상품페이지 참고</span>
												</div>
											</li>
											<!-- //중량, 유통기한, 보관방법 -->
										</ul>
									</div>
									<!-- 버튼 -->
									<div class="btn_group">
										<input type="hidden" name="pbCode" id="pbCode"
											value="${product.pbCode}">
										<button class="btn_lg btn_buy_lg"
											onclick="javascript:beforeCart();" style="cursor: pointer;">장바구니
											담기</button>
									</div>
							</div>
						</div>
						<div class="tbox prodetail storageClear">
							<%@ include file="/WEB-INF/views/review/review.jsp"%>
							<%@ include file="/WEB-INF/views/review/regist-review.jsp"%>
						</div>
					</div>
				</div>
			</div>
			<div class="products"></div>
		</div>

	</div>
	<!-- //상품상세 -->
	</div>
	</div>
	<!-- //container -->
	</div>

	<!-- container wrap -->
	<div id="rightquick" style="display: block;" class=""></div>

	<%@ include file="/WEB-INF/views/common/footer.jsp"%>


	<script type="text/javascript"
		src="//adimg.daumcdn.net/rt/roosevelt.js"></script>
	<script type="text/javascript" src="//static.criteo.net/js/ld/ld.js"
		async="true"></script>

	</div>


	<script type="text/javascript">
  

  $(document).ready(function() {
  function setCookie_Layer(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value)
        + "; path=/;domain=.thebanchan.co.kr; expires="
        + todayDate.toGMTString();
    +";";
  }
  function closeLayer(var1) {
    if (document.getElementById("checkBox_" + var1).checked) {
      setCookie_Layer(var1, "no", 1);
    }
    ;
  };
 // fnSetPrice();

</script>

</body>