package dw_intern_project.the_banchan_and_i.service;

import static dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockConstants.BEDROCK_IMPROVE_PROMPT_FOR_JSON;
import static dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockConstants.BEDROCK_IMPROVE_PROMPT_FOR_KOREAN_RESPONSE;
import static dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockConstants.BEDROCK_REVIEW_HIGHLIGHT_PROMPT;
import static dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockConstants.BEDROCK_REVIEW_REPLY_PROMPT;
import static dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockConstants.BEDROCK_REVIEW_REPLY_TOP_P;
import static dw_intern_project.the_banchan_and_i.util.Modifier.checkChineseOrJapanese;
import static dw_intern_project.the_banchan_and_i.util.Modifier.modifyInputText;
import static dw_intern_project.the_banchan_and_i.util.Modifier.removeBackTick;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import dw_intern_project.the_banchan_and_i.dto.common.Emotion;
import dw_intern_project.the_banchan_and_i.dto.common.ReplyStatus;
import dw_intern_project.the_banchan_and_i.dto.request.ReplyRegistRequestDto;
import dw_intern_project.the_banchan_and_i.dto.request.ReviewReplyRequestDto;
import dw_intern_project.the_banchan_and_i.dto.response.BarItemDto;
import dw_intern_project.the_banchan_and_i.dto.response.ProductResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReplyRegistResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewHighLightResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewImagesResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewListResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewReplyResponseDto;
import dw_intern_project.the_banchan_and_i.entity.Review;
import dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockService;
import dw_intern_project.the_banchan_and_i.repository.ReviewReplyRepository;
import dw_intern_project.the_banchan_and_i.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReviewReplyService {
	
	private final ReviewReplyRepository reviewReplyRepository;
	private final ReviewClassificationService reviewClassificationService;
	private final ReviewRepository reviewRepository;
	private final BedrockService bedrockService;
	private final Emotion emotion;

	public void updateReviewHighLight() {
		List<Review> reviews = reviewRepository.getReviewContent();
		for (Review dto : reviews) {
			updateReviewHighLight(dto);
		}
	}
	public void updateReviewHighLight(Review dto) {
		String inputReviewText = "review = < " + dto.getContent() + " >\n";
		String inputText = inputReviewText + BEDROCK_REVIEW_HIGHLIGHT_PROMPT;

		ReviewHighLightResponseDto reviewHighLightResponseDto = null;
		boolean isValidJson = false;

		// bedrock 최대 3번 요청
		for (int k = 0; k < 3; k++) {

			// bedrock 요청
			String responseText = removeBackTick(
					bedrockService.converseWithText(inputText, BEDROCK_REVIEW_REPLY_TOP_P));

			try {
				// 응답 데이터 parsing
				reviewHighLightResponseDto = reviewHighLightResponse(dto.getSeq(), dto.getContent(), responseText);
				if (isValidJson)
					break;
			} catch (JsonMappingException e) {
				log.error("JSON Parsing Error : reviewSeq - {}, error_message - {}", dto.getSeq(), e.getMessage());
				inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_JSON);
			} catch (JsonProcessingException e) {
				log.error("JSON Parsing Error : reviewSeq - {}, error_message - {}", dto.getSeq(), e.getMessage());
				inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_JSON);
			} catch (NullPointerException e) {
				log.error("JSON Parsing Error : reviewSeq - {}, error_message - {}", dto.getSeq(), e.getMessage());
				inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_JSON);
			}
			isValidJson = true;
		}
		if (reviewHighLightResponseDto != null) {
			reviewHighLightResponseDto.print(dto.getContent());
			// 중간 테이블 저장
			reviewClassificationService.saveReviewClassification(reviewHighLightResponseDto);
		}
	}

	private ReviewHighLightResponseDto reviewHighLightResponse(String reviewSeq, String content, String responseText)
			throws JsonProcessingException, NullPointerException {
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode jsonNode = objectMapper.readTree(responseText);

		return ReviewHighLightResponseDto.of(reviewSeq, content, jsonNode);
	}
	
	public void bedrockService(ReviewReplyRequestDto dto) {
		String inputCategory;
		if(dto.getSubCategory() == null) {
			inputCategory = "productCategory = <>\n";
		}else {
			inputCategory = "productCategory = < "+ dto.getSubCategory()+ " >\n";
		}
		String inputProductName = "productName = < " + dto.getPbName() + ">\n";
		String inputReviewText = "reviewContent = < " + dto.getContent() + " >\n";
		String inputText = inputCategory + inputProductName + inputReviewText + BEDROCK_REVIEW_REPLY_PROMPT;

		ReviewReplyResponseDto reviewReplyResponseDto = null;
		boolean isValidJson = false;
		
		// bedrock 최대 3번 요청
		for(int k = 0; k<3; k++) {

			// bedrock 요청
			String responseText = removeBackTick(bedrockService.converseWithText(inputText, BEDROCK_REVIEW_REPLY_TOP_P));
			
			try {
				// 응답 데이터 parsing
				reviewReplyResponseDto = parseReviewReplyResponse(dto.getSeq(), responseText);
				
				// 중국어, 일본어 체크
				if(checkChineseOrJapanese(reviewReplyResponseDto.getReply())) {
					System.out.println("[REPLY] 다른 언어 감지: "+ reviewReplyResponseDto.getReply());
					inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_KOREAN_RESPONSE);
				}else {
					isValidJson = true;
					break;
				}
				
			} catch (JsonMappingException e) {
				log.error("JSON Parsing Error : reviewSeq - {}, error_message - {}", dto.getSeq(), e.getMessage());
				inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_JSON);
			} catch (JsonProcessingException e) {
				log.error("JSON Parsing Error : reviewSeq - {}, error_message - {}", dto.getSeq(), e.getMessage());
				inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_JSON);
			} catch (NullPointerException e) {
				log.error("JSON Parsing Error : reviewSeq - {}, error_message - {}", dto.getSeq(), e.getMessage());
				inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_JSON);
			}
		}
		
		if(!isValidJson) {
			// default 응답 저장
			reviewReplyResponseDto = ReviewReplyResponseDto.getDefault(dto.getSeq());
		}
		
		reviewReplyResponseDto.print();
		reviewReplyRepository.saveReviewReply(reviewReplyResponseDto);
		reviewRepository.updateReplyStatus(dto.getSeq(), ReplyStatus.REPLY_CREATE.getStatus());
	}

	private ReviewReplyResponseDto parseReviewReplyResponse(String reviewSeq, String responseText) throws JsonProcessingException, NullPointerException  {
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode jsonNode = objectMapper.readTree(responseText);

		return ReviewReplyResponseDto.of(reviewSeq, jsonNode);
	}

	public String getEmotion(ReviewListResponseDto dto) {
		if(dto.getPeakEmotion() == null) return ""; 

		List<BarItemDto> barItems = emotion.getEmition(dto);
		StringBuilder sb = new StringBuilder();
        sb.append("<ul class=\"vertical-bars\">\n");

        for (BarItemDto item : barItems) {
            sb.append("    <li class=\"bar\" style=\"margin-right: 15px;\">\n");
            if (dto.getPeakEmotion().equals(item.getEmotion().getEnglishValue())) {
                sb.append("        <small class=\"legend-emotion\" style=\"background:#00ff0000;\"><img src=\""+item.getEmotion().getImage()+"\" class = \"emotion-img\"></small>\n");
            }
            sb.append("        <span class=\"usage usage-emotion\" data-usage=\"" + item.getScore() + "\">\n");
            sb.append("            <span class=\"usage-value\" style=\"height:"+ item.getScore()+"%; background-color:"+item.getEmotion().getColor()+"\"></span>\n");
            sb.append("        </span>\n");
            sb.append("        <p class=\"score\">" + item.getEmotion().getKoreanValue() + "</p>\n");
            sb.append("    </li>\n");
        }

        sb.append("</ul>");
        return sb.toString();
	}

	public ResponseEntity<ReplyRegistResponseDto> updateReply(ReplyRegistRequestDto dto) {
		reviewReplyRepository.updateReply(dto);
		reviewRepository.updateReplyStatus(dto.getRv_seq(), ReplyStatus.REPLY_DONE.getStatus());
		return ResponseEntity.ok(ReplyRegistResponseDto.of("SUCCESS"));
	}
	
	public List<ReviewImagesResponseDto> getReviewImages(String pbCode, int startNum) {
		int offset = startNum;
		int pageSize = 15;
		List<ReviewImagesResponseDto> list = reviewRepository.getReviewImages(pbCode, pageSize, offset);
		List<ReviewImagesResponseDto> response = list.stream()
			    .map(image -> ReviewImagesResponseDto.of(image, startNum)) // 추가 매개변수 전달
			    .collect(Collectors.toList());

		return response;
	}
}
