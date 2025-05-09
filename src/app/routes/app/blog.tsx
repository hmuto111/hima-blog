import { useLocation } from "react-router";
import { ArticleInfo, ArticleContent } from "@/features/blog/types/article";
import { Article } from "@/features/blog/components/article/article";
import { TableOfContents } from "@/features/blog/components/table-of-contents/table-of-contents";
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
 
>> aaa

>>> aaa
 
pythonはむずいaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  
| 左揃え | 中央揃え | 右揃え |
|:---|:---:|---:|
|1 |2 |3 |
|4 |5 |6 |
  
1. 番号付きリスト1
    1. 番号付きリスト1-1
    1. 番号付きリスト1-2
1. 番号付きリスト2
1. 番号付きリスト3

- リスト1
    - リスト1_1
        - リスト1_1_1
        - リスト1_1_2
    - リスト1_2
- リスト2
- リスト3

hoge
***
hoge
___
hoge
---
  
これは \`インラインコード\`です。

- [ ] これからやるタスク
    - [ ] Tabキーでインデント（字下げ）
- [x] 完了したタスク

![フクロウ](https://notepm.jp/build/assets/apple-touch-icon-120x120-2ee67c72.png)
  
今夜は寿司[^1]です。

[^1]: 酢飯の上になんか色々乗せた食べ物

~~~uml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: another authentication Response
~~~
`,
  };

  if (article) {
    return (
      <div className={styles.article_container}>
        <div className={styles.article_index}>
          <TableOfContents contents={articleDetail.content} />
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
