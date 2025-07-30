import { S3Client } from "@aws-sdk/client-s3";

let s3Client: S3Client | null = null;

export const initS3Client = () => {
  try {
    console.log("S3クライアントを初期化しています...");

    if (!process.env.AWS_REGION) {
      throw new Error("AWS_REGION 環境変数が設定されていません。");
    }

    if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
      throw new Error("AWS認証情報が設定されていません。");
    }

    const s3Client =
      process.env.VITE_IS_DEVELOPMENT === "true"
        ? new S3Client({
            region: process.env.AWS_REGION,
          })
        : new S3Client({
            region: process.env.AWS_REGION,
            credentials: {
              accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
              secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
            },
          });
    console.log("S3クライアントが正常に初期化されました。");

    return s3Client;
  } catch (error) {
    console.error("S3クライアント初期化エラー:", error);
    throw error;
  }
};

export const getS3Client = () => {
  if (!s3Client) {
    s3Client = initS3Client();
    if (!s3Client) {
      throw new Error("S3クライアントが初期化されていません");
    }
  }
  return s3Client;
};
