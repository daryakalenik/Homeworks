// 1. Найти в массиве Петю и поменять его на Наташу;

let arrOne = [`Маша`, `Петя`, `Ира`, `Вася`];
arrOne[arrOne.indexOf(`Петя`)] = `Наташа`;
console.log(arrOne);

// ИЛИ

let arrOne = [`Маша`, `Петя`, `Ира`, `Вася`];
for (let i = 0; i < arrOne.length; i++) {
  if (arrOne[i] === `Петя`) {
    arrOne[i] = `Наташа`;
  }
}
console.log(arrOne);

// 2. Добавить каждому элементы массива "Mrs.", вывести массив в консоль;

let arrTwo = [`Катя`, `Лена`, `Настя`, `Вася`];
arrTwo = arrTwo.map(function (item, index, array) {
  return `Mrs.` + item;
});
console.log(arrTwo);

// ИЛИ

let arrTwo = [`Катя`, `Лена`, `Настя`, `Вася`];
for (i = 0; i < arrTwo.length; i++) {
  arrTwo[i] = `Mrs.` + arrTwo[i];
}
console.log(arrTwo);

// 3. В массиве чисел найти наибольшее, вывести его в консоль;

let arrThree = [4, 16, 20, 1, 5];
arrThree.sort((a, b) => b - a);
console.log(arrThree[0]);

// ИЛИ

let arrThree = [4, 16, 20, 1, 5];
let minNumber = arrThree[0];
let maxNumber = minNumber;
for (i = 1; i < arrThree.length; i++) {
  if (arrThree[i] > maxNumber) {
    maxNumber = arrThree[i];
  }
  if (arrThree[i] < minNumber) {
    minNumber = arrThree[i];
  }
}
console.log(maxNumber);
console.log(minNumber);

// 4. Найти среднее арифметическое всех элементов массива;

let arrFour = [4, 16, 20, 1, 5];
let sum = 0;
for (i = 0; i < arrFour.length; i++) {
  sum += arrFour[i];
}
console.log(sum / arrFour.length);

// 5. Создать пустой массив, с помощью цикла наполнить этот массив единицами и нулями, начиная с 1. Длина массива должна быть равна 8.

let arrFive = [];
arrFive.length = 8;
for (i = 0; i < arrFive.length; i++) {
  if (i % 2 === 0) {
    arrFive[i] = 1;
  } else arrFive[i] = 0;
}
console.log(arrFive);

// 6. Создать пустой массив, заполнить массив нечетными числами. Длина массива должна быть 10.

let arrSix = [];
arrSix.length = 10;
for (i = 0, j = 1; i < arrSix.length; i++, j += 2) {
  if (j % 2 === 1) {
    arrSix[i] = j;
  }
}

console.log(arrSix);

// 7. Вывести на экран количество четных чисел массива arrNum;

let arrSeven = [3, 7, 3, 7, 2, 6, 10, 66, 4, 12];
for (i = 0, j = 0; i < arrSeven.length; i++) {
  if (arrSeven[i] % 2 === 0) {
    j++;
  }
}
console.log(`There is ${j} even numbers`);

// 8. Создать пустой массив, заполнить его элементами, где значение каждого элемента равно квадрату его номера.
//Длина массива должна равняться 8.

let arrEight = [];
arrEight.length = 8;
for (i = 0; i < arrEight.length; i++) {
  arrEight[i] = i * i;
}
console.log(arrEight);

// 9. Даны 2 массива:
let people1 = [
  "Samuel",
  "Jack",
  "Thomas",
  "Henry",
  "Leo",
  "Connor",
  "David",
  "Ryan",
];
let people2 = [
  "Connor",
  "Stanley",
  "Leo",
  "Albert",
  "Owen",
  "Oliver",
  "Ethan",
  "Thomas",
];

// 9.1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.

let userName = prompt(`Enter the name`);
for (i = 0; i < people1.length; i++) {
  if (people1[i] === userName) {
    people2.push(userName);
  }
}
console.log(people2);

//9.2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.

let userNameTwo = prompt(`Enter the name again`);
for (i = 0; i < people2.length; i++) {
  if (userNameTwo === people2[i]) {
    people2.splice(i, 1);
  }
}
console.log(people2);

//9.3. Создайте массив только из тех имен, которые совпадают в обоих массивах.

let arrNames = [];
for (i = 0; i < people1.length; i++) {
  for (j = 0; j < people2.length; j++) {
    if (people1[i] === people2[j]) {
      arrNames.push(people1[i]);
    }
  }
}
console.log(arrNames);

//9.4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.

for (i = 0; i < people1.length; i++) {
  for (j = 0; j < people2.length; j++) {
    if (people1[i] === people2[j]) {
      people2.splice(j, 1);
    }
  }
}
let commonArr = people1.concat(people2);
console.log(commonArr);

//9.5. Отсортируйте получившийся массив по алфавиту

console.log(commonArr.sort());

// 10.1. Дан массив
let arrTen = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

let arrRemoved = arrTen.splice(2, 3);
console.log(arrRemoved);

// 10.2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива

arrTen.splice(5, 2);
arrTen.unshift("Janett", `Franz`);
console.log(arrTen);

// 10.3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"

arrTen.splice(4, 2, `Oleg`, `Valerchik`);
console.log(arrTen);

// 10.4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
//"Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

arrTen.reverse();
console.log(arrTen);
arrTen.splice(0, 4, `Mitrofan`, `Mitrofan`, `Mitrofan`, `Mitrofan`);
console.log(arrTen);

// 10.5. Даны два массива
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
let arrTenTwo = ["Nikodim", "Evlampij", "Aristarkh", "Drogolub", "Vitalij"];

// взять из второго массива все имена начина с "Aristarkh" (включительно) и добавить их в 1ый массив (не должно получится двумерного массива)

let arrTenCommon = arrTen.concat(arrTenTwo.slice(2, arrTenTwo.length));
console.log(arrTenCommon);

// 11. Создайте массив из 10 чисел. Найдите и выведите на экран наименьший четный элемент массива.
let arrEleven = [5, 8, 100, 151, 78, 50, 4, 55, 43, 2];
let minNumberArrEleven = arrEleven[0];
for (i = 0; i < arrEleven.length; i += 2) {
  if (arrEleven[i] < minNumberArrEleven) {
    minNumberArrEleven = arrEleven[i];
  }
}
console.log(minNumberArrEleven);

// 12.  Создать массив из 10 чисел. Среди элементов с нечетными номерами найдите наибольший элемент массива, который делится на 3

let arrTwelve = [5, 8, 100, 78, 151, 50, 48, 81, 55, 300];

let maxNumberArrTwelve = arrTwelve[1];
for (i = 3; i < arrTwelve.length; i += 2) {
  if (arrTwelve[i] % 3 === 0 && arrTwelve[i] > maxNumberArrTwelve) {
    maxNumberArrTwelve = arrTwelve[i];
  }
}
console.log(maxNumberArrTwelve);

// 13. Создайте массив из 10 чисел. Найдите три последовательных элемента в массиве, сумма которых максимальна

let arrThirteen = [1, 2, 3, 41, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (i = 0; i + 2 < arrThirteen.length; i++) {
  let sumCycle = arrThirteen[i] + arrThirteen[i + 1] + arrThirteen[i + 2];
  if (sumCycle > sum) {
    sum = sumCycle;
  }
}
console.log(sum);
