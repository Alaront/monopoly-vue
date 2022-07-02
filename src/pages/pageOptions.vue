<template>
  <div class="content-wrapper-options">
    <menu-component type="horizontal" />
  </div>
</template>

<script>
import menuComponent from "@/components/menuComponent";

export default {
  components: {
    "menu-component": menuComponent,
  },
  name: "pageOptions",
};
</script>

<style scoped></style>
