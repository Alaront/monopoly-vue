<template>
  <div class="alert-work-field">
    <div class="alert-work-field__wrapper">
      <h3 class="alert-work-field__text">{{ titleText() }}</h3>
      <div class="alert-work-field-btn-wrapper">
        <button
          class="alert-work-field__btn"
          @click="this.$emit('newBuyEvent', true)"
        >
          Заплатить
        </button>
        <button
          class="alert-work-field__btn"
          @click="this.$emit('newBuyEvent', false)"
        >
          Отказаться
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "alertWorkField",

  props: ["typeField"],

  methods: {
    titleText() {
      if (this.typeField === "buy") {
        return "Купить ?";
      } else {
        return "Оплатить ?";
      }
    },
  },
};
</script>

<style src="@/assets/alerts/alertWorkField.sass" lang="sass"></style>
