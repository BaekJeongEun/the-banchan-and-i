package dw_intern_project.the_banchan_and_i.dto.response;

import static dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockConstants.BEDROCK_REVIEW_SUMMARY_PROMPT_DEFAULT;

import java.util.Arrays;
import java.util.Iterator;
import java.util.Set;
import java.util.stream.Collectors;

import com.fasterxml.jackson.databind.JsonNode;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewSummaryResponseDto {

    private String pbCode;
    private String summary;
    private String peakEmotion;
    private Double positive;
    private Double neutral;
    private Double negative;
    private String highlightPositive;
    private String highlightNegative;

    public static ReviewSummaryResponseDto of(String pbCode, JsonNode jsonNode) {
        return ReviewSummaryResponseDto.builder()
                .pbCode(pbCode)
                .summary(jsonNode.get("SUMMARY").asText())
                .positive(jsonNode.get("POSITIVE").asDouble())
                .neutral(jsonNode.get("NEUTRAL").asDouble())
                .negative(jsonNode.get("NEGATIVE").asDouble())
                .peakEmotion(jsonNode.get("FEELING").asText())
//                .highlightPositive(jsonNode.get("HIGHLIGHT_POSITIVE").asText())
//                .highlightNegative(jsonNode.get("HIGHLIGHT_NEGATIVE").asText())
                .build();
    }

    public static ReviewSummaryResponseDto ofHighLight(String pbCode, String summary, JsonNode jsonNode) {
    	String positiveH = jsonNode.get("HIGHLIGHT_POSITIVE").asText();
    	String negativeH = jsonNode.get("HIGHLIGHT_NEGATIVE").asText();
    	Set<String> positiveWords = Arrays.stream(positiveH.split(","))
                .map(String::trim)
                .collect(Collectors.toSet());
    	Set<String> negativeWords = Arrays.stream(negativeH.split(","))
                .map(String::trim)
                .collect(Collectors.toSet());
    	if(positiveWords.isEmpty() && negativeWords.isEmpty()) return null;
    	if(positiveWords!=null && negativeWords!=null) {
    		Iterator<String> iterator = negativeWords.iterator();
    		while (iterator.hasNext()) {
    		    String item = iterator.next();
    		    if (positiveWords.contains(item)) {
    		        iterator.remove(); // 안전하게 요소 제거
    		    }
    		}
    	}
    	String newPositiveH = positiveWords.stream()
                .filter(summary::contains) // summary에 포함된 단어만 필터링
                .collect(Collectors.joining(","));
    	String newNegativeH = negativeWords.stream()
                .filter(summary::contains) // summary에 포함된 단어만 필터링
                .collect(Collectors.joining(","));
        return ReviewSummaryResponseDto.builder()
                .pbCode(pbCode)
                .summary(summary)
                .highlightPositive(newPositiveH.length()>0?newPositiveH:null)
                .highlightNegative(newNegativeH.length()>0?newNegativeH:null)
                .build();
    }

    public static ReviewSummaryResponseDto getDefault(String pbCode) {
        return ReviewSummaryResponseDto.builder()
                .pbCode(pbCode)
                .summary(BEDROCK_REVIEW_SUMMARY_PROMPT_DEFAULT)
                .positive(0.0)
                .neutral(0.0)
                .negative(0.0)
                .peakEmotion("NEUTRAL")
                .build();
    }

    public void print() {
        String message = "[OUTPUT]\n{\n \"type\": ReviewSummary\",\n" +
                " \"pbCode\": \"" + pbCode + "\"\n" +
                " \"summary\": \"" + summary + "\"\n" +
                " \"feeling\": \"" + peakEmotion + "\"\n" +
                " \"positive\": \"" + positive + "\"\n" +
                " \"neutral\": \"" + neutral + "\"\n" +
                " \"negative\": \"" + negative + "\"\n" +
                " \"HIGHLIGHT_POSITIVE\": \"" + highlightPositive + "\"\n" +
                " \"HIGHLIGHT_NEGATIVE\": \"" + highlightNegative + "\"\n" +
                "}";

        System.out.println(message);
        System.out.println("------------------------");
    }
}
