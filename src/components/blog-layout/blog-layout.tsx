import { ReactNode } from "react";
import { Header } from "../header/header";
import { SearchBlog } from "../search-blog/search-blog";
import styles from "./blog-layout.module.css";

type Props = {
  children: ReactNode;
};

export const BlogLayout = ({ children }: Props) => {
  return (
    <div className={styles.blog_layout}>
      <Header />
      <div className={styles.content}>
        <div className={styles.main_content}>{children}</div>
        <SearchBlog />
      </div>
    </div>
  );
};
