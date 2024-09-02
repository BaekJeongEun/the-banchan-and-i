package dw_intern_project.the_banchan_and_i.global.naver;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class KoreanSpellChecker {
	private static final String BASE_URL = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=맞춤법검사기"; // 맞춤법 URL

	public static String check() throws IOException {
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> response = restTemplate.getForEntity(BASE_URL, String.class);
		String responseBody = response.getBody();
		String passportKey = extractPassportKey(responseBody);

		return passportKey != null ? decodeURIComponent(passportKey) : null;
	}

	private static String extractPassportKey(String responseBody) {
		if (responseBody != null) {
			String regex = "passportKey=([a-zA-Z0-9]+)";
			java.util.regex.Pattern pattern = java.util.regex.Pattern.compile(regex);
			java.util.regex.Matcher matcher = pattern.matcher(responseBody);
			if (matcher.find()) {
				return matcher.group(1);
			}
		}
		return null;
	}

	private static String decodeURIComponent(String encodedString) {
		try {
			return java.net.URLDecoder.decode(encodedString, "UTF-8");
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
