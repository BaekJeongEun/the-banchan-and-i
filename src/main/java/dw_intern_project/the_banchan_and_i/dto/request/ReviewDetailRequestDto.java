package dw_intern_project.the_banchan_and_i.dto.request;

import jakarta.validation.constraints.NotBlank;
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
public class ReviewDetailRequestDto {
	
	@NotBlank
	private String seq;
	@NotBlank
	private String pbCode;
	private int curIdx;
}