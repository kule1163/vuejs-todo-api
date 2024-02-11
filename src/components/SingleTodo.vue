<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  todo: Object,
  required: true,
});
</script>

<template>
  <li class="todo">
    <RouterLink :to="`/todo/${todo._uuid}`" class="completed">
      {{ todo.title }}
    </RouterLink>
  </li>
</template>

<style lang="scss" scoped>
.todo {
  list-style: none;
  a {
    width: 100%;
    display: flex;
    padding: 15px;
    border: 5px solid rgba($color: #ff0000, $alpha: 0.3);
    background-color: rgba($color: #ff0000, $alpha: 0.2);
    border-radius: 12px;
    height: 200px;
    transform-origin: left top;
    transition: all ease 0.5s;
    animation: rotateIn 0.5s;
    animation-fill-mode: forwards;
    cursor: pointer;
    &:hover {
      animation: rotateOut 0.5s;
      border-color: rgba($color: #ff0000, $alpha: 1);
      background-color: rgba($color: #ff0000, $alpha: 1);
    }
    &.completed {
      border: 5px solid rgba($color: #2dff00, $alpha: 0.3);
      background-color: rgba($color: #2dff00, $alpha: 0.4);
      &:hover {
        animation: rotateOut 0.5s;
        border-color: rgba($color: #2dff00, $alpha: 1);
        background-color: rgba($color: #2dff00, $alpha: 1);
      }
    }
  }
}

@keyframes rotateIn {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(5deg);
  }
}

@keyframes rotateOut {
  0% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
