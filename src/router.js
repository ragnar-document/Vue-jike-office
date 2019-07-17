import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Plus from "./views/Plus.vue";
import Course from "./views/Course.vue";
// eslint-disable-next-line no-unused-vars
import NotFoud from "./views/NotFoud.vue";
import Project from "./views/Project.vue";
import Lab from "./views/Lab.vue";
import Login from "./views/Login.vue";
import Layout from "@/components/Layout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },

    {
      path: "/",
      name: "Root",
      component: Layout,
      redirect: { name: "Home" },
      children: [
        {
          path: "/home",
          name: "Home",
          component: Home
        },
        {
          path: "/plus",
          name: "Plus",
          component: Plus
        },
        {
          path: "/course",
          name: "Course",
          component: Course
        },

        {
          path: "/project",
          name: "Project",
          component: Project
        },
        {
          path: "/lab",
          name: "Lab",
          component: Lab
        }
      ]
    },
    {
      path: "*",
      name: "NotFoud",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/NotFoud.vue")
    }
  ]
});
