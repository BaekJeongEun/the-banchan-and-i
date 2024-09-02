<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link rel="shortcut icon"
	href="${path}/webapp/images/common/favicon.ico">

<c:set var="categoryNum" value="${categoryNum}" />
<script type="text/javascript">
	$(document).ready(
			function() {
				// sort
				let sortStr = '';
				$(".sort_list li").removeClass("active");
				$("#sort_" + sortStr).addClass("active");

				$(".sort-type>a").on("click", function(e) {
					e.preventDefault();
					$(this).parent(".sort-type").toggleClass("active");
				});
				$(".ctg-bind.cate-inner > a").on("click", function(e) {
					e.preventDefault();
					var _this = $(this);

					_this.parents(".ctg-bind").find("a").removeClass("active");
					_this.addClass("active");

					var upperDispCtgNo = _this.data("upperCtgNo");
					var ctgNo = _this.data("ctgNo") || _this.data("no");
					var ctgType = _this.data("type");
				});
				$(".ctg-bind li > a").on(
						"click",
						function(e) {
							e.preventDefault();
							var _this = $(this);

							if (!_this.parents("li").hasClass("active")) {
								var ctgNo = _this.data("no");
								var ctgType = _this.data("type");
								var ctgCnt = _this.data("cnt");
								var ctgTxt = _this.text()
										+ (ctgCnt ? " " + ctgCnt + "개" : "");

								_this.parents(".ctg-bind").find("li")
										.removeClass("active");
								_this.parents("li").addClass("active");
								_this.parents(".sort-type").toggleClass(
										"active");
								_this.parents(".sort-type").find("a").eq(0)
										.html(ctgTxt);

							}
							var cc_seq = $('.ctg-bind').find('.item.active')
									.data('ctgNo');
							loadCateProductList(cc_seq);

							$('.ctg-bind.sort-list li.active>').on(
									"click",
									function() {
										$('.sort.sort-type.active')
												.removeClass('active');
									})
						});
				$('.ctg-bind.sort-list li.active>').on("click", function() {
					$('.sort.sort-type.active').removeClass('active');
				})

				$('.sort-type.sort').on("click", function() {
					$(this).addClass('focus');
				})
				$('body').click(
						function(e) {
							if ($(e.target).parents('.focus').length < 1
									&& !$(e.target).hasClass('focus')) {
								$('.sort-type.sort')
										.removeClass('focus active');
							}
						});
			});
