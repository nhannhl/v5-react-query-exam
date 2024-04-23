import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostType } from "../../model";
import { postApi } from "../api";
import { Constant } from "../../config";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [Constant.QUERY_KEY.POST.CREATE_POST],
    mutationFn: (params: PostType) => postApi.createPost(params),
    onMutate: (variables) => {
      console.log('onMutate');
      console.log(variables);
      console.log('-----');
    },
    onError: (error, variables) => {
      console.log('onError');
      console.log(error);
      console.log(variables);
      console.log('-----');
    },
    onSuccess: (data, variables) => {
      console.log('onSuccess');
      console.log(data);
      // queryClient.refetchQueries({
      //   queryKey: [Constant.QUERY_KEY.POST.POSTS]
      // })
      console.log('-----');
    },
    onSettled: (_, error) => {
      console.log('onSettled');
      if(error) {
        console.log(error);
      }else{
        queryClient.refetchQueries({
          queryKey: [Constant.QUERY_KEY.POST.POSTS]
        })
        queryClient.invalidateQueries
      }
      console.log('-----');
    }
  })
};