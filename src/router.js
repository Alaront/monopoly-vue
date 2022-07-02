import { createRouter, createWebHistory } from "vue-router";
import pageGame from "./pages/pageGame";
import pageHome from "./pages/pageHome";
import pageOptions from "@/pages/pageOptions";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: pageHome,
    },
    {
      path: "/game",
      component: pageGame,
    },
    {
      path: "/options",
      component: pageOptions,
    },
  ],
  linkActiveClass: "menu-active-link",
  linkExactActiveClass: "menu-active-link",
});
