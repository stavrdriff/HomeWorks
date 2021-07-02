"use strict";


let movieUrl = 'https://www.omdbapi.com/?apikey=a2560712';


document.getElementById('searching__btn').addEventListener('click', function () {
   let title = document.getElementById('byTitle').value.toLowerCase();
   let type = document.getElementById('searching__type').value;
   let templateUrl;
   // console.log(type)
   // console.log(title)
   if (title !== '') {
      templateUrl = movieUrl + '&t=' + title;
   } else {
      alert('Input request')
   }
   if (type !== '') {
      templateUrl = templateUrl + '&type=' + type;
   }
   // console.log(templateUrl)
   if (title !== '') {
      fetch(templateUrl)
         .then(response => { return response.json() })
         .then(result => {
            // console.log(result)
            printFilm(result)
         })
   }
   templateUrl = '';

})

function printFilm(array) {
   document.querySelector('.films__title').textContent = array.Title
   document.querySelector('.films__released').textContent = 'Year:  ' + array.Year
   document.querySelector('.films__country').textContent = 'Country:  ' + array.Country
   document.querySelector('.films__img').src = array.Poster
   document.querySelector('.films__img').style = 'display: block;'
   // console.log(array.Title)
   document.querySelector('.films').style = 'display: grid;'
}













//..........

// $(document).ready(function () {
//    $('#newsSlider').slick({
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       infinite: true,
//       dots: true,
//       // autoplay: true,
//       // autoplaySpeed: 0,
//       speed: 500,
//       appendArrows: '.slider__nav',
//       responsive: [
//          {
//             breakpoint: 1024,
//             settings: {
//                // centerMode: true,
//                slidesToShow: 2,
//                slidesToScroll: 2,
//             }
//          },
//          {
//             breakpoint: 786,
//             settings: {
//                arrows: false,
//                // centerMode: true,
//                slidesToShow: 1,
//                slidesToScroll: 1,
//             }
//          }
//       ]
//    });
//    $('#newsSlider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//       // console.log(currentSlide, nextSlide);
//       // $('[data-slick-index="' + nextSlide + '"]').css({ 'background': '#000' })
//    });

//    const nbu = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

//    let currency = {};
//    // fetch(nbu)
//    //    .then(function (response) {
//    //       return response.json();
//    //    })
//    //    .then(function (corsJson) {
//    //       currency.eur = corsJson.filter(el => {
//    //          return el.cc == 'EUR'
//    //       })
//    //       currency.usd = corsJson.filter(el => {
//    //          return el.cc == 'USD'
//    //       })
//    //    })
//    //    .catch(function (error) {
//    //       alert('Error connection with National Bank of Ukraine')
//    //       document.querySelector('[value="eur"]').remove();
//    //       document.querySelector('[value="usd"]').remove();
//    //       console.error(error)
//    //    })




//    for (let p_value of document.getElementsByClassName('price__value')) {
//       let price = p_value.getAttribute('data-price');
//       p_value.textContent = price;
//       p_value.nextElementSibling.textContent = 'UAH';
//    }

//    let curr_select = document.getElementById('currency');

//    curr_select.addEventListener('change', function () {
//       let curr = curr_select.value;
//       if (curr === 'uah') {
//          for (let p_value of document.getElementsByClassName('price__value')) {
//             let price = p_value.getAttribute('data-price');
//             p_value.textContent = price;
//             p_value.nextElementSibling.textContent = 'UAH';
//          }
//       } else {
//          fetch(nbu + '&valcode=' + curr.toUpperCase())
//             .then(response => { return response.json() })
//             .then(data => {
//                currency[curr] = data;
//                for (let p_value of document.getElementsByClassName('price__value')) {
//                   let price = +p_value.getAttribute('data-price');
//                   p_value.textContent = Math.floor(+price / +currency[curr][0].rate);
//                   p_value.nextElementSibling.textContent = currency[curr][0].cc;
//                }
//             })
//             .catch(error => { console.error(error) });
//       }
//    })
// });