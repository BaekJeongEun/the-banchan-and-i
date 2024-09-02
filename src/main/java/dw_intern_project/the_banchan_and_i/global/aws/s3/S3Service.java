package dw_intern_project.the_banchan_and_i.global.aws.s3;

import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;

import lombok.RequiredArgsConstructor;

@Configuration
@Service
@RequiredArgsConstructor
public class S3Service {

    @Value("${s3.aws.credentials.bucket}")
    private String BUCKET_NAME;
    private final AmazonS3Client amazonS3Client;
    
    public String upload(MultipartFile file) throws IOException {
        if (file != null && !file.isEmpty()) {
        	UUID uuid = UUID.randomUUID();
    		String fileName = "s3_upload_" + uuid + "_" + file.getOriginalFilename(); // 기본 파일명
            amazonS3Client.putObject(new PutObjectRequest("dw-fnb-dev-image/intern", fileName, file.getInputStream(), null)
                .withCannedAcl(CannedAccessControlList.AuthenticatedRead));
            return fileName;
        } else {
            return null;
        }
    }
}
