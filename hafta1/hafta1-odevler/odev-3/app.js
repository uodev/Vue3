const app = Vue.createApp({
  data() {
    return {
      value: 0,
      result: "Henüz Bitmedi!!",
    };
  },

  computed: {
    resultWatch() {
      if (this.value === 33) {
        setTimeout(() => {
          this.value = 0;
        }, 5000);
      }
      return this.value === 33
        ? (this.result = "Tamamlandı")
        : (this.result = "Henüz Bitmedi!!");
    },
  },
}).mount("#exercise");
