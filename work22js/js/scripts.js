"use strict";

// let people = ['Kolya', 'Petya', 'Vasya'];
// people[1];
// people[2];
// people[3]; //undefind//
// people[0]; // 'Kolya'

// let styles = [' Jazz', ' Blues'];
// styles.push(' Rock-N-Roll');
// styles.push(' Metal');
// styles.push(' Rock');
// styles.push(' Classic');
// // let del = styles.pop();
// // document.write(styles);
// // document.write(del);
// // console.log(styles.length);
// styles[Math.floor(styles.length / 2)] = ' House';

// // document.write(styles);
// let weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// function printMonth(days, startDay) {
//    startDay--;
//    document.write('<table>');
//    printDays(weekDays);
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
// function printDays(arr_days, start_day = 7) {

//    let start_wday = arr_days.splice(0, start_day - 1);
//    let new_days = arr_days.concat(start_wday);



//    document.write('<thead><tr>');

//    for (let elem of new_days) {
//       document.write(`<th>${elem}</th>`);
//    }

// new_days.forEach(function (item) {
//    document.write(`<th>${item}</th>`);
// });


// new_days.forEach(item => document.write(`<th>${item}</th>`));


// for (let i = 0; i < new_days.length; i++) {
//    document.write(`<th>${new_days[i]}</th>`);
// }
//    document.write('</tr></thead>');
// }

// printMonth(31, 6);

//___________________________________________________________


let users = [
   {
      name: 'Kolya',
      age: 18
   },
   {
      name: 'Olya',
      age: 16
   },
   {
      name: 'Petya',
      age: 18
   },
   {
      name: 'Vasya',
      age: 32
   }
]
// users.forEach(user => {
//    document.write(user.name + '<br>')
// });

// users.map((user, i) => {
//    document.write(user.name + '<br>')
// });

// let res = users.map((user, i) => {
//    return {
//       name: user.name + ' 6 ',
//       age: user.age
//    };
// })
// console.log(res);

// let res = users.find((user, index, array) => {
//    return user.age == 18
// });
// console.log(res);

// let res = users.filter((user, index, array) => {
//    return user.age == 18;
// });
// console.log(res);

// let res = weekDays.sort(function (a, b) {
//    if (a > b) return -1;
//    if (a == b) return 0;
//    if (a < b) return 1;
// })
// console.log(res);

// let res = users.sort(function (a, b) {
//    if (a.age > b.age) return -1;
//    if (a.age == b.age) return 0;
//    if (a.age < b.age) return 1;
// })
// console.log(res);

// let res = users.sort(function (a, b) {
//    return a.age - b.age
// })
// console.log(res);





//... завдання 1
// Создать массив «Список покупок». Каждый элемент массива является объектом,
//который содержит название продукта, необходимое количество и куплен или нет.
//Написать несколько функций для работы с таким массивом.

//1. Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

//2. Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
//необходимо увеличивать количество в существующей покупке, а не добавлять новую.

//3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

// let purchases /*(name, count, bought)*/ = [
//    {
//       name: 'apple',
//       count: 10,
//       bought: true,
//    },
//    {
//       name: 'grapefruit',
//       count: 10,
//       bought: false,
//    },
//    {
//       name: 'lemon',
//       count: 10,
//       bought: false,
//    },
//    {
//       name: 'strawberries',
//       count: 10,
//       bought: true,
//    },
// ];
// //... сортування за фактом придбання
// function boughtSort() {
//    purchases.sort(function (a, b) {
//       return a.bought - b.bought;
//    })
// }

// //... додавання до списку покупок
// addPurchases('grace', 10, false);
// addPurchases('milk', 20, false);
// boughtSort(/*відсортували після додавання*/);

// function addPurchases(nameAdd, countAdd, boughtAdd) {
//    let repeat = 0;
//    purchases.map((purchase, i) => {
//       if (nameAdd == purchase.name) {
//          purchase.count += countAdd;
//          purchase.bought = boughtAdd;
//       } else if (repeat == purchases.length - 1) {
//          purchases.push({
//             name: nameAdd,
//             count: countAdd,
//             bought: boughtAdd,
//          })
//       }
//       else {
//          repeat++;
//       }
//    });
// };
// console.log(purchases);






//... завдання 2

// Создать массив, описывающий чек в магазине.
//Каждый элемент массива состоит из названия товара, количества и цены за единицу товара.
//Написать следующие функции:

//1. Распечатка чека на экран;
//2. Подсчет общей суммы покупки;
//3. Получение самой дорогой покупки в чеке;
//4. Подсчет средней стоимости одного товара в чеке.


// let receipt /*(name, count, bought)*/ = [
//    {
//       name: 'apple',
//       count: 10,
//       price: 2,
//       total() {
//          let total;
//          total = this.count * this.price;
//          return total;
//       },
//    },
//    {
//       name: 'grapefruit',
//       count: 10,
//       price: 4,
//       total() {
//          let total;
//          total = this.count * this.price;
//          return total;
//       },
//    },
//    {
//       name: 'lemon',
//       count: 10,
//       price: 10,
//       total() {
//          let total;
//          total = this.count * this.price;
//          return total;
//       },
//    },
//    {
//       name: 'strawberries',
//       count: 10,
//       price: 10,
//       total() {
//          let total;
//          total = this.count * this.price;
//          return total;
//       },
//    },
// ];
// function printReceipt() {
//    let totalPrice = 0;
//    let maxTotal = 0;
//    let mt;
//    let totalCount = 0;
//    for (let key in receipt) {
//       totalPrice = totalPrice + receipt[key].total();
//       totalCount = totalCount + receipt[key].count;
//       document.write(
//          receipt[key].name + ' : ' + ' кількість: '
//          + receipt[key].count + ', ціна '
//          + receipt[key].price + '. Вартість: '
//          + receipt[key].total() + '<br>'
//       )
//       if (receipt[key].total() > maxTotal) {
//          mt = receipt[key].name;
//          maxTotal = receipt[key].total();
//       }
//       else if (receipt[key].total() == maxTotal) {
//          mt = mt + ' - ' + maxTotal + '; ' + receipt[key].name;
//          maxTotal = receipt[key].total();
//       }
//    }
//    document.write('<br>' + `Всього до сплати: ${totalPrice}` + '<br>' + '<br>');
//    document.write(`Найдорожчі покупки: ${mt} - ${maxTotal}` + '<br>');
//    document.write(`Середня вартість одного товару: ${maxTotal / totalCount}`);
// };
// printReceipt();




//... завдання 3

// Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст,
// и выводит этот текст с помощью document.write() в тегах <p></p>,
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let styles = [
   {
      name: 'color',
      value: 'red',
   },
   {
      name: 'background',
      value: 'black',
   },
   {
      name: 'padding',
      value: '5px',
   },
]
document.write('<style>');
document.write('p {')
for (let key in styles) {
   console.log(
      styles[key].name,
      styles[key].value
   )
   document.write(
      `${styles[key].name}:${styles[key].value};`
   )
};
document.write('}')
document.write('</style>');

document.write(`<p> ${letWrite()} </p>`)

function letWrite() {
   let write = prompt('Починайте мене дивувати');
   return write
}


//... завдання 4
// Создать массив аудиторий академии. Объект-аудитория состоит из названия,
// количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним^

//Вывод на экран всех аудиторий;
//Вывод на экран аудиторий для указанного факультета;
//Вывод на экран только тех аудиторий, которые подходят для переданной группы.
//       Объект-группа состоит из названия, количества студентов и названия факультета;
//Функция сортировки аудиторий по количеству мест;
//Функция сортировки аудиторий по названию (по алфавиту).