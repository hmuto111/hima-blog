import { Link } from "react-router";
import styles from "./card.module.css";
import { Article } from "../../types/article";
import HimajinLogo from "@/assets/himajin-logo.png";

type Props = {
  article: Article;
};

export const Card = ({ article }: Props) => {
  const postDate = article.post;
  const year = postDate.getFullYear();
  const month = String(postDate.getMonth() + 1).padStart(2, "0");
  const day = String(postDate.getDate()).padStart(2, "0");
  const formattedPostDate = `${year}/${month}/${day}`;

  return (
    <Link to={`/blog/${article.id}`} className={styles.card}>
      <div className={styles.article_img}>
        {article.img !== "none" ? (
          <img src={article.img} alt={article.title} />
        ) : (
          <img src={HimajinLogo} alt="Default Img" />
        )}
      </div>
      <div className={styles.article_description}>
        <div className={styles.article_title}>{article.title}</div>
        <div className={styles.tags}>
          {article.tag.map((t) => (
            <div className={styles.tag}>{t}</div>
          ))}
        </div>
      </div>
      <div className={styles.article_info}>
        <div className={styles.info}>{`閲覧数  ${article.view}`}</div>
        <div className={styles.info}>{`投稿日  ${formattedPostDate}`}</div>
      </div>
    </Link>
  );
};
