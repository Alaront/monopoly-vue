import { getRandomArbitrary } from "../scripts";

export function newMoveOrder() {
  let orderArray = [
    getRandomArbitrary(2, 13),
    getRandomArbitrary(2, 13),
    getRandomArbitrary(2, 13),
  ];

  //const duplicateIndex = [];

  let flag = false;
  orderArray.forEach((item, index) => {
    if (orderArray.includes(item, index + 1)) {
      flag = true;
    }

    if (flag) return false;
  });

  if (flag) {
    orderArray = newMoveOrder();
  }

  return orderArray;
}

export function newDice(count) {
  const arrayDice = [];

  for (let i = 0; i < count; i++) {
    arrayDice.push(getRandomArbitrary(2, 13));
  }

  return arrayDice;
}

export function enoughMoneyBuy(userHaveMoney, cardPrice) {
  console.log("enoughMoneyBuy", userHaveMoney, cardPrice);
  return userHaveMoney >= cardPrice;
}
