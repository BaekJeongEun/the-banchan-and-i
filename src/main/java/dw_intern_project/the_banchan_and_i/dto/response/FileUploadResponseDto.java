package dw_intern_project.the_banchan_and_i.dto.response;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

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
public class FileUploadResponseDto {

	private int fileCnt;
	private String fileObj;
	private String savefolder;
	private String domain;
	private String webpath;
	private String filename;
	private String originalfilename;
	private String filesize;
	private String contenttype;
	private String errorMsg;
	
	public static FileUploadResponseDto of(String originalfilename, String filename, String filepath, MultipartFile file, int fileCnt) throws IOException {
		return FileUploadResponseDto.builder()
				.fileCnt(fileCnt)
				.fileObj("reviewFile")
				.savefolder(filepath)
				.domain("")
				.webpath("")
				.filename(filename)
				.originalfilename(originalfilename)
				.filesize("")
				.contenttype(file.getContentType())
				.errorMsg(null)
				.build();
	}
}
