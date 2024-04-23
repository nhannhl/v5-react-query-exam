import { CommentType } from "../../model";
import { useCommentInfiniteQuery } from "../../services/queries"
import { useInView } from 'react-intersection-observer'
import React from 'react'


function InfiniteLoad() {
  const commentQuery = useCommentInfiniteQuery();
  const { ref, inView } = useInView()

  React.useEffect(() => {
    if (inView) {
      commentQuery.fetchNextPage()
    }
  }, [commentQuery.fetchNextPage, inView]);
  
  return (
    <div>
      <h2>InfiniteLoad</h2>
      {commentQuery.isPending && <div>Pending...</div>}
      {commentQuery.isLoading && <div>Loading...</div>}
      
      {commentQuery.data?.pages.map((page, index) => (
        <div key={index} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {page.map((comment: CommentType) => {
            return <div key={comment.id} style={{ border: "1px solid red" }}>
              <div>{comment.id}</div>
              <div>{comment.postId}</div>
              <div>{comment.email}</div>
              <div>{comment.body}</div>
            </div>
          })}
        </div>
      ))}
      <div>
        <button ref={ref} onClick={() => commentQuery.fetchNextPage()} disabled={!commentQuery.hasNextPage || commentQuery.isFetchingNextPage}>
          {commentQuery.isFetchingNextPage
            ? "Loading more..."
            : commentQuery.hasNextPage
              ? "Load More"
              : "Nothing more to load"}
        </button>
      </div>
    </div>
  )
}

export default InfiniteLoad