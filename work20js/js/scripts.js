"use strict";


// sayHello('Timothy');
// function sayHello(name) {
//    document.write('Hello, ' + name + '!');
//    document.write('<br><br>');
//    return;
// }





// let hello = function () {
//    document.write('Hello, ' + name + '!');
//    document.write('<br><br>');
//    return;
// }
// hello();


// function returnWordProducts(number) {
//    if (number === 0) {
//       return 'немає в наявності';
//    }
//    if (number == 1 || number % 10 == 1) {
//       return 'товар';
//    }
//    if (number >= 2 && number <= 4 || number % 10 >= 2 && number % 10 <= 4) {
//       return 'товари';
//    }
//    if (number >= 5) {
//       return 'товарів';
//    }
// }
// let count = +prompt('Кількість товарів?');
// alert(count + ' ' + returnWordProducts(count));


// function foo(a, b = () => alert('ok')) {
//    a();
//    b();
// }
// function bar() {
//    console.log('Hello, ')
// }
// function world() {
//    console.log('World!')
// }
// foo(bar);


// function min(a, b) {
//    a = +prompt('Первое число');
//    b = +prompt('Второе число');
//    if (a > b) {
//       return b;
//    }
//    if (a < b) {
//       return a
//    }
//    else {
//       return 'Числа равны'
//    }
// }
// document.write(min());

// let count = 0;
// function counter() {
//    return ++count;
// }
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// let disp = confirm('Функция была вызвана ' + counter() + ' раз. Вызвать еще раз?')
// if (disp == true) {
//    disp = confirm('Функция была вызвана ' + counter() + ' раз. Вызвать еще раз?')
// }
// else (disp == false);



// let str = prompt('Symbol')

// function drawTriangle(str, lines) {
//    // let star = '*';
//    // let lines = 6;
//    let starExt = str;
//    let blank = '-';
//    let blankExt = blank;
//    for (let i = 0; i < lines; i++) {
//       for (let n = 5 - i; n > 0; n--) {
//          blankExt += blank;
//       }
//       document.write(blankExt + starExt + blankExt + '<br>');
//       starExt = starExt + str + str;
//       blankExt = '-';
//    }
//    return '';
// }
// drawTriangle(str, 6);


// function drawTriangle(str, lines) {

//    let starExt = str;
//    let blank = '-';
//    let blankExt = blank;
//    for (let i = 0; i < lines; i++) {
//       blankExt = getBlanks(i, blankExt, blank);
//       document.write(blankExt + starExt + blankExt + '<br>');
//       starExt = starExt + str + str;
//       blankExt = '-';
//    }
//    return '';
// }
// drawTriangle('*', 6);

// function getBlanks(i, blankExt, blank) {
//    for (let n = 5 - i; n > 0; n--) {
//       blankExt += blank;
//    }
//    return blankExt;
// }




// let days = +prompt('Кількість днів в місяці?');
// let startDay = +prompt('З якого дня тижня починається місяць');
// printMonth(days, startDay);
// function printMonth(days, startDay) {
//    startDay--;
//    document.write('<table>')
//    for (let w = 1; w < days + startDay + 1; w += 7) {
//       document.write('<tr>')
//       for (let date = w - startDay; date < w - startDay + 7; date++) {
//          let day = date <= days && date >= 1 ? date : '';
//          document.write(`<td>${day}</td>`)
//       }
//       document.write('</tr>')
//    }
//    document.write('</table><br>')
// }




//... завдання 1


// function comparison() {
//    let number1 = +prompt('Введіть перше число');
//    let number2 = +prompt('Введіть друге число');
//    if (number1 < number2 || number1 <= 0 && number2 > 0) {
//       return '-1';
//    }
//    else if (number1 > number2 || number1 > 0 && number2 <= 0) {
//       return '1';
//    }
//    else {
//       return '0';
//    }
// }

// alert(comparison());







//... завдання 2

// function fact(i) {
//    return (i != 1) ? i * fact(i - 1) : 1;
// }
// let number = +prompt('Введіть число')
// alert(fact(number));








//... завдання 3
// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
// Например: цифры 1, 4, 9 превратятся в число 149.


// function concatenation() {
//    let a = prompt('Введіть цифру');
//    let b = prompt('Введіть цифру');
//    let c = prompt('Введіть цифру');
//    return a + b + c
// }
// alert(concatenation());








//... завдання 4
// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// function getArea() {
//    let heigth = +prompt('Введіть висоту');
//    let width = +prompt('Введіть ширину');
//    let s = 0;
//    if (heigth > 0 && width > 0 && heigth != '' && width != '') {
//       s = heigth * width;
//    }
//    else if (heigth > 0 && width == '') {
//       s = heigth * heigth;
//    }
//    else if (heigth == '' && width > 0) {
//       s = width * width;
//    }
//    return s;
// }
// alert(getArea());







//... завдання 5
// Написать функцию, которая проверяет, является ли переданное ей число совершенным.
// Совершенное число – это число, равное сумме всех своих собственных делителей.

// function getPerfect_number() {
//    let number = +prompt('Введіть число');
//    let divider;
//    let count = 0;
//    for (let i = 1; i < number; i++) {
//       divider = number % i;
//       if (divider === 0) {
//          count = count + i;
//       }
//    }
//    if (count == number) {
//       return 'Досконале число';
//    } else {
//       return 'Не досконале число';
//    }
// }
// alert(getPerfect_number());




