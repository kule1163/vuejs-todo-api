<script setup>
import useTodos from "@/store/todos";
import useGlobal from "@/store/global.js";
import { useRoute } from "vue-router";
import CreateTodo from "./CreateTodo.vue";
import { Icon } from "@iconify/vue";

const route = useRoute();
const { id } = route.params;

const { handleToggleUpdatePopup, toggleUpdatePopup } = useGlobal();

const {
  getCurrentTodo,
  currentTodo,
  currentTodoLoading,
  submitLoading,
  updateStatus,
  deleteTodo,
} = useTodos();

getCurrentTodo(id);
</script>

<template>
  <div class="container">
    <h1 v-if="currentTodoLoading">Loading...</h1>
    <div v-else-if="!currentTodo">todo didnt find</div>
    <div v-else>
      <div class="todo-container">
        <div class="todo-box">
          <input
            type="checkbox"
            :checked="currentTodo.completed"
            @input="
              updateStatus({
                currentId: currentTodo._uuid,
                completed: !currentTodo.completed,
              })
            "
          />
          <span>
            {{ currentTodo.title }}
          </span>
        </div>

        <div class="icon-box">
          <Icon
            icon="ph:pencil-fill"
            color="41b080"
            width="22"
            @click="handleToggleUpdatePopup"
          />
          <Icon
            icon="ph:trash"
            color="f95e5e"
            width="22"
            @click="deleteTodo(currentTodo._uuid)"
          />
        </div>
      </div>
    </div>
    <div v-if="toggleUpdatePopup" class="popup">
      <div v-if="submitLoading" class="spinner">
        <Icon icon="fluent:spinner-ios-16-filled" color="blue" width="40" />
      </div>
      <div v-else class="form-container">
        <CreateTodo :currentId="currentTodo._uuid" />
      </div>

      <div class="close-icon" @click="handleToggleUpdatePopup">
        <Icon icon="ic:twotone-close" color="fff" width="40" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 100px;
  .todo-container {
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    padding: 15px 30px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    .todo-box {
      display: flex;
      align-items: center;
      gap: 15px;
      input[type="checkbox"] {
        appearance: none;
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
          0 2px 4px -2px rgb(0 0 0 / 0.1);
        &:checked {
          background-color: #41b080;
        }
      }
    }
    .icon-box {
      display: flex;
      gap: 10px;
      svg {
        cursor: pointer;
      }
    }
  }
  .popup {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($color: #000000, $alpha: 0.8);
    z-index: 2;
    .close-icon {
      position: absolute;
      right: 50px;
      top: 50px;
      z-index: 2;
      cursor: pointer;
    }
  }
}
</style>
