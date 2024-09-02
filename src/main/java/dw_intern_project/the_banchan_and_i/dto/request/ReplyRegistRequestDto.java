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
public class ReplyRegistRequestDto {
	
	@NotBlank
	private String rv_seq;
	private String rv_reply;
}
