<template>
  <li class="d-flex justify-content-between align-items-center">
    <span>{{ todoListItem.text }}</span>
    <button @click="deleteItem(todoListItem)" class="sm red">Sil</button>
  </li>
</template>

<script>
export default {
  props: ["todoListItem"],
  inject: ["deleteItem"],
};
</script>
