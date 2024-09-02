<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.List"%>

<link rel="stylesheet" href="${path}/resources/css/lounge.css">
<link rel="stylesheet"
	href="https://image.thebanchan.co.kr/tbcImg/web/common/css/product_view_popup.css?dummy=1721452598203">
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
<script src="${path}/resources/js/jquery-1.9.1.min.js"></script>
<c:set var="pbCode" value="${pbCode}" />
<script type="text/javascript">       
function calHeight(){
	$('.rv-list-item .rv-area .left').each(function(index,item){
		var rvTxt = $(this).find('.contain').height();
		if(rvTxt < 72){
			$(this).find('.more').hide();
			$(this).css("pointer-events","none");
		}
	})
};
$(document).ready(function(){
	$("#pr_review_list").load("/product/pr_review_list.do", {"pbCode" : `${product.pbCode}`, "tipYn" : "N", "keywords" : null, "classifications" : null, "totalCnt" : ${reviewPreDto.totalCnt}, "page":0, "size":5, "sort":1}, calHeight);

    //더반찬 후기 실행
    var reviewPointCnt = 0;
    var reviewPoint = {"pb_code":`${product.pbCode}`,"total_cnt":`${reviewPreDto.totalCnt}`,"photo_cnt":`${reviewPreDto.photoAndVideoResponseDto.photoCnt}`,"best_cnt":0,"star5":`${reviewPreDto.reviewScore.star5}`,"star4":${reviewPreDto.reviewScore.star4},"star3":${reviewPreDto.reviewScore.star3},"star2":${reviewPreDto.reviewScore.star2},"star1":${reviewPreDto.reviewScore.star1},"photo_only":${reviewPreDto.photoAndVideoResponseDto.photoOnly},"video_only":${reviewPreDto.photoAndVideoResponseDto.videoOnly},"review_point":${reviewPreDto.totalScore},"mod_id":null};
    var noneHtml = "";
	var reviewPointTot = reviewPoint.total_cnt;
	//후기가 10개 이상이면 통계화면 생성
    if (reviewPointTot >= 10) {
		//평점비율 그래프
		stackDatas();
		//최근평점 그래프
		chartDatas();
		//후기 한눈에 보기
		//evalStatic();
	} else if (reviewPointTot > 0 && reviewPointTot < 10) {
		//후기가 10개 미만일시 대기 화면
		noneHtml += "<div class='charts waiting-review'>";
		noneHtml += "	<div class='chart-box'>";
		noneHtml += "		<h5>현재 <em>" + reviewPointTot + "</em>명 참여 완료! <em>" + (10 - reviewPointTot) + "</em>명만 더 참여하면,<br />후기 통계가 공개됩니다!</h5>";
		noneHtml += "		<button class='normal-btn' onclick='javascript:myReview();'>후기작성하기</button>";
		noneHtml += "	</div>";
		noneHtml += "</div>";
		
		$('.charts-wrap').html(noneHtml);
		$('.monthly').hide();
	} else {
		//후기가 없을시 디폴트 화면
		noneHtml += '<div class="charts no-review">';
		noneHtml +=	'	<div class="chart-box">';
		noneHtml +=	'		<h5>고객님들의 후기가 충분히 쌓이기를 기다리고 있어요!</h5>';
		noneHtml +=	'		<button class="normal-btn" onclick="javascript:myReview();">후기 작성하기</button>';
		noneHtml += '	</div>';
		noneHtml += "</div>";
		$('.review-wrap').html(noneHtml);
		$('.monthly').hide();
	}
    $(".select_style_review").selectCss();

    $(".rv-list-wrapper").load("/product/pr_review_list_paging.do",{"pbCode" : `${product.pbCode}`, "tipYn" : tip_yn, "keywords" : "", "classifications":classifications, "page":'0', "size" : '5', "sort" : "1" , "totalCnt":`${reviewPreDto.totalCnt}`}, calHeight);
});

function ajax_reload(){
    $("#pr_review_list").load("/product/pr_review_list.do", {"pbCode" : `${product.pbCode}`, "tipYn" : "N", "keywords" : null, "classifications" : null, "totalCnt" : ${reviewPreDto.totalCnt}, "page":0, "size":5, "sort":1}, calHeight);
}

// 평점 비율
var stackDatas = function (){
	var reviewStackData = {"pb_code":`${product.pbCode}`,"total_cnt":${reviewPreDto.totalCnt},"photo_cnt":${reviewPreDto.reviewScore.star5},"best_cnt":0,"star5":${reviewPreDto.reviewScore.star5},"star4":${reviewPreDto.reviewScore.star4},"star3":${reviewPreDto.reviewScore.star3},"star2":${reviewPreDto.reviewScore.star2},"star1":${reviewPreDto.reviewScore.star1},"photo_only":${reviewPreDto.photoAndVideoResponseDto.photoOnly},"video_only":${reviewPreDto.photoAndVideoResponseDto.videoOnly},"review_point":${reviewPreDto.totalScore},"mod_id":null};
	var reviewCnt = reviewStackData.total_cnt;
	var stackArray = [];
	var barHtml = "";

	//별점 데이터 추출
	$.each(reviewStackData, function (col, item){
		if (col.indexOf("star")!= -1) stackArray.push({col:col.slice(-1), value:item});
	});
	// 내림차순 정렬
	stackArray.sort(function(a, b) {
		return a.col > b.col ? -1 : a.col < b.col ? 1 : 0;
	});
	// 최대값 추출
	const maxStack = stackArray.reduce(function(prev, current) {
		return (parseInt(prev.value) > parseInt(current.value)) ? prev : current;
	});
	//평점 비율 랜더링
	$.each(stackArray, function (index, item){
		var stackValue = Math.round( (item.value / reviewCnt) * 100);
		barHtml += "<li class='bar'>";
		if (maxStack.value === item.value){		//최대값 항목 특수효과
			barHtml += "	<small class='legend'>" + parseInt(item.value).toLocaleString('ko-KR') + "</small>";
		}
		barHtml += "	<span class='usage' data-usage='" + stackValue + "'>";
		barHtml += "		<span class='usage-value' style='height: " + stackValue + "%;'></span>";
		barHtml += "	</span>";
		barHtml += "	<p class='score'>" + item.col + "점</p>";
		barHtml += "</li>";
	});
	$(".vertical-bars").html(barHtml);
	//총 평점
	$("#totalScore").html(reviewStackData.review_point);
	//총 후기 갯수
	$(".chart-box .text").html(setComma(reviewStackData.total_cnt) + ' 개 후기');
}

