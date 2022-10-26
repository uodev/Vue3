<template>
  <div class="container">
    <UserList />
    <br />
    <hr />
    <br />

    <NewUser />

    <!-- <ul>
      <li v-for="(item, index) in agacElemanlari" :key="index">
        {{ item.title }}
      </li>
    </ul> -->
    <!-- {{ $store.state.fullName }} -->
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import NewUser from "@/components/NewUser.vue";
export default {
  components: {
    UserList,
    NewUser,
  },
  created() {
    // console.log(this.$store.state.user);
    // // console.log(this.$store.state.itemList.filter((i) => i.type === "Mutfak")); !kolay kullanımı aşağıda
    // //! kolay kullanım
    // console.log(this.$store.getters.woodItems);
    // console.log(this.aktifKullanici);
  },
};
</script>
