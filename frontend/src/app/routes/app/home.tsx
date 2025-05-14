import { useState, useEffect } from "react";
import { Card } from "@/features/blog/components/card/card";
import { ArticleInfo } from "@/features/blog/types/article";
import { v4 as uuid } from "uuid";
import styles from "@/features/blog/styles/home.module.css";
import { getArticleData } from "@/features/blog/api/get-article";

const Home = () => {
  const [articleData, setArticleData] = useState<ArticleInfo[]>([]);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        await getArticleData().then(setArticleData);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };

    fetchArticleData();
  }, []);

  return (
    <div className={styles.container_wrap}>
      <div className={styles.card_container}>
        {articleData.map((article) => (
          <Card key={uuid()} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
