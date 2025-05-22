import { EditArticleType } from "../../types/edit-article";
import styles from "./edit-article.module.css";

type Props = {
  article: EditArticleType;
  setArticle: (article: EditArticleType) => void;
};

export const EditArticle = ({ article, setArticle }: Props) => {
  return (
    <div className={styles.editor}>
      <input
        type="text"
        className={styles.title}
        placeholder="タイトルを入力..."
        value={article.title}
        onChange={(e) => setArticle({ ...article, title: e.target.value })}
      />
      <input
        type="text"
        className={styles.tag}
        placeholder="タグを半角スペース区切りで入力..."
        value={article.tag.join(" ")}
        onChange={(e) =>
          setArticle({
            ...article,
            tag: e.target.value.split(" ").filter((tag) => tag !== ""),
          })
        }
      />
      <textarea
        className={styles.content_editor}
        placeholder="記事の内容を入力..."
        value={article.content}
        onChange={(e) => setArticle({ ...article, content: e.target.value })}
      />
    </div>
  );
};
