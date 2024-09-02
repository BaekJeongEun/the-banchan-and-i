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
public class CategoryResponseDto {
	private String mainCategory;
	private String mainNum;
	private boolean mainChoice;
	private String cateId;
	private List<SubCategoryResponseDto> subCategories; 
	
	public static CategoryResponseDto of(String cateId, CategoryResponseDto dto) {
		boolean mainChoice = cateId.length() == 8;
		return CategoryResponseDto.builder()
				.mainCategory(dto.getMainCategory())
				.mainNum(dto.getMainNum())
				.subCategories(dto.getSubCategories())
				.mainChoice(mainChoice).cateId(cateId).build();
	}
}
