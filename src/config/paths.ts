export const paths = {
  app: {
    home: {
      path: "/",
      getHref: () => "/",
    },
    blog: {
      path: "/blog/:blogId",
      getHref: () => "/blog/${blogId}",
    },
  },
} as const;
