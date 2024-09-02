package dw_intern_project.the_banchan_and_i.dto.response;

import java.text.NumberFormat;

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
public class ProductResponseDto {

	 private String pbCode;
	 
	 private String name;
	 
	 private String subName;

	 private Integer price;
	 
	 private String priceFormat;
	 
	 private Integer weight;

	 private int shippingFee;
	 
	 private String shippingFeeFormat;
	 
	 private String imgCode;

	 private String imgNum;

	 private String imgText;
	 
	 private Double grade;

	 private int reviewCnt;

	 private String gramPrice;

	 private String soldOut;
	 

	    public static ProductResponseDto of(ProductResponseDto product) {
	    	NumberFormat numberFormat = NumberFormat.getInstance();
	        numberFormat.setGroupingUsed(true);
	    	String imgSrc = "https://image.thebanchan.co.kr/dwmall/static_root";
			if (product.getImgCode().length() == 9) {
				imgSrc = imgSrc + "/product_img/main/" + product.getImgCode().substring(0, 7) + "/" + product.getImgCode() + "_" + product.getImgNum()
				+ "_a.jpg";
			} else {
				imgSrc = imgSrc + "/model_img/main/" +  product.getImgCode().substring(0, 3) + "/" + product.getImgCode() + "_1_a.jpg";
			}
			
			int gramPrice = 0;
			if (product.getWeight() != null && product.getWeight() != 0 && product.getPrice() != null) {
			    gramPrice = (int) ((product.getPrice() * 100) / product.getWeight());
			}
	            return ProductResponseDto.builder()
	                    .pbCode(product.getPbCode())
	                    .name(product.getName())
	                    .priceFormat(numberFormat.format(product.getPrice()))
	                    .imgCode(imgSrc)
	                    .subName(product.getSubName())
	                    .weight(product.getWeight())
	                    .shippingFeeFormat(numberFormat.format(product.getShippingFee()))
	                    .imgNum(product.getImgNum())
	                    .imgText(product.getImgText())
	                    .grade(product.getGrade()) 
	                    .reviewCnt(product.getReviewCnt())
	                    .soldOut(product.getSoldOut())
	                    .gramPrice(gramPrice==0?null:numberFormat.format(gramPrice))
	                    .build();
	    }
}
