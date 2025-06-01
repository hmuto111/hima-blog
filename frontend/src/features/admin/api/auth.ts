import { adminApi } from "@/lib/api-client";
import CryptoJS from "crypto-js";

const hashAuthInfo = (salt: string, password: string) => {
  return CryptoJS.SHA256(salt + password).toString();
};

export const login = async (
  username: string,
  password: string
): Promise<string> => {
  try {
    const hashedPassword = hashAuthInfo(username, password);

    const response = await adminApi.post("/auth/login", {
      username: username,
      password: hashedPassword,
    });

    return response.data.token;
  } catch (error) {
    console.error("ログインエラー:", error);
    throw new Error("ログインに失敗しました。再試行してください。");
  }
};

export const verifyToken = async (token: string): Promise<boolean> => {
  try {
    const response = await adminApi.post("/auth/verify", null, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data.isValid;
  } catch (error) {
    console.error("トークン検証エラー:", error);
    return false;
  }
};
