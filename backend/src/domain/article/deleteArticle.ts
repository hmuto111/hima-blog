import { prisma } from "../../lib/prisma-client";

export const deleteArticle = async (
  id: number
): Promise<{ message: string }> => {
  try {
    const deletedArticle = await prisma.article.delete({
      where: {
        id: id,
      },
    });

    if (!deletedArticle) {
      return { message: "failed to delete article" };
    }

    return { message: "successfully deleted article" };
  } catch (error) {
    console.error("Error deleting article:", error);
    return { message: "failed to delete article" };
  } finally {
    await prisma.$disconnect();
  }
};
