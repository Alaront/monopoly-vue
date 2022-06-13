<template>
  <div
    class="playing-field-card"
    :class="[
      `playing-field-card--${typeV}`,
      { 'playing-field-card--with-price': data.price },
    ]"
    :data-field="[`${data.id}`]"
    :style="{
      'background-color': data.backgroundColor,
    }"
  >
    <h4>{{ data.title }}</h4>

    <div
      v-if="data.level && data.max_level != data.level"
      class="playing-field-card__stars"
    >
      <img
        v-for="item in data.level"
        src="@/assets/playingField/photo/star.png"
        alt="star"
        v-bind:key="item"
      />
    </div>
    <div
      v-else-if="data.level && data.max_level === data.level"
      class="playing-field-card__stars playing-field-card__stars--gold"
    >
      <img src="@/assets/playingField/photo/star-gold.png" alt="star" />
    </div>

    <span
      v-if="data.price"
      :style="{
        'background-color': data.lineColor ? data.lineColor : '',
        color: data.lineColor ? '#ffffff' : '',
      }"
      class="playing-field-card__price"
      >{{ data.price }}</span
    >
  </div>
</template>

<script>
export default {
  props: ["data", "typeV"],
  name: "playingFieldCard",
};
</script>

<style lang="sass" src="@/assets/playingField/playing-field-card.sass"></style>
