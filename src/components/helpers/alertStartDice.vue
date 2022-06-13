<template>
  <div class="alert-start-dice">
    <div class="alert-start-dice__wrapper">
      <p class="alert-start-dice__text">Ваш ход</p>
      <button @click="startDice" class="alert-start-dice__btn">
        Бросить кубики
      </button>
    </div>
  </div>
</template>

<script>
import { newDice } from "../../assets/main/game";

export default {
  name: "alertStartDice",

  methods: {
    startDice() {
      this.$emit("newMainDice", newDice(1).pop());
    },
  },
};
</script>

<style lang="sass" src="@/assets/helpers/alertStartDice.sass"></style>
