<template>
  <div class="container">
    <div class="header">
      <h1>
        <slot name="title" />
      </h1>
    </div>
    <hr />
    <div class="content my-2">
      <slot name="content" />
    </div>
    <slot />
    <div class="footer text-right">
      <button>Kapat</button>
      <button class="green" @click="onSave">Kaydet</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["onSave", "title", "content"],
};
</script>
