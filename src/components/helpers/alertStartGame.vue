<template>
  <div class="alert-start-game">
    <div class="alert-start-game__wrapper">
      <button @click="startGame" class="alert-start-game__btn">
        Определить порядок ходов
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "alertStartGame",

  methods: {
    startGame() {
      this.changeGameState("on");

      this.$emit("startNewGame");
    },

    ...mapMutations("gameState", ["changeGameState"]),
  },
};
</script>

<style lang="sass" src="@/assets/helpers/alertStartGame.sass"></style>
