import Cookies from "js-cookie";
import { EditArticleType } from "../types/edit-article";
import { adminApi } from "@/lib/api-client";

export const createArticle = async (article: EditArticleType) => {
  try {
    const form = new FormData();
    form.append("title", article.title);
    form.append("content", article.content);
    form.append("tag", JSON.stringify(article.tag));
    if (article.img) {
      form.append("img", article.img);
    } else {
      form.append("img", "");
    }

    const token = Cookies.get("admin_token");

    if (!token) {
      throw new Error("認証トークンが見つかりません。ログインしてください。");
    }

    const response = await adminApi.post("/article/post", form, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${token}`,
      },
    });

    if (response.status !== 200) {
      throw new Error("記事の投稿に失敗しました");
    }

    return response.data;
  } catch (error) {
    console.error("記事の投稿に失敗しました", error);
    throw error;
  }
};
