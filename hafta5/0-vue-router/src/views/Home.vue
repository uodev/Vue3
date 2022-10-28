<template>
  <h1>Home</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem, rerum
    quisquam accusamus delectus iusto facere molestias necessitatibus atque
    nesciunt!
  </p>
  <input type="text" @keydown.enter="goToDetails" />
</template>

<script>
export default {
  methods: {
    goToDetails(e) {
      //   this.$router.push(`/detail/${e.target.value}`);
      this.$router.push({
        name: "DetailPage",
        params: {
          userID: e.target.value,
        },
        query: {
          type: "DetailAuth",
          user: "uygarceylan",
        },
      });
    },
  },
};
</script>
