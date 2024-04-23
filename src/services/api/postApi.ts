import { Constant } from "../../config";
import axiosClient from "./axiosClient";
import { PostType } from "../../model";

export const postApi = {
  getPosts: (data?: any): Promise<PostType[]> => {
    const url = Constant.API.POST;
    return axiosClient.get(url, { params: data });
  },
  getPostById: (id: number): Promise<PostType> => {
    const url = `${Constant.API.POST}/${id}`;
    return axiosClient.get(url);
  },
  createPost: (data: PostType) => {
    const url = Constant.API.POST;
    return axiosClient.post(url, data);
  },
  updatePost: (data: PostType) => {
    const url = `${Constant.API.POST}/${data.id}`;
    return axiosClient.patch(url, data);
  },
  deletePost: (id: number) => {
    const url = `${Constant.API.POST}/${id}`;
    return axiosClient.delete(url);
  }
};

