<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<body>

	<%@ include file="/WEB-INF/views/common/header.jsp"%>

	<div id="container_wrap">

		<!-- container -->
		<div id="container100" class="mydw">
			<!-- content -->
			<div id="content">
				<div class="content_box1280">
					<div id="rcontent">
						<div class="new_myprd_review_wrapper">
							<div class="title_mydw">
								<h3>후기 관리</h3>
							</div>
							<div class="my_product_showhide tab">
								<ul>
									<li id="beforeReview" class=" visible"><a
										href="#myBeforeProductReview"
										onclick="changeMyProductReview()">답변 작성 전 후기(<span>${pageDto.createReplyCnt}</span>)
									</a></li>
									<li id="completeReview" class=""><a
										href="#myProductReview" onclick="changeMyProductReview()">답변
											작성 완료 후기(<span>${pageDto.createDoneCnt}</span>)
									</a></li>
								</ul>
							</div>
							<div id="myBeforeProductReview"
								class="new_my_productreview tab_con"></div>
							<div id="myProductReview" class="new_my_productreview tab_con">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript">
		var beforePage = true;
		var createstatus = "02";
		var donestatus = "03";
		$(document).ready(function() {
			const spanElement = document.getElementById("customer-id");
			spanElement.textContent = '관리자';
		});
		function changeMyProductReview() {
			if (beforePage) {
				$("#myBeforeProductReview").addClass("hidden");
				$("#myProductReview").removeClass("hidden");
				$("#beforeReview").removeClass("visible");
				$("#completeReview").addClass("visible");
				$("#myProductReview").load("/customer/reply_list.do", {
					"status" : donestatus,
					"page" : 0,
					"size" : 5,
					"sort" : 1
				});
			} else {
				$("#myProductReview").addClass("hidden");
				$("#myBeforeProductReview").removeClass("hidden");
				$("#completeReview").removeClass("visible");
				$("#beforeReview").addClass("visible");
				$("#myBeforeProductReview").load("/customer/reply_list.do", {
					"status" : createstatus,
					"page" : 0,
					"size" : 5,
					"sort" : 1
				});
			}
			beforePage = !beforePage;
		}
		function changeReviewManagement() {

		}
		function changeLoginId() {
			const spanElement = document.getElementById("customer-id");
			spanElement.textContent = '관리자';
		}
		//리뷰작성 레이어 열기
		function openProductReviewMakeArea(seq) {
			$("#reviewPop").load("/review/productReview.do", {
				"rv_seq" : seq
			}, function(response, status, xhr) {
				openLayerPopup(0);
			});
		}
		function goPrPage(page) {
			$("#gotoPage").val(page);
			if (beforePage) {
				$("#myBeforeProductReview").load("/customer/reply_list.do", {
					"status" : createstatus,
					"page" : page - 1,
					"size" : 5,
					"sort" : 1
				});
			} else {
				$("#myProductReview").load("/customer/reply_list.do", {
					"status" : donestatus,
					"page" : page - 1,
					"size" : 5,
					"sort" : 1
				});
			}
		}
		$("#myBeforeProductReview").load("/customer/reply_list.do", {
			"status" : createstatus,
			"page" : 0,
			"size" : 5,
			"sort" : 1
		});
	</script>


	<div id="reviewPop"></div>
	<%@ include file="/WEB-INF/views/common/footer.jsp"%>
</body>