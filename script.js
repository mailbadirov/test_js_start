//Задача 1. Напишите функцию, которая принимает произвольное количество аргументов в виде строк и выводит их через пробел с помощью document.write() в тело html-документа. Например, функция  showWords(""I've"", ""been"", ""learning"", ""JavaScript"", ""for"", ""a"", ""month"") должна вывести фразу ""I've been learning JavaScript for a month"".

const showWords = (...arguments) => document.write(arguments.join(' '));

//Задача 2. Напишите функцию, которая принимает произвольное количество аргументов в виде однозначных чисел и возвращает 1 многозначное число. Например, функция с именем complexDigit() при вызове  complexDigit(3,6,7) вернет число 367, а complexDigit(1,9, 4, 8,3) вернет число 19483.

const complexDigit = (...arguments) => +arguments.join('');

/*Напишите код, выполнив задание из каждого пункта отдельной строкой:
Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.*/

const user = {};
user.name = 'John';
user['surname'] = 'Smith';
user.name = 'Pete';
delete user['name'];

/*Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.*/

const isEmpty = obj => {
  for (const key in obj) {
    return false;
  }

  return true;
}

/*У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.*/

const getSum = obj => {
  let result = 0;

  for (const key in obj) {
    result += obj[key];
  }

  return result;
}

/*Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
Например:
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu);
// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
P.S. Используйте typeof для проверки, что значение свойства числовое.*/

const multiplyNumeric = obj => {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

const calculator = {
  read() {
    this.first = +prompt('First value?', 10);
    this.second = +prompt('Second value?', 5);
  },

  sum() {
    return this.first + this.second;
  },

  mul() {
    return this.first * this.second;
  }
}

/*создать обьект чайник. У него должны быть свойства: модель/производитель, дата производства, срок годности, срок гарантии, цвет, высота, вместимость (сами решаете это число/строка или обьект) и СОСТОЯНИЕ (включен или выключен - isOn) , сколько раз уже включали чайник и  3 метода - включить чайник, выключить чайник, вывести данные о чайнике и очистить данные (очистка значения, сколько раз чайник был включен)*/

const kettle = {
  model: 'Bosch',
  manufactureDate: 2022,
  expirationDate: 2026,
  guaranteePeriod: 2,
  color: 'black',
  height: 20,
  capacity: 2,
  isOn: true,
  turnCount: 0,

  turnOn() {
    this.isOn = true;
    this.turnCount++;
  },

  turnOff() {
    this.isOn = false;
  },

  clearData() {
    this.turnCount = 0;
  },

  getData() {
    let allData = '';
    for (const key in this) {
      if (typeof this[key] === 'function') {
        continue;
      };

      alert(`${key}: ${this[key]}`);
    };
  }
}

/* Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

function Calculator() {
  this.read = () => {
    this.first = +prompt('First value?', 10);
    this.second = +prompt('Second value', 5);
  }

  this.sum = () => this.first + this.second;

  this.mul = () => this.first * this.second;
}

/* Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений */

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = () => this.value += +prompt('new value', 5);
}
