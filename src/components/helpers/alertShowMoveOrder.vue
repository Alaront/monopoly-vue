<template>
  <div class="alert-show-move-order">
    <div class="alert-show-move-order__wrapper">
      <h3 class="alert-show-move-order__title">Порядок ходов</h3>

      <ul class="alert-show-move-order__list">
        <li v-for="(item, index) in getAllPlayers" v-bind:key="item.id">
          {{ index + 1 }}. {{ item.name }}
        </li>
      </ul>

      <button class="alert-show-move-order__btn" @click="$emit('runGame')">
        Начать
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "alertShowMoveOrder",

  data() {
    return {};
  },

  computed: {
    ...mapGetters("playersState", ["getAllPlayers"]),
  },
};
</script>

<style lang="sass" src="@/assets/helpers/alertShowMoveOrder.sass"></style>
