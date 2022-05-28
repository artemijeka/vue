import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import BrazilPage from "../views/BrazilPage"
import JamaicaPage from "../views/JamaicaPage"
import PanamaPage from "../views/PanamaPage"
import HawaiiPage from "../views/HawaiiPage"

const routes = [
  {
    path: "/",
    name: "home",
    // Lazy load views
    // component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
    component: HomeView,
  },
  {
    path: "/brazil",
    name: "brazil",
    // Lazy load views
    // component: () => import(/* webpackChunkName: "brazil" */ '@/views/BrazilPage.vue'),
    component: BrazilPage,
  },
  {
    path: "/jamaica",
    name: "jamaica",
    // Lazy load views
    // component: () => import(/* webpackChunkName: "jamaica" */ '@/views/JamaicaPage.vue'),
    component: JamaicaPage,
  },
  {
    path: "/panama",
    name: "panama",
    // Lazy load views
    // component: () => import(/* webpackChunkName: "panama" */ '@/views/PanamaPage.vue'),
    component: PanamaPage,
  },
  {
    path: "/hawaii",
    name: "hawaii",
    // Lazy load views
    // component: () => import(/* webpackChunkName: "hawaii" */ '@/views/HawaiiPage.vue'),
    component: HawaiiPage,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
]

const router = createRouter({
  linkExactActiveClass: '--active',
  history: createWebHashHistory(),
  routes,
})

export default router
