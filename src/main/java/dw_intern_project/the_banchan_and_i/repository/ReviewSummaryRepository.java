package dw_intern_project.the_banchan_and_i.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import dw_intern_project.the_banchan_and_i.dto.request.ReviewSummaryRequestDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewSummaryResponseDto;


@Mapper
public interface ReviewSummaryRepository {

    ReviewSummaryRequestDto getReviewSummaryRequestDto(@Param("pbCode") String pbCode);

    void saveReviewSummary(ReviewSummaryResponseDto reviewSummaryResponseDto);

	void saveReviewSummaryHighlight(ReviewSummaryResponseDto reviewSummaryResponseDto);

	List<ReviewSummaryRequestDto> getSummary();

	void updateReviewSummary(ReviewSummaryResponseDto reviewSummaryResponseDto);
}
