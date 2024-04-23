import { useCommentsPaginate } from "../../services/queries";
import { CommentType } from "../../model";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Constant } from "../../config";

const Comments = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const comments = useCommentsPaginate(page, limit);
  const queryClient = useQueryClient();

  const handleNext = () => {
    setPage(page + 1);
    queryClient.refetchQueries({ queryKey: [Constant.QUERY_KEY.COMMENT, { _page: page + 1, _limit: 5 }] });
  }

  const handleBack = () => {
    if(page > 1) {
      setPage(page - 1);
      queryClient.refetchQueries({ queryKey: [Constant.QUERY_KEY.COMMENT, { _page: page - 1, _limit: 5 }] });
    }
  }

  const handleNextLoading = () => {
    setLimit(limit + 5);
    queryClient.refetchQueries({ queryKey: [Constant.QUERY_KEY.COMMENT, { _page: page, _limit: limit + 5 }] });
  }

  return (
    <>
      {comments.isLoading && <div>Loading comments...</div>}
      {comments.isError && <div>Error: {comments.error.message}</div>}
      {comments.isPlaceholderData && <div>Loading comments isPlaceholderData...</div>}
      {comments.isFetching && <div>Loading comments isFetching...</div>}
      {comments.isRefetching && <div>Loading comments isRefetching...</div>}
      {comments.data?.map((comment: CommentType) => (
        <div key={comment.id}>
          <p>{comment.id} - {comment.postId} - {comment.email}</p>
        </div>
      ))}
      <div>
        <button onClick={handleNextLoading}>{comments.isFetching ? 'Loading...' : 'Next'}</button>
      </div>
      <div>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleBack}>Back</button>
      </div>
    </>
  );
};

export default Comments;