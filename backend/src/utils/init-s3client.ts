import { S3Client } from "@aws-sdk/client-s3";

export const initS3Client = () => {
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

  return s3Client;
};
