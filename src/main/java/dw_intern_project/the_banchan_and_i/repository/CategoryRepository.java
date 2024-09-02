package dw_intern_project.the_banchan_and_i.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import dw_intern_project.the_banchan_and_i.dto.response.CategoryHeaderResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.CategoryResponseDto;

@Mapper
public interface CategoryRepository {
	
	CategoryResponseDto getCategory(@Param("categoryNum") String categoryNum);

	List<CategoryHeaderResponseDto> getHeaderCategory();
}
