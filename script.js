// 1.Написать функцию, которая находит сумму чисел от 100 до 200 кратных переданному функции числу

function sumMultipleNum(n) {
  let sum = 0;
  for (i = 101; i < 200; i++) {
    if (i % n === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumMultipleNum(10));

// 2. Написать функцию, которая принимает массив и степень. Функция возвращает массив, в котором каждое число массива возведено в указанную степень.

function elevate(arr, n) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(arr[i], n);
  }
  return arr;
}
let arrOne = [2, 3];
console.log(elevate(arrOne, 2));

// 3. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном.
// Массив, который возвращает функция [1,4,6,74].

const arrThree = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];

function eliminateRep(arr) {
  let result = [];
  for (let i = 0; i < arrThree.length; i++) {
    for (let j = i + 1; j < arrThree.length; j++) {
      if (arrThree[i] === arrThree[j] && result.indexOf(arrThree[j]) === -1) {
        result.push(arrThree[j]);
      }
    }
  }
  return result;
}
console.log(eliminateRep(arrThree));

// 4. Написать функцию, которая принимает случайный двумерный массив (разной длины) из 8 элементов.
// Функция возвращает тот массив сумма элементов которого наибольшая.

let arrFour = [];
for (let i = 0; i < 8; i++) {
  arrFour[i] = [];
  for (let j = 0; j < Math.floor(Math.random() * 15); j++) {
    arrFour[i].push(Math.floor(Math.random() * 10));
  }
}
console.log(arrFour);

function biggestSumArray(arr) {
  let sum = [];
  let indexesToShow = [];
  let maxValue = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (sum[i]) {
        sum[i] += arr[i][j];
      } else {
        sum[i] = arr[i][j];
      }
    }
  }

  for (let i = 0; i < sum.length; i++) {
    if (sum[i] > maxValue) {
      maxValue = sum[i];
      indexesToShow = [i];
    } else if (sum[i] === maxValue) {
      indexesToShow.push(i);
    }
  }

  for (let i = 0; i < indexesToShow.length; i++) {
    console.log(arr[indexesToShow[i]], "index: " + indexesToShow[i]);
  }
  return arr[indexesToShow];
}

console.log(biggestSumArray(arrFour));