//월별 평점 보기
var chartDatas = function(){
	 var context = document.getElementById('myChart').getContext('2d');

	//월별 평점데이터 파라미터
	var tempLabel = [];
	var chartLabels = [];
	var chartValues = [];

  	tempLabel = [{"eval_month":`${reviewPreDto.monthlyScore[0].month}`,"eval_month_score":`${reviewPreDto.monthlyScore[0].score}`},{"eval_month":`${reviewPreDto.monthlyScore[1].month}`,"eval_month_score":`${reviewPreDto.monthlyScore[1].score}`},{"eval_month":`${reviewPreDto.monthlyScore[2].month}`,"eval_month_score":`${reviewPreDto.monthlyScore[2].score}`},{"eval_month":`${reviewPreDto.monthlyScore[3].month}`,"eval_month_score":`${reviewPreDto.monthlyScore[3].score}`},{"eval_month":`${reviewPreDto.monthlyScore[4].month}`,"eval_month_score":`${reviewPreDto.monthlyScore[4].score}`},{"eval_month":`${reviewPreDto.monthlyScore[5].month}`,"eval_month_score":`${reviewPreDto.monthlyScore[5].score}`}];
	//x축 생성
	for (var idx = 0; idx < 6; idx++){
		var dateObj = new Date();
		dateObj.setMonth(dateObj.getMonth() - (5 - idx));
		var labelDate = dateObj.getMonth() === 0 ? 12 : dateObj.getMonth();
		//y축 x축과 매핑
		var finder = tempLabel.filter(function(e){
			var evalm = e.eval_month.substring(4,5) === "0" ? e.eval_month.substring(4,6).replace("0","") : e.eval_month.substring(4,6);
			return evalm === labelDate.toString();
		});
		if (finder != null && typeof finder != "undefined" && finder.length > 0){
			chartValues.push(finder[0].eval_month_score);
		} else {
			chartValues.push(0);
		}
		chartLabels.push(labelDate + "월");


	}

	var myChart = new Chart(context, {
		type: 'line', // 차트의 형태
		data: { // 차트에 들어갈 데이터
			labels:
				//x 축
				chartLabels	,
			datasets: [
				{
					label: '라인 차트', //차트 제목
					fill: false, //line 형태일 때, 선 안쪽을 채우는지 안채우는지
					data: chartValues //x축 label에 대응되는 데이터 값
					,
					fontSize: 14,
					color: 'rgb(137, 137, 137)',
					borderColor: 'rgb(137, 137, 137)', //포인트 연결라인 색상
					borderWidth: 1, //포인트 연결라인 굵기
					pointRadius: 5.5, //포인트 사이즈
					pointBackgroundColor: 'rgb(45, 45, 45)', //포인트 배경색
					pointBorderColor: 'transparent', //포인트 테두리색
					pointBorderWidth: 0, //포인트 테두리 굵기
					pointHoverRadius: 5.5, //호버 포인트 사이즈
					pointHoverBackgroundColor: 'rgb(255, 75, 45)', //호버 포인트 배경색
					pointHoverBorderColor: 'transparent', //호버 포인트 테두리색
					pointHoverBorderWidth: 0, //호버 포인트 테두리 굵기
					lineTension: 0.01, //선 긴장도
					//showLine: false, //포인트 연결라인 여부
				}
			]
		},
		options: {
			maintainAspectRatio: false,
			responsive: false,
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					gridLines: { //x축 그리드
						display: false
					},
					ticks: { //x축 데이터
						fontColor: '#898989',
						fontSize: 14,
						fontStyle: "normal",
						beginAtZero: true
					}
				}],
				yAxes: [{
					gridLines: { //y축 그리드
						display: true,
						drawTicks: false, //격자선 유무
						color: '#efefef',
						zeroLineColor:'#efefef', //최하단 그리드 색상
						lineWidth: 1, //그리드 선 굵기
					},
					ticks: { //y축 데이터
						maxTicksLimit: 5,
						beginAtZero: true,
						min: 0,
						max: 5,
						stepSize: 1,
						fontColor: 'transparent'
					}
				}]
			},
			tooltips: {
				enabled: false
			},
			hover: {
				animationDuration: 0
			},
			animation: {
				duration: 1,
				onComplete: function () {
					var chartInstance = this.chart,
						ctx = chartInstance.ctx;
					ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
					ctx.fillStyle = '#2d2d2d';
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function (dataset, i) {
						var meta = chartInstance.controller.getDatasetMeta(i);
						meta.data.forEach(function (bar, index) {
							var data = dataset.data[index];
							if (data != '0.0') {
								ctx.fillText(data, bar._model.x, bar._model.y + 20);
							} else {
								ctx.fillText(0, bar._model.x, bar._model.y - 10);
							}

						});
					});
					
					
				}
			}
		}
	}); 
}

