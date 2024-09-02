package dw_intern_project.the_banchan_and_i.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import dw_intern_project.the_banchan_and_i.dto.response.ClassificationCntResponseDto;

@Mapper
public interface ClassificationRepository {

	List<ClassificationCntResponseDto> getClassification(@Param("pbCode")String pbCode);
	
}
