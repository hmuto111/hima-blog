import { Outlet } from "react-router";
import { Header } from "@/components/header/header";
import { SearchBlog } from "@/components/search-blog/search-blog";

const AppRoot = () => {
  return (
    <div>
      <Header />
      <SearchBlog />
      <Outlet />
    </div>
  );
};

export default AppRoot;
