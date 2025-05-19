import { prisma } from "../../lib/prisma-client";
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
  articleContent: ArticleContentType
): Promise<{ message: string }> => {
  try {
    const tagId = await formatTags(articleContent.tag);
    const article = await prisma.article.create({
      data: {
        title: articleContent.title,
        img: articleContent.img,
        tag: tagId.map((id: number) => id),
        view: articleContent.view,
        post: new Date(articleContent.post),
        content: articleContent.content,
      },
    });

    if (!article) {
      return { message: "failed to create article" };
    }

    return { message: "successfully created article" };
  } catch (error) {
    console.error("Error creating article:", error);
    return { message: "failed to create article" };
  }
};
