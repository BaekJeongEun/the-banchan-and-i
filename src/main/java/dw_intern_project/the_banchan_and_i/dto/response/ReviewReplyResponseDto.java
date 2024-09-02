package dw_intern_project.the_banchan_and_i.dto.response;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.*;

import static dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockConstants.*;



@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewReplyResponseDto {

    private String reviewSeq;
    private String reply;
    private String peakEmotion;
    private Double positive;
    private Double neutral;
    private Double negative;

    public static ReviewReplyResponseDto of(String reviewSeq, JsonNode jsonNode) {
        return ReviewReplyResponseDto.builder()
                .reviewSeq(reviewSeq)
                .reply(jsonNode.get("REPLY").asText())
                .positive(jsonNode.get("POSITIVE").asDouble())
                .neutral(jsonNode.get("NEUTRAL").asDouble())
                .negative(jsonNode.get("NEGATIVE").asDouble())
                .peakEmotion(jsonNode.get("FEELING").asText())
                .build();
    }

    public static ReviewReplyResponseDto getDefault(String reviewSeq) {
        return ReviewReplyResponseDto.builder()
                .reviewSeq(reviewSeq)
                .reply(BEDROCK_REVIEW_REPLY_PROMPT_DEFAULT)
                .positive(0.0)
                .neutral(0.0)
                .negative(0.0)
                .peakEmotion("NEUTRAL")
                .build();
    }

    public void print() {
        String message = "[OUTPUT]\n{\n \"type\": ReviewReply\",\n" +
                " \"reviewSeq\": \"" + reviewSeq + "\"\n" +
                " \"reply\": \"" + reply + "\"\n" +
                " \"feeling\": \"" + peakEmotion + "\"\n" +
                " \"positive\": \"" + positive + "\"\n" +
                " \"neutral\": \"" + neutral + "\"\n" +
                " \"negative\": \"" + negative + "\"\n" +
                "}";

        System.out.println(message);
        System.out.println("------------------------");
    }
}
