/*"Реализуйте класс Employee (Работник), который будет иметь свойства: firstname (имя),  lastname (фамилия), rate (ставка за день работы), workDays (количество отработанных дней). Также класс должен иметь метод getCurrentSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.           

Работать должно вот так:   

const worker = new Employee('Настя', 'Петрова', 5, 24);

console.log(employee.firstname); //выведет 'Настя'
console.log(employee.lastname); //выведет 'Петрова'
console.log(employee.rate); //выведет 5
console.log(employee.workDays); //выведет 24
console.log(employee.getCurrentSalary()); //выведет  5*24"*/

class Employee {
  constructor(firstName, lastName, rate, workDays) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.rate = rate;
    this.workDays = workDays;
  }

  getCurrentSalary() {
    return this.rate * this.workDays;
  }
}

// https://learn.javascript.ru/number

/*Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.*/
const readNumber = () => {
  let value;

  do {
    value = prompt('Enter a value?', 0);
  } while (!isFinite(value));

  if (!value) {
    return null;
  }

  return +value;
};

/*Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525 */

const getRandomNumber = (min, max) => {
  const num = Math.random() * 10;

  if (!(num >= min && num < max)) {
    return random(min, max);
  }

  return num;
};

// https://learn.javascript.ru/string

/*Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";*/

const setFirstLetteUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

/*Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false*/

const checkSpam = (str) => {
  const forCheck = str.toLowerCase();

  return forCheck.includes('viagra') || forCheck.includes('xxx');
};

/*Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
Например:
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
truncate("Всем привет!", 20) = "Всем привет!"*/

const truncateSentence = (str, maxlength) =>
  str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;

/*Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
Например:
alert( extractCurrencyValue('$120') === 120 ); // true*/

const extractCurrencyValue = (str) => +str.slice(1);

// https://learn.javascript.ru/array

/*Напишите функцию sumInput(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

const getInputNumbersSum = () => {
  let numsArray = [],
    sum = 0,
    value;

  while (!isNaN((value = parseFloat(prompt('Enter a value?', 5))))) {
    numsArray.push(+value);
  }

  for (let val of numsArray) {
    sum += val;
  }

  return sum;
};

/*На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
Например:
getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.*/

const getMaxSubarraySum = (arr) => {
  let maxSubArray = 0;
  tempSum = 0;

  for (let num of arr) {
    tempSum += num;

    if (tempSum < 0) {
      tempSum = 0;
      continue;
    }

    maxSubArray = Math.max(maxSubArray, tempSum);
  }

  return maxSubArray;
};

/*написать цикл for с перебором массива, на каждую этерацию выводить номер итерации (от 0 до 10 и от 10 до 0)*/

const showIterationCount = () => {
  const arr = [15, 20, 30, 40, 66, 77, 85, 10, 6, 1, 12];

  for (let i = 0; i < arr.length; i++) {
    document.write(`Элемент массива: ${arr[i]} <br>
      Номер итерации: [${i}] <br>`);
  }

  document.write('<br>');

  for (i = arr.length - 1; i >= 0; i--) {
    document.write(`Элемент массива: ${arr[i]} <br>
        Номер итерации: [${i}] <br>`);
  }
};

// https://learn.javascript.ru/array-methods

/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.
Примеры:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.*/

const camelizeLine = (str) =>
  str
    .split('-')
    .map((elem, index) =>
      index ? elem.charAt(0).toUpperCase() + elem.slice(1) : elem
    )
    .join('');

/*Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.
Например:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)*/

const filterArrayRange = (arr, minNumber, maxNumber) =>
  arr.filter((elem) => elem >= minNumber && elem <= maxNumber);

/*Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
Например:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]*/

const filterArrayRangeInPlace = (arr, minNumber, maxNumber) => {
  for (let num of arr) {
    if (num >= minNumber && num <= maxNumber) {
      continue;
    }

    arr.splice(arr.indexOf(num), 1);
  }
};

/*Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
// ... ваш код для сортировки по убыванию
alert( arr ); // 8, 5, 2, 1, -10*/

const sortArrayDescending = (arr) => arr.sort((a, b) => b - a);

/*У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)*/

const copySortedArray = (arr) => arr.slice().sort((a, b) => a.localeCompare(b));

/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.*/

function Calculator() {
  this.operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = (str) => {
    const expression = str.split(' '),
      left = +expression[0],
      operator = expression[1],
      right = +expression[2];

    if (
      !Number.isInteger(parseInt(left)) ||
      !Number.isInteger(parseInt(right)) ||
      !this.operators[operator]
    ) {
      alert('Enter correct expression');
      return;
    }

    return this.operators[operator](left, right);
  };

  this.addMethod = (name, func) => {
    if (!name || !func) {
      alert('Enter correct parameters');
      return;
    }

    this.operators[name] = func;
  };
}

/* У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

// let names = ... ваш код 

alert(names); // Вася, Петя, Маша */

const getNamesArrayFromObject = (arr) => arr.map((elem) => elem.name);

/* У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

// let usersMapped =  ... ваш код ... 

// 
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// 

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // Вася Пупкин */

const getFullnameFromObject = (arr) =>
  arr.map(({ name, surname, id }) => ({
    fullName: name + ' ' + surname,
    id,
  }));

/*Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя*/

const sortArrayByAge = (users) => users.sort((a, b) => a.age - b.age);

/*Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.*/

const shuffleArray = (array) => array.sort((a, b) => Math.random() - 0.5);

/*Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28*/

const getArrayAverageAge = (users) => {
  const ageSum = users.reduce((previous, current) => previous + current.age, 0);

  return ageSum / users.length;
};

/*Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
Например:
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O*/

const getUniqueArray = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
};

/*Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

Например:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

// после вызова у нас должно получиться:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }

Такая функция очень удобна при работе с данными, которые приходят с сервера.

В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.

Используйте метод .reduce в решении.*/

const groupObjectById = (arr) =>
  arr.reduce((previous, current) => {
    previous[current.id] = current;
		
    return previous;
  }, {});

// https://learn.javascript.ru/keys-values-entries

/*Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650*/

const getSalariesSum = (salaries) => {
  let result = 0;

  for (let salary of Object.values(salaries)) {
    result += salary;
  }

  return result;
};

/*Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».*/
const getObjectKeysCount = (obj) => Object.keys(obj).length;

// https://learn.javascript.ru/destructuring-assignment

/* У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания:

let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false*/

const user = { name: 'John', years: 30 };
const { name, years: age, isAdmin = false } = user;

/*У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.*/

const getTopSalaryEmployee = (salaries) => {
  let mostPaid = null,
    maxSalary = 0;

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      mostPaid = name;
    }
  }

  return mostPaid;
};
