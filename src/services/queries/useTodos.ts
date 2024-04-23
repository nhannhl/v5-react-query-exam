import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { TodoType } from "../../model/";
import { Constant } from "../../config";
import { todoApi } from "../api";

export const useTodos = (
  options?: Omit<UseQueryOptions<TodoType[]>, "queryKey" | "queryFn">
) => {
  return useQuery({
    ...options,
    queryKey: [Constant.QUERY_KEY.TODO],
    queryFn: () => todoApi.getTodos(),
  });
};
