"use strict";




let area = document.querySelector('.area')
let areaW, areaH, startPosX, startPosY;
document.querySelector('.area__toggle').addEventListener('mousedown', function (e) {
   startPosX = e.screenX;
   startPosY = e.screenY;
   areaW = area.clientWidth;
   areaH = area.clientHeight;
   document.querySelector('body').addEventListener('mousemove', move)
})

document.querySelector('body').addEventListener('mouseup', function (e) {
   document.querySelector('body').removeEventListener('mousemove', move)
})

function move(e) {
   let newPosX = e.screenX;
   let newPosY = e.screenY;
   area.style.width = areaW + newPosX - startPosX + 'px';
   area.style.height = areaH + newPosY - startPosY + 'px';
}

let windowHeight = window.innerHeight;

window.addEventListener('resize', function () {
   windowHeight = window.innerHeight;
})


window.addEventListener('scroll', function (e) {

   let blocks = document.querySelectorAll('.block')
   for (let block of blocks) {
      let position = block.getBoundingClientRect();
      let posTop = position.top;
      let posHeight = position.height;
      if (posTop < windowHeight - posHeight && posTop > - posHeight) {
         block.classList.add('block__anim')
      } else {
         block.classList.remove('block__anim')
      }
   }



})
activeScrollLink();

function activeScrollLink() {
   for (let link of document.getElementsByClassName('link')) {
      let sectionId = link.getAttribute('href');
      window.addEventListener('scroll', function (e) {
         let pos = document.querySelector(sectionId).getBoundingClientRect();
         if (pos.top < windowHeight / 2 && pos.top > pos.height * -1 + windowHeight / 2) {
            link.classList.add('link__active')
         } else {
            link.classList.remove('link__active')
         }
      })
   }
}


for (let link of document.getElementsByClassName('link')) {
   link.addEventListener('click', function (e) {
      e.preventDefault();
      let idSection = this.getAttribute('href');
      let pos = document.querySelector(idSection).getBoundingClientRect();
      window.scrollTo({
         top: pos.y,
         left: 0,
         behavior: 'smooth',
      })
   })
}