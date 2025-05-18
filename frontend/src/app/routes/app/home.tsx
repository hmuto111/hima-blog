import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "@/features/blog/components/card/card";
import { ArticleInfo } from "@/features/blog/types/article";
import { v4 as uuid } from "uuid";
import styles from "@/features/blog/styles/home.module.css";
import { getArticleData } from "@/features/blog/api/get-article";

const Home = () => {
  const location = useLocation();
  const [articleData, setArticleData] = useState<ArticleInfo[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (location.state?.searchResult) {
      setArticleData(location.state.searchResult.articles);
      setMessage(location.state.searchResult.message);
      return;
    }

    setMessage("");

    const fetchArticleData = async () => {
      try {
        await getArticleData().then(setArticleData);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };

    fetchArticleData();
  }, [location.state?.searchResult]);

  return (
    <div className={styles.container_wrap}>
      {message && <p className={styles.search_message}>{message}</p>}
      <div className={styles.card_container}>
        {articleData.map((article) => (
          <Card key={uuid()} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
