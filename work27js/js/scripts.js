"use strict";

// $(document).ready(function () {

//    $('.link').on('click', function (e) {
//       e.preventDefault();
//       let idSection = $(this).attr('href')
//       let pos = $(idSection).offset().top;
//       $('body, html').animate({
//          scrollTop: pos
//       }, 500)
//    })
//    $('.btn1').on('click', function () {
//       // $('.block__btn1').toggle(500);
//       // $('.block__btn1').slideToggle(500);
//       // $('.block__btn1').toggleClass('show')
//    })
// })



// let area = document.querySelector('.area')
// let areaW, areaH, startPosX, startPosY;
// document.querySelector('.area__toggle').addEventListener('mousedown', function (e) {
//    startPosX = e.screenX;
//    startPosY = e.screenY;
//    areaW = area.clientWidth;
//    areaH = area.clientHeight;
//    document.querySelector('body').addEventListener('mousemove', move)
// })

// document.querySelector('body').addEventListener('mouseup', function (e) {
//    document.querySelector('body').removeEventListener('mousemove', move)
// })

// function move(e) {
//    let newPosX = e.screenX;
//    let newPosY = e.screenY;
//    area.style.width = areaW + newPosX - startPosX + 'px';
//    area.style.height = areaH + newPosY - startPosY + 'px';
// }

// let windowHeight = window.innerHeight;

// window.addEventListener('resize', function () {
//    windowHeight = window.innerHeight;
// })


// window.addEventListener('scroll', function (e) {

//    let blocks = document.querySelectorAll('.block')
//    for (let block of blocks) {
//       let position = block.getBoundingClientRect();
//       let posTop = position.top;
//       let posHeight = position.height;
//       if (posTop < windowHeight - posHeight && posTop > - posHeight) {
//          block.classList.add('block__anim')
//       } else {
//          block.classList.remove('block__anim')
//       }
//    }
// })
// activeScrollLink();

// function activeScrollLink() {
//    for (let link of document.getElementsByClassName('link')) {
//       let sectionId = link.getAttribute('href');
//       window.addEventListener('scroll', function (e) {
//          let pos = document.querySelector(sectionId).getBoundingClientRect();
//          if (pos.top < windowHeight / 2 && pos.top > pos.height * -1 + windowHeight / 2) {
//             link.classList.add('link__active')
//          } else {
//             link.classList.remove('link__active')
//          }
//       })
//    }
// }


// for (let link of document.getElementsByClassName('link')) {
//    link.addEventListener('click', function (e) {
//       e.preventDefault();
//       let idSection = this.getAttribute('href');
//       let pos = document.querySelector(idSection).offsetTop;
//       window.scrollTo({
//          top: pos,
//          left: 0,
//          behavior: 'smooth',
//       })
//    })
// }
function getModalTabs() {
   for (let link of document.getElementsByClassName('tabs__link')) {
      let href = link.getAttribute('href');
      let tab = document.querySelector(href);
      link.addEventListener('click', function () {
         document.querySelector('.tab_active').classList.remove('tab_active');
         document.querySelector('.link_active').classList.remove('link_active');
         tab.classList.add('tab_active');
         this.classList.add('link_active');
      })
   }
}
document.querySelector('.viewTabs').addEventListener('click', function () {
   document.querySelector('.tabs').classList.toggle('tabs_active')
})
getModalTabs()