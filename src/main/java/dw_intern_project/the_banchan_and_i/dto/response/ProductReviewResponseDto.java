package dw_intern_project.the_banchan_and_i.dto.response;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

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
public class ProductReviewResponseDto {

	private String pbCode;
	private String positivePercentage;
	private int totalCnt;
	private int reviewTotaltotalCnt;
	private Double totalScore;
	private String reviewSummary;
	private String positiveH;
	private String nagativeH;
	private List<String> positiveHighlight;
	private List<String> nagativeHighlight;
	private String peakEmotion;
	private Double positive;
	private Double neutral;
	private Double nagative;
	private ReviewScoreResponseDto reviewScore;
	private MonthlyScoreResponseDto[] monthlyScore;
	private PhotoAndVideoResponseDto photoAndVideoResponseDto;
	
	public static ProductReviewResponseDto of(String pbCode, ProductReviewResponseDto reviewPreResponseDto,
			ReviewScoreResponseDto reviewScore, MonthlyScoreResponseDto[] monthlyScore,
			PhotoAndVideoResponseDto photoAndVideoResponseDto, int totalCnt) {

		List<String> pList = null;
		String text = reviewPreResponseDto.getReviewSummary();

		if (reviewPreResponseDto.getPositiveH() != null && reviewPreResponseDto.getPositiveH().length() > 0) {
			pList = Arrays.stream(reviewPreResponseDto.getPositiveH().split(",")).map(String::trim)
					.collect(Collectors.toList());
			for (String keyword : pList) {
				text = text.replaceAll(keyword, "<span class='phighlight'>" + keyword + "</span>");
			}
		}
		List<String> nList = null;
		if (reviewPreResponseDto.getNagativeH() != null && reviewPreResponseDto.getNagativeH().length() > 0) {
			nList = Arrays.stream(reviewPreResponseDto.getNagativeH().split(",")).map(String::trim)
					.collect(Collectors.toList());
			for (String keyword : nList) {
				text = text.replaceAll(keyword, "<span class='nhighlight'>" + keyword + "</span>");
			}
		}


		return ProductReviewResponseDto.builder().pbCode(pbCode).totalCnt(reviewPreResponseDto.getTotalCnt())
				.totalScore(reviewPreResponseDto.getTotalScore()).reviewScore(reviewScore).monthlyScore(monthlyScore)
				.photoAndVideoResponseDto(photoAndVideoResponseDto).totalCnt(totalCnt).reviewSummary(text)
				.positivePercentage(String.valueOf(Math.round(reviewPreResponseDto.getPositive() * 100)))
				.build();
	}
}
