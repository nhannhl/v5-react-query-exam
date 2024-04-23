import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Constant } from "../../config";
import { UserType } from "../../model";
import { userApi } from "../api";

export const useUserById = (
  id: number,
  options?: Omit<UseQueryOptions<UserType>, "queryKey" | "queryFn">
) => {
  return useQuery({
    ...options,
    queryKey: [Constant.QUERY_KEY.USER.USERS, id],
    queryFn: () => userApi.getUserById(id!)
  });
};