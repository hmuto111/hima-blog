import { Hono } from "hono";
import { cors } from "hono/cors";

export const adminRouter = new Hono()
  .use(
    "*",
    cors({ origin: process.env.ADMIN_URL as string, allowMethods: ["POST"] })
  )
  .basePath("/v1");
