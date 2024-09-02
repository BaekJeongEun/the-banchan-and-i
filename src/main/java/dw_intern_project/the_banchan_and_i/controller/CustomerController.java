package dw_intern_project.the_banchan_and_i.controller;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import dw_intern_project.the_banchan_and_i.dto.response.PageResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewReplyListDto;
import dw_intern_project.the_banchan_and_i.service.ReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/customer")
@Slf4j
public class CustomerController {
	
	private final ReviewService reviewService;

	// 고객센터 페이지 
	@GetMapping("/main.do")	
    public ModelAndView getReviewReply(@RequestParam("status") String status, Pageable page) {
		ModelAndView mav = new ModelAndView("/customer/customer-service");
		PageResponseDto pageResponseDto = reviewService.countReviewReply(status, page.getPageNumber());
		mav.addObject("pageDto", pageResponseDto);
        return mav;
    }
	
	// 리뷰 답변 리스트 조회
	@PostMapping("/reply_list.do")	
    public ModelAndView getReviewReplyList(@RequestParam("status") String status, Pageable page) {
		ModelAndView mav = new ModelAndView("/customer/customer-reply-list");
		List<ReviewReplyListDto> reviewReplyListDto = reviewService.getReviewReplyList(status, page.getPageNumber());
		PageResponseDto pageResponseDto = reviewService.countReviewReply(status, page.getPageNumber());
		mav.addObject("reviewReplyListDto", reviewReplyListDto);
		mav.addObject("pageDto", pageResponseDto);
        return mav;
    }
}
