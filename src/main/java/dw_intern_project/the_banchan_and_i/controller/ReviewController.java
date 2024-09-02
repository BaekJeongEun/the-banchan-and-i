package dw_intern_project.the_banchan_and_i.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import dw_intern_project.the_banchan_and_i.dto.request.ReplyRegistRequestDto;
import dw_intern_project.the_banchan_and_i.dto.request.ReviewRegistRequestDto;
import dw_intern_project.the_banchan_and_i.dto.response.ProductReviewReplyDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReplyRegistResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewImagesResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewRegistDto;
import dw_intern_project.the_banchan_and_i.service.ReviewReplyService;
import dw_intern_project.the_banchan_and_i.service.ReviewService;
import dw_intern_project.the_banchan_and_i.service.ReviewSummaryService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/review")
public class ReviewController {

	private final ReviewReplyService reviewReplyService;
	private final ReviewSummaryService reviewSummaryService;
	private final ReviewService reviewService;

	// [상품별] 리뷰 요약 + 감정 분석 - 요약 저장하기
	@PostMapping("/summary")
	public ResponseEntity<Void> saveReviewSummary() throws IOException {
		reviewSummaryService.saveReviewSummary();
		return ResponseEntity.ok().build();
	}

	// [상품별] 리뷰 요약 + 감정 분석 - 요약 저장하기
	@PostMapping("/summary/test")
	public ResponseEntity<Void> saveReviewSummaryHighLighting() throws IOException {
		// reviewSummaryService.saveReviewSummaryHighLighting();
		return ResponseEntity.ok().build();
	}

	// 리뷰 저장하기
	@PostMapping
	public ResponseEntity<ReviewRegistDto> saveReview(ReviewRegistRequestDto reviewRegistRequestDto) {
		return reviewService.saveReview(reviewRegistRequestDto);
	}

	// 리뷰 답변 확인하기 팝업
	@PostMapping("/productReview.do")
	public ModelAndView getProductReviewReply(@RequestParam("rv_seq") String rvSeq) {
		ModelAndView mav = new ModelAndView("/review/review-reply");
		ProductReviewReplyDto productReviewReplyDto = reviewService.getProductReviewReply(rvSeq);
		mav.addObject("productReviewReplyDto", productReviewReplyDto);
		return mav;
	}

	// 리뷰 답변 수정하기
	@PostMapping("/reply.do")
	public ResponseEntity<ReplyRegistResponseDto> updateReply(ReplyRegistRequestDto dto) {
		return reviewReplyService.updateReply(dto);
	}

	// 리뷰 하이라이팅 처리
	@PostMapping("/highlight.do")
	public void updateReviewHighLight() {
		reviewReplyService.updateReviewHighLight();
	}

	// 리뷰 이미지 리스트
	@GetMapping("/images")
	public List<ReviewImagesResponseDto> getReviewImages(@RequestParam("pb_code") String pbCode,
			@RequestParam("startNum") int startNum) {
		return reviewReplyService.getReviewImages(pbCode, startNum);
	}
}
