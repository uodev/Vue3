

<template>
  <app-header />
  <div class="container">
    <h3>Bu benim ilk Vue CLI uygulamam</h3>
    <p>Bugün component ve Vue CLI konularını görüyoruz...</p>
     
  </div>
  <CounterItem></CounterItem>

  
</template>

<script>
  import CounterItem from "@/components/CounterItem.vue";

  export default {
    components: {
      CounterItem,
    }
  }
</script>
