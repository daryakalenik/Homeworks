//  Напишите программу, в которой нужно угадать в какой
// кнопке нет бомбы
//  Бомбы спрятаны в двух из трех кнопок (только одна
// кнопка не взорвется)
//  При нажатии на кнопку с бомбой должен выводится alert
// с надписью «BOOOOOOM!».
//  При нажатии на кнопку без бомбы должен выводится
// alert с надписью «ПРОНЕСЛО»

const bombs = [...document.getElementsByClassName(`bomb`)];

const randomBombIndex = Math.floor(Math.random() * bombs.length);

const doesNotExplode = () => {
  alert(`CONGRATS, YOU DIDN'T EXPLODE!`);
};

const explode = (event) => {
  alert(`BOOM!`);
  if (event.currentTarget === bombs[0]) {
    bombs[0].style.backgroundImage = `url("00ae53a95ee7af0be395f5291d792c9a.gif")`;
  } else if (event.currentTarget === bombs[1]) {
    bombs[1].style.backgroundImage = `url("00ae53a95ee7af0be395f5291d792c9a.gif")`;
  } else if (event.currentTarget === bombs[2]) {
    bombs[2].style.backgroundImage = `url("00ae53a95ee7af0be395f5291d792c9a.gif")`;
  }
};

bombs.forEach((element, index) => {
  if (index === randomBombIndex) {
    element.addEventListener(`click`, doesNotExplode);
  } else element.addEventListener(`click`, explode);
});
