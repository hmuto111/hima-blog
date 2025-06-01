export type PostArticleType = {
  title: string;
  tag: string[];
  content: string;
  img?: File | "";
};

export type UpdateArticleType = {
  id: number;
  title: string;
  tag: string[];
  content: string;
  img?: File | "";
};
