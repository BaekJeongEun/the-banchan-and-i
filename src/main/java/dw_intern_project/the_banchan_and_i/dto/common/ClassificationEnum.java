package dw_intern_project.the_banchan_and_i.dto.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
public enum ClassificationEnum {

	SATISFACION("1"),
	QUALITY("2"),
	TASTE("3"),
	FRESHNESS("4"),
	AMOUNT("5"),
	PRICE("6"),
	PACKING_SHIPPING("7"),
	EXPIRATION_DATE("8");
	private String value;
}
