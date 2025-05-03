import { Card } from "@/features/blog/components/card/card";
import { Article } from "@/features/blog/types/article";

const Home = () => {
  const articledata: Article[] = [
    {
      id: 1,
      title: "Pythonむずすぎ",
      img: "none",
      tag: ["python", "RAG", "javascript", "java", "typescript", "react"],
      view: 100,
      post: new Date("2025-05-03T14:03:29.000Z"),
    },
    {
      id: 2,
      title: "Pythonむずすぎ",
      img: "none",
      tag: ["python", "RAG"],
      view: 100,
      post: new Date("2025-05-03T14:03:29.000Z"),
    },
    {
      id: 3,
      title: "Pythonむずすぎ",
      img: "none",
      tag: ["python", "RAG"],
      view: 100,
      post: new Date("2025-05-03T14:03:29.000Z"),
    },
    {
      id: 4,
      title: "Reactむずすぎ",
      img: "@/assets/react.svg",
      tag: ["React", "RAG"],
      view: 100,
      post: new Date("2025-05-03T14:03:29.000Z"),
    },
    {
      id: 5,
      title: "Pythonむずすぎ",
      img: "none",
      tag: ["python", "RAG"],
      view: 100,
      post: new Date("2025-05-03T14:03:29.000Z"),
    },
    {
      id: 6,
      title: "Pythonむずすぎ",
      img: "none",
      tag: ["python", "RAG"],
      view: 100,
      post: new Date("2025-05-03T14:03:29.000Z"),
    },
  ];
  return <Card article={articledata[0]} />;
};

export default Home;
