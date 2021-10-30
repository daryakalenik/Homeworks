// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

function toggleMe() {
  let a = true;
  return function () {
    return (a = !a);
  };
}

let switcher = toggleMe();

console.log(switcher());
console.log(switcher());
console.log(switcher());
console.log(switcher());

// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 100, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 100, то функция считает
// количество от этого числа до 0

function funcCounter() {
  let counter = 0;
  let ascend = true;
  return function (num) {
    if (num !== undefined) {
      counter = num;
      if (counter < 100) {
        ascend = true;
      } else if (counter > 100) {
        ascend = false;
      }
    }
    if (ascend) {
      return ++counter;
    } else if (counter === 0) {
      return 0;
    } else return --counter;
  };
}

let counter = funcCounter();
console.log(counter());
console.log(counter());
console.log(counter(20));
console.log(counter());
console.log(counter());
console.log(counter(120));
console.log(counter());
console.log(counter());

// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.

function classNameEditor() {
  let name = ``;
  let arrClassNames = [];
  return function (str, bool) {
    if (bool) {
      name = str;
      arrClassNames.push(name);
      return console.log(arrClassNames.join(`, `));
    } else {
      name = str;
      let a = arrClassNames.indexOf(name);
      if (a > -1) {
        arrClassNames.splice(a, 1);
        return console.log(arrClassNames.join(`, `));
      } else return console.log(arrClassNames.join(`, `));
    }
  };
}

let classNameEditing = classNameEditor();

classNameEditing(`name`, true);
classNameEditing(`another`, true);
classNameEditing(`third`, true);
classNameEditing(`name`, false);
classNameEditing(`last`, false);
