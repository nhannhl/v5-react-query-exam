import { Link } from "react-router-dom";
import { UserType } from "../../model"

function UserList({
  users, isLoading, isError, error
}: {
  users: UserType[] | undefined,
  isLoading: boolean,
  isError: boolean,
  error: any
}) {
  if (isLoading) {
    return <div>Loading user list...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {users && users.map((item: UserType) => (<div key={item.id} style={{ display: 'flex', gap: '20px' }}>
        <p>
          <span>PostID: <Link to={`/user/${item.id}`}>{item.id}</Link></span>
          <span>     </span>
          <span>UserName: {item.username}</span>
          <span>     </span>
          <span>Email: {item.email}</span>
        </p>
      </div>))}
    </div>
  )
}

export default UserList