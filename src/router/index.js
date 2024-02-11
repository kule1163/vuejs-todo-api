import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TodoDetailView from "../views/TodoDetailView.vue";
import CreateTodoView from "../views/CreateTodoView.vue";
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
          component: HomeView,
        },
        {
          path: "create",
          name: "create",
          component: CreateTodoView,
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
          component: TodoDetailView,
        },
      ],
    },
  ],
});

export default router;
