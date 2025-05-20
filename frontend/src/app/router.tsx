import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";

import AppRoot from "./routes/app/root";
import AdminRoot from "./routes/admin/root";
import Spinner from "@/components/spinner/spinner";
import { paths } from "@/config/paths";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.app.home.path,
      element: <AppRoot />,
      hydrateFallbackElement: <Spinner size="large" />,
      children: [
        {
          path: paths.app.home.path,
          lazy: async () => {
            const module = await import("./routes/app/home");
            return { Component: module.default };
          },
        },
        {
          path: paths.app.blog.path,
          lazy: async () => {
            const module = await import("./routes/app/blog");
            return { Component: module.default };
          },
        },
      ],
    },
    {
      path: paths.admin.login.path,
      lazy: async () => {
        const module = await import("./routes/admin/login");
        return { Component: module.default };
      },
    },
    {
      path: paths.admin.root.path,
      element: <AdminRoot />,
      hydrateFallbackElement: <Spinner size="large" />,
      children: [
        {
          path: paths.admin.home.path,
          lazy: async () => {
            const module = await import("./routes/admin/home");
            return { Component: module.default };
          },
        },
        {
          path: paths.admin.edit.path,
          lazy: async () => {
            const module = await import("./routes/admin/edit");
            return { Component: module.default };
          },
        },
      ],
    },
    {
      path: "*",
      lazy: async () => {
        const module = await import("./routes/not-found");
        return { Component: module.default };
      },
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
