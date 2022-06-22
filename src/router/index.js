import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      accessLevel: "public",
    },
  },
  {
    path: "/UsersView",
    name: "UsersView",

    component: () => import("../views/UsersView.vue"),
  },
  {
    path: "/AdminView",
    name: "AdminView",

    component: () => import("../views/AdminView.vue"),
  },
  {
    path: "/CoursesView",
    name: "CoursesView",

    component: () => import("../views/CoursesView.vue"),
    meta: {
      accessLevel: "private",
    },
  },
  {
    path: "/EditView",
    name: "EditView",

    component: () => import("../views/EditView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
