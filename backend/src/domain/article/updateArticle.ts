import { prisma } from "../../lib/prisma-client";
import type { UpdateArticleType } from "../../routes/admin/types/article";

export const updateArticle = async (
  articleContent: UpdateArticleType
): Promise<{ message: string }> => {
  try {
    const tagIds = await Promise.all(
      articleContent.tag.map(async (tagName) => {
        const existingTag = await prisma.tag.findFirst({
          where: { name: tagName },
        });

        if (existingTag) {
          return existingTag.id;
        }

        const newTag = await prisma.tag.create({
          data: { name: tagName },
        });

        return newTag.id;
      })
    );

    const updatedArticle = await prisma.article.update({
      where: {
        id: articleContent.id,
      },
      data: {
        title: articleContent.title,
        img: articleContent.img?.name || "",
        tag: tagIds,
        content: articleContent.content,
      },
    });

    if (!updatedArticle) {
      return { message: "failed to update article" };
    }

    return { message: "successfully updated article" };
  } catch (error) {
    console.error("Error updating article:", error);
    return { message: "failed to update article" };
  }
};

export const updateArticleView = async (id: number) => {
  try {
    const result = await prisma.article.update({
      where: {
        id: id,
      },
      data: {
        view: { increment: 1 },
      },
    });

    return { message: "successfully updated article view" };
  } catch (error) {
    console.error("error updating article view:", error);
    return { message: "failed to update article view" };
  }
};
