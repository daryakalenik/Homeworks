//  Напишите программу, в которой нужно угадать в какой
// кнопке нет бомбы
//  Бомбы спрятаны в двух из трех кнопок (только одна
// кнопка не взорвется)
//  При нажатии на кнопку с бомбой должен выводится alert
// с надписью «BOOOOOOM!».
//  При нажатии на кнопку без бомбы должен выводится
// alert с надписью «ПРОНЕСЛО»

const bombs = document.getElementsByClassName(`dangerous`);
const notBomb = document.getElementsByClassName(`safe`)[0];
const firstBomb = bombs[0];
const secondBomb = bombs[1];

const doesNotExplode = () => {
  alert(`CONGRATS, YOU DIDN'T EXPLODE!`);
};

const explode = (event) => {
  alert(`BOOM!`);
  if (event.currentTarget === firstBomb) {
    firstBomb.style.backgroundImage = `url("00ae53a95ee7af0be395f5291d792c9a.gif")`;
  } else if (event.currentTarget === secondBomb) {
    secondBomb.style.backgroundImage = `url("00ae53a95ee7af0be395f5291d792c9a.gif")`;
  }
};

notBomb.addEventListener(`click`, doesNotExplode);
firstBomb.addEventListener(`click`, explode);
secondBomb.addEventListener(`click`, explode);
