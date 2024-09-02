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
					<div class="tab_wrap">
						<div class="tabcontent" id="tabcontent_01">
							<div id="cart">
								<div id="DivCartList">
									<form name="form1" id="form1" method="post">
										<!-- 배송지, 배송방법, 희망배송일을 주문서로 가져가기 위한 필드 설정 -->
										<input type="hidden" name="OV_CM_ZIPCD1_0" id="OV_CM_ZIPCD1_0"
											value=""> <input type="hidden" name="OV_CM_ADDR1_0"
											id="OV_CM_ADDR1_0" value=""> <input type="hidden"
											name="OV_CM_ADDR2_0" id="OV_CM_ADDR2_0" value=""> <input
											type="hidden" name="OV_CM_NAME_0" id="OV_CM_NAME_0" value="">
										<input type="hidden" name="OV_CM_MOBILE1_0"
											id="OV_CM_MOBILE1_0" value=""> <input type="hidden"
											name="OV_CM_MOBILE2_0" id="OV_CM_MOBILE2_0" value="">
										<!-- // 배송지, 배송방법, 희망배송일을 주문서로 가져가기 위한 필드 설정 -->
										<input type="hidden" name="isDebug" value="real">
										<div class="cart_top_area">
											<label for="BP_ITEM_SEQ_" class="dw-form check w16"
												data-binded="1"> <input type="checkbox"
												id="BP_ITEM_SEQ_" onclick="selectKindAll('');"
												title="전체 상품 선택" checked="checked"> <span><strong>전체선택</strong></span>
											</label>
											<ul class="btn_group">
												<li><button class="btn_del"
														onclick="jsonSoldOutDeleteCartProc(); return false;">품절삭제</button></li>
												<li><button class="btn_del"
														onclick="jsonDeleteCartProc(); return false;">선택삭제</button></li>
											</ul>
										</div>

										<input type="hidden" id="selected_bp_item"
											name="selected_bp_item" value="">

										<div class="tbl_plist item04">
											<div class="order_title tbc on">
												<label class="dw-form check w16" data-binded="1"> <input
													type="checkbox" id="BP_ITEM_SEQ_05"
													onclick="selectKindAll('05');" title="업체배송 상품 선택"
													checked="checked"> <span></span>
												</label>
												<p>
													<span><strong>더반찬&I 배송 상품 : ${cartTotalAmount}개</strong>35,000원 미만
														주문시 배송비 4,000원이 부과됩니다.</span>
												</p>
											</div>
											<div class="order_content">
												<table summary="상품정보,판매가,수량선택,총액,할인예상가,배송비 정보 표">
													<caption>장바구니 업체배송 표</caption>
													<colgroup>
														<col width="55">
														<col width="*">
														<col width="160">
														<col width="160">
														<col width="110">
														<col width="110">
													</colgroup>
													<thead>
														<tr class="hide">
															<th scope="col" class="check"></th>
															<th scope="col">상품정보</th>
															<th scope="col">수량</th>
															<th scope="col">판매가</th>
															<th scope="col">배송비</th>
															<th scope="col" class="last">선택</th>
														</tr>
													</thead>
													<tbody>
													<c:forEach var="product" items="${productList}">
														<!-- 상품 -->
														<tr>
															<input type="hidden" id="item_pp_shortage_gbn_cd_001"
																name="PP_SHORTAGE_GBN_CD" value="01" bp_item_seq="001"
																data-seq="001">
															<td class="p_checkbox"><label
																class="dw-form check w16" data-binded="1"> <input
																	type="checkbox" name="BP_ITEM_SEQ"
																	id="BP_ITEM_SEQ_05001" checked="checked"
																	title="${product.name} 선택" value="001"
																	pb_code="${product.pbCode}" pb_nm="${product.name}"
																	pb_gift_yn="Y" employee_mall_yn="N" bp_category_id=""
																	opcnt="0" cartopcnt="0" pb_com_cd="01"
																	gnc_goldcard_yn="N" pb_vendor_seq="001038170"
																	checkmultiproduct="" data-bp-item-seq="001"
																	pp_possible_yn="N" category1="반찬" category3="밑반찬">
																	<span></span>
															</label></td>

															<td class="tpl">
																<div class="p_goods">
																	<span class="icontype2"> </span> <a
																		href="javascript:goPrDetail('${product.pbCode}')"
																		class="goodsti" title="${product.name}"><img
																		src="${product.img}"
																		border="0" alt="${product.name}" width="90" height="90"
																		class="pic"
																		onerror="this.src='https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg'">
																		<span class="title">${product.name}</span>

																		<div class="component-lists">
																			<ul class="components">
																			</ul>
																		</div> <!-- 운영 배포 시 상품코드 하드코딩 수정해줘야 함(더반찬 차례상) -->
																		<p class="dlvr-date">8/14(수) 새벽 가능</p> </a>

																</div> <!-- 사은품팝업 --> <!-- //사은품팝업 -->
															</td>
															<!-- 판매가 -->

															<!-- 수량 -->
															<td class="p_quantity">

																<div class="select_quantity">
																	<input type="hidden" id="erp_qty_001" value="${product.amount}">
																	<input type="text" id="item_qty_001" value="${product.amount}"
																		title="${product.name} 수량 입력"
																		onkeydown="handlerNum(this)" maxlength="4"> <input
																		type="hidden" id="item_vendor_seq_001"
																		value="${product.pbCode}"> <span> <a
																		href="javascript:upQty('001')" class="up"
																		title="${product.name} 수량 증가">수량증가</a> <a
																		href="javascript:downQty('001')" class="down"
																		title="${product.name} 수량 감소">수량감소</a>
																	</span>
																</div> <a href="javascript:cartItemQtyChangeNew('001')"
																class="btn_quantity" title="${product.name} 수량 수정"><span>수정</span></a>
															</td>
															<!-- 판매가 X 수량 -->
															<td><strong class="txt_price_bold" data-price="${product.priceFormat}"
																data-reduced_price="${product.priceFormat}"> ${product.priceFormat}원 </strong></td>

															<!-- 배송비 [S] -->
															<td rowspan="1" class="p_freight"><strong>${product.shippingFeeFormat}원</strong>
																<!-- 배송비절약 버튼 숨김 처리 -->
																<div class="freight_economy" style="display: none">
																	<a href="#this" class="sbtn rounded"
																		pb_vendor_seq="${product.pbCode}" pb_package_gbn_cd="17"
																		pb_code="${product.pbCode}"
																		title="${product.name} 배송비 절약 화면 열림/닫힘"><span>배송비
																			절약</span></a>
																	<div
																		class="layer_box popup_layout_wrap freight_economy_p">

																		<div class="angle"></div>
																		<div class="popup_layout" id="sbtn_17_${product.pbCode}">
																			<div class="popup_layout_content freight_economy_pop">
																				<div class="freight_economy_con">
																					<div class="list_area">
																						<h3>
																							<img
																								src="https://image.thebanchan.co.kr/tbcImg/web/images/content/cart/tit_freight_economy_pop.gif"
																								alt="배송비 절약  합배송상품">
																						</h3>
																						<div id="freight_economy_ls17_${product.pbCode}"
																							class="p_list">
																							<ul>

																							</ul>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="popup_layout_footer">
																				<div class="btn_close">
																					<button
																						onclick="lyFadeout('.freight_economy_p'); return false;">창닫기</button>
																				</div>
																			</div>
																		</div>
																	</div>
																</div> <em>35,000원 이상 <span>무료</span></em></td>
															<!-- 배송비 [E] -->

															<td class="p_action">
																<div class="btn">
																	<button
																		onclick="jsonDeleteCartProc('001'); return false;"
																		class="btn_gray_27 delete" title="${product.name} 삭제"
																		data-value="001">삭제</button>
																</div> <!-- 계산로직 추가 해야 함. -->
																<dt class="data-deposit" data-price="${product.priceFormat}" data-qty="1"
																	data-gnc-discount-price="0" data-discount-price="0"
																	data-delivery-price="${product.shippingFeeFormat}" data-pb_code="${product.pbCode}"
																	style="display: none";=""></dt>
															</td>
															<input type="hidden" id="item_max_order_cnt_001"
																value="999">
															<input type="hidden" id="item_possible_stock_001"
																value="9999">
															<!-- GNC 행사일경우 처리(PP_PRICE_CD = '05') -->
															<input type="hidden" id="item_pb_com_cd_001" value="01">
														</tr>
														</c:forEach>
													</tbody>
												</table>
											</div>
										</div>
									</form>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<%@ include file="/WEB-INF/views/common/footer.jsp"%>
</body>