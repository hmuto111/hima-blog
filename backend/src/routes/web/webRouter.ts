import { Hono } from "hono";
import { cors } from "hono/cors";
import article from "./api/article.js";

export const webRouter = new Hono()
  .use("*", cors({ origin: "*", allowMethods: ["POST"] }))
  .basePath("/v1")
  .route("/article", article);
