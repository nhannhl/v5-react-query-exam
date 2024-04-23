import axiosClient from "./axiosClient";
import { Constant } from '../../config';
import { TodoType } from "../../model";

export const todoApi = {
  getTodos: (data?: any): Promise<TodoType[]> => {
    const url = Constant.API.TODO;
    return axiosClient.get(url, {params: data});
  },
  getTodo: (id: string) => {
    const url = `${Constant.API.TODO}/${id}`;
    return axiosClient.get(url);
  },
  createTodo: (data: any) => {
    const url = Constant.API.TODO;
    return axiosClient.put(url, data);
  },
  deleteTodo: (id: string) => {
    const url = `${Constant.API.TODO}/${id}`;
    return axiosClient.delete(url);
  },
  updateTodo: (id: string, data: any) => {
    const url = `${Constant.API.TODO}/${id}`;
    return axiosClient.patch(url, data);
  },
}