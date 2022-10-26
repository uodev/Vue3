<template>
  <TodoList />
  <ResultBar :itemCount="prodiveData.todoList.length" />
</template>

<script>
import TodoList from "@/components/TodoList";
import ResultBar from "@/components/ResultBar";

export default {
  inject: ["prodiveData"],
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
  components: {
    TodoList,
    ResultBar,
  },
};
</script>
