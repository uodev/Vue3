<template>
  <ListSection />
  <AddSection />
</template>

<script>
import ListSection from "@/components/ListSection";
import AddSection from "@/components/AddSection";
export default {
  components: {
    ListSection,
    AddSection,
  },
  // props: ["userList"],
};
</script>
