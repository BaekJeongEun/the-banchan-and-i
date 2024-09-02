package dw_intern_project.the_banchan_and_i.dto.response;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
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
public class ReviewListResponseDto {

	private String seq;
	private String userSeq;
	private String regId;
	private String regDt;
	private String content;
	private String reply;
	private String replyStatus;
	private String keyword;
	private String classification;
	private String image;
	private String type;
	private String bestNy;
	private int score;
	private String peakEmotion;
	private Double positive;
	private Double neutral;
	private Double negative;
	private int reviewBestCnt;
	private int reviewCnt;
	private Double reviewAvg;
	private List<String> images;
	private List<String> types;
	private List<String> keywords;
	private List<String> classifications;
	private String getEmotion;

	public static ReviewListResponseDto of(ReviewListResponseDto reviewListResponseDto, UserReviewInfoResponseDto userReviewInfo, String getEmotion) {
		String imgUrlOrigin = "https://image.thebanchan.co.kr/upload/C00001/mypage/review/250";
		String keywords = reviewListResponseDto.getKeyword();
		List<String> keywordList = Arrays.asList(keywords.split(","));
		String image = reviewListResponseDto.getImage();
		String type = reviewListResponseDto.getType();
		String classification = reviewListResponseDto.getClassification();
		List<String> images = null;
		List<String> classifications = null;
		
		if (image != null) {
			images = Arrays.asList(image.split(","));
			for (int i = 0; i < images.size(); i++) {
				String path = images.get(i).split("\\|\\|")[0];
				String typeTmp = images.get(i).split("\\|\\|")[1];
				if (typeTmp.equals("20")) {
					path = path.split("\\.")[0] + ".jpg";
				}
				if (!path.startsWith("/images/upload/") && !path.startsWith("https://")) {
					path = imgUrlOrigin + path;
				}
				images.set(i, path);
			}
		}
		if (classification != null) {
			classifications = Arrays.stream(classification.split(",")).map(String::trim).collect(Collectors.toList());
			Collections.sort(classifications, Comparator.comparingInt(String::length).reversed());
		}
		
		
		return ReviewListResponseDto.builder().seq(reviewListResponseDto.getSeq())
				.regId(reviewListResponseDto.getRegId()).regDt(convertDate(reviewListResponseDto.getRegDt()))
				.content(reviewListResponseDto.getContent()).reply(reviewListResponseDto.getReply())
				.replyStatus(reviewListResponseDto.getReplyStatus()).score(reviewListResponseDto.getScore())
				.image(images == null ? null : images.get(0)).images(images).keywords(keywordList)
				.peakEmotion(reviewListResponseDto.getPeakEmotion()).bestNy(reviewListResponseDto.getBestNy())
				.positive(reviewListResponseDto.getPositive()).neutral(reviewListResponseDto.getNeutral())
				.negative(reviewListResponseDto.getNegative()).classifications(classifications)
				.reviewBestCnt(userReviewInfo.getReviewBestCnt())
				.reviewCnt(userReviewInfo.getReviewCnt())
				.reviewAvg(userReviewInfo.getReviewAvg())
				.getEmotion(getEmotion)
				.build();
	}

	public static String convertDate(String inputDate) {
		DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");
		DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

		LocalDate date = LocalDate.parse(inputDate, inputFormatter);
		return date.format(outputFormatter);
	}
}
