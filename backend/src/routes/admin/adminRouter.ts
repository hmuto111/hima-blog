import { Hono } from "hono";
import { cors } from "hono/cors";
//import { auth } from "./api/auth";
//import { article } from "./api/article";

export const adminRouter = new Hono()
  .use(
    "*",
    cors({ origin: process.env.ADMIN_URL as string, allowMethods: ["POST"] })
  )
  .basePath("/v1/admin");
//.route("/auth", auth)
//.route("/article", article)
