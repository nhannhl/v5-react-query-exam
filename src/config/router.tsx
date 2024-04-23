import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/defaultLayout";
import Todo from "../components/todo";
import Product from "../components/product";
import Project from "../components/project";
import Post from "../components/posts";
import PostAdd from "../components/posts/PostAdd";
import User from "../components/users";
import UserListByListId from "../components/users/UserListByListId";
import UserDetail from "../components/users/UserDetail";
import PostUpdate from "../components/posts/PostUpdate";
import Comments from "../components/comments";
import InfiniteLoad from "../components/comments/InfiniteLoad";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Todo />
      },
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "/project",
        element: <Project />
      },
      {
        path: "/post",
        element: <Post />
      },
      {
        path: "/post/add",
        element: <PostAdd />
      },
      {
        path: "/post/:id",
        element: <PostUpdate />
      },
      {
        path: "/user",
        element: <User />
      },
      {
        path: "/userbylistid",
        element: <UserListByListId />
      },
      {
        path: "/user/:id",
        element: <UserDetail />
      },
      {
        path: "/comments",
        element: <Comments />
      },
      {
        path: "/comments-infinite-load",
        element: <InfiniteLoad />
      },
    ]
  }
]);