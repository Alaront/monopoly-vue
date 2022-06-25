<template>
  <div class="home-page-wrap">
    <header class="header home-header">
      <h1 class="home-header__title">Monopoly on Vue</h1>
    </header>
    <main class="main main-content">
      <nav class="nav">
        <ul class="main-menu">
          <li v-for="link in links" :key="link.url">
            <a :href="link.url">
              {{ link.title }}
            </a>
          </li>
        </ul>
      </nav>
    </main>
  </div>
</template>

<script>
export default {
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
