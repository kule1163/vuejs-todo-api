<script setup>
import { reactive } from "vue";
import useTodos from "@/store/todos";
import { Icon } from "@iconify/vue";

const props = defineProps({
  currentId: String,
  required: false,
});

const { createTodo, updateTodo, currentTodo, submitLoading } = useTodos();

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
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="form-input">
        <input type="text" v-model="todoItem.todo" />
        <button type="submit">
          <div v-if="submitLoading" class="spinner">
            <Icon
              icon="fluent:spinner-ios-16-filled"
              color="white"
              width="14"
            />
          </div>
          <span v-else>{{ currentId ? "update todo" : "create todo" }}</span>
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  form {
    .form-input {
      position: relative;
      width: fit-content;
      input {
        width: 100%;
        background: #fff;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
        border: none;
        outline: none;
        padding: 22px 100px 22px 18px;
        @media (min-width: 600px) {
          width: 360px;
          padding: 22px 80px 22px 18px;
        }
      }
      button {
        position: absolute;
        right: -15px;
        top: 50%;
        transform: translateY(-50%);
        background: #7f8ff4;
        color: #fff;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 12px 17px;
        border: none;
        cursor: pointer;
        text-transform: capitalize;
        font-weight: 600;
        @media (min-width: 600px) {
          padding: 12px 36px;
          right: -85px;
          &:hover {
            animation: test 0.3s;
          }
        }
        .spinner {
          width: 70px;
        }
      }
      @keyframes test {
        0% {
          right: -85px;
        }
        25% {
          right: -87px;
        }
        50% {
          right: -83px;
        }
        100% {
          right: -85px;
        }
      }
    }
  }
}
</style>
