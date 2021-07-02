"use strict";

// let people = {
//    'Коля': '1000',
//    'Вася': '500',
//    'Петя': '200',
//    'Оля': '1500',
//    // user1: {
//    //    name: 'Коля',
//    //    salary: 1000
//    // },
//    // user2: {
//    //    name: 'Вася',
//    //    salary: 500
//    // },
//    // user3: {
//    //    name: 'Петя',
//    //    salary: 200
//    // }
// };
// // console.log(people['user2']['name']);
// document.write(people['Коля'] + '<br>');
// document.write(people['Вася'] + '<br>');
// document.write('сума' + (+people['Коля'] + +people['Вася'] + +people['Петя']) + '<br>' + '<br>');
// let summ = 0;
// let max = 0;
// let max_name = '';
// let count = 0;

// for (let key in people) {
//    count++;
//    document.write(key + ' - ' + people[key] + '<br>');
//    summ += +people[key];
//    if (max < +people[key]) {
//       max = +people[key];
//       max_name = key;
//    }
// }
// document.write('<br>' + 'Ітого: ' + summ + '<br>' + '<br>');
// document.write('<strong>Найбільша: </strong>' + max_name + ' - ' + max + '<br>' + '<br>');
// document.write('Всього людей - ' + count + '<br>');
// document.write('Середня - ' + summ / count + '<br>');
//_______________________________________________________________________


// let people = {
//    user1: {
//       name: 'Kolya',
//       profession: 'programmer',
//       salary: 1000,
//       month: 5,
//       total: function () {
//          return this.salary * this.month;
//       }
//    },
//    user2: {
//       name: 'Vasya',
//       profession: 'programmer',
//       salary: 500,
//       month: 12,
//       total: function () {
//          return this.salary * this.month;
//       }
//    },
//    user3: {
//       name: 'Petya',
//       profession: 'secretar',
//       salary: 200,
//       month: 12,
//       total: function () {
//          return this.salary * this.month;
//       }
//    },
//    user4: {
//       name: 'Olya',
//       profession: 'manager',
//       salary: 1500,
//       month: 12,
//       total: function () {
//          return this.salary * this.month;
//       }
//    },
// };

// for (let key in people) {
//    // document.write(people[key].name + ' - ' + people[key].profession + ' - ' + people[key].salary + '<br>');
//    if (people[key].profession === 'programmer') {
//       document.write(people[key].name + ' - ' + people[key].profession + ' - ' + people[key].salary + '<br>');
//    }
// }
// document.write(people.user1['name']);



// function setPeople(name, profession, salary, month) {
//    let number = getObjLength(people);
//    people['user' + (number + 1)] = {
//       name: name, profession: profession, salary: salary, month: month,
//       total: function () {
//          return this.salary * this.month;
//       }
//    };
// }



// setPeople('Galya', 'Cook', 2000, 1);
// printPeoples();


// function getObjLength(obj) {
//    let count = 0;
//    for (let key in obj) {
//       count++;
//    }
//    return count;
// }
// function printPeoples() {
//    for (let key in people) {
//       document.write(people[key].name + ' - '
//          + people[key].profession + ' - '
//          + people[key].salary + ' - '
//          + people[key].total() + '<br>');
//    }
// }
// function isEmpty(obj) {
//    for (let key in obj) {
//       return false;
//    }
//    return true;
// }
// // delete people.user3;
// // console.log(people);


// let admin = {};

// // admin.name = 'Admin';
// // for (let key in people.user2) {
// //    admin[key] = people.user2[key];
// // }
// Object.assign(admin, people.user2)



// admin.name = 'Admin';
// console.log(admin);
// console.log(people.user2);
//__________________________________________________________________________





function getObjLength(obj) {
   let count = 0;
   for (let key in obj) {
      count++;
   }
   return count;
}



//... Завдання 1
let cars = {};

function setCars(production, model, year, speed) {
   let number = getObjLength(cars);
   let sec = 0;
   let min = 0;
   let m = 0;
   let hours = 0;
   let h = 0;
   let progress = 0;
   cars['car' + (number + 1)] = {
      production: production, model: model, year: year, speed: speed,
      travelTime: function () {
         sec = distance / this.speed * 60 * 60;
         if (sec > 14400) {
            progress = Math.floor(sec / 14000) * 3600;
            sec = progress + sec;
         }
         if (sec > 60) {
            m = sec / 60;
            sec = sec % 60;
         }
         min = min + Math.floor(m);
         if (min > 60) {
            h = min / 60;
            min = min % 60;
         }
         hours = hours + Math.floor(h);
         if (sec < 10) {
            sec = `0${sec}`;
         }
         sec = Math.floor(sec);
         if (sec == 0) {
            sec = `00`;
         }
         if (min < 10) {
            min = `0${min}`;
         }
         if (hours < 10) {
            hours = `0${hours}`;
         }
         return `${hours} годин ${min} хвилин ${sec} секунд`;
      }
   }
};
console.log(cars)
let distance = +prompt('Введіть відстань, км');

function printCars() {
   for (let key in cars) {
      document.write(
         cars[key].production + ' - '
         + cars[key].model + ' - '
         + cars[key].year + ' р.в. ' + ' - '
         + cars[key].speed + ' км.г ' + '<br>'
         + distance + ' км проїде за '
         + cars[key].travelTime() + '<br>' + '<br>'
      )
   }
};

setCars('mercedes', 'i100', '1998', 100);
setCars('volvo', '780', '2015', 250);
setCars('porsche', 'GTI 911', '2009', 300);
printCars();





//... завдання 2

// let fractions = {};

// function setFractions(divider, numerator) {
//    let number = getObjLength(fractions);
//    fractions['fraction' + (number + 1)] = {
//       divider: divider, numerator: numerator
//    }
//    return `${divider}/${numerator}`;
// }

// setFractions(5, 4);
// setFractions(7, 8);

// function addition() {
//    fractions.fraction1.divider;
// }