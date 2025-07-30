import { Hono } from "hono";
import {
  ArticleContent,
  ArticleList,
  TagList,
} from "../../../schema/web/article.js";
import { z } from "zod";
import type { ArticleContentType, ArticleListType } from "../types/article.js";
import { getArticle, getTags } from "../../../domain/article/getArticle.js";
import { updateArticleView } from "../../../domain/article/updateArticle.js";

const articleRouter = new Hono();

articleRouter.get("/", async (c) => {
  try {
    const articleContent = await getArticle({ all: true });
    if ("message" in articleContent) {
      return c.json({ error: articleContent.message }, 500);
    }

    if (!Array.isArray(articleContent)) {
      return c.json({ error: "Invalid article format" }, 500);
    }

    const articleList: ArticleListType = articleContent.map((article) => ({
      id: article.id,
      title: article.title,
      img: article.img,
      tag: article.tag,
      view: article.view,
      post: new Date(article.post),
    }));

    const validArticleList = ArticleList.parse(articleList);
    return c.json(validArticleList, 200);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.errors);
      return c.json({ error: "記事一覧のバリデーションに失敗しました。" }, 400);
    }
    return c.json({ error: "記事一覧の取得に失敗しました。" }, 500);
  }
});

articleRouter.get("/tag", async (c) => {
  try {
    const tags = await getTags();

    if ("message" in tags) {
      return c.json({ error: tags.message }, 500);
    }

    if (!Array.isArray(tags)) {
      return c.json({ error: "Invalid tag format" }, 500);
    }

    const tagResponse = tags.map((t) => ({ name: t.name, used: t.used }));

    const validTags = TagList.parse(tagResponse);
    return c.json(validTags, 200);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.errors);
      return c.json({ error: "タグのバリデーションに失敗しました。" }, 400);
    }
    return c.json({ error: "タグの取得に失敗しました。" }, 500);
  }
});

articleRouter.get("/:id", async (c) => {
  const articleId = parseInt(c.req.param("id"));

  try {
    const articleContent = await getArticle({ id: articleId });
    if ("message" in articleContent) {
      return c.json({ error: articleContent.message }, 500);
    }

    if (Array.isArray(articleContent)) {
      return c.json({ error: "Invalid article format" }, 500);
    }

    const validArticle = ArticleContent.parse(articleContent);

    return c.json(validArticle, 200);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.errors);
      return c.json({ error: "記事情報のバリデーションに失敗しました。" }, 400);
    }
    return c.json({ error: "対象の記事情報の取得に失敗しました。" }, 500);
  }
});

articleRouter.post("/search", async (c) => {
  const data: { word: string } | { tag: string } = await c.req.json();

  try {
    let articleContent:
      | ArticleContentType
      | {
          message: string;
        }
      | ArticleContentType[] = [];

    if ("word" in data) {
      const keywords: string[] = data.word
        .split(/[\s\u3000]+/)
        .filter((word: string) => word.trim() !== "");

      articleContent = await getArticle({ word: keywords });
    } else if ("tag" in data) {
      articleContent = await getArticle({ tag: data.tag });
    }

    if ("message" in articleContent) {
      return c.json({ error: articleContent.message }, 500);
    }

    if (!Array.isArray(articleContent)) {
      return c.json({ error: "Invalid article format" }, 500);
    }

    const articleList: ArticleListType = articleContent.map((article) => ({
      id: article.id,
      title: article.title,
      img: article.img,
      tag: article.tag,
      view: article.view,
      post: new Date(article.post),
    }));

    const validArticleList = ArticleList.parse(articleList);
    return c.json(validArticleList, 200);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.errors);
      return c.json({ error: "記事一覧のバリデーションに失敗しました。" }, 400);
    }
    return c.json({ error: "記事一覧の取得に失敗しました。" }, 500);
  }
});

articleRouter.patch("/view/:id", async (c) => {
  const id = parseInt(c.req.param("id"));

  try {
    const result = await updateArticleView(id);
    return c.json(result, 200);
  } catch (error) {
    console.error("error failed to update view");
    return c.json({ error: "対象記事の閲覧数更新に失敗しました。" }, 500);
  }
});

export default articleRouter;
