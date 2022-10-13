//1. Выведите столбец чисел от 1 до 50. (в консоль и в документ html с помощью document.write) Использовать два типа циклов, while и for
for (let i = 1; i <= 50; i++) {
  console.log(i);
  document.write(i + '<br>');
}

/* let i = 1;

while (i <= 50) {
  console.log(i);
  document.write(i + '<br>');
  i++;
} */

//2. Выведите столбец чисел от 1 до 100.
for (let i = 1; i <= 100; i++) {
  console.log(i);
  document.write(i + '<br>');
}

//3. Выведите столбец чисел от 11 до 33.
for (let i = 11; i <= 33; i++) {
  console.log(i);
  document.write(i + '<br>');
}

//4. Выведите столбец четных чисел в промежутке от 0 до 100.
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
    document.write(i + '<br>');
  }
}

//5. С помощью цикла найдите сумму чисел от 1 до 100.
let result = 0;

for (let i = 1; i <= 100; i++) {
  result += i;
}

console.log('Сумма чисел от 1 до 100: ' + result);
document.write('Сумма чисел от 1 до 100: ' + result + '<br>');

//6. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
let num = 0,
  n = 1000;

while (true) {
  num++;
  if (n < 50) break;
  n /= 2;
}

console.log('Количество итераций: ' + num);
document.write('Количество итераций: ' + num + '<br>');
console.log('Полученное число после всех делений: ' + n);
document.write('Полученное число после всех делений: ' + n + '<br>');
