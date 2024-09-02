package dw_intern_project.the_banchan_and_i.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="review")
public class Review {

    @Id
    private String seq;

    @Column
    private String pbCode;

    @Column
    private String content;

    @Column
    private Integer score;

    @Column
    private String bestYn;

    @Column
    private String type;

    @Column
    private String regDt;

    @Column
    private String regId;

    @Column
    private String keyword;

    @Column
    private String replyStatus;
    
    public static Review of(String seq, String content) {
    	return Review.builder().seq(seq).content(content).build();
    }
}
