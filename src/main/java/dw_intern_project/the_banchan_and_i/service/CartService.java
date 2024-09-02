package dw_intern_project.the_banchan_and_i.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import dw_intern_project.the_banchan_and_i.dto.response.CartResponseDto;
import dw_intern_project.the_banchan_and_i.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CartService {

	private final CartRepository cartRepository;

	public List<CartResponseDto> getCart(String userSeq) {
		int totalAmount = cartRepository.totalAmount(userSeq);
		List<CartResponseDto> list = cartRepository.getCart(userSeq).stream()
				.map(cart -> CartResponseDto.of(cart, totalAmount)).collect(Collectors.toList());
		return list;
	}

	public int getCartTotalAmount(String userSeq) {
		int totalAmount = cartRepository.totalAmount(userSeq);
		return totalAmount;
	}
}
