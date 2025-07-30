import { writeFile } from "fs/promises";
import * as path from "path";
import { v4 as uuid } from "uuid";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

type ImgData = {
  name: string;
  data: Buffer | Uint8Array;
  size: number;
  mimetype: string;
};

export async function saveImgFile(
  file: ImgData
): Promise<{ img_url: string; file_name: string }> {
  try {
    const s3Client =
      process.env.VITE_IS_DEVELOPMENT === "true"
        ? new S3Client({
            region: process.env.AWS_REGION,
            profile: process.env.AWS_PROFILE,
          })
        : new S3Client({
            region: process.env.AWS_REGION,
            credentials: {
              accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
              secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
            },
          });

    const bucketName = process.env.AWS_BUCKET_NAME as string;
    console.log(`Bucket Name: ${bucketName}`);

    if (!bucketName) {
      throw new Error(
        "AWS_BUCKET_NAME is not defined in environment variables"
      );
    }

    const fileName = `${uuid()}${path.extname(file.name).toLowerCase()}`;

    const folderPath = "images";
    const s3Key = `${folderPath}/${fileName}`;

    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: s3Key,
        Body: file.data,
        ContentType: file.mimetype,
      })
    );

    const imgUrl = `${process.env.AWS_IMAGE_STORE_URL}/${fileName}`;

    return { img_url: imgUrl, file_name: fileName };
  } catch (error) {
    console.error("画像の保存に失敗しました:", error);
    throw new Error("画像の保存に失敗しました");
  }
}
