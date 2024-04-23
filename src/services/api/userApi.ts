import { Constant } from "../../config";
import axiosClient from "./axiosClient";
import { UserType } from "../../model";

export const userApi = {
  getUsers: (data?: any): Promise<UserType[]> => {
    const url = Constant.API.USER;
    return axiosClient.get(url, { params: data });
  },
  getUserById: (id: number): Promise<UserType> => {
    const url = `${Constant.API.USER}/${id}`;
    return axiosClient.get(url);
  }
};