export type PostArticleType = {
  title: string;
  tag: string[];
  content: string;
  img?: string;
};

export type UpdateArticleType = {
  id: number;
  title: string;
  tag: string[];
  content: string;
  img?: string;
};
