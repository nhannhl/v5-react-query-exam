import axiosClient from "./axiosClient";
import { Constant } from '../../config';

export const productApi = {
  getProducts: () => {
    const url = Constant.API.PRODUCT;
    return axiosClient.get(url);
  },
  getProduct: (id: string) => {
    const url = `${Constant.API.PRODUCT}/${id}`;
    return axiosClient.get(url);
  },
  createProduct: (data: any) => {
    const url = Constant.API.PRODUCT;
    return axiosClient.put(url, data);
  },
  deleteProduct: (id: string) => {
    const url = `${Constant.API.PRODUCT}/${id}`;
    return axiosClient.delete(url);
  },
  updateProduct: (id: number, data: any) => {
    const url = `${Constant.API.PRODUCT}/${id}`;
    return axiosClient.patch(url, data);
  }
}