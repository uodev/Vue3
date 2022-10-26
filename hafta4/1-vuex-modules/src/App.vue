<template>
  <div class="container">
    <p>
      {{ $store.state.mainName }}
    </p>
    <p>
      {{ musteriAdi }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    console.log(this.musteriAdi);
  },
  computed: {
    ...mapGetters({
      musteriAdi: "contact/_contactName",
    }),
  },
};
</script>
