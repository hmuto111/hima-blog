import { Hono } from "hono";
import { verify } from "hono/jwt";
import { login } from "../../../domain/auth.js";

const authRouter = new Hono();

authRouter.post("/login", async (c) => {
  try {
    const { username, password } = await c.req.json();

    if (!username || !password) {
      return c.json({ error: "ユーザー名とパスワードを提供してください" }, 400);
    }

    const token = await login(username, password);

    if (token) {
      console.log("ログイン成功:", username);
      return c.json({ token: token, message: "ログイン成功" }, 200);
    }
  } catch (error) {
    console.error("ログインエラー:", error);
    return c.json({ error: "認証に失敗しました" }, 401);
  }
});

authRouter.post("/verify", async (c) => {
  const token = c.req.header("Authorization");
  if (!token) {
    return c.json({ error: "トークンが提供されていません" }, 401);
  }

  try {
    const decoded = await verify(token, process.env.JWT_SECRET as string);

    if (!decoded) {
      return c.json({ isValid: false, error: "トークンが無効です" }, 401);
    }

    return c.json({ isValid: true, user: decoded }, 200);
  } catch (error) {
    console.error("トークン検証エラー:", error);
    return c.json({ isValid: false, error: "トークンが無効です" }, 401);
  }
});

export default authRouter;