var tip_yn = "N";
var reviewSort1 = "";
var reviewSort2 = "";
var keywords = "";
var classifications = "";
var totalCount = "0";
var curPage = 0;
function goReviewPage_reviews(page,sort){
	$("#reviewGotoPage").val(page);
	curPage = page;
    $(".rv-list-wrapper").load("/product/pr_review_list_paging.do",{"pbCode" : `${product.pbCode}`, "tipYn" : tip_yn, "keywords" : keywords, "classifications":classifications, "page":page, "size" : '5', "sort" : "1" , "totalCnt":${reviewPreDto.totalCnt}}, calHeight);
	var offset = $(".review-box").offset();
	$('html, body').animate({scrollTop : offset.top},300);
}

$(document).ready(function(){
	//더보기 - 접기
	$(".rv-area .left").on("click", function(){
		$(this).toggleClass("active");            
		$(this).children('.more').text($(this).children('.more').text() == '더보기' ? '접기': '더보기');
	});
});

$(document).on("click","#prReview",calHeight);
$(document).on("click","#prReview",calWidth);

//먹팁 여부 체크
function includeMukTip(e) {
 	var checked = $(e).prop('checked');
	if(checked){
		tip_yn = "Y";
	}else{
		tip_yn = "N";
	}
	$(".rv-list-wrapper").load("/product/pr_review_list_paging.do",{"pbCode" : `${product.pbCode}`, "tipYn" : tip_yn, "keywords" : keywords, "classifications":classifications, "page":curPage, "size" : '5', "sort" : "1" , "totalCnt":${reviewPreDto.totalCnt}}, calHeight);
}

function fnRecomm(id, rv_seq, cm_seq, pb_code){
	//바뀌어야하는 상태 ("Y" : 누르면 활성화 처리되어야함, "N" : 누르면 비활성화 처리되어야함)
	if($(id).attr('class')=="active"){
		$(id).removeClass("active");
	}else{
		$(id).addClass("active");
	}
}

function calWidth(){
	var totalWidth = 0;
	var set = $('.detail #rcmd-tabs .tab-item')

	set.each(function(){
		  totalWidth = totalWidth + $(this).width();
	});
	if(totalWidth < 1180){
		  $('#rcmd-tabs .tab').css('justify-content','center');
		  $('#rcmd-tabs .chip-more').hide();
		  $('#rcmd-tabs .chip-dimm').hide();
	}else{
		$('#rcmd-tabs .tab').css('justify-content','unset');
		$('#rcmd-tabs .chip-more').show();
		$('#rcmd-tabs .chip-dimm').show();
	}
}


function overView(e){
	$(e).toggleClass("active");            
	$(e).children('.more').text($(e).children('.more').text() == '더보기' ? '접기': '더보기');
}

function hashClick(e){
	keywords = "";
	classifications = "";
	var value = $(e).closest("li").attr("value");
	var status = $(e).closest("li").hasClass("on");//선택하는 이전 상태
	var allAI = true;
	var allTag = true;
	//지금꺼에 상태 on 넣어주기
	if(!status){
		$(e).closest("li").addClass('on');
	}else{
		$(e).closest("li").removeClass('on');
	}
	
	if(value==""){//전체 눌렀을 때
		$("#rcmd-tabs .tab-item-keyword").removeClass('on');
		$("#rcmd-tabs .tab-item.full.hash-item").addClass('on');
	}else{
		$("#rcmd-tabs .tab-item.full.hash-item").removeClass('on');
		$("#rcmd-tabs .tab-item-keyword").each(function(){
			
			var value = $(this).attr("value");
			
			if($(this).hasClass('on')) {
				allTag = false;
      		//키워드
  			if(keywords == ""){
  				keywords += value;
  			}else{
  				keywords += ","+value;
  				}
      		}
		});
		$("#rcmd-tabs .tab-item-classification").each(function(){
			
			var value = $(this).attr("value");
			
			if($(this).hasClass('on')) {
				allAI = false;
	      		//키워드
	  			if(classifications == ""){
	  				classifications += value;
	  			}else{
	  				classifications += ","+value;
	  			}
      		}
		});
		if(allAI){
			$("#rcmd-tabs .tab-item.full.ai-item").addClass('on');
		}
		if(allTag){
			$("#rcmd-tabs .tab-item.full.hash-item").addClass('on');
		}
	}

	$(".rv-list-wrapper").load("/product/pr_review_list_paging.do",{"pbCode" : `${product.pbCode}`, "tipYn" : tip_yn, "keywords" : keywords, "classifications" : classifications,"page":'0', "size" : '5', "sort" : "1"},
			calHeight);
}
function aiClick(e){
	curPage = 0;
	keywords = "";
	classifications = "";
	var value = $(e).closest("li").attr("value");
	var status = $(e).closest("li").hasClass("on");//선택하는 이전 상태
	var allAI = true;
	var allTag = true;
	//지금꺼에 상태 on 넣어주기
	if(!status){
		$(e).closest("li").addClass('on');
	}else{
		$(e).closest("li").removeClass('on');
	}
	
	if(value==""){//전체 눌렀을 때
		$("#rcmd-tabs .tab-item-classification").removeClass('on');
		$("#rcmd-tabs .tab-item.full.ai-item").addClass('on');
	}else{
		$("#rcmd-tabs .tab-item.full.ai-item").removeClass('on');
		$("#rcmd-tabs .tab-item-keyword").each(function(){
			
			var value = $(this).attr("value");
			
			if($(this).hasClass('on')) {
				allTag = false;
      		//키워드
  			if(keywords == ""){
  				keywords += value;
  			}else{
  				keywords += ","+value;
  				}
      		}
		});
		$("#rcmd-tabs .tab-item-classification").each(function(){
			
			var value = $(this).attr("value");
			
			if($(this).hasClass('on')) {
				allAI = false;
	      		//키워드
	  			if(classifications == ""){
	  				classifications += value;
	  			}else{
	  				classifications += ","+value;
	  			}
      		}
		});
		if(allAI){
			$("#rcmd-tabs .tab-item.full.ai-item").addClass('on');
		}
		if(allTag){
			$("#rcmd-tabs .tab-item.full.hash-item").addClass('on');
		}
	}

	$(".rv-list-wrapper").load("/product/pr_review_list_paging.do",{"pbCode" : `${product.pbCode}`, "tipYn" : tip_yn, "keywords" : keywords, "classifications" : classifications,"page":'0', "size" : '5', "sort" : "1"},
			calHeight);
}