//... Завдання 6
// Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
// и выводит только те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 


// function getPerfect_number(number) {
//    let divider;
//    let count = 0;
//    for (let i = 1; i < number; i++) {
//       divider = number % i;
//       if (divider === 0) {
//          count = count + i;
//       }
//    }
//    if (count == number) {
//       return true;
//    } else {
//       return false;
//    }
// }
// function get_all_perfect_numbers() {
//    let massive = [];
//    let start = +prompt('Введіть початкове число');
//    let end = +prompt('Введіть кінцеве число');
//    let res = 0;
//    for (start; start <= end; start++) {
//       res = getPerfect_number(start);
//       if (res) {
//          massive.push(start);
//       }
//    }
//    return massive;
// }
// alert(get_all_perfect_numbers());









//... Завдання 7
// Написать функцию, которая принимает время (часы, минуты, секунды)
// и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды
// не были переданы, то выводить их как 00.

//    let hours = +prompt('Вкажіть години');
//    let minutes = +prompt('Вкажіть хвилини');
//    let seconds = +prompt('Вкажіть секунди');

// function getTime(hours, minutes, seconds) {
//    let m = 0;
//    let h = 0;
//    if (seconds > 60) {
//       m = seconds / 60;
//       seconds = seconds % 60;
//    }
//    minutes = minutes + Math.floor(m);
//    if (minutes > 60) {
//       h = minutes / 60;
//       minutes = minutes % 60;
//    }
//    hours = hours + Math.floor(h);
//    if (seconds < 10) {
//       seconds = `0${seconds}`
//    }
//    if (minutes < 10) {
//       minutes = `0${minutes}`
//    }
//    if (hours < 10) {
//       hours = `0${hours}`
//    }
//    return `${hours}:${minutes}:${seconds}`
// }

// alert(getTime(hours, minutes, seconds));







//... завдання 8
// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.


// function getSeconds() {
//    let hours = +prompt('Вкажіть години');
//    let minutes = +prompt('Вкажіть хвилини');
//    let seconds = +prompt('Вкажіть секунди');
//    let hs = hours * Math.pow(60, 2);
//    let ms = minutes * 60;
//    seconds = seconds + hs + ms;
//    return `${seconds}`
// }
// alert(getSeconds());








//... завдання 9 
// Написать функцию, которая принимает количество секунд, переводит их в часы,
// минуты и секунды и возвращает в виде строки «чч:мм:сс».

// function getSecondsToTime() {
//    let hours = 0;
//    let minutes = 0;
//    let seconds = +prompt('Вкажіть секунди');
//    let m = 0;
//    let h = 0;
//    if (seconds > 60) {
//       m = seconds / 60;
//       seconds = seconds % 60;
//    }
//    minutes = minutes + Math.floor(m);
//    if (minutes > 60) {
//       h = minutes / 60;
//       minutes = minutes % 60;
//    }
//    hours = hours + Math.floor(h);
//    if (seconds < 10) {
//       seconds = `0${seconds}`
//    }
//    if (minutes < 10) {
//       minutes = `0${minutes}`
//    }
//    if (hours < 10) {
//       hours = `0${hours}`
//    }
//    return `${hours}:${minutes}:${seconds}`
// }

// alert(getSecondsToTime());






//... завдання 10

// Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
// При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
// узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

// let dateH1 = +prompt('Введіть початкову годину');
// let dateM1 = +prompt('Введіть початкову хвилину');
// let dateS1 = +prompt('Введіть початкову секунду');
// let dateH2 = +prompt('Введіть кінцеву годину');
// let dateM2 = +prompt('Введіть кінцеву хвилину');
// let dateS2 = +prompt('Введіть кінцеву секунду');
// function getSeconds(h, m, s) {
//    let hs = h * Math.pow(60, 2);
//    let ms = m * 60;
//    s = s + hs + ms;
//    return `${s}`;
// }
// function getTime(seconds) {
//    let hours = 0;
//    let minutes = 0;
//    let m = 0;
//    let h = 0;
//    if (seconds > 60) {
//       m = seconds / 60;
//       seconds = seconds % 60;
//    }
//    minutes = minutes + Math.floor(m);
//    if (minutes > 60) {
//       h = minutes / 60;
//       minutes = minutes % 60;
//    }
//    hours = hours + Math.floor(h);
//    if (seconds < 10) {
//       seconds = `0${seconds}`;
//    }
//    if (minutes < 10) {
//       minutes = `0${minutes}`;
//    }
//    if (hours < 10) {
//       hours = `0${hours}`;
//    }
//    return `${hours}:${minutes}:${seconds}`
// }
// function date(h1, m1, s1, h2, m2, s2) {
//    let data1 = getSeconds(h1, m1, s1);
//    let data2 = getSeconds(h2, m2, s2);
//    let res = 0;
//    if (data1 < data2) {
//       res = data2 - data1;
//    } else {
//       res = data1 - data2
//    }
//    return getTime(res);
// }
// alert(date(dateH1, dateM1, dateS1, dateH2, dateM2, dateS2));