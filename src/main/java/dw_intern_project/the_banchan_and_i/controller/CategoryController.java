package dw_intern_project.the_banchan_and_i.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import dw_intern_project.the_banchan_and_i.dto.response.CategoryHeaderResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.CategoryResponseDto;
import dw_intern_project.the_banchan_and_i.service.CartService;
import dw_intern_project.the_banchan_and_i.service.CategoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/category")
@Slf4j
public class CategoryController {

	private final CategoryService categoryService;
	private final CartService cartService;

	// 헤더에 카테고리 정보 가져오기
	@PostMapping
	public List<CategoryHeaderResponseDto> getHeaderCategory() {
		List<CategoryHeaderResponseDto> cate1 = categoryService.getHeaderCategory();
		return cate1;
	}

	// 카테고리 클릭했을 때 메인, 서브 카테고리명/seq
	@GetMapping("/main.do")
	public ModelAndView getCategory(@RequestParam("cate_id") String categoryNum) {
		CategoryResponseDto cate = CategoryResponseDto.of(categoryNum, categoryService.getCategory(categoryNum));
		ModelAndView mav = new ModelAndView("/category/category");
		mav.addObject("category", cate);
		mav.addObject("categoryNum", categoryNum);
		int cartTotalAmount = cartService.getCartTotalAmount("22");
		mav.addObject("cartTotalAmount", cartTotalAmount);
		return mav;
	}
}
