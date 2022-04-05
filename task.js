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
  
  if (isNaN(percent)) {
    console.log('Параметр "Процентная ставка" содержит неправильное значение "'  + percent + '"'); 
    totalAmount = 'Параметр "Процентная ставка" содержит неправильное значение "'  + percent + '"';
    return(totalAmount);
  } else if (isNaN(contribution)) {
    console.log('Параметр "Начальный взнос" содержит неправильное значение "'  + contribution + '"'); 
    totalAmount = 'Параметр "Начальный взнос" содержит неправильное значение "'  + contribution + '"';
    return(totalAmount);
  } else if (isNaN(amount)) {
    console.log('Параметр "Общая стоимость" содержит неправильное значение "'  + amount + '"'); 
    totalAmount = 'Параметр "Общая стоимость" содержит неправильное значение "'  + amount + '"';
    return(totalAmount);
  } else {
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);

  let creditBody = amount - contribution;
  percent = percent / 1200;

  /*let monthCounter = Number('36'); здесь надо посчитать сколько месяцев */
  let nowDate = Date.now(); /*считаем миллисек на текущую дату*/
  let enterDate = date.getTime();/*считаем миллисек на введенную дату*/
  let monthCounter = (enterDate - nowDate) / (60 * 60 * 1000 * 24 * 30.42); /*разницу делим на колво миллисек в месяце*/
  /*считаем в миллисек - 1000 в секунде, 60 в минуте, 60 в часе, 24 в сутках, среднее колво дней в месяце 30.42*/
  monthCounter = Math.round(monthCounter);/*округляем к ближайшему целому*/

  let monthAmount = creditBody * (percent + (percent / (((1 + percent) ** monthCounter) - 1)));
  /*Платеж = S * (P + (P / (((1 + P)^n) - 1))), 
  где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев*/
  totalAmount = (monthAmount * monthCounter).toFixed(2);
  totalAmount = Number(totalAmount);
  console.log(totalAmount);
  return totalAmount;
}
}