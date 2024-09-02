<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<body>
	<ul class="product_list list_type_4">
		<c:forEach var="product" items="${productResonseDto}">
			<li class=product_item data-pbcode="${product.pbCode}"
				data-pb_com_cd=01 data-cate1="" data-cate3=""
				data-pbnm="${product.name}"><input type=hidden
				id=finalPrice_default value="${product.priceFormat}"> <input
				type=hidden id=finalPrice value="${product.priceFormat}"> <a
				href=javascript:void(0)
				onclick="javascript:goPrDetail(
			`${product.pbCode}`,'','01')"
				title="${product.name}">
					<div class=thumb data-oriprice="${product.priceFormat}">
						<c:if test="${product.soldOut} === 'Y'">
							<span class=soldout_ico></span>
						</c:if>
						<img src="${product.imgCode}" border="0" alt="" width="250"
							height="250" class=""
							onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
					</div>
					<p class=name>${product.name}</p>
					<div class=price_info>

						<span class=new_price><strong>${product.priceFormat}</strong>원</span>
						<c:if test="${product.gramPrice != null}">
							<span class="gram_per">(100g당 ${product.gramPrice}원)</span>
						</c:if>
					</div>
			</a> <!-- 별점 --> <a href=javascript:void(0)
				onclick="javascript:goPrDetailReviewTab(`${product.pbCode}`)"
				title="product.getName()"> <span class=star_rating> <span
						class=icon></span> <span class=grade>${product.grade}</span> <span
						class=review>(${product.reviewCnt})건</span>
				</span>
			</a>
				<div class=btn_layer>
					<div class=btn_unit>
						<a href=#this
							onclick="javascript:prAddCart( '${product.pbCode}','01'); return false;"
							title="${product.name}" class=btn_cart><span>장바구니</span></a> <a
							href=#this
							onclick="javascript:fnWishProc(this,'${product.pbCode}');"
							title="${product.name}" class=btn_like><span>찜</span></a>
					</div>
				</div>
				<div class=flag_area></div></li>
		</c:forEach>
	</ul>
</body>