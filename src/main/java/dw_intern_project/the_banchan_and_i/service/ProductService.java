package dw_intern_project.the_banchan_and_i.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import dw_intern_project.the_banchan_and_i.dto.response.ProductResponseDto;
import dw_intern_project.the_banchan_and_i.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService {

	private final ProductRepository productRepository;

	public List<String> getAllPbCode() {
		return productRepository.getAllPbCode();
	}

	public List<ProductResponseDto> getProductList(Pageable pageable, String categoryId) {
		int pageSize = pageable.getPageSize();
		int pageNumber = pageable.getPageNumber();
		int offset = pageNumber * pageSize;

		List<ProductResponseDto> productResonseDto = productRepository
				.getProductListWithCategory(pageSize, offset, categoryId).stream().map(ProductResponseDto::of)
				.collect(Collectors.toList());
		return productResonseDto;
	}

	public ProductResponseDto getProductDetail(String productId) {
		ProductResponseDto dto = productRepository.getProductDetail(productId);
		return ProductResponseDto.of(dto);
	}

	public List<ProductResponseDto> searchProduct(Pageable pageable, String word) {
		int pageSize = pageable.getPageSize();
		int pageNumber = pageable.getPageNumber();
		int offset = pageNumber * pageSize;
		List<ProductResponseDto> productResonseDto = productRepository.searchProduct(pageSize, offset, word).stream()
				.map(ProductResponseDto::of).collect(Collectors.toList());
		return productResonseDto;
	}

}
