import { prisma } from "../../lib/prisma-client";
import type { ArticleContentType } from "../../routes/web/types/article";

export const updateArticle = async (
  articleContent: ArticleContentType
): Promise<ArticleContentType | { message: string }> => {
  try {
    const updatedArticle = await prisma.article.update({
      where: {
        id: articleContent.id,
      },
      data: {
        title: articleContent.title,
        img: articleContent.img,
        tag: {
          connectOrCreate: articleContent.tag.map((t) => ({
            where: { name: t },
            create: { name: t },
          })),
        },
        view: articleContent.view,
        post: new Date(articleContent.post),
        content: articleContent.content,
      },
      include: {
        tag: true,
      },
    });

    return updatedArticle;
  } catch (error) {
    console.error("Error updating article:", error);
    return { message: "failed to update article" };
  } finally {
    await prisma.$disconnect();
  }
};
