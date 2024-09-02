package dw_intern_project.the_banchan_and_i.dto.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
public enum EmotionEnum {
    POSITIVE("긍정", "POSITIVE", "#99dfb9", "/images/icon/positive.png"),
    NEUTRAL("보통", "NEUTRAL", "#ffe699", "/images/icon/neutral.png"),
    NEGATIVE("부정", "NEGATIVE", "#ff9999", "/images/icon/negative.png");

    private final String koreanValue;
    private final String englishValue;
    private final String color;
    private final String image;
}
