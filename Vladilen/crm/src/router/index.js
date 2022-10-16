import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      meta: {
        layout: "EmptyLayout",
      },
      // LazyLoading component:
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      meta: {
        layout: "EmptyLayout",
      },
      component: () => import("@/views/Register.vue"),
    },
    {
      path: "/",
      name: "home",
      meta: {
        layout: "MainLayout",
      },
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/categories",
      name: "categories",
      meta: {
        layout: "MainLayout",
      },
      component: () => import("@/views/Categories.vue"),
    },
    {
      path: "/detail",
      name: "detail",
      meta: {
        layout: "MainLayout",
      },
      component: () => import("@/views/Detail.vue"),
    },
    {
      path: "/history",
      name: "history",
      meta: {
        layout: "MainLayout",
      },
      component: () => import("@/views/History.vue"),
    },
    {
      path: "/planning",
      name: "planning",
      meta: {
        layout: "MainLayout",
      },
      component: () => import("@/views/Planning.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      meta: {
        layout: "MainLayout",
      },
      component: () => import("@/views/Profile.vue"),
    },
    {
      path: "/record",
      name: "record",
      meta: {
        layout: "MainLayout",
      },
      component: () => import("@/views/Record.vue"),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('@/views/AboutView.vue')
    // }
  ],
});

export default router;
