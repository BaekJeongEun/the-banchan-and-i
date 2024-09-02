package dw_intern_project.the_banchan_and_i.dto.response;

import java.util.HashMap;
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
public class ReviewListPagingResponseDto {

	private List<ClassificationCntResponseDto> classifications;
	private PhotoAndVideoResponseDto photoAndVideoResponseDto;
	private int totalCnt;
	private ReviewPreResponseDto reviewPreDto;
	private List<ReviewListResponseDto> reviewListPagingDto;
	private int totalPage;
	private int startPage;
	private int endPage;
	private int pageNumber;
	private String tipYn;
	private String pbCode;
	private List<String> highlights;
	private HashMap<String, Integer> keywords;
	private PhotoAndVideoResponseDto photoAndVideoListResponseDto;
	private int totalCntReviewWithKeyword;
	
	public static ReviewListPagingResponseDto of(List<ClassificationCntResponseDto> classifications, PhotoAndVideoResponseDto photoAndVideoResponseDto, int reviewTotaltotalCnt, ReviewPreResponseDto reviewPreDto, int totalCntReviewWithKeyword, int totalPage, int startPage, int endPage, int pageNumber, String pbCode, String tipYn, List<ReviewListResponseDto> reviewListPagingDto) {
		return ReviewListPagingResponseDto.builder()
				.classifications(classifications)
				.photoAndVideoResponseDto(photoAndVideoResponseDto)
				.totalCnt(reviewTotaltotalCnt)
				.reviewPreDto(reviewPreDto)
				.reviewListPagingDto(reviewListPagingDto)
				.totalCntReviewWithKeyword(totalCntReviewWithKeyword)
				.totalPage(totalPage)
				.startPage(startPage)
				.endPage(endPage)
				.pageNumber(pageNumber)
				.pbCode(pbCode)
				.tipYn(tipYn)
				.build();
	}

	public static ReviewListPagingResponseDto of(int offset, int totalCntReviewWithKeyword, int totalPage,
			int startPage, int endPage, int pageNumber, List<ReviewListResponseDto> reviewListPagingDto, String pbCode, String tipYn) {
		return ReviewListPagingResponseDto.builder()
				.reviewListPagingDto(reviewListPagingDto)
				.totalCntReviewWithKeyword(totalCntReviewWithKeyword)
				.totalPage(totalPage)
				.startPage(startPage)
				.endPage(endPage)
				.pageNumber(pageNumber)
				.pbCode(pbCode)
				.tipYn(tipYn)
				.build();
	}
}
