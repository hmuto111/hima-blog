import { Helmet } from "react-helmet-async";

export const GlobalSEO = () => {
  const googleVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;

  return (
    <Helmet>
      {/* 基本メタタグ */}
      <title>Hima Blog</title>
      <meta
        name="description"
        content="@hmuto111の個人的なブログサイト。技術的な知見や日々の学びを共有しています。"
      />
      <meta
        name="keywords"
        content="@hmuto111,Hima Blog,ブログ,技術,プログラミング"
      />
      <meta name="author" content="hmuto111" />

      {/* OGP */}
      <meta property="og:title" content="Hima Blog" />
      <meta
        property="og:description"
        content="@hmuto111の個人的なブログサイト"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hima-blog.vercel.app" />
      <meta property="og:site_name" content="Hima Blog" />
      <meta property="og:locale" content="ja_JP" />
      <meta
        property="og:image"
        content="https://hima-blog.vercel.app/himajin-logo.png"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Hima Blog" />
      <meta
        name="twitter:description"
        content="@hmuto111の個人的なブログサイト"
      />
      <meta
        name="twitter:image"
        content="https://hima-blog.vercel.app/himajin-logo.png"
      />

      {googleVerification && (
        <meta name="google-site-verification" content={googleVerification} />
      )}
    </Helmet>
  );
};

type PageSEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
};

export const PageSEO = ({
  title,
  description,
  url = "https://hima-blog.vercel.app",
  image = "https://hima-blog.vercel.app/himajin-logo.png",
  type = "website",
  publishedTime,
  modifiedTime,
  tags = [],
}: PageSEOProps) => {
  const fullTitle = title === "Hima Blog" ? title : `${title} - Hima Blog`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {tags.length > 0 && <meta name="keywords" content={tags.join(",")} />}

      {/* OGP - ページ固有 */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter Card - ページ固有 */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};
