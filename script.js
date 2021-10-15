// 1.	Даны два массива: oboltusy = [‘Евлампий’,’Никодим’,’Акакий’,’Поликарп’]; и otlichniki = [‘Лукьян’,’Феофил’,’Афиноген’];
// Оказалось, что Никодим начал учиться хорошо и поэтому его необходимо перевести в отличники.
//Напишите программу, которая находит под каким номером идет имя ‘Никодим’ в массиве. После чего программа должна вырезать имя из массива oboltusy и
//вставлять его в массив otlichniki.

let oboltusy = [`Евлампий`, `Никодим`, `Акакий`, `Поликарп`];
let otlichniki = [`Лукьян`, `Феофил`, `Афиноген`];

const nikodimIndex = oboltusy.indexOf(`Никодим`);

let nikodim = oboltusy.splice(nikodimIndex, 1);
otlichniki.push(...nikodim);

console.log(oboltusy);
console.log(otlichniki);

// 2. Напишите функцию hyphenDestroyer(), которая преобразует строки вида «my-short-string» в «my short string».
//То есть, дефисы удаляются и вместо них появляются пробелы.
// Например:
// hyphenDestroyer ("background-color") === 'background сolor';
// hyphenDestroyer ("list-style-image") ==='list style image';
// hyphenDestroyer ("-webkit-transition") === 'webkit transition’;

let stringTest = `my-short-string`;

function hyphenDestroyer(str) {
  return console.log(str.split(`-`).join(` `));
}

hyphenDestroyer(stringTest);

// 3. Дана строка var str = ‘Мама мыла раму’; Написать функцию toWash(str, thing); Где str - это строка в которой надо поменять последнее слово,
//а thing - это, то самое слово которое надо вставить в конец строки. Функция должна возвращать строку.
// Например:
// console.log( toWash(str, ’машину’) ); // ‘Мама мыла машину’
// console.log( toWash(str, ’рябину’) ); // ‘Мама мыла рябину’
// console.log( toWash(str, ‘картину’) ); // ‘Мама мыла картину’

var str = `Мама мыла раму`;
function toWash(str, thing) {
  let newStr = str.split(` `);
  newStr.splice(-1, 1);
  newStr.push(thing);
  return console.log(newStr.join(` `));
}
toWash(str, `картину`);

// 4. Дан массив
// arr = [4,-9,49,12, -2, -4, 5, -10, -22, 13, 14];

// a) Создайте на основе arr, новый массив где каждый элемент имеет противоположный знак в отличии от оригинального ([-4,9,-49,-12,2,4,-5, 10, 22, -13, -14])
// b) отфильтруйте массив так, чтобы в результате получился массив только положительных чисел
// c) с помощью reduce посчитайте сумму только четных чисел

const arr = [4, -9, 49, 12, -2, -4, 5, -10, -22, 13, 14];

// а)
const newArr = arr.map(function (item, index, array) {
  return item * -1;
});
console.log(newArr);

// b)
const arrPositive = arr.filter(function (item, index, array) {
  return item > 0;
});

console.log(arrPositive);

// c)

const sum = arr.reduce(
  (prev, item) => (item % 2 === 0 ? item + prev : prev),
  0
);

console.log(sum);
