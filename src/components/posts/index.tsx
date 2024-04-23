import SearchBox from "./SearchBox";
import PostList from "./PostList";
import { usePosts, useUsers } from "../../services/queries";
import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
// import { Constant } from "../../config";

function Post() {
  const [searchObject, setSearchObject] = useState(null);
  const posts = usePosts(searchObject);
  const users = useUsers(null);

  // const queryClient = useQueryClient();

  // useEffect(() => {
  //   if(searchObject) {
  //     console.log(queryClient.getQueryData([Constant.QUERY_KEY.POST.POSTS, searchObject]));
  //     console.log(queryClient.getQueryState([Constant.QUERY_KEY.POST.POSTS, searchObject]));
  //   }
    
  // }, [searchObject]);

  return (
    <div>
      <h3>Post list</h3>
      <SearchBox handleSearch={setSearchObject} users={users.data || []}/>
      <PostList 
        posts={posts.data} 
        users={users.data}
        isLoading={posts.isLoading || users.isLoading} 
        isError={posts.isError || users.isError} 
        error={posts.error || users.error} />
    </div>
  )
}

export default Post;