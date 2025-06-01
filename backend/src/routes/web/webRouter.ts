import { Hono } from "hono";
import { cors } from "hono/cors";
import article from "./api/article.js";

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://hima-blog.vercel.app",
];

export const webRouter = new Hono()
  .use(
    "*",
    cors({
      origin: (origin) => {
        return allowedOrigins.includes(origin) ? origin : null;
      },
      allowMethods: ["GET", "POST", "PATCH"],
      credentials: false,
    })
  )
  .basePath("/v1")
  .route("/article", article);
