package dw_intern_project.the_banchan_and_i.dto.response;

import java.util.HashMap;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Builder
@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class ReviewPreResponseDto {
	private int totalCnt;
	private HashMap<String, Integer> keywords; // 모든 리뷰의 keyword 끌고 와서. 구분자로 나누고 HashMap 사용
	private PhotoAndVideoResponseDto photoAndVideoResponseDto;
	
	public static ReviewPreResponseDto of(String pbCode, int totalCnt, HashMap<String, Integer> keywords, PhotoAndVideoResponseDto photoAndVideoResponseDto) {
            return ReviewPreResponseDto.builder()
            		.totalCnt(totalCnt)
                    .keywords(keywords)
                    .photoAndVideoResponseDto(photoAndVideoResponseDto)
                    .build();
    }
}
