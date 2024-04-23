import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Constant } from "../../config";
import { UserType } from "../../model";
import { userApi } from "../api";

export const useUsers = (
  params: any,
  options?: Omit<UseQueryOptions<UserType[]>, "queryKey" | "queryFn">
) => {
  return useQuery({
    ...options,
    queryKey: [Constant.QUERY_KEY.USER.USERS, params],
    queryFn: () => userApi.getUsers(params),
  });
};