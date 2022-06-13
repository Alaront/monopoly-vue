<template>
  <div class="game-menu">
    <h3 class="game-menu__title">Players</h3>

    <div class="game-menu__wrapper">
      <player-item
        v-for="item in getAllPlayers"
        v-bind:key="item.id"
        :id="item.id"
        :name="item.name"
        :total="item.total"
        :pointColor="item.pointColor"
      />
    </div>
  </div>
</template>

<script>
import playerItem from "./playerItem";
import { mapGetters } from "vuex";

export default {
  name: "gameMenu",

  components: {
    "player-item": playerItem,
  },

  data() {
    return {
      playrs: [
        {
          id: 1,
          name: "Erik",
          total: 3000,
        },
        {
          id: 2,
          name: "Alex",
          total: 3000,
        },
        {
          id: 3,
          name: "Pite",
          total: 3000,
        },
      ],
    };
  },

  computed: {
    ...mapGetters("playersState", ["getAllPlayers"]),
  },
};
</script>

<style lang="sass" src="@/assets/gameMenu/style.sass"></style>
