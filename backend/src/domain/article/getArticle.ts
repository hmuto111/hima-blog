import { prisma } from "../../lib/prisma-client";
import type { ArticleContentType } from "../../routes/web/types/article";

export const getArticle = async (
  all?: boolean,
  word?: string,
  tag?: string
): Promise<ArticleContentType[] | { message: string }> => {
  try {
    if (all) {
      const article: ArticleContentType[] = await prisma.article.findMany({
        include: {
          tag: true,
        },
      });

      return article;
    }

    if (word) {
      const article: ArticleContentType[] = await prisma.article.findMany({
        where: {
          OR: [
            {
              title: {
                contains: word,
                mode: "insensitive",
              },
            },
            {
              content: {
                contains: word,
                mode: "insensitive",
              },
            },
          ],
        },
        include: {
          tag: true,
        },
      });

      return article;
    }

    if (tag) {
      const article: ArticleContentType[] = await prisma.article.findMany({
        where: {
          tag: {
            some: {
              name: tag,
            },
          },
        },
        include: {
          tag: true,
        },
      });

      return article;
    }

    return { message: "no article found" };
  } catch (error) {
    console.error("Error fetching article:", error);
    return { message: "failed to fetch article" };
  } finally {
    await prisma.$disconnect();
  }
};
