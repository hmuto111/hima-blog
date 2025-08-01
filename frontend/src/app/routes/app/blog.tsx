import { useState, useEffect, useRef } from "react";
import { ArticleContent } from "@/features/blog/types/article";
import { Article } from "@/features/blog/components/article/article";
import { TableOfContents } from "@/features/blog/components/table-of-contents/table-of-contents";
import Spinner from "@/components/spinner/spinner";
import styles from "@/features/blog/styles/blog.module.css";
import { getArticleContent } from "@/features/blog/api/get-article";
import { countupArticleView } from "@/features/blog/api/countup-view";
import { PageSEO } from "@/components/SEO";

const Blog = () => {
  const [articleContent, setArticleContent] = useState<ArticleContent>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const viewedArticleRef = useRef<Set<string>>(new Set());
  const location = window.location;
  const id = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );

  useEffect(() => {
    try {
      const VIEW_COUNTUP_DELAY_MS = 30000;
      if (viewedArticleRef.current.has(location.pathname)) {
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
        viewedArticleRef.current.add(location.pathname);
      }, VIEW_COUNTUP_DELAY_MS);

      return () => clearTimeout(countupViewTimer);
    } catch (error) {
      console.error("Error counting up article view:", error);
    }
  }, [location.pathname, id]);

  useEffect(() => {
    const fetchArticleContent = async () => {
      try {
        setIsLoading(true);
        if (!id) {
          console.error("Article ID is not defined");
          return;
        }

        await getArticleContent(parseInt(id)).then(setArticleContent);
      } catch (error) {
        console.error("Error fetching article data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticleContent();
  }, [id]);

  return (
    <>
      <PageSEO
        title={
          articleContent?.title
            ? `${articleContent.title} - Hima Blog`
            : "記事を読み込み中... - Hima Blog"
        }
        description={
          articleContent?.content?.substring(0, 160) || "記事を読み込み中..."
        }
        url={`https://hima-blog.vercel.app/blog/${id}`}
        type="article"
        publishedTime={articleContent?.post}
        modifiedTime={articleContent?.updated}
        tags={articleContent?.tag || []}
      />

      {isLoading ? (
        <Spinner size="large" />
      ) : id && articleContent ? (
        <div className={styles.article_container}>
          <div className={styles.article_index}>
            <TableOfContents contents={articleContent.content} />
          </div>
          <Article article={articleContent} />
        </div>
      ) : (
        <div className={styles.article_container}>
          <div className={styles.article_index}></div>
          <div>記事情報がないまたは取得に失敗しました</div>
        </div>
      )}
    </>
  );
};

export default Blog;
