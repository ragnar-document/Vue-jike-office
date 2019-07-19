import Home from "@/views/Home.vue";
import Plus from "@/views/Plus.vue";
import Course from "@/views/Course.vue";
import Project from "@/views/Project.vue";
import Lab from "@/views/Lab.vue";
import Login from "@/views/Login.vue";
import Layout from "@/components/Layout.vue";

export default [
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
  }
];
