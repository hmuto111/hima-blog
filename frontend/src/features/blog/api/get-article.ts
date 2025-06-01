import { api } from "@/lib/api-client";
import { ArticleInfo, ArticleContent } from "../types/article";
import { ResponseTag } from "@/types/tag";

export const getArticleData = async (): Promise<ArticleInfo[]> => {
  const response = await api.get(`/article`);
  return response.data;
};

export const getArticleContent = async (
  id: number
): Promise<ArticleContent> => {
  const response = await api.get(`/article/${id}`);
  return response.data;
};

export const getArticleBySearch = async ({
  words,
  tag,
}: {
  words?: string;
  tag?: string;
}): Promise<ArticleInfo[]> => {
  if (words) {
    const response = await api.post(`/article/search`, { word: words });
    return response.data;
  } else {
    const response = await api.post(`/article/search`, { tag: tag });
    return response.data;
  }
};

export const getTags = async (): Promise<ResponseTag[]> => {
  const response = await api.get(`/article/tag`);
  return response.data;
};
