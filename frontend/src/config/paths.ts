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
  },
} as const;
