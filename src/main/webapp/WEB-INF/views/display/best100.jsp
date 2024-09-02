<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<body>
<link rel="shortcut icon"
	href="${path}/webapp/images/common/favicon.ico">
<%@ include file="/WEB-INF/views/common/header.jsp"%>
<div id="container_wrap">
		<!-- container -->
		<div id="container100" class="best100">
			<div id="middle">
				<!-- content -->
				<div id="content">
					<div class="top">
						<div class="inner">
							<img src="https://image.thebanchan.co.kr/tbcImg/web/images/content/shopcategory/best100_top_title.png" class="title" alt="BEST 100 많은 고객님께서 선택하신 동원몰 베스트 상품" style="bottom: 35px; opacity: 1;">
							<img src="https://image.thebanchan.co.kr/tbcImg/web/images/content/shopcategory/best100_top_obj01.png" class="obj01" alt="배경" style="bottom: -74px; margin-left: -517px; opacity: 1;">
							<img src="https://image.thebanchan.co.kr/tbcImg/web/images/content/shopcategory/best100_top_obj02.gif" class="obj02" alt="배경" style="display: inline;">
							<img src="https://image.thebanchan.co.kr/tbcImg/web/images/content/shopcategory/best100_top_obj03.png" class="obj03" alt="배경" style="display: inline;">
							<img src="https://image.thebanchan.co.kr/tbcImg/web/images/content/shopcategory/best100_top_obj04.png" class="obj04" alt="배경" style="display: inline;">
						</div>
						<script type="text/javascript">
							$(document).ready(function() {
								setTimeout(function(){
									$(".best100 .top .inner .title").animate({"bottom":"35px","opacity":"1"},1000,"easeOutBack");
								}, 1000);
								setTimeout(function(){
									$(".best100 .top .inner .obj01").animate({"bottom":"-74px","marginLeft":"-517px","opacity":"1"},1000,"easeOutBack");
								}, 1500);
								setTimeout(function(){
									$(".best100 .top .inner .obj03").fadeIn();
								}, 2000);
								setTimeout(function(){
									$(".best100 .top .inner .obj04").fadeIn();
								}, 2500);
								setTimeout(function(){
									$(".best100 .top .inner .obj02").fadeIn();
								}, 3000);
								setInterval(function() {
									$(".best100 .top .inner .obj02").addClass("active");
									setTimeout(function(){
										$(".best100 .top .inner .obj02").removeClass("active");
									}, 2500);
								}, 5000);
							});
						</script>
					</div>

					<!-- 실시간 베스트가 최소 5개는 있어야 노출 -->
					<!-- 베스트 10 -->
					<div class="best10">
						<div class="content_box1280">
							<div class="list-wrap">
								<div class="page-title">
									<div class="title">
										<span class="icon"><img src="https://image.thebanchan.co.kr/tbcImg/web/images/icon/ico_best.png"></span>
										<strong class="real-time">
											실시간 베스트
											<span class="best-info">실시간 베스트 기준 안내</span>
											<span class="best-info-box">
												2024.07.17<span class="org"> 20:13</span> 기준 <br> 24시간 동안 가장 판매가 많이 된 상품
											</span>
										</strong>
									</div>
								</div>
							</div>
							<div>
								<ul>
								<input type="hidden" id="newPrdCnt" value="">
<!-- 상품리스트 -->
<ul class="product_list list_type_4">
<!-- 검색결과 없을 경우 -->
<li class="product_item" data-pbcode="003659465" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="모둠두메산나물">
		<input type="hidden" id="finalPrice_default" value="8910">
<input type="hidden" id="finalPrice" value="8910">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659465','','01')" title="모둠두메산나물">
			<div class="thumb" data-oriprice="9900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000928_1_a.jpg" border="0" alt="모둠두메산나물" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank orange">1</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">모둠두메산나물</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>10</em>%</span>
						<span class="new_price"><strong>8,910</strong>원</span>
						<del class="old_price" data-price="9900"><em class="num">9,900</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 4,069원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659465')" title="모둠두메산나물">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.8</span>
				<span class="review">(10,697건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659465','01');return false;" title="모둠두메산나물" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659465');" title="모둠두메산나물" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="003659689" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="깻잎절임(100g)">
		<input type="hidden" id="finalPrice_default" value="3620">
