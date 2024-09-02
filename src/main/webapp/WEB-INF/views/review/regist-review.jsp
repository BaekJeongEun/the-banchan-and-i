<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<h3 class="tTitle" style="left: 638px; z-index: 1; width: 50%;">
	<a href="#this">후기 작성</a>
</h3>
<div class="ziploading" id="ziploading" style="display: none;">
	<span class="con">LOADING</span>
</div>
<div class="tContent" id="tno1" style="display: none;">
	<div id="componentArea">
		<form id="frm" name="frm" method="post"
			action="/common/commonFilePop.do" target="fileUpload">
			<input type="hidden" id="pageStatus" name="pageStatus" value="N">
			<input type="hidden" id="rv_seq" name="rv_seq" value=""> <input
				type="hidden" id="review_pb_code" name="pb_code"
				value="${product.pbCode}"> <input type="hidden" id="PB_CODE"
				name="PB_CODE" value="${product.pbCode}"> <input
				type="hidden" name="order_id" value="000138088152"> <input
				type="hidden" name="item_seq" value="014"> <input
				type="hidden" id="EVAL_KIND_CD" name="EVAL_KIND_CD" value="">
			<input type="hidden" id="rv_score" name="rv_score" value="">
			<input type="hidden" id="PB_NM" name="pb_name"
				value="${product.name}">  <input type="hidden"
				id="fileType" name="fileType" value="reviewFile"> <input
				type="hidden" id="callFunction" name="callFunction"
				value="resultFileExec"> <input type="hidden" id="pathType"
				name="pathType" value="product_review"> <input type="hidden"
				id="reviewFileWebpath" name="reviewFileWebpath" value=""> <input
				type="hidden" id="fileObj" name="fileObj" value="reviewFile">
			<input type="hidden" id="Allow" name="Allow" value="image"> <input
				type="hidden" id="fileCnt" name="fileCnt" value="1"> <input
				type="hidden" id="filePath" name="filePath" value=""><input
				type="hidden" id="reviewFormCnt" name="reviewFormCnt" value="0">
			<input type="hidden" id="reviewFormLastNum" name="reviewFormLastNum"
				value="0"> <input type="hidden" id="videoFormCnt"
				name="videoFormCnt" value="0"> <input type="hidden"
				id="videoFormLastNum" name="videoFormLastNum" value="0"><input
				type="hidden" id="regId" name="regId" value="더*찬">

			<!-- 리뷰 작성하기 팝업 -->
			<div class="cd-popup-container">
				<div class="cd-popup-content">
					<div class="review-wrap">
						<!-- 별점 -->
						<div class="review-inner">
							<div class="review-box">
								<div class="rating-wrap">
									<h3 class="center-title">상품에 만족하시나요?</h3>
									<div class="stars">
										<input type="radio" id="star5" name="star" value="최고예요! (5점)"
											data-star-score="5"> <label for="star5"></label> <input
											type="radio" id="star4" name="star" value="맛있어요! (4점)"
											data-star-score="4"> <label for="star4"></label> <input
											type="radio" id="star3" name="star" value="보통이에요 (3점)"
											data-star-score="3"> <label for="star3"></label> <input
											type="radio" id="star2" name="star" value="조금 아쉬워요 (2점)"
											data-star-score="2"> <label for="star2"></label> <input
											type="radio" id="star1" name="star" value="별로예요 (1점)"
											data-star-score="1"> <label for="star1"></label>
									</div>
									<div class="rates">선택하세요</div>
								</div>
							</div>
						</div>
						<!-- //별점 -->

						<!-- 후기작성 -->
						<div class="review-inner" id="myReview">
							<div class="review-box">
								<h3 class="center-title">자세한 후기를 들려주세요!</h3>
								<!-- 후기입력 -->
								<div class="textarea-box">
									
									<div id="suggestions" class="suggestion-bubble"></div>
									
									<textarea name="rv_content" id="rv_content" cols="30" rows="10"
										placeholder="제품을 드신 후 어떠셨나요? 자세히 작성해주시면 다른 분들께도 도움이 돼요"
										oninput="javascript:contentCheck(this, '#byte1', 500, 'C', this.value);"></textarea>
								</div>
								<!-- //후기입력 -->

								<!-- 이런 점이좋았어요! -->
								<div class="review-write" id="reviewWrite1">
									<h4 class="middle-title">
										이런 태그가 어울려요 <span>(다중 선택)</span>
									</h4>
									<div class="review-tags">
										<span data-recomm-tag="2112210000023" data-recomm-type="01"
											id="tags" data-recomm-tag-name="#오늘집밥">#오늘집밥</span> <span
											data-recomm-tag="2112210000024" data-recomm-type="01"
											id="tags" data-recomm-tag-name="#스트레스해소">#스트레스해소</span> <span
											data-recomm-tag="2112210000025" data-recomm-type="01"
											id="tags" data-recomm-tag-name="#혼밥">#혼밥</span> <span
											data-recomm-tag="2112210000026" data-recomm-type="01"
											id="tags" data-recomm-tag-name="#비올때생각나는">#비올때생각나는</span> <span
											data-recomm-tag="2112210000027" data-recomm-type="01"
											id="tags" data-recomm-tag-name="#다이어트">#다이어트</span> <span
											data-recomm-tag="" data-recomm-tag-name="선택안함" id="noTag"
											class="noTag ">선택 안함</span> <span data-recomm-tag="00"
											data-recomm-tag-name="" data-recomm-type="03"
											id="directInput" class="directInput ">직접 입력</span>
									</div>
									<span class="caution" id="caution5" style="display: none;">해시태그를
										선택해 주세요</span>
									<div class="textarea-box short" style="display: none;">
										<div class="flex-between">
											<textarea name="directInput-textarea"
												id="directInput-textarea" cols="30" rows="10"
												placeholder="10자 이내로 입력해주세요"
												oninput="javascript:getStrLength(this, '#byte11', 10);">#</textarea>
											<span id="byte11" class="byte">1/10자</span>
										</div>
										<span class="caution" id="caution6" style="display: none;">해시태그를
											입력해 주세요</span>
									</div>
								</div>
							</div>
						</div>
						<!-- //후기작성 -->

						<div class="review-inner">
							<div class="review-box">
								<h3 class="left-title">사진 첨부</h3>
								<!-- 사진 첨부 -->
								<div class="container crop photo">
									<div class="slider slick-initialized slick-slider"
										id="attach-file-lists-image">
										<!-- <a href="javascript:;" class="attach-files" id="attach-files" onclick="javascript:addMobileImg(this,1);"> -->
										<div class="slick-list draggable">
											<div class="slick-track"
												style="opacity: 1; width: 5000px; transform: translate3d(0px, 0px, 0px);">
												<a href="#this" id="attach-files-image"
													class="upload slick-slide slick-current slick-active"
													onclick="javascript:addFile('reviewFile', 'image', '1');return false;"
													data-slick-index="0" aria-hidden="false" tabindex="0"
													style="display: block;"> <i>+</i> <span>(0/10)</span> <span>사진0/0</span></a>
											</div>
										</div>
										<!-- <div>						
											<img src="https://cdn.thebanchan.co.kr/upload/C00001/goods/prd/480/570/200714000025570.jpg" alt="">
											<span class="delete"></span>
										</div> -->
									</div>
									<span class="caution" id="caution4" style="display: none;">직접
										촬영한 사진 또는 동영상을 첨부해 주세요</span>
								</div>
								<!-- //사진 첨부 -->
							</div>
						</div>
					</div>
				</div>

				<div class="fixedbar disabled">
					<button type="button" id="myBtn"
						onclick="javascript:goSubmit();return false;">등록하기</button>
				</div>

			</div>
		</form>

		<script>
				var isProfanity = false;
				$(document).ready(
						function() {
							$(".textarea-box.short").hide();
							if (false) {
								$(".review-write .textarea-box.short").show();

							}
							if (false) {
								$('#byte1')
										.html(
												$('#rv_content').val().length
														+ '/500자');
							}
							if (false) {
								$('#byte11').html(
										$('#directInput-textarea').val().length
												+ '/10자');
							}
							if ($("#reviewFormCnt").val() > 0
									|| $("#videoFormCnt").val() > 0) {
								$("#check_img").addClass("on");
							} else {
							}

							$("#info-tabs").tabs();

							// passportkey 발급
							$.ajax({
								type : "GET",
								url : "/common/passportkey",
								dataType : 'json',
								success : function(data) {
						 			window.localStorage.setItem("passportkey", data.checked);
								},
								error : function(data) {
									alert('passportkey 발급 실패');
								}
							});
						});

				$(".review-tags span").on(
						"click",
						function() {
							$("#caution5").hide();
							if ($(this).data("recomm-tag") == "") {
								$(".review-tags #noTag").addClass("active");
								$(this).parents(".review-write").find(
										".textarea-box.short").hide();
								$(".review-tags #tags").removeClass("active");
								$(".review-tags #directInput").removeClass(
										"active");
							} else {
								$(this).toggleClass("active");
								$(".review-tags #noTag").removeClass("active");

								if ($(this).attr("id") == "directInput") {//직접입력
									if ($(this).hasClass("active")) {
										$(this).parents(".review-write").find(
												".textarea-box.short").show();
									} else {
										$(this).parents(".review-write").find(
												".textarea-box.short").hide();
									}
								}
							}
						});

				$(".a-button-wave").on("click", function() {
					var value = $(this).data("code");//1010,1020,1030

					if ($(this).hasClass("bad")) {
						$(".textarea-box.short." + value).show();
					} else {
						$(".textarea-box.short." + value).hide();
					}
				});

				function contentCheck(val, id, count, type, content) {
					var len = val.value.length;
					
						if (len >= 5) {
							$("#check_memo").addClass("on");
							$("#myBtn").parent().removeClass("disabled");
							$("#caution1").addClass("hidden");
						} else {
							$("#check_memo").removeClass("on");
							$("#myBtn").parent().addClass("disabled");
						}
					

					getStrLength(val, id, count);

				    const suggestionsDiv = document.getElementById('suggestions');
			        suggestionsDiv.style.display = 'none'; // 제안 숨김
					const result = extractWordAndSurroundingText();
					var transform = getParsedSpellCheckerResult(result.beforeWord, result.word, result.afterWord, result.cursorPosition);	
				};
				function extractWordAndSurroundingText() {
					const textarea = document.getElementById('rv_content'); // 텍스트 영역 ID
				    const cursorPosition = textarea.selectionStart; // 현재 커서 위치 
				    const text = textarea.value; // textarea의 현재 내용

				    const leftText = text.slice(0, cursorPosition); // 커서 이전의 텍스트
				    const rightText = text.slice(cursorPosition); // 커서 이후의 텍스트

				    // 마지막 공백 위치 찾기
				    const lastSpaceIndex = leftText.lastIndexOf(' '); // 마지막 공백 인덱스

				    // 단어 추출: 공백이 나오기 전까지의 텍스트
				    const wordStartIndex = lastSpaceIndex === -1 ? 0 : lastSpaceIndex + 1; // 단어 시작 인덱스
				    const word = leftText.slice(wordStartIndex).trim(); // 단어 추출

				    // 앞 문장과 뒤 문장 추출
				    const beforeWord = leftText.slice(0, wordStartIndex).trim(); // 앞 문장
				    const afterWord = rightText.trim(); // 뒤 문장

				    return {
				        beforeWord: beforeWord,
				        word: word,
				        afterWord: afterWord,
				        cursorPosition: cursorPosition
				    };
				}

				// HTML로 파싱된 맞춤법 검사기 GET
				const getParsedSpellCheckerResult = async (beforeWord, content, afterWord, cursorPosition) => {
				  let checkFinal = "";
				  let checkerResultDataString = "";
				    if (content !== "") {
				      const result = await getSpellCheckerResult(content);
				      checkerResultDataString = result.data;
				      checkerResultDataString = checkerResultDataString
				        .replace("mycallback(", "")
				        .replace(");", "");
				      checkerResultDataString = JSON.parse(checkerResultDataString).message.result.html;
				      const parser = new DOMParser();
				      const doc = parser.parseFromString(checkerResultDataString, 'text/html');
				      checkFinal += doc.body.textContent;
				    }
					if(content === checkFinal) return null;
					await showSuggestion(beforeWord, checkFinal, afterWord, cursorPosition);
				  return checkFinal;
				};
				
				// 맞춤법 검사기 결과 호출
				const getSpellCheckerResult = async (content) => {
				  let spellCheckerURL = 'https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy?passportKey='+window.localStorage.getItem('passportkey')+'&_callback=mycallback&q='+content+'&where=nexearch&color_blindness=0&_=1643811632694';
				  
				  let result = await axios.get(spellCheckerURL);
				  const jsonData = result.data.match(/\{.*\}/)[0];
				  const parsedData = JSON.parse(jsonData);
				  const errorMessage = parsedData.message.error;

				  // passportKey가 없거나 유효하지 않을 때 passportKey 업데이트
				  if (errorMessage === "유효한 키가 아닙니다.") {
				    await getSpellCheckerPassportKey();
				    spellCheckerURL = 'https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy?passportKey='+window.localStorage.getItem('passportkey')+'&_callback=mycallback&q='+content+'&where=nexearch&color_blindness=0&_=1643811632694';
					 
				    result = await axios.get(spellCheckerURL);
				  }
				  return result;
				};
				
				// 제안된 단어를 하나만 표시하는 함수
				const showSuggestion = async (beforeWord, suggestion, afterWord, cursorPosition) => {
					const textarea = document.getElementById('rv_content'); // 텍스트 영역 ID
				    const suggestionsDiv = document.getElementById('suggestions');
				    suggestionsDiv.innerHTML = ''; // 이전 제안 초기화
				    if (suggestion) {
				        const rect = textarea.getBoundingClientRect();
				        // 커서 Y 좌표 계산
				        const cursorY = rect.top;
				        suggestionsDiv.style.top = `${cursorY-40}px`; // 커서 바로 위
				        //suggestionsDiv.style.left = ((Array.from(beforeWord + suggestion).length))+`px`; // 커서 위치에 따라 조정
				        suggestionsDiv.textContent = suggestion;
				        suggestionsDiv.onclick = () => selectSuggestion(beforeWord, suggestion, afterWord);
				        suggestionsDiv.style.display = 'block'; // 제안 표시
				        console.log();
				    } else {
				        suggestionsDiv.style.display = 'none'; // 제안 숨김
				    }
				};

				// 제안된 단어 선택 시 처리
				const selectSuggestion = (beforeWord, suggestion, afterWord) => {
				    const textarea = document.getElementById('rv_content'); // 텍스트 영역 ID
				    textarea.value = beforeWord + ' ' + suggestion + ' '+ afterWord; // 공백 추가
				    document.getElementById('suggestions').style.display = 'none'; // 제안 숨김
				    textarea.focus(); // 텍스트 영역에 포커스
				};

				// 맞춤법 검사기 passportKey 업데이트
				const getSpellCheckerPassportKey = async () => {
					$.ajax({
						type : "GET",
						url : "/common/passportkey",
						dataType : 'json',
						success : function(data) {
				 			window.localStorage.setItem("passportkey", data.checked);
						},
						error : function(data) {
							alert('passportkey 발급 실패');
						}
					});
				};
				function goSubmit() {
					var doubleCheck = true;
					if ($("[name=pageStatus]").val() == "M") {
						// 수정
						$("[name=pageStatus]").val("M");
					} else {
						// 신규등록
						$("[name=pageStatus]").val("N");
					}

					$("#review_PB_CODE").val(${product.pbCode});

					var rv_content = $.trim($("#rv_content").val());

					if (rv_content == "") {
						alert("상품평을 입력해주세요.");
						$("#rv_content").focus();
						return false;
					}

					if ($('#rv_content').val() == ""
							|| $('#rv_content').val().length < 5) {
						alert("제품평은 최소 5자 이상 입력해 주셔야 등록 가능 합니다. ");
						$("#rv_content").focus();
						return false;
					}

					if ($(".stars input:checked").data('star-score') == null) {
						alert("별점을 입력해주세요");
						return false;
					}
					if ($('.review-tags').length) {
						if ($('.review-tags').find('.active').length < 1) {
							alert("해시태그를 선택해 주세요");
							$("#caution5").show();
							return false;
						} else {
							if ($("#directInput").hasClass("active")) {
								//빈값 아닌지 체크
								if ($("#directInput-textarea").val() == "#"
										|| $("#directInput-textarea").val() == "") {
									alert("해시태그를 입력해 주세요");
									$("#caution6").show();
									return false;
								}
							}

							//선책된 추천태그 넘기기
							var recomm_tag = [];
							var keyword_all = [];
							var select_tag = $(".review-tags").find(".active");
							var idx = 0;
							$('[name^="keywords["]').remove();
							$.each(select_tag,
											function(index, item) {
												var word = $(this).attr("data-recomm-tag-name");
												if(word != ''){
													keyword_all.push(word);
												}
											});
							if ($("#directInput").hasClass("active")){ // 직접 작성한 해시태그 추가
								keyword_all.push($("#directInput-textarea").val());
							}
							
							$("input[name='keyword']").remove();
							$("#frm").append("<input type=\"hidden\" name=\"keyword\" value=\""+keyword_all.join(',')+"\" />");
						}
					}
					
					// 이미지 붙이기
					var imageCnt = parseInt($("#reviewFormCnt").val());
					var image = [];
					for(let i=1; i<=imageCnt; i++){
						var word = $("#file_name_"+i).val();
						image.push(word);
					}
					if(imageCnt == 0){
						$("input[name='type']").remove();
						$("#frm").append("<input type=\"hidden\" name=\"type\" value=\"01\" />");
					}else {
						$("input[name='type']").remove();
						$("#frm").append("<input type=\"hidden\" name=\"type\" value=\"02\" />");
						$("#frm").append("<input type=\"hidden\" name=\"image\" value=\""+image+"\" />");
					}
					
					
					//별점
					$('#rv_score').val(
							$(".stars input:checked").data('star-score'));
					
					if (doubleCheck) {
						$("#ziploading").show();
						doubleCheck = false;
						$.ajax({type : "POST",
									url : "/review",
									data : $("#frm").serialize(),
									dataType : 'json',
									async : true,
									success : function(data) {
										// 후기작성완료 팝업
										if (data.success == "SUCCESS") {//완료
											$("#ziploading").hide();
											location.href = '/product/detail.do?productId=${product.pbCode}&cate_id=';
											airBridgeReview();
										} else {
											alert("후기 작성 실패");
											location.href = '/product/detail.do?productId=${product.pbCode}&cate_id=';
											
											return;
										}
										return false;

									},
									error : function(data) {
										alert("후기 작성 실패");
										location.href = '/product/detail.do?productId=${product.pbCode}&cate_id=';
										doubleCheck = true;
										return;
									}
								});
					}
				}
		

				//첨부파일 추가팝업
				function addFile(fileObj, Allow, CNT) {//videoFile/reviewFile, video/image, count

					if ($("#fileType").val() == "reviewFile") {
						if (fileObj == "videoFile") {//동영상
							if ($("#videoFormCnt").val() >= 3) {
								alert("동영상은 최대 3개까지 첨부할 수 있어요.");
								return;
							}
						} else {//이미지
							if ($("#reviewFormCnt").val() >= 10) {
								alert("사진은 최대 10장까지 첨부할 수 있어요.");
								return;
							}
						}
					}
					$("#fileObj").val(fileObj);
					$("#Allow").val(Allow);
					$("#fileCnt").val(CNT);
					open_scroll_no_center("", "fileUpload", "495", "275");
					$("#frm").attr({
						target : "fileUpload",
						action : "/common/commonFilePop.do"
					}).submit();
				}

				//첨부파일정보 리턴
				function resultFileExec(result) {
					//con('첨부파일 리천  '+result);
					var fileObj = $("#fileObj").val();
					console.log(result.data);
					var cnt = result.data.fileCnt;

					if (cnt > 0) {
						if (result.data.fileObj == "videoFile") {
							addVideoSection(cnt);
						} else {
							addImgSection(cnt);
						}

						$("#reviewFileWebpath").val(result.data.savefolder);
						$("#" + result.data.fileObj + cnt).val(
								result.data.domain + result.data.webpath);
						$("#" + result.data.fileObj + "_nm" + cnt).val(
								result.data.filename);
						$("[eid='" + result.data.fileObj + "_org_nm']" + cnt)
								.val(result.data.originalfilename);
						$("#" + result.data.fileObj + "_org_nm" + cnt).val(
								result.data.originalfilename);
						$("#" + result.data.fileObj + "_filesize" + cnt).val(
								result.data.filesize);
						$("#" + result.data.fileObj + "_contenttype" + cnt)
								.val(result.data.contenttype);
						var url = result.data.savefolder;
						if(url === ""){
							url = "https://dev-image.thebanchan.co.kr/intern/";
							$("#file_name_" + cnt)
								.val(url+result.data.filename);
						}else {
							$("#file_name_" + cnt)
							.val(url+result.data.filename);
						}
						if (result.data.fileObj == "videoFile") {
							$("#file_video" + cnt).attr(
									"src", url+result.data.filename);
						} else {
							$("#file_img" + cnt).attr(
									"src",url+result.data.filename);
						}

						$("#check_img").addClass("on");
						$("#caution4").hide();
					} else if (cnt == 0) {
						alert(result.data.errorMsg);
					}
				}

				function addImgSection(pNum) {
					var revirewcnt = parseInt($("#reviewFormCnt").val()) + 1;
					$("#reviewFormCnt").val(revirewcnt);

					var idx = pNum;

					var reviewSection = `	<div class="slick-slide slick-active" data-slick-index="`+idx+`" aria-hidden="false" tabindex="0" id="imgViewArea`+idx+`"> \
										<input type="hidden" id="PC_SEQ`+idx+`" name="PC_SEQ`+idx+`" value="" /> \
										<input type="hidden" id="reviewFile`+idx+`" name="reviewFile`+idx+`" value="" /> \
										<input type="hidden" id="reviewFile_filesize`+idx+`" name="reviewFile_filesize`+idx+`" value="" /> \
										<input type="hidden" id="reviewFile_contenttype`+idx+`" name="reviewFile_contenttype`+idx+`" value="" /> \
										<input type="hidden" id="reviewFile_nm`+idx+`" name="reviewFile_nm`+idx+`" value="" /> \
										<input type="hidden" id="reviewFile_org_nm`+idx+`" name="reviewFile_org_nm`+idx+`" title="상품리뷰`+idx+` 이미지 입력" readonly="readonly" /> \
										<input type="hidden" id="file_name_`+idx+`" name="file_name_`+idx+`" value="" /> \
						            	<img id="file_img`+idx+`" src="https://image.thebanchan.co.kr/" alt=""/> \
						            	<span class="delete" onclick="imgDels(this, `
							+ idx
							+ `,'image')"></span> \
				        	</div>\n`;

					$("#attach-file-lists-image .slick-track").append(
							reviewSection);
					$("#reviewFormLastNum").val(idx);
					$("#attach-files-image span").html("(" + idx + "/10)");

					idx = parseInt(idx) + 1;
					console.log("idx", idx);
					$("#attach-files-image").attr(
							"onclick",
							'javascript:addFile("reviewFile", "image",' + idx
									+ ');');

				}

				function addVideoSection(pNum) {
					var videocnt = parseInt($("#videoFormCnt").val()) + 1;
					$("#videoFormCnt").val(videocnt);

					var idx = pNum;
					var reviewSection = `	<div class="slick-slide slick-active" data-slick-index="`+idx+`" aria-hidden="false" tabindex="0" id="imgViewArea`+idx+`"> \
							<input type="hidden" id="PC_SEQ`+idx+`" name="PC_SEQ`+idx+`" value="" /> \
							<input type="hidden" id="videoFile`+idx+`" name="videoFile`+idx+`" value="" /> \
							<input type="hidden" id="videoFile_filesize`+idx+`" name="videoFile_filesize`+idx+`" value="" /> \
							<input type="hidden" id="videoFile_contenttype`+idx+`" name="videoFile_contenttype`+idx+`" value="" /> \
							<input type="hidden" id="videoFile_nm`+idx+`" name="videoFile_nm`+idx+`" value="" /> \
							<input type="hidden" id="videoFile_org_nm`+idx+`" name="videoFile_org_nm`+idx+`" title="상품리뷰`+idx+` 이미지 입력" readonly="readonly" /> \
			            	<video id="file_video`
							+ idx
							+ `" width="100%;" height="100%;" autoplay loop muted> \
								<source src="https://image.thebanchan.co.kr/" type="video/webm" ></source> \
							</video> \
			            	<span class="delete" onclick="imgDels(this, `
							+ idx + `,'video')"></span> \
	        	</div>\n`;

					$("#attach-file-lists-video .slick-track").append(
							reviewSection);
					// 파일 수 누적시키기  

					$("#videoFormLastNum").val(idx);
					$("#attach-files-video span").html("(" + idx + "/3)");

					idx = parseInt(idx) + 1;
					console.log("idx", idx);
					$("#attach-files-video").attr(
							"onclick",
							'javascript:addFile("videoFile", "video",' + idx
									+ ');');

				}

				function imgDels(obj, num, allow) {
					if (allow == "video") {//비디오
						var fileType = $("#fileType").val();
						var videoFormCnt = parseInt($("#videoFormCnt").val()) - 1;
						$("#videoFormCnt").val(videoFormCnt);

						if (num == $("#videoFormLastNum").val()) {//마지막꺼를 지운게 아니라면 그대로 냅두고, 마지막꺼를 지웠으면 -1를 해줌
							$("#videoFormLastNum").val(videoFormCnt);
						}

						$(obj).parent().remove();
						$("#attach-files-video span").html(
								"(" + videoFormCnt + "/3)");
						$("#attach-files-video").attr(
								"onclick",
								'javascript:addFile("videoFile", "video",'
										+ (videoFormCnt + 1) + ');');
					} else {//이미지
						var fileType = $("#fileType").val();
						var reviewFormCnt = parseInt($("#reviewFormCnt").val()) - 1;
						$("#reviewFormCnt").val(reviewFormCnt);

						if (num == $("#reviewFormLastNum").val()) {//마지막꺼를 지운게 아니라면 그대로 냅두고, 마지막꺼를 지웠으면 -1를 해줌
							$("#reviewFormLastNum").val(reviewFormCnt);
						}

						$(obj).parent().remove();
						$("#attach-files-image span").html(
								"(" + reviewFormCnt + "/10)");
						$("#attach-files-image").attr(
								"onclick",
								'javascript:addFile("reviewFile", "image",'
										+ (reviewFormCnt + 1) + ');');
					}

					if ($("#reviewFormCnt").val() + $("#videoFormCnt").val() < 1) {
						$("#check_img").removeClass("on");
						$("#check_tip").removeClass("on");
					}
				}
			</script>
	</div>

</div>