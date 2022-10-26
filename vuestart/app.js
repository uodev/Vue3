const app = Vue.createApp({
  //! Vue'de başlangıç sanırsam

  data() {
    return {
      showBook: true,
      title: "The Final Empire",
      author: "Uygar Öztürk Ceylan",
      age: 21,
    };
  },

  methods: {
    toggleShowBooks() {
      this.showBook = !this.showBook;
    },
  },
});

app.mount("#app"); //? app div'inin içindekileri kontrol eder
//? app'in içindekileri vue ile kontrol edebiliriz
