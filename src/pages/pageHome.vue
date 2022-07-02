<template>
  <div class="home-page-wrap">
    <header class="header home-header">
      <h1 class="home-header__title">Monopoly on Vue</h1>
    </header>
    <main class="main main-content">
      <menu-component type="vertical" />
    </main>
  </div>
</template>

<script>
import menuComponent from "@/components/menuComponent";

export default {
  components: {
    "menu-component": menuComponent,
  },
  name: "pageHome",
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
      ],
    };
  },
};
</script>
