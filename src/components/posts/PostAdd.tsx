import { SubmitHandler, useForm } from "react-hook-form";
import { useCreatePost } from "../../services/mutations";
import { PostType } from "../../model";
function PostAdd() {
  const mutationCreatePost = useCreatePost();
  const { register, handleSubmit } = useForm<PostType>();

  const handleCreatePost: SubmitHandler<PostType> = (data) => {
    mutationCreatePost.mutate(data);
  }

  return (
    <div>
      <h2>PostAdd</h2>
      <form onSubmit={handleSubmit(handleCreatePost)}>
        <input type="text" placeholder="title" {...register("title")} /><br />
        <input type="text" placeholder="body" {...register("body")} /><br />
        <input type="number" placeholder="userId" {...register("userId")} /><br />
        <button type="submit" disabled={mutationCreatePost.isPending}>{mutationCreatePost.isPending ? 'Creating...' : 'Create Post'}</button>
        <p>{mutationCreatePost.error?.message}</p>
        <p>{mutationCreatePost.isSuccess && 'Post created successfully'}</p>
      </form>
    </div>
  )
}

export default PostAdd