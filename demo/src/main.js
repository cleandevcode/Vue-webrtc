import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "./home.vue";
import App from "./main.vue";

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: App },
    { path: "/home", component: Home },
  ],
});

new Vue({
  template: `
    <div>
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link to="/" class="nav-link">Main</router-link></li>
            <li class="nav-item"><router-link to="/home" class="nav-link">Home</router-link></li>
          </ul>
        </div>
      </nav>
      <router-view class="view"></router-view>
    </div>
  `,
  router,
}).$mount("#app");
