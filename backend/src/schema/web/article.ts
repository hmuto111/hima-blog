import { number, z } from "zod";

export const ArticleInfo = z.object({
  id: z.number(),
  title: z.string(),
  img: z.string(),
  tag: z.string().array(),
  view: z.number(),
  post: z.date(),
});

export const ArticleList = z.array(ArticleInfo);

export const Tag = z.object({
  id: z.number(),
  name: z.string(),
  used: z.number(),
});

export const ArticleContent = z.object({
  id: z.number(),
  title: z.string(),
  img: z.string(),
  tag: z.array(number()),
  view: z.number(),
  post: z.string(),
  updated: z.string(),
  content: z.string(),
});
