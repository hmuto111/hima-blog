import { adminApi } from "@/lib/api-client";
import { ImageFile } from "../types/image";
import Cookies from "js-cookie";

export const addFile = async (file: File): Promise<ImageFile> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const token = Cookies.get("admin_token");

    if (!token) {
      throw new Error("認証トークンが見つかりません。ログインしてください。");
    }

    const response = await adminApi.post("/article/image/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${token}`,
      },
    });

    if (response.status !== 200) {
      throw new Error("ファイルのアップロードに失敗しました");
    }

    return response.data;
  } catch (error) {
    console.error("ファイルのアップロードに失敗しました", error);
    throw error;
  }
};
