import { useState } from "react";
import { EditArticleType } from "../../types/edit-article";
import styles from "./edit-article.module.css";

type Props = {
  article: EditArticleType;
  setArticle: (article: EditArticleType) => void;
};

export const EditArticle = ({ article, setArticle }: Props) => {
  const [tagInput, setTagInput] = useState<string>(article.tag.join(" "));

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTagInput(value);
    setArticle({
      ...article,
      tag: e.target.value.split(" ").filter((tag) => tag !== ""),
    });
  };

  const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setArticle({
        ...article,
        img: file,
      });
    } catch (error) {
      console.error("ファイルのアップロードに失敗しました", error);
    }
  };

  return (
    <div className={styles.editor}>
      <input
        type="text"
        className={styles.title}
        placeholder="タイトルを入力..."
        value={article.title}
        onChange={(e) => setArticle({ ...article, title: e.target.value })}
      />
      <div>
        <p># カード画像をアップロード</p>
        <input
          type="file"
          accept="image/jpeg, image/png"
          onChange={(e) => handleAddImage(e)}
        />
      </div>
      <input
        type="text"
        className={styles.tag}
        placeholder="タグを半角スペース区切りで入力..."
        value={tagInput}
        onChange={(e) => handleTagChange(e)}
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
