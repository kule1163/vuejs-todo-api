import axios from "axios";
import { reactive, toRefs } from "vue";

const url = "https://crudapi.co.uk/api/v1/task";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer 3f4KjK0CLfzWdCcd8H7qmgDDV52dq4X62jE5QqugLf1uMlI6YQ",
};

const state = reactive({
  todos: [],
  loading: false,
  currentTodo: null,
});

export default function useTodos() {
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
      state.loading = true;

      const data = JSON.stringify([{ title: todoContent, completed: false }]);

      const res = await axios.post(url, data, {
        headers,
      });

      const todo = res.data.items;

      console.log("create todo", todo);
    } catch (error) {
      console.log({ error });
    } finally {
      state.loading = false;
    }
  };
  const updateTodo = async ({ currentId, title }) => {
    try {
      state.loading = true;

      const data = JSON.stringify([{ _uuid: currentId, title }]);

      const res = await axios.put(url, data, {
        headers,
      });

      const updatedTodo = res.data.items;

      console.log("update todo", updatedTodo);
    } catch (error) {
      console.log({ error });
    } finally {
      state.loading = false;
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

      const data = JSON.stringify([{ _uuid: currentId }]);

      const res = await axios.delete(url, data, {
        headers,
      });

      const deletedTodo = res.data.items;

      console.log("delete todo", deletedTodo);
    } catch (error) {
      console.log({ error });
    } finally {
      state.loading = false;
    }
  };
  const getCurrentTodo = async (currentId) => {
    try {
      state.loading = true;

      const res = await axios.get(url + `/${currentId}`, {
        headers,
      });

      const currentTodo = res.data;

      state.currentTodo = currentTodo;

      console.log("current todo", state.currentTodo);
    } catch (error) {
      console.log({ error });
    } finally {
      state.loading = false;
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
