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
@Table(name="category")
public class Category {

    @Id
    private String seq;

    @Column
    private String pbCode;

    @Column
    private String mainNum;
    
    @Column
    private String subNum;

    @Column
    private String mainCategory;

    @Column
    private String subCategory;
}
