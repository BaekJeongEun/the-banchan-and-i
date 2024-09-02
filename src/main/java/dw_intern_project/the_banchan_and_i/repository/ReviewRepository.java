package dw_intern_project.the_banchan_and_i.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import dw_intern_project.the_banchan_and_i.dto.request.ReviewDetailRequestDto;
import dw_intern_project.the_banchan_and_i.dto.request.ReviewRegistRequestDto;
import dw_intern_project.the_banchan_and_i.dto.request.ReviewReplyRequestDto;
import dw_intern_project.the_banchan_and_i.dto.response.MonthlyScoreResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.PhotoAndVideoResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.PhotoAndVideoUrlResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ProductReviewReplyDto;
import dw_intern_project.the_banchan_and_i.dto.response.ProductReviewResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewDetailResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewImagesResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewListResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewPreResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewReplyListDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewScoreResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.UserReviewInfoResponseDto;
import dw_intern_project.the_banchan_and_i.entity.Review;

@Mapper
public interface ReviewRepository {

	ReviewPreResponseDto getPreReview(@Param("pbCode") String pbCode);
	
	List<String> getKeywordWithCnt(String pbCode);
	
	PhotoAndVideoResponseDto getPhotoAndVideo(@Param("pbCode") String pbCode);

	ReviewScoreResponseDto getReviewScore(@Param("pbCode") String pbCode);

	List<ReviewListResponseDto> getReviewListPaging(@Param("pageSize") int pageSize, @Param("offset") int offset, @Param("pbCode") String pbCode, @Param("keywords") List<String> keywords, @Param("classifications") List<String> classifications);

	List<PhotoAndVideoUrlResponseDto> getPhotoAndVideoUrl(@Param("pbCode") String pbCode);

	int countReview(@Param("pbCode") String productId);

	ProductReviewResponseDto getProductReview(@Param("pbCode") String pbCode);

	MonthlyScoreResponseDto[] getMonthlyScore(@Param("pbCode") String pbCode);

	void saveReview(ReviewRegistRequestDto reviewRegistRequestDto);

	void saveReviewImage(@Param("image") List<String> image, @Param("review_seq") String review_seq);

	int countReviewWithKeyword(@Param("pbCode") String pbCode, @Param("keywords") List<String> keywords, @Param("classifications") List<String> classifications);

	List<ReviewReplyListDto> getReviewReplyList(@Param("status") String status, @Param("offset") int offset);

	int countReviewReply(@Param("status") String status);

	ProductReviewReplyDto getProductReviewReply(@Param("seq") String seq);

	void updateReplyStatus(@Param("seq") String seq, @Param("status") String status);

	ReviewReplyRequestDto getSubCategoryReviewReplyRequestDto(@Param("pbCode") String pbCode);

	List<Review> getReviewContent();

	List<ReviewReplyListDto> getReviewReplyDone(@Param("offset") int offset);

	ReviewDetailResponseDto getReviewDetail(ReviewDetailRequestDto reviewDetailRequestDto);

	List<ReviewImagesResponseDto> getReviewImages(@Param("pbCode") String pbCode, @Param("pageSize") int pageSize, @Param("offset") int offset);

	UserReviewInfoResponseDto getUserReviewInfo(@Param("userSeq") String userSeq);
}
