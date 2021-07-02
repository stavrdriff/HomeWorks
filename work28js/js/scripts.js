"use strict";
$(document).ready(function () {
   $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplayTimeout: 3000,
      lazyLoad: true,
      slideTransition: 'linear',
      // autoplay: true,
      responsiveClass: true,
      autoplayHoverPause: true,
      nav: true,
      center: true,
      responsive: {
         0: {
            items: 1,
            dots: false,
         },
         600: {
            items: 2,
            dots: false,
         },
         800: {
            items: 3,
            dots: false,
         },
         1000: {
            items: 4,
         },
         1400: {
            items: 5,
         }
      }
   })
});


const nbu = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
fetch(nbu)
   .then(function (response) {
      return response.json();
   })
   .then(function (corsJson) {
      console.log(JSON.stringify(corsJson));
   })
   .catch(function (error) {
      console.log('error!!!')
      console.error(error)
   })
// $(document).ready(function () {


//    $('#newsSlider').slick({
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       infinite: true,
//       dots: true,
//       autoplay: true,
//       // autoplaySpeed: 0,
//       // speed: 4000,
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
// });