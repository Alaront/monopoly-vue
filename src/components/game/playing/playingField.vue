<template>
  <div class="playing-field">
    <div class="playing-field__horizon-one">
      <playing-field-card
        v-for="item in getAllCards.slice(0, 11)"
        v-bind:key="item.id"
        :data="item"
        typeV="horizont"
      />
    </div>

    <div class="playing-field__column-wrapper">
      <div class="playing-field__column-one">
        <playing-field-card
          v-for="item in getAllCards.slice(31).reverse()"
          v-bind:key="item.id"
          :data="item"
          typeV="vertical"
        />
      </div>
      <div class="playing-field__column-two">
        <playing-field-card
          v-for="item in getAllCards.slice(11, 20)"
          v-bind:key="item.id"
          :data="item"
          typeV="vertical"
        />
      </div>
    </div>

    <div class="playing-field__horizon-two">
      <playing-field-card
        v-for="item in getAllCards.slice(20, 31).reverse()"
        v-bind:key="item.id"
        :data="item"
        typeV="horizont"
      />
    </div>
  </div>
</template>

<script>
import playingFieldCard from "./playingFieldCard";

import { mapGetters } from "vuex";

export default {
  components: {
    "playing-field-card": playingFieldCard,
  },
  name: "playingField",

  data() {
    return {
      cards: [],
      title: "name",
    };
  },

  computed: {
    ...mapGetters("cardsState", ["getAllCards"]),
    ...mapGetters("playersState", ["getAllPlayers"]),
  },
};
</script>

<style lang="sass" src="@/assets/playingField/style.sass"></style>
