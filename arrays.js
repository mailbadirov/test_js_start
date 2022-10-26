/*0. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.*/
let rowOfNumbers = '';

for (let i = 1; i <= 9; i++) {
  rowOfNumbers += i;
}

/*1. Нарисуйте пирамиду, как показано ниже только у вашей пирамиды должно быть 12 рядов:

x
xx
xxx
xxxx
xxxxx*/

for (let i = 1; i < 13; i++) {
  document.write('x'.repeat(i) + '<br>');
}

/*2.  С помощью двух вложенных циклов нарисуйте следующую пирамидку:
1
22
333
4444
55555
666666
7777777
88888888
999999999*/

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(i);
  }

  document.write('<br>');
}

/*3. Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
xx
xxxx
xxxxxx
xxxxxxxx
xxxxxxxxxx*/

for (let i = 2; i <= 10; i += 2) {
  document.write('x'.repeat(i) + '<br>');
}

/*4.   Пирамидка с цифрами
111
222
333
444
555
666
777
888
999*/

for (let i = 1; i <= 9; i++) {
  document.write(`${i}`.repeat(3) + '<br>');
}

/*5. Напишите функцию goThroughArray(list), которая проходится по массиву и выводит каждый элемент.*/

const goThroughArray = (list) => {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
};

/*6. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.*/

const combinedArray = [...['a', 'b', 'c'], ...[1, 2, 3]];
// const combinedArray = ['a', 'b', 'c'].combinedArray([1, 2, 3]);

/*7. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.*/

const pushedArray = ['a', 'b', 'c'];
pushedArray.push(1, 2, 3);

/*8. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].*/

const splicedArray = [1, 2, 3, 4, 5];
splicedArray.splice(1, 2);

/*9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].*/

const addedBySplice = [1, 2, 3, 4, 5].splice(1, 3);

/*10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].*/

const editedBySplice = [1, 2, 3, 4, 5];
editedBySplice.splice(3, 0, 'a', 'b', 'c');

/*11.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/

const editBySpliceSecond = [1, 2, 3, 4, 5];
editBySpliceSecond.splice(1, 0, 'a', 'b');
editBySpliceSecond.splice(6, 0, 'c');
editBySpliceSecond.splice(8, 0, 'e');

/*12. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.*/

const sortedArray = [3, 4, 1, 2, 7].sort();

/*13. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.*/

const keysOfObjectArray = Object.keys({
  js: 'test',
  jq: 'hello',
  css: 'world',
});

/*14. Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл. */

const reversedString = '123456'.split('').reverse().join('');

/*15. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения*/

const firstSymbolCaseChanged = 'строка';
let firstSolution =
    firstSymbolCaseChanged.charAt(0).toUpperCase() +
    firstSymbolCaseChanged.slice(1),
  secondSolution = firstSymbolCaseChanged.split('');

secondSolution[0] = secondSolution[0].toUpperCase();
secondSolution = secondSolution.join('');

/*16. Проверьте, что строка начинается на http://.*/
const startsWithHttp = 'http://test.com'.startsWith('http://');

/*17. Проверьте, что строка заканчивается на .html*/
const endsWithHtml = 'http://test.html'.endsWith('.html');

/*18. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.*/

const arrayIncludes = [1, 8, 5, 6, 7];
arrayIncludes.includes(5);

/*19. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.*/

const checkDivide = (n) => {
  let result = false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      result = true;
    }
  }

  return result;
};

/*20. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'*/

const checkNumbersRow = (array) => {
  let result = 'нет';

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      result = 'да';
      break;
    }
  }

  return result;
};

/*21. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее (два цикла)*/

const repeatedNumbersArray = [];

for (let i = 1; i <= 5; i++) {
  repeatedNumbersArray[i - 1] = `${i}`;

  for (let j = 1; j < i; j++) {
    repeatedNumbersArray[i - 1] += `${i}`;
  }
}

/*22. Дан массив чисел, найдите в нем максимальное число*/