$(document).ready(function(){
    $(".select_style_review").selectCss();
    $(".rv-list-wrapper").load("/product/pr_review_list_paging.do",{"pbCode" : `${product.pbCode}`, "tipYn" : tip_yn, "keywords" : "", "classifications":classifications, "page":'0', "size" : '5', "sort" : "1" , "totalCnt":${reviewPreDto.totalCnt}}, calHeight);
});

//swiper
var swiper = new Swiper(".rvImgSwiper", {
 slidesPerView: "auto",
 spaceBetween: 8,
 pagination: {
     el: ".swiper-pagination",
     clickable: true,
 },
});

//먹팁
 $(".muk-tip-area .title i").on("click", function(){
 $(this).parent().next().toggleClass("on");
}); 

//상세에서 좌측 상품정보 없을 때
if($('.img-box.left').length){
} else{
	$('.img-box.right').addClass('full')
}


//calWidth();
//후기 상세
function goReviewDetail(rv_seq,pb_code){
	$("#footer_wrap, #header_wrap, #leftquick, #rightquick, #hban_wrap, .product_sub_deal_area, .top-banner, .header, .footer-menu .affiliate ").css({"z-index":"0"});
 $("body").addClass('of-hidden');
 
 var rv_seq = $(this).data("rvseq");
 var index = $(this).data("index");
 $(".rv-swiper").empty();
 $(".rv-swiper").load("/product/pr_review_detail.do",{"seq" : rv_seq, "pbCode": `${product.pbCode}`});
 
 //전,후 데이터를 불러올 수 없어 꺽쇠 숨김처리
 $(".rv-prev").hide();
 $(".rv-next").hide();
 
 $(".pop-rv-detail").show();
}

//사진/동영상 이미지 클릭 시
function zooming(e){
    //e.preventDefault();
    $("#footer_wrap, #header_wrap, #leftquick, #rightquick, #hban_wrap, .product_sub_deal_area, .top-banner, .header, .footer-menu .affiliate ").css({"z-index":"0"});
    $("body").addClass('of-hidden');
    count = 3754;    
    //if($(this).is(":last-child") && true){//12개 이상이라 (+) 버튼이 뜬 경우에
    if($(e).is(":last-child")){
        $(".pop-rv-detail").hide();
        $(".pop-rv-thumb").show();
        $.ajax({
            url: '/review/images?pb_code='+`${product.pbCode}`+'&startNum=0', 
            method: 'GET',
            dataType: 'json', 
            success: function(response) {
                let htmlContent = '';
                console.log(response);
                response.forEach(function(item, idx) {
                console.log(item.reviewSeq);
                	console.log(item);
                	htmlContent += '<li data-rvseq="' + item.reviewSeq + '" data-index="' + idx + '">' +
                    '<a href="#">' +
                    '<img src="' + item.img + '" alt="" onerror="this.src=\'\';">' +
                    '</a>' +
                    '</li>';
                });
                $('.thumb-item').html(htmlContent);
            },
            error: function(xhr, status, error) {
                console.error('AJAX 요청 실패:', error);
            }
        });
    }else{    
        var rv_seq = $(e).data("rvseq");
        var index = $(e).data("index");
        type = "";
         $(".rv-swiper").empty();
         $(".rv-swiper").load("/product/pr_review_detail.do",{"seq" : rv_seq, "pbCode": `${product.pbCode}`});

        $(".rv-prev").show();
        $(".rv-next").show();
        $(".pop-rv-detail").show();
    }
} 

function goPrDetail2(pb_code,cc_seq,pb_com_cd){
	window.open("/product/detail.do?productId=" + pb_code);
}

