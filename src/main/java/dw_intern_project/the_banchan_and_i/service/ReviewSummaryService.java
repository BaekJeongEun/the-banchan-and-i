package dw_intern_project.the_banchan_and_i.service;

import static dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockConstants.BEDROCK_IMPROVE_PROMPT_FOR_JSON;
import static dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockConstants.BEDROCK_IMPROVE_PROMPT_FOR_KOREAN_RESPONSE;
import static dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockConstants.BEDROCK_REVIEW_SUMMARY_PROMPT;
import static dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockConstants.BEDROCK_REVIEW_SUMMARY_HIGHLIGHT_PROMPT;
import static dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockConstants.BEDROCK_REVIEW_SUMMARY_TOP_P;
import static dw_intern_project.the_banchan_and_i.util.Modifier.checkChineseOrJapanese;
import static dw_intern_project.the_banchan_and_i.util.Modifier.modifyInputText;
import static dw_intern_project.the_banchan_and_i.util.Modifier.removeBackTick;

import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.opencsv.CSVWriter;

import dw_intern_project.the_banchan_and_i.dto.request.ContentWithKeyword;
import dw_intern_project.the_banchan_and_i.dto.request.ReviewRegistRequestDto;
import dw_intern_project.the_banchan_and_i.dto.request.ReviewSummaryRequestDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewSummaryResponseDto;
import dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockService;
import dw_intern_project.the_banchan_and_i.repository.ReviewRepository;
import dw_intern_project.the_banchan_and_i.repository.ReviewSummaryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReviewSummaryService {

	private final ReviewSummaryRepository reviewSummaryRepository;
	private final ProductService productService;
	private final ReviewRepository reviewRepository;
	private final BedrockService bedrockService;

	public void saveReviewSummary() throws IOException {

		List<String> pbCodes = productService.getAllPbCode();

		int turn = 1;
		for (String pbCode : pbCodes) {

			// 상품 code, 상품 name, 리뷰 contents(리스트) 리스트 가져오기
			ReviewSummaryRequestDto reviewSummaryRequestDto = reviewSummaryRepository
					.getReviewSummaryRequestDto(pbCode);

			// CSV 파일 생성
			List<ContentWithKeyword> contentWithKeywords = reviewSummaryRequestDto.getContentsWithKeywords();

			log.info(reviewSummaryRequestDto.getPbName());
			try (CSVWriter writer = new CSVWriter(new FileWriter("output.csv"))) {
				// CSV 파일에 칼럼명 작성
				String[] header = { "content", "keyword" };
				writer.writeNext(header);

				// reviewContents 리스트의 데이터를 CSV 파일에 작성
				for (ContentWithKeyword contentWithKeyword : contentWithKeywords) {
					writer.writeNext(new String[] { contentWithKeyword.getContent(), contentWithKeyword.getKeyword() });
				}

			} catch (IOException e) {
				e.printStackTrace();
			}
			ReviewSummaryResponseDto reviewSummaryResponseDto = null;
			boolean isValidJson = false;
			String inputText = BEDROCK_REVIEW_SUMMARY_PROMPT;

			for (int loop = 0; loop < 3; loop++) {

				// bedrock 요청
				reviewSummaryRequestDto.print(turn);
				String responseText = removeBackTick(bedrockService.converseWithDocument(BEDROCK_REVIEW_SUMMARY_PROMPT,
						BEDROCK_REVIEW_SUMMARY_TOP_P));

				// 응답 데이터 parsing
				try {
					reviewSummaryResponseDto = parseReviewSummaryResponse(reviewSummaryRequestDto.getPbCode(),
							responseText);
					// 중국어, 일본어 체크
					if (checkChineseOrJapanese(reviewSummaryResponseDto.getSummary())) {
						System.out.println("[SUMMARY] 다른 언어 감지: " + reviewSummaryResponseDto.getSummary());
						inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_KOREAN_RESPONSE);
					} else {
						isValidJson = true;
						break;
					}
				} catch (JsonMappingException e) {
					log.error("JSON Parsing Error : pbCode - {}, error_message - {}",
							reviewSummaryRequestDto.getPbCode(), e.getMessage());
					inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_JSON);
				} catch (JsonProcessingException e) {
					log.error("JSON Parsing Error : pbCode - {}, error_message - {}",
							reviewSummaryRequestDto.getPbCode(), e.getMessage());
					inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_JSON);
				} catch (NullPointerException e) {
					log.error("JSON Parsing Error : pbCode - {}, error_message - {}",
							reviewSummaryRequestDto.getPbCode(), e.getMessage());
					inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_JSON);
				}
			}

			// default 값 저장
			if (!isValidJson) {
				reviewSummaryResponseDto = ReviewSummaryResponseDto.getDefault(reviewSummaryRequestDto.getPbCode());
			}

			reviewSummaryResponseDto.print();
			// 요약된 리뷰 하이라이팅
			saveReviewSummaryHighLighting(reviewSummaryResponseDto);
			turn++;
		}

	}

	private ReviewSummaryResponseDto parseReviewSummaryResponse(String pbCode, String responseText)
			throws JsonProcessingException, NullPointerException {
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode jsonNode = objectMapper.readTree(responseText);
		return ReviewSummaryResponseDto.of(pbCode, jsonNode);
	}

	private ReviewSummaryResponseDto parseReviewSummaryHighLightResponse(String pbCode, String summary,
			String responseText) throws JsonProcessingException, NullPointerException {
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode jsonNode = objectMapper.readTree(responseText);

		return ReviewSummaryResponseDto.ofHighLight(pbCode, summary, jsonNode);
	}

	public void saveReview(ReviewRegistRequestDto reviewRegistRequestDto) {
		reviewRepository.saveReview(reviewRegistRequestDto);
	}

	public void saveReviewSummaryHighLighting(ReviewSummaryResponseDto dto) throws IOException {
		ReviewSummaryResponseDto reviewSummaryResponseDto = null;
		String inputReviewText = "reviewSummary = < " + dto.getSummary() + " >\n";
		String inputText = inputReviewText + BEDROCK_REVIEW_SUMMARY_HIGHLIGHT_PROMPT;

		// bedrock 요청
		dto.print();
		String responseText = removeBackTick(bedrockService.converseWithText(inputText, BEDROCK_REVIEW_SUMMARY_TOP_P));

		for (int loop = 0; loop < 3; loop++) {
			// 응답 데이터 parsing
			try {
				reviewSummaryResponseDto = parseReviewSummaryHighLightResponse(dto.getPbCode(), dto.getSummary(),
						responseText);

				reviewSummaryResponseDto.print();
				// 중국어, 일본어 체크
				if (checkChineseOrJapanese(reviewSummaryResponseDto.getSummary())) {
					System.out.println("[SUMMARY] 다른 언어 감지: " + reviewSummaryResponseDto.getSummary());
					inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_KOREAN_RESPONSE);
				} else {
					break;
				}
			} catch (JsonMappingException e) {
				log.error("JSON Parsing Error : pbCode - {}, error_message - {}", dto.getPbCode(), e.getMessage());
				inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_JSON);
			} catch (JsonProcessingException e) {
				log.error("JSON Parsing Error : pbCode - {}, error_message - {}", dto.getPbCode(), e.getMessage());
				inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_JSON);
			} catch (NullPointerException e) {
				log.error("JSON Parsing Error : pbCode - {}, error_message - {}", dto.getPbCode(), e.getMessage());
				inputText = modifyInputText(inputText, BEDROCK_IMPROVE_PROMPT_FOR_JSON);
			}
		}
		reviewSummaryRepository.updateReviewSummary(dto);
		reviewSummaryRepository.saveReviewSummaryHighlight(reviewSummaryResponseDto);
	}
}
