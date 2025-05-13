import { z } from "zod";

export const ArticleInfo = z.object({
  id: z.string(),
  title: z.string(),
  img: z.string(),
  tag: z.string().array(),
  view: z.number(),
  post: z.date(),
});

export const ArticleList = z.array(ArticleInfo);

export const ArticleContent = z.object({
  id: z.string(),
  title: z.string(),
  img: z.string(),
  tag: z.string().array(),
  view: z.number(),
  post: z.string(),
  updated: z.string(),
  content: z.string(),
});
