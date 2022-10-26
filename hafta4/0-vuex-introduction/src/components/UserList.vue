<template>
  <ul>
    <li v-for="item in agacElemanlari" :key="item.id">
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      agacElemanlari: "_woodItems",
      aktifKullanici: "_activeUser",
    }),
  },
};
</script>
