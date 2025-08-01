import { Outlet } from "react-router";
import { BlogLayout } from "@/components/blog-layout/blog-layout";
import { GlobalSEO } from "@/components/SEO";

const AppRoot = () => {
  return (
    <>
      <GlobalSEO />
      <BlogLayout>
        <Outlet />
      </BlogLayout>
    </>
  );
};

export default AppRoot;
