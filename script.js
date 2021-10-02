// 1. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

let userNumber = prompt(`Enter your number`);
let numberOfNumbers = 0;
let sum;
if (userNumber === null || isNaN(userNumber)) {
  console.log(`Invalid data`);
} else {
  sum = +userNumber;
  for (userNumber; userNumber !== null; numberOfNumbers++) {
    userNumber = prompt(`Enter your number`);
    if (isNaN(userNumber)) {
      console.log(`Invalid data`);
    } else {
      sum += +userNumber;
      String(userNumber);
    }
  }
  console.log(sum / numberOfNumbers);
}

// 2. Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0.

let userNumberTaskTwo = prompt(`Enter your number`);
if (userNumberTaskTwo === null || userNumberTaskTwo === "") {
  console.log(`You didn't enter a number`);
}
if (isNaN(userNumberTaskTwo)) {
  console.log(`Invalid data`);
}
if (userNumberTaskTwo > 0) {
  for (userNumberTaskTwo; userNumberTaskTwo > 0; userNumberTaskTwo--) {
    console.log(userNumberTaskTwo);
  }
} else if (userNumberTaskTwo < 0) {
  for (userNumberTaskTwo; userNumberTaskTwo < 0; userNumberTaskTwo++) {
    console.log(userNumberTaskTwo);
  }
} else if (userNumberTaskTwo === "0") {
  console.log(`There is no numbers between 0 and 0`);
}

// 3. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.

let counter = 0;
let userNumberTaskThree = prompt(`Enter your number`);
if (userNumberTaskThree === null) {
  console.log(`You didn't enter anything`);
} else {
  console.log(`Keep going, number is ${userNumberTaskThree}`);
  counter++;
  for (counter; counter <= 4; counter++) {
    if (
      userNumberTaskThree < (userNumberTaskThree = +prompt(`Enter your number`))
    ) {
      console.log(`Keep going, number is ${userNumberTaskThree}`);
    } else {
      console.log(`error`);
      break;
    }
  }
}

// 4. Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// (в слове "заика") равное этому числу.
// Например:
// Вводим 3
// Программа выводит "зазазаика"
// Вводим 5
// Программа выводит "зазазазазаика"

let userNumberTaskFourth = +prompt(`Enter a number`);
let secondSyllable = `ика`;
let firstSyllable = `за`;

console.log(firstSyllable.repeat(userNumberTaskFourth) + secondSyllable);
