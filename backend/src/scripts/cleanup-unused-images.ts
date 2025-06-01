import { prisma } from "../lib/prisma-client.js";
import { deleteImgFile } from "../utils/delete-img-file.js";
import { extractImageFileNames } from "../utils/extract-filename.js";
import { readdir } from "fs/promises";
const IMAGE_DIR = "public/images";

async function main() {
  const articles = await prisma.article.findMany({
    select: { content: true },
  });

  const allUsedImages = new Set<string>();
  articles.forEach((article: { content: string }) => {
    extractImageFileNames(article.content).forEach((f) => allUsedImages.add(f));
  });

  const files = await readdir(IMAGE_DIR);

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
