import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getArticleContent } from "@/features/blog/api/get-article";

import { MarkdownRender } from "@/features/blog/components/markdown/markdown-render";
import { EditArticle } from "@/features/admin/components/edit-article/edit-article";
import Spinner from "@/components/spinner/spinner";

import { EditArticleType } from "@/features/admin/types/edit-article";

import styles from "@/features/admin/styles/edit.module.css";

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [article, setArticle] = useState<EditArticleType>({
    title: "",
    tag: [],
    content: "",
  });
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const id = window.location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );

  const tabs: {
    id: number;
    label: string;
  }[] = [
    { id: 0, label: "Edit" },
    { id: 1, label: "Preview" },
  ];

  const handleTab = (tabId: number) => {
    setActiveTab(tabId);
  };

  const isEdit = location.state?.isEdit || false;

  useEffect(() => {
    if (isEdit && id) {
      const fetchArticleContent = async () => {
        try {
          setIsLoading(true);
          if (!id) {
            console.error("Article ID is not defined");
            return;
          }

          const articleContent = await getArticleContent(parseInt(id));
          setArticle({
            title: articleContent.title,
            tag: articleContent.tag,
            content: articleContent.content,
          });
        } catch (error) {
          console.error("Error fetching article data:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchArticleContent();
    }
  }, [id, isEdit]);

  return (
    <div className={styles.editor}>
      <div className={styles.features_wrap}>
        <div className={styles.features}>
          <div className={styles.switch_container}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={activeTab === tab.id ? styles.active : ""}
                onClick={() => handleTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className={styles.crud_buttons}>
            {isEdit ? (
              <>
                <button>delete</button>
                <button>update</button>
              </>
            ) : (
              <button>post</button>
            )}
          </div>
        </div>
      </div>
      <div className={styles.editor_main}>
        {isLoading && <Spinner size={"large"} />}
        {tabs[activeTab].label === "Preview" ? (
          <MarkdownRender content={article.content} />
        ) : (
          <EditArticle article={article} setArticle={setArticle} />
        )}
      </div>
    </div>
  );
};

export default Edit;
