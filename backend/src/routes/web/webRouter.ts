import { Hono } from "hono";
import { cors } from "hono/cors";
import article from "./api/article.js";

export const webRouter = new Hono()
  .use(
    "*",
    cors({
      // 開発用設定
      origin: (origin) => origin,
      allowMethods: ["GET"],
      credentials: true,
    })
  )
  .basePath("/v1")
  .route("/article", article);
