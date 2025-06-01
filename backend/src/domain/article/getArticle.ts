import { prisma } from "../../lib/prisma-client.js";
import type {
  ArticleContentType,
  Tag,
} from "../../routes/web/types/article.js";
import {
  formatArticle,
  formatArticleContent,
} from "../../utils/formatArticle.js";

type GetArticleParams = {
  all?: boolean;
  id?: number;
  word?: string | string[];
  tag?: string;
};

export const getTags = async (): Promise<Tag[] | { message: string }> => {
  try {
    const tags = await prisma.tag.findMany();
    return tags;
  } catch (error) {
    console.error("Error fetching tags:", error);
    return { message: "failed to fetch tags" };
  }
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
      const keywords = Array.isArray(word) ? word : [word];

      const queries = keywords.map((keyword) => ({
        OR: [
          {
            title: {
              contains: keyword,
              mode: "insensitive" as const,
            },
          },
          {
            content: {
              contains: keyword,
              mode: "insensitive" as const,
            },
          },
        ],
      }));

      const article = await prisma.article.findMany({
        where: {
          AND: queries,
        },
      });

      const formattedArticle: ArticleContentType[] = formatArticle(
        article,
        tags
      );

      return formattedArticle;
    }

    if (tag && typeof tag === "string") {
      const targetTag = tags.find(
        (t: { name: string; id: number; used: number }) => t.name === tag
      );
      if (targetTag) {
        const article = await prisma.article.findMany({
          where: {
            tag: {
              hasSome: [targetTag.id],
            },
          },
        });

        const formattedArticle: ArticleContentType[] = formatArticle(
          article,
          tags
        );

        return formattedArticle;
      } else {
        return { message: `tag:${tag}に対応する記事が見つかりません` };
      }
    }

    return { message: "no article found" };
  } catch (error) {
    console.error("Error fetching article:", error);
    return { message: "failed to fetch article" };
  }
};
