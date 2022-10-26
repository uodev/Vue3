const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {},
  computed: {
    //fonksiyon gibi çalışan değerlerdir! Okuyabiliriz set edemeyiz!
    getCounterResult() {
      console.log("Counter 1 çalıştı");
      return this.counter > 5 ? "Büyük" : "Küçük";
    },
    getCounter2Result() {
      console.log("Counter 2 çalıştı");
      return this.counter2 > 10 ? "Büyük" : "Küçük";
    },
  },
  watch: {
    //data bulunan bilgiyi izlemeyi sağlar!
    counter(newValue, oldValue) {
      console.log(oldValue, "=>", newValue);
    },
  },
  //   methods: {
  //     inc() {
  //       this.counter++;
  //     },
  //     dec() {
  //       this.counter--;
  //     },
  //   },
}).mount("#app");
