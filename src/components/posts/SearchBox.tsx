import React, { useState } from "react";
import { UserType } from "../../model";
import { useNavigate } from "react-router-dom";

function SearchBox({handleSearch, users}: {
  handleSearch: Function,
  users: UserType[]
}) {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const handleSubmit = () => {
    if(value === 0) {
      handleSearch(null);
    } else {
      handleSearch({userId: value});
    }
  }

  return (
    <div>
      <h1>SearchBox:</h1>
      <select value={value} onChange={(event) => setValue(parseInt(event.target.value))}>
        <option value={0}>All</option>
        {users && users.map((user: UserType) => <option key={user.id} value={user.id}>{user.name}</option>)}
      </select>
      <button onClick={handleSubmit}>Search</button>
      <button onClick={() => navigate('/post/add')}>Add</button>
    </div>
  )
}

export default React.memo(SearchBox);