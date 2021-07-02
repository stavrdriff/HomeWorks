"use strict";

// let star = '*';
// let lines = 6;
// let starExt = star;
// let blank = '-';
// let blankExt = blank;
// for (let i = 0; i < lines; i++) {
//    for (let n = 5 - i; n > 0; n--) {
//       blankExt += blank;
//    }
//    console.log(blankExt + starExt + blankExt)
//    starExt = starExt + star + star;
//    blankExt = '-';

// }


//... задание 1


// let start = +prompt('Введите начальное число');
// let end = +prompt('Введите конечное число');
// let summ = 0;
// while (start <= end) {
//    summ += start;
//    start++;
// }
// document.write(summ);


//... задание 2


// let start = +prompt('Введите первое число');
// let end = +prompt('Введите второе число');
// while (start != 0 && end != 0) {
//    if (start > end) { start = start % end }
//    else { end = end % start }
// }
// document.write(start + end + ' - Общий делитель')


//... задание 3

// let start = +prompt('Введите любое число');
// let divider = 0;
// while (start / divider >= 1) {
//    divider++;
//    if (start % divider == 0) {
// document.write(divider + ', ');
//    }
// }

//...

// for (let div = 0; div <= start; div++) {
//    divider = start % div;
//    if (divider == 0) {
//       document.write(div + ', ');
//    }
// }


//... задание 4

// let count = prompt('Введите что нибудь, а я в ам скажу сколько символов вы ввели.');
// document.write('Вы ввели ' + count.length + ' символов');


//... задание 5

// let number;
// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;
// for (let repeat = 1; repeat <= 10; repeat++) {
//    number = +prompt('Введите положительное или отрицательное число');
//    console.log(number);
//    if (number > 0) {
//       positive++;
//    }
//    if (number < 0) {
//       negative++;
//    }
//    if (number === 0) {
//       zero++;
//    }
//    if (number % 2) {
//       odd++;
//    } else {
//       even++;
//    }
// }
// document.write(`Положительных = ${positive} `);
// document.write(`Отрицательных = ${negative} `);
// document.write(`Нулей = ${zero} `);
// document.write(`Четных = ${even} `);
// document.write(`Нечетных = ${odd} `);


//... задание 6


// Зациклить калькулятор.
// Запросить у пользователя 2 числа и знак, решить пример,
// вывести результат и спросить, хочет ли он решить еще один пример.
// И так до тех пор, пока пользователь не откажется.

// let yet = prompt('Хотите решить пример? Y-да / N-нет')
// let yes = 'Y'.toLowerCase();
// let no = 'N'.toLowerCase();
// if (yet === no) {
//    alert('Good bye')
// }
// if (yet === yes) {
//    let i = 0;
//    while (i === 0) {
//       let calc;
//       let number1;
//       let number2;
//       let func;
//       number1 = +prompt('Введите первое число');
//       console.log(number1);
//       func = prompt('"/" делить, "*" умножить, "+" прибавить, "-" вычесть');
//       console.log(func);
//       number2 = +prompt('Введите первое число');
//       console.log(number2);
//       if (func == '/') {
//          calc = number1 / number2;
//          // console.log(calc);
//       } else if (func == '*') {
//          calc = number1 * number2;
//          // console.log(calc);
//       } else if (func == '-') {
//          calc = number1 - number2;
//          // console.log(calc);
//       } else if (func == '+') {
//          calc = number1 + number2;
//          // console.log(calc);
//       }
//       alert(`${number1} ${func} ${number2} = ${calc}`);
//       yet = prompt('Хотите еще решить пример? Y-да / N-нет');
//       if (yet == no) {
//          ++i;
//          alert('Good bye')
//       }
//    }
// }




//... задание 7 


// Запросить у пользователя число и на сколько цифр его сдвинуть.
// Сдвинуть цифры числа и вывести результат
// (если число 123456 сдвинуть на 2 цифры, то получится 345612).

// let number = prompt('Введите любое число');
// let numerator = prompt('Введите числитель');
// alert(number.slice(numerator) + number.slice(0, numerator));



//... задание 8


// Зациклить вывод дней недели таким образом:
// «День недели. Хотите увидеть следующий день?»
// и так до тех пор, пока пользователь нажимает OK.

// let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let today = 0;
// while (confirm(`Сегодня ${days[today]}. Следующий день?`)) {
//    today = (today + 1) % days.length;
// }


//... задание 9



// Вывести таблицу умножения для всех чисел от 2 до 9.
// Каждое число необходимо умножить на числа от 1 до 10.

// let i = 2;
// let summ = 0;
// while (i <= 9) {
//    for (let b = 1; b <= 10; b++) {
//       summ = i * b;
//       document.write(summ + ', ');
//    }
//    i++;
//    document.write(`<br>`)
// }



//... задание 10



