import { adminApi } from "@/lib/api-client";
import { ImageFile } from "../types/image";

export const addFile = async (file: File): Promise<ImageFile> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await adminApi.post("/article/image/upload", formData);

    if (response.status !== 200) {
      throw new Error("ファイルのアップロードに失敗しました");
    }

    return response.data;
  } catch (error) {
    console.error("ファイルのアップロードに失敗しました", error);
    throw error;
  }
};
