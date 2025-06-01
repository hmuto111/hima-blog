import { ReactNode } from "react";
import { Header } from "../header/header";
import { SearchBlog } from "../search-blog/search-blog";
import { ScrollTop } from "../scroll-top/scroll-top";
import styles from "./blog-layout.module.css";

type Props = {
  role?: string;
  children: ReactNode;
};

export const BlogLayout = ({ role, children }: Props) => {
  return (
    <div className={styles.blog_layout}>
      <div className={styles.header_wrap}>
        <Header role={role} />
      </div>
      <div className={styles.content}>
        <div className={styles.main_content}>{children}</div>
        <div className={styles.search_wrap}>
          <div className={styles.search_container}>
            <SearchBlog role={role} />
          </div>
          <ScrollTop />
        </div>
      </div>
    </div>
  );
};
