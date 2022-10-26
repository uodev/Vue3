const app = Vue.createApp({
  data() {
    return {
      value: "",
      alert: false,
    };
  },
  methods: {
    alertShow() {
      this.alert = !this.alert;
    },
    valueGoster(event) {
      this.value = event.target.value;
      console.log(event.target.value);
    },
  },
});
app.mount("#exercise");
