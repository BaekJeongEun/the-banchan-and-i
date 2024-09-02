package dw_intern_project.the_banchan_and_i.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class ProductReviewReplyRequestDto {

	@NotBlank
	private String seq;
	private String score;
	private String regDt;
	private String regId;
	private String productImage;
}
