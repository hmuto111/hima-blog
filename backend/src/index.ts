import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { webRouter } from "./routes/web/webRouter.js";
import { adminRouter } from "./routes/admin/adminRouter.js";
import { serveStatic } from "@hono/node-server/serve-static";
import { prisma } from "./lib/prisma-client.js";
import cron from "node-cron";
import { execSync } from "child_process";
import * as dotenv from "dotenv";

dotenv.config();

// 3日おき（72時間）にクリーンアップ実行
if (process.env.IS_DEVELOPMENT === "false") {
  cron.schedule("0 0 */3 * *", () => {
    console.log("クリーンアップスクリプトを実行中...");
    try {
      execSync("pnpm cleanup-unused");
      console.log("クリーンアップ完了");
    } catch (error) {
      console.error("クリーンアップエラー:", error);
    }
  });
  console.log("クリーンアップスクリプトのスケジュールを設定しました");
}

const app = new Hono()
  .route("/api", webRouter)
  .route("/admin", adminRouter)
  .use(
    "/images/*",
    serveStatic({
      root: "./public",
    })
  );

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(
      `Server is running on ${
        process.env.IS_DEVELOPMENT === "true"
          ? process.env.DEVELOP_URL
          : process.env.PRODUCTION_URL
      } (port: ${info.port})`
    );
  }
);

const cleanup = async () => {
  console.log("サーバーのシャットダウンを開始します");

  try {
    await prisma.$disconnect();
    console.log("Prismaの接続を正常に切断しました");

    console.log("サーバーのシャットダウンが完了しました");
    process.exit(0);
  } catch (error) {
    console.error("Prismaの接続を切断中にエラーが発生しました:", error);
    process.exit(1);
  }
};

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
process.on("uncaughtException", (error) => {
  console.error("未処理の例外が発生しました: ", error);
  cleanup();
});
