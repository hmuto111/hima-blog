import { prisma } from "../../lib/prisma-client";
import type { PostArticleType } from "../../routes/admin/types/article";
import type { ArticleContentType } from "../../routes/web/types/article";

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
): Promise<{ message: string }> => {
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
      newArticle = await prisma.article.create({
        data: {
          title: article.title,
          img: article.img,
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
      return { message: "failed to create article" };
    }

    return { message: "successfully created article" };
  } catch (error) {
    console.error("Error creating article:", error);
    return { message: "failed to create article" };
  }
};
