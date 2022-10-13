//Задача 1.   Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.  Попробуйте реализовать эту функцию не только с помощью if...else, но и с помощью тернарного оператора, и в виде стрелочной функции.

const getFromTwo = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

// function getFromTwo(a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else return 0;
// }

// console.log(getFromTwo(3, 2));
// console.log(getFromTwo(2, 3));
// console.log(getFromTwo(3, 3));

//Задача 2  Напишите функцию, которая принимает 2 параметра: длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то функция вычисляет площадь квадрата.  Подсказка: используйте параметры функции по умолчанию.

const getArea = (a, b = a) => a * b;

// console.log(getArea(4, 5));
// console.log(getArea(5));

//Задача 3 Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

const getSomething = (a, b) =>
  a % 2 == 0 ? (b % 2 == 0 ? a * b : b) : b % 2 == 0 ? a : a + b;

// console.log(getSomething(4, 5));
// console.log(getSomething(5, 5));
// console.log(getSomething(6, 6));
// console.log(getSomething(7, 8));

//Задача 4Написать функцию, которая принимает 1 аргумент (возраст пользователя) и возвращает boolean значение  - можно ему на сайт или нет.( если 18 и больше лет)
const getAge = (age) => age >= 18;

// console.log(getAge(20));
// console.log(getAge(17));

//Задача 5 Написать функцию, которая принимает 3 аргумента, если 1 аргумент true. - то складывать 2 и 3 аргумент , если 1-ый аргумент false  - вычитать 2 и 3 аргументы
const calcArgs = function (a, b, c) {
  if (a) return b + c;
  else return b - c;
};

// console.log(calcArgs(true, 4, 5));
// console.log(calcArgs(false, 5, 3));

//Задача 6 Написать функцию, которая принимает 1 аргумент (кол-во итераций цикла)  и выводит на страницу столько красных кругов на страницу https://learn.javascript.ru/modifying-document*/
const createCircles = (n) => {
  for (let i = 0; i < n; i++) {
    let circle = document.createElement('div');
    circle.style.cssText =
      'width:100px;height:100px;background:red;border-radius:50%;margin-bottom:10px;';
    document.body.appendChild(circle);
  }
};

// createCircles(10);
