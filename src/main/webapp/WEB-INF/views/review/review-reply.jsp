<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<link rel="stylesheet" href="${path}/resources/css/mydw-reply.css">
<div id="reviewPop">
	<form id="frm" name="frm" method="post" action="">
		<input type="hidden" id="rv_seq" name="rv_seq"
			value="${productReviewReplyDto.seq}">

		<div class="cd-popup cd-popup0 is-visible" role="alert">
			<div class="cd-popup-container-reply">
				<span class="stamp"><img
					src="https://image.thebanchan.co.kr/tbcImg/web/images/review/img_review.svg"
					alt="review"></span> <a href="#;" class="cd-popup-close img-replace">닫기</a>
				<div class="cd-popup-content">
					<div class="review-wrap">
						<div class="review-inner">
							<div class="review-box">
								<div class="product-box">
									<a href="#;"
										onclick="javascript:goPrDetail('${productReviewReplyDto.pbCode}')">
										<div class="img">
											<img src="${productReviewReplyDto.image}" border="0" alt="-"
												width="250" height="250" class=""
												onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
										</div>
										<div class="info">
											<h3>${productReviewReplyDto.name}</h3>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div class="review-inner">
							<div class="review-box">
								<h3 class="center-title" style="padding-top: 16px;">고객 리뷰</h3>
								<div id="packaging" class="category">
									<div class="tc-pattern" style="margin-top: 0px;">
										<h3>${productReviewReplyDto.content}</h3>
									</div>
								</div>
							</div>
						</div>
						<div class="margin-box"></div>
						<div class="review-inner" id="myReview">
							<div class="review-box">
								<h3 class="center-title">리뷰 답변 작성</h3>
								<div class="textarea-box">
									<textarea name="rv_reply" id="rv_reply" cols="30" rows="10">${productReviewReplyDto.reply}</textarea>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="fixedbar">
					<button type="button" id="myBtn"
						onclick="javascript:goSubmit();return false;">등록하기</button>
				</div>

			</div>
		</div>

	</form>

	<script>
		function goSubmit() {
			$
					.ajax({
						type : "POST",
						url : "/review/reply.do",
						data : $("#frm").serialize(),
						dataType : 'json',
						async : true,
						success : function(data) {
							//alert(data.messages);
							// 후기작성완료 팝업
							if (data.success == "SUCCESS") {//완료X
								alert("답변 작성 완료");
								location.href = '/product/detail.do?productId=${productReviewReplyDto.pbCode}&cate_id=';
								return;
							} else {
								alert("답변 작성 실패");
								location.href = '/product/detail.do?productId=${productReviewReplyDto.pbCode}&cate_id=';

								return;
							}
							return false;

						},
						error : function(data) {
							alert("에러가 발생 하였습니다.");
							doubleCheck = true;
							return;
						}
					});

		}
	</script>

	<script defer=""
		src="https://image.thebanchan.co.kr/tbcImg/web/common/js/review.js?dummy=1721906263979"></script>
</div>