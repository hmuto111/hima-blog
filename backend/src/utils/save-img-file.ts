import { writeFile } from "fs/promises";
import * as path from "path";
import { v4 as uuid } from "uuid";

type ImgData = {
  name: string;
  data: Buffer | Uint8Array;
  size: number;
  mimetype: string;
};

export async function saveImgFile(file: ImgData): Promise<string> {
  try {
    const uploadDir = path.join("public", "images");

    const uniqueFileName = `${uuid()}${path.extname(file.name).toLowerCase()}`;
    const filePath = path.join(uploadDir, uniqueFileName).replace(/\s+/g, "_");
    await writeFile(filePath, file.data);

    console.log(`画像を保存しました： ${filePath}`);

    const relativePath = filePath.replace(/^.*?public/, "");
    return relativePath;
  } catch (error) {
    console.error("画像の保存に失敗しました:", error);
    throw new Error("画像の保存に失敗しました");
  }
}
