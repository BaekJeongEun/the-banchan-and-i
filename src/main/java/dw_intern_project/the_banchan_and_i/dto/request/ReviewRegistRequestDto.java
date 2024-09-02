package dw_intern_project.the_banchan_and_i.dto.request;

import java.util.List;

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
public class ReviewRegistRequestDto {
	
	@NotBlank
	private String pb_code;
	private String pb_name;
	@NotBlank
	private String review_seq;
	private int rv_score;
	private String rv_content;
	private String regId;
	private String keyword;
	private String type;
	private List<String> image;
}
