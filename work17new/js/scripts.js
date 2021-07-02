"use strict";

// let $ = 'body';
// //...
// //...


// {//.. область видимости
//    $ = "foot";
// }
// {
//    $ = "round";
// }

// // alert($);
// // let answer = prompt('hello', ['crew'])
// let answer = confirm('hello');
// alert($);

// let admin, username;
// username = 'John';
// admin = username;
// let user = 'Vasya';


// alert(admin + ' ' + user);


// let username = prompt('What is your name?', ['Your name']);

// // alert('Hi, ' + username);
// console.log('Hi, ' + username);

// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.nav__list');
// const closeBtn = document.querySelector('.close-btn');
// const links = document.querySelectorAll('nav ul li a');

// burger.addEventListener('click', e => menu.classList.toggle('open'));
// closeBtn.addEventListener('click', e => menu.classList.remove('open'));
// [...links].forEach(link => link.addEventListener('click', e => menu.classList.remove('open')));

// let a = 4,
//    b = 9,
//    c = b % a;

// console.log(c)

// let a = 'hello',
//    b = 'world',
//    // c = a + ' ' + b;
//    c = `khg kjh kjh ${a} , ${b} asdasasd`;
// console.log(c);
// console.error(c);

// document.write(c);

// let price = 56;
// let count = '4';
// let summ = price + +count;

// console.log(summ);


// let price = 56;
// let count = '4';
// let summ = price + Number(count);

// console.log(summ);


// let price = 56;
// let count = '4';
// let summ = price + Boolean(count);

// console.log(summ);

// let price = 56;
// let count = '4';
// let summ = price * 0 || price * count;

// console.log(summ);

// let price = 56;
// let count = '4';
// let summ = price * 0 && price * count;

// console.log(summ);


// let price = 56;
// let count = '1';
// let summ = price * count;

// if (summ > 100) {
//    console.log('Discount' + summ * 0.1)
// } else {
//    console.log('Check' + summ)
// }
// let message = (summ > 100) ? console.log('Discount' + summ * 0.1) : console.log('Check' + summ);



// let answer = +prompt('2+2=?')

// if (answer === 4) {
//    alert('Ты красавчег')
// }
// else {
//    alert('Пшол вон отседа!')
// }



//.......


// let answer = +prompt('Твій вік?')

// if (answer <= 17) {
//    alert('Иди в школу')
// }
// else if (answer >= 18 && answer <= 45) {
//    alert('Добро пожаловать')
// }
// else if (answer >= 60) {
//    alert('Не')
// }


//.......


// let a = prompt('???')
// let b;
// a == 'Director' ? b = 'Hello' : a == 'Manager' ? b = 'Hi' : b = 'Error';
// alert(b)


//......


// let message;
// let Login = prompt('Who are you?')
// switch (Login) {
//    case 'Director':
//       message = 'Hello';
//       break;
//    case 'Manager':
//       message = 'Hi';
//       break;
//    case '':
//       message = 'empty';
//       break;
//    default:
//       message = 'Error';
//       break;
// }
// alert(message);


//......

// let number = +prompt('Укажи трехзначное число', 324);
// let number1 = (number - number % 100) / 100;
// let number2 = (number - number % 10) / 10 - number1 * 10;
// let number3 = number - number1 * 100 - number2 * 10;

// if (number1 == number2 || number1 == number3 || number2 == number3) {
//    console.log('Есть повторы')
// }
// else {
//    console.log('Нет повторов')
// }


//......


// let price = 100;
// price -= 10;
// let count = '1';
// let summ = price * count;
// console.log(summ)


//......

let a = 2;
++a;

console.log(a)