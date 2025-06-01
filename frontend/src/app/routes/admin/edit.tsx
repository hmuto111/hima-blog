import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getArticleContent } from "@/features/blog/api/get-article";
import { addFile } from "@/features/admin/api/add-file";
import { deleteFile } from "@/features/admin/api/delete-file";
import { createArticle } from "@/features/admin/api/create-article";
import { deleteArticle } from "@/features/admin/api/delete-article";
import { updateArticle } from "@/features/admin/api/update-article";

import { MarkdownRender } from "@/features/blog/components/markdown/markdown-render";
import { EditArticle } from "@/features/admin/components/edit-article/edit-article";
import Spinner from "@/components/spinner/spinner";
import { LuImagePlus } from "react-icons/lu";

import { EditArticleType } from "@/features/admin/types/edit-article";

import styles from "@/features/admin/styles/edit.module.css";
import { ImageFile } from "@/features/admin/types/image";
import { extractImageFileNames } from "@/features/admin/utils/extract-filename";
import { paths } from "@/config/paths";
import { useAuth } from "@/features/admin/hooks/useAuth";

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [article, setArticle] = useState<EditArticleType>({
    title: "",
    tag: [],
    content: "",
  });
  const [files, setFiles] = useState<ImageFile[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const id = window.location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );

  const isEdit = location.state?.isEdit || false;

  useAuth();

  useEffect(() => {
    if (isEdit && article.title) {
      document.title = `編集: ${article.title} - Hima Blog`;
    } else if (isEdit) {
      document.title = "記事編集 - Hima Blog";
    } else {
      document.title = "新規投稿 - Hima Blog";
    }

    return () => {
      document.title = "Hima Blog";
    };
  }, [isEdit, article.title]);

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

  const cleanupUnusedImages = useCallback(
    async ({ isDelete }: { isDelete?: boolean }) => {
      try {
        if (files.length === 0) {
          console.log("画像がありません");
          return;
        }

        if (article.content) {
          if (isDelete) {
            const res = await deleteFile(files);
            if (res.message) {
              console.log("対象記事の全ての画像を削除しました");
            } else {
              console.error("画像の削除に失敗しました");
            }
          } else {
            const unusedFiles: ImageFile[] = files.filter(
              (file) => !article.content.includes(file.file_name)
            );

            if (unusedFiles.length === 0) {
              console.log("未使用の画像がありませんでした");
              return;
            }

            if (unusedFiles.length > 0) {
              const res = await deleteFile(unusedFiles);
              if (res.message) {
                console.log("未使用の画像を削除しました");
              } else {
                console.error("未使用の画像の削除に失敗しました");
              }
            }
          }
        }
      } catch (error) {
        console.error("画像のクリーンアップに失敗しました", error);
      }
    },
    [files, article.content]
  );

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
            id: articleContent.id,
            title: articleContent.title,
            tag: articleContent.tag,
            content: articleContent.content,
          });
          const extractedFiles = extractImageFileNames(articleContent.content);
          setFiles((prevfiles) => [...prevfiles, ...extractedFiles]);
        } catch (error) {
          console.error("Error fetching article data:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchArticleContent();
    }
  }, [id, isEdit]);

  const handleDelete = async () => {
    if (!window.confirm("記事を削除してもよろしいですか？")) return;

    setIsSubmitting(true);
    try {
      const res = await deleteArticle(parseInt(id));
      await cleanupUnusedImages({ isDelete: true });
      navigate(paths.admin.home.getHref());
      alert(res.message);
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
      const res = await updateArticle(article);
      await cleanupUnusedImages({ isDelete: false });
      navigate(paths.admin.home.getHref());
      alert(res.message);
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
      const res = await createArticle(article);
      await cleanupUnusedImages({ isDelete: false });
      navigate(paths.admin.home.getHref());
      alert(res.message);
    } catch (error) {
      console.error("投稿に失敗しました", error);
      alert("記事の投稿に失敗しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const fileInfo = await addFile(file);
      setFiles((prevFiles) => [...prevFiles, fileInfo]);

      const imgMarkdown = `![${fileInfo.url}](${fileInfo.url})\n`;
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
