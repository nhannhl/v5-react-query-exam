import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostType } from "../../model";
import { postApi } from "../api";
import { Constant } from "../../config";

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [Constant.QUERY_KEY.POST.UPDATE_POST],
    mutationFn: (data: PostType) => postApi.updatePost(data),
    onSuccess: (_, variables) => {
      queryClient.refetchQueries({ queryKey: [Constant.QUERY_KEY.POST.POSTS] });
      queryClient.invalidateQueries({ queryKey: [Constant.QUERY_KEY.POST.DETAIL_POST, variables.id] });
    },
  });
};