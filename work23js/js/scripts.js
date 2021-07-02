"use strict";

const content = [
   {
      title: 'Toyota Lorem',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam accusamus, repellat rem vitae in neque atque nulla sed dolores ut molestiae veniam delectus repudiandae quia? Sequi impedit at voluptate suscipit.Placeat ",
      year: '2016',
      brands: 'Toyota',
      price: '10000'
   },
   {
      title: 'Ford 480',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam accusamus, repellat rem vitae in neque atque nulla sed dolores ut molestiae veniam delectus repudiandae quia? Sequi impedit at voluptate suscipit.Placeat ",
      year: '2014',
      brands: 'Ford',
      price: '7000'
   },
   {
      title: 'Toyota 363',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam accusamus, repellat rem vitae in neque atque nulla sed dolores ut molestiae veniam delectus repudiandae quia? Sequi impedit at voluptate suscipit.Placeat ",
      year: '2016',
      brands: 'Toyota',
      price: '6000'
   },
   {
      title: 'MERCEDES-Benz GLK25',
      description: "The car from Canada MERCEDES-Benz GLK25  2.1 L Diesel has appeared on sale  . All-wheel drive car with a 2.1-liter diesel engine. The car after the accident with a mileage of  190656 km .",
      year: '2020',
      brands: 'MERCEDES',
      price: '21000'
   },
   {
      title: 'Hyundai Sonata',
      description: "A car from the USA Hyundai Sonata 2.4 L Gasoline appeared on sale  . Front-wheel drive car with a 2.4-liter gasoline engine. The car after the accident with a mileage of 117560  ml . ",
      year: '2014',
      brands: 'Hyundai',
      price: '8000'
   },
   {
      title: 'Volkswagen Tiguan',
      description: "The car from the USA Volkswagen Tiguan 2.0 L Gasoline has appeared on sale  . All-wheel drive car with a 2.0-liter gasoline engine. The car after the accident with a mileage of  59568 ml .  ",
      year: '2013',
      brands: 'Volkswagen',
      price: '9500'
   },
   {
      title: 'Ford Focus Se',
      description: "Buy a car from the USA  Ford Focus Se at the best price in Rivne only on  USA-CARS.SHOP . USA-CARS.SHOP - your car from the USA! Delivery of a car from the USA to Exactly, to buy a car from the USA to Exactly, a car from the USA under the order Exactly.",
      year: '2015',
      brands: 'Ford',
      price: '5890'
   }
]

// task1  - написати функцію по виведенню контеру prіntContent(content)
// task1 -  при виведенні опису обрізати його на 100 символів і додавати ...  вкінці 
// task2  - написати функцію яка буде робити фильтр по бренду filterByBrand(content, brand) => newContent
// task3  - написати функцію яка буде робити сортування по року sortByDate(content, year) => newContent
// task4  - пошук по тексту (без врухування регістра) search(content, str) => newContent
// task5 -  фільтр по price filterByPrice(content, minPrice, maxPrice) => newContent
// task6 - розрахуноку збору - якщо машині більше 10 років коеф. 15 якщо менше (для машин дешевше 7000 - коеф = 10, дорожче - 5) . 
// Формула price * коеф / 100 + 170

function printContent(content) {
   document.write('<div class="items">')
   for (let item of content) {
      document.write(
         `<div class="item"><h1>${item.title}</h1>
         <h3>${descriptionSlice(item.description)}</h3>
         <p>${item.year}</p>
         <p>${item.brands}</p>
         <p>Tax: ${getSumm(item)}</p>
         <p>${item.price}</p></div>`
      )
   };
   document.write('</div>')
};

function descriptionSlice(description) {
   description.indexOf('.', 99);
   if (description.length > 100 && description.indexOf('.', 99) != -1) {
      return description.slice(0, 100) + '...'
   }
   else {
      return description
   }
};
function filterBrand(content, brand) {
   if (brand == '') {
      return content;
   }
   else {
      return content.filter((item) => {
         return item.brands == brand
      })
   }
};
function sortBy(arr, option, toMax = true) {
   if (option != 'year' && option != 'price') {
      console.error('error option');
      return;
   }
   if (toMax) {
      return arr.sort(function (a, b) {
         return a[option] - b[option];
      })
   }
   else {
      return arr.sort(function (a, b) {
         return b[option] - a[option];
      })
   }
}

function filterPrice(arr, a, b) {
   return arr.filter(item => {
      return item.price > a && item.price < b
   })
}

function search(arr, str) {
   str = str.toLowerCase();
   return arr.filter(item => {
      for (let key in item) {
         if (item[key].toLowerCase().indexOf(str) != -1) {
            return true
         }
      }
   })
}
let result = filterBrand(content, "Ford");
result = search(result, 'lorem');
result = filterPrice(result, 2000, 20000);
result = sortBy(result, 'price', false);
// let result = sortBy(filterPrice(filterBrand(content, ""), 2000, 20000), 'price', false);
printContent(result);

function getSumm(car) {
   let currentYear = new Date().getFullYear();
   let coef = 0;
   console.log(currentYear);
   if (car.year + 10 < currentYear) {
      coef = 15
   } else if (car.price < 7000) {
      coef = 10
   }
   else {
      coef = 5
   }
   return car.price * coef / 100 + 170
}
