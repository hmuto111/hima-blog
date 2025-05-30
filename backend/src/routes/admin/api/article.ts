import { Hono } from "hono";

import { saveImgFile } from "../../../utils/save-img-file";
import { deleteImgFile } from "../../../utils/delete-img-file";
import type { PostArticleType, UpdateArticleType } from "../types/article";
import { createArticle } from "../../../domain/article/createArticle";
import { deleteArticle } from "../../../domain/article/deleteArticle";
import { updateArticle } from "../../../domain/article/updateArticle";

const adminArticleRouter = new Hono();

adminArticleRouter.post("/post", async (c) => {
  try {
    const form = await c.req.formData();
    const articleData: PostArticleType = {
      title: form.get("title") as string,
      tag: JSON.parse(form.get("tag") as string),
      img: form.get("img") as File | "",
      content: form.get("content") as string,
    };

    if (!articleData || !articleData.title || !articleData.content) {
      return c.json({ error: "記事のタイトルと内容は必須です" }, 400);
    }

    const res = await createArticle(articleData);
    console.log("記事が正常に保存されました:", articleData.title);

    return c.json({ message: res }, 200);
  } catch (error) {
    console.error("記事の保存に失敗しました:", error);
    return c.json({ error: "記事の保存に失敗しました" }, 500);
  }
});

adminArticleRouter.post("/delete", async (c) => {
  try {
    const { id }: { id: number } = await c.req.json();

    if (!id) {
      return c.json({ error: "記事IDが提供されていません" }, 400);
    }

    const res = await deleteArticle(id);
    console.log("記事が正常に削除されました:", id);

    return c.json({ message: res }, 200);
  } catch (error) {
    console.error("記事の削除に失敗しました:", error);
    return c.json({ error: "記事の削除に失敗しました" }, 500);
  }
});

adminArticleRouter.post("/update", async (c) => {
  try {
    const articleContent: UpdateArticleType = await c.req.json();
    if (!articleContent || !articleContent.id) {
      return c.json({ error: "記事IDと内容は必須です" }, 400);
    }

    const res = await updateArticle(articleContent);
    console.log("記事が正常に更新されました:", articleContent.title);

    return c.json({ message: res }, 200);
  } catch (error) {
    console.error("記事の更新に失敗しました:", error);
    return c.json({ error: "記事の更新に失敗しました" }, 500);
  }
});

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
    const imgUrl =
      (process.env.IS_DEVELOPMENT as string) === "true"
        ? (process.env.DEVELOP_URL as string) + imgPath
        : (process.env.PRODUCTION_URL as string) + imgPath;

    const fileName = imgPath.replace(/^.*\/images\//, "");
    return c.json({ url: imgUrl, file_name: fileName }, 200);
  } catch (error) {
    console.error("画像のアップロードに失敗しました:", error);
    return c.json({ error: "画像のアップロードに失敗しました" }, 500);
  }
});

adminArticleRouter.post("/image/delete", async (c) => {
  try {
    const body = await c.req.json();
    const fileNameList = body.files as string[];
    console.log("削除する画像ファイル:");

    if (!fileNameList || fileNameList.length === 0) {
      console.warn("削除する画像ファイルが提供されていません");
      return c.json({ error: "削除する画像ファイルが提供されていません" }, 400);
    }

    await deleteImgFile(fileNameList);
    console.log("画像ファイルの削除が完了しました:", fileNameList);
    return c.json({ message: "画像ファイルの削除が完了しました" }, 200);
  } catch (error) {
    console.error("画像の削除に失敗しました:", error);
    return c.json({ error: "画像の削除に失敗しました" }, 500);
  }
});

export default adminArticleRouter;
