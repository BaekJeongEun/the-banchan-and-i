package dw_intern_project.the_banchan_and_i.dto.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
public enum ReplyStatus {

	REPLY_NONE("01"),
	REPLY_CREATE("02"),
	REPLY_DONE("03");
	private String status;
}
