import { api } from "@/lib/api-client";
import { ArticleInfo, ArticleContent } from "../types/article";
import { ResponseTag } from "@/types/tag";

export const getArticleData = async (): Promise<ArticleInfo[]> => {
  try {
    const response = await api.get(`/article`);
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Invalid response format:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching article data:", error);
    return [];
  }
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
  let articleInfo: ArticleInfo[] = [];
  try {
    if (words) {
      const response = await api.post(`/article/search`, { word: words });
      articleInfo = response.data;
    } else {
      const response = await api.post(`/article/search`, { tag: tag });
      articleInfo = response.data;
    }

    if (Array.isArray(articleInfo)) {
      return articleInfo;
    } else {
      console.error("Invalid response format:", articleInfo);
      return [];
    }
  } catch (error) {
    console.error("Error fetching article by search:", error);
    return [];
  }
};

export const getTags = async (): Promise<ResponseTag[]> => {
  try {
    const response = await api.get(`/article/tag`);

    if (!Array.isArray(response.data)) {
      console.error("Invalid response format for tags:", response.data);
      return [];
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
};
