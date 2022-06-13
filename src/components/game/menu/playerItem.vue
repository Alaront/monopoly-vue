<template>
  <div
    class="player-item"
    :class="{
      'player-item--check-active': needMenu,
    }"
    @click="openMenu"
    :style="{
      'border-color': pointColor,
    }"
  >
    <div class="player-item__photo-wrapper">
      <img
        class="player-item__photo"
        src="@/assets/gameMenu/photo/player-avatar.png"
        alt="photo"
      />
    </div>
    <h4 class="player-item__title">{{ name }}</h4>
    <p class="player-item__total">{{ total }} $</p>

    <player-menu @click.stop v-if="needMenu" :user="id" />
  </div>
</template>

<script>
import playerMenu from "./playerMenu";

export default {
  name: "playerItem",
  components: {
    "player-menu": playerMenu,
  },
  props: ["id", "name", "total", "pointColor"],
  data() {
    return {
      needMenu: false,
    };
  },

  methods: {
    openMenu() {
      this.needMenu = !this.needMenu;
    },
  },
};
</script>

<style lang="sass" src="@/assets/gameMenu/player-item.sass"></style>
