import { Hono } from "hono";
import { ArticleContent, ArticleList } from "../../../schema/web/article";
import { z } from "zod";
import { dateToString } from "../../../utils/date-to-string";
import type { ArticleContentType, ArticleListType } from "../types/article";
import { getArticle } from "../../../domain/article/getArticle";

const articleRouter = new Hono();

articleRouter.get("/", async (c) => {
  // const articleList = [
  //   {
  //     id: 1,
  //     title: "Pythonむずすぎ",
  //     img: "none",
  //     tag: ["python", "RAG", "javascript", "java", "typescript", "react"],
  //     view: 100,
  //     post: new Date("2025-05-03T14:03:29.000Z"),
  //   },
  //   {
  //     id: 2,
  //     title: "Pythonむずすぎ",
  //     img: "none",
  //     tag: ["python", "RAG"],
  //     view: 100,
  //     post: new Date("2025-05-03T14:03:29.000Z"),
  //   },
  // ];

  try {
    const articleContent = await getArticle(true);
    if ("message" in articleContent) {
      return c.json({ error: articleContent.message }, 500);
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

articleRouter.get("/:id", async (c) => {
  const articleId = parseInt(c.req.param("id"));
  const date = dateToString(new Date());
  const articleData = {
    id: 13,
    title: "pythonむずい",
    img: "https://~",
    tag: ["python", "javascript"],
    view: 1000,
    post: date,
    updated: date,
    content: `
# はじめに
pythonむずすぎ
# 〇〇とは
〇〇とはpythonがむずすぎるということ
# まとめ
[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
`,
  };

  try {
    const validArticle = ArticleContent.parse(articleData);

    return c.json(validArticle, 200);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.errors);
      return c.json({ error: "記事情報のバリデーションに失敗しました。" }, 400);
    }
    return c.json({ error: "対象の記事情報の取得に失敗しました。" }, 500);
  }
});

export default articleRouter;
