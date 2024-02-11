import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "public",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "home",
          component: () => HomeView,
        },
        {
          path: "create",
          name: "create",
          component: () => import("../views/CreateTodoView.vue"),
        },
      ],
    },
    {
      path: "/todo",
      name: "todo",
      component: DefaultLayout,
      children: [
        {
          path: ":id",
          name: "todo-detail",
          component: () => import("../views/TodoDetailView.vue"),
        },
      ],
    },
  ],
});

export default router;
