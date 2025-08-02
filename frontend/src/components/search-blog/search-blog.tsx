import styles from "./search-blog.module.css";
import searchIcon from "@/assets/search-icon.svg";
import { Tag } from "@/types/tag";
import { getArticleBySearch, getTags } from "@/features/blog/api/get-article";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { paths } from "@/config/paths";

export const SearchBlog = ({
  role,
  onSearch,
}: {
  role?: string;
  onSearch?: () => void;
}) => {
  const navigate = useNavigate();
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const responseTags = await getTags();
        const tags = responseTags.map((t) => ({ [t.name]: t.used }));
        setTags(tags);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);

  const navigateToHome = async ({
    words,
    tagName,
  }: {
    words?: string;
    tagName?: string;
  }) => {
    const path = role === "admin" ? paths.admin.home.path : paths.app.home.path;
    try {
      const articles = await getArticleBySearch({ words: words, tag: tagName });
      navigate(path, {
        state: {
          searchResult: {
            articles: articles,
            message:
              articles.length > 0
                ? `${articles.length}件の記事が見つかりました`
                : "該当する記事が見つかりませんでした",
          },
        },
      });
    } catch (error) {
      console.error("Error fetching article data:", error);
      navigate(path, {
        state: {
          searchResult: {
            articles: [],
            message: "記事検索中にエラーが発生しました",
          },
        },
      });
    } finally {
      if (onSearch) {
        onSearch();
      }
    }
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const inputValue = e.currentTarget.value;
    if (!inputValue) return;

    await navigateToHome({ words: inputValue });
  };

  const handleTagClick = async (tagName: string) => {
    await navigateToHome({ tagName });
  };

  return (
    <div className={styles.search}>
      <div className={styles.search_blog}>
        <img src={searchIcon} alt="検索" className={styles.search_icon} />
        <input
          type="text"
          className={styles.search_input}
          placeholder="記事を検索..."
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
      <div className={styles.tags}>
        {tags.map((tag) => {
          const [key, value] = Object.entries(tag)[0];
          return (
            <div
              className={styles.tag}
              key={key}
              role="button"
              tabIndex={0}
              onClick={() => handleTagClick(key)}
            >{`${key}   ${value}`}</div>
          );
        })}
      </div>
    </div>
  );
};
