<script setup>
import useTodos from "@/store/todos";
import SingleTodo from "./SingleTodo.vue";
import { Icon } from "@iconify/vue";

const { getTodos, todos, loading } = useTodos();

getTodos();
</script>

<template>
  <div v-if="loading" class="spinner-box">
    <div class="spinner">
      <Icon icon="fluent:spinner-ios-16-filled" color="blue" width="60" />
    </div>
  </div>
  <div v-else>
    <ul class="todos-container">
      <SingleTodo v-for="todo in todos" :key="todo._uuid" :todo="todo" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.spinner-box {
  width: 100%;
  display: flex;
  justify-content: center;
}
.todos-container {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
  }
}
</style>
