import { useUsers, useUsersByIds } from "../../services/queries"
import { UserType } from "../../model";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Constant } from "../../config";

function UserListByListId() {
  const users = useUsers(null);
  const usersByIds = useUsersByIds((users.data ?? []).map((item: UserType) => item.id));
  const queryClient = useQueryClient();

  useEffect(() => {
    return () => {
      queryClient.getQueryCache().getAll().map(item => {
        if(item.queryKey.includes(Constant.QUERY_KEY.USER.USERS)) {
          item.reset();
        }
      });
    }
  }, [])

  if (users.isLoading || usersByIds.isLoading) {
    return <div>Loading user list...</div>;
  }

  if(users.isError || usersByIds.isError) {
    return <div>Error: {users?.error?.message || usersByIds?.error?.message}</div>;
  }

  return (
    <div>{JSON.stringify(usersByIds.data)}</div>
  )
}

export default UserListByListId