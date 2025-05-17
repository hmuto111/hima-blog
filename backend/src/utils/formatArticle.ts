import type {
  ArticleContentType,
  Article,
  Tag,
} from "../routes/web/types/article";
import { dateToString } from "./date-to-string";

export const formatArticle = (
  article: Article[],
  tags: Tag[]
): ArticleContentType[] => {
  return article.map((a) => ({
    ...a,
    tag: a.tag.map((t) => tags.find((tag) => tag.id === t)?.name as string),
    post: dateToString(a.post),
    updated: dateToString(a.updated),
  }));
};

export const formatArticleContent = (article: Article, tags: Tag[]) => {
  const formattedArticleContent = {
    ...article,
    tag: article.tag.map(
      (t) => tags.find((tag) => tag.id === t)?.name as string
    ),
    post: dateToString(article.post),
    updated: dateToString(article.updated),
  };
  return formattedArticleContent;
};
