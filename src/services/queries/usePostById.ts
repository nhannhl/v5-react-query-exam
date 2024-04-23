import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { PostType } from "../../model";
import { postApi } from "../api";
import { Constant } from "../../config";

export const usePostById = (
  id: number,
  options?: Omit<UseQueryOptions<PostType>, "queryKey" | "queryFn">
  ) => {
  return useQuery({
    ...options,
    queryKey: [Constant.QUERY_KEY.POST.DETAIL_POST, id],
    queryFn: () => postApi.getPostById(id!),
    enabled: !!id
  })
}