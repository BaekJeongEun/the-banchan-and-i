package dw_intern_project.the_banchan_and_i.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import dw_intern_project.the_banchan_and_i.dto.response.CartResponseDto;

@Mapper
public interface CartRepository {

	List<CartResponseDto> getCart(@Param("userSeq") String userSeq);

	int totalAmount(@Param("userSeq") String userSeq);
	
}
