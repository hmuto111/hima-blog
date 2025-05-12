import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { webRouter } from "./routes/web/webRouter.js";
import { adminRouter } from "./routes/admin/adminRouter.js";

const app = new Hono().route("/api", webRouter).route("/admin", adminRouter);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