function showTooltip(event, seq) {
	const tooltip = document.getElementById('tooltip-profile'+seq);
    tooltip.style.display = 'block'; // 말풍선 보이기
    tooltip.style.opacity = '1';
    tooltip.style.top = `${event.target.getBoundingClientRect().top - tooltip.offsetHeight}px`; // 위치 조정
    tooltip.style.left = `${event.target.getBoundingClientRect().left + (event.target.offsetWidth / 2) - (tooltip.offsetWidth / 2)}px`; // 가운데 정렬
}

function hideTooltip(seq) {
	const tooltip = document.getElementById('tooltip-profile'+seq);
	tooltip.style.opacity = '0'; // 불투명도 설정하여 숨기기
    tooltip.style.display = 'none'; // 말풍선 숨기기
}

function closePopRv(event){
	if($(event).parent().find("video").attr("id") != undefined){
		$('.imgs video').each(function(i) {
			$('.imgs video').get(i).pause();
		});
	}
    $('.pop-rv').hide();
    $("#header_wrap").css({"z-index":"22"});
    $("#hban_wrap").css({"z-index":"60"});
    $("#footer_wrap, #header_wrap, #leftquick, #rightquick, #hban_wrap, .product_sub_deal_area, .top-banner, .header, .footer-menu .affiliate ").css({"z-index":"0"});
    $(".top-banner, .header").css({"z-index":"50"});
    // 추가
    //$("html, body").css({"overflow-y":"auto"});
    $("body").removeClass('of-hidden');
}
var type = "";//후기상세 넘김시, 연속된 리스트가 전체일지/사진일지/동영상일지 판단
var count;

$(document).ready(function() {
	  var imgPopup = $('.review-modal-pop');
	  var imgCont  = $('.review-modal');
	  var popupImage = $('.review-modal-pop img');
	  var closeBtn = $('.close-btn');

	  imgCont.on('click', function() {
	    var img_src = $(this).children('img').attr('src');
	    imgPopup.children('img').attr('src', img_src);
	    imgPopup.addClass('opened');
	    $('.return_top').addClass('z-down');
	  });

	  $(imgPopup, closeBtn).on('click', function() {
	    imgPopup.removeClass('opened');
	    imgPopup.children('img').attr('src', '');
	    $('.return_top').removeClass('z-down');
	  });

	  popupImage.on('click', function(e) {
	    e.stopPropagation();
	  });
	  

	  const recommendBtn = document.getElementById('recommend-btn');
	  const unrecommendBtn = document.getElementById('unrecommend-btn');
	  const recommend = document.querySelector('.recommended');
	  const unrecommend = document.querySelector('.unrecommended');

	  let isRecommended = false;
	  let isUnrecommended = false;

	  recommendBtn.addEventListener('click', () => {
	    if (!isRecommended) {
	      // 추천 버튼 클릭 시
	      recommend.src = `${path}/images/icon/ico_good_press.png`;
	      unrecommend.src = `${path}/images/icon/ico_bad.png`;
	      isRecommended = true;
	      isUnrecommended = false;
	    } else {
	      // 이미 추천된 상태에서 추천 버튼 클릭 시
	      recommend.src = `${path}/images/icon/ico_good.png`;
	      isRecommended = false;
	    }
	  });

	  unrecommendBtn.addEventListener('click', () => {
	    if (!isUnrecommended) {
	      // 비추천 버튼 클릭 시
	      unrecommend.src = `${path}/images/icon/ico_bad_press.png`;
	      recommend.src = `${path}/images/icon/ico_good.png`;
	      isUnrecommended = true;
	      isRecommended = false;
	    } else {
	      // 이미 비추천된 상태에서 비추천 버튼 클릭 시
	      unrecommend.src = `${path}/images/icon/ico_bad.png`;
	      isUnrecommended = false;
	    }
	  });
	  
	});
	
