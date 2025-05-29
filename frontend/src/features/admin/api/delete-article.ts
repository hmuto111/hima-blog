import { adminApi } from "@/lib/api-client";

export const deleteArticle = async (articleId: number) => {
  try {
    const response = await adminApi.post("/article/delete", { id: articleId });

    if (response.status !== 200) {
      throw new Error("記事の削除に失敗しました");
    }

    return response.data;
  } catch (error) {
    console.error("記事の削除に失敗しました", error);
    throw error;
  }
};
