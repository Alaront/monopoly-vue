import { createStore } from "vuex";

import CardsModule from "./modules/cards";
import playersModule from "./modules/players";
import gameModule from "./modules/game";

export default createStore({
  modules: {
    cardsState: CardsModule,
    playersState: playersModule,
    gameState: gameModule,
  },
});
