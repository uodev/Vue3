<template>
  <button @click="updateName">Yeni Item Ekle</button>
</template>

<script>
export default {
  methods: {
    updateName() {
      const itemData = {
        id: 6,
        title: "Dolap",
        type: "Mobilya",
      };
      //   this.$store.commit("newItem", itemData);
      this.$store.dispatch("newItem", itemData);
      //   this.$store.state.itemList.push(itemData);
      this.$store.state.fullName = "Aydanur Ceylan";
    },
  },
};
</script>
