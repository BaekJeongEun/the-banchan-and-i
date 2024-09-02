package dw_intern_project.the_banchan_and_i.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.util.List;

@Builder
@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name="review_classification")
public class ReviewClassification {

    @Id
    private String seq;

    @Column
    private String reviewSeq;

    @Column
    private String classificationSeq;
    
    public static ReviewClassification of(String classificationSeq, String reviewSeq) {
    	return ReviewClassification.builder()
    			.classificationSeq(classificationSeq)
    			.reviewSeq(reviewSeq)
    			.build();
    }
}
