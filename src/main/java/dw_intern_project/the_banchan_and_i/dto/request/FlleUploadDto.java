package dw_intern_project.the_banchan_and_i.dto.request;

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
public class FlleUploadDto {
	private String pathType;
    private String Allow;
    private int fileCnt;
    private String dateFolderFlag;
    private String fileExtValidText;
    private String fileAllowValidText;
    private String callFunction;
    private String callMsg;
    private String fileObj;
    private String subPathName;
}
