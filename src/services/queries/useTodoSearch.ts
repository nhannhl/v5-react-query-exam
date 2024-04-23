import { useQuery, QueriesOptions } from "@tanstack/react-query";
import { TodoType } from "../../model/";
import { Constant } from "../../config";
import { todoApi } from "../api";

export const useTodoSearch = (
  searchParam: any,
  options?: Omit<QueriesOptions<TodoType[]>, "queryKey" | "queryFn">,
) => {
  return useQuery({
    ...options,
    queryKey: [Constant.QUERY_KEY.TODO_SEARCH, searchParam],
    queryFn: () => todoApi.getTodos(searchParam),
    enabled: !!searchParam,
  });
};