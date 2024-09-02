package dw_intern_project.the_banchan_and_i.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="product")
public class Product {

    @Id
    private String pbCode;

    @Column
    private String name;

    @Column
    private Integer price;

    @Column
    private String imgCode;
    
    @Column
    private String imgNum;
    
    @Column
    private String imgText;
    
    @Column
    private String soldOut;
}
