<template>
  <div class="container">
    <h3 class="text-center">ToDo App</h3>
    <hr class="my-2" />

    <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" />
    <ListSection />
    <!-- <TodoList @delete-todo-item="deleteItem" :todoList="todoList" />
    <ResultBar :itemCount="todoList.length" /> -->
  </div>
</template>

<script>
import AddSection from "@/components/AddSection";
import ListSection from "@/components/ListSection";
// import TodoList from "@/components/TodoList";
// import ResultBar from "@/components/ResultBar";
export default {
  components: {
    AddSection,
    ListSection,
    // TodoList,
    // ResultBar,
  },
  data() {
    return {
      prodiveData: {
        todoList: [
          { id: 1, text: "Bootcamp 2.hafta" },
          { id: 2, text: "Çöp at" },
          { id: 3, text: "Evi topla" },
          { id: 4, text: "Evi süpür" },
          { id: 5, text: "Evi sil" },
          { id: 6, text: "Evi " },
        ],
      },
    };
  },
  provide() {
    return {
      prodiveData: this.prodiveData,
      deleteItem: this.deleteItem,
    };
  },
  methods: {
    deleteItem(todoItem) {
      this.prodiveData.todoList = this.prodiveData.todoList.filter((t) => t !== todoItem);
    },
    addNewTodo(todoItem) {
      this.prodiveData.todoList.push({
        id: new Date().getTime(),
        text: todoItem,
      });
    },
    testEvent(data) {
      alert(data);
    },
  },
};
</script>
