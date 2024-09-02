package dw_intern_project.the_banchan_and_i.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Builder
@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class ReviewRegistDto {
	private String success;
	
	public static ReviewRegistDto of(String msg) {
		return ReviewRegistDto.builder().success(msg).build();
	}
}
