import { usePostById } from "../../services/queries";
import { useUpdatePost } from "../../services/mutations";
import { Constant } from "../../config";
import { PostType } from "../../model";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

function PostUpdate() {
  const { id } = useParams();
  const post = usePostById(Number(id));
  const updatePost = useUpdatePost();
  const { register, handleSubmit, setValue } = useForm<PostType>();

  if (post.isLoading) {
    return <div>Loading Post...</div>;
  }

  if (post.isError) {
    return <div>Error: {post.error.message}</div>;
  }

  const handleUpdate: SubmitHandler<PostType> = (data) => {
    updatePost.mutate({...data, id: parseInt(id!) });
  }

  return (
    <div>
      <h2>PostUpdate</h2>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <input type="text" defaultValue={post.data?.title} placeholder="title" {...register("title")} onChange={(e) => setValue("title", e.target.value)} /><br />
        <input type="text" defaultValue={post.data?.body} placeholder="body" {...register("body")} onChange={(e) => setValue("body", e.target.value)} /><br />
        <input type="number" defaultValue={post.data?.userId} placeholder="userId" {...register("userId")} onChange={(e) => setValue("userId", parseInt(e.target.value))} /><br />
        <button type="submit" disabled={updatePost.isPending}>{updatePost.isPending ? 'Updating...' : 'Update Post'}</button>
        <p>{updatePost.error?.message}</p>
        <p>{updatePost.isSuccess && 'Post updated successfully'}</p>
      </form>
    </div>
  )
}

export default PostUpdate