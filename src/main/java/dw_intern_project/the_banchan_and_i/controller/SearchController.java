package dw_intern_project.the_banchan_and_i.controller;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import dw_intern_project.the_banchan_and_i.dto.response.ProductResponseDto;
import dw_intern_project.the_banchan_and_i.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/search")
@Slf4j
public class SearchController {

	private final ProductService productService;

	// 검색을 위한 product-search 페이지로 이동 후 검색어 전달 
	@GetMapping("/hsearch.do")
	public ModelAndView searchProduct(@RequestParam(value = "hd_sch")String word) {
		ModelAndView mav = new ModelAndView("/product/product-search");
		mav.addObject("word", word);
    	return mav;
	}

	// 검색어로 목록 조회 후 반환 
	@PostMapping("/hsearch.do")
	public ModelAndView searchProduct(@RequestParam(value = "hd_sch")String word, Pageable page) {
		ModelAndView mav = new ModelAndView("/product/product-list");
		List<ProductResponseDto> productResonseDto = productService.searchProduct(page, word);
		mav.addObject("productResonseDto", productResonseDto);
    	return mav;
	}
}
