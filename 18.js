//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

let testArray = [1, 2, 3, 4, 5];

for (let i = 0; i < testArray.length; i++)
  document.write(testArray[i] + '<br>');

//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
let result = 0;

for (let i = 0; i < testArray.length; i++) result += testArray[i];

console.log(result);

//Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта. var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}

let obj = { green: 'зеленый', red: 'красный', blue: 'голубой' };

for (let key in obj) document.write(key + ': ' + obj[key] + '<br>');

//Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

obj = { Коля: '200', Вася: '300', Петя: '400' };

for (let key in obj)
  document.write(key + ' - зарплата ' + obj[key] + ' долларов<br>');

//Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

testArray = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < testArray.length; i++)
  if (testArray[i] > 3 && testArray[i] < 10)
    document.write(testArray[i] + '<br>');

//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

testArray = [2, -5, 9, 15, 0, -4];
result = 0;

for (let i = 0; i < testArray.length; i++)
  if (testArray[i] > 0) result += testArray[i];

console.log(result);

//Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

testArray = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < testArray.length; i++)
  if (testArray[i] == 4) {
    alert('Есть!');
    break;
  }

//Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

testArray = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < testArray.length; i++)
  if (
    (testArray[i] + '')[0] == 1 ||
    testArray[i].toString()[0] == 2 ||
    `${testArray[i]}`[0] == 5
  )
    alert(testArray[i]);

//Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '- 1-2-3-4-5-6-7-8-9-'.

testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
result = '';

for (let i = 0; i < testArray.length; i++) result += testArray[i] + '-';
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
let day = 3;

for (let i = 0; i < testArray.length; i++) {
  if (i == day) {
    document.write('<i>' + testArray[i] + '</i><br>');
    continue;
  }
  document.write(testArray[i] + '<br>');
}
