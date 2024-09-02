package dw_intern_project.the_banchan_and_i.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import dw_intern_project.the_banchan_and_i.dto.common.ClassificationEnum;
import dw_intern_project.the_banchan_and_i.dto.response.ProductResponseDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewHighLightResponseDto;
import dw_intern_project.the_banchan_and_i.entity.HighLight;
import dw_intern_project.the_banchan_and_i.entity.ReviewClassification;
import dw_intern_project.the_banchan_and_i.repository.HighLightRepository;
import dw_intern_project.the_banchan_and_i.repository.ReviewClassificationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReviewClassificationService {

	private final ReviewClassificationRepository reviewClassificationRepository;
	private final HighLightRepository highLightRepository;
	private static HashMap<String, String> map;
	
	public void saveReviewClassification(ReviewHighLightResponseDto reviewHighLightResponseDto) {
		String seq = reviewHighLightResponseDto.getSeq();
		String content = reviewHighLightResponseDto.getContent();
		
		map = new HashMap<>();
		String SATISFACION = reviewHighLightResponseDto.getSATISFACION();
		String QUALITY = reviewHighLightResponseDto.getQUALITY();
		String TASTE = reviewHighLightResponseDto.getTASTE();
		String FRESHNESS = reviewHighLightResponseDto.getFRESHNESS();
		String AMOUNT = reviewHighLightResponseDto.getAMOUNT();
		String PRICE = reviewHighLightResponseDto.getPRICE();
		String PACKING_SHIPPING = reviewHighLightResponseDto.getPACKING_SHIPPING();
		String EXPIRATION_DATE = reviewHighLightResponseDto.getEXPIRATION_DATE();

		if(isNotNull(SATISFACION)) {
			map.put("SATISFACION", SATISFACION);
		}
		if(isNotNull(QUALITY)) {
			map.put("QUALITY", QUALITY);
		}	
		if(isNotNull(TASTE)) {
			map.put("TASTE", TASTE);
		}
		if(isNotNull(FRESHNESS)) {
			map.put("FRESHNESS", FRESHNESS);
		}	
		if(isNotNull(AMOUNT)) {
			map.put("AMOUNT", AMOUNT);
		}
		if(isNotNull(PRICE)) {
			map.put("PRICE", PRICE);
		}	
		if(isNotNull(PACKING_SHIPPING)) {
			map.put("PACKING_SHIPPING", PACKING_SHIPPING);
		}
		if(isNotNull(EXPIRATION_DATE)) {
			map.put("EXPIRATION_DATE", EXPIRATION_DATE);
		}
		
		for(ClassificationEnum classification : ClassificationEnum.values()) { 
			List<HighLight> highLights = new ArrayList<>();
			if(!map.containsKey(classification.name())) continue;
			String classificationSeq = classification.getValue();
			ReviewClassification dto = ReviewClassification.of(classificationSeq, seq);
			// 하이라이트 테이블에 단어 저장
			List<String> words = Arrays.stream(map.get(classification.name()).split(","))
	                .map(String::trim)
	                .collect(Collectors.toList());
			boolean success = false;
			for(String word : words) {
				if(!content.contains(word) || word.length()<=0 || word.equals("")) continue;
				success = true;
				highLights.add(HighLight.of(word));
			}
			if(success) {
				// 리뷰_분류 테이블 저장
				reviewClassificationRepository.saveReviewClassification(dto);
				String reviewClassificationSeq = dto.getSeq();
				for(int i =0; i<highLights.size(); i++) {
					HighLight highLight = highLights.get(i);
					highLight.setReiewClassificationSeq(reviewClassificationSeq);
				}
				
				if(!highLights.isEmpty()) {
					highLightRepository.savehighLight(highLights);
				}
			}
		}	
	}
	private boolean isNotNull(String str) {
		return str != null && !str.equals("null") && str.length()>0;
	}
}
