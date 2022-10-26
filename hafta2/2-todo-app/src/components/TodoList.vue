<template>
  <ul>
    <TodoListItem v-for="todoItem in prodiveData.todoList" :key="todoItem" :todoListItem="todoItem" />
  </ul>
</template>
<script>
import TodoListItem from "@/components/TodoListItem";

export default {
  // props: ["todoList"],
  inject: ["prodiveData"],
  data() {
    return {};
  },
  components: {
    TodoListItem,
  },
};
</script>
