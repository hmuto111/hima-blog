import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "@/features/blog/components/card/card";
import Spinner from "@/components/spinner/spinner";
import { ArticleInfo } from "@/features/blog/types/article";
import { v4 as uuid } from "uuid";
import styles from "@/features/blog/styles/home.module.css";
import { getArticleData } from "@/features/blog/api/get-article";
import { PageSEO } from "@/components/SEO";

const Home = () => {
  const location = useLocation();
  const [articleData, setArticleData] = useState<ArticleInfo[]>([]);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        const response = await getArticleData();
        setArticleData(
          response.sort((a, b) => Date.parse(b.post) - Date.parse(a.post))
        );
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
        <PageSEO
          title={"ホーム"}
          description="@hmuto111が暇なときに技術的な知見や日々の学びを共有するブログサイトです."
          tags={[
            "@hmuto111",
            "ブログ",
            "技術",
            "プログラミング",
            "IT",
            "Hima Blog",
          ]}
        />

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
