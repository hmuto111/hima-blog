import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";

import AppRoot from "./routes/app/root";

import { paths } from "@/config/paths";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.app.home.path,
      element: <AppRoot />,
      hydrateFallbackElement: <div>spinner</div>,
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
