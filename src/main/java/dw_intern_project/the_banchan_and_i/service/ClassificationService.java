package dw_intern_project.the_banchan_and_i.service;

import java.util.List;

import org.springframework.stereotype.Service;

import dw_intern_project.the_banchan_and_i.dto.response.ClassificationCntResponseDto;
import dw_intern_project.the_banchan_and_i.repository.ClassificationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ClassificationService {
	private final ClassificationRepository classificationRepository;

	public List<ClassificationCntResponseDto> getClassification(String pbCode) {
		return classificationRepository.getClassification(pbCode);
	}
}
