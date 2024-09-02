<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="swiper-wrapper detail-area" style="height:521.992px;">
<div class="swiper-slide">
	<div class="rv-box">
		<div class="imgs">
			<div
				class="swiper main-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
				<div class="review-wrap">
					<a href="/board/reviewCollection.do?cm_seq=0000000004652251"
						class="info-area"> <span class="profile"> <img
							src="https://image.thebanchan.co.kr/tbcImg/web/images/lounge/prf_emo_02.png"
							alt=""></span> <span class="nickname"> <strong>
								${review.regId}</strong>
					</span>
					</a>
				</div>

				<div class="swiper-wrapper" id="swiper-wrapper-c53d88c38a95eb21"
					aria-live="polite">
					<div class="swiper-slide swiper-slide-active" role="group"
						aria-label="1 / 1" style="width: 480px;">
						<div class="slide-content">
							<img src="${review.image}" alt=""
								onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg';">
							<div class="rv-img-area"></div>
						</div>
					</div>
				</div>
				<span class="swiper-notification" aria-live="assertive"
					aria-atomic="true"></span>
			</div>
		</div>
		<div class="txts" style="background:white;">
			<div
				class="swiper thumb-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
				<div class="swiper-wrapper" id="swiper-wrapper-c7cfaa6a941076413"
					aria-live="polite" style="transform: translate3d(0px, 0px, 0px);height: 63.984;">
					<div class="swiper-slide swiper-slide-active" role="group"
						aria-label="1 / 1" style="margin-right: 6px;">
						<div class="slide-content">
							<img src="${review.image}" alt=""
								onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg';">
						</div>
					</div>
				</div>
				<span class="swiper-notification" aria-live="assertive"
					aria-atomic="true"></span>
			</div>
			<div class="rv-content">
				<div class="rv-top">
					<div class="info">
						<div class="items">
							<c:forEach var="i" begin="0" end="${review.score}">
								<div class="star-ico"></div>
							</c:forEach>
						<div class="dline"></div>
						</div><if test="${review.bestNy} === 'Y'">
						 <span
							class="flag best">BEST</span> </if>
					</div>
					<div class="date">${review.regDt}</div>
				</div>
				<div class="rv-area">
					<span class="left" style="pointer-events: none;"> <span
						class="more" style="display: none;">더보기</span> <span
						class="contain">${review.content}</span>
					</span>
				</div>
				<div class="division">
						<div class="hash-box">
					<c:forEach var="keyword" items="${review.keywords}">
							<span>${keyword}</span>
				</c:forEach>
						</div>
				</div>
				<div class="btn-area">
					<!-- 좋아요 -->
					<div class="liked-box">
						<button
							onclick="javascript:fnRecomm(this,'${review.seq}', '0000000004652251', '003641008')"
							class="active"></button>
					</div>
					<!-- //좋아요 -->
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
        <div class="swiper-button-prev rv-prev" data-rvseq="" data-index="${review.prevIdx}" style="display: none;"></div>
        <div class="swiper-button-next rv-next" data-rvseq="" data-index="${review.nextIdx}"></div>                     
    </div>
    <span class="dimm" onclick="closePopRv()"></span>