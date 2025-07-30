import * as path from "path";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { initS3Client } from "./init-s3client";

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

  const s3Client = initS3Client();

  const bucketName = process.env.AWS_BUCKET_NAME as string;

  if (!bucketName) {
    throw new Error("AWS_BUCKET_NAME is not defined in environment variables");
  }

  const deletePromises = files.map(async (file) => {
    try {
      if (!isImageFile(file)) {
        console.warn(`削除対象のファイルは画像ではありません: ${file}`);
        return;
      }

      const s3Key = `images/${path.basename(file)}`;

      await s3Client.send(
        new DeleteObjectCommand({
          Bucket: bucketName,
          Key: s3Key,
        })
      );

      console.log(`画像を削除しました： ${file}`);
    } catch (error) {
      console.error(`画像の削除に失敗しました: ${file}\n`, error);
    }
  });

  await Promise.all(deletePromises);
  console.log("全ての画像の削除が完了しました。");
}
