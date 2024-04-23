import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postApi } from "../api";
import { Constant } from "../../config";

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [Constant.QUERY_KEY.POST.DELETE_POST],
    mutationFn: (id: number) => postApi.deletePost(id!),
    onSuccess: async (_, variables) => {
      await queryClient.refetchQueries({ queryKey: [Constant.QUERY_KEY.POST.POSTS] });
  }});
}