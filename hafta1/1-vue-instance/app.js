const app = Vue.createApp({
  data() {
    return {
      title: "Vue.js Bootcamp 1.gün",
      content: "Vue3 Instance görüyoruz",
      eduflow: {
        title: "Müfredat tıkla",
        target: "_blank",
        url: "https://eduflow.kablosuzkedi.com",
        alt: "müfredat-kablosuz",
      },
      owner: "Pogaca",
      coords: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    updateCoords(event) {
      this.coords.x = event.x;
      this.coords.y = event.y;

      this.changeTitle("updateCoords başlık");
    },
  },
}).mount("#app");
