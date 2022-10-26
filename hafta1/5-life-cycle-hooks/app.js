const app = Vue.createApp({
  data() {
    return {
      title: "Test Başlığı",
      itemList: [],
      loadingText: "",
    };
  },
  beforeCreate() {
    console.log("beforeCreate Çalıştı...");
  },
  created() {
    console.log("created Çalıştı...");
    this.loadingText = "Loading...";
    setTimeout(() => {
      this.itemList = [1, 54, 84, 31, 54, 8, 43];
      this.loadingText = "";
    }, 4000);
  },
  beforeMount() {
    console.log("beforeMount Çalıştı...");
  },
  mounted() {
    console.log("mounted Çalıştı...");
  },
  beforeUpdate() {
    console.log("beforeUpdate Çalıştı...");
  },
  updated() {
    console.log("updated Çalıştı...");
  },
  beforeUnmount() {
    console.log("beforeUnmount Çalıştı...");
  },
  unmounted() {
    console.log("unmounted Çalıştı...");
  },
}).mount("#app");
