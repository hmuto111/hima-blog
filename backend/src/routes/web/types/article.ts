import {
  ArticleInfo,
  ArticleList,
  ArticleContent,
} from "../../../schema/web/article";
import { z } from "zod";

export type ArticleInfoType = z.infer<typeof ArticleInfo>;
export type ArticleListType = z.infer<typeof ArticleList>;
export type ArticleContentType = Omit<z.infer<typeof ArticleContent>, "tag"> & {
  tag: string[];
};

export type Article = {
  id: number;
  title: string;
  img: string;
  tag: number[];
  view: number;
  post: Date;
  updated: Date;
  content: string;
};

export type Tag = {
  id: number;
  name: string;
  used: number;
};