</script>
<body>
	<div id="wrap">
		<%@ include file="/WEB-INF/views/common/header.jsp"%>

		<a class="return_top" href="#">탑버튼</a>
		<!-- //header -->
		<!-- container wrap -->
		<div id="container_wrap">
			<!-- container -->
			<div id="container100" class="shopcategory">
				<!-- content -->
				<div id="content">

					<div class="content_box1280">
						<div class="list-wrap">
							<div class="page-title">
								<div class="title">
									<c:choose>
										<c:when test="${category.mainNum eq '02110035'}">
											<span class="icon"><img
												src="https://img.dongwonmall.com/dwmall/static_root/category_icon/sub/02110001.png"
												style="width: 50px; height: 50px;"></span>
										</c:when>
										<c:when test="${category.mainNum eq '02110004'}">
											<span class="icon"><img
												src="https://cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8010/619/00/220500000015619.png"
												style="width: 50px; height: 50px;"></span>
										</c:when>
										<c:when test="${category.mainNum eq '02110036'}">
											<span class="icon"><img
												src="https://img.dongwonmall.com/dwmall/static_root/category_icon/sub/02110006.png"
												style="width: 50px; height: 50px;"></span>
										</c:when>
										<c:when test="${category.mainNum eq '02110037'}">
											<span class="icon"><img
												src="https://cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8010/621/00/220500000015621.png"
												style="width: 50px; height: 50px;"></span>
										</c:when>
										<c:when test="${category.mainNum eq '02110039'}">
											<span class="icon"><img
												src="https://cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8010/631/00/220500000015631.png"
												style="width: 50px; height: 50px;"></span>
										</c:when>
										<c:when test="${category.mainNum eq '02110040'}">
											<span class="icon"><img
												src="https://cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8010/635/00/220500000015635.png"
												style="width: 50px; height: 50px;"></span>
										</c:when>
										<c:when test="${category.mainNum eq '02110010'}">
											<span class="icon"><img
												src="https://img.dongwonmall.com/upload/C00001/dspl/banner/8010/637/00/220500000015637.png"
												style="width: 50px; height: 50px;"></span>
										</c:when>
										<c:when test="${category.mainNum eq '02110042'}">
											<span class="icon"><img
												src="https://img.dongwonmall.com/upload/C00001/dspl/banner/8010/637/00/220500000015637.png"
												style="width: 50px; height: 50px;"></span>
										</c:when>
										<c:when test="${category.mainNum eq '02110034'}">
											<span class="icon"><img
												src="https://img.dongwonmall.com/upload/C00001/dspl/banner/8010/637/00/220500000015637.png"
												style="width: 50px; height: 50px;"></span>
										</c:when>
									</c:choose>
									<strong class="tit_planshop_new"
										style="margin: 0; text-align: left;">${category.mainCategory}</strong>
								</div>
							</div>
							<div class="sort-box">
								<div class="sort-type ctg">
									<div id="cate_wrap" class="cate-wrap">
										<div class="ctg-bind cate-inner">
											<a href=""
												onclick="javascript:loadCateProductList(`${category.mainNum}`);return false;"
												class="item <c:if test="${category.mainChoice}">active</c:if>"
												data-ctg-no="${category.mainNum}"><span>전체</span></a>
											<c:forEach var="cate" items="${category.subCategories}">
												<a href=""
													onclick="javascript:loadCateProductList(`${cate.subNum}`);return false;"
													class="item <c:if test="${not category.mainChoice and cate.subNum == category.cateId}">active</c:if>"
													data-ctg-no="${cate.subNum}"><span>${cate.subCategory}</span></a>
											</c:forEach>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="cateProductList">
							<input type="hidden" id="newPrdCnt" value="${categoryNum} }">
						</div>
					</div>
					<div class="ziploading" id="ziploading" style="display: none;">
						<span class="con">LOADING</span>
					</div>
				</div>
				<!-- //content -->

			</div>
			<!-- //container -->
		</div>
		<!-- //container wrap -->
		<input type="hidden" id="shortURLValue" value="">

		<script>
			function loadCateProductList(CC_SEQ) {
				$(".cate-wrap .item").removeClass("active");
				$(this).addClass("active");
				$('.ctg-bind').find('[data-ctg-no="' + CC_SEQ + '"]').addClass(
						'active');
				var sort_type = $('.sort-list').children('.active').find('a')
						.data('no');
				$("#ziploading").show();
				$.ajax({
					type : "POST",
					url : "/product/productList.do",
					dataType : 'html',
					data : {
						"categoryNum" : CC_SEQ,
						"page" : '0',
						"size" : '12',
						"SORT" : "1"
					},
					success : function(data) {
						$("#cateProductList").html(data);
						$("#ziploading").hide();
					},
					error : function(data) {
						alert("상품을 불러오지 못했습니다.");
						return;
					}
				});
			}
			var categoryNum = '${categoryNum}';
			$("#newPrdCnt").val(categoryNum);
			$("#cateProductList").load("/product/productList.do", {
				"categoryNum" : categoryNum,
				"page" : '0',
				"size" : '12',
				"SORT" : "1"
			}, function(response, xhr) {
				if (status == "error") {
					alert("상품을 불러오지 못했습니다.");
					return;
				}
			});
			//스크롤 더보기
			var currentscrollHeight = 0;
			$(window)
					.on(
							'scroll',
							function() {
								const scrollHeight = $(document).height();
								const scrollPos = Math.floor($("body").height()
										+ $(window).scrollTop());
								const isBottom = scrollHeight - 200 < scrollPos;
								if (isBottom
										&& currentscrollHeight < scrollHeight) {
									var startNum = $(".product_item").length;
									var pageNum = $(".product_list.list_type_4").length;
									if (startNum % 12 == 0) {
										$("#ziploading").show();
										newStoreProductByScroll(pageNum,
												startNum);
									}

									currentscrollHeight = scrollHeight;
								}
							});

			function newStoreProductByScroll(pageNum, startNum) {
				$.ajax({
					type : "POST",
					url : '/product/productList.do',
					data : {
						"categoryNum" : categoryNum,
						"page" : pageNum,
						"size" : '12',
						"SORT" : "1"
					},
					dataType : 'html',
					success : function(datas) {
						$("#cateProductList").append(datas);
						$("#ziploading").hide();
					},
					error : function(e) {
						console.log(e);
					}
				});
			}
		</script>
		<div id="rightquick" style="display: block;"></div>
		<%@ include file="/WEB-INF/views/common/footer.jsp"%>

		<script type="text/javascript"
			src="//adimg.daumcdn.net/rt/roosevelt.js"></script>
		<!--//다음 리타게팅 -->

		<script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>

	</div>

</body>