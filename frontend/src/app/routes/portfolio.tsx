import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    document.title = "ポートフォリオ - Hima Blog";

    return () => {
      document.title = "Hima Blog";
    };
  }, []);

  return <div>ポートフォリオページは作成中です</div>;
};

export default Portfolio;
