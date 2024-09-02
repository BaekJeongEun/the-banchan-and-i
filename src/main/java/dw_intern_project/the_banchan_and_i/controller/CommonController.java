package dw_intern_project.the_banchan_and_i.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import dw_intern_project.the_banchan_and_i.global.naver.KoreanSpellChecker;
import dw_intern_project.the_banchan_and_i.service.CommonService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@Slf4j
public class CommonController {

	private final CommonService commonService;
	private final KoreanSpellChecker koreanSpellChecker; 

	// 이미지 업로드 팝업
	@PostMapping("/common/commonFilePop.do")
	public ModelAndView filePopUp(@RequestParam(value = "fileCnt")int fileCnt) {
		ModelAndView mav = new ModelAndView("/review/file-upload-popup");
		mav.addObject("fileCnt", fileCnt);
        return mav;
	}

	// 이미지 업로드
	@PostMapping("/common/upload_proc_Json.do")
	public ResponseEntity<Map<String, Object>> uploadProcJson(@RequestPart(value = "upload") MultipartFile upload, @RequestParam(value = "fileCnt")int fileCnt, 
			HttpServletRequest req) {
		return commonService.uploadProcJson(upload, fileCnt, req);
	}

	// 네이버 맞춤법 검사기 passportkey 요청
	@GetMapping("/common/passportkey")
	public Map<String, Object> getPassPortKey() throws IOException {
		Map<String, Object> map = new HashMap<>();
		map.put("checked", koreanSpellChecker.check());
		return map;
	}
	
	@GetMapping("/display/best100.do")
	public ModelAndView getBest100() {
		ModelAndView mav = new ModelAndView("/display/best100");
		return mav;
	}
}
