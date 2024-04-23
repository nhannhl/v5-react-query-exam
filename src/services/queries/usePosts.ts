import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Constant } from "../../config";
import { PostType } from "../../model";
import { postApi } from "../api";

export const usePosts = (
  params: any,
  options?: Omit<UseQueryOptions<PostType[]>, "queryKey" | "queryFn">
) => {
  return useQuery({
    ...options,
    queryKey: [Constant.QUERY_KEY.POST.POSTS, params],
    queryFn: () => postApi.getPosts(params),
  });
};
