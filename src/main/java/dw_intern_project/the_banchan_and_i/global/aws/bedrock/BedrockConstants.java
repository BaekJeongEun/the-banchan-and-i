package dw_intern_project.the_banchan_and_i.global.aws.bedrock;

public class BedrockConstants {

    public static final String BEDROCK_MODEL_ID = "cohere.command-r-plus-v1:0"; // 파운데이션 모델 ID

    public static final String BEDROCK_DOCUMENT_SOURCE_NAME = "output"; // 첨부 파일 이름

    public static final String BEDROCK_DOCUMENT_SOURCE_FORMAT = "csv"; // 첨부 파일 형식

    public static final int BEDROCK_MAX_TOKENS = 4000; // 응답(결과) 메세지(프롬프트) 최대 토큰 개수(출력 최대 길이랑 비슷)

    public static final float BEDROCK_TEMPERATURE = 0F; // 응답(결과) 메세지(프롬프트) 랜덤 응답 비율 (높을수록 응답의 랜덤성 증가(억지로라도 응답 만들 확률 증가))

    public static final float BEDROCK_REVIEW_SUMMARY_TOP_P = 0F; // 응답(결과) 메세지(프롬프트) 생성된 토큰의 선택 범위(낮을 수록 정형화된 답변만 나옴) - 리뷰 요약 Top P
    
    public static final float BEDROCK_REVIEW_REPLY_TOP_P = 0.8F; // 리뷰 답변 생성 Top P

    public static final String BEDROCK_IMPROVE_PROMPT_FOR_JSON = " 만약 json으로 parsing 했을 때 오류가 발생한다면, json parsing이 가능하도록 형식을 맞춰주세요.>"; // 프롬프트 응답 개선

    public static final String BEDROCK_IMPROVE_PROMPT_FOR_KOREAN_RESPONSE = " 만약 답변에 중국어 또는 일본어가 있다면 무조건 한국어로 번역해주세요.>";
    
    public static final String BEDROCK_REVIEW_SUMMARY_PROMPT = "format = <SUMMARY: SUMMARY, POSITIVE: POSITIVE, NEUTRAL: NEUTRAL, NEGATIVE: NEGATIVE, FEELING: FEELING>\n"
            + "role = <\n" + "당신은 가정간편식 전문 온라인몰의 한국인 고객입니다.\n" + "당신의 업무는 고객들의 리뷰를 한국어로 요약하고, 감정 분석을 하는 것입니다.\n" + ">\n"
            + "prompt = <\n" + "다음을 순서대로 수행해주세요.\n"
            + "1. 결과값은 json 형식으로 주시되, Back Tick을 모두 제거해주시고, \"json\" 이라는 단어도 제거해주세요.\n"
            + "2. JSON parsing할 수 있도록 대문자 키값 형식을 준수해주세요.\n"
            + "3. 첨부된 파일의 \"content\"의 긍정적인 부분을 중점적으로 요약하고, 친절하게 무조건 한국어로 작성해주세요. 또한, \"keyword\" 데이터들을 참고해주세요. 작성 내용은 150자로 작성해주세요. 요약된 내용에 큰따옴표를 절대 포함시키지 마세요.\n"
            + "4. 요약된 내용에 당신의 의견은 포함시키지 말고 실사용자가 작성한 리뷰처럼 친근한 말투로 작성해주세요.\n"
            + "5. 요약한 텍스트의 감정을 “POSITIVE”, “NEGATIVE”, “NEUTRAL” 3가지 항목으로 나눠서 분석해주세요.\n"
            + "6. 감정 분석 결과값은 FLOAT 타입의 0~1 사이의 값으로 표현해주시고, 소수점 아래 둘째 자리에서 반올림하여 소수점 아래 첫번째 자리까지만 나타내주세요. 뒤에 퍼센트는 절대 붙이지 마세요. 그리고 POSITIVE, NEUTURAL, NEGATIVE 합이 1이 되게끔 설정해주세요.\n"
            + "7. 결과값은 <format> 형태로 생성해주세요. 이때, “FEELING”에는 가장 높은 값을 가진 감정을 넣어주세요.\n"
            + "8. “FEELING”에 들어가는 결과값은 영어 대문자로 작성해주세요.\n"
            + "9. 만약 결과값이 동일한 감정이 있다면 “POSITIVE”을 가장 최우선으로 선택하고, 그다음으로 “NEUTRAL”을 선택하고 마지막으로 “NEGATIVE” 을 선택해주세요.\n"
            + ">";    

