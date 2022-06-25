import { createRouter, createWebHistory } from "vue-router";
import pageGame from "./pages/pageGame";
import pageHome from "./pages/pageHome";

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
  ],
});
