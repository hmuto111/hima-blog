import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  useEffect(() => {
    document.title = "ポートフォリオ - Hima Blog";

    return () => {
      document.title = "Hima Blog";
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>ポートフォリオ - Hima Blog</title>
        <meta
          name="description"
          content="hmuto111のポートフォリオページです。これまでの制作物や技術スタックを紹介しています。"
        />
        <meta property="og:title" content="ポートフォリオ - Hima Blog" />
        <meta
          property="og:description"
          content="hmuto111のポートフォリオページです。制作物や技術スタックを紹介しています。"
        />
        <meta
          property="og:url"
          content="https://hima-blog.vercel.app/portfolio"
        />
        <meta name="twitter:title" content="ポートフォリオ - Hima Blog" />
        <meta
          name="twitter:description"
          content="hmuto111のポートフォリオページです。"
        />
      </Helmet>

      <div>ポートフォリオページは作成中です</div>
    </>
  );
};

export default Portfolio;
