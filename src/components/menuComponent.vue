<template>
  <nav class="nav">
    <ul class="main-menu" :class="type">
      <li v-for="link in links" :key="link.url">
        <router-link :to="link.url">
          {{ link.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "menuComponent",
  props: ["type"],
  data() {
    return {
      links: [
        {
          title: "Game",
          url: "/game",
        },
        {
          title: "Options",
          url: "/options",
        },
        {
          title: "Home",
          url: "/",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
