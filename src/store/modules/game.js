export default {
  namespaced: true,

  state() {
    return {
      gameState: "off",
    };
  },

  mutations: {
    changeGameState(state, newState) {
      state.gameState = newState;
    },
  },

  getters: {
    getGameState(state) {
      return state.gameState;
    },

    // getMoveOrder(state) {
    //   return state.moveOrder;
    // },
  },
};
