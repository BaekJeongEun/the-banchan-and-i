package dw_intern_project.the_banchan_and_i.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import dw_intern_project.the_banchan_and_i.dto.request.ReplyRegistRequestDto;
import dw_intern_project.the_banchan_and_i.dto.request.ReviewReplyRequestDto;
import dw_intern_project.the_banchan_and_i.dto.response.ReviewReplyResponseDto;


@Mapper
public interface ReviewReplyRepository {

    List<ReviewReplyRequestDto> getReviewReplyRequestDto();

    void saveReviewReply(ReviewReplyResponseDto reviewReplyDto);

	void updateReply(ReplyRegistRequestDto registRequestDto);
}
