import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "@/features/blog/components/card/card";
import Spinner from "@/components/spinner/spinner";
import { ArticleInfo } from "@/features/blog/types/article";
import { v4 as uuid } from "uuid";
import styles from "@/features/blog/styles/home.module.css";
import { getArticleData } from "@/features/blog/api/get-article";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const location = useLocation();
  const [articleData, setArticleData] = useState<ArticleInfo[]>([]);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    document.title = "ホーム - Hima Blog";

    return () => {
      document.title = "Hima Blog";
    };
  }, []);

  useEffect(() => {
    if (location.state?.searchResult) {
      setArticleData(location.state.searchResult.articles);
      setMessage(location.state.searchResult.message);
      return;
    }

    setMessage("");

    const fetchArticleData = async () => {
      try {
        setIsLoading(true);
        await getArticleData().then(setArticleData);
      } catch (error) {
        console.error("Error fetching article data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticleData();
  }, [location.state?.searchResult]);

  if (isLoading) {
    return <Spinner size={"large"} />;
  } else {
    return (
      <>
        <Helmet>
          <meta
            name="description"
            content="技術的な知見や日々の学びを暇なときに共有するブログサイトです。React、TypeScript、Webプログラミングなどの記事を投稿しています。"
          />
          <meta property="og:title" content="ホーム - Hima Blog" />
          <meta
            property="og:description"
            content="技術的な知見や日々の学びを暇なときに共有するブログサイトです。"
          />
          <meta property="og:url" content="https://hima-blog.vercel.app" />
          <meta name="twitter:title" content="ホーム - Hima Blog" />
          <meta
            name="twitter:description"
            content="技術的な知見や日々の学びを暇なときに共有するブログサイトです。"
          />
        </Helmet>

        <div className={styles.container_wrap}>
          {message && <p className={styles.search_message}>{message}</p>}
          <div className={styles.card_container}>
            {articleData.map((article) => (
              <Card key={uuid()} path={"blog"} article={article} />
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default Home;
