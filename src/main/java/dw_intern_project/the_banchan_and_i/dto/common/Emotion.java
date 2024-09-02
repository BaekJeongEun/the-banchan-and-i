package dw_intern_project.the_banchan_and_i.dto.common;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import dw_intern_project.the_banchan_and_i.dto.response.BarItemDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewListResponseDto;

@Component
public class Emotion {
	List<BarItemDto> barItems;
	
	public List<BarItemDto> getEmition(ReviewListResponseDto dto) {
		barItems = new ArrayList<>();
		barItems.add(new BarItemDto(EmotionEnum.POSITIVE, (int)(dto.getPositive()*100)));
		barItems.add(new BarItemDto(EmotionEnum.NEUTRAL, (int)(dto.getNeutral()*100)));
		barItems.add(new BarItemDto(EmotionEnum.NEGATIVE, (int)(dto.getNegative()*100)));
		return barItems;
	}
}
