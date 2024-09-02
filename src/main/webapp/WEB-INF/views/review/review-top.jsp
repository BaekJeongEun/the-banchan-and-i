<%@ page language="java" contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<body>
	<form id="prReviewFrm" name="prReviewFrm" method="post" action="">
		<input type="hidden" id="SEQ" name="SEQ" value=""> <input
			type="hidden" id="PB_FOOD_CD" name="PB_FOOD_CD" value=""> <input
			type="hidden" id="BP_TYPE_CD" name="BP_TYPE_CD" value=""> <input
			type="hidden" id="reviewGotoPage" name="reviewGotoPage" value="">
		<input type="hidden" id="SORT1" name="SORT1" value=""> <input
			type="hidden" id="SORT2" name="SORT2" value="">
	</form>

	<!-- 사진/동영상 -->
	<div class="review-box photo-box">
		<div class="title">
			<h6 id="reviewtotalCnt">사진/동영상
				("+reviewPreDto.getPhotoAndVideoResponseDto().getPhotoCnt()+")</h6>
		</div>
		<div class="img-area slide_content">
			<c:forEach var="image" varStatus="status"
				items="${reviewPreDto.photoAndVideoResponseDto.images}">
				<span class="zooming" onclick="zooming(this)"
					data-rvseq="${image.reviewSeq}" data-index="${status.index}">
					<img src="${image.filePath}" alt=""
					onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg';">
				</span>
			</c:forEach>
		</div>
	</div>
	<!-- //사진/동영상 -->

	<div class="review-box">
		<div class="between">
			<div class="title">
				<h6>전체 (${reviewPreDto.totalCnt})</h6>
			</div>

			<div class="select-wrapper">
				<div class="select-box">
					<div class="align">
						<div class="option_checkbox">
							<input type="checkbox" id="chk-muk-tip"
								onclick="includeMukTip(this)"> <label for="chk-muk-tip">답변포함</label>
						</div>
					</div>
				</div>

			</div>
			"
		</div>
	</div>
	"
	<!-- //상단-->

	<div id="rcmd-tabs" class="all">
		<ul class="tab" style="justify-content: unset;">
			<li class="tab-item full ai-item on" value=""><button
					onclick="aiClick(this)" value="" class="chip-ctgr ai-all-button">AI
					분류</button></li>;
			<c:forEach var="classification" items="${classifications}">
				<li class="tab-item tab-item-classification"
					value="${classification.seq}"><button onclick="aiClick(this)"
						value="${classification.seq}"
						class="chip-ctgr chip-ctgr-classification">${classification.name}&nbsp;${classification.count}</button></li>
			</c:forEach>
		</ul>
		<div class="tag-divider"margin: 20px 0;></div>

		<ul class="tab" style="justify-content: unset;">
			<li class="tab-item full hash-item on" value=""><button
					onclick="hashClick(this)" value="" class="chip-ctgr">해시태그</button></li>;
			<li><div></div></li>";
			<c:forEach var="keyword" items="${reviewPreDto.keywords}">
				<li class="tab-item  tab-item-keyword" value="${keyword.key}"><button
						onclick="hashClick(this)" value="${keyword.key}" class="chip-ctgr">${keyword.key}&nbsp;${keyword.value}</button></li>
			</c:forEach>
		</ul>
		<span class="chip-dimm"></span>
	</div>
	<div class="rv-list-wrapper">
</body>