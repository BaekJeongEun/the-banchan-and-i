package dw_intern_project.the_banchan_and_i.service;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import dw_intern_project.the_banchan_and_i.dto.common.ReplyStatus;
import dw_intern_project.the_banchan_and_i.dto.request.ReviewDetailRequestDto;
import dw_intern_project.the_banchan_and_i.dto.request.ReviewListRequestDto;
import dw_intern_project.the_banchan_and_i.dto.request.ReviewRegistRequestDto;
import dw_intern_project.the_banchan_and_i.dto.request.ReviewReplyRequestDto;
import dw_intern_project.the_banchan_and_i.dto.response.ClassificationCntResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.MonthlyScoreResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.PageResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.PhotoAndVideoResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.PhotoAndVideoUrlResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ProductReviewReplyDto;
import dw_intern_project.the_banchan_and_i.dto.response.ProductReviewResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewDetailResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewListPagingResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewListResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewPreResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewRegistDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewReplyListDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewScoreResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.UserReviewInfoResponseDto;
import dw_intern_project.the_banchan_and_i.entity.Review;
import dw_intern_project.the_banchan_and_i.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReviewService {

	private final ReviewRepository reviewRepository;
	private final ReviewReplyService reviewReplyService;
	private final ClassificationService classificationService;

	public ReviewListPagingResponseDto getPreReview(ReviewListRequestDto reviewListRequestDto, Pageable page) {

		List<String> keywords = reviewRepository.getKeywordWithCnt(reviewListRequestDto.getPbCode());
		HashMap<String, Integer> map = new HashMap<>();
		// keywords 구분자로 나눠서 map에 넣기
		for (String keyword : keywords) {
			String[] words = keyword.split(",");
			for (String word : words) {
				map.merge(word, 1, Integer::sum);
			}
		}
		// AI 분류 가져오기
		List<ClassificationCntResponseDto> classifications = classificationService
				.getClassification(reviewListRequestDto.getPbCode());
		// 이미지 목록 가져오기
		List<PhotoAndVideoUrlResponseDto> images = reviewRepository
				.getPhotoAndVideoUrl(reviewListRequestDto.getPbCode());
		PhotoAndVideoResponseDto dto = reviewRepository.getPhotoAndVideo(reviewListRequestDto.getPbCode());
		PhotoAndVideoResponseDto photoAndVideoResponseDto = PhotoAndVideoResponseDto.of(dto, images);
		int reviewTotaltotalCnt = reviewRepository.countReview(reviewListRequestDto.getPbCode());
		ReviewPreResponseDto reviewPreDto = ReviewPreResponseDto.of(reviewListRequestDto.getPbCode(),
				reviewTotaltotalCnt, map, photoAndVideoResponseDto);

		// AI 분류/해시태그 버튼
		List<String> keywordrequest = null;
		if (reviewListRequestDto.getKeywords().length() > 0) {
			keywordrequest = Arrays.asList(reviewListRequestDto.getKeywords().split(","));
		}
		List<String> classificationsrequest = null;
		if (reviewListRequestDto.getClassifications() != null
				&& reviewListRequestDto.getClassifications().length() > 0) {
			classificationsrequest = Arrays.asList(reviewListRequestDto.getClassifications().split(","));
		}

		// 리뷰 목록 페이징
		int pageSize = page.getPageSize();
		int pageNumber = page.getPageNumber();
		int offset = pageNumber * pageSize;
		List<ReviewListResponseDto> list = reviewRepository.getReviewListPaging(pageSize, offset,
				reviewListRequestDto.getPbCode(), keywordrequest, classificationsrequest);
		List<ReviewListResponseDto> reviewListPagingDto = list.stream().map(item -> {
			UserReviewInfoResponseDto userReviewInfo = reviewRepository.getUserReviewInfo(item.getUserSeq());
			String emotion = reviewReplyService.getEmotion(item);
			return ReviewListResponseDto.of(item, userReviewInfo, emotion);
		}).collect(Collectors.toList());
		int totalCntReviewWithKeyword = countReviewWithKeyword(reviewListRequestDto.getPbCode(), keywordrequest,
				classificationsrequest);

		pageSize = page.getPageSize();
		pageNumber = page.getPageNumber();
		int totalPage = (totalCntReviewWithKeyword % pageSize == 0) ? (totalCntReviewWithKeyword / pageSize)
				: (totalCntReviewWithKeyword / pageSize) + 1;
		int startPage = ((pageNumber) / 10) * 10 + 1;
		int endPage = startPage + 9 > totalPage ? totalPage : startPage + 9;

		ReviewListPagingResponseDto finalDto = ReviewListPagingResponseDto.of(classifications, photoAndVideoResponseDto,
				reviewTotaltotalCnt, reviewPreDto, totalCntReviewWithKeyword, totalPage, startPage, endPage, pageNumber,
				reviewListRequestDto.getPbCode(), reviewListRequestDto.getTipYn(), reviewListPagingDto);
		return finalDto;
	}

	public ReviewListPagingResponseDto getReviewListPaging(ReviewListRequestDto reviewListRequestDto, Pageable page) {
		int pageSize = page.getPageSize();
		int pageNumber = page.getPageNumber();
		int offset = pageNumber * pageSize;
		List<String> keywords = null;
		if (reviewListRequestDto.getKeywords().length() > 0) {
			keywords = Arrays.asList(reviewListRequestDto.getKeywords().split(","));
		}
		List<String> classifications = null;
		if (reviewListRequestDto.getClassifications() != null
				&& reviewListRequestDto.getClassifications().length() > 0) {
			classifications = Arrays.asList(reviewListRequestDto.getClassifications().split(","));
		}

		// AI 분류/해시태그 버튼
		List<String> keywordrequest = null;
		if (reviewListRequestDto.getKeywords().length() > 0) {
			keywordrequest = Arrays.asList(reviewListRequestDto.getKeywords().split(","));
		}
		List<String> classificationsrequest = null;
		if (reviewListRequestDto.getClassifications() != null
				&& reviewListRequestDto.getClassifications().length() > 0) {
			classificationsrequest = Arrays.asList(reviewListRequestDto.getClassifications().split(","));
		}

		List<ReviewListResponseDto> list = reviewRepository.getReviewListPaging(pageSize, offset,
				reviewListRequestDto.getPbCode(), keywords, classifications);

		List<ReviewListResponseDto> reviewListPagingDto = list.stream().map(item -> {
			UserReviewInfoResponseDto userReviewInfo = reviewRepository.getUserReviewInfo(item.getUserSeq());
			String emotion = reviewReplyService.getEmotion(item);
			return ReviewListResponseDto.of(item, userReviewInfo, emotion);
		}).collect(Collectors.toList());

		for (ReviewListResponseDto review : reviewListPagingDto) {
			String content = review.getContent();
			if (classifications != null && review.getClassifications() != null) {
				List<String> highlights = review.getClassifications();
				Collections.sort(highlights, Comparator.comparingInt(String::length).reversed());
				for (String highlight : highlights) {
					content = content.replaceAll(highlight, "<span class='review-highlight'>" + highlight + "</span>");
				}
				review.setContent(content);
			}
		}
		int totalCntReviewWithKeyword = countReviewWithKeyword(reviewListRequestDto.getPbCode(), keywordrequest,
				classificationsrequest);

		pageSize = page.getPageSize();
		pageNumber = page.getPageNumber();
		int totalPage = (totalCntReviewWithKeyword % pageSize == 0) ? (totalCntReviewWithKeyword / pageSize)
				: (totalCntReviewWithKeyword / pageSize) + 1;
		int startPage = ((pageNumber) / 10) * 10 + 1;
		int endPage = startPage + 9 > totalPage ? totalPage : startPage + 9;

		return ReviewListPagingResponseDto.of(offset, totalCntReviewWithKeyword, totalPage, startPage, endPage,
				pageNumber, reviewListPagingDto, reviewListRequestDto.getPbCode(), reviewListRequestDto.getTipYn());
	}

	public ProductReviewResponseDto getProductReview(String pbCode) {
		ProductReviewResponseDto reviewPre = reviewRepository.getProductReview(pbCode);
		ReviewScoreResponseDto reviewScoreResponseDto = reviewRepository.getReviewScore(pbCode);
		MonthlyScoreResponseDto[] monthlyResponseDto = reviewRepository.getMonthlyScore(pbCode);
		PhotoAndVideoResponseDto dto = reviewRepository.getPhotoAndVideo(pbCode);
		PhotoAndVideoResponseDto photoAndVideoResponseDto = PhotoAndVideoResponseDto.of(dto);
		int totalCnt = reviewRepository.countReview(pbCode);

		return ProductReviewResponseDto.of(pbCode, reviewPre, reviewScoreResponseDto, monthlyResponseDto,
				photoAndVideoResponseDto, totalCnt);
	}

	public ResponseEntity<ReviewRegistDto> saveReview(ReviewRegistRequestDto reviewRegistRequestDto) {
		reviewRepository.saveReview(reviewRegistRequestDto);
		if (reviewRegistRequestDto.getImage() != null) {
			reviewRepository.saveReviewImage(reviewRegistRequestDto.getImage(), reviewRegistRequestDto.getReview_seq());
		}
		ReviewReplyRequestDto dto = ReviewReplyRequestDto.of(reviewRegistRequestDto,
				reviewRepository.getSubCategoryReviewReplyRequestDto(reviewRegistRequestDto.getPb_code()));
		reviewReplyService.bedrockService(dto);
		reviewReplyService.updateReviewHighLight(
				Review.of(reviewRegistRequestDto.getReview_seq(), reviewRegistRequestDto.getRv_content()));
		return ResponseEntity.ok(ReviewRegistDto.of("SUCCESS"));
	}

	public int countReviewWithKeyword(String pbCode, List<String> keywords, List<String> classifications) {
		return reviewRepository.countReviewWithKeyword(pbCode, keywords, classifications);
	}

	public List<ReviewReplyListDto> getReviewReplyList(String status, int pageNumber) {
		int offset = pageNumber * 5;
		List<ReviewReplyListDto> reviewReplyListDto = reviewRepository.getReviewReplyList(status, offset);
		return reviewReplyListDto.stream().map(ReviewReplyListDto::of).collect(Collectors.toList());
	}

	public PageResponseDto countReviewReply(String status, int pageNumber) {
		int createReplyTotalCnt = reviewRepository.countReviewReply(ReplyStatus.REPLY_CREATE.getStatus());
		int doneReplyTotalCnt = reviewRepository.countReviewReply(ReplyStatus.REPLY_DONE.getStatus());
		int totalCnt = 0;
		if (status.equals(ReplyStatus.REPLY_DONE.getStatus())) {
			totalCnt = doneReplyTotalCnt;
		} else {
			totalCnt = createReplyTotalCnt;
		}
		int totalPage = (totalCnt % 5 == 0) ? (totalCnt / 5) : (totalCnt / 5) + 1;
		int startPage = ((pageNumber) / 10) * 10 + 1;
		int endPage = startPage + 9 > totalPage ? totalPage : startPage + 9;
		int pre = (pageNumber - 1 < 0) ? 0 : pageNumber;
		int post = (pageNumber + 2);
		int lastPage = totalPage;
		return PageResponseDto.of(createReplyTotalCnt, doneReplyTotalCnt, pageNumber + 1, startPage, endPage, pre, post,
				lastPage);
	}

	public ProductReviewReplyDto getProductReviewReply(String seq) {
		return ProductReviewReplyDto.of(reviewRepository.getProductReviewReply(seq));
	}

	public ReviewDetailResponseDto getReviewDetail(ReviewDetailRequestDto reviewDetailRequestDto) {
		return ReviewDetailResponseDto.of(reviewRepository.getReviewDetail(reviewDetailRequestDto),
				reviewDetailRequestDto.getCurIdx());
	}
}
