package dw_intern_project.the_banchan_and_i.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="review_image")
public class ReviewImage {

    @Id
    private String seq;

    @Column
    private String reviewSeq;

    @Column
    private String fileType;

    @Column
    private String filePath;
}
