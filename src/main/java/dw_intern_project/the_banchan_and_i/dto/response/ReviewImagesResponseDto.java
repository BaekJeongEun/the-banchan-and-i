package dw_intern_project.the_banchan_and_i.dto.response;

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
public class ReviewImagesResponseDto {
	private String reviewSeq;
	private String img;
	private String fileType;
	private String filePath;
	private int rowNumber;

	public static ReviewImagesResponseDto of(ReviewImagesResponseDto dto, int startNum) {
		String imgUrlOrigin = "https://image.thebanchan.co.kr/upload/C00001/mypage/review/250";

		String type = dto.getFileType();
		String path = dto.getFilePath();
		if (type.equals("20")) {
			path = path.split("\\.")[0] + ".jpg";
		}
		if (!path.startsWith("/images/upload/") && !path.startsWith("https://")) {
			path = imgUrlOrigin + path;
		}
		return ReviewImagesResponseDto.builder().img(path).reviewSeq(dto.getReviewSeq()).rowNumber(startNum+15).build();
	}
}
