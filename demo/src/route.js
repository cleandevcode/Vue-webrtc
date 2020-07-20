import Vue from "vue";
import Router from "vue-router";
const Home = () => import("./home.vue");
const Main = () => import("./main.vue");

const routes = new Router({
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/home",
      component: Home,
    },
  ],
});

export default routes;

Vue.use(Router);