$(function(){
    $(".recomcontent.hasImg .review_img img").click(function(e){
        var popimgSrc =$(e.target)[0].getAttribute('src'),  // 190402 ie bug fix
         nocacheImgSrc = popimgSrc + "?nocache=" + new Date().getTime(); // 190402 ie bug fix cache
        $(".pop_review_img_detail img").attr("src", nocacheImgSrc); // 190402 ie bug fix
        $(".pop_review_img_detail").show();
        $(".pop_detail #popup_content .prodetail h3.tTitle").hide();
        $(".pop_detail #popup_content .prodetail .bar").hide();
        $("#footer_wrap, #header_wrap, #leftquick, #rightquick, #hban_wrap, .product_sub_deal_area").css({"z-index":"0"});
        // 추가
        $("body").addClass('of-hidden');
    });
	//도움이 돼요
    $(".liked-box button").on("click", function(){
    	
    	var active = "Y";
    	if($(this).attr('class')=="active"){
    		active = "N";
    	}
    });
});
$(function(){
    // tab in tab
    $(".tab-content > .subtab > li").click(function () {
        var num2 = $(".subtab > li").index(this);
        $(".tab-content-inner > .tab-content-box").removeClass('active');
        $(".tab-content-inner > .tab-content-box").eq(num2).addClass('active');
        $(".subtab li").removeClass('active');
        $(this).addClass('active');
        $(".tab-content > .subtab > li").addClass('sub-on');
        $(this).siblings().removeClass('sub-on');

        //리뷰 데이터 불러오기
        var tab = $(".subtab").find(".sub-on").attr("id");
        if(tab == "subreview"){//전체
            type = "";
            count = 3754;
        }else if(tab == "subphoto"){//사진
            type = "10";
            count = 3754;
        }else if(tab == "subvideo"){//동영상
            type = "20";
            count = 0;
        }
        var startNum = $(".pop-rv-thumb .tab-content-box."+tab+" .thumb-list li:last").attr("data-index");

        $.ajax({
            type: "GET",
            data: {"startNum" : startNum, "pb_code" : `${product.pbCode}`},
            url: "/review/images",
            async : false,
            success: function(response) {
                let html = '';
                response.forEach(function(item, idx) {                
                    html += '<li data-rvseq="'+item.reviewSeq+'" data-index="'+item.rowNumber+'">';
                    html += '<a href="javascript:;">';
                    html += '<img src="'+item.img+'" alt="" onerror="this.src='+"https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg"+';">';
                    html += '</a>';
                    html += '</li>';
                });
                $(".pop-rv-thumb .tab-content-box."+tab+" .thumb-list ul").append(html);
            }
        });

    });
    $('.rcmdSwiper .chip-ctgr').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).parent().index();
        //$('.rcmdSwiper .chip-ctgr').removeClass('chip-on');
        //$(this).addClass('chip-on');
        chipSwiper.slideTo(idx - 2);
    });

      //탭바 ui
    $("#rcmd-tabs .chip-more").on("click", function(){
         $(this).parent().toggleClass("all");
        $(this).text($(this).text() == '더보기' ? '접기': '더보기');
        $('.chip-dimm').toggleClass('no-show');
    });

    //후기 리스트 swiper
    var swiper = new Swiper(".rvImgSwiper", {
        slidesPerView: "auto",
        spaceBetween: 8,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    //사진/동영상 팝업 스크롤 할 때
    var currentscrollHeight = 0;
    $(".pop-rv-thumb .thumb-list").scroll(function () {
        //var startNum = $(".pop-rv-thumb .thumb-list li").length;
        var tab = $(".subtab").find(".sub-on").attr("id");
        if(tab == "subreview"){//전체
            type = "";
        }else if(tab == "subphoto"){//사진
            type = "10";
        }else if(tab == "subvideo"){//동영상
            type = "20";
        }
        var startNum = $(".pop-rv-thumb .tab-content-box."+tab+" .thumb-list li:last").attr("data-index");

        //현재 영역의 가장 위
        var scrollTop = $(this).scrollTop();
        //현재 보이는 영역의 높이(스크롤로 감춰진 곳은 계산x)
        var innerHeight = $(this).innerHeight();
        //스크롤 포함 영역의 높이(스크롤로 감춰진 곳 계산 o)
        var scrollHeight = $(this).prop('scrollHeight');

        if(scrollTop + innerHeight >= scrollHeight){
            $.ajax({
                type: "GET",
                data: {"startNum" : startNum, "pb_code" : `${product.pbCode}`},
                url: "/review/images",
                async : false,
                success: function(response) {
                    // JSON 데이터를 사용하여 HTML 생성
                    let html = '';
                    response.forEach(function(item, idx) {
                    
                        html += '<li data-rvseq="'+item.reviewSeq+'" data-index="'+item.rowNumber+'">';
                        html += '<a href="javascript:;">';
                        html += '<img src="'+item.img+'" alt="" onerror="this.src='+"https://image.thebanchan.co.kr/tbcImg/web/images/common/no_product.jpg"+';">';
                        
                       /*  if(item.fileCollection.length > 1){
                            html += '<span>+'+item.fileCollection.length+'</span>';
                        } */
                        html += '</a>';
                        html += '</li>';
                    });
                    $(".pop-rv-thumb .tab-content-box."+tab+" .thumb-list ul").append(html);
                }
            });
        }else{
            //console.log("스크롤 중");
        }

    });

    //사진/동영상 팝업에서 사진 선택할 때
    $(document).on("click", ".pop-rv-thumb .thumb-list li", function (e) {
        var rv_seq = $(this).data("rvseq");
        var index = $(this).data("index");
        var tab = $(".subtab").find(".sub-on").attr("id");
        if(tab == "subreview"){//전체
            type = "";
            count = 3754;
        }else if(tab == "subphoto"){//사진
            type = "10";
            count = 3754;
        }else if(tab == "subvideo"){//동영상
            type = "20";
            count = 0;
        }
        $(".rv-swiper").empty();
        $(".rv-swiper").load("/product/pr_review_detail.do",{"seq" : rv_seq, "pbCode": `${product.pbCode}`});

        $('.pop-rv-thumb').hide();
        $(".rv-prev").show();
        $(".rv-next").show();
        $(".pop-rv-detail").show();
    });

    //먹팁(?) 클릭 시
    $(".muk-tip-area .title i").on("click", function(){
        $(this).parent().next().toggleClass("on");
    });

    //리뷰 더 보기 클릭 시
    $(".rv-area .left .unfold").on("click", function(){
        $(this).hide().parent().toggleClass("active").find(".fold").show();
    });

    //리뷰 접기 클릭 시
    $(".rv-area .left .fold").on("click", function(){
        $(this).hide().parent().toggleClass("active").find(".unfold").show();
    });

    //해시태그 생성
    var hashLength = $(".popup .hash-box span").length;
    var theRestLength = $(".popup .hash-box span").length - 1;
    if( hashLength > 2 ){ //해시태그 2개 이상시
        $(".popup .hash-box").append("<span class='rest-num'>" + "" + "</span>"); //남은 해시태그 갯수 생성
    }

    //해시태그 접기
    $(".popup .hash-box .rest-num").on("click", function(){
        $(".popup .hash-box span").siblings().toggleClass("show");
        var restNumber = $(this).siblings().length;
        if( $(".popup .rest-num").hasClass("show") ){
            $(this).text("접기");
        } else {
            $(this).text("+" + restNumber);
        }
    });

    //후기 팝업 swiper
     var rvSwiper = new Swiper(".rv-swiper", {
        allowTouchMove: false,
        loop:false,
        navigation: {
            nextEl: ".rv-next",
            prevEl: ".rv-prev",
        },
        on: { // 초기화
            init : function() {
                if(this.activeIndex === 0) {
                    //console.log(this.slides.length);
                    $(".rv-swiper > .swiper-wrapper > .swiper-slide:first-child").addClass("init");
                    var initSlide = $(".init .hash-box span").length - 1;
                    $(".init .hash-box .rest-num").text("+" + initSlide);
                    if(initSlide === 1) {
                        $(".init .hash-box .rest-num").hide();
                    } else {
                        $(".init .hash-box .rest-num").show();
                    }
                }
            }
        },
    });

    //var currentSlide = $(rvSwiper.slides[rvSwiper.activeIndex]);
    rvSwiper.on('slideChange', function () {
        currentSlide = $(rvSwiper.slides[rvSwiper.activeIndex]);
        $(".hash-box .rest-num").empty();
        var activeSlide = currentSlide.find(".hash-box span").length - 1;
        $(".hash-box .rest-num").text("+" + activeSlide);
        if(activeSlide === 1) {
            $(".hash-box .rest-num").hide();
        } else {
            $(".hash-box .rest-num").show();
        }
    });	   
    
    
});

