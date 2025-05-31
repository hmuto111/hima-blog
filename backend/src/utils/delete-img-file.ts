import * as path from "path";
import { unlink } from "fs/promises";

const ALLOWED_IMAGE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".bmp",
  ".svg",
];

function isImageFile(fileName: string): boolean {
  const ext = path.extname(fileName).toLowerCase();
  return ALLOWED_IMAGE_EXTENSIONS.includes(ext);
}

export async function deleteImgFile(files: string[]): Promise<void> {
  if (!files || files.length === 0) {
    console.warn("削除対象のファイルがありません。");
    return;
  }

  const deletePromises = files.map(async (file) => {
    try {
      if (!isImageFile(file)) {
        console.warn(`削除対象のファイルは画像ではありません: ${file}`);
        return;
      }

      const filePath = path.join(process.cwd(), "public", "images", file);
      await unlink(filePath);
      console.log(`画像を削除しました： ${filePath}`);
    } catch (error) {
      console.error(`画像の削除に失敗しました: ${file}\n`, error);
    }
  });

  await Promise.all(deletePromises);
  console.log("全ての画像の削除が完了しました。");
}
