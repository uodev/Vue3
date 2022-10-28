import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "@/views/Home.vue";

const routes = [
  {
    name: "HomePage",
    path: "/",
    // component: Home,
    component: () => import("@/views/Home.vue"),
  },
  {
    name: "AboutPage",
    path: "/about",
    // component: Home,
    component: () => import("@/views/About.vue"),
  },
  {
    name: "DetailPage",
    path: "/detail/:userID",
    // component: Home,
    component: () => import("@/views/Details.vue"),
  },
];

const router = createRouter({
  routes,
  // history: createWebHistory(),
  history: createWebHashHistory(),
});

export default router;
