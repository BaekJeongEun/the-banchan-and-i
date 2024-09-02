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
@Table(name="review_reply")
public class ReviewReply {

    @Id
    private String reviewSeq;

    @Column
    private String reply;

    @Column
    private String peakEmotion;

    @Column
    private Double positive;

    @Column
    private Double neutral;

    @Column
    private Double negative;
}
