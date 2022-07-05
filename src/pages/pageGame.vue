<template>
  <div class="content-wrapper">
    <div class="gameApp">
      <game-menu />
      <playing-field />
    </div>
    <alert-start-game
      @startNewGame="startNewGame"
      v-if="getGameState === 'off'"
    />
    <alert-show-move-order v-if="needMoveOrderAlert" @runGame="gameLoop" />

    <alert-start-dice v-if="needStartDiceAlert" @newMainDice="diceForMain" />

    <alert-work-field
      v-if="needWorkFieldAlert"
      @newBuyEvent="newEventYes"
    ></alert-work-field>

    <alert-defealt
      v-if="needDefeatAlert || getGameState === 'endDefeat'"
    ></alert-defealt>

    <alert-user-win
      v-if="needAlertUserWin"
      :name="userWinName"
    ></alert-user-win>
  </div>
</template>

<script>
import playingField from "../components/game/playing/playingField";
import gameMenu from "../components/game/menu/gameMenu";
import alertStartGame from "../components/alerts/alertStartGame";
import alertStartDice from "../components/alerts/alertStartDice";
import alertWorkField from "../components/alerts/alertWorkField";
import alertDefealt from "../components/alerts/alertDefeat";
import alertShowMoveOrder from "../components/alerts/alertShowMoveOrder";
import alertUseWin from "../components/alerts/alertUseWin";

import { mapGetters, mapMutations } from "vuex";
import { newDice, newMoveOrder, enoughMoneyBuy } from "../assets/main/game";

