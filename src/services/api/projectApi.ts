import axiosClient from "./axiosClient";
import { Constant } from '../../config';

export const projectApi = {
  getProjects: () => {
    const url = Constant.API.PROJECT;
    return axiosClient.get(url);
  },
  getProject: (id: string) => {
    const url = `${Constant.API.PROJECT}/${id}`;
    return axiosClient.get(url);
  },
  createProject: (data: any) => {
    const url = Constant.API.PROJECT;
    return axiosClient.put(url, data);
  },
  deleteProject: (id: string) => {
    const url = `${Constant.API.PROJECT}/${id}`;
    return axiosClient.delete(url);
  },
  updateProject: (id: string, data: any) => {
    const url = `${Constant.API.PROJECT}/${id}`;
    return axiosClient.patch(url, data);
  }
}