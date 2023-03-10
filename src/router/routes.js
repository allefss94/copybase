export default [
  {
    path: "/",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/pages/Home.vue"),
      },
      {
        path: "details/:type/:id",
        name: "Details",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/pages/Details.vue"),
      },
      {
        path: "galery",
        name: "Galery",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/pages/Galery.vue"),
      },
    ],
  },
];
