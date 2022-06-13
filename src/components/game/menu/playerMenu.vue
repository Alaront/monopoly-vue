<template>
  <div class="player-menu">
    <button
      class="player-menu--item"
      v-if="getIsMainUserId === user"
      @click="loseGame"
    >
      Сдаться
    </button>
    <button class="player-menu--item" v-else>Сделка</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "playerMenu",
  props: ["user"],

  computed: {
    ...mapGetters("playersState", ["getIsMainUserId", "getCurrentId"]),
  },

  methods: {
    loseGame() {
      this.missingUser({ id: this.getCurrentId, status: false });
      this.changeGameState("endDefeat");
    },
    ...mapMutations("playersState", ["missingUser"]),
    ...mapMutations("gameState", ["changeGameState"]),
  },
};
</script>

<style lang="sass" src="@/assets/gameMenu/player-menu.sass"></style>
