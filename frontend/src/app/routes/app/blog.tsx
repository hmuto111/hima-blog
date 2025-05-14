import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { ArticleInfo, ArticleContent } from "@/features/blog/types/article";
import { Article } from "@/features/blog/components/article/article";
import { TableOfContents } from "@/features/blog/components/table-of-contents/table-of-contents";
import styles from "@/features/blog/styles/blog.module.css";
import { getArticleContent } from "@/features/blog/api/get-article";

const Blog = () => {
  const [articleContent, setArticleContent] = useState<ArticleContent>();
  const location = useLocation();
  const article = location.state?.article as ArticleInfo;

  useEffect(() => {
    const fetchArticleContent = async () => {
      try {
        await getArticleContent(article.id).then(setArticleContent);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };

    fetchArticleContent();
  }, [article]);

  if (article && articleContent) {
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
        <div className={styles.article_index}>aaa</div>
        <div>記事情報がないまたは取得に失敗しました</div>
      </div>
    );
  }
};

export default Blog;
