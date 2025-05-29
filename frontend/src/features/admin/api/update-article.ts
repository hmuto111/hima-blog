import { EditArticleType } from "../types/edit-article";
import { adminApi } from "@/lib/api-client";

export const updateArticle = async (article: EditArticleType) => {
  try {
    const response = await adminApi.post("/article/update", article);

    if (response.status !== 200) {
      throw new Error("記事の更新に失敗しました");
    }

    return response.data;
  } catch (error) {
    console.error("記事の更新に失敗しました", error);
    throw error;
  }
};
