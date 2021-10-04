// 1. Напишите функцию isEmptyObj(), которая проверяет пуст
// объект или нет. Если объект пуст, функция вернет true, если в
// объекте есть хотя бы одно поле, функция вернет false

function isEmptyObj(obj) {
  for (key in obj) {
    return false;
  }
  return true;
}
const object = {};
const objectTwo = {
  name: `Stas`,
};
console.log(isEmptyObj(objectTwo));
console.log(isEmptyObj(object));

// 2. Создайте объект pupyrki (пупырки). Внутри объекта должны
// быть поля blue: 120, red: 250, orange: 23, purple: 231.
// Напишите программу, которая выведет на экран сумму всех
// пупырок (при подсчете, данные обязательно брать из
// объекта).

const pupyrki = {
  blue: 120,
  red: 250,
  orange: 23,
  purple: 231,
};
let sum = 0;
for (key in pupyrki) {
  sum += pupyrki[key];
}

console.log(sum);

// 3. Создайте объект shtuchki. Добавьте в объект поля shtuchka1:
// 200, shtuchka2: 521, shtuchka3: 113, shtuchka4: 314, shtuchka5:
// 871. Напишите программу, которая выведет на экран
// наибольшую штучку (программа должна быть универсальна
// и выводить наибольшую штучку даже если поменяются
// значения).

const shtuchki = {};
shtuchki[`shtuchka1`] = 200;
shtuchki[`shtuchka2`] = 521;
shtuchki[`shtuchka3`] = 113;
shtuchki[`shtuchka4`] = 314;
shtuchki[`shtuchka5`] = 871;
console.log(shtuchki);
let maxShtuchka = 0;
for (key in shtuchki) {
  if (shtuchki[key] > maxShtuchka) {
    maxShtuchka = shtuchki[key];
  }
}

console.log(maxShtuchka);

// 4. Дан объект:
// student { math: 5, biology: 3, language: 2, isOboltus: ‘yes’ }.
// Напишите программу, которая умножит все ЧИСЛОВЫЕ (и
// только числовые) значения на 2 и перезапишет каждое
// свойство объекта (числового типа)

let student = {
  math: 5,
  biology: 3,
  language: 2,
  isOboltus: `yes`,
};

for (key in student) {
  if (!isNaN(student[key])) {
    student[key] = student[key] * 2;
  }
}

console.log(student);