const getMaxValueFromArray = Math.max(...[1, 2, 5, 3, 9, 4]);

/*23. Дан массив чисел, найдите в нем минимальное число*/

const getMinValueFromArray = Math.min(...[1, 2, 5, 3, 9, 4]);

/*24. Дан массив чисел, найдите среднее арифметическое всех чисел*/

const getArithmeticMean = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
};

/*25.  Fill. Напишите функцию, которая заполняет новый массив предоставленным значением.
  * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
  * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
  * Сложность задачи: 1 of 5
  * @param {number} arraySize - размер массива
  * @param {?} value - значение для массива
  * @returns {Array}

const fill = (arraySize, value) => {
 throw new Error('Напишите здесь свое решение');
}

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)) // ['a', 'a', 'a']*/

const getSeveralTimeFilledArray = (arraySize, value) => {
  const result = [];

  for (let i = 0; i < arraySize; i++) {
    result.push(value);
  }

  return result;
};

/*26. Reverse. Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.

  * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
  * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
  * Сложность задачи: 1 of 5
  * @param {Array} array - Массив любых элементов
  * @returns {Array}

const reverse = (array) => {
 throw new Error('Напишите здесь свое решение');
}

const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]*/

const getReversedArray = (array) => {
  const result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
};

/*27. Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

 * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
  * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
  * Сложность задачи: 1 of 5
  * @param {Array} array - Массив любых элементов
  * @returns {Array}

const compact = (array) => {
 throw new Error('Напишите здесь свое решение');
}

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]*/

const getCompactArray = (array) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }

  return result;
};

/*28. From Pairs. Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - зачение. (используем метод массива reduce)

  * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
  * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
  * Сложность задачи: 2 of 5
  * @param {Array} array - массив, значения которого массивы пар
  * @returns {Array}

const fromPairs = (array) => {
 throw new Error('Напишите здесь свое решение');
}

const data = [['a', 1], ['b', 2]];
console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }*/

const getObjectFromArrayPairs = (array) => {
  return array.reduce((initial, current) => {
    if (Array.isArray(current)) {
      initial[current[0]] = current[1];
    }
    return initial;
  }, {});
};

/*29. Without. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.

  * Описание задачи: Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
  * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
  * Сложность задачи: 2 of 5
  * @param {Array} array - Массив с примитивными значениями
  * @param {?} args - лист значений для удаления
  * @returns {Array}

const without = (array, ...args) => {
 throw new Error('Напишите здесь свое решение');
}

const data = [1, 2, 3, 1, 2];
console.log(without(data, 1, 2)); // [3]*/

const getArrayWithoutArgs = (array, ...args) => {
  return array.filter((elem) => !args.includes(elem));
};

/*30. Unique. Напишите функцию, которая убирает повторяющиеся значения.

  * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
  * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
  * Сложность задачи: 2 of 5
  * @param {Array<string | number>} array - Массив с примитивными значениями
  * @returns {Array}
const unique = (array) => {
  throw new Error('Напишите здесь свое решение');
 }
 
 const data = [1, 2, 1, 2, 3];
 console.log(unique(data)); // [1, 2, 3]*/

const getUniqueArray = (array) => {
  let result = [];

  array.forEach((elem) => {
    if (!result.includes(elem)) {
      result.push(elem);
    }
  });

  return result;
};

/*31. IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

  * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
  * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
  * Сложность задачи: 2 of 5
  * @param {Array} firstArray - Массив с примитивными значениями
  * @param {Array} secondArray - Массив с примитивными значениями
  * @returns {boolean}

const isEqual = (firstArray, secondArray) => {
  throw new Error('Напишите здесь свое решение');
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false*/

const checkArraysIsEqual = (firstArray, secondArray) => {
  return (
    firstArray.length === secondArray.length &&
    firstArray.every((elem, index) => elem === secondArray[index])
  );
};

