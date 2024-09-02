/* PC용 GA_TAG LIST 20170721 YST*/
$(document).ready(function() {

	/*********************************   팝업   ********************************* */

	//메인 팝업
	$(".layer_popup_big").click(function() {
		ga("send", {
			hitType: "event",
			eventCategory: "PC-팝업",
			eventAction: "메인팝업",
			eventLabel: "메인팝업"
		});
	});

	//개인화 토스트 팝업
	$(".personal_message dl dd .btn").click(function() {
		ga("send", {
			hitType: "event",
			eventCategory: "PC-팝업",
			eventAction: "개인화 토스트 팝업",
			eventLabel: "쿠폰 다운 받기"
		});
	});

	/*********************************   GNB   ********************************* */
	$("#hban_wrap .hbandbanner map area").click(function() {
		ga("send", {
			hitType: "event",
			eventCategory: "PC-GNB",
			eventAction: "스카이배너",
			eventLabel: "스카이배너"
		});
	});

	// 유틸리티 우측
	$("#header .hglobal ul li a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-GNB",
				eventAction: "유틸리티 우측",
				eventLabel: text
			});
		});
	});

	$("#header .hlogo").click(function() {
		ga("send", {
			hitType: "event",
			eventCategory: "PC-GNB",
			eventAction: "로고",
			eventLabel: "로고"
		});
	});

	// 검색창 - 키워드 문자 포함 클릭
	$("#header .hsearch a.inbtn").click(function() {
		var text = $("#header .hsearch .insearch").attr("search_marketing_keyword");
		ga("send", {
			hitType: "event",
			eventCategory: "PC-GNB",
			eventAction: "검색버튼",
			eventLabel: text
		});
	});

	// 검색창 자동완성 검색
	$("#header .hsearch .hsearchauto .autotab_complete ul li a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-GNB",
				eventAction: "자동완성",
				eventLabel: text
			});
		});
	});

	// 검색창 최근검색어
	$("#autotab_content1 ul li a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-GNB",
				eventAction: "최근검색어",
				eventLabel: text
			});
		});
	});

	// 검색창 인기검색어
	$("#autotab_content2 ul li a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-GNB",
				eventAction: "인기검색어",
				eventLabel: text
			});
		});
	});

	// MY동원몰
	$("#header .mydongwon_cart_grp .mydongwonmall a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-GNB",
				eventAction: "MY동원몰",
				eventLabel: text
			});
		});
	});

	// 장바구니
	$("#header .mydongwon_cart_grp .cart_btn").click(function() {
		ga("send", {
			hitType: "event",
			eventCategory: "PC-GNB",
			eventAction: "장바구니",
			eventLabel: "장바구니"
		});
	});

	// 카테고리바
	$("#header .hgnb .gnbls li a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-GNB",
				eventAction: "GNB 카테고리바",
				eventLabel: text
			});
		});
	});


	/*********************************   윙메뉴   ********************************* */


	// 왼쪽윙
	$("#leftquick ul li a").each(function() {
		var text = $(this).find("img").attr("alt");
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-윙메뉴",
				eventAction: "왼쪽윙",
				eventLabel: text
			});
		});
	});

	$("#leftquick .layer_popup_small.ly_all").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "왼쪽윙",
			eventLabel: "달려라할인_small"
		});
	});

	$("#leftquick .layer_popup_small.ly_emp").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "왼쪽윙",
			eventLabel: "임직원배너"
		});
	});

	$("#leftquick a#bandDetailInfo").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "왼쪽윙",
			eventLabel: "전단특가"
		});
	});

	$("#leftquick a#brandCateGo0").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "왼쪽윙",
			eventLabel: "코스트코"
		});
	});

	$("#leftquick a#brandCateGo1").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "왼쪽윙",
			eventLabel: "메가마트"
		});
	});

	/*********************************   메인 최상단  ********************************* */

	$(".main_slide .tab ul li a").each(function() {
		var text = $(this).text();
		if($(this).attr("title")){text = $(this).attr("title")}
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "최상단-LNB",
				eventLabel: text
			});
		});
	});

	$(".main_slide .slide .slide_img li a").each(function() {
		var text = $(this).attr("title");
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "최상단-비쥬얼 롤링 배너",
				eventLabel: text
			});
		});
	});

	/*********************************  메인 중단  ********************************* */

	//브랜드위크
	$(".brand_hcode map area").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-메인",
			eventAction: "중단-브랜드위크",
			eventLabel:"브랜드위크"
		});
	});



});










