import axios from "axios";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import useGlobal from "./global";

const url = "https://crudapi.co.uk/api/v1/task";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer 3f4KjK0CLfzWdCcd8H7qmgDDV52dq4X62jE5QqugLf1uMlI6YQ",
};

const state = reactive({
  todos: [],
  loading: false,
  currentTodo: null,
  submitLoading: false,
  currentTodoLoading: false,
});

export default function useTodos() {
  const router = useRouter();
  const { handleToggleUpdatePopup } = useGlobal();

  const getTodos = async () => {
    try {
      state.loading = true;

      const res = await axios.get(url, {
        headers,
      });

      const todos = res.data.items;

      console.log("get todos", todos);

      state.todos = todos;
    } catch (error) {
      console.log({ error });
    } finally {
      state.loading = false;
    }
  };
  const createTodo = async (todoContent) => {
    try {
      state.submitLoading = true;

      const data = JSON.stringify([{ title: todoContent, completed: false }]);

      const res = await axios.post(url, data, {
        headers,
      });

      const todos = res.data.items;

      if (!todos) {
        throw new Error("something went wrong at createTodo function");
      }

      /* state.todos.concat(todos); */
      router.push("/");

      console.log("create todo", todos);
    } catch (error) {
      console.log({ error });
    } finally {
      state.submitLoading = false;
    }
  };
  const updateTodo = async ({ currentId, title }) => {
    try {
      state.submitLoading = true;

      const data = JSON.stringify([{ _uuid: currentId, title }]);

      const res = await axios.put(url, data, {
        headers,
      });

      const updatedTodos = res.data.items;

      if (!updatedTodos) {
        throw new Error("something went wrong at updateTodo function");
      }
      state.currentTodo = updatedTodos[0];
      handleToggleUpdatePopup();
      console.log("update todo", updatedTodos);
    } catch (error) {
      console.log({ error });
    } finally {
      state.submitLoading = false;
    }
  };
  const updateStatus = async ({ currentId, completed }) => {
    try {
      state.loading = true;

      const data = JSON.stringify([{ _uuid: currentId, completed }]);

      const res = await axios.put(url, data, {
        headers,
      });

      const updateStatus = res.data.items;

      state.currentTodo = updateStatus[0];

      console.log("update status", updateStatus);
    } catch (error) {
      console.log({ error });
    } finally {
      state.loading = false;
    }
  };
  const deleteTodo = async (currentId) => {
    try {
      state.loading = true;

      const res = await axios.delete(url + `/${currentId}`, {
        headers,
      });

      const deletedTodo = res.data.items;

      router.push("/");

      console.log("delete todo", deletedTodo);
    } catch (error) {
      console.log({ error });
    } finally {
      state.loading = false;
    }
  };
  const getCurrentTodo = async (currentId) => {
    try {
      state.currentTodoLoading = true;

      const res = await axios.get(url + `/${currentId}`, {
        headers,
      });

      const currentTodo = res.data;

      state.currentTodo = currentTodo;

      console.log("current todo", state.currentTodo);
    } catch (error) {
      console.log({ error });
    } finally {
      state.currentTodoLoading = false;
    }
  };
  return {
    ...toRefs(state),
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    getCurrentTodo,
    updateStatus,
  };
}
