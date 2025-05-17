import type {
  ArticleContentType,
  Article,
  Tag,
} from "../routes/web/types/article";
import { dateToString } from "./date-to-string";

const transformArticle = (
  article: Article,
  tags: Tag[]
): ArticleContentType => ({
  ...article,
  tag: article.tag.map((t) => tags.find((tag) => tag.id === t)?.name as string),
  post: dateToString(article.post),
  updated: dateToString(article.updated),
});

export const formatArticle = (
  article: Article[],
  tags: Tag[]
): ArticleContentType[] => {
  return article.map((a) => transformArticle(a, tags));
};

export const formatArticleContent = (
  article: Article,
  tags: Tag[]
): ArticleContentType => {
  return transformArticle(article, tags);
};