//ajax호출 영역
$(window).load(function() {

	/*********************************  오른쪽 윙메뉴  ********************************* */
	// 오른쪽윙 - 쇼핑혜택
	$("#rightquick .rprocon.rbenefit > a").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "쇼핑혜택 화면 열기"
		});
	});

	$("#rightquick .rprocon.rbenefit .rprobox .info .name").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "쇼핑혜택레이어-이름"
		});
	});


	$("#rightquick .rprocon.rbenefit .rprobox .info.rmem_sb ul li:nth-child(0)").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "쇼핑혜택레이어-쿠폰"
		});
	});

	$("#rightquick .rprocon.rbenefit .rprobox .info.rmem_sb ul li:nth-child(1)").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "쇼핑혜택레이어-적립금"
		});
	});

	$("#rightquick .rprocon.rbenefit .rprobox .employee_point ul li:nth-child(1)").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "쇼핑혜택레이어-임직원복지포인트"
		});
	});

	$("#rightquick .rprocon.rbenefit .rprobox .employee_point ul li:nth-child(1)").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "쇼핑혜택레이어-임직원할인포인트"
		});
	});

	$("#rightquick .rprocon.rbenefit .rprobox .rspbuy .rcouponls a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-윙메뉴",
				eventAction: "오른쪽윙",
				eventLabel: "쇼핑혜택레이어-" + text
			});
		});
	});

	$("#rightquick .rprocon.rbenefit .rprobox .rspbuy .rmeminfo a").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "쇼핑혜택레이어-등급등업안내"
		});
	});

	$("#rightquick .rprocon.rbenefit .rprobox .rbuyprols a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-윙메뉴",
				eventAction: "오른쪽윙",
				eventLabel: "쇼핑혜택레이어-추천상품 : "+text
			});
		});
	});

	$("#rightquick .rbenefit .rprobox.etc .loginbox a").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "쇼핑혜택레이어-로그인버튼"
		});
	});

	$("#rightquick .rbenefit .rprobox.etc .slpacc_log_banner a").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "쇼핑혜택레이어-개인정보 유효기간 연장배너"
		});
	});

	// 오른쪽윙 - 적립금
	$("#rightquick .rprocon.rpoint a").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "적립금 바로가기"
		});
	});

	// 오른쪽윙 - 임직원 복지/할인 포인트
	$("#rightquick .rprocon.rpoint_em .employee_point a:nth-child(0)").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "임직원 복지 포인트 바로가기"
		});
	});

	$("#rightquick .rprocon.rpoint_em .employee_point a:nth-child(1)").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "임직원 할인 포인트 바로가기"
		});
	});

	// 오른쪽윙 - 장바구니
	$("#rightquick .rprocon.rcart a").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "장바구니 화면 열기"
		});
	});

	$("#rightquick .rprocon.rcart .rprobox .pacontent a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-윙메뉴",
				eventAction: "오른쪽윙",
				eventLabel: "장바구니레이어-상품 : "+text
			});
		});
	});

	$("#rightquick .rprocon.rcart .rprobox .btn a").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "장바구니 바로가기"
		});
	});


	// 오른쪽윙 - 찜목록
	$("#rightquick .rprocon.rselected a").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "찜목록 화면 열기"
		});
	});

	$("#rightquick .rprocon.rselected .rprobox .pacontent a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-윙메뉴",
				eventAction: "오른쪽윙",
				eventLabel: "찜목록레이어-상품 : "+text
			});
		});
	});

	$("#rightquick .rprocon.rselected .rprobox .btn a").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "찜목록 바로가기"
		});
	});


	// 오른쪽윙 - 최근본상품
	$("#rightquick .rprocon.rsee a").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "최근본상품 화면 열기"
		});
	});

	$("#rightquick .rprocon.rsee .rprobox .etc01 .pacontent a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-윙메뉴",
				eventAction: "오른쪽윙",
				eventLabel: "최근본레이어-상품 : "+text
			});
		});
	});

	$("#rightquick .rprocon.rsee .rprobox .etc02 .pacontent a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-윙메뉴",
				eventAction: "오른쪽윙",
				eventLabel: "최근구매레이어-상품 : "+text
			});
		});
	});

	// 오른쪽윙 - 쳇봇상담
	$("#rightquick .rprocon.chatbot a").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "챗봇상담"
		});
	});

	// 오른쪽윙 - 임직원mall
	$("#rightquick .remployee a").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-윙메뉴",
			eventAction: "오른쪽윙",
			eventLabel: "임직원mall"
		});
	});

	$("#rightquick .rbtntop a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-윙메뉴",
				eventAction: "오른쪽윙",
				eventLabel: text
			});
		});
	});

	/*********************************  메인 중단  ********************************* */
	//달려라 할인
	$(".main_today_e ul li a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "중단-달려라 할인",
				eventLabel: text
			});
		});
	});

	//아울렛
	$(".main_outlet ul li a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "중단-아울렛",
				eventLabel: text
			});
		});
	});

	//브랜드위크
	$(".brand_hcode map area").click(function(){
		ga("send", {
			hitType: "event",
			eventCategory: "PC-메인",
			eventAction: "중단-브랜드위크",
			eventLabel: "브랜드위크"
		});
	});

	//빅세일
	$(".main_bigsale ul li.pro a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "중단-빅세일",
				eventLabel: text
			});
		});
	});

	//럭키딜
	$(".main_deal .tab_con ul li a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "중단-럭키딜",
				eventLabel: text
			});
		});
	});

	//신규입점업체
	$(".main_newitem ul li a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "중단-신규입정업체",
				eventLabel: text
			});
		});
	});

	//기획전배너모음
	$(".main_plan ul li a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "중단-기획전배너모음",
				eventLabel: text
			});
		});
	});

	//개인화 상품 추천
	// 180326 천소리 수정 요청 $(".personalization a").each(function() {
		$(".main_recom a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "중단-개인화상품추천",
				eventLabel: text
			});
		});
	});

	//동원브랜드 추천
	$(".main_dongwon_recommend a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "중단-동원브랜드추천",
				eventLabel: text
			});
		});
	});

	//밴드배송 베스트상품
	$(".main_band a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "중단-밴드배송 베스트",
				eventLabel: text
			});
		});
	});

	//쿨밴드배송 베스트상품
	$(".main_coolband a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "중단-쿨밴드배송 베스트",
				eventLabel: text
			});
		});
	});

	//동원몰 베스트
	$(".main_dongwonmall_best a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "중단-동원몰 베스트",
				eventLabel: text
			});
		});
	});

	//추천 레시피
	$(".main_recommend_recipe a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "중단-추천 레시피",
				eventLabel: text
			});
		});
	});

	//상품평 베스트
	$(".main_comment_best a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "중단-상품평 베스트",
				eventLabel: text
			});
		});
	});

	//이벤트
	$(".main_event a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-메인",
				eventAction: "중단-이벤트",
				eventLabel: text
			});
		});
	});


	// ============================================== 카테고리 ============================================== //



	//네비게이션
	$(".category .category .pathls a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-카테고리 매장",
				eventAction: "상단-네비게이션",
				eventLabel: text
			});
		});
	});

	//카테고리 리스트
	$(".category .category .categorylist a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-카테고리 매장",
				eventAction: "상단-카테고리 리스트",
				eventLabel: text
			});
		});
	});

	//카테고리 베스트
	$(".category .category .categorybest a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-카테고리 매장",
				eventAction: "상단-카테고리 베스트",
				eventLabel: text
			});
		});
	});

	//카테고리별 상품 베스트
	$(".category .category .bestproduct a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-카테고리 매장",
				eventAction: "상단-카테고리별 상품베스트",
				eventLabel: text
			});
		});
	});

	//카테고리별 상품 리스트
	$(".category .category .productlist a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-카테고리 매장",
				eventAction: "중단-카테고리별 상품 리스트",
				eventLabel: text
			});
		});
	});

	//기획전 모음
	$(".category .category .planls a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-카테고리 매장",
				eventAction: "중단-기획전 모음",
				eventLabel: text
			});
		});
    });
    
    //검색 페이지 koost영역 분석 - 키워드 추천
	$(".re_hashtags_wrap a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-검색결과",
				eventAction: "KOOST영역-키워드",
				eventLabel: text
			});
		});
    });
    
	//검색 페이지 koost영역 분석 - 상품추천
	$(".search_hit a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-검색결과",
				eventAction: "KOOST영역-상품추천",
				eventLabel: text
			});
		});
	});

	//검색 페이지 검색조건
	$(".search_more a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-검색결과",
				eventAction: "검색조건",
				eventLabel: text
			});
		});
	});

	//검색 페이지 리스트
	$(".search_prd_list a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-검색결과",
				eventAction: "검색리스트",
				eventLabel: text
			});
		});
	});

    // ============================================== 상품 상세 ============================================== //
    
    //상품 상세 페이지 KOOST - 키워드 추천
	$(".related_hashtags_wrap a").each(function() {
		var text = $(this).text();
		$(this).click(function(){
			ga("send", {
				hitType: "event",
				eventCategory: "PC-상품상세",
				eventAction: "KOOST영역-키워드추천",
				eventLabel: text
			});
		});
    });
    
});