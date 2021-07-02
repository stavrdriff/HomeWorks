"use strict";


//... задание 4

// let year = prompt('Введите год, чтобы проверить високосный он или нет');
// let yearNV = (year % 4 > 0);
// let yearV = (year % 4 == 0) && (year % 100 > 0);
// let yearVV = (year % 4 == 0) && (year % 100 == 0) && (year % 400 == 0);
// if (year = yearNV) {
//    alert('не високосный');
// }
// else if (year = yearV) {
//    alert('високосный');
// }
// else if (year = yearVV) {
//    alert('високосный');
// }
// else {
//    alert('не високосный');
// }

//... задание 5


// let Count = prompt('Введите пятизначное число');
// let CountRev = Count.split('').reverse().join('');
// if (CountRev == Count) {
//    alert('Палиндром')
// }
// else {
//    alert('Не палиндром')
// }

//...


// let number = +prompt('Укажи пятизначное число');
// let number1 = (number - number % 10000) / 10000;
// let number2 = (number - number % 1000) / 1000 - number1 * 10;
// let number3 = (number - number % 100) / 100 - number1 * 100 - number2 * 10;
// let number4 = (number - number % 10) / 10 - number1 * 1000 - number2 * 100 - number3 * 10;
// let number5 = number - number1 * 10000 - number2 * 1000 - number3 * 100 - number4 * 10;

// if (number1 == number5 && number2 == number4) {
//    alert('Палиндром')
// }
// else {
//    alert('Не палиндром')
// }



//... задание 6


// let USD = +prompt('Введите количество USD');
// let val = prompt('Введите валюту для обмена - EUR, UAN, AZN')
// let EUR = 10;
// let UAN = 100;
// let AZN = 5;
// let CUR;
// if (val == 'EUR'.toLowerCase()) {
//    CUR = USD * EUR;
// }
// else if (val == 'UAN'.toLowerCase()) {
//    CUR = USD * UAN;
// }
// else if (val == 'AZN'.toLowerCase()) {
//    CUR = USD * AZN;
// }
// else {
//    CUR = 'Error'
// }
// alert(CUR);


//... задание 7

// let Discount = +prompt('Сумма вашей покупки?');
// let dis;

// if (Discount <= 199) {
//    dis = 0
// }
// else if (Discount >= 200 && Discount <= 300) {
//    dis = 3
// }
// else if (Discount >= 300 && Discount <= 500) {
//    dis = 5
// }
// else if (Discount >= 500) {
//    dis = 7
// }
// let Percent = Discount / 100 * dis;
// let Check = Discount - Percent;
// alert(Discount + '$' + ' Ваша скидка ' + dis + '%' + ' = ' + Check + '$');


//... задание 8

// let perimeter = +prompt('Введите периметр квадрата');
// let heightSquare = perimeter / 4;
// let circle = +prompt('Введите длину окружности круга')
// let diameter = circle / Math.PI;

// if (heightSquare >= diameter) {
//    alert('Влезло :) ');
// }
// else {
//    alert('Не влезло :Р');
// }
// console.log(Math.PI);
// console.log(heightSquare);
// console.log(diameter);


//... задание 9



// let question1 = prompt('Question' + ' #' + '1' + ' - ' + 'Answers: 1, 2, 3?');
// let question2 = prompt('Question' + ' #' + '2' + ' - ' + 'Answers: 1, 2, 3?');
// let question3 = prompt('Question' + ' #' + '3' + ' - ' + 'Answers: 1, 2, 3?');
// let bonus1;
// let bonus2;
// let bonus3;
// if (question1 == '1') {
//    bonus1 = 2
// }
// else {
//    bonus1 = 0
// }
// if (question2 == '2') {
//    bonus2 = 2
// }
// else {
//    bonus2 = 0
// }
// if (question3 == '3') {
//    bonus3 = 2
// }
// else {
//    bonus3 = 0
// }

// let check = bonus1 + bonus2 + bonus3
// alert('За правильные ответы вы набрали ' + check + ' баллов')






//... задание 10


// let date = prompt();
// let month = prompt();
// let year = prompt();

// let a = year % 400;
// let a = year % 4;
// let a = year % 100;
// let ageH = ((a === 0 || b === 0) && c !== 0) ? true : false;

// if ((date < 28) ||
//    (month != 2 && date < 30) ||
//    (month != 2 && month != 4 && != 6 && month != 9 && month != 11 && date < 31)) {
//    ++date
// }
// else if (month == 2) {
//    if (ageH) {
//       date = 1
//       ++month
//    } else {
//       ++date
//    }
// }