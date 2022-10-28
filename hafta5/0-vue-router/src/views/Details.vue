<template>
  <h1>Details</h1>
  <p>Açıklamalar burada yer alacaktır...</p>
  <p>{{ $route.params.userID }}</p>
  <button @click="goBack">Geri Dön</button>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
