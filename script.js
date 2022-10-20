//Покажите сообщение с помощью внешнего скрипта
alert('Я JavaScript!');

// Если переменная a равна 10, то выведите "Верно", иначе выведите "Неверно".
const equalTen = +prompt(
  '1. Проверка на: "Если переменная a равна 10, то выведите "Верно", иначе выведите "Неверно"."\nВведите число а?',
  10
);

if (equalTen === 10) {
  alert('1. Верно');
} else {
  alert('1. Неверно');
}

// В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
const min = +prompt(
  '2. Проверка на: "В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую)."\nВведите число от 0 до 59?',
  10
);

if (min >= 1 && min <= 15) {
  alert('2. в первую четверть');
} else if (min >= 16 && min <= 30) {
  alert('2. во вторую четверть');
} else if (min >= 31 && min <= 45) {
  alert('2. в третью четверть');
} else if ((min >= 46 && min <= 59) || !min) {
  alert('2. в четвертую четверть');
} else {
  alert('2. число должно быть от 0 до 59');
}

// Если переменная a равна нулю, то выведите "Верно", иначе выведите "Неверно". Проверьте работу скрипта при a, равном 1, 0, -3.
const equalZero = +prompt(
  '3. Проверка на: "Если переменная a равна нулю, то выведите "Верно", иначе выведите "Неверно". Проверьте работу скрипта при a, равном 1, 0, -3."\n.Какое число в переменной а?',
  10
);

if (!equalZero) {
  alert('3. Верно');
} else {
  alert('3. Неверно.');
}

// Если переменная a больше нуля, то выведите "Верно", иначе выведите "Неверно". Проверьте работу скрипта при a, равном 1, 0, -3.
const greaterZero = +prompt(
  '4. Проверка на: "Если переменная a больше нуля, то выведите "Верно", иначе выведите "Неверно". Проверьте работу скрипта при a, равном 1, 0, -3."\n.Какое число в переменной а?',
  10
);

if (greaterZero > 0) {
  alert('4. Верно');
} else {
  alert('4. Неверно.');
}

// Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
const firstTaskA = +prompt(
  "1. Проверка на: 'Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.'\nВведите число а?",
  10
);

if (firstTaskA > 0 && firstTaskA < 5) {
  alert('1. Верно');
} else {
  alert('1. Неверно');
}

// Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
let secondTaskA = +prompt(
  "2. Проверка на: 'Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.'\nВведите число а?",
  10
);

if (!secondTaskA || secondTaskA === 2) {
  secondTaskA += 7;
} else {
  secondTaskA /= 10;
}

alert(secondTaskA);

// Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
const thirdTaskA = +prompt(
  "3. Проверка на: 'Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.'\nВведите число а?",
  10
);

const thirdTaskB = +prompt('3. Введите число B?', 10);

if (thirdTaskA <= 1 && thirdTaskB >= 3) {
  alert(thirdTaskA + thirdTaskB);
} else {
  alert(thirdTaskA - thirdTaskB);
}

// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
const fourthTaskA = +prompt(
  "4. Проверка на: 'Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.'\nВведите число а?",
  10
);
const fourthTaskB = +prompt('Введите число B?', 10);

if (
  (fourthTaskA > 2 && fourthTaskA < 11) ||
  (fourthTaskB >= 6 && fourthTaskB < 14)
) {
  alert('4. Верно');
} else {
  alert('4. Неверно.');
}

//1. Выведите столбец чисел от 1 до 50. (в консоль и в документ html с помощью document.write) Использовать два типа циклов, while и for
for (let i = 1; i <= 50; i++) {
  document.write(i + '<br>');
}

//2. Выведите столбец чисел от 1 до 100.
for (let i = 1; i <= 100; i++) {
  document.write(i + '<br>');
}

//3. Выведите столбец чисел от 11 до 33.
for (let i = 11; i <= 33; i++) {
  document.write(i + '<br>');
}

//4. Выведите столбец четных чисел в промежутке от 0 до 100.
for (let i = 0; i <= 100; i++) {
  if (!(i % 2)) {
    document.write(i + '<br>');
  }
}

//5. С помощью цикла найдите сумму чисел от 1 до 100.
let result = 0;

for (let i = 1; i <= 100; i++) {
  result += i;
}

document.write('Сумма чисел от 1 до 100: ' + result + '<br>');

//6. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
let num = 0,
  n = 1000;

while (n >= 50) {
  n /= 2;
  num++;
}

document.write('Количество итераций: ' + num + '<br>');
document.write('Полученное число после всех делений: ' + n + '<br>');

//"Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case. Реализуем ввод переменной через prompt"
num = +prompt('Введите номер сезона (1..4):', 1);

switch (num) {
  case 1:
    result = 'зима';
    break;
  case 2:
    result = 'весна';
    break;
  case 3:
    result = 'лето';
    break;
  case 4:
    result = 'осень';
    break;
  default:
    result = 'неверное число';
}

document.write(result + '<br>');

//В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
const month = +prompt('Введите номер месяца (1..12):', 1);

if (month === 12 || month <= 2) {
  result = 'зима';
} else if (month >= 3 && month <= 5) {
  result = 'весна';
} else if (month >= 6 && month <= 8) {
  result = 'лето';
} else if (month >= 9 && month <= 11) {
  result = 'осень';
} else {
  result = 'неверное число';
}

document.write(result + '<br>');

//Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
const strForCheck = prompt('Введите строку:', 'abcde');

result = strForCheck[0] === 'a' ? 'da' : 'net';

document.write(result + '<br>');

//Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
const strWithNumbers = prompt('Введите строку:', '12345');

