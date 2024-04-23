import { useInfiniteQuery } from "@tanstack/react-query";
import { commentApi } from "../api";
import { Constant } from "../../config";

export const useCommentInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: [Constant.QUERY_KEY.COMMENT],
    queryFn: ({pageParam}) => commentApi.getComments(pageParam, 50),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => lastPage.length === 0 ? undefined : lastPageParam + 1,
    getPreviousPageParam: (_, __, firstPageParam) => firstPageParam <= 1 ? undefined : firstPageParam - 1,
  });
}

