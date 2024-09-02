package dw_intern_project.the_banchan_and_i.global.aws.bedrock;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.core.SdkBytes;
import software.amazon.awssdk.core.exception.SdkClientException;
import software.amazon.awssdk.services.bedrockruntime.BedrockRuntimeClient;
import software.amazon.awssdk.services.bedrockruntime.model.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import static dw_intern_project.the_banchan_and_i.global.aws.bedrock.BedrockConstants.*;

@Service
@RequiredArgsConstructor
public class BedrockService {

    private final BedrockRuntimeClient bedrockRuntimeClient;

    public String converseWithText(String inputText, float bedrockTopP) {
        Message message = Message.builder()
                .content(ContentBlock.fromText(inputText))
                .role(ConversationRole.USER)
                .build();

        return converse(message, bedrockTopP);
    }

    // 파일 확장자명 제외하고 파일명만 입력, 파일은 반드시 프로젝트 폴더 최상단에 있어야 함
    public String converseWithDocument(String inputText, float bedrockTopP) throws IOException {

        // 파일을 ByteArray로 변경
        byte[] arr = Files.readAllBytes(Paths.get(BEDROCK_DOCUMENT_SOURCE_NAME + "." + BEDROCK_DOCUMENT_SOURCE_FORMAT));

        // 파일 첨부를 위한 DocumentBlock 생성
        DocumentBlock documentBlock = DocumentBlock.builder()
                .source(DocumentSource.fromBytes(SdkBytes.fromByteArray(arr)))
                .name("data")
                .format(BEDROCK_DOCUMENT_SOURCE_FORMAT)
                .build();

        // TextBlock, DocumentBlock을 저장할 ContentBlock 리스트 생성
        List<ContentBlock> list = new ArrayList<>();

        list.add(ContentBlock.fromText(inputText));
        list.add(ContentBlock.fromDocument(documentBlock));

        Message message = Message.builder()
                .content(list)
                .role(ConversationRole.USER)
                .build();

        return converse(message, bedrockTopP);
    }

    private String converse(Message message, float bedrockTopP) {
        try {
            // 파라미터와 함께 메세지(프롬프트) 전송
            ConverseResponse response = bedrockRuntimeClient.converse(request -> request
                    .modelId(BEDROCK_MODEL_ID)
                    .messages(message)
                    .inferenceConfig(config -> config
                            .maxTokens(BEDROCK_MAX_TOKENS)
                            .temperature(BEDROCK_TEMPERATURE)
                            .topP(bedrockTopP)));

            // 응답 메세지(프롬프트) 출력
            String responseText = response.output().message().content().get(0).text();
             System.out.println("------------RESULT------------");
             System.out.println(responseText);
             System.out.println("------------------------------");
            
            return responseText;

        } catch (SdkClientException e) {
            System.err.printf("ERROR: Can't invoke '%s'. Reason: %s", BEDROCK_MODEL_ID, e.getMessage());
            throw new RuntimeException(e);
        }
    }
}
