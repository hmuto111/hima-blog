import { Helmet } from "react-helmet-async";
import { GlobalSEO, PageSEO } from "@/components/SEO";

const Portfolio = () => {
  return (
    <>
      <GlobalSEO />
      <PageSEO
        title={"ポートフォリオ - Hima Blog"}
        description="hmuto111のポートフォリオページです。これまでの制作物や技術スタックを紹介しています。"
        tags={["@humto111", "ポートフォリオ", "制作物", "技術スタック"]}
        url="https://hima-blog.vercel.app/portfolio"
      />

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
          content="@hmuto111のポートフォリオページです。"
        />
      </Helmet>

      <div>ポートフォリオページは作成中です</div>
    </>
  );
};

export default Portfolio;
