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
    const uploadDir = path.join(process.cwd(), "public", "images");

    const uniqueFileName = `${file.name}-${uuid()}`;
    const filePath = path.join(uploadDir, uniqueFileName);
    await writeFile(filePath, file.data);

    console.log(`画像を保存しました： ${filePath}`);

    return filePath;
  } catch (error) {
    console.error("画像の保存に失敗しました:", error);
    throw new Error("画像の保存に失敗しました");
  }
}
