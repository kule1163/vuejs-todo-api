<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  todo: Object,
  required: true,
});
</script>

<template>
  <li class="todo">
    <RouterLink
      :to="`/todo/${todo._uuid}`"
      :class="{ completed: todo.completed }"
    >
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
    font-size: 1.1rem;
    font-weight: 500;
    border: 5px solid rgba($color: #ff0000, $alpha: 0.3);
    background-color: rgba($color: #ff0000, $alpha: 0.2);
    border-radius: 12px;
    height: 200px;
    transform-origin: center;
    transition: all ease 0.5s;
    animation: scaleMd 0.5s;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
    &:not(.completed) {
      &:hover {
        border-color: rgba($color: #ff0000, $alpha: 1);
        background-color: rgba($color: #ff0000, $alpha: 1);
      }
    }

    &.completed {
      border: 5px solid rgba($color: #2dff00, $alpha: 0.3);
      background-color: rgba($color: #2dff00, $alpha: 0.4);
      text-decoration: line-through;
      &:hover {
        border-color: rgba($color: #2dff00, $alpha: 1);
        background-color: rgba($color: #2dff00, $alpha: 1);
      }
    }
  }
}

@keyframes scaleMd {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>
