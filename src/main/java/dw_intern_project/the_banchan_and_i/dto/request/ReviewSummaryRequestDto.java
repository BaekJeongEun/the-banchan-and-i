package dw_intern_project.the_banchan_and_i.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

import jakarta.validation.constraints.NotBlank;

@Builder
@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class ReviewSummaryRequestDto {

	@NotBlank
	private String pbCode;
	private String pbName;
	private String summary;
	private List<ContentWithKeyword> contentsWithKeywords;

	public void print(int turn) {
		System.out.println("------------<" + turn + ">------------");
		String message = "[INPUT]\n{\n \"type\": ReviewSummary\",\n" +
				" \"pbCode\": \"" + pbCode + "\"\n" +
				" \"pbName\": \"" + pbName + "\"\n" +
				"}";

		System.out.println(message);
	}
	
}
