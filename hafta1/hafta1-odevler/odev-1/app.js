const app = Vue.createApp({
  data() {
    return {
      age: 21,
      name: "name",
      randomCount: Math.random(),

      randomImage: {
        agacManzara: "agacManzara.jpg",
        istanbul: "istanbul.jpg",
      },
    };
  },
  methods: {
    updateName(event) {
      this.name = event.target.value;
    },
  },

  computed: {},
}).mount("#exercise");
