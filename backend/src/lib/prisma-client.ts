import { PrismaClient } from "@prisma/client";

export const prisma =
  (process.env.IS_DEVELOPMENT as string) === "true"
    ? new PrismaClient({
        datasources: { db: { url: process.env.DEVELOP_DATABASE_URL } },
      })
    : new PrismaClient({
        log: ["query"],
        datasources: {
          db: {
            url: process.env.DATABASE_URL,
          },
        },
      });
