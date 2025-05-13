import { MarkdownRender } from "../markdown/markdown-render";
import styles from "./article.module.css";
import { v4 as uuid } from "uuid";
import { ArticleContent } from "../../types/article";
import { PiEyeThin } from "react-icons/pi";

type Props = {
  article: ArticleContent;
};

export const Article = ({ article }: Props) => {
  return (
    <div className={styles.article_body}>
      <div className={styles.article_header}>
        <div className={styles.article_title}>{article.title}</div>
        <div className={styles.article_tags}>
          {article.tag.map((t) => (
            <div className={styles.tag} key={uuid()}>
              {t}
            </div>
          ))}
        </div>
        <div className={styles.article_info}>
          <div className={styles.article_date}>
            <div>{`最終更新日 2025/05/05`}</div>
            <div>{`投稿日 ${article.post}`}</div>
          </div>
          <div className={styles.article_view}>
            <PiEyeThin size="1.5rem" />
            <div>{article.view}</div>
          </div>
        </div>
      </div>
      <div className={styles.article_content}>
        <MarkdownRender content={article.content} />
      </div>
    </div>
  );
};
