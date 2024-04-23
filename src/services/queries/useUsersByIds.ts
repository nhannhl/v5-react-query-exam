import { useQueries, UseQueryOptions } from "@tanstack/react-query";
import { Constant } from "../../config";
import { UserType } from "../../model";
import { userApi } from "../api";

export const useUsersByIds = (
  ids: (number | undefined)[],
  options?: Omit<UseQueryOptions<UserType>, "queryKey" | "queryFn">
) => {
  return useQueries({
    queries: ids.map((id) => ({
      ...options,
      queryKey: [Constant.QUERY_KEY.USER.USERS, id],
      queryFn: () => userApi.getUserById(id!),
    })),
    combine: (result) => {
      return {
        data: result.map((item) => item.data),
        isLoading: result.some((item) => item.isLoading),
        isError: result.some((item) => item.isError),
        error: result.some((item) => item.error) ? result[0].error : undefined
      }
    }
  });
}