</script>
<h3 class="tTitle current" style="left: 0px; z-index: 2; width: 50%;">
	<a href="#this" id="prReview">고객 후기 (<span>${reviewPreDto.totalCnt}</span>)건
	</a>
</h3>


<div class="tContent" tabindex="0" id="tno2" style="display: block;">

	<!-- 상품평 -->
	<div class="review-wrap">

		<!-- 차트 -->
		<div class="charts-wrap">
			<!-- 총 평점 -->
			<div class="charts left">
				<div class="chart-box">
					<h5>총 평점</h5>
					<div class="total">
						<strong id="totalScore">${reviewPreDto.totalScore}</strong> / 5
					</div>
					<div class="star-rating top binded">
						<span style="width: 96%;" id="totalScoreRate"></span>
					</div>
					<div class="text">${reviewPreDto.totalCnt}개후기</div>
				</div>
				<div class="chart-box">
					<!-- 평점 비율 -->
					<h5>평점 비율</h5>
					<section class="section-stacked-bars">
						<section class="report report-usage-daily" id="reveal-usage">
							<ul class="vertical-bars">
							</ul>
						</section>
					</section>
					<!-- //평점 비율 -->
				</div>
			</div>
			<!-- //총 평점 -->
			<!-- 최근 평점 보기 -->
			<div class="charts right">
				<div class="chart-box">
					<h5>최근 평점 보기</h5>
					<canvas id="myChart" width="300" height="150" class="mychart"
						style="display: block;"></canvas>
				</div>
			</div>
			<!-- //최근 평점 보기 -->
		</div>
		<!-- //차트 -->

		<!-- 후기 한눈에 보기 -->
		<div class="monthly">
			<div class="head">
				<h3>후기 한눈에 보기</h3>
			</div>
			<div class="review-summary">
				<div class="review-summary-group1">
					<span><img class="summary-logo"
						src="${path}/images/icon/thebanchan_and_i.gif" /></span> <font
						class="review-summary-info"><strong>더반찬&I</strong>가 리뷰를
						요약했어요</font> <font class="positive-percentage">긍정리뷰 &nbsp;<strong>${reviewPreDto.positivePercentage}%</strong></font>
				</div>
				<div class="summary-content">
					<span class="contain-summary"> ${reviewPreDto.reviewSummary}
					</span>
				</div>
				<div class="review-summary-group2">
					<font class="review-summary-help">리뷰 요약이 도움되었나요?</font>
					<button id="recommend-btn">
						<img class="recommended" src="${path}/images/icon/ico_good.png" />
					</button>
					<button id="unrecommend-btn">
						<img class="unrecommended" src="${path}/images/icon/ico_bad.png" />
					</button>
				</div>
			</div>
		</div>




		<!-- //후기 한눈에 보기 -->

		<div id="pr_review_list"></div>
		<div class="pop-rv pop-rv-thumb" style="display: none;">
			<div class="pop-rv-wrapper">
				<div class="img_after" onclick="closePopRv(this);"></div>
				<div class="thumb-box">
					<h3>사진/동영상(${reviewPreDto.photoAndVideoResponseDto.photoCnt})</h3>
					<div class="tab-content active">
						<ul class="subtab">
							<li id="subreview" class="sub-on">전체</li>
							<li id="subphoto">사진</li>
							<li id="subvideo">동영상</li>
						</ul>
						<div class="tab-content-inner">
							<article class="tab-content-box subreview active">
								<div class="thumb-list">
									<ul class="thumb-item">
									</ul>
								</div>
							</article>
							<article class="tab-content-box subphoto">
								<div class="thumb-list">
									<ul class="thumb-item">
									</ul>
								</div>
							</article>
							<article class="tab-content-box subvideo">
								<div class="no-rv-box">
									<p>아직 등록된 동영상이 없습니다</p>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
			<span class="dimm" onclick="closePopRv(this)"></span>
		</div>
		<div class="pop-rv pop-rv-detail" style="display: none;">
			<div class="pop-rv-wrapper">
				<div class="img_after" onclick="closePopRv(this)"></div>
				<div class="swiper rv-swiper">

					<script>
