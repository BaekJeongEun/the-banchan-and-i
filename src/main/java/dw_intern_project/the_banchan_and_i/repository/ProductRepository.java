package dw_intern_project.the_banchan_and_i.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import dw_intern_project.the_banchan_and_i.dto.response.ProductResponseDto;

@Mapper
public interface ProductRepository {

	List<String> getAllPbCode();

    List<Long> getProductId();

	List<ProductResponseDto> getProductListWithCategory(@Param("pageSize") int pageSize, @Param("offset") int offset, @Param("categoryNum") String categoryNum);

	ProductResponseDto getProductDetail(@Param("pbCode") String pbCode);

	List<ProductResponseDto> searchProduct(@Param("pageSize") int pageSize, @Param("offset") int offset, @Param("word") String word);
}
