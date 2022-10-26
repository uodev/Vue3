<template>
  <div class="container">
    <h3>Alışveriş Listesi</h3>
    <hr />
    <div class="my-2">
      <input
        type="text"
        placeholder="alacaklar listesi"
        @keydown.enter="onSave"
      />
    </div>
    <ul v-if="itemsList.length > 0">
      <li
        v-for="item in itemsList"
        :key="item"
        class="d-flex justify-content-between align-items-center"
      >
        <span>{{ item.title }}</span>
        <button @click="onDelete(item)" class="sm red">Sil</button>
      </li>
    </ul>
    <div v-else class="bg-blue text-white">Listede ürün yok</div>
    <small class="mt-2 text-red d-flex justify-content-end align-items-center"
      >{{ itemCount }} adet alınacak var</small
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      itemsList: [],
    };
  },
  computed: {
    itemCount() {
      return this.itemsList.length || 0;
    },
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((res) => {
      console.log(res.data);
      this.itemsList = res.data || [];
    });
  },
  methods: {
    onSave(e) {
      const saveObj = {
        title: e.target.value,
        created_at: new Date(),
        completd: false,
      };
      axios
        .post("http://localhost:3000/items", saveObj)
        .then((save_response) => {
          console.log(save_response);
          this.itemsList.push(save_response.data);
          e.target.value = "";
          e.target.focus();
        });
    },
    onDelete(item) {
      axios
        .delete("http://localhost:3000/items/" + item.id)
        .then((delete_response) => {
          console.log(delete_response);
          this.itemsList = this.itemsList.filter((i) => i.id !== item.id);
        });
    },
  },
};
</script>