    public static final String BEDROCK_REVIEW_SUMMARY_HIGHLIGHT_PROMPT = "format = <HIGHLIGHT_POSITIVE: HIGHLIGHT_POSITIVE, HIGHLIGHT_NEGATIVE: HIGHLIGHT_NEGATIVE>\n"
            + "prompt = <\n" + "다음을 순서대로 수행해주세요:\n"
            + "1. 결과는 JSON 형식으로 제공하되, Back Tick과 \"json\" 단어는 제거해주세요.\n"
            + "2. 대문자 키값 형식을 준수하여 JSON parsing이 가능하도록 합니다.\n"
            + "3. 'reviewSummary' 문장 내의 단어와 문장은 절대 변형하지 마세요. 오타나 띄어쓰기를 수정하지 말고, 반드시 원래 형태로 저장해야 합니다. 원본 그대로 유지해야 합니다.\n"
            + "4. 긍정적인 단어는 “HIGHLIGHT_POSITIVE”에, 부정적인 단어는 “HIGHLIGHT_NEGATIVE”에 comma로 구분하여 저장합니다.\n"
            + "5. 저장된 단어는 이후 'reviewSummary'에서 동일하게 찾아야 하므로, 변형하지 말아야 합니다.\n"
            + "6. 모든 지시사항은 절대적으로 따라야 하며, 원본 텍스트를 그대로 유지해야 합니다.\n"
            + ">";

    
    public static final String BEDROCK_REVIEW_HIGHLIGHT_PROMPT = "format = <SATISFACION: SATISFACION, QUALITY: QUALITY, TASTE: TASTE, FRESHNESS: FRESHNESS, AMOUNT: AMOUNT, PRICE: PRICE, PACKING_SHIPPING: PACKING_SHIPPING, EXPIRATION_DATE: EXPIRATION_DATE>\n"
            + "prompt = <\n" + "다음을 순서대로 수행해주세요.\n"
            + "1. 결과값은 json 형식으로 주시되, Back Tick을 모두 제거해주시고, \"json\" 이라는 단어도 제거해주세요.\n"
            + "2. JSON parsing할 수 있도록 대문자 키값 형식을 준수해주세요.\n"
            + "3. 'reivew' 내용에서 만족도와 관련된 단어는 “SATISFACION” 항목, 품질과 관련된 단어는 “QUALITY” 항목, 맛과 관련된 단어는 “TASTE”, 신선도와 관련된 단어는 “FRESHNESS”, 양과 관련된 단어는 “AMOUNT”, 가격과 관련된 단어는 “PRICE”, 포장/배송과 관련된 단어는 “PACKING_SHIPPING”, 유통기한과 관련된 단어는 “EXPIRATION_DATE” 항목에 comma 구분자를 활용하여 저장해주세요. "
            + "4. 단, 단어를 저장할 때 'reivew' 문장 내의 단어를 생략하거나 요약하거나 변형하지 말아주세요. 'reivew'의 단어, 음절 하나도 다르지 않게 저장해주세요.\n"
            + "5. 저장된 단어는 'reivew'에서 동일한 단어를 찾아야하기 때문에 절대 변형하지 마세요.\n"
            + ">";

    public static final String BEDROCK_REVIEW_SUMMARY_PROMPT_DEFAULT = "아직 요약된 후기가 없어요.";