if (
  strWithNumbers[0] === '1' ||
  strWithNumbers[0] === '2' ||
  strWithNumbers[0] === '3'
) {
  result = 'да';
} else {
  result = 'нет';
}

document.write(result + '<br>');

//Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.
const strFromThree = prompt('Введите строку:', '345');

document.write(+strFromThree[0] + +strFromThree[1] + +strFromThree[2] + '<br>');

//Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

const strFromSix = prompt('Введите строку:', '543345');
const isCondition =  +strFromSix[0] + +strFromSix[1] + +strFromSix[2] ===
  +strFromSix[3] + +strFromSix[4] + +strFromSix[5];

  result = isCondition ? 'да' : 'нет';

document.write(result + '<br>');

//Задача. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.
const str = 'abcde';

document.write(str[0] + '<br>');
document.write(str[1] + '<br>');
document.write(str[str.length - 1] + '<br>');

//Напишите скрипт, который считает количество секунд в переданном кол-ве дней (кол-во дней вводим через prompt)
const days = +prompt('Введите количество дней:', 365);

document.write(days * 24 * 60 * 60 + '<br>');

//Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться. Код для переделки:
num = 1;

num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;

document.write(num + '<br>');

//Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'
const str1 = 'Привет, ',
  str2 = 'Мир!';

document.write(str1 + str2 + '<br>');

//Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.
const name = 'Маиль';

document.write('Привет, ' + name + '<br>');

//Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.
const numForSquare = 5;

document.write(numForSquare ** 2 + '<br>');

//Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.
const num2 = '12345';
result = 1;

for (let i = 0; i < num2.length; i++) {
  result *= num2[i];
}

document.write(result + '<br>');

//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

let testArray = [1, 2, 3, 4, 5];

for (let i = 0; i < testArray.length; i++)
  document.write(testArray[i] + '<br>');

//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
result = 0;

for (let i = 0; i < testArray.length; i++) {
  result += testArray[i];
}

document.write(result + '<br>');

//Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта. var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}

let obj = {
  green: 'зеленый',
  red: 'красный',
  blue: 'голубой',
};

for (let key in obj) {
  document.write(key + ': ' + obj[key] + '<br>');
}

//Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

obj = {
  Коля: '200',
  Вася: '300',
  Петя: '400',
};

for (let key in obj) {
  document.write(key + ' - зарплата ' + obj[key] + ' долларов<br>');
}

//Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

testArray = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < testArray.length; i++) {
  if (testArray[i] > 3 && testArray[i] < 10) {
    document.write(testArray[i] + '<br>');
  }
}
//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

testArray = [2, -5, 9, 15, 0, -4];
result = 0;

for (let i = 0; i < testArray.length; i++) {
  if (testArray[i] > 0) {
    result += testArray[i];
  }
}

document.write(result + '<br>');

//Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

testArray = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < testArray.length; i++) {
  if (testArray[i] === 4) {
    document.write('Есть!<br>');
    break;
  }
}

//Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

testArray = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < testArray.length; i++) {
  if (
    (testArray[i] + '')[0] === '1' ||
    testArray[i].toString()[0] === '2' ||
    `${testArray[i]}`[0] === '5'
  ) {
    document.write(testArray[i] + '<br>');
  }
}

//Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '- 1-2-3-4-5-6-7-8-9-'.

testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
result = '';

for (let i = 0; i < testArray.length; i++) {
  result += testArray[i] + '-';
}

document.write(result + '<br>');

//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

testArray = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

for (let i = 0; i < testArray.length; i++) {
  if (i >= 5) {
    document.write('<b>' + testArray[i] + '</b><br>');
    continue;
  }
  document.write(testArray[i] + '<br>');
}

//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day
const day = 3;

for (let i = 0; i < testArray.length; i++) {
  if (i === day) {
    document.write('<i>' + testArray[i] + '</i><br>');
    continue;
  }
  document.write(testArray[i] + '<br>');
}

//Задача 1.   Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.  Попробуйте реализовать эту функцию не только с помощью if...else, но и с помощью тернарного оператора, и в виде стрелочной функции.

const getFromTwoArrow = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

function getFromTwo(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }

  return 0;
}

//Задача 2  Напишите функцию, которая принимает 2 параметра: длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то функция вычисляет площадь квадрата.  Подсказка: используйте параметры функции по умолчанию.

const getArea = (a, b = a) => a * b;

//Задача 3 Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

const getSomething = (a, b) => {
  let result = 0;

  if (!(a % 2)) {
    if (!(b % 2)) {
      result = a * b;
    } else {
      result = b;
    }
  } else {
    if (!(b % 2)) {
      result = a;
    } else {
      result = a + b;
    }
  }

  return result;
};

//Задача 4Написать функцию, которая принимает 1 аргумент (возраст пользователя) и возвращает boolean значение  - можно ему на сайт или нет.( если 18 и больше лет)
const getAge = (age) => age >= 18;

//Задача 5 Написать функцию, которая принимает 3 аргумента, если 1 аргумент true. - то складывать 2 и 3 аргумент , если 1-ый аргумент false  - вычитать 2 и 3 аргументы
const calcArgs = function (a, b, c) {
  let result = 0;

  if (a) {
    result = b + c;
  } else {
    result = b - c;
  }

  return result;
};

//Задача 6 Написать функцию, которая принимает 1 аргумент (кол-во итераций цикла)  и выводит на страницу столько красных кругов на страницу https://learn.javascript.ru/modifying-document*/
const createCircles = (n) => {
  for (let i = 0; i < n; i++) {
    const circle = document.createElement('div');
    circle.classList.add('myCircle');

    circle.style.cssText =
      'width:100px;height:100px;background:red;border-radius:50%;margin-bottom:10px;';

    document.body.appendChild(circle);
  }
};
