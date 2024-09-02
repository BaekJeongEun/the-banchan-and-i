package dw_intern_project.the_banchan_and_i.dto.response;

import java.util.List;

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
public class PhotoAndVideoResponseDto {

	private String photoCnt;
	private String photoOnly;
	private String videoOnly;
	private List<PhotoAndVideoUrlResponseDto> images;

	public static PhotoAndVideoResponseDto of(PhotoAndVideoResponseDto dto) {
		return PhotoAndVideoResponseDto.builder().photoCnt(dto.getPhotoCnt()).photoOnly(dto.getPhotoOnly())
				.videoOnly(dto.getVideoOnly()).build();
	}

	public static PhotoAndVideoResponseDto of(PhotoAndVideoResponseDto dto, List<PhotoAndVideoUrlResponseDto> images) {
		String imgUrlOrigin = "https://image.thebanchan.co.kr/upload/C00001/mypage/review/250";

		images.stream().forEach((i) -> {
			String type = i.getFileType();
			String path = i.getFilePath();
			if (type.equals("20")) {
				path = path.split("\\.")[0] + ".jpg";
			}
			if (!path.startsWith("/images/upload/") && !path.startsWith("https://")) {
				path = imgUrlOrigin + path;
			}
			i.setFilePath(path);
		});
		return PhotoAndVideoResponseDto.builder().photoCnt(dto.getPhotoCnt()).photoOnly(dto.getPhotoOnly())
				.videoOnly(dto.getVideoOnly()).images(images).build();
	}
}
