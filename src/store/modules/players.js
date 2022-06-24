export default {
  namespaced: true,

  state() {
    return {
      userData: [
        {
          id: 0,
          name: "Alex",
          total: 10000,
          position: 0,
          owns: [],
          moveNumber: null,
          status: true,
          pointColor: "#5faa12",
          payForCircle: false,
        },
        {
          id: 1,
          name: "Pit",
          total: 1000,
          position: 0,
          owns: [],
          moveNumber: null,
          status: true,
          pointColor: "#1242aa",
          payForCircle: false,
        },
        {
          id: 2,
          name: "Erick",
          total: 5000,
          position: 0,
          owns: [],
          moveNumber: null,
          status: false,
          pointColor: "#aa124c",
          payForCircle: false,
        },
      ],

      mainUser: 0,
      currentUser: null,
      userIndex: 0,

      mainUserLose: false,
    };
  },

  mutations: {
    changeCurrentUser(state, newData) {
      state.currentUser = newData;
    },

    changeUserIndex(state) {
      state.userIndex =
        state.userIndex === state.userData.length - 1
          ? 0
          : (state.userIndex += 1);
    },

    changeMoveNumber(state, newOrder) {
      //console.log("newOrder", newOrder);
      newOrder.forEach((item, index) => {
        state.userData[index].moveNumber = item;
      });
    },

    sortingUserData(state) {
      state.userData = state.userData.sort(
        (a, b) => a.moveNumber - b.moveNumber
      );
    },

    moveUser(state, newData) {
      state.userData.forEach((item) => {
        if (item.id === newData.id) {
          if (newData.position + item.position <= 39) {
            item.position = newData.position + item.position;
          } else {
            item.position = newData.position + item.position - 40;

            item.payForCircle = true;
          }
        }
      });
    },

    payCircle(state, id) {
      state.userData.forEach((item) => {
        if (item.id === id && item.payForCircle) {
          console.log("pay");
          item.payForCircle = false;
          item.total += 4000;
        }
      });
    },

    missingUser(state, newData) {
      console.log(newData);
      state.userData.forEach((item) => {
        if (item.id === newData.id) {
          item.status = newData.status;

          if (newData.id === state.mainUser) state.mainUserLose = true;
        }
      });
    },

    payment(state, data) {
      console.log("ddd", state.currentUser);
      state.userData.forEach((item) => {
        if (item.id === data.userId) {
          item.total -= data.price;
        }
      });
    },

    acceptPayment(state, data) {
      state.userData.forEach((item) => {
        if (item.id === data.userId) {
          item.total += data.sum;
        }
      });
    },

    personCardLoss(state, id) {
      state.userData.forEach((item) => {
        if (item.id === state.currentUser) {
          item.owns.forEach((card, index) => {
            if (id === card) delete item.owns[index];
          });
        }
      });
    },
  },

  getters: {
    getAllPlayers(state) {
      return state.userData;
    },

    getMoveStatus(state) {
      let status = false;
      state.userData.forEach((item) => {
        if (item.moveNumber === null) {
          status = true;
        }
      });

      return status ? status : false;
    },

    getCurrentUser(state) {
      let user = null;
      state.userData.forEach((item) => {
        if (item.id === state.currentUser) {
          user = item;
        }
      });

      return user;
    },

    getWinUser(state) {
      let user = null;
      let count = 0;
      state.userData.forEach((item) => {
        if (item.status) {
          count += 1;
          user = item;
        }
      });

      if (count === 1) {
        return user;
      }

      return false;
    },

    getCurrentId(state) {
      return state.currentUser;
    },

    getIsMainUser(state) {
      return state.currentUser === state.mainUser;
    },

    getIsMainUserId(state) {
      return state.mainUser;
    },

    getUserIndex(state) {
      return state.userIndex;
    },

    getMainUserLose(state) {
      return state.mainUserLose;
    },
  },
};
