package dw_intern_project.the_banchan_and_i.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import dw_intern_project.the_banchan_and_i.dto.response.CartResponseDto;
import dw_intern_project.the_banchan_and_i.service.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cart")
@Slf4j
public class CartController {

	private final CartService cartService;

	@GetMapping("/main.do")
	public ModelAndView getCart() throws IOException {
		ModelAndView mav = new ModelAndView("/cart/cart");
		List<CartResponseDto> product = cartService.getCart("22");
		mav.addObject("productList", product);
		int cartTotalAmount = cartService.getCartTotalAmount("22");
		mav.addObject("cartTotalAmount", cartTotalAmount);
		return mav;
	}

	@GetMapping("/amount")
	public int getCartAmount() throws IOException {
		int cartTotalAmount = cartService.getCartTotalAmount("22");
		return cartTotalAmount;
	}
}
