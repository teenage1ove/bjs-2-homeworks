"use strict"
function solveEquation(a, b, c) {
    let arr = [];
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) 
        return arr

    if (d === 0) {
        arr.push(-b / (2 * a))
        return arr
    }

    let firstX = (-b + Math.sqrt(d)) / (2 * a)
    let secondX = (-b - Math.sqrt(d)) / (2 * a)

    arr.push(firstX, secondX)
    return arr

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentInMonth = percent / 100 / 12
  let bodyCredit = amount - contribution

  let monthPay = bodyCredit * (percentInMonth + (percentInMonth / (((1 + percentInMonth)**countMonths) - 1)))

  return +(monthPay * countMonths).toFixed(2)
}

