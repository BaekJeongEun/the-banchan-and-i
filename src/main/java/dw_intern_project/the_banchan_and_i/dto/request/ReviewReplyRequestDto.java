package dw_intern_project.the_banchan_and_i.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewReplyRequestDto {

	@NotBlank
	private String seq;
	private String content;
	private String pbName;
	private String subCategory;

	public void print(int turn) {
		System.out.println("------------<" + turn + ">------------");
		String message = "[INPUT]\n{\n \"type\": ReviewReply\",\n" +
				" \"reviewSeq\": \"" + seq + "\"\n" +
				" \"subCategory\": \"" + subCategory + "\"\n" +
				" \"pbName\": \"" + pbName + "\"\n" +
				" \"content\": \"" + content + "\"\n" +
				"}";

		System.out.println(message);
		System.out.println();
	}

	public static ReviewReplyRequestDto of(ReviewRegistRequestDto reviewRegistRequestDto,
			ReviewReplyRequestDto subCategoryReviewReplyRequestDto) {
		return ReviewReplyRequestDto.builder()
				.seq(reviewRegistRequestDto.getReview_seq())
				.content(reviewRegistRequestDto.getRv_content())
				.pbName(reviewRegistRequestDto.getPb_name())
				.subCategory(subCategoryReviewReplyRequestDto.getSubCategory())
				.build();
	}
}
