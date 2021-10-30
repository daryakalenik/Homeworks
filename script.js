class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`${this.name} says hi!`);
  }
}

let stas = new Human(`Stas`, 22);

stas.sayHi();

class Programmer extends Human {
  constructor(name, age, technologies) {
    super(name, age);
    this.technologies = technologies;
  }
  startCoding() {
    console.log(`${this.name} is coding using ${this.technologies}`);
  }
}

let dasha = new Programmer(`Dasha`, 22, [`HTML`, `CSS`, `JS`]);

dasha.startCoding();

class Sportsman extends Human {
  constructor(name, age, medals) {
    super(name, age);
    this.medals = medals;
  }
}

let ustin = new Sportsman(`Ustin`, 22, 2);

class FootballPlayer extends Sportsman {
  constructor(name, age, medals, team) {
    super(name, age, medals);
    this.team = team;
  }
  run(speed) {
    console.log(`${this.name} is running ${speed} kmph`);
  }
}

let kristina = new FootballPlayer(`Kristina`, 25, 5, `Pony`);

kristina.run(10);

class HockeyPlayer extends Sportsman {
  constructor(name, age, medals, weight) {
    super(name, age, medals);
    this.weight = weight;
  }
  pushOpponent(opponentsName) {
    console.log(
      `${this.name} pushed ${opponentsName} and used ${this.weight}kgs`
    );
  }
}

let artem = new HockeyPlayer(`Artem`, 22, 4, 30);

artem.pushOpponent(`Danya`);
