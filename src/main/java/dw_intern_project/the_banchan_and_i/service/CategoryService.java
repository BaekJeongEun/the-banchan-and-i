package dw_intern_project.the_banchan_and_i.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import dw_intern_project.the_banchan_and_i.dto.response.CategoryHeaderResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.CategoryResponseDto;
import dw_intern_project.the_banchan_and_i.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CategoryService {
	private final CategoryRepository categoryRepository;
	
	public CategoryResponseDto getCategory(String categoryNum) {
		return categoryRepository.getCategory(categoryNum);
	}

	public List<CategoryHeaderResponseDto> getHeaderCategory() {		
		return categoryRepository.getHeaderCategory().stream()
				.map(CategoryHeaderResponseDto::of)
				.collect(Collectors.toList());
	}
}
