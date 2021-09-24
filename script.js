// /* 1. Написать программу, которая выводит название дня недели по его номеру.
// Если пользователь вводит некорректный день, вывести в консоль сообщение «Incorrect day».
// В этом задании нужно обязательно использовать switch */

let dayOfWeek = prompt(`Enter the day of the week (number)`);

switch (dayOfWeek) {
  case `1`:
    console.log(`Monday`);
    break;
  case `2`:
    console.log(`Tuesday`);
    break;
  case `3`:
    console.log(`Wednesday`);
    break;
  case `4`:
    console.log(`Thursday`);
    break;
  case `5`:
    console.log(`Friday`);
    break;
  case `6`:
    console.log("Saturday");
    break;
  case `7`:
    console.log(`Sunday`);
  default:
    console.log(`Incorrect day`);
}

/* 2. Написать игру «камень, ножницы, бумага»
Первый игрок вводит слово «rock»,  «scissors» или «paper»
После этого второй игрок делает то же самое
Вывести в консоль кто победил: игрок1 или игрок2 согласно правилам игры */

let userOneBet = prompt(`Enter "paper", "rock" or "scissors"`);
let userTwoBet = prompt(`Enter "paper", "rock" or "scissors"`);

if (userOneBet === null || userTwoBet === null) {
  console.log(`One or more players refused to play`);
} else {
  if (
    (userOneBet === `paper` && userTwoBet === `scissors`) ||
    (userOneBet === `rock` && userTwoBet === `paper`) ||
    (userOneBet === `scissors` && userTwoBet === `rock`)
  ) {
    console.log(`User2 won!`);
  } else if (
    (userTwoBet === `paper` && userOneBet === `scissors`) ||
    (userTwoBet === `rock` && userOneBet === `paper`) ||
    (userTwoBet === `scissors` && userOneBet === `rock`)
  ) {
    console.log(`User1 won!`);
  } else if (
    (userTwoBet === `paper` && userOneBet === `paper`) ||
    (userTwoBet === `rock` && userOneBet === `rock`) ||
    (userTwoBet === `scissors` && userOneBet === `scissors`)
  ) {
    console.log(`Draw!`);
  } else {
    console.log(`Invalid data`);
  }
}

/* 3. Переписать в тернарный оператор следующий код:
const age = +prompt(‘enter your age’);
if (age < 10) {
	console.log(‘hi!’);
} else if (age <  20) {
	console.log(‘hello!’);
} else if (age < 50) {
	console.log(‘good day’);
} else {
	console.log(‘ALOHA!’); }
     */

let userAge = prompt(`Enter your age`);
if (userAge === null) {
  console.log(`Invalid data`);
} else {
  userAge = +userAge;
  console.log(
    userAge > 0 && userAge < 10
      ? `Hi!`
      : userAge > 10 && userAge < 20
      ? `Hello!`
      : userAge > 20 && userAge < 50
      ? `Good day!`
      : `Aloha!`
  );
}
