import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventList.vue";
import AboutPage from "@/views/AboutPage.vue";
import EventDetails from "@/views/EventDetails.vue"

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    component: EventDetails,
    props: true,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
