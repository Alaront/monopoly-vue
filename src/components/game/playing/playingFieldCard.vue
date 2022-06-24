<template>
  <div
    class="playing-field-card"
    :class="[
      `playing-field-card--${typeV}`,
      { 'playing-field-card--with-price': data.price },
      { 'playing-field-card--laid': data.laid },
    ]"
    :data-field="[`${data.id}`]"
    :style="{
      'background-color': data.backgroundColor,
    }"
    @click="showCardMenu"
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

    <div
      class="laying-field-menu"
      v-if="data.type === 'card' && data.owner !== 'not'"
      :class="data.selected ? 'laying-field-menu--open' : ''"
    >
      <button @click.stop="laidCard">Продать {{ data.price }}$</button>
      <button @click.stop="improvedCard()">
        Улучшить {{ data.rent[data.level + 1] + data.price }}$
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  props: ["data", "typeV"],
  name: "playingFieldCard",
  methods: {
    showCardMenu() {
      if (this.getCurrentUser.id === this.data.owner) {
        this.changeSelectOneCard(this.data.id);
      }
    },

    laidCard() {
      this.layCard(this.data.id);
      this.acceptPayment({
        userId: this.getCurrentUser.id,
        sum: this.getMoneyForLay,
      });
      this.cardLoss(this.data.id);
      this.changeSelectOneCard(this.data.id);
      this.personCardLoss(this.data.id);
    },

    improvedCard() {
      const canImprove = this.getCanImprove;
      if (
        this.getCurrentUser.total >= canImprove.price &&
        canImprove.canLevel
      ) {
        this.improveCard(this.data.id);
        this.payment({
          userId: this.getCurrentUser.id,
          price: canImprove.price,
        });
      }
    },

    ...mapMutations("cardsState", ["changeSelectOneCard", "cardLoss"]),
    ...mapMutations("cardsState", ["layCard", "improveCard"]),
    ...mapMutations("playersState", [
      "acceptPayment",
      "personCardLoss",
      "payment",
    ]),
  },
  computed: {
    ...mapGetters("playersState", ["getIsMainUserId", "getCurrentUser"]),
    ...mapGetters("cardsState", ["getMoneyForLay", "getCanImprove"]),
  },
};
</script>

<style lang="sass" src="@/assets/playingField/playing-field-card.sass"></style>
