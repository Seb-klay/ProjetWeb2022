import Vue from "vue";
import VueIframe from "vue-iframes";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
Vue.use(VueIframe);

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
