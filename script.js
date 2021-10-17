// 1.	Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]),
// и методом code (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», «Oleg is coding on Java»).
// Метод code должен храниться в прототипе класса.

class Programmer {
  constructor(options) {
    this.name = options.name;
    this.stack = options.stack;
  }
  code() {
    for (let i = 0; i < this.stack.length; i++) {
      console.log(`${this.name} is coding on ${this.stack[i]}`);
    }
  }
}

const programmer1 = new Programmer({
  name: `Oleg`,
  stack: [`Python`, `PHP`, `Java`],
});

programmer1.code();

// 2.	Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»

Programmer.prototype.toString = function newToString() {
  console.log(`Hello! My name is ${this.name}`);
};

programmer1.toString();

// 3.   Создать массив из 10 случайных инстансов Programmer, и отфильтровать его с помощью метода filter так,
// чтобы в результирующий массив попали только те Programmer, у которых длина массива stack больше 4.

let programmer2 = new Programmer({
  name: `Vasya`,
  stack: [`PHP`, `Python`, `Java`, `C++`, `JavaScript`],
});

let programmer3 = new Programmer({
  name: `Petya`,
  stack: [`PHP`, `Python`, `Java`],
});

let programmer4 = new Programmer({
  name: `Katya`,
  stack: [`PHP`, `Python`, `Java`, `C++`, `JavaScript`, `CSS`, `HTML`],
});

let programmer5 = new Programmer({
  name: `Nastya`,
  stack: [`PHP`, `Java`, `C++`, `JavaScript`, `CSS`, `HTML`],
});

let programmer6 = new Programmer({
  name: `Ira`,
  stack: [],
});

let programmer7 = new Programmer({
  name: `Alena`,
  stack: [`Java`],
});

let programmer8 = new Programmer({
  name: `Ira`,
  stack: [`PHP`, `Python`, `Java`, `C++`, `JavaScript`, `CSS`, `HTML`, `Go`],
});

let programmer9 = new Programmer({
  name: `Vika`,
  stack: [`PHP`, `Python`],
});

let programmer10 = new Programmer({
  name: `Polina`,
  stack: [`PHP`, `Python`, `Java`],
});

let arrProgrammers = [
  programmer1,
  programmer2,
  programmer3,
  programmer4,
  programmer5,
  programmer6,
  programmer7,
  programmer8,
  programmer9,
  programmer10,
];

const filterProgrammers = arrProgrammers.filter(
  (elem) => elem.stack.length > 4
);

console.log(filterProgrammers);
