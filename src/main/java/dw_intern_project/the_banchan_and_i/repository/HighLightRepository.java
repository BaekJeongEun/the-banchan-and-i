package dw_intern_project.the_banchan_and_i.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import dw_intern_project.the_banchan_and_i.entity.HighLight;

@Mapper
public interface HighLightRepository {

	void savehighLight(List<HighLight> highLights);
	
}
