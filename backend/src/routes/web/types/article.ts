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
