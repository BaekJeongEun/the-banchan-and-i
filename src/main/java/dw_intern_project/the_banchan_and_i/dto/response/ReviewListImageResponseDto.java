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
public class ReviewListImageResponseDto {
	private String type;
	private String image;
}
