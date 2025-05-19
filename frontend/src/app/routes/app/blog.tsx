import { useState, useEffect, useRef } from "react";
import { ArticleContent } from "@/features/blog/types/article";
import { Article } from "@/features/blog/components/article/article";
import { TableOfContents } from "@/features/blog/components/table-of-contents/table-of-contents";
import styles from "@/features/blog/styles/blog.module.css";
import { getArticleContent } from "@/features/blog/api/get-article";
import { countupArticleView } from "@/features/blog/api/countup-view";

const Blog = () => {
  const [articleContent, setArticleContent] = useState<ArticleContent>();
  const viewedArticleRef = useRef<string[]>([]);
  const location = window.location;
  const id = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );

  useEffect(() => {
    try {
      if (viewedArticleRef.current.includes(location.pathname)) {
        console.log("Already viewed this article");
        return;
      }

      if (!id) {
        console.error("Article ID is not defined");
        return;
      }

      const countupViewTimer = setTimeout(async () => {
        const result = await countupArticleView(parseInt(id));
        console.log(result);
        viewedArticleRef.current.push(location.pathname);
      }, 30000);

      return () => clearTimeout(countupViewTimer);
    } catch (error) {
      console.error("Error counting up article view:", error);
    }
  }, [location.pathname, id]);

  useEffect(() => {
    const fetchArticleContent = async () => {
      try {
        if (!id) {
          console.error("Article ID is not defined");
          return;
        }

        await getArticleContent(parseInt(id)).then(setArticleContent);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };

    fetchArticleContent();
  }, [id]);

  if (id && articleContent) {
    return (
      <div className={styles.article_container}>
        <div className={styles.article_index}>
          <TableOfContents contents={articleContent.content} />
        </div>
        <Article article={articleContent} />
      </div>
    );
  } else {
    return (
      <div className={styles.article_container}>
        <div className={styles.article_index}></div>
        <div>記事情報がないまたは取得に失敗しました</div>
      </div>
    );
  }
};

export default Blog;
