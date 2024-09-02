package dw_intern_project.the_banchan_and_i.repository;

import org.apache.ibatis.annotations.Mapper;

import dw_intern_project.the_banchan_and_i.entity.ReviewClassification;

@Mapper
public interface ReviewClassificationRepository {

	void saveReviewClassification(ReviewClassification reviewClassification);
	
}
