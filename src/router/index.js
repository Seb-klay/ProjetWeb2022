import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recherche",
    name: "Recherche",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/Recherche.vue"),
  },
  {
    path: "/starOfTheDay",
    name: "StarOfTheDay",
    component: () => import("../components/starOfTheDay.vue"),
  },
  {
    path: "/visibleStars",
    name: "VisibleStars",
    component: () => import("../components/VisibleStars.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
