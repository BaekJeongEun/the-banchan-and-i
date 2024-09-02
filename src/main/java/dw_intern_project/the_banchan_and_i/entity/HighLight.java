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
@Table(name="highlight")
public class HighLight {

    @Id
    private String seq;

    @Column
    private String reiewClassificationSeq;

    @Column
    private String word;
    
    public static HighLight of(String reiewClassificationSeq, String word) {
    	return HighLight.builder()
    			.reiewClassificationSeq(reiewClassificationSeq)
    			.word(word)
    			.build();
    }
    
    public static HighLight of(String word) {
    	return HighLight.builder()
    			.word(word)
    			.build();
    }
}
