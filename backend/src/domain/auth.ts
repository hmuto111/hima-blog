import { prisma } from "../lib/prisma-client";
import { sign } from "hono/jwt";

export const login = async (
  username: string,
  password: string
): Promise<string> => {
  const user = await prisma.users.findUnique({
    where: { name: username },
  });

  if (!user || user.password !== password) {
    throw new Error("Invalid username or password");
  }

  const payload = {
    sub: username,
    role: "admin",
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    iat: Math.floor(Date.now() / 1000),
    nbf: Math.floor(Date.now() / 1000) - 60 * 60,
  };

  const token = await sign(payload, process.env.JWT_SECRET as string);

  return token;
};
