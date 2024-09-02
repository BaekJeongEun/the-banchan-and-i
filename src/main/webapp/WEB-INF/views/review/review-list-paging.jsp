<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:forEach var="dto" items="${reviewPreDto.reviewListPagingDto}">
	<div class="rv-list-item">
		<div class="division">
			<div class="profile-with-charts">
				<a href="#" class="info-area info-area-emotion"
					onmouseover="showTooltip(event, ${dto.seq})"
					onmouseout="hideTooltip(${dto.seq})"> <span
					class="profile profile-img"> <img
						src="https://image.thebanchan.co.kr/tbcImg/web/images/lounge/prf_emo_04.png"
						alt=""></span> <span class="review-profile"
					id="tooltip-profile${dto.seq}"
					style="text-align: center; display: none; top: 0px; left: 0px; opacity: 0;">
						<div
							style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
							<div
								style="flex: 1; display: flex; flex-direction: column; justify-content: center; text-align: left;">
								<span class="flag-review best-review">작성한 리뷰</span> <span
									class="flag-review best-review">평균 평점</span> <span
									class="flag-review best-review">BEST</span>
							</div>
							<div
								style="flex: 1; display: flex; flex-direction: column; justify-content: center; text-align: right;">
								<span class="flag-review-text best-review-text">${dto.reviewCnt}개</span>
								<span class="flag-review-text best-review-text">${dto.reviewAvg}점</span>
								<span class="flag-review-text best-review-text">${dto.reviewBestCnt}회
									달성</span>
							</div>
						</div>
				</span> <span class="nickname"> <strong>${dto.regId} </strong>
				</span>
				</a>

				<div class="chart-box chart-box-emotion">
					<!-- 감정 비율 -->
					<section class="section-stacked-bars">
						<section class="report report-usage-daily" id="reveal-usage">
							${dto.getEmotion}</section>
					</section>
					<!-- //평점 비율 -->
				</div>

			</div>
			<div class="rv-content">
				<div class="rv-top">
					<div class="info">
						<!-- 별점 -->
						<div class="items">
							<c:forEach var="i" begin="1" end="${dto.score}">
								<div class="star-ico"></div>
							</c:forEach>
						</div>
						<!-- //별점 -->
						<div class="dline"></div>
						<c:if test="${dto.bestNy} === 'Y'">
							<span class="flag best">BEST</span>
						</c:if>
					</div>
					<div class="date">${dto.regDt}</div>
				</div>
				<div class="rv-area">
					<span class="left" style="pointer-events: none;"> <span
						class="more" style="display: none;">더보기</span> <span
						class="contain">${dto.content} </span>
					</span>
				</div>
				<c:if
					test="${dto.reply != null and dto.replyStatus == '03' and reviewPreDto.tipYn=='Y'}">
					<div class="muk-tip-area">
						<span class="title">답변</span>
						<div class="text on">
							<div class="rv-area">
								<span class="left ht-content" onclick="overView(this)"> <span
									class="more"">더보기</span> <span class="contain">
										${dto.reply} </span>
								</span>
							</div>
						</div>
					</div>
				</c:if>
				<c:if test="${dto.image != null}">
					<div class="rv-img-area">
						<div class="img-box right full">
							<!-- Swiper -->
							<div
								class="swiper rvImgSwiper swiper-initialized swiper-horizontal swiper-backface-hidden">
								<div class="swiper-wrapper"
									id="swiper-wrapper-2c25b653bdd82b10d" aria-live="polite"
									style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
									<c:forEach var="item" items="${dto.images}">
										<div class="swiper-slide swiper-slide-active" role="group"
											aria-label="1 / 1" style="margin-right: 8px;">
											<a
												href="javascript:goReviewDetail(${dto.seq} , ${reviewPreDto.pbCode})"
												class="img-detail-button" data-rvseq="${dto.seq}"
												data-index=""> <img src="${item}" alt=""
												onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg';">
											</a>
										</div>
									</c:forEach>

								</div>
								<div class="blur-right"></div>
								<span class="swiper-notification" aria-live="assertive"
									aria-atomic="true"></span>
							</div>
						</div>
					</div>
				</c:if>
				<div class="division">
					<div class="chip-box">
						<c:forEach var="item" items="${dto.keywords}">
							<span class="hash-box">${item}</span>
						</c:forEach>
					</div>
				</div>
				<div class="btn-area">
					<!-- 좋아요 -->
					<div class="liked-box">
						<button
							onclick="javascript:fnRecomm(this,'202405140007999', '0000000004917561', '002559493')">
							<i></i>
						</button>
					</div>
					<!-- //좋아요 -->
				</div>
			</div>
		</div>
	</div>
</c:forEach>
<!-- paging -->
<div class="paging">
	<ul>
		<li class="btn first"><a href="#this"
			onclick="goReviewPage_reviews(0); return false;">처음</a></li>
		<li class="btn prev"><a href="#this"
			onclick="goReviewPage_reviews(
						<c:if test ="${reviewPreDto.pageNumber - 1 < 0}">
						0
						</c:if>
						<c:if test ="${reviewPreDto.pageNumber - 1 >= 0}">
						${reviewPreDto.pageNumber - 1}
						</c:if>					
					); return false;">이전</a></li>

		<c:forEach varStatus="vs" begin="${reviewPreDto.startPage}"
			end="${reviewPreDto.endPage}" step="1">
			<c:if test="${vs.index - 1 == reviewPreDto.pageNumber}">
				<li class="current"><strong>${vs.index}</strong></li>
			</c:if>
			<c:if test="${vs.index - 1 != reviewPreDto.pageNumber}">
				<li><a href="#this"
					onclick="goReviewPage_reviews(${vs.index - 1}); returnfalse;">${vs.index}</a></li>
			</c:if>
		</c:forEach>
		<li class="btn next"><a href="#this"
			onclick="goReviewPage_reviews(${reviewPreDto.pageNumber + 1}); returnfalse;">다음</a></li>
		<li class="btn last"><a href="#this"
			onclick="goReviewPage_reviews(${totalPage - 1}); returnfalse;">마지막</a></li>
	</ul>
</div>
<!-- //paging -->

