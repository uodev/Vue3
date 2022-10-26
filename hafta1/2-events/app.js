const app = Vue.createApp({
  data() {
    return {
      fullName: "Ceylan",
    };
  },
  methods: {
    updateValue(event) {
      this.fullName = event.target.value;
    },

    addList() {
      console.log(this.fullName);
    },
  },
}).mount("#app");
