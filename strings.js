/*0. Напишите функцию logAllChars(str), которая принимает str в качестве аргумента и выводит каждый символ строки в логи*/

const logAllChars = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
};

/*1. Дана строка 'frontent$developer$wow. Замените все $ на * с помощью глобального поиска и замены.  */

'frontent$developer$wow'.replaceAll('$', '*');

/*2.  Напишите функцию convertStringToArray(str), которая преобразует строку в массив слов.
const str = 'I am learning frontend development’;

const convertStringToArray = (str)=> {
// Ваш код
};

const result = convertStringToArray(str);

console.log(result); // ['I', 'am', 'learning', 'frontend', 'development']*/

const convertStringToArray = (str) => str.trim().split(' ');

/*3. Напишите функцию removeSymbols(str, length), которая возвращает подстроку, состоящую из указанного количества символов.*/

const removeSymbols = (str, length) => str.slice(0, length);

/*4. Напишите функцию pasteDashesIntoString(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.*/

const pasteDashesIntoString = (str) => str.toUpperCase().split(' ').join('-');

/*5. Напишите функцию makeStringLowerCased(str), которая принимает строку str в качестве аргумента и переводит в нижний регистр.*/

const makeStringLowerCased = (str) => str.toLowerCase();

/*6.Напишите функцию capitaliseAllWords(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.*/

const capitaliseAllWords = (str) => {
  let result = str.split(' ');

  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
  }

  return result.join(' ');
};

/*7. Напишите функцию makeFirstLetterUpperCased(str), которая принимает строку str в качестве аргумента и делает первую букву заглавной.*/

const makeFirstLetterUpperCased = (str) => {
  return str.trim()[0].toUpperCase() + str.trim().slice(1);
};

/*8. Напишите функцию changeLetterRegister(str), которая принимает в качестве аргумента строку и заменяет регистр каждого символа на противоположный. Например, если вводится «Я иЗуЧаЮ ФрОнТеНд», то на выходе должно быть «я ИзУчАю ФрОнТеНд».*/

const changeLetterRegisterOpposite = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase();
      continue;
    }

    result += str[i].toLowerCase();
  }

  return result;
};

/*9. Напишите функцию changeLetterRegister(str), которая принимает в качестве аргумента строку и делает в ней все символы разного регистра по порядку. Например, если вводится «джаваскрипт», то на выходе должно быть «дЖаВаСкРиПт».*/

const changeLetterRegisterInSequence = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2) {
      result += str[i].toUpperCase();
      continue;
    }

    result += str[i].toLowerCase();
  }

  return result;
};

/*10. Напишите функцию addZeros(num, len, sign), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.*/

const addZerosToLength = (num, len, sign = '') => {
  let result = '' + num;

  for (let i = result.length; i < len; i++) {
    result += '0';
  }

  return result + sign;
};

/*11. Напишите функцию compareStrings(str1, str2), которая сравнивает строки без учёта регистра символов.

compareStrings('string', 'StRiNg'); // true 
compareStrings('JavaScript', 'JavaScriptonite');   // false*/

const compareStringsInsensitive = (str1, str2) => {
  str1.toLowerCase() === str2.toLowerCase();
};

/*12. Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз. */

// const repeatStr = (str, n) => str.repeat(n);

const repeatLineNTimes = (str, n) => {
  let result = '';

  for (let i = 0; i < n; i++) {
    result += str;
  }

  return result;
};

/*13. Напишите функцию getPathname(pathname), которая находит имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.
сщтые pathname = "/home/user/landing/index.js";

const getPathname = (pathname) => { 
    ...ваш код...
};

  getPathname(pathname); // index.js*/

const getPathName = (pathName) => {
  const result = pathName.split('/');

  return result[result.length - 1];
};

// const getPathName = (pathName) => pathName.slice(pathName.lastIndexOf('/') + 1);

/*14. Напишите функцию getSubstring(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

const str = 'Javascript — синхронный язык программирования';

function getSubstring(str, char, pos) {
    ...ваш код...
};

getSubstring(str, '—', 'after'); // Javascript
getSubstring(str, 'язык', 'before')); // Javascript - синхронный*/

const getSubstringBeforeAfter = (str, char, pos) => {
  if (pos === 'after') {
    return str.slice(str.indexOf(char) + 1);
  }

  return str.slice(0, str.indexOf(char));
};