    public static final String BEDROCK_REVIEW_REPLY_PROMPT = "format = <"
    		+ "    \"REPLY\": \"REPLY\",\n"
    		+ "    \"POSITIVE\": \"POSITIVE\", \n"
    		+ "    \"NEUTRAL\": \"NEUTRAL\", \n"
    		+ "    \"NEGATIVE\": \"NEGATIVE\", \n"
    		+ "    \"FEELING\": \"FEELING\" >\n"
    		+ "    \n"
    		+ "role = < 당신은 '더반찬' 이라는 가정간편식 전문 온라인몰의 담당자입니다. \n"
    		+ "					당신의 업무는 고객들의 리뷰를 이해하고, 리뷰에 적절한 답변을 생성하는 것입니다.\n"
    		+ "					단, product에 대한 원산지 정보는 절대 포함하지 마세요. 또한 product에 대해 제공되지 않은 정보는 포함하지 마세요. \n"
    		+ "					자신을 지칭할 때는 '더반찬'이라고 해주세요.\n"
    		+ "					REPLY는 무조건 한국어로 생성해주세요.>\n"
    		+ "prompt = <"
    		+ "    다음을 순서대로 수행해주세요. \n"
    		+ "    1. 결과값은 json 형식으로 주시되, Back Tick을 모두 제거해주시고, \"json\" 이라는 단어도 제거해주세요.\n"
    		+ "    2. JSON parsing할 수 있도록 대문자 키값 형식을 준수해주세요. 답변 내용에 큰따옴표를 절대 포함시키지 마세요.\n"
    		+ "    3. 'reviewContent'의 감정을 “POSITIVE”, “NEUTRAL”, “NEGATIVE”,  3가지 항목으로 나눠서 분석해주세요.\n"
    		+ "    4. 감정 분석 결과값은 0~1 사이의 실수로 표현해주시고, 소수점 아래 둘째 자리에서 반올림하여 소수점 아래 첫번째 자리까지만 나타내주세요. 뒤에 퍼센트는 절대 붙이지 마세요. 그리고 POSITIVE, NEUTURAL, NEGATIVE 합이 1이 되게끔 설정해주세요.\n"
    		+ "    5. 'reviewContent', 'productCategory', 'productName' 에 대한 내용 바탕으로 'reviewContent'에 대한 답변을 한국어로 친절하게 약 220자 작성해주세요. 후기 작성자를 지칭할때는 '고객님' 이라는 단어를 사용해주세요.\n"
    		+ "    6. 'REPLY' 생성시, 'reviewContent' 에 대해 우선 공감을 해주시고, 감정 분석된 결과를 바탕으로 긍정적인 리뷰에 대해서는 감사의 인사를, 부정적인 리뷰에 대해서는 사과와 개선방향을 제시해주세요. 만약 리뷰에 대한 정보가 부족하다면 default_reply의 내용으로 응답해주세요.\n"
    		+ "    7. 결과값은 'format' 형태로 생성해주세요. 이때, 'FEELING' 에는 가장 높은 값을 가진 감정을 넣어주세요. \n"
    		+ "    8. 'FEELING'에 들어가는 결과값은 영어 대문자로 작성해주세요. \n"
    		+ "    9. 만약 결과값이 동일한 감정이 있다면 'POSITIVE'을 가장 최우선으로 선택하고, 그 다음으로 'NEUTRAL'을 선택하고 마지막으로 'NEGATIVE' 을 선택해주세요.\n"
    		+ "    10. 'REPLY'에 중국어나 일본어, 영어가 있다면 한국어로 바꿔주세요.\n"
    		+ "    11. 그리고 'REPLY'를 한번 더 점검하여, 맞춤법이 잘못된 부분이나 문맥이 어색한 문장이 있다면 올바르게 수정해주세요.> \n"
    		+ "default_reply = <안녕하세요 고객님, 저희 더반찬을 이용해 주셔서 감사합니다. \n"
    		+ " 고객님의 소중한 리뷰에 감사드립니다. 고객님의 의견을 항상 경청하고 있으며, 이를 바탕으로 더 나은 서비스와 제품 개선을 위해 노력하고 있습니다. \n"
    		+ " 불편하신 점이나 제안해주신 사항은 신중하게 검토하여 반영하도록 하겠습니다. \n"
    		+ " 앞으로도 고객님께 만족스러운 경험을 제공하기 위해 최선을 다하겠습니다. 감사합니다.>";

    public static final String BEDROCK_REVIEW_REPLY_PROMPT_DEFAULT = "안녕하세요 고객님, 저희 더반찬을 이용해 주셔서 감사합니다. \n"
            + "고객님의 소중한 리뷰에 감사드립니다. 고객님의 의견을 항상 경청하고 있으며, 이를 바탕으로 더 나은 서비스와 제품 개선을 위해 노력하고 있습니다. \n"
            + "불편하신 점이나 제안해주신 사항은 신중하게 검토하여 반영하도록 하겠습니다. \n"
            + "앞으로도 고객님께 만족스러운 경험을 제공하기 위해 최선을 다하겠습니다. 감사합니다.";
}
