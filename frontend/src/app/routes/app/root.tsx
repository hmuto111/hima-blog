import { Outlet } from "react-router";
import { BlogLayout } from "@/components/blog-layout/blog-layout";

const AppRoot = () => {
  return (
    <BlogLayout>
      <Outlet />
    </BlogLayout>
  );
};

export default AppRoot;
