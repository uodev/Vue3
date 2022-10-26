<template>
  <!-- <Modal :onSave="onSave" :title="'Modal Title'" :content="content" /> -->
  <Modal>
    <template #title>
      <h3>Slot ile Gelen Title Bilgisi</h3>
    </template>
    <template #content>
      <p class="text-green">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aut.
      </p>
    </template>
    <template #default> Bu default </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal,
  },
  methods: {
    onSave() {
      alert("Saved");
    },
  },
  data() {
    return {
      content: `<h2 class="text-red">content</h2>`,
    };
  },
};
</script>
