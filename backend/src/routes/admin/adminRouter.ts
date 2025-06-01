import { Hono } from "hono";
import { cors } from "hono/cors";
import auth from "./api/auth.js";
import article from "./api/article.js";

export const adminRouter = new Hono()
  .use(
    "*",
    cors({
      origin: (origin) =>
        process.env.IS_DEVELOPMENT === "true"
          ? origin
          : process.env.ADMIN_ORIGIN,
      allowMethods: ["GET", "POST", "PATCH", "DELETE"],
      credentials: true,
    })
  )
  .basePath("/v1")
  .route("/article", article)
  .route("/auth", auth);
