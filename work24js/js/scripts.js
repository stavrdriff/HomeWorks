"use strict";
// const table = document.getElementById('age__table');
// table.style.border = '3px solid green';
// //...
// const age__list = document.getElementById('age__list').getElementsByTagName('label');
// for (let el of age__list) {
//    el.style.cssText = "font-weight: 700; font-size: 18px;"
// }
// //...
// for (let el of table.getElementsByTagName('tr')) {
//    el.firstElementChild.style.cssText = "font-size: 24px; line-height: 1.5;"
// }
// //...
// document.querySelector('form[name = search]').style.height = '50px';
// //...
// const form__search = document.querySelector('form[name = search]');
// form__search.getElementsByTagName('input')[0].style.width = '530px';
// //...
// let inputColl = form__search.getElementsByTagName('input');
// console.log(inputColl.length);
// // inputColl[inputColl.length - 1].hidden = true;
// inputColl[inputColl.length - 1].classList.add('hidden');



// ///......................................................

// let btn = document.getElementById('clickMe');
// btn.addEventListener('click', function () {
//    this.style.color = 'red'
// })







// const content = [
//    {
//       title: 'Toyota Lorem',
//       description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam accusamus, repellat rem vitae in neque atque nulla sed dolores ut molestiae veniam delectus repudiandae quia? Sequi impedit at voluptate suscipit.Placeat ",
//       year: '2016',
//       brands: 'Toyota',
//       price: '10000'
//    },
//    {
//       title: 'Ford 480',
//       description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam accusamus, repellat rem vitae in neque atque nulla sed dolores ut molestiae veniam delectus repudiandae quia? Sequi impedit at voluptate suscipit.Placeat ",
//       year: '2014',
//       brands: 'Ford',
//       price: '7000'
//    },
//    {
//       title: 'Toyota 363',
//       description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam accusamus, repellat rem vitae in neque atque nulla sed dolores ut molestiae veniam delectus repudiandae quia? Sequi impedit at voluptate suscipit.Placeat ",
//       year: '2016',
//       brands: 'Toyota',
//       price: '6000'
//    },
//    {
//       title: 'MERCEDES-Benz GLK25',
//       description: "The car from Canada MERCEDES-Benz GLK25  2.1 L Diesel has appeared on sale  . All-wheel drive car with a 2.1-liter diesel engine. The car after the accident with a mileage of  190656 km .",
//       year: '2020',
//       brands: 'MERCEDES',
//       price: '21000'
//    },
//    {
//       title: 'Hyundai Sonata',
//       description: "A car from the USA Hyundai Sonata 2.4 L Gasoline appeared on sale  . Front-wheel drive car with a 2.4-liter gasoline engine. The car after the accident with a mileage of 117560  ml . ",
//       year: '2014',
//       brands: 'Hyundai',
//       price: '8000'
//    },
//    {
//       title: 'Volkswagen Tiguan',
//       description: "The car from the USA Volkswagen Tiguan 2.0 L Gasoline has appeared on sale  . All-wheel drive car with a 2.0-liter gasoline engine. The car after the accident with a mileage of  59568 ml .  ",
//       year: '2013',
//       brands: 'Volkswagen',
//       price: '9500'
//    },
//    {
//       title: 'Ford Focus Se',
//       description: "Buy a car from the USA  Ford Focus Se at the best price in Rivne only on  USA-CARS.SHOP . USA-CARS.SHOP - your car from the USA! Delivery of a car from the USA to Exactly, to buy a car from the USA to Exactly, a car from the USA under the order Exactly.",
//       year: '2015',
//       brands: 'Ford',
//       price: '5890'
//    }
// ]

function printContent(content) {
   let wrap = document.getElementById('cards');
   // wrap.setAttribute('style', 'color: green');
   // wrap.setAttribute('data-time', '02.06.2021');
   let html = content.map(item => {
      return `<div class="item"><h1>${item.title}</h1>
         <h3>${descriptionSlice(item.description)}</h3>
         <p>${item.year}</p>
         <p>${item.brands}</p>
         <p>Tax: ${getSumm(item)}</p>
         <p>${item.price}</p></div>`
   })
   wrap.innerHTML = html.join('');
};

