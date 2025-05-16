import { prisma } from "../../lib/prisma-client";
import type { ArticleContentType } from "../../routes/web/types/article";

export const deleteArticle = async (
  id: number
): Promise<ArticleContentType | { message: string }> => {
  try {
    const deletedArticle = await prisma.article.deleteOne({
      where: {
        id: id,
      },
    });

    return deletedArticle;
  } catch (error) {
    console.error("Error deleting article:", error);
    return { message: "failed to delete article" };
  } finally {
    await prisma.$disconnect();
  }
};
