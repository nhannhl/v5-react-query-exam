import { keepPreviousData, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { CommentType } from "../../model";
import { commentApi } from "../api";
import { Constant } from "../../config";

export const useCommentsPaginate = (
  _page = 1,
  _limit = 5,
  options?: Omit<UseQueryOptions<CommentType[]>, "queryKey" | "queryFn">
) => {
  return useQuery({
    ...options,
    queryKey: [Constant.QUERY_KEY.COMMENT, {_page, _limit}],
    queryFn: () => commentApi.getComments(_page, _limit),
    placeholderData: keepPreviousData,
  });
}