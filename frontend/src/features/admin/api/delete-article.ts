import { adminApi } from "@/lib/api-client";
import Cookies from "js-cookie";

export const deleteArticle = async (articleId: number) => {
  try {
    const token = Cookies.get("admin_token");

    if (!token) {
      throw new Error("認証トークンが見つかりません。ログインしてください。");
    }

    const response = await adminApi.delete("/article/delete", {
      data: { id: articleId },
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    if (response.status !== 200) {
      throw new Error("記事の削除に失敗しました");
    }

    return response.data;
  } catch (error) {
    console.error("記事の削除に失敗しました", error);
    throw error;
  }
};
