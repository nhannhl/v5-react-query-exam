import { useUsers } from "../../services/queries";
import UserList from "./UserList";

function index() {
  const users = useUsers(null);
  return (
    <div>
      <h2>User List</h2>
      <UserList 
        users={users.data} 
        isLoading={users.isLoading} 
        isError={users.isError} 
        error={users.error}
      />
    </div>
  )
}

export default index