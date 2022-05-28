import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import BrazilPage from "@/views/BrazilPage"
import JamaicaPage from "@/views/JamaicaPage"
import PanamaPage from "@/views/PanamaPage"
import HawaiiPage from "@/views/HawaiiPage"
import DestinationDetails from "@/views/DestinationDetails"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // Or lazy load views
    // component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
  },
  {
    path: "/brazil",
    name: "brazil",
    component: BrazilPage,
    // Or lazy load views
    // component: () => import(/* webpackChunkName: "brazil" */ '@/views/BrazilPage.vue'),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: JamaicaPage,
    // Or lazy load views
    // component: () => import(/* webpackChunkName: "jamaica" */ '@/views/JamaicaPage.vue'),
  },
  {
    path: "/panama",
    name: "panama",
    component: PanamaPage,
    // Or lazy load views
    // component: () => import(/* webpackChunkName: "panama" */ '@/views/PanamaPage.vue'),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: HawaiiPage,
    // Or lazy load views
    // component: () => import(/* webpackChunkName: "hawaii" */ '@/views/HawaiiPage.vue'),
  },
  {
    path: "/details",
    name: "details",
    component: DestinationDetails,
    // Or lazy load views
    // component: () => import(/* webpackChunkName: "details" */ '@/views/DestinationDetails.vue'),
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
