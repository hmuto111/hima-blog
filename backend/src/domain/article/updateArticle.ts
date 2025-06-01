import { prisma } from "../../lib/prisma-client.js";
import type { UpdateArticleType } from "../../routes/admin/types/article.js";
import { saveImgFile } from "../../utils/save-img-file.js";

export const updateArticle = async (
  articleContent: UpdateArticleType
): Promise<string> => {
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

    let udArticle: {
      tag: number[];
      id: number;
      title: string;
      img: string;
      view: number;
      post: Date;
      updated: Date;
      content: string;
    };

    if (articleContent?.img) {
      const arrayBuffer = await articleContent.img.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const imgData = {
        name: articleContent.img.name,
        data: buffer,
        size: articleContent.img.size,
        mimetype: articleContent.img.type,
      };

      const imgInfo = await saveImgFile(imgData);
      console.log("Image saved:", imgInfo.file_name);

      udArticle = await prisma.article.update({
        where: {
          id: articleContent.id,
        },
        data: {
          title: articleContent.title,
          img: imgInfo.img_url || "",
          tag: tagIds,
          content: articleContent.content,
        },
      });
    } else {
      udArticle = await prisma.article.update({
        where: {
          id: articleContent.id,
        },
        data: {
          title: articleContent.title,
          tag: tagIds,
          content: articleContent.content,
        },
      });
    }

    if (!udArticle) {
      return "failed to update article";
    }

    return "successfully updated article";
  } catch (error) {
    console.error("Error updating article:", error);
    return "failed to update article";
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

    if (!result) {
      return { message: "failed to update article view" };
    }

    return { message: "successfully updated article view" };
  } catch (error) {
    console.error("error updating article view:", error);
    return { message: "failed to update article view" };
  }
};
