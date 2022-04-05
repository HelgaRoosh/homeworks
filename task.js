"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let diskr = b ** 2 - 4 * a * c;
  if (diskr > 0) {
    arr[0] = (-b + Math.sqrt(diskr)) / (2 * a);
    arr[1] = (-b - Math.sqrt(diskr)) / (2 * a);
  } else if (diskr === 0) {
    arr[0] = - b / (2 * a);
  };
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
