import styles from "./search-blog.module.css";
import searchIcon from "@/assets/search-icon.svg";
import { v4 as uuid } from "uuid";
import { Tag } from "@/types/tag";

export const SearchBlog = () => {
  const tags: Tag[] = [
    { python: 100 },
    { javascript: 200 },
    { typescript: 300 },
    { cat: 1000 },
  ];

  return (
    <div className={styles.search}>
      <div className={styles.search_blog}>
        <img src={searchIcon} alt="検索" className={styles.search_icon} />
        <input
          type="text"
          className={styles.search_input}
          placeholder="記事を検索..."
        />
      </div>
      <div className={styles.tags}>
        {tags.map((tag) => {
          const [key, value] = Object.entries(tag)[0];
          return (
            <div className={styles.tag} key={uuid()}>{`${key}   ${value}`}</div>
          );
        })}
      </div>
    </div>
  );
};
