import { prisma } from "../../lib/prisma-client";
import type { ArticleContentType } from "../../routes/web/types/article";

export const updateArticle = async (
  articleContent: ArticleContentType
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
        img: articleContent.img,
        tag: tagIds,
        view: articleContent.view,
        post: new Date(articleContent.post),
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
  } finally {
    await prisma.$disconnect();
  }
};
