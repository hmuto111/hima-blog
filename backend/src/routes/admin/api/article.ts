import { Hono } from "hono";
import * as path from "path";

import { saveImgFile } from "../../../utils/save-img-file";
import { deleteImgFile } from "../../../utils/delete-img-file";

const adminArticleRouter = new Hono();

adminArticleRouter.post("/image/upload", async (c) => {
  try {
    const body = await c.req.parseBody();
    const file = body.file as File;

    if (!body || !file)
      return c.json({ error: "画像データが提供されていません" }, 400);

    if (!file.type.startsWith("image/"))
      return c.json({ error: "画像ファイルのみアップロード可能です" }, 400);

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const imgData = {
      name: file.name,
      data: buffer,
      size: file.size,
      mimetype: file.type,
    };

    const imgPath = await saveImgFile(imgData);
    const imgUrl = process.env.IS_DEVELOPMENT
      ? path.join(process.env.DEVELOP_URL as string, imgPath)
      : path.join(process.env.PRODUCTION_URL as string, imgPath);

    return c.json({ url: imgUrl, file_name: imgPath }, 200);
  } catch (error) {
    console.error("画像のアップロードに失敗しました:", error);
    return c.json({ error: "画像のアップロードに失敗しました" }, 500);
  }
});

adminArticleRouter.post("/image/delete", async (c) => {
  try {
    const body = await c.req.parseBody();
    const fileNamesArray = body.files as string;

    const imgFiles = JSON.parse(fileNamesArray as string) as string[];

    if (!imgFiles || imgFiles.length === 0) {
      return c.json({ error: "削除する画像ファイルが提供されていません" }, 400);
    }

    await deleteImgFile(imgFiles);
    return c.json({ message: "画像ファイルの削除が完了しました" }, 200);
  } catch (error) {
    console.error("画像の削除に失敗しました:", error);
    return c.json({ error: "画像の削除に失敗しました" }, 500);
  }
});

export default adminArticleRouter;
