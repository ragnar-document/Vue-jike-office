import Vue from "vue";
import Router from "vue-router";
import router from "./router.js";
import DataStore from "@/global/storage/index";
import NProgress from "nprogress"; //加载条

Vue.use(Router);

const appRouter = new Router({
  mode: "history",
  routes: router
});

// eslint-disable-next-line
appRouter.beforeEach((to, from, next) => {
  NProgress.start();
  // 没有登录，重定向到登录页
  const TOKEN = DataStore.getToken();
  if (!TOKEN && to.name !== "Login") {
    next({ name: "Login", replace: true });
    return;
  }
  if (TOKEN) {
    // 已经登录并且在登录页重定向到主页
    if (to.name === "Login") {
      next({ name: "Home", replace: true });
      return;
    }
  }
  next();
});

// eslint-disable-next-line
appRouter.afterEach((to, from) => {
  NProgress.done();
});

export default appRouter;
