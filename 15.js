//В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let num = +prompt('Введите номер месяца (1..12):', 1);
let result;

if (num == 12 || num <= 2) {
  result = 'зима';
} else if (num >= 3 && num <= 5) {
  result = 'весна';
} else if (num >= 6 && num <= 8) {
  result = 'лето';
} else if (num >= 9 && num <= 11) {
  result = 'осень';
} else {
  result = 'неверное число';
}

console.log(result);

//Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
let str = prompt('Введите строку:', 'abcde');

str[0] == 'a' ? console.log('да') : console.log('нет');

//Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

let str2 = prompt('Введите строку:', '12345');

str2[0] == '1'
  ? console.log('да')
  : str2[0] == '2'
  ? console.log('да')
  : str2[0] == '3'
  ? console.log('да')
  : console.log('нет');

//Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

let str3 = prompt('Введите строку:', '345');

console.log(+str3[0] + +str3[1] + +str3[2]);

//Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let str4 = prompt('Введите строку:', '543345');

if (+str4[0] + +str4[1] + +str4[2] == +str4[3] + +str4[4] + +str4[5])
  console.log('да');
else console.log('нет');
