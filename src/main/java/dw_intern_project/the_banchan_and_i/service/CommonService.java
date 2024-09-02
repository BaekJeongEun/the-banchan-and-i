package dw_intern_project.the_banchan_and_i.service;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import dw_intern_project.the_banchan_and_i.dto.response.FileUploadResponseDto;
import dw_intern_project.the_banchan_and_i.global.aws.s3.S3Service;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CommonService {

	private final S3Service s3Service;

	public ResponseEntity<Map<String, Object>> uploadProcJson(MultipartFile upload, int fileCnt,
			HttpServletRequest req) {
		String path = req.getServletContext().getRealPath("") + "images/upload/";
		File folder = new File(path);
		if (!folder.exists()) {
			folder.mkdirs();
		}
		UUID uuid = UUID.randomUUID();
		String fileName = uuid + "_" + upload.getOriginalFilename(); // 기본 파일명

		Map<String, Object> response = new HashMap<>();
		try {
			fileName = s3Service.upload(upload);
			response.put("data", FileUploadResponseDto.of(upload.getOriginalFilename(), fileName, "", upload, fileCnt));
		} catch (IllegalStateException | IOException e) { // S3 업로드 실해하면 로컬 서버에 저장
			File filePath = new File(path, fileName);
			try {
				upload.transferTo(filePath);
				response.put("statusText", "success");
				response.put("data", FileUploadResponseDto.of(upload.getOriginalFilename(), fileName, "/images/upload/",
						upload, fileCnt));
			} catch (IllegalStateException e1) {
				e.printStackTrace();
				response.put("statusText", "fail");
				e1.printStackTrace();
			} catch (IOException e1) {
				e.printStackTrace();
				response.put("statusText", "fail");
				e1.printStackTrace();
			}
		}
		return ResponseEntity.ok(response);
	}

}
