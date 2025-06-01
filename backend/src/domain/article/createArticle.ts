import { prisma } from "../../lib/prisma-client";
import type { PostArticleType } from "../../routes/admin/types/article";
import type { ArticleContentType } from "../../routes/web/types/article";
import { saveImgFile } from "../../utils/save-img-file";

const formatTags = async (tags: string[]) => {
  const formattedTags = await Promise.all(
    tags.map(async (tagName) => {
      // 既存のタグを検索
      const existingTag = await prisma.tag.findFirst({
        where: { name: tagName },
      });

      if (existingTag) {
        return existingTag.id;
      }

      // 新しいタグを作成
      const newTag = await prisma.tag.create({
        data: { name: tagName },
      });

      return newTag.id;
    })
  );

  return formattedTags;
};

export const createArticle = async (
  article: PostArticleType
): Promise<string> => {
  try {
    const tagId = await formatTags(article.tag);
    let newArticle: {
      tag: number[];
      id: number;
      title: string;
      img: string;
      view: number;
      post: Date;
      updated: Date;
      content: string;
    };

    if (article?.img) {
      const arrayBuffer = await article.img.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const imgData = {
        name: article.img.name,
        data: buffer,
        size: article.img.size,
        mimetype: article.img.type,
      };

      const imgInfo = await saveImgFile(imgData);
      console.log("Image saved:", imgInfo.file_name);

      newArticle = await prisma.article.create({
        data: {
          title: article.title,
          img: imgInfo.img_url || "",
          tag: tagId.map((id: number) => id),
          content: article.content,
        },
      });
    } else {
      newArticle = await prisma.article.create({
        data: {
          title: article.title,
          tag: tagId.map((id: number) => id),
          content: article.content,
        },
      });
    }

    if (!newArticle) {
      return "failed to create article";
    }

    return "successfully created article";
  } catch (error) {
    console.error("Error creating article:", error);
    return "failed to create article";
  }
};
