import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
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
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    let countupTimer: number | null = null;

    const handleArticleLogic = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (!id || isNaN(parseInt(id))) {
          throw new Error("無効な記事IDです");
        }

        const numericId = parseInt(id);
        const currentPath = `/blog/${id}`;

        const content = await getArticleContent(numericId);

        if (!content) {
          throw new Error("記事が見つかりません");
        }

        setArticleContent(content);

        if (!viewedArticleRef.current.has(currentPath)) {
          countupTimer = setTimeout(async () => {
            try {
              await countupArticleView(numericId);

              viewedArticleRef.current.add(currentPath);
            } catch (error) {
              console.error("ビューカウントエラー:", error);
            }
          }, 30000);
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "記事の取得に失敗しました";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    handleArticleLogic();

    return () => {
      if (countupTimer) {
        clearTimeout(countupTimer);
      }
    };
  }, [id]);

  if (isLoading) {
    return <Spinner size="large" />;
  }

  if (!articleContent) {
    return (
      <>
        <PageSEO
          title="Hima Blog"
          description="お探しの記事は存在しないか、削除された可能性があります。"
          url={`https://hima-blog.vercel.app/blog/${id}`}
        />
        <div className={styles.article_container}>
          <div className={styles.article_index}></div>
          <div>
            記事情報がないまたは取得に失敗しました{error && <p>{error}</p>}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageSEO
        title={articleContent.title}
        description={articleContent.content?.substring(0, 160)}
        url={`https://hima-blog.vercel.app/blog/${id}`}
        type="article"
        publishedTime={articleContent.post}
        modifiedTime={articleContent.updated}
        tags={articleContent.tag || []}
      />

      <div className={styles.article_container}>
        <div className={styles.article_index}>
          <TableOfContents contents={articleContent.content} />
        </div>
        <Article article={articleContent} />
      </div>
    </>
  );
};

export default Blog;