export default {
  name: "pageMain",
  components: {
    "playing-field": playingField,
    "game-menu": gameMenu,
    "alert-start-game": alertStartGame,
    "alert-show-move-order": alertShowMoveOrder,
    "alert-start-dice": alertStartDice,
    "alert-defealt": alertDefealt,
    "alert-work-field": alertWorkField,
    "alert-user-win": alertUseWin,
  },

  data() {
    return {
      needMoveOrderAlert: false,
      needStartDiceAlert: false,
      needWorkFieldAlert: false,
      needDefeatAlert: false,
      dice: 0,
      allFieldSort: [],
      needAlertUserWin: false,
      userWinName: "",
    };
  },

  mounted() {
    this.initPoints();
  },

  beforeUnmount() {
    console.log("beforeUnmount");
    this.changeGameState("off");
  },

  methods: {
    initPoints() {
      const { top, left, width, height } = document
        .querySelector(".playing-field-card")
        .getBoundingClientRect();

      let countY = width / 4;
      let countX = height / 5;

      this.getAllPlayers.forEach((item) => {
        document
          .querySelector(".content-wrapper")
          .insertAdjacentHTML(
            "beforeend",
            `<span class="game-chips" data-user=${
              item.id
            } style="background-color: ${item.pointColor} ; top: ${
              top + countX
            }px; left: ${left + countY}px"></span>`
          );

        countY += width / 4;
        countX += height / 5;
      });

      const allField = document.querySelectorAll(".playing-field-card");
      this.allFieldSort = [...allField];

      this.allFieldSort = [...allField].sort(
        (a, b) => a.dataset.field - b.dataset.field
      );

      //console.log("this.allFieldSort", this.allFieldSort);
    },

    startNewGame() {
      //console.log("start");
      this.changeCurrentUser(this.getAllPlayers[this.getUserIndex].id);

      if (this.getMoveStatus) {
        this.changeMoveNumber(newMoveOrder());
        this.sortingUserData();
        this.changeCurrentUser(this.getAllPlayers[this.getUserIndex].id);
        this.needMoveOrderAlert = true;
        //console.log("moveOrder ", this.getAllPlayers);
      }
    },

    async gameLoop() {
      this.needMoveOrderAlert = false;

      while (this.getGameState === "on") {
        console.log("this.getGameState", this.getGameState);
        console.log("a");

        if (this.getCurrentUser.status) {
          const newMove = await this.move();
          //console.log(newMove);

          if (newMove) {
            //console.log("move next");
            this.moveUser({ id: this.getCurrentId, position: this.dice });
            this.payCircle(this.getCurrentId);
            await this.moveChips();
            //console.log("getCurrentUser", this.getCurrentUser);
            /////////!!!!!!!!!!!
            this.changeCardIndex(this.getCurrentUser.position);
            //console.log("getIsCard", this.getIsCard);

            //console.log("this.belongCard ", this.belongCard);
            //console.log("this.getCurrentUser.id ", this.getCurrentUser.id);
            if (this.getIsCard && this.belongCard !== this.getCurrentUser.id) {
              const newBuyOrPay = await this.buyOrPay();

              //console.log(this.belongCard);
              if (newBuyOrPay && this.belongCard === null) {
                this.buyCard({
                  userId: this.getCurrentUser.id,
                  userColor: this.getCurrentUser.pointColor,
                });
                //console.log("getCurrentUser", this.getCurrentUser);
                //console.log("getAllCards", this.getAllCards);
                this.payment({
                  userId: this.getCurrentUser.id,
                  price: this.getCardPrice,
                });
              }
              console.log("debagger", this.belongCard);
              if (
                newBuyOrPay &&
                typeof this.belongCard === "number" &&
                this.belongCard !== this.getCurrentUser.id
              ) {
                console.log("this.belongCard 3", this.belongCard);
                this.payment({
                  userId: this.getCurrentUser.id,
                  price: this.getCardPrice,
                });
                this.acceptPayment({
                  userId: this.belongCard,
                  sum: this.getRentCard,
                });
              } else if (newBuyOrPay && this.belongCard === "not") {
                console.log("bank");
                this.payment({
                  userId: this.getCurrentUser.id,
                  price: this.getCardPrice,
                });
              } else if (
                !newBuyOrPay &&
                (typeof this.belongCard === "number" ||
                  this.belongCard === "not")
              ) {
                this.missingUser({ id: this.getCurrentId, status: false });
                this.userWin();
                console.log("missingUser");
              }
            }
          } else {
            //console.log("ded");
            //this.gameDefeat();
            this.missingUser({ id: this.getCurrentId, status: false });
            this.userWin();
          }
        }

        this.changeUserData();

        //console.log("c");
        //this.changeGameState("off");
      }
    },

    changeUserData() {
      this.changeUserIndex();
      this.changeCurrentUser(this.getAllPlayers[this.getUserIndex].id);
    },

    userWin() {
      const isUserWin = this.getWinUser;

      if (isUserWin) {
        this.needAlertUserWin = true;
        this.userWinName = isUserWin.name;
        this.changeGameState("off");
        console.log("WIN!!!!", isUserWin.name);
      }
    },

    moveChips() {
      //console.log("getCurrentUser moveChips", this.getCurrentUser);
      const allChips = document.querySelectorAll(".game-chips");

      allChips.forEach((item) => {
        // //console.log(
        //   "item.dataset.user",
        //   item.dataset.user,
        //   this.getCurrentUser.id
        // );
        if (Number(item.dataset.user) === this.getCurrentUser.id) {
          const currentField = this.allFieldSort[this.getCurrentUser.position];

          //console.log("this.getCurrentUser ", this.getCurrentUser);

          //console.log(currentField);

          const { top, height, left, width } =
            currentField.getBoundingClientRect();

          item.style.top = `${top + height / 5}px`;
          item.style.left = `${left + width / 4}px`;

          if (this.getCurrentUser.position <= 10) {
            item.style.left = `${left + width / 4}px`;
          } else if (
            this.getCurrentUser.position > 10 &&
            this.getCurrentUser.position <= 20
          ) {
            item.style.top = `${top + height / 5}px`;
          } else if (
            this.getCurrentUser.position > 20 &&
            this.getCurrentUser.position <= 30
          ) {
            item.style.left = `${left + width / 4}px`;
          } else {
            item.style.top = `${top + height / 5}px`;
          }
        }
      });

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
    },

    buyOrPay() {
      if (this.getIsMainUser) {
        this.needWorkFieldAlert = true;
      } else {
        return enoughMoneyBuy(this.getCurrentUser.total, this.getCardPrice);
      }

      return new Promise((resolve) => {
        const timerMove = setTimeout(() => {
          this.needWorkFieldAlert = false;
          resolve(false);
        }, 5000);

        document.addEventListener("newBuyEventYes", () => {
          this.needWorkFieldAlert = false;
          resolve(true);
          clearTimeout(timerMove);
        });

        document.addEventListener("newBuyEventNo", () => {
          this.needWorkFieldAlert = false;
          resolve(false);
          clearTimeout(timerMove);
        });
      });
    },

    move() {
      if (this.getIsMainUser) {
        this.needStartDiceAlert = true;
      } else {
        this.dice = newDice(1).pop();
        return true;
      }

      return new Promise((resolve) => {
        const timerMove = setTimeout(() => {
          //console.log("timerMove, foo2");
          resolve(false);
        }, 5000);

        document.addEventListener("diceForMainEvent", () => {
          //console.log("diceForMainEvent, foo1");
          resolve(true);
          clearTimeout(timerMove);
        });
      });
    },

    diceForMain(dice) {
      //console.log("dice", dice);
      this.dice = dice;

      this.needStartDiceAlert = false;
      let event = new Event("diceForMainEvent");
      document.dispatchEvent(event);
    },

    newEventYes(type) {
      //console.log("type !!!!!!!!!!!!", type);
      if (type) {
        document.dispatchEvent(new Event("newBuyEventYes"));
      } else {
        document.dispatchEvent(new Event("newBuyEventNo"));
      }
    },

    ...mapMutations("playersState", [
      "changeMoveNumber",
      "sortingUserData",
      "changeCurrentUser",
      "moveUser",
      "missingUser",
      "changeUserIndex",
      "payment",
      "acceptPayment",
      "payCircle",
    ]),
    ...mapMutations("gameState", ["changeGameState"]),
    ...mapMutations("cardsState", ["changeCardIndex", "buyCard"]),
  },

  computed: {
    ...mapGetters("gameState", ["getGameState"]),
    ...mapGetters("playersState", [
      "getMoveStatus",
      "getAllPlayers",
      "getCurrentId",
      "getCurrentUser",
      "getIsMainUser",
      "getUserIndex",
      "getMainUserLose",
      "getWinUser",
    ]),
    ...mapGetters("cardsState", [
      "getIsCard",
      "getCardPrice",
      "getRentCard",
      "belongCard",
      "getAllCards",
    ]),
  },

  watch: {
    getMainUserLose: function (newState) {
      console.log("!!!!! getMainUserLose", newState);
      this.needMoveOrderAlert = false;
      this.needStartDiceAlert = false;
      this.needWorkFieldAlert = false;
      this.changeGameState("off");
      this.needDefeatAlert = true;

      this.changeGameState("endDefeat");
    },
  },
};
</script>

<style lang="sass" src="@/assets/main/index.sass"></style>
