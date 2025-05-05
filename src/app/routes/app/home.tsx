import { Card } from "@/features/blog/components/card/card";
import { ArticleInfo } from "@/features/blog/types/article";
import styles from "@/features/blog/styles/home.module.css";

const Home = () => {
  const articledata: ArticleInfo[] = [
    {
      id: "1",
      title: "Pythonむずすぎ",
      img: "none",
      tag: ["python", "RAG", "javascript", "java", "typescript", "react"],
      view: 100,
      post: new Date("2025-05-03T14:03:29.000Z"),
    },
    {
      id: "2",
      title: "Pythonむずすぎ",
      img: "none",
      tag: ["python", "RAG"],
      view: 100,
      post: new Date("2025-05-03T14:03:29.000Z"),
    },
    {
      id: "3",
      title: "Pythonむずすぎ",
      img: "none",
      tag: ["python", "RAG"],
      view: 100,
      post: new Date("2025-05-03T14:03:29.000Z"),
    },
    {
      id: "4",
      title: "Reactむずすぎ",
      img: "react.svg",
      tag: ["React", "RAG"],
      view: 100,
      post: new Date("2025-05-03T14:03:29.000Z"),
    },
    {
      id: "5",
      title: "Pythonむずすぎ",
      img: "none",
      tag: ["python", "RAG"],
      view: 100,
      post: new Date("2025-05-03T14:03:29.000Z"),
    },
    {
      id: "6",
      title: "Pythonむずすぎ",
      img: "none",
      tag: ["python", "RAG"],
      view: 100,
      post: new Date("2025-05-03T14:03:29.000Z"),
    },
  ];
  return (
    <div className={styles.container_wrap}>
      <div className={styles.card_container}>
        {articledata.map((article) => (
          <Card article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
