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
public class PageResponseDto {
	private int createReplyCnt;
	private int createDoneCnt;
	private int startPage;
	private int endPage;
	private int pre;
	private int post;
	private int pageNumber;
	private int lastPage;

	public static PageResponseDto of(int createReplyCnt, int createDoneCnt, int pageNumber, int startPage, int endPage, int pre, int post, int lastPage) {
		return PageResponseDto.builder()
				.createReplyCnt(createReplyCnt)
				.createDoneCnt(createDoneCnt)
				.startPage(startPage)
				.endPage(endPage)
				.pre(pre)
				.post(post)
				.lastPage(lastPage)
				.pageNumber(pageNumber)
				.build();
	}
}
