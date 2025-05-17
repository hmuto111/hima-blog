import { prisma } from "../../lib/prisma-client";
import type { ArticleContentType } from "../../routes/web/types/article";
import { formatArticle, formatArticleContent } from "../../utils/formatArticle";

type GetArticleParams = {
  all?: boolean;
  id?: number;
  word?: string;
  tag?: string;
};

export const getArticle = async ({
  all,
  id,
  word,
  tag,
}: GetArticleParams): Promise<
  ArticleContentType[] | ArticleContentType | { message: string }
> => {
  try {
    const tags = await prisma.tag.findMany();
    if (all) {
      const article = await prisma.article.findMany();

      const formattedArticle: ArticleContentType[] = formatArticle(
        article,
        tags
      );

      return formattedArticle;
    }

    if (id) {
      const article = await prisma.article.findFirst({
        where: {
          id: id,
        },
      });

      if (!article) {
        return { message: `id:${id}に対応する記事が見つかりません` };
      }

      const formattedArticle: ArticleContentType = formatArticleContent(
        article,
        tags
      );

      return formattedArticle;
    }

    if (word) {
      const article = await prisma.article.findMany({
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
      });

      const formattedArticle: ArticleContentType[] = formatArticle(
        article,
        tags
      );

      return formattedArticle;
    }

    if (tag) {
      const targetTag = tags.find((t) => t.name === tag);
      const article = await prisma.article.findMany({
        where: {
          tag: {
            has: targetTag?.id,
          },
        },
      });

      const formattedArticle: ArticleContentType[] = formatArticle(
        article,
        tags
      );

      return formattedArticle;
    }

    return { message: "no article found" };
  } catch (error) {
    console.error("Error fetching article:", error);
    return { message: "failed to fetch article" };
  } finally {
    await prisma.$disconnect();
  }
};
