<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<link rel="shortcut icon"
	href="https://image.thebanchan.co.kr/tbcImg/web/images/common/favicon.ico">
<link rel="stylesheet" href="${path}/resources/css/review-summary.css">
<link rel="stylesheet" href="${path}/resources/css/base.css">
<link rel="stylesheet" href="${path}/resources/css/libs/slick.css">
<link rel="stylesheet"
	href="${path}/resources/css/jquery-ui-1.10.4.custom.css">
<link rel="stylesheet" href="${path}/resources/css/layout_new.css">
<link rel="stylesheet" href="${path}/resources/css/common.css">
<link rel="stylesheet" href="${path}/resources/css/popup.css">
<link rel="stylesheet" href="${path}/resources/css/category.css">
<link rel="stylesheet" href="${path}/resources/css/shopcategory.css">
<link rel="stylesheet" href="${path}/resources/css/benefit.css">
<link rel="stylesheet" href="${path}/resources/css/event.css">
<link rel="stylesheet" href="${path}/resources/css/mydw.css">
<link rel="stylesheet" href="${path}/resources/css/customer.css">
<link rel="stylesheet" href="${path}/resources/css/member.css">
<link rel="stylesheet" href="${path}/resources/css/cart.css">
<link rel="stylesheet" href="${path}/resources/css/product_list.css">
<link rel="stylesheet" href="${path}/resources/css/product_view.css">
<script type="text/javascript">
	var isDebug = "real";
</script>
<script src="${path}/resources/js/jquery-1.9.1.min.js"></script>
<script defer="" src="${path}/resources/js/dropdown.js"></script>
<script defer="" src="${path}/resources/js/jquery.ajax.js"></script>
<script defer="" src="${path}/resources/js/jquery.bxslider.min.js"></script>
<script src="${path}/resources/js/libs/swiper.min.js"></script>
<script src="${path}/resources/js/libs/slick.min.js"></script>
<script defer="" src="${path}/resources/js/libs/imageMapResizer.min.js"></script>
<script defer="" src="${path}/resources/js/jquery.countdown.js"></script>
<script defer="" src="${path}/resources/js/jquery.pajinate.js"></script>
<script defer="" src="${path}/resources/js/jquery-ui-1.10.3.custom.js"></script>
<script src="${path}/resources/js/jquery.form.js"></script>
<script src="${path}/resources/js/libs/bxslider.min.js"></script>
<script src="${path}/resources/js/comm.js"></script>
<script defer="" src="${path}/resources/js/ui.js"></script>
<script defer="" src="${path}/resources/js/naverLogin_implicit-1.0.2.js"></script>
<script defer="" src="${path}/resources/js/json2.js"></script>
<script src="${path}/resources/js/dw_web.js"></script>
<script src="${path}/resources/js/pr_web.js"></script>
<script defer="" src="${path}/resources/js/openBW.js"></script>
<script defer="" src="${path}/resources/js/event.js"></script>
<script async="" src="${path}/resources/js/ga_tag_list.js"></script>
<script defer="" src="${path}/resources/js/renew_2021.js"></script>
<script defer="" src="${path}/resources/js/review.js"></script>
<noscript>
	<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W97P9F7"
		height="0" width="0" style="display: none; visibility: hidden"></iframe>
</noscript>
<script type="text/javascript"
	src="//dynamic.criteo.com/js/ld/ld.js?a=25834" async="true">
</script>
<meta name="keywords" content="더반찬,더반찬&amp;,더반찬앤드,더반찬엔드,더반찬앤,더반찬엔">
<meta name="description"
	content="수제반찬부터 메인요리까지, 가장 간편하고 맛있는 식사는 더반찬&amp;!">
