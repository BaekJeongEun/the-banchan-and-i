package dw_intern_project.the_banchan_and_i.dto.response;

import java.text.NumberFormat;
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
public class CartResponseDto {
	
	private String pbCode;
	 
	 private String name;

	 private Integer price;
	 
	 private Integer amount;
	 
	 private String priceFormat;
	 
	 private int shippingFee;
	 
	 private String shippingFeeFormat;
	 
	 private String imgCode;

	 private String imgNum;

	 private String imgText;
	 
	 private String img;
	 
	 private int totalAmount;
	
	public static CartResponseDto of(CartResponseDto dto, int totalAmount) {
		NumberFormat numberFormat = NumberFormat.getInstance();
        numberFormat.setGroupingUsed(true);
    	String imgSrc = "https://image.thebanchan.co.kr/dwmall/static_root";
		if (dto.getImgCode().length() == 9) {
			imgSrc = imgSrc + "/product_img/main/" + dto.getImgCode().substring(0, 7) + "/" + dto.getImgCode() + "_" + dto.getImgNum()
			+ "_a.jpg";
		} else {
			imgSrc = imgSrc + "/model_img/main/" +  dto.getImgCode().substring(0, 3) + "/" + dto.getImgCode() + "_1_a.jpg";
		}
		
		return CartResponseDto.builder()
				.pbCode(dto.getPbCode())
				.name(dto.getName())
				.priceFormat(numberFormat.format(dto.getPrice()))
				.shippingFeeFormat(numberFormat.format(dto.getShippingFee()))
				.img(imgSrc)
				.amount(dto.getAmount())
				.totalAmount(totalAmount)
				.build();
	}
}