// function descriptionSlice(description) {
//    description.indexOf('.', 99);
//    if (description.length > 100 && description.indexOf('.', 99) != -1) {
//       return description.slice(0, 100) + '...'
//    }
//    else {
//       return description
//    }
// };
// function filterBrand(content, brand) {
//    if (brand == '') {
//       return content;
//    }
//    else {
//       return content.filter((item) => {
//          return item.brands == brand
//       })
//    }
// };
// function sortBy(arr, option, toMax = true) {
//    if (option != 'year' && option != 'price') {
//       console.error('error option');
//       return;
//    }
//    if (toMax) {
//       return arr.sort(function (a, b) {
//          return a[option] - b[option];
//       })
//    }
//    else {
//       return arr.sort(function (a, b) {
//          return b[option] - a[option];
//       })
//    }
// }

// function filterPrice(arr, a, b) {
//    return arr.filter(item => {
//       return item.price > a && item.price < b
//    })
// }

// function search(arr, str) {
//    str = str.toLowerCase();
//    return arr.filter(item => {
//       for (let key in item) {
//          if (item[key].toLowerCase().indexOf(str) != -1) {
//             return true
//          }
//       }
//    })
// }
// let result = content;
// // result = filterBrand(result, "Ford");
// // result = search(result, 'lorem');
// // result = filterPrice(result, 2000, 20000);
// // result = sortBy(result, 'price', false);
// // let result = sortBy(filterPrice(filterBrand(content, ""), 2000, 20000), 'price', false);
// printContent(result);

// function getSumm(car) {
//    let currentYear = new Date().getFullYear();
//    let coef = 0;
//    console.log(currentYear);
//    if (car.year + 10 < currentYear) {
//       coef = 15
//    } else if (car.price < 7000) {
//       coef = 10
//    }
//    else {
//       coef = 5
//    }
//    return car.price * coef / 100 + 170
// }






//... Завдання 1.
// Создать страницу, которая выводит нумерованный список песен:

const playList = [
   {
      author: "LED ZEPPELIN",
      song: "STAIRWAY TO HEAVEN"
   },
   {
      author: "QUEEN",
      song: "BOHEMIAN RHAPSODY"
   },
   {
      author: "LYNYRD SKYNYRD",
      song: "FREE BIRD"
   },
   {
      author: "DEEP PURPLE",
      song: "SMOKE ON THE WATER"
   },
   {
      author: "JIMI HENDRIX",
      song: "ALL ALONG THE WATCHTOWER"
   },
   {
      author: "AC/DC",
      song: "BACK IN BLACK"
   },
   {
      author: "QUEEN",
      song: "WE WILL ROCK YOU"
   },
   {
      author: "METALLICA",
      song: "ENTER SANDMAN"
   },
   {
      author: "D.R.I.F.F.",
      song: "Моя Україна - рідна мати моя"
   }
];

function getNumPlayList(array) {
   let wrap = document.getElementById('songs_ol');
   let html = array.map((item, index) => {
      return `<li class="songs_li">
      <h3>${index + 1}. ${item.song}</h3>
      <p>${item.author}</p></li>`;
   })
   wrap.innerHTML = html.join('');
}
getNumPlayList(playList);





//... Завдання 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном.
// На модальном окне должен быть текст и кнопка "Закрыть".
// Изначально модальное окно не отображается.
// При клике на кнопку "Открыть" появляется модальное окно,
// на кнопку "Закрыть" – исчезает.

let openModal = document.getElementById('modal__btn_open');
let closeModal = document.getElementById('modal__btn_close');
let modal = document.getElementById('modal');
openModal.addEventListener('click', function () {
   modal.classList.add('active');
   openModal.classList.add('hidden');
});
closeModal.addEventListener('click', function () {
   modal.classList.remove('active');
   openModal.classList.remove('hidden');
})



//... Завдання 3.
// Создать HTML-страницу со светофором и кнопкой,
// которая переключает светофор на следующий цвет.

let trafficLight__toggle = document.getElementById('trafficLight__toggle');
let traffic = 0;
let red = document.getElementById('trafficLight__circle_red');
let yellow = document.getElementById('trafficLight__circle_yellow');
let green = document.getElementById('trafficLight__circle_green');
red.classList.add('active');
trafficLight__toggle.addEventListener('click', function () {
   traffic++;
   if (traffic == 1) {
      red.classList.toggle('active');
      yellow.classList.toggle('active');
   }
   else if (traffic == 2) {
      yellow.classList.toggle('active');
      green.classList.toggle('active');
   }
   else if (traffic == 3) {
      yellow.classList.toggle('active');
      green.classList.toggle('active');
   }
   else if (traffic == 4) {
      red.classList.toggle('active');
      yellow.classList.toggle('active');
      traffic = 0;
   }
});