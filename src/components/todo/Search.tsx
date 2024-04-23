import React, { useState } from "react";

function Search(props: any) {
  const [txtSearch, setTxtSearch] = useState(props.searchObject?.completed || '');
  const [selectedItem, setSelectedItem] = useState(props.searchObject?.userId || 0);

  const handleSearch = () => {
    let searchObject = {};
    if(txtSearch) {
      searchObject = { completed: txtSearch };
    }

    if(selectedItem) {
      searchObject = { ...searchObject, userId: selectedItem };
    }
    props.handleSearch(searchObject)
  }

  return (
    <div>Search: 
      <input type="text" value={txtSearch} onChange={(e) => setTxtSearch(e.target.value)}/>
      <select value={selectedItem} onChange={(e) => setSelectedItem(parseInt(e.target.value))}>
        <option value="0">All</option>
        {props.userIds.map((userId: number) => <option key={userId} value={userId}>{userId}</option>)}
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default React.memo(Search);