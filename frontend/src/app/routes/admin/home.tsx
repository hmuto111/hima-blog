import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/features/blog/components/card/card";
import Spinner from "@/components/spinner/spinner";
import { TbPencilPlus } from "react-icons/tb";
import { ArticleInfo } from "@/features/blog/types/article";
import { v4 as uuid } from "uuid";
import styles from "@/features/admin/styles/home.module.css";
import { getArticleData } from "@/features/blog/api/get-article";
import { useAuth } from "@/features/admin/hooks/useAuth";
import { paths } from "@/config/paths";

const AdminHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [articleData, setArticleData] = useState<ArticleInfo[]>([]);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useAuth();

  useEffect(() => {
    document.title = "管理者ホーム - Hima Blog";

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
      <div className={styles.container_wrap}>
        {message && <p className={styles.search_message}>{message}</p>}
        <div className={styles.content_wrap}>
          <div className={styles.card_container}>
            {articleData.map((article) => (
              <Card
                key={uuid()}
                isEdit={true}
                path={"admin/edit"}
                article={article}
              />
            ))}
          </div>
          <button
            className={styles.post_button}
            onClick={() => navigate(paths.admin.post.path)}
          >
            <TbPencilPlus size={"2rem"} color={"#777777"} />
          </button>
        </div>
      </div>
    );
  }
};

export default AdminHome;
