import { api } from "@/lib/api-client";
import { ArticleInfo, ArticleContent } from "../types/article";

export const getArticleData = async (): Promise<ArticleInfo[]> => {
  const response = await api.get(`/article`);
  return response.data;
};

export const getArticleContent = async (
  id: string
): Promise<ArticleContent> => {
  const response = await api.get(`/article/${id}`);
  return response.data;
};