/*32. Flatten. Напишите функцию, которая преобразует глубокий массив в одномерный. Пожалуйста, не используйте array.flat(), чтобы сделать задачу интереснее. (рекурсия)

  * Описание задачи: Напишите функцию, которая преобразует глубокий массив в одномерный.
  * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
  * Сложность задачи: 3 of 5
  * @param {Array} array - Глубокий массив
  * @returns {Array}

const flatten = (array) => {
 throw new Error('Напишите здесь свое решение');
}
const data = [1, 2, [3, 4, [5]]];
console.log(flatten(data)); // [1, 2, 3, 4, 5]*/

const createFlattenArray = (array) => {
  return array.reduce((result, elem) => {
    if (Array.isArray(elem)) {
      result.push(...createFlattenArray(elem));
    } else {
      result.push(elem);
    }

    return result;
  }, []);
};

/*33. Chunk. Напишите функцию, которая разделяет массив на части заданного размера.

  * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
  * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
  * Сложность задачи: 3 of 5
  * @param {Array} array - Массив элементов
  * @param {number} size - Размер чанков
  * @returns {Array}

const chunk = (array, size) => {
 throw new Error('Напишите здесь свое решение');
}
const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]*/

const getChunkedArea = (array, size) => {
  let result = [];

  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    result[i] = array.slice(i * size, (i + 1) * size);
  }

  return result;
};

/*34. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.*/

const calcComplexArraySum = (array) => {
  return array.reduce((sum, elem) => {
    if (Array.isArray(elem)) {
      sum += calcComplexArraySum(elem);
    } else {
      sum += elem;
    }

    return sum;
  }, 0);
};

/*35. Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.*/

const isNumberPositive = (num) => num >= 0;

const createPositiveNumbersArray = (array) => {
  return array.filter((elem) => isNumberPositive(elem));
};

/*1. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не */

//fix

/* 2. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).*/

const calcSumOfNumber = (num) => {
  let result = ('' + num)
    .split('')
    .reduce((previous, current) => previous + +current, 0);

  if (result > 9) {
    result = calcSumOfNumber(result);
  }

  return result;
};

/*Задание: есть массив [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3]
отсортировать по возрастанию написав алгоритм сортировки вставками.*/

const insertionSort = (array) => {
  let clonedArray = Object.assign([], array);

  for (let i = 1; i < clonedArray.length; i++) {
    for (let j = i; j > 0; j--) {
      if (clonedArray[j] < clonedArray[j - 1]) {
        [clonedArray[j - 1], clonedArray[j]] = [
          clonedArray[j],
          clonedArray[j - 1],
        ];
      }
    }
  }

  return clonedArray;
};

/*Задание: есть массив [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3]
отсортировать по возрастанию(1) и по убыванию(2) написав алгоритм сортировки пузырьком.*/

const bubbleSort = (array) => {
  let clonedArray = Object.assign([], array),
    num = clonedArray.length,
    elementsMovingFlag = false;

  while (num) {
    elementsMovingFlag = true;

    for (let i = 0; i < num; i++) {
      if (clonedArray[i] > clonedArray[i + 1]) {
        [clonedArray[i], clonedArray[i + 1]] = [
          clonedArray[i + 1],
          clonedArray[i],
        ];

        elementsMovingFlag = false;
      }
    }

    if (elementsMovingFlag) {
      break;
    }

    num--;
  }

  return clonedArray;
};

/*Задание: реализовать алгоритм бинарного поиска*/

const binarySearch = (array, elem) => {
  let clonedArray = Object.assign([], array),
    startIndex = 0,
    endIndex = clonedArray.length - 1;

  while (startIndex <= endIndex) {
    let medium = Math.ceil((endIndex + startIndex) / 2),
      mediumElement = clonedArray[medium];

    if (mediumElement < elem) {
      startIndex = medium + 1;
    } else if (mediumElement > elem) {
      endIndex = medium - 1;
    } else {
      return medium;
    }
  }

  return -1;
};
