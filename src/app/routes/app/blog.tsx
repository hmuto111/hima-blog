import { useLocation } from "react-router";
import { ArticleInfo, ArticleContent } from "@/features/blog/types/article";
import { Article } from "@/features/blog/components/article/article";
import styles from "@/features/blog/styles/blog.module.css";

const Blog = () => {
  const location = useLocation();
  const article = location.state?.article as ArticleInfo;
  const postDate = location.state?.postDate as string;

  const articleDetail: ArticleContent = {
    id: article.id,
    title: article.title,
    img: article.img,
    tag: article.tag,
    view: article.view,
    post: postDate,
    description: "pythonでRAGを構築するとき...",
    content: `
# はじめに
pythonむずすぎ
# 〇〇とは
〇〇とはpythonがむずすぎるということ
# まとめ
[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
~~~javascript
// これがコードブロックです
function greeting(name) {
  console.log('Hello, ' + name + '!');
}

greeting('World'); 
~~~
> aaa
pythonはむずい

`,
  };

  if (article) {
    return (
      <div className={styles.article_container}>
        <div className={styles.article_index}>
          <div className={styles.index}>aaa</div>
          <div className={styles.index}>aaa</div>
        </div>
        <Article article={articleDetail} />
      </div>
    );
  } else {
    return (
      <div className={styles.article_container}>
        <div className={styles.article_index}>aaa</div>
        <div>記事情報がないまたは取得に失敗しました</div>
      </div>
    );
  }
};

export default Blog;
