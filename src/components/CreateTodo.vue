<script setup>
import axios from "axios";
import { reactive } from "vue";
import useTodos from "@/store/todos";

const props = defineProps({
  currentId: String,
  required: false,
});

const { createTodo, updateTodo, currentTodo } = useTodos();

console.log("create todo", currentTodo);

const todoItem = reactive({
  todo: `${props.currentId ? currentTodo.value.title : ""}`,
  inValid: null,
  errMsg: "",
});

const handleSubmit = async () => {
  if (props.currentId) {
    updateTodo({ currentId: props.currentId, title: todoItem.todo });
  } else {
    createTodo(todoItem.todo);
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-input">
      <input type="text" v-model="todoItem.todo" />
      <button type="submit">
        {{ currentId ? "update todo" : "create todo" }}
      </button>
    </div>
    <p>{{ todoItem.todo }}</p>
  </form>
</template>

<style lang="scss" scoped>
form {
  .form-input {
    position: relative;
    width: fit-content;
    input {
      width: 360px;
      background: #fff;
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
      border: none;
      outline: none;
      padding: 22px 18px;
    }
    button {
      position: absolute;
      right: -80px;
      top: 50%;
      transform: translateY(-50%);
      background: #7f8ff4;
      color: #fff;
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      padding: 12px 36px;
      border: none;
    }
  }
}
</style>
