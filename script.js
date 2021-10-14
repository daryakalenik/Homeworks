//1. Дан массив объектов, каждому объекту из этого массива необходимо добавить метод .sayHello()
// который выводит сообщение вида "Hello! My name is {NAME}", где NAME - это поле name каждого объекта

let sayHello = function () {
  console.log(`Hello! My name is ${this.name}`);
};

const persons = [
  {
    name: "One",
    age: 1,
  },
  {
    name: "Two",
    age: 2,
  },
  {
    name: "Three",
    age: 3,
  },
  {
    name: "Four",
    age: 4,
  },
];

for (i = 0; i < persons.length; i++) {
  persons[i].run = sayHello;
  persons[i].run();
}

// 2. используя setTimeout и цикл, вызовите метод .sayHello() у каждого объекта с задержкой в 1 секунду

let time = 1000;
for (i = 0; i < persons.length; i++) {
  setTimeout(persons[i].run.bind(persons[i]), time);
  time += 1000;
}

// 3. используя объект const creature = { name: 'Ctulhu', eyes: 8 }, заставьте creature воспользоваться
// методом .sayHello() любого объекта из массива, при этом не добавляя этот метод в creature

const creature = { name: "Ctulhu", eyes: 8 };
persons[0].run.call(creature);

// 4. напишите функцию которая принимает коллбэк (метод .sayHello() любого объекта из массива)
// эта функция должна выводить сообщение вида "Ladies and Gentlemen, here is our person: "
// после чего должна запускать коллбэк (метод .sayHello() любого объекта из массива)
// пример:

let presentationPersons = function (arrObj) {
  console.log(`Ladies and Gentlemen, here is our person:`);
  arrObj;
};

presentationPersons(persons[0].run.call(persons[0]));

// presentation(persons[0].sayHello)
// =====>>>>>
// "Ladies and Gentlemen, here is our person: "
// "Hello! My name is One"

// presentation(persons[1].sayHello)
// =====>>>>>
// "Ladies and Gentlemen, here is our person: "
// "Hello! My name is Two
