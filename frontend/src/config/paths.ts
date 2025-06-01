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
  portfolio: {
    path: "/portfolio",
    getHref: () => "/portfolio",
  },
  admin: {
    root: {
      path: "/admin",
      getHref: () => "/admin",
    },
    login: {
      path: "/admin/login",
      getHref: () => "/admin/login",
    },
    home: {
      path: "/admin/home",
      getHref: () => "/admin/home",
    },
    edit: {
      path: "/admin/edit/:blogId",
      getHref: () => "/admin/edit/${blogId}",
    },
    post: {
      path: "/admin/post",
      getHref: () => "/admin/post",
    },
  },
} as const;
