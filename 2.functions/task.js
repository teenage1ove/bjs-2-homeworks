function getArrayParams(...arr) {
  if (arr.length === 0) return 0
  
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let sum,avg = 0
  sum = arr.reduce((acc, cur) => {
      acc+=cur
      return acc
  })
  
  avg = +(sum / arr.length).toFixed(2)

  return { min, max, avg };
}



function summElementsWorker(...arr) {
  if (arr.length === 0) return 0

  return arr.reduce((acc, cur) => {
    acc+=cur
    return acc
  }, 0)
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0

  let min = Math.min(...arr)
  let max = Math.max(...arr)

  return max - min
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0

  let sumEvenElement = 0 // четные
  let sumOddElement = 0 // не четные

  arr.forEach(i => {
    if (i % 2 === 0) {
      sumEvenElement += i
    } else {
      sumOddElement += i
    }
  })

  return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0

  let sumEvenElement = 0
  let countEvenElement = 0

  arr.forEach(i => {
    if (i % 2 === 0) {
      sumEvenElement += i
      countEvenElement += 1
    }
  })

  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {
  if (arrOfArr.length === 0) return 0

  let maxWorkerResult = -Infinity

  for (let i = 0; i < arrOfArr.length;i++) {
    let curArr = arrOfArr[i]
    let curRes = func(...curArr)

    if (curRes > maxWorkerResult) maxWorkerResult = curRes

  }
  return maxWorkerResult
}
