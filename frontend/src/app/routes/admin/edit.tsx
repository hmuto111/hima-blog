import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useBeforeUnload } from "react-router-dom";

import { getArticleContent } from "@/features/blog/api/get-article";

import { MarkdownRender } from "@/features/blog/components/markdown/markdown-render";
import { EditArticle } from "@/features/admin/components/edit-article/edit-article";
import Spinner from "@/components/spinner/spinner";
import { LuImagePlus } from "react-icons/lu";

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
  const [files, setFiles] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const message = "編集中の内容は保存されません。ページを離れますか？";

  useBeforeUnload((e) => {
    if (window.confirm(message) === false) {
      e.preventDefault();
    } else {
      //ここにアップロードして投稿や更新の確定していない画像を削除する処理を書く
    }
  });

  useEffect(() => {
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement;

      if (target.tagName === "A" || target.closest("a")) {
        if (!window.confirm(message)) {
          e.preventDefault();
        } else {
          //ここにアップロードして投稿や更新の確定していない画像を削除する処理を書く
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  });

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

  const cleanupUnusedImages = async ({
    isDelete = false,
  }: {
    isDelete: boolean;
  }) => {
    if (files.length === 0) return;

    if (!article.content) {
      if (isDelete) {
        // ここで全ての画像を削除する処理を追加
      } else {
        const unusedFiles = files.map((file) => {
          if (!article.content.includes(file)) {
            return file;
          }
        });

        if (unusedFiles.length > 0) {
          // ここで未使用の画像を削除する処理を追加
        }
      }
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("記事を削除してもよろしいですか？")) return;

    setIsSubmitting(true);
    try {
      // await deleteArticle(parseInt(id));
      // 疑似遅延
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await cleanupUnusedImages({ isDelete: true });
      navigate("/admin/home");
      alert("記事が削除されました");
    } catch (error) {
      console.error("削除に失敗しました", error);
      alert("記事の削除に失敗しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdate = async () => {
    if (!article.title || !article.content) {
      alert("タイトルとコンテンツは必須です");
      return;
    }

    if (!window.confirm("この内容で記事を更新してもよろしいですか？")) return;

    setIsSubmitting(true);
    try {
      // await updateArticle(parseInt(id), article);
      // 疑似遅延
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await cleanupUnusedImages({ isDelete: false });
      navigate("/admin/home");
      alert("記事が更新されました");
    } catch (error) {
      console.error("更新に失敗しました", error);
      alert("記事の更新に失敗しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePost = async () => {
    if (!article.title || !article.content) {
      alert("タイトルとコンテンツは必須です");
      return;
    }

    if (!window.confirm("この内容で記事を投稿してもよろしいですか？")) return;

    setIsSubmitting(true);
    try {
      // await createArticle(article);
      // 疑似遅延
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await cleanupUnusedImages({ isDelete: false });
      navigate("/admin/home");
      alert("記事が投稿されました");
    } catch (error) {
      console.error("投稿に失敗しました", error);
      alert("記事の投稿に失敗しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      // ここでファイルをアップロードする処理を追加
      // api処理でfileNameにhttpから始まるURLを設定する
      const fileName = file.name;
      setFiles((prevFiles) => [...prevFiles, fileName]);

      const imgMarkdown = `![${fileName}](${fileName})\n`;
      setArticle((prevArticle) => ({
        ...prevArticle,
        content: prevArticle.content + imgMarkdown,
      }));
    } catch (error) {
      console.error("ファイルのアップロードに失敗しました", error);
    } finally {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className={styles.editor}>
      {isSubmitting && (
        <div className={styles.loading_overlay}>
          <div className={styles.spinner_container}>
            <Spinner size="large" />
          </div>
        </div>
      )}
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
          <div className={styles.add_image_wrap}>
            <div
              className={styles.add_image}
              tabIndex={0}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                accept="image/*"
                hidden
                ref={fileInputRef}
                onChange={handleAddFile}
              />
              <LuImagePlus size={"2rem"} color={"#888888"} />
            </div>
          </div>
          <div className={styles.crud_buttons}>
            {isEdit ? (
              <>
                <button onClick={handleDelete} disabled={isSubmitting}>
                  Delete
                </button>
                <button onClick={handleUpdate} disabled={isSubmitting}>
                  Update
                </button>
              </>
            ) : (
              <button onClick={handlePost} disabled={isSubmitting}>
                Post
              </button>
            )}
          </div>
        </div>
      </div>
      {isLoading ? (
        <Spinner size={"large"} />
      ) : (
        <div className={styles.editor_main}>
          {tabs[activeTab].label === "Preview" ? (
            <MarkdownRender content={article.content} />
          ) : (
            <EditArticle article={article} setArticle={setArticle} />
          )}
        </div>
      )}
    </div>
  );
};

export default Edit;
