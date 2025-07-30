import { prisma } from "../lib/prisma-client.js";
import { deleteImgFile } from "../utils/delete-img-file.js";
import { extractImageFileNames } from "../utils/extract-filename.js";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import { initS3Client } from "../utils/init-s3client.js";

dotenv.config();

async function main() {
  const s3Client = initS3Client();

  const articles = await prisma.article.findMany({
    select: { content: true },
  });

  const allUsedImages = new Set<string>();
  articles.forEach((article) => {
    extractImageFileNames(article.content).forEach((f) => allUsedImages.add(f));
  });

  const response = await s3Client.send(
    new ListObjectsV2Command({
      Bucket: process.env.AWS_BUCKET_NAME as string,
      Prefix: "images/",
    })
  );

  if (!response.Contents) {
    console.log("S3に画像が存在しません");
    return;
  }

  const files = response.Contents.filter(
    (obj) => obj.Key && obj.Key !== "images/"
  )
    .map((obj) => obj.Key!.replace("images/", ""))
    .filter((fileName) => fileName.length > 0);

  const unusedFiles = files.filter((file) => !allUsedImages.has(file));

  try {
    await deleteImgFile(unusedFiles);
  } catch (e) {
    console.error("画像の削除に失敗しました", e);
  }

  console.log("未使用の画像を削除しました:", unusedFiles);
  await prisma.$disconnect();
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
