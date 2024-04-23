import { useUserById } from "../../services/queries";
import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const user = useUserById(Number(id));

  if (user.isLoading) {
    return <div>Loading user...</div>;
  }

  if(user.isError) {
    return <div>Error: {user.error.message}</div>;
  }

  return (
    <div>
      <h2>User Detail</h2>
      <p>{user.data?.id}</p>
      <p>{user.data?.email}</p>
      <p>{user.data?.name}</p>
      <p>{user.data?.username}</p>
    </div>
  )
}

export default UserDetail