import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import styles from "./card.module.css";
import { ArticleInfo } from "../../types/article";
import HimajinLogo from "@/assets/himajin-logo.png";
import { v4 as uuid } from "uuid";

type Props = {
  isEdit?: boolean;
  path: string;
  article: ArticleInfo;
};

export const Card = ({ isEdit, path, article }: Props) => {
  const [hiddenTags, setHiddenTags] = useState(0);
  const [hiddenTagsList, setHiddenTagsList] = useState<string[]>([]);
  const tagsContainerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<Array<HTMLDivElement | null>>([]);

  const postDate = new Date(article.post);
  const year = postDate.getFullYear();
  const month = String(postDate.getMonth() + 1).padStart(2, "0");
  const day = String(postDate.getDate()).padStart(2, "0");
  const formattedPostDate = `${year}/${month}/${day}`;

  useEffect(() => {
    const container = tagsContainerRef.current;
    if (!container) return;

    setHiddenTags(0);
    setHiddenTagsList([]);

    requestAnimationFrame(() => {
      const containerRect = container.getBoundingClientRect();
      const tagElements = container.querySelectorAll(`.${styles.tag}`);
      let hidden = 0;
      const hiddenTagsList: string[] = [];

      tagElements.forEach((tag, index) => {
        const tagRect = tag.getBoundingClientRect();
        if (tagRect.top > containerRect.bottom) {
          hidden++;
          hiddenTagsList.push(article.tag[index]);
        }
      });

      setHiddenTags(hidden);
      setHiddenTagsList(hiddenTagsList);
    });
  }, [article.tag]);

  return (
    <Link
      to={`/${path}/${article.id}`}
      className={styles.card}
      state={{ article: article, postDate: formattedPostDate, isEdit: isEdit }}
    >
      <div className={styles.article_img}>
        {article.img !== "none" ? (
          <img src={article.img} alt={article.title} />
        ) : (
          <img src={HimajinLogo} alt="Default Img" />
        )}
      </div>
      <div className={styles.detail_wrap}>
        <div className={styles.article_description}>
          <div className={styles.article_title}>{article.title}</div>
          <div className={styles.tags} ref={tagsContainerRef}>
            {article.tag.map((t, index) => (
              <div
                key={uuid()}
                className={styles.tag}
                ref={(el) => {
                  tagsRef.current[index] = el;
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
        <div
          className={styles.tag_over}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {hiddenTags > 0 && (
            <div className={styles.tooltip_container} tabIndex={0}>
              <span>{`... +${hiddenTags}`}</span>
              <div className={styles.tooltip}>
                {hiddenTagsList.map((tag) => (
                  <div key={uuid()} className={styles.tooltip_tag}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className={styles.article_info}>
          <div className={styles.info}>{`閲覧数  ${article.view}`}</div>
          <div className={styles.info}>{`投稿日  ${formattedPostDate}`}</div>
        </div>
      </div>
    </Link>
  );
};
