package dw_intern_project.the_banchan_and_i.dto.response;

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
public class CategoryHeaderResponseDto {
	private String mainCategory;
	private String mainNum;
	private String mainOffImage;
	private String mainOnImage;
	private List<SubCategoryResponseDto> subCategories; 
	
	public static CategoryHeaderResponseDto of(CategoryHeaderResponseDto dto) {
		String mainOffImage = "";
		String mainOnImage = "";
		if(dto.getMainNum().equals("02110035")) {
			mainOffImage = "//img.dongwonmall.com/dwmall/static_root/category_icon/sub/02110001.png";
			mainOnImage = "//cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8020/612/00/220500000015612.png";
		}else if(dto.getMainNum().equals("02110004")) {
			mainOffImage = "//cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8010/619/00/220500000015619.png";
			mainOnImage = "//cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8020/620/00/220500000015620.png";
		}else if(dto.getMainNum().equals("02110036")) {
			mainOffImage = "//img.dongwonmall.com/dwmall/static_root/category_icon/sub/02110006.png";
			mainOnImage = "//cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8020/624/00/220500000015624.png";
		}else if(dto.getMainNum().equals("02110037")) {
			mainOffImage = "//cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8010/621/00/220500000015621.png";
			mainOnImage = "//cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8020/622/00/220500000015622.png";
		}else if(dto.getMainNum().equals("02110039")) {
			mainOffImage = "//cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8010/631/00/220500000015631.png";
			mainOnImage = "//cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8020/632/00/220500000015632.png";
		}else if(dto.getMainNum().equals("02110040")) {
			mainOffImage = "//cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8010/635/00/220500000015635.png";
			mainOnImage = "//cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8020/636/00/220500000015636.png";
		}else if(dto.getMainNum().equals("02110010")) {
			mainOffImage = "//img.dongwonmall.com/upload/C00001/dspl/banner/8010/637/00/220500000015637.png";
			mainOnImage = "//cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8020/638/00/220500000015638.png";
		}else if(dto.getMainNum().equals("02110042")) {
			mainOffImage = "//cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8010/627/00/220500000015627.png";
			mainOnImage = "//cdn.thebanchan.co.kr/upload/C00001/dspl/banner/8020/628/00/220500000015628.png";
		}
		return CategoryHeaderResponseDto.builder()
				.mainCategory(dto.getMainCategory())
				.mainNum(dto.getMainNum())
				.subCategories(dto.getSubCategories())
				.mainOffImage(mainOffImage)
				.mainOnImage(mainOnImage)
				.build();
	}
}
