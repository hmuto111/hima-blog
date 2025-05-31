import * as path from "path";
import { prisma } from "../../lib/prisma-client";
import { deleteImgFile } from "../../utils/delete-img-file";

export const deleteArticle = async (id: number): Promise<string> => {
  try {
    const deletedArticle = await prisma.article.delete({
      where: {
        id: id,
      },
    });

    if (deletedArticle.img) {
      console.log("Deleting image file:", deletedArticle.img);
      await deleteImgFile([path.basename(deletedArticle.img)]);
    }

    if (!deletedArticle) {
      return "failed to delete article";
    }

    return "successfully deleted article";
  } catch (error) {
    console.error("Error deleting article:", error);
    return "failed to delete article";
  }
};
