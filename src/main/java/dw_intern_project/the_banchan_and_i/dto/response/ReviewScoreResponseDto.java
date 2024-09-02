package dw_intern_project.the_banchan_and_i.dto.response;

import java.util.ArrayList;
import java.util.Arrays;
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
public class ReviewScoreResponseDto {

	private int bestStar;
	private String star5;
	private String star4;
	private String star3;
	private String star2;
	private String star1;
	private List<String> scores;
	
	public static ReviewScoreResponseDto of(ReviewScoreResponseDto reviewPreResponseDto) {
		List<String> list = new ArrayList<>();
		list.add(reviewPreResponseDto.getStar1());
		list.add(reviewPreResponseDto.getStar2());
		list.add(reviewPreResponseDto.getStar3());
		list.add(reviewPreResponseDto.getStar4());
		list.add(reviewPreResponseDto.getStar5());
		return ReviewScoreResponseDto.builder()
                    .bestStar(reviewPreResponseDto.getLargestScore(reviewPreResponseDto))
                    .star5(reviewPreResponseDto.getStar5())
                    .star4(reviewPreResponseDto.getStar4())
                    .star3(reviewPreResponseDto.getStar3())
                    .star2(reviewPreResponseDto.getStar2())
                    .star1(reviewPreResponseDto.getStar1())
                    .scores(list)
                    .build();
    }
	public int getLargestScore(ReviewScoreResponseDto score) {
        int[] scores = {
            Integer.parseInt(score.getStar1()),
            Integer.parseInt(score.getStar2()),
            Integer.parseInt(score.getStar3()),
            Integer.parseInt(score.getStar4()),
            Integer.parseInt(score.getStar5())
        };

        return Arrays.stream(scores)
                     .max()
                     .orElse(0);
	}
}
