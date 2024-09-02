package dw_intern_project.the_banchan_and_i.dto.response;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

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
public class ReviewReplyListDto {

	private String seq;
	private String productImage;
	private String pbCode;
	private String name;
	private int score;
	private String regId;
	private String regDt;
	private String imgCode;
	private String imgNum;
	
	public static ReviewReplyListDto of(ReviewReplyListDto dto) {
		String imgSrc = "https://image.thebanchan.co.kr/dwmall/static_root";
		if (dto.getImgCode().length() == 9) {
			imgSrc = imgSrc + "/product_img/main/" + dto.getImgCode().substring(0, 7) + "/" + dto.getImgCode() + "_" + dto.getImgNum()
			+ "_a.jpg";
		} else {
			imgSrc = imgSrc + "/model_img/main/" +  dto.getImgCode().substring(0, 3) + "/" + dto.getImgCode() + "_1_a.jpg";
		}
		return ReviewReplyListDto.builder()
				.seq(dto.getSeq())
				.productImage(imgSrc)
				.pbCode(dto.getPbCode())
				.score(dto.getScore())
				.name(dto.getName())
				.regId(dto.getRegId())
				.regDt(convertDate(dto.getRegDt()))
				.build();
	}
	public static String convertDate(String inputDate) {
		DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");
		DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

		LocalDate date = LocalDate.parse(inputDate, inputFormatter);
		return date.format(outputFormatter);
	}
}
