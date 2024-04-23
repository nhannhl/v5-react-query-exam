import { CommentType } from "../../model";
import axiosClient from "./axiosClient";
import { Constant } from "../../config";

export const commentApi = {
  getComments: (_page = 1, _limit = 5): Promise<CommentType[]> => {
    const url = Constant.API.COMMENT;
    return axiosClient.get(url, { params: { _page, _limit } });
  }
};