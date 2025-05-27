import { Hono } from "hono";
import { cors } from "hono/cors";
//import { auth } from "./api/auth";
import article from "./api/article";

export const adminRouter = new Hono()
  .use(
    "*",
    cors({
      // 開発用設定
      origin: (origin) => origin,
      allowMethods: ["GET", "POST", "PATCH", "DELETE"],
      credentials: true,
    })
  )
  .basePath("/v1")
  .route("/article", article);
//.route("/auth", auth)
