import { Outlet } from "react-router";
import { BlogLayout } from "@/components/blog-layout/blog-layout";

const AdminRoot = () => {
  return (
    <BlogLayout role="admin">
      <Outlet />
    </BlogLayout>
  );
};

export default AdminRoot;
