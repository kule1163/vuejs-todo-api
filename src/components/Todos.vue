<script setup>
import useTodos from "@/store/todos";
import SingleTodo from "./SingleTodo.vue";

const { getTodos, todos, loading } = useTodos();

getTodos();
</script>

<template>
  <h1 v-if="loading">Loading...</h1>
  <div v-else>
    <ul class="todos-container">
      <SingleTodo v-for="todo in todos" :key="todo._uuid" :todo="todo" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.todos-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 45px;
}
</style>