<hr>
<script type="text/javascript">
	$(document)
			.ready(
					function() {
						if (document.getElementById("top-banner-cont")) {
							$('.top-banner').show();
							cookiedata = document.cookie;
							if (cookiedata.indexOf("top-banner-cont=done") < 0) { //쿠키 변경 여부 불러오기
								document.getElementById('top-banner-cont').style.visibility = "visible";
							} else {
								document.getElementById('top-banner-cont').style.display = "none";
								$('#top-banner-wrap').remove();
							}
						}

						$('#hd_sch').keydown(function(event) {
							if (event.keyCode == 13) {
								goSearch();
							}
						})

						getSearchCookie("hsearch_");

						mnu_type_click();

						$("#hd_sch").attr("placeholder", "맛있는 여유, 더반찬&");

						$.ajax({
							type : "GET",
							url : "/cart/amount",
							dataType : 'json',
							success : function(data) {
								$("#cart-total-amount").val(data);
							},
							error : function(data) {
								alert("장바구니 불러오지 못했습니다.");
								return;
							}
						});
					});


	/*  상품검색 및 최근검색어를 통한 재검색  */
	function goSearch(searchWord) {
		//재검색
		if (searchWord != null) {
			$("#hd_sch").val(searchWord);
		}

		if ($("#hd_sch").val() == "") {

			location.href = "/";

		} else {
			var hd_sch = $("#hd_sch").val();
			hd_sch = $.trim(hd_sch); // 앞뒤 공백 제거
			hd_sch = hd_sch.replace(/\s{2,}/gi, ' '); // 문자열 한칸 이상 공백을 한칸 공백으로 치환
			hd_sch = hd_sch.replace(" ", "$");
			setSearchCookie("hsearch_" + hd_sch, hd_sch, 1);

			$("#frm_search").attr({
				"target" : "_self",
				"action" : "/search/hsearch.do"
			}).submit();
		}
	}

	/*  최근검색어 > 검색어 쿠키에 저장  */
	function setSearchCookie(key, value, exp) {
		var date = new Date();
		date.setTime(date.getTime() + exp * 1000 * 60 * 60 * 24); // 쿠키값 유지 기간 설정
		document.cookie = key + "=" + value + ";expire=" + date.toUTCString()
				+ ';path=/;';
	}

	/*  최근검색어리스트 쿠키에서 가져오기   */
	function getSearchCookie(cookie_name) {

		//최근검색어 리스트 삭제
		var list = document.getElementById('latelyKeyWordSearchList');
		while (list.firstChild) {
			list.removeChild(list.firstChild);
		}

		var key, value;
		var html_list = "";
		var html_none = "";
		var index = 0;

		html_list += "<p class=\"title\">최근검색어</p>";
		html_list += "<a href=\"javascript:delSearchCookie();\" class=\"btn-all-del\">전체삭제</a><ul>";
		var cookieArr = document.cookie.split(";");
		for (var i = cookieArr.length - 1; i >= 0; i--) {
			key = cookieArr[i].substr(0, cookieArr[i].indexOf('='));
			value = cookieArr[i].substr(cookieArr[i].indexOf('=') + 1);
			value = value.replace('$', ' ');
			if (key.indexOf(cookie_name) != -1) {
				if (index == 4) {
					document.cookie = key
							+ '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;path=/;';
				} else {
					index += 1;
					html_list += "<li><a href=\"javascript:goSearch(`" + value
							+ "`);\">" + value + "</a>";
					html_list += "<a href=\"javascript:delSearchCookie(`"
							+ value + "`)\" class=\"btn-del\">삭제</a></li>";
				}

			}
		}
		html_list += "</ul>";

		if (index == 0) {
			html_none += "<p class=\"title\">최근검색어</p>";
			html_none += "<div class=\"nodata-wrap\"><p>최근 검색어가 없습니다.</p></div>";
			$("#latelyKeyWordSearchList").append(html_none);

		} else {
			$("#latelyKeyWordSearchList").append(html_list);
		}

	}
	/*  최근검색어 전체 삭제  */
	function delSearchCookie(searchWord) {
		if (searchWord == null) {
			var cookieArr = document.cookie.split(";");
			for (var i = 0; i < cookieArr.length; i++) {
				key = cookieArr[i].substr(0, cookieArr[i].indexOf('='));
				value = cookieArr[i].substr(cookieArr[i].indexOf('=') + 1);
				if (key.indexOf("hsearch_") != -1) {
					document.cookie = key
							+ '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;path=/;'; // 쿠키값 유지기간을 과거로 해서 삭제
				}
			}
		} else {
			searchWord = searchWord.replace(' ', '$');
			document.cookie = 'hsearch_' + searchWord
					+ '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;path=/;';
		}

		getSearchCookie("hsearch_");
	}

	//우편번호 팝업
	openPop_Addr2 = function(no, earlyDeli) {

		var url = ('https:' == document.location.protocol ? 'https://'
				: 'http://')
				+ 'www.thebanchan.co.kr/common/zipSearch.do?confirmDeli=Y&theBanchanDelivery=Y';

		try {
			if (stringUtil.getString(isDebug, "dev") == "dev") {
				url = "/common/zipSearch.do?confirmDeli=Y&theBanchanDelivery=Y";
			}
		} catch (e) {
			url = "/common/zipSearch.do?confirmDeli=Y&theBanchanDelivery=Y";
		}

		if (earlyDeli == 'Y') {
			url += "&earlyDeli=Y";
		}

		open_scroll_no_center(url, '_blank', '555', '700');
	};

	// 전체 카테고리 : 공통

	function mnu_type_click(){
		$.ajax({
			type : "POST",
			url : "/category",
			dataType : 'json',
			success : function(data) {
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
<hr>
<p class="skip">
	<a href="#container">본문 내용 바로가기</a>
</p>
<!-- HEADER -->
<header class="header">

	<div class="header-top">

		<div class="header-inner row-c">
			<div class="top-menu-wrap">
				<ul class="top-menu">
					<li><a href="#" data-click="300000030">로그아웃</a></li>
					<li><a href="/customer/main.do?status='02'&page=1&size=5"
						onclick="changeLoginId();" data-click="300000032">고객센터</a></li>
					<li><a href="javascript:openPop_Addr2('0');"
						data-click="300000033">배송지역 검색</a></li>
				</ul>
			</div>
			<div class="inner-row">
				<div class="row-col">
					<h1 class="logo">
						<a href="/" title="메인으로 이동"><span class="blind">더반찬</span></a>

					</h1>
					<div class="sch-inp">
						<form id="frm_search" name="frm_search" method="get">
							<input type="text" id="hd_sch" name="hd_sch" autocomplete="off"
								placeholder="맛있는 여유, 더반찬&amp;">
							<button id="btnSearch" class="btn-sch" title="검색하기"
								onclick="goSearch();return false;">
								<img
									src="	https://image.thebanchan.co.kr/tbcImg/web/images/common/header-sch.png"
									alt="검색" data-click="300000021">
							</button>
							<button type="button" class="btn-clear hidden">지우기</button>
							<div id="latelyKeyWordSearchList" class="sch-box"
								style="display: none">
								<p class="title">최근검색어</p>
								<div class="nodata-wrap">
									<p>최근 검색어가 없습니다.</p>
								</div>
							</div>
						</form>
					</div>
				</div>

				<div class="row-col">

					<div class="my-menu">
						<img tabindex="0" src="/images/common/header-mypage.png"
							class="mypage" onmouseover="showTooltip(this)"
							onmouseout="hideTooltip(this)" style="cursor: pointer;"> <span
							class="tooltip-customer-id" id="customer-id"
							style="display: none;">더반찬님</span>

						<!-- 최근 본 목록 -->
						<div tabindex="0" class="lately-product">
							<div class="lately-thumb" style="cursor: pointer;">
								<a href="/product/detail.do?productId=003572662"><img
									src="https://image.thebanchan.co.kr/dwmall/static_root/product_img/main/0035726/003572662_2_a.jpg"
									alt="최근 본 상품"
									onerror="this.src='https://image.thebanchan.co.kr/dwmall/static_root/no_img/no_productauto.jpg'"></a>
							</div>
							<div id="lately">
								<div class="lately-sub nothing">
									<h3 class="lately-title">최근 본 상품</h3>
									<img src="images/icon/ico_lately_view.png">
									<p>최근 본 상품이 없습니다</p>
								</div>

								<div class="lately-sub">
									<h3 class="lately-title">최근 본 상품</h3>
									<div
										class="swiper latelySwiper swiper-container swiper-initialized swiper-horizontal swiper-pointer-events">
										<div class="swiper-wrapper"
											id="swiper-wrapper-339b8101169579316" aria-live="polite"
											style="transition-duration: 0ms;">
											<div class="swiper-slide">
												<a href="/product/detail.do?productId=003572662">
													<figure class="zoomimg">
														<figcaption></figcaption>
														<img
															src="https://image.thebanchan.co.kr/dwmall/static_root/product_img/main/0035726/003572662_2_a.jpg"
															border="0" alt="" width="auto" height="auto" class=""
															onerror="this.src='https://image.thebanchan.co.kr/dwmall/static_root/no_img/no_productauto.jpg'">
													</figure>
												</a>
											</div>
											<div class="swiper-slide">
												<a href="/product/detail.do?productId=003687764">
													<figure class="zoomimg">
														<figcaption></figcaption>
														<img
															src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6001071_1_a.jpg"
															border="0" alt="바로구운 양념장어덮밥" width="auto" height="auto"
															class=""
															onerror="this.src='https://image.thebanchan.co.kr/dwmall/static_root/no_img/no_productauto.jpg'">
													</figure>
												</a>
											</div>
										</div>
										<span class="swiper-notification" aria-live="assertive"
											aria-atomic="true"></span>
									</div>

									<div class="lately-move">
										<div class="move prev" tabindex="0" role="button"
											aria-label="Previous slide"
											aria-controls="swiper-wrapper-339b8101169579316"
											aria-disabled="false">
											<img src="images/main/lately-swiper-prev.png" alt="이전">
										</div>
										<div class="move next" tabindex="0" role="button"
											aria-label="Next slide"
											aria-controls="swiper-wrapper-339b8101169579316"
											aria-disabled="false">
											<img src="images/main/lately-swiper-next.png" alt="다음">
										</div>
										<div
											class="latelySwiper-pn swiper-pagination-fraction swiper-pagination-horizontal">
											<span class="swiper-pagination-current">0</span> / <span
												class="swiper-pagination-total">0</span>
										</div>
									</div>
								</div>
								<script>
									var aHref = $(
											'div.latelySwiper div.swiper-wrapper a:eq(0)')
											.attr("href");
									var imgSrc = $(
											'div.latelySwiper div.swiper-wrapper a:eq(0) img')
											.attr("src");
									var innerhtml = '<a href="'+aHref+'"><img src="'+imgSrc+'" alt="최근 본 상품"' + ' onerror=\"this.src=\'https://image.thebanchan.co.kr/dwmall/static_root/no_img/no_productauto.jpg\'\" /></a>';
									$('div.lately-product div.lately-thumb')
											.html(innerhtml);

									$(document)
											.ready(
													function() {
														var headerLatelySwiper = new Swiper(
																".header .latelySwiper",
																{
																	slidesPerView : 3,
																	slidesPerGroup : 3,
																	spaceBetween : 10,
																	allowTouchMove : false,
																	pagination : {
																		el : ".header .lately-product .latelySwiper-pn",
																		type : "fraction",
																	},
																	navigation : {
																		nextEl : ".header .lately-product .next",
																		prevEl : ".header .lately-product .prev",
																	},
																	observer : true,
																	observeParents : true,
																	dynamicBullets : true
																});
													})
									function showTooltip(element) {
										const tooltip = element.nextElementSibling; // 이미지 다음에 있는 툴팁 요소 선택
										tooltip.style.display = 'block'; // 툴팁 표시
									}

									function hideTooltip(element) {
										const tooltip = element.nextElementSibling; // 이미지 다음에 있는 툴팁 요소 선택
										tooltip.style.display = 'none'; // 툴팁 숨김
									}
								</script>
							</div>
						</div>

						<div tabindex="0" class="cart">
							<a href="/cart/main.do" class="btn-cart" title="장바구니로 이동"> <img
								src="https://image.thebanchan.co.kr/tbcImg/web/images/common/header-cart.png"
								alt="장바구니"> <span class="count" id="cart-total-amount">${cartTotalAmount}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>

	<div class="header-bottom">
		<div class="header-inner row-c">
			<div class="left-col">
				<button class="season-menu" data-click="300000040">카테고리</button>
				<div class="main-menu-wrap">
					<ul class="main-menu">
						<li class="menu-item lightening" style="display: none;"><a
							href="/category/main.do?cate_id=02110012"
							class="menu-btn new ani ani2" data-click="300000041"><i
								class="flash">번</i><i class="flash">쩍</i><i class="flash">딜</i></a></li>
						<li class="menu-item"><a
							href="/category/main.do?cate_id=02110034" class="menu-btn "
							data-click="300000046">선물하기</a></li>
						<li class="menu-item"><a href="/display/best100.do"
							class="menu-btn " data-click="300000044">베스트</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- 카테고리 [S] -->
	<div class="gnb-sub-wrap">
		<div id="inner_box" class="inner-box">
		</div></div>
		<!-- 카테고리 [E] -->
</header>
<!--// HEADER -->
