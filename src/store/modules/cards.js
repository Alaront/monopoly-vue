export default {
  namespaced: true,

  state() {
    return {
      allCards: [
        {
          id: 0,
          title: "Start",
          price: null,
          level: null,
          max_level: null,
          friendsIdCards: [],
          rent: null,
          type: "start",
          owner: null,
          selected: false,
        },
        {
          id: 1,
          title: "Chanel",
          price: 600,
          level: 0,
          max_level: 5,
          friendsIdCards: [3],
          rent: [50, 100, 200, 700, 1200, 2000],
          type: "card",
          lineColor: "#fac123",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 2,
          title: "?",
          price: null,
          level: null,
          max_level: null,
          friendsIdCards: [],
          rent: null,
          type: "question",
          owner: null,
          selected: false,
        },
        {
          id: 3,
          title: "BOSS",
          price: 600,
          level: 0,
          max_level: 5,
          friendsIdCards: [1],
          rent: [60, 120, 300, 800, 1500, 2500],
          type: "card",
          lineColor: "#fac123",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 4,
          title: "$",
          price: 1000,
          level: null,
          max_level: null,
          friendsIdCards: [],
          rent: null,
          type: "card",
          owner: "not",
          selected: false,
        },
        {
          id: 5,
          title: "Mercedes",
          price: 2000,
          level: 0,
          max_level: null,
          friendsIdCards: [],
          rent: 250,
          type: "card",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 6,
          title: "Adidas",
          price: 1000,
          level: 0,
          max_level: 5,
          friendsIdCards: [8, 9],
          rent: [60, 200, 400, 800, 1500, 2100],
          type: "card",
          lineColor: "#0b2c9f",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 7,
          title: "?",
          price: null,
          level: null,
          max_level: null,
          friendsIdCards: [],
          rent: null,
          type: "question",
          owner: null,
          selected: false,
        },
        {
          id: 8,
          title: "Puma",
          price: 1100,
          level: 0,
          max_level: 5,
          friendsIdCards: [6, 9],
          rent: [80, 300, 480, 900, 1700, 2200],
          type: "card",
          lineColor: "#0b2c9f",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 9,
          title: "Lacoste",
          price: 1300,
          level: 0,
          friendsIdCards: [6, 8],
          max_level: 5,
          rent: [200, 400, 600, 1000, 2700, 10],
          type: "card",
          lineColor: "#0b2c9f",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 10,
          title: "jail",
          price: null,
          level: null,
          max_level: null,
          friendsIdCards: [],
          rent: null,
          type: "jail",
          owner: null,
          selected: false,
        },
        {
          id: 11,
          title: "Vk",
          price: 1400,
          level: 0,
          max_level: 5,
          friendsIdCards: [13, 14],
          rent: [300, 900, 1200, 1600, 2000, 2710],
          type: "card",
          lineColor: "#ad0772",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 12,
          title: "RockStar",
          price: 1500,
          level: 0,
          max_level: null,
          friendsIdCards: [],
          rent: 250,
          type: "card",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 13,
          title: "Facebook",
          price: 1500,
          level: 0,
          max_level: 5,
          friendsIdCards: [11, 14],
          rent: [400, 1000, 1400, 1900, 2200, 3000],
          type: "card",
          lineColor: "#ad0772",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 14,
          title: "Twitter",
          price: 1600,
          level: 0,
          max_level: 5,
          friendsIdCards: [11, 13],
          rent: [500, 1200, 1600, 2100, 2500, 3300],
          type: "card",
          lineColor: "#ad0772",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 15,
          title: "Audi",
          price: 2000,
          level: 0,
          max_level: null,
          friendsIdCards: [],
          rent: 250,
          type: "card",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 16,
          title: "CocaCola",
          price: 1800,
          level: 0,
          max_level: 5,
          friendsIdCards: [18, 19],
          rent: [600, 1700, 2200, 2500, 3200, 4000],
          type: "card",
          lineColor: "#18ad07",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 17,
          title: "?",
          price: null,
          level: null,
          max_level: null,
          friendsIdCards: [],
          rent: null,
          type: "question",
          owner: null,
          selected: false,
        },
        {
          id: 18,
          title: "Pepsi",
          price: 1900,
          level: 0,
          max_level: 5,
          friendsIdCards: [16, 15],
          rent: [800, 1900, 2500, 2800, 3500, 4100],
          type: "card",
          lineColor: "#18ad07",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 19,
          title: "Fanta",
          price: 2000,
          level: 0,
          max_level: 5,
          friendsIdCards: [16, 18],
          rent: [900, 1900, 2800, 2800, 3900, 4500],
          type: "card",
          lineColor: "#18ad07",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 20,
          title: "jackpot",
          price: null,
          level: null,
          max_level: null,
          friendsIdCards: [],
          rent: null,
          type: "jackpot",
          owner: null,
          selected: false,
        },
        {
          id: 21,
          title: "American Airlines",
          price: 2200,
          level: 0,
          max_level: 5,
          friendsIdCards: [23, 24],
          rent: [1000, 1590, 2800, 3500, 4900, 5500],
          type: "card",
          lineColor: "#045427",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 22,
          title: "?",
          price: null,
          level: null,
          max_level: null,
          friendsIdCards: [],
          rent: null,
          type: "question",
          owner: null,
          selected: false,
        },
        {
          id: 23,
          title: "Lufthansa",
          price: 2200,
          level: 0,
          max_level: 5,
          friendsIdCards: [21, 24],
          rent: [1100, 1690, 2900, 3600, 5000, 5600],
          type: "card",
          lineColor: "#045427",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 24,
          title: "British Airways",
          price: 2400,
          level: 0,
          max_level: 5,
          friendsIdCards: [21, 23],
          rent: [1500, 1990, 3200, 3800, 5500, 6700],
          type: "card",
          lineColor: "#045427",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 25,
          title: "ford",
          price: 2000,
          level: 0,
          max_level: null,
          friendsIdCards: [],
          rent: 250,
          type: "card",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 26,
          title: "McDonalds",
          price: 2400,
          level: 0,
          max_level: 5,
          friendsIdCards: [27, 29],
          rent: [200, 590, 1200, 3800, 5500, 6700],
          type: "card",
          lineColor: "#5d0854",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 27,
          title: "Burger King",
          price: 2400,
          level: 0,
          max_level: 5,
          friendsIdCards: [26, 29],
          rent: [200, 590, 1200, 3800, 5500, 6700],
          type: "card",
          lineColor: "#5d0854",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 28,
          title: "Rovio",
          price: 2500,
          level: 0,
          max_level: null,
          friendsIdCards: [],
          rent: 250,
          type: "card",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 29,
          title: "KFC",
          price: 2400,
          level: 0,
          max_level: 5,
          friendsIdCards: [26, 27],
          rent: [240, 690, 1300, 3900, 6000, 6700],
          type: "card",
          lineColor: "#5d0854",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 30,
          title: "jail",
          price: null,
          level: null,
          max_level: null,
          friendsIdCards: [],
          rent: null,
          type: "jail",
          owner: null,
          selected: false,
        },
        {
          id: 31,
          title: "Holiday",
          price: 2500,
          level: 0,
          max_level: 5,
          friendsIdCards: [32, 34],
          rent: [280, 890, 1400, 4100, 6000, 8100],
          type: "card",
          lineColor: "#5d0808",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 32,
          title: "Radisson",
          price: 2800,
          level: 0,
          max_level: 5,
          friendsIdCards: [31, 34],
          rent: [300, 990, 1600, 4600, 6200, 8300],
          type: "card",
          lineColor: "#5d0808",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 33,
          title: "?",
          price: null,
          level: null,
          max_level: null,
          friendsIdCards: [],
          rent: null,
          type: "question",
          owner: null,
          selected: false,
        },
        {
          id: 34,
          title: "Novotel",
          price: 3000,
          level: 0,
          max_level: 5,
          friendsIdCards: [31, 32],
          rent: [500, 1290, 1800, 5100, 7200, 9300],
          type: "card",
          lineColor: "#5d0808",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 35,
          title: "LandRover",
          price: 2000,
          level: 0,
          max_level: null,
          friendsIdCards: [],
          rent: 250,
          type: "card",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 36,
          title: "taxes",
          price: null,
          level: null,
          max_level: null,
          friendsIdCards: [],
          rent: null,
          type: "taxes",
          owner: null,
          selected: false,
        },
        {
          id: 37,
          title: "Apple",
          price: 3300,
          level: 0,
          max_level: 5,
          friendsIdCards: [39],
          rent: [800, 1490, 2100, 5500, 7800, 9500],
          type: "card",
          lineColor: "#8939c9",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
        {
          id: 38,
          title: "?",
          price: null,
          level: null,
          max_level: null,
          friendsIdCards: [],
          rent: null,
          type: "question",
          owner: null,
          selected: false,
        },
        {
          id: 39,
          title: "Nokia",
          price: 3500,
          level: 0,
          max_level: 5,
          friendsIdCards: [37],
          rent: [1000, 2590, 3000, 7000, 10000, 19500],
          type: "card",
          lineColor: "#8939c9",
          backgroundColor: "#ffffff",
          owner: null,
          selected: false,
          laid: false,
        },
      ],

      cardIndex: 0,
    };
  },

  mutations: {
    changeCardIndex(state, index) {
      state.cardIndex = index;
    },

    buyCard(state, data) {
      state.allCards[state.cardIndex].owner = data.userId;

      if (state.allCards[state.cardIndex].backgroundColor)
        state.allCards[state.cardIndex].backgroundColor = data.userColor;
    },

    changeSelectOneCard(state, id) {
      state.allCards.forEach((item) => {
        if (item.id === id) {
          item.selected = !item.selected;
        } else {
          item.selected = false;
        }
      });
    },

    layCard(state, id) {
      state.allCards.forEach((item) => {
        if (item.id === id) {
          item.laid = !item.laid;
        }
      });
    },

    cardLoss(state, id) {
      state.allCards.forEach((item) => {
        if (item.id === id) {
          item.backgroundColor = "#ffffff";
          item.owner = null;
        }
      });
    },

    improveCard(state, id) {
      state.allCards.forEach((item) => {
        if (item.id === id) {
          item.level += 1;
        }
      });
    },
  },

  getters: {
    test(state) {
      state.allCards.forEach((item) => {
        state.allCards.forEach((twoItem) => {
          if (item.id === twoItem.id) {
            //console.log(item.title, twoItem.title);
          }
        });
      });
    },

    getAllCards(state) {
      return state.allCards;
    },

    getIsCard(state) {
      let flag = false;
      state.allCards.forEach((item) => {
        if (item.id === state.cardIndex && item.type === "card") {
          flag = true;
          return false;
        }
      });

      return flag;
    },

    getCardPrice(state) {
      return state.allCards[state.cardIndex].price;
    },

    getCanImprove(state) {
      let price = 0;
      let canLevel;
      state.allCards.forEach((item) => {
        if (item.selected) {
          price = item.rent[item.level + 1] + item.price;
          canLevel = item.level < item.max_level;
        }
      });
      return { price, canLevel };
    },

    getRentCard(state) {
      if (Array.isArray(state.allCards[state.cardIndex].rent)) {
        return state.allCards[state.cardIndex].rent[
          state.allCards[state.cardIndex].level
        ];
      }

      return state.allCards[state.cardIndex].rent;
    },

    getMoneyForLay(state) {
      let money = 0;
      state.allCards.forEach((item) => {
        if (item.selected) money = item.price;
      });
      return money;
    },

    belongCard(state) {
      return state.allCards[state.cardIndex].owner;
    },
  },
};
