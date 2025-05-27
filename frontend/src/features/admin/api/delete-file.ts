import { adminApi } from "@/lib/api-client";
import { ImageFile } from "../types/image";

export const deleteFile = async (
  fileInfos: ImageFile[]
): Promise<{ message: string }> => {
  try {
    const files = fileInfos.map((file) => file.file_name);
    const response = await adminApi.post(
      "/article/image/delete",
      { files: files },
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.status !== 200) {
      throw new Error("ファイルの削除に失敗しました");
    }

    return response.data;
  } catch (error) {
    console.error("ファイルの削除に失敗しました", error);
    throw error;
  }
};
