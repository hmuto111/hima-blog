import { prisma } from "../../lib/prisma-client";
import type { ArticleContentType } from "../../routes/web/types/article";

export const updateArticle = async (
  id: number
): Promise<ArticleContentType | { message: string }> => {
  try {
    const updatedArticle = await prisma.article.update({
      where: {
        id: id,
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
