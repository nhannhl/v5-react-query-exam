import { PostType, UserType } from '../../model';
import { Link } from 'react-router-dom';
import { useDeletePost } from '../../services/mutations';
// import { useNavigate } from 'react-router-dom';


function PostList({
    posts, users, isLoading, isError, error 
  }: {
    posts: PostType[] | undefined,
    users: UserType[] | undefined,
    isLoading: boolean,
    isError: boolean,
    error: any
}) {
  const deletePost = useDeletePost();
  // const navigate = useNavigate();

  // if(deletePost.isSuccess) {
  //   navigate('/post');
  // }

  const handleDelete = async (id: number) => {
    await deletePost.mutateAsync(id);
  }

  if (isLoading) {
    return <div>Loading product list...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {posts && posts.map((item: PostType) => (<div key={item.id} style={{ display: 'flex', gap: '20px' }}>
        <p>
          <span>PostID: <Link to={`/post/${item.id}`}>{item.id}</Link></span>
          <span>     </span>
          <span>UserName: <Link to={`/user/${item.userId}`}>{users && users.find((user: UserType) => user.id === item.userId)?.name}</Link></span>
          <span>     </span>
          <span>PostTitle: {item.title}</span>
          <span>     </span>
          <button disabled={deletePost.isPending} onClick={() => handleDelete(item.id)}>Deleted Post</button>
        </p>
      </div>))}
    </div>
  )
};

export default PostList;