<input type="hidden" id="finalPrice" value="3620">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659689','','01')" title="깻잎절임(100g)">
			<div class="thumb" data-oriprice="3900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6001003_1_a.jpg" border="0" alt="깻잎절임(100g)" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank orange">2</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">깻잎절임(100g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>7</em>%</span>
						<span class="new_price"><strong>3,620</strong>원</span>
						<del class="old_price" data-price="3900"><em class="num">3,900</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 3,621원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			<span class="date_available">7/20(토) 새벽 가능</span>
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659689')" title="깻잎절임(100g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.5</span>
				<span class="review">(276건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659689','01');return false;" title="깻잎절임(100g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659689');" title="깻잎절임(100g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="003662449" data-pb_com_cd="01" data-cate1="국" data-cate3="국" data-pbnm="수제 콩나물김치국">
		<input type="hidden" id="finalPrice_default" value="4300">
<input type="hidden" id="finalPrice" value="4300">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003662449','','01')" title="수제 콩나물김치국">
			<div class="thumb" data-oriprice="4300">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/product_img/main/0036624/003662449_2_a.jpg" border="0" alt="" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank orange">3</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">수제 콩나물김치국</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="new_price" data-price="4300"><strong>4,300</strong>원</span>
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 782원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003662449')" title="수제 콩나물김치국">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.8</span>
				<span class="review">(3,315건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003662449','01');return false;" title="수제 콩나물김치국" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003662449');" title="수제 콩나물김치국" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="003659692" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="고추장소스진미채(70g)">
		<input type="hidden" id="finalPrice_default" value="3900">
<input type="hidden" id="finalPrice" value="3900">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659692','','01')" title="고추장소스진미채(70g)">
			<div class="thumb" data-oriprice="3900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000860_1_a.jpg" border="0" alt="고추장소스진미채(70g)" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank orange">4</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">고추장소스진미채(70g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="new_price" data-price="3900"><strong>3,900</strong>원</span>
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 5,572원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659692')" title="고추장소스진미채(70g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.6</span>
				<span class="review">(603건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659692','01');return false;" title="고추장소스진미채(70g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659692');" title="고추장소스진미채(70g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="003659777" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="한돈 제육볶음(400g)">
		<input type="hidden" id="finalPrice_default" value="8910">
<input type="hidden" id="finalPrice" value="8910">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659777','','01')" title="한돈 제육볶음(400g)">
			<div class="thumb" data-oriprice="9900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000897_1_a.jpg" border="0" alt="한돈 제육볶음(400g)" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank orange">5</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">한돈 제육볶음(400g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>10</em>%</span>
						<span class="new_price"><strong>8,910</strong>원</span>
						<del class="old_price" data-price="9900"><em class="num">9,900</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 2,228원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659777')" title="한돈 제육볶음(400g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.5</span>
				<span class="review">(220건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659777','01');return false;" title="한돈 제육볶음(400g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659777');" title="한돈 제육볶음(400g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="002559311" data-pb_com_cd="01" data-cate1="정육" data-cate3="양념육/까스류" data-pbnm="더반찬 고추장제육불고기 (180g)">
		<input type="hidden" id="finalPrice_default" value="4300">
<input type="hidden" id="finalPrice" value="4300">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('002559311','','01')" title="더반찬 고추장제육불고기 (180g)">
			<div class="thumb" data-oriprice="4300">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/product_img/main/0025593/002559311_3_a.jpg" border="0" alt="" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">6</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">더반찬 고추장제육불고기 (180g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="new_price" data-price="4300"><strong>4,300</strong>원</span>
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 2,389원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('002559311')" title="더반찬 고추장제육불고기 (180g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.7</span>
				<span class="review">(1,083건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('002559311','01');return false;" title="더반찬 고추장제육불고기 (180g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'002559311');" title="더반찬 고추장제육불고기 (180g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			<span class="flag_tbc ">간편조리</span>
					</div>
		
	</li>
<li class="product_item" data-pbcode="003659771" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="도라지오이무침(110g)">
		<input type="hidden" id="finalPrice_default" value="3510">
<input type="hidden" id="finalPrice" value="3510">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659771','','01')" title="도라지오이무침(110g)">
			<div class="thumb" data-oriprice="3900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000891_1_a.jpg" border="0" alt="도라지오이무침(110g)" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">7</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">도라지오이무침(110g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>10</em>%</span>
						<span class="new_price"><strong>3,510</strong>원</span>
						<del class="old_price" data-price="3900"><em class="num">3,900</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 3,191원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659771')" title="도라지오이무침(110g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.4</span>
				<span class="review">(306건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659771','01');return false;" title="도라지오이무침(110g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659771');" title="도라지오이무침(110g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			<span class="flag_tbc more_better">다다익선</span>
					</div>
		
	</li>
<li class="product_item" data-pbcode="003662499" data-pb_com_cd="01" data-cate1="메인요리" data-cate3="한식" data-pbnm="뚝배기불고기">
		<input type="hidden" id="finalPrice_default" value="9690">
<input type="hidden" id="finalPrice" value="9690">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003662499','','01')" title="뚝배기불고기">
			<div class="thumb" data-oriprice="11400">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000985_1_a.jpg" border="0" alt="뚝배기불고기" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">8</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">뚝배기불고기</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>15</em>%</span>
						<span class="new_price"><strong>9,690</strong>원</span>
						<del class="old_price" data-price="11400"><em class="num">11,400</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 1,762원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003662499')" title="뚝배기불고기">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.7</span>
				<span class="review">(4,425건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003662499','01');return false;" title="뚝배기불고기" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003662499');" title="뚝배기불고기" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
</ul>
<!-- //상품리스트 -->

<script type="text/javascript">
//장바구니 담기 실행 시
function prAddCart(pbCode,pbcomcd){
	if(pbCode=="003611032"){
		if(confirm("해당 상품은 장바구니 담기가 불가합니다. 이벤트 페이지를 확인해주세요.")){
			if('real'=='dev'){
				$(location).attr("href","/display/plan.do?seq=00000104124");
			}else{
				$(location).attr("href","/display/plan.do?seq=00000104417");
			}
		}
		
		return;
	}
	if(pbcomcd=="99"){
		alert("골라담기 상품입니다. 상세페이지로 이동 후 장바구니에 담아주세요.");
		return;
	}
	addCart(this,'',pbCode,'N');
	// 장바구니 담기 팝업 효과 추가
	$('.add-to-cart').addClass('add');	
	var popTimeOut = function(){
		$('.layer_box').fadeOut();
	}
	setTimeout(popTimeOut,3000);
}



//찜 하기 기능
function fnWishProc(id,pbCode) {
	if(pbCode=="003611032"){
		if(confirm("해당 상품은 찜하기가 불가합니다. 이벤트 페이지를 확인해주세요.")){
			if('real'=='dev'){
				$(location).attr("href","/display/plan.do?seq=00000104124");
			}else{
				$(location).attr("href","/display/plan.do?seq=00000104417");
			}
		}
		
		return;
	}
	
	checkLogin().done(function(data) {
		if (data.rst) {
			$.ajax({
				type : "POST",
				url : "/display/productWishProc.do",
				data : {
					PB_CODE : pbCode
				},
				dataType : "json",
				async : !1,
				success : function(data) {
					if(data.procGbn == "insert") {
						//$(id).addClass("liked");
						$(id).addClass("liked");
						//$(id).children('i').attr('class', 'icon icon-heart on');
						
						commonGoogleWish('add',pbCode);
						commonAirBridgeWish('add',pbCode);
					} else {
						//$(id).addClass("liked");
						$(id).removeClass("liked");
						//$(id).children('i').attr('class', 'icon icon-heart');
						
						commonGoogleWish('remove',pbCode);
					}
					alert(data.messages);
				},
				error : function(e) {
					alert("에러가 발생하였습니다.");
				}
			});
		} else {
			if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?")) {
				goLogin();
			}else{
				$(id).removeClass("liked");
				return false;
			}
		}
	});
}
</script></ul>
							</div>
						</div>
					</div>
					<!-- //베스트 10 -->


					<div class="content_box1280">
						<div class="list-wrap">
							<div class="page-title">
								<div class="title">
									<span class="icon"><img src="https://image.thebanchan.co.kr/tbcImg/web/images/icon/ico_best.png"></span>
									<strong class="top100">
										TOP 200
										<span class="best-info">TOP200 기준 안내</span>
										<span class="best-info-box">
											2024.07.17<span class="org"> 20:00</span> 기준 <br> 48시간 동안 가장 판매가 많이 된 상품
										</span>
									</strong>
								</div>
							</div>
						</div>
						<div class="tab100">
							<ul class="sub_tab tab_item5">
								<li id="p_0211" class="cnt selectedLi"><a href="javascript:best100Prd('0211','0211')">전체</a></li>
								<li id="p_0"><a href="javascript:best100Prd('02110035','0')">밑반찬</a></li>
										<!-- TODO: 아이콘/배너 -->
										<!-- 상품 -->
										<li id="p_1"><a href="javascript:best100Prd('02110004','1')">김치·젓갈·절임</a></li>
										<!-- TODO: 아이콘/배너 -->
										<!-- 상품 -->
										<li id="p_2"><a href="javascript:best100Prd('02110036','2')">메인요리·밀키트</a></li>
										<!-- TODO: 아이콘/배너 -->
										<!-- 상품 -->
										<li id="p_3"><a href="javascript:best100Prd('02110037','3')">국·탕·찌개</a></li>
										<!-- TODO: 아이콘/배너 -->
										<!-- 상품 -->
										<li id="p_4"><a href="javascript:best100Prd('02110039','4')">간편식</a></li>
										<!-- TODO: 아이콘/배너 -->
										<!-- 상품 -->
										<li id="p_5"><a href="javascript:best100Prd('02110040','5')">식재료</a></li>
										<!-- TODO: 아이콘/배너 -->
										<!-- 상품 -->
										<li id="p_6"><a href="javascript:best100Prd('02110010','6')">간식·떡·음료</a></li>
										<!-- TODO: 아이콘/배너 -->
										<!-- 상품 -->
										<li id="p_7"><a href="javascript:best100Prd('02110042','7')">정육</a></li>
										<!-- TODO: 아이콘/배너 -->
										<!-- 상품 -->
										</ul>
						</div>

						<div class="best_prod">
							<!-- 상품리스트 -->
							<div id="best100Prd"><ul class="item_unit">
<input type="hidden" id="newPrdCnt" value="">
<!-- 상품리스트 -->
<ul class="product_list list_type_4">
<!-- 검색결과 없을 경우 -->
<li class="product_item" data-pbcode="003662499" data-pb_com_cd="01" data-cate1="메인요리" data-cate3="한식" data-pbnm="뚝배기불고기">
		<input type="hidden" id="finalPrice_default" value="9690">
<input type="hidden" id="finalPrice" value="9690">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003662499','','01')" title="뚝배기불고기">
			<div class="thumb" data-oriprice="11400">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000985_1_a.jpg" border="0" alt="뚝배기불고기" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank orange">1</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">뚝배기불고기</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>15</em>%</span>
						<span class="new_price"><strong>9,690</strong>원</span>
						<del class="old_price" data-price="11400"><em class="num">11,400</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 1,762원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003662499')" title="뚝배기불고기">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.7</span>
				<span class="review">(4,425건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003662499','01');return false;" title="뚝배기불고기" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003662499');" title="뚝배기불고기" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="003659771" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="도라지오이무침(110g)">
		<input type="hidden" id="finalPrice_default" value="3510">
<input type="hidden" id="finalPrice" value="3510">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659771','','01')" title="도라지오이무침(110g)">
			<div class="thumb" data-oriprice="3900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000891_1_a.jpg" border="0" alt="도라지오이무침(110g)" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank orange">2</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">도라지오이무침(110g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>10</em>%</span>
						<span class="new_price"><strong>3,510</strong>원</span>
						<del class="old_price" data-price="3900"><em class="num">3,900</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 3,191원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659771')" title="도라지오이무침(110g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.4</span>
				<span class="review">(306건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659771','01');return false;" title="도라지오이무침(110g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659771');" title="도라지오이무침(110g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			<span class="flag_tbc more_better">다다익선</span>
					</div>
		
	</li>
<li class="product_item" data-pbcode="003659465" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="모둠두메산나물">
		<input type="hidden" id="finalPrice_default" value="8910">
<input type="hidden" id="finalPrice" value="8910">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659465','','01')" title="모둠두메산나물">
			<div class="thumb" data-oriprice="9900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000928_1_a.jpg" border="0" alt="모둠두메산나물" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank orange">3</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">모둠두메산나물</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>10</em>%</span>
						<span class="new_price"><strong>8,910</strong>원</span>
						<del class="old_price" data-price="9900"><em class="num">9,900</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 4,069원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659465')" title="모둠두메산나물">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.8</span>
				<span class="review">(10,697건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659465','01');return false;" title="모둠두메산나물" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659465');" title="모둠두메산나물" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="003659692" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="고추장소스진미채(70g)">
		<input type="hidden" id="finalPrice_default" value="3900">
<input type="hidden" id="finalPrice" value="3900">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659692','','01')" title="고추장소스진미채(70g)">
			<div class="thumb" data-oriprice="3900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000860_1_a.jpg" border="0" alt="고추장소스진미채(70g)" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank orange">4</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">고추장소스진미채(70g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="new_price" data-price="3900"><strong>3,900</strong>원</span>
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 5,572원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659692')" title="고추장소스진미채(70g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.6</span>
				<span class="review">(603건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659692','01');return false;" title="고추장소스진미채(70g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659692');" title="고추장소스진미채(70g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="003659777" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="한돈 제육볶음(400g)">
		<input type="hidden" id="finalPrice_default" value="8910">
<input type="hidden" id="finalPrice" value="8910">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659777','','01')" title="한돈 제육볶음(400g)">
			<div class="thumb" data-oriprice="9900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000897_1_a.jpg" border="0" alt="한돈 제육볶음(400g)" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank orange">5</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">한돈 제육볶음(400g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>10</em>%</span>
						<span class="new_price"><strong>8,910</strong>원</span>
						<del class="old_price" data-price="9900"><em class="num">9,900</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 2,228원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659777')" title="한돈 제육볶음(400g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.5</span>
				<span class="review">(220건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659777','01');return false;" title="한돈 제육볶음(400g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659777');" title="한돈 제육볶음(400g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="003659689" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="깻잎절임(100g)">
		<input type="hidden" id="finalPrice_default" value="3620">
<input type="hidden" id="finalPrice" value="3620">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659689','','01')" title="깻잎절임(100g)">
			<div class="thumb" data-oriprice="3900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6001003_1_a.jpg" border="0" alt="깻잎절임(100g)" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">6</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">깻잎절임(100g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>7</em>%</span>
						<span class="new_price"><strong>3,620</strong>원</span>
						<del class="old_price" data-price="3900"><em class="num">3,900</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 3,621원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			<span class="date_available">7/20(토) 새벽 가능</span>
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659689')" title="깻잎절임(100g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.5</span>
				<span class="review">(276건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659689','01');return false;" title="깻잎절임(100g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659689');" title="깻잎절임(100g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="003662449" data-pb_com_cd="01" data-cate1="국" data-cate3="국" data-pbnm="수제 콩나물김치국">
		<input type="hidden" id="finalPrice_default" value="4300">
<input type="hidden" id="finalPrice" value="4300">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003662449','','01')" title="수제 콩나물김치국">
			<div class="thumb" data-oriprice="4300">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/product_img/main/0036624/003662449_2_a.jpg" border="0" alt="" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">7</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">수제 콩나물김치국</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="new_price" data-price="4300"><strong>4,300</strong>원</span>
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 782원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003662449')" title="수제 콩나물김치국">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.8</span>
				<span class="review">(3,315건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003662449','01');return false;" title="수제 콩나물김치국" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003662449');" title="수제 콩나물김치국" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="003681748" data-pb_com_cd="01" data-cate1="국" data-cate3="탕" data-pbnm="[7월의 국]매운갈비탕 x2팩">
		<input type="hidden" id="finalPrice_default" value="15480">
<input type="hidden" id="finalPrice" value="15480">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003681748','','01')" title="[7월의 국]매운갈비탕 x2팩">
			<div class="thumb" data-oriprice="25800">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/100/1000650_1_a.jpg" border="0" alt="-" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">8</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">[7월의 국]매운갈비탕 x2팩</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>40</em>%</span>
						<span class="new_price"><strong>15,480</strong>원</span>
						<del class="old_price" data-price="25800"><em class="num">25,800</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 968원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003681748')" title="[7월의 국]매운갈비탕 x2팩">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.8</span>
				<span class="review">(12건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003681748','01');return false;" title="[7월의 국]매운갈비탕 x2팩" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003681748');" title="[7월의 국]매운갈비탕 x2팩" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			<span class="flag_tbc renewal">신메뉴</span>
					</div>
		
	</li>
<li class="product_item" data-pbcode="003568684" data-pb_com_cd="01" data-cate1="김치" data-cate3="김치" data-pbnm="오이소박이(800g)">
		<input type="hidden" id="finalPrice_default" value="12510">
<input type="hidden" id="finalPrice" value="12510">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003568684','','01')" title="오이소박이(800g)">
			<div class="thumb" data-oriprice="13900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000547_1_a.jpg" border="0" alt="오이소박이" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">9</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">오이소박이(800g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>10</em>%</span>
						<span class="new_price"><strong>12,510</strong>원</span>
						<del class="old_price" data-price="13900"><em class="num">13,900</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 1,564원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			<span class="date_available">7/20(토) 새벽 가능</span>
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003568684')" title="오이소박이(800g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.6</span>
				<span class="review">(688건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003568684','01');return false;" title="오이소박이(800g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003568684');" title="오이소박이(800g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="003693074" data-pb_com_cd="01" data-cate1="김치" data-cate3="김치" data-pbnm="더반찬 열무물김치 700g">
		<input type="hidden" id="finalPrice_default" value="8910">
<input type="hidden" id="finalPrice" value="8910">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003693074','','01')" title="더반찬 열무물김치 700g">
			<div class="thumb" data-oriprice="9900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6001073_1_a.jpg" border="0" alt="더반찬 열무물김치 700g" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">10</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">더반찬 열무물김치 700g</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>10</em>%</span>
						<span class="new_price"><strong>8,910</strong>원</span>
						<del class="old_price" data-price="9900"><em class="num">9,900</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 1,273원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			<span class="date_available">7/20(토) 새벽 가능</span>
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003693074')" title="더반찬 열무물김치 700g">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.4</span>
				<span class="review">(43건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003693074','01');return false;" title="더반찬 열무물김치 700g" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003693074');" title="더반찬 열무물김치 700g" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			<span class="flag_tbc renewal">신메뉴</span>
					</div>
		
	</li>
<li class="product_item" data-pbcode="003659703" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="쫀득연근조림(100g)">
		<input type="hidden" id="finalPrice_default" value="4300">
<input type="hidden" id="finalPrice" value="4300">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659703','','01')" title="쫀득연근조림(100g)">
			<div class="thumb" data-oriprice="4300">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000865_1_a.jpg" border="0" alt="연근조림(100g)" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">11</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">쫀득연근조림(100g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="new_price" data-price="4300"><strong>4,300</strong>원</span>
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 4,300원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659703')" title="쫀득연근조림(100g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.4</span>
				<span class="review">(156건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659703','01');return false;" title="쫀득연근조림(100g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659703');" title="쫀득연근조림(100g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			<span class="flag_tbc more_better">다다익선</span>
					</div>
		
	</li>
<li class="product_item" data-pbcode="003659511" data-pb_com_cd="01" data-cate1="반찬" data-cate3="전" data-pbnm="광주별미소고기육전">
		<input type="hidden" id="finalPrice_default" value="13900">
<input type="hidden" id="finalPrice" value="13900">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659511','','01')" title="광주별미소고기육전">
			<div class="thumb" data-oriprice="13900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000929_1_a.jpg" border="0" alt="광주별미소고기육전" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">12</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">광주별미소고기육전</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="new_price" data-price="13900"><strong>13,900</strong>원</span>
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 5,495원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			<span class="date_available">7/20(토) 새벽 가능</span>
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659511')" title="광주별미소고기육전">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.8</span>
				<span class="review">(8,368건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659511','01');return false;" title="광주별미소고기육전" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659511');" title="광주별미소고기육전" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="003659671" data-pb_com_cd="01" data-cate1="메인요리" data-cate3="한식" data-pbnm="더반찬 옛날잡채 (500g)">
		<input type="hidden" id="finalPrice_default" value="9900">
<input type="hidden" id="finalPrice" value="9900">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659671','','01')" title="더반찬 옛날잡채 (500g)">
			<div class="thumb" data-oriprice="9900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/product_img/main/0036596/003659671_2_a.jpg" border="0" alt="" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">13</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">더반찬 옛날잡채 (500g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="new_price" data-price="9900"><strong>9,900</strong>원</span>
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 1,980원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659671')" title="더반찬 옛날잡채 (500g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.7</span>
				<span class="review">(255건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659671','01');return false;" title="더반찬 옛날잡채 (500g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659671');" title="더반찬 옛날잡채 (500g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			<span class="flag_tbc more_better">다다익선</span>
					</div>
		
	</li>
<li class="product_item" data-pbcode="002559311" data-pb_com_cd="01" data-cate1="정육" data-cate3="양념육/까스류" data-pbnm="더반찬 고추장제육불고기 (180g)">
		<input type="hidden" id="finalPrice_default" value="4300">
<input type="hidden" id="finalPrice" value="4300">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('002559311','','01')" title="더반찬 고추장제육불고기 (180g)">
			<div class="thumb" data-oriprice="4300">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/product_img/main/0025593/002559311_3_a.jpg" border="0" alt="" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">14</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">더반찬 고추장제육불고기 (180g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="new_price" data-price="4300"><strong>4,300</strong>원</span>
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 2,389원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('002559311')" title="더반찬 고추장제육불고기 (180g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.7</span>
				<span class="review">(1,083건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('002559311','01');return false;" title="더반찬 고추장제육불고기 (180g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'002559311');" title="더반찬 고추장제육불고기 (180g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			<span class="flag_tbc ">간편조리</span>
					</div>
		
	</li>
<li class="product_item" data-pbcode="003568683" data-pb_com_cd="01" data-cate1="김치" data-cate3="김치" data-pbnm="나박김치(600g)">
		<input type="hidden" id="finalPrice_default" value="5310">
<input type="hidden" id="finalPrice" value="5310">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003568683','','01')" title="나박김치(600g)">
			<div class="thumb" data-oriprice="5900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000548_1_a.jpg" border="0" alt="나박김치" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">15</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">나박김치(600g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>10</em>%</span>
						<span class="new_price"><strong>5,310</strong>원</span>
						<del class="old_price" data-price="5900"><em class="num">5,900</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 885원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003568683')" title="나박김치(600g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.7</span>
				<span class="review">(639건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003568683','01');return false;" title="나박김치(600g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003568683');" title="나박김치(600g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			<span class="flag_tbc more_better">다다익선</span>
					</div>
		
	</li>
<li class="product_item" data-pbcode="003668339" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="볶음김치(500g.대용량)">
		<input type="hidden" id="finalPrice_default" value="9900">
<input type="hidden" id="finalPrice" value="9900">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003668339','','01')" title="볶음김치(500g.대용량)">
			<div class="thumb" data-oriprice="9900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6001022_1_a.jpg" border="0" alt="볶음김치" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">16</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">볶음김치(500g.대용량)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="new_price" data-price="9900"><strong>9,900</strong>원</span>
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 1,980원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003668339')" title="볶음김치(500g.대용량)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.8</span>
				<span class="review">(398건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003668339','01');return false;" title="볶음김치(500g.대용량)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003668339');" title="볶음김치(500g.대용량)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="003697993" data-pb_com_cd="01" data-cate1="국" data-cate3="탕" data-pbnm="[7월의 국]우리배추된장국 x2팩">
		<input type="hidden" id="finalPrice_default" value="7080">
<input type="hidden" id="finalPrice" value="7080">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003697993','','01')" title="[7월의 국]우리배추된장국 x2팩">
			<div class="thumb" data-oriprice="11800">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/100/1000505_1_a.jpg" border="0" alt="" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">17</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">[7월의 국]우리배추된장국 x2팩</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>40</em>%</span>
						<span class="new_price"><strong>7,080</strong>원</span>
						<del class="old_price" data-price="11800"><em class="num">11,800</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 644원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003697993')" title="[7월의 국]우리배추된장국 x2팩">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">5</span>
				<span class="review">(5건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003697993','01');return false;" title="[7월의 국]우리배추된장국 x2팩" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003697993');" title="[7월의 국]우리배추된장국 x2팩" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			<span class="flag_tbc renewal">신메뉴</span>
					</div>
		
	</li>
<li class="product_item" data-pbcode="003673219" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="고추장소스진미채(180g.대용량)">
		<input type="hidden" id="finalPrice_default" value="8910">
<input type="hidden" id="finalPrice" value="8910">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003673219','','01')" title="고추장소스진미채(180g.대용량)">
			<div class="thumb" data-oriprice="9900">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6001047_1_a.jpg" border="0" alt="고추장소스진미채(180g)" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">18</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">고추장소스진미채(180g.대용량)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="sale_per"><em>10</em>%</span>
						<span class="new_price"><strong>8,910</strong>원</span>
						<del class="old_price" data-price="9900"><em class="num">9,900</em>원</del>
						<!-- 230106 더반찬 100g당 가격 추가 -->
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 4,950원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			<span class="date_available">7/20(토) 새벽 가능</span>
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003673219')" title="고추장소스진미채(180g.대용량)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.8</span>
				<span class="review">(279건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003673219','01');return false;" title="고추장소스진미채(180g.대용량)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003673219');" title="고추장소스진미채(180g.대용량)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
<li class="product_item" data-pbcode="003659794" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="새우해파리냉채(230g)">
		<input type="hidden" id="finalPrice_default" value="7500">
<input type="hidden" id="finalPrice" value="7500">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659794','','01')" title="새우해파리냉채(230g)">
			<div class="thumb" data-oriprice="7500">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000912_1_a.jpg" border="0" alt="새우해파리냉채(230g)" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">19</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">새우해파리냉채(230g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="new_price" data-price="7500"><strong>7,500</strong>원</span>
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 3,261원)</span>
					</div>
			<!-- //가격 -->
			<!-- 도착가능일 -->
			<div class="delivery_type">
			<!-- 230106 더반찬 도착 가능 문구 추가 -->
			
								</div>
			<!-- //도착가능일 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659794')" title="새우해파리냉채(230g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.5</span>
				<span class="review">(139건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659794','01');return false;" title="새우해파리냉채(230g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659794');" title="새우해파리냉채(230g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			<span class="flag_tbc more_better">다다익선</span>
					</div>
		
	</li>
<li class="product_item" data-pbcode="003659781" data-pb_com_cd="01" data-cate1="반찬" data-cate3="밑반찬" data-pbnm="나물3종(210g)">
		<input type="hidden" id="finalPrice_default" value="7500">
<input type="hidden" id="finalPrice" value="7500">
<a href="javascript:void(0);" onclick="javascript:goPrDetail('003659781','','01')" title="나물3종(210g)">
			<div class="thumb" data-oriprice="7500">
				<img src="https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/600/6000901_1_a.jpg" border="0" alt="나물3종(210g)" width="250" height="250" class="" onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
<!-- 230322 베스트 순위 플래그 추가 -->
				<span class="flag_rank ">20</span>
					<!-- 더주막 -->
				</div>
			
			<p class="name">나물3종(210g)</p>
			
			<!-- 가격 -->
			<div class="price_info">
				<span class="new_price" data-price="7500"><strong>7,500</strong>원</span>
					<!-- 번쩍딜 랜덤세트는 100g당 단가 표기 X -->
					<span class="gram_per">(100g당 3,572원)</span>
					</div>
			<!-- //가격 -->
		</a>
		
		<!-- 별점 -->
		<a href="javascript:void(0);" onclick="javascript:goPrDetailReviewTab('003659781')" title="나물3종(210g)">
			<span class="star_rating">	
				<span class="icon"></span>
				<span class="grade">4.7</span>
				<span class="review">(302건)</span>
				</span>
		</a>
		<!-- //별점 -->
		
		<div class="btn_layer">
			<div class="btn_unit">
				<a href="#this" onclick="javascript:prAddCart('003659781','01');return false;" title="나물3종(210g)" class="btn_cart"><span>장바구니</span></a>
				<a href="#this" onclick="javascript:fnWishProc(this,'003659781');" title="나물3종(210g)" class="btn_like "><span>찜</span></a>
			</div>
		</div>
		
		<!-- 230106 더반찬 하단 플래그 추가 -->
		<div class="flag_area">
			</div>
		
		<div class="flag_area">
			</div>
		
	</li>
</ul>
<!-- //상품리스트 -->

<script type="text/javascript">
//장바구니 담기 실행 시
function prAddCart(pbCode,pbcomcd){
	if(pbCode=="003611032"){
		if(confirm("해당 상품은 장바구니 담기가 불가합니다. 이벤트 페이지를 확인해주세요.")){
			if('real'=='dev'){
				$(location).attr("href","/display/plan.do?seq=00000104124");
			}else{
				$(location).attr("href","/display/plan.do?seq=00000104417");
			}
		}
		
		return;
	}
	if(pbcomcd=="99"){
		alert("골라담기 상품입니다. 상세페이지로 이동 후 장바구니에 담아주세요.");
		return;
	}
	addCart(this,'',pbCode,'N');
	// 장바구니 담기 팝업 효과 추가
	$('.add-to-cart').addClass('add');	
	var popTimeOut = function(){
		$('.layer_box').fadeOut();
	}
	setTimeout(popTimeOut,3000);
}



//찜 하기 기능
function fnWishProc(id,pbCode) {
	if(pbCode=="003611032"){
		if(confirm("해당 상품은 찜하기가 불가합니다. 이벤트 페이지를 확인해주세요.")){
			if('real'=='dev'){
				$(location).attr("href","/display/plan.do?seq=00000104124");
			}else{
				$(location).attr("href","/display/plan.do?seq=00000104417");
			}
		}
		
		return;
	}
	
	checkLogin().done(function(data) {
		if (data.rst) {
			$.ajax({
				type : "POST",
				url : "/display/productWishProc.do",
				data : {
					PB_CODE : pbCode
				},
				dataType : "json",
				async : !1,
				success : function(data) {
					if(data.procGbn == "insert") {
						//$(id).addClass("liked");
						$(id).addClass("liked");
						//$(id).children('i').attr('class', 'icon icon-heart on');
						
						commonGoogleWish('add',pbCode);
						commonAirBridgeWish('add',pbCode);
					} else {
						//$(id).addClass("liked");
						$(id).removeClass("liked");
						//$(id).children('i').attr('class', 'icon icon-heart');
						
						commonGoogleWish('remove',pbCode);
					}
					alert(data.messages);
				},
				error : function(e) {
					alert("에러가 발생하였습니다.");
				}
			});
		} else {
			if (confirm("로그인이 필요합니다.\n로그인하시겠습니까?")) {
				goLogin();
			}else{
				$(id).removeClass("liked");
				return false;
			}
		}
	});
}
</script></ul>

<script>
$(document).ready(function(){
	proImgType(".best_prod .productimgtype4", 4);
	lazyloadFunc();
});
</script></div>
							<!-- //상품리스트 -->

						</div>
					</div>
				</div>
				<div class="ziploading" id="ziploading" style="display:none;"><span class="con">LOADING</span></div>
				<!-- //content -->
			</div>
		</div>
		<!-- //container -->
	</div>
	<%@ include file="/WEB-INF/views/common/footer.jsp"%>
</body>
