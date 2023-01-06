"use strict";

const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");
  let totalValue = 0;

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = +calcSquare.value;
    const calcCountValue = 1 + 0.1 * +calcCount.value;
    const calcDayValue = !calcDay.value
      ? 1
      : +calcDay.value >= 10
      ? 1
      : +calcDay.value > 5
      ? 1.5
      : 2;

    if (calcTypeValue && calcSquareValue) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    total.textContent = totalValue;
  };

  calcBlock.addEventListener("input", () => {
    countCalc();
  });
};

export default calc;
