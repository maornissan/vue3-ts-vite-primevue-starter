import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import App from "../App.vue";

const routes = [
  {
    path: "/",
    name: "app",
    component: App,
    children: [
      {
        path: "/dashboard/",
        name: "dashboard",
        component: () => import("../pages/Dashboard.vue"),
      },
    ],
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../pages/Menu.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
