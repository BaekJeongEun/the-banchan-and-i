package dw_intern_project.the_banchan_and_i.controller;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import dw_intern_project.the_banchan_and_i.dto.request.ReviewDetailRequestDto;
import dw_intern_project.the_banchan_and_i.dto.request.ReviewListRequestDto;
import dw_intern_project.the_banchan_and_i.dto.response.ProductResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ProductReviewResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewDetailResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewListPagingResponseDto;
import dw_intern_project.the_banchan_and_i.service.CartService;
import dw_intern_project.the_banchan_and_i.service.ClassificationService;
import dw_intern_project.the_banchan_and_i.service.ProductService;
import dw_intern_project.the_banchan_and_i.service.ReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/product")
@Slf4j
public class ProductController {

	private final ProductService productService;
	private final ReviewService reviewService;
	private final CartService cartService;

	// 상품 리스트 조회
	@PostMapping("/productList.do")
	public ModelAndView getProductList(@RequestParam("categoryNum") String categoryNum, Pageable page) {
		ModelAndView mav = new ModelAndView("/product/product-list");
		List<ProductResponseDto> productResonseDto = productService.getProductList(page, categoryNum);
		int cartTotalAmount = cartService.getCartTotalAmount("22");
		mav.addObject("cartTotalAmount", cartTotalAmount);
		mav.addObject("productResonseDto", productResonseDto);
		return mav;
	}

	// 상품 상세 조회
	@GetMapping("/detail.do")
	public ModelAndView getProductDetail(@RequestParam("productId") String pbCode) {
		ProductResponseDto productResonseDto = productService.getProductDetail(pbCode);
		ProductReviewResponseDto reviewPreDto = reviewService.getProductReview(pbCode);
		ModelAndView mav = new ModelAndView("/product/product");
		mav.addObject("pbCode", pbCode);
		mav.addObject("product", productResonseDto);
		mav.addObject("reviewPreDto", reviewPreDto);

		return mav;
	}

	// 상품 내 리뷰 관련 정보 조회
	@PostMapping("/pr_review_list.do") // #pr_review_list
	public ModelAndView getPreReview(ReviewListRequestDto reviewListRequestDto, Pageable page) {
		ModelAndView mav = new ModelAndView("/review/review-list");
		ReviewListPagingResponseDto reviewPreDto = reviewService.getPreReview(reviewListRequestDto, page);
		mav.addObject("reviewPreDto", reviewPreDto);
		return mav;
	}

	// 상품 내 리뷰 목록 조회
	@PostMapping("/pr_review_list_paging.do") // .rv-list-wrapper
	public ModelAndView getReviewListPaging(ReviewListRequestDto reviewListRequestDto, Pageable page, Model model) {
		ModelAndView mav = new ModelAndView("/review/review-list-paging");
		ReviewListPagingResponseDto reviewPreDto = reviewService.getReviewListPaging(reviewListRequestDto, page);
		mav.addObject("reviewPreDto", reviewPreDto);
		return mav;
	}

	// 상품 내 리뷰 상세 정보 조회
	@PostMapping("/pr_review_detail.do") // .rv-swiper
	public ModelAndView getReviewDetail(ReviewDetailRequestDto reviewDetailRequestDto) {
		ModelAndView mav = new ModelAndView("/review/review-detail");
		ReviewDetailResponseDto review = reviewService.getReviewDetail(reviewDetailRequestDto);
		mav.addObject("review", review);
		return mav;
	}

}