$(".rv-prev").attr("data-rvseq","");
$(".rv-next").attr("data-rvseq","");

$(".rv-prev").attr("data-index","0");
$(".rv-next").attr("data-index","2");

if(true){
	$(".rv-prev").hide();
}else{
	$(".rv-prev").show();
}

if(false){
	$(".rv-next").hide();
}else{
	$(".rv-next").show();
}

//먹팁 해시태그
exampleText = document.querySelectorAll('.ht-content');

exampleText.forEach(function (item, index) {
    const highlightedText = highlightHashtags(item.innerHTML, 'blue');
    item.innerHTML = highlightedText;
});

function highlightHashtags(text, color) {
    const hashtagRegex = /#([^.,\s]+)/g;
    return text.replace(hashtagRegex, function (str) {
    	return `<span class="ht">` + str + `</span>`;
    });
}

$(document).ready(function(){
	//후기 팝업 swiper thumbnail 연동
    const mainSlides = document.querySelectorAll('.main-swiper .swiper-slide');
    const thumbSlides = document.querySelectorAll('.thumb-swiper .swiper-slide');

    const mainSwiper = new Swiper('.main-swiper',{
        allowTouchMove: true,
        loop:false,
        loopedSlides:mainSlides.length,
        /* effect:'fade',    
        fadeEffect:{
            crossFade:true
        }, */
        observer: true,
	    observeParents: true,
	    on: {
	        slideChange: function () {
	        	$('.thumb-swiper .swiper-slide').removeClass('on');
	        	$('.thumb-swiper .swiper-slide').eq(this.realIndex).addClass('on');
	        	if ($('.thumb-swiper .swiper-slide').eq(5).hasClass('on')){
	        		$('.thumb-swiper .swiper-wrapper').css("transform","translate3d(-330px, 0px, 0px)");
	        	} else if($('.thumb-swiper .swiper-slide').eq(4).hasClass('on')){
	        		$('.thumb-swiper .swiper-wrapper').css("transform","translate3d(0px, 0px, 0px)");
	        	} else if($('.thumb-swiper .swiper-slide').eq(10).hasClass('on')){
	        		$('.thumb-swiper .swiper-wrapper').css("transform","translate3d(-540px, 0px, 0px)");
	        	}
		    }
	      }
    });
    
    const thumbSwiper = new Swiper('.thumb-swiper',{
        allowTouchMove: true,
        slidesPerView:'auto',
        spaceBetween:6,
        loop:false,
        loopedSlides:thumbSlides.length,
        slideToClickedSlide:false,
        observer: true,
	    observeParents: true
    });

    //후기 팝업 thumbnail 클릭 시
    $('.thumb-swiper .swiper-slide').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.thumb-swiper .swiper-slide').removeClass('on');
        $(this).addClass('on');
        mainSwiper.slideTo(idx);
        var videoId = $(this).find("video").attr("id");
        
        if($(".detail-area").find("video").attr("id") !== undefined){//비디오가 하나라도 있는 후기면
        	$('.imgs video').each(function(i) {
				$('.imgs video').get(i).pause();
			});
        }
        
        if(videoId !== undefined){//비디오 썸네일이라면
            $('.imgs video#'+videoId).get(0).currentTime = 0;
            $('.imgs video#'+videoId).get(0).play();
            $(".detail-area .rv-img-area").hide();
            $(".detail-area .review-wrap").hide();
        }else{
        	$(".detail-area .review-wrap").show();
        	$(".detail-area .rv-img-area").show();
        }
    });
    
    if(false){
    	$(".detail-area .rv-img-area").hide();
    	$(".detail-area .review-wrap").hide();
    }
    
    $('video').on('pause', function() {
    	$(".detail-area .rv-img-area").show();
    	$(".detail-area .review-wrap").show();
    });
    
	$('video').on('play', function() {
		$(".detail-area .review-wrap").hide();
		$(".detail-area .rv-img-area").hide();
	});
        
    function calHeight(){
		$('.rv-area .left').each(function(index,item){
			var rvTxt = $(this).find('.contain').height();
			//console.log(rvTxt)
			if(rvTxt < 72){
				$(this).find('.more').hide();
				$(this).css("pointer-events","none");
			}
		})
	};
	calHeight();
	
    //더보기 접기
    $(".detail-area .rv-area .left").on("click", function(){
		$(this).toggleClass("active");            
		$(this).children('.more').text($(this).children('.more').text() == '더보기' ? '접기': '더보기');
	});
    
    var thumbNum =  $('.thumb-swiper .swiper-slide').length;
    //console.log(thumbNum);
    if (thumbNum == 1){
    	$('.thumb-swiper .swiper-slide').off();
    } else if(thumbNum >=2){
    	$('.thumb-swiper .swiper-slide').first().addClass('on');
    }
    
    
});
</script>
				</div>
			</div>
			<span class="dimm" onclick="closePopRv()"></span>
		</div>
		<!-- // review-wrap-->

	</div>
	<!-- // review-wrap-->
	<!-- //상품평 -->

</div>
<!-- // tContent-->

