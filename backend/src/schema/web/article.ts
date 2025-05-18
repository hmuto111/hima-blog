import { z } from "zod";

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
  name: z.string(),
  used: z.number(),
});

export const TagList = z.array(Tag);

export const ArticleContent = z.object({
  id: z.number(),
  title: z.string(),
  img: z.string(),
  tag: z.number().or(z.string()).array(),
  view: z.number(),
  post: z.string(),
  updated: z.string(),
  content: z.string(),
});
