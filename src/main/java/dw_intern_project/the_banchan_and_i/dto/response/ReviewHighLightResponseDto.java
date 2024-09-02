package dw_intern_project.the_banchan_and_i.dto.response;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.*;

import static dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockConstants.*;



@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewHighLightResponseDto {

    private String seq;
    private String content;
    private String SATISFACION;
    private String QUALITY;
    private String TASTE;
    private String FRESHNESS;
    private String AMOUNT;
    private String PRICE;
    private String PACKING_SHIPPING;
    private String EXPIRATION_DATE;

    public static ReviewHighLightResponseDto of(String reviewSeq, String content, JsonNode jsonNode) {
        return ReviewHighLightResponseDto.builder()
                .seq(reviewSeq)
                .content(content)
                .SATISFACION(jsonNode.get("SATISFACION").asText())
                .QUALITY(jsonNode.get("QUALITY").asText())
                .TASTE(jsonNode.get("TASTE").asText())
                .FRESHNESS(jsonNode.get("FRESHNESS").asText())
                .AMOUNT(jsonNode.get("AMOUNT").asText())
                .PRICE(jsonNode.get("PRICE").asText())
                .PACKING_SHIPPING(jsonNode.get("PACKING_SHIPPING").asText())
                .EXPIRATION_DATE(jsonNode.get("EXPIRATION_DATE").asText())
                .build();
    }

    public void print(String content) {
        String message = "[OUTPUT]\n{\\n \"review\": "+content+",\\n\\n \"type\": ReviewReply\",\\n" +
                " \"reviewSeq\": \"" + seq + "\"\n" +
                " \"SATISFACION\": \"" + SATISFACION + "\"\n" +
                " \"QUALITY\": \"" + QUALITY + "\"\n" +
                " \"TASTE\": \"" + TASTE + "\"\n" +
                " \"FRESHNESS\": \"" + FRESHNESS + "\"\n" +
                " \"AMOUNT\": \"" + AMOUNT + "\"\n" +
                " \"PRICE\": \"" + PRICE + "\"\n" +
                " \"PACKING_SHIPPING\": \"" + PACKING_SHIPPING + "\"\n" +
                " \"EXPIRATION_DATE\": \"" + EXPIRATION_DATE + "\"\n" +
                "}";

        System.out.println(message);
        System.out.println("------------------------");
    }
}
