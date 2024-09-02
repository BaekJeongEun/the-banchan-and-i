<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<form id="beforePrFrm" name="beforePrFrm" method="post" action="">
	<input type="hidden" id="SEQ" name="SEQ" value=""> <input
		type="hidden" id="PB_FOOD_CD" name="PB_FOOD_CD" value=""> <input
		type="hidden" id="BP_TYPE_CD" name="BP_TYPE_CD" value=""> <input
		type="hidden" id="beforeGotoPage" name="beforeGotoPage" value="1">
</form>
<div class="tbl_list_type1 new_pr_review_list_table notyet_review_prd">

	<c:forEach var="dto" items="${reviewReplyListDto}">

		<div class="item_tr_wrapper">
			<a href="javascript:openProductReviewMakeArea(${dto.seq});"
				class="btn_write_review notyet" title="답변 작성 새창 열림">작성하기</a>
			<div class="td fl notyet_review_prd_img">
				<a href="#this" onclick="javascript:goPrDetail('${dto.pbCode}')">
					<img src="${dto.productImage}" border="0" alt="" width="60"
					height="60" class="pic"
					onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
				</a>
			</div>
			<div class="td fl">
				<div class="star-rating disabled binded">
					<input type="range" value="50" min="0" max="5" step="1"
						disabled="disabled">
					<div class="stars">
						<c:forEach var="i" begin="0" end="${dto.score}">
							<i class="icon icon-star box-16 gradient10"></i>
						</c:forEach>
					</div>
				</div>

				<!-- 상품명  -->
				<div class="td_cont_wrapper notyet_review_prd_name">
					<a href="/product/detail.do?productId=${dto.pbCode}">${dto.name}</a>
				</div>
				<h3>작성자: ${dto.regId} | ${dto.regDt}</h3>
				<!-- //e .no_review_prd_name 상품명  -->

			</div>
		</div>
	</c:forEach>
</div>
<div class="paging">
	<ul>
		<li class="btn first"><a href="#this"
			onclick="javascript:goPrPage(1); return false;">처음</a></li>
		<li class="btn prev"><a href="#this"
			onclick="javascript:goPrPage(${pageDto.pre}); return false;">이전</a></li>

		<c:forEach var="i" begin="${pageDto.startPage}"
			end="${pageDto.endPage}">
			<c:choose>

				<c:when test="${i == pageDto.pageNumber}">
					<li class="current"><strong>${i}</strong></li>
				</c:when>
				<c:otherwise>
					<li><a href="#this"
						onclick="javascript:goPrPage(${i}); return false;">${i}</a></li>
				</c:otherwise>
			</c:choose>
		</c:forEach>
		<li class="btn next"><a href="#this"
			onclick="javascript:goPrPage(${pageDto.post}); return false;">다음</a></li>

		<li class="btn last"><a href="#this"
			onclick="javascript:goPrPage(${pageDto.lastPage}); return false;">마지막</a></li>
	</ul>
</div>