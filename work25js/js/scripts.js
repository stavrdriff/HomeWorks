"use strict";

// .............................



// function clickme() {
//    alert('click')
// }

// document.elem.addEventListener()

// let btn = document.getElementById('clickme');
// btn.addEventListener('click', function () {
//    document.querySelector('.modal').style.display = 'block'
// })
// document.querySelector('.modal').addEventListener('click', function () {
//    document.querySelector('.modal').style.display = 'none'
// })
// document.querySelector('.modal__content').addEventListener('click', function (event) {
//    event.stopPropagation();
// })



// let form = document.getElementById('form');
// form.addEventListener('submit', submitForm);
// function submitForm(e) {
//    let valid = true;
//    for (let input of document.getElementsByTagName('input')) {
//       let value = input.value.trim();
//       if (value == '') {
//          e.preventDefault();
//          alert('write')
//          valid = false;
//       }
//    }
//    return valid;
// }
// function removeValid() {
//    form.removeEventListener('submit', submitForm)
// }




let body = document.getElementById('body')
let text = document.getElementById('text')
text.value = body.innerText
function runOnKeys(func, ...codes) {
   let pressed = new Set();
   document.addEventListener('keydown', function (event) {
      pressed.add(event.code);
      for (let code of codes) { // все ли клавиши из набора нажаты?
         if (!pressed.has(code)) {
            return;
         }
      }
      pressed.clear();
      func();
   });
   document.addEventListener('keyup', function (event) {
      pressed.delete(event.code);
   });
}
runOnKeys(
   () => alert("Привет!"),
   "AltLeft",
   "KeyV"
);

//...............


let table = [
   {
      day: 1,
      name: 'Bosch',
      count: 3,
      price: 300,
      setTotal() {
         return this.total = this.count * this.price
      }
   },
   {
      day: 2,
      name: 'LG',
      count: 2,
      price: 500,
      setTotal() {
         return this.total = this.count * this.price
      }
   },
   {
      day: 3,
      name: 'Samsung',
      count: 5,
      price: 600,
      setTotal() {
         return this.total = this.count * this.price
      }
   },
   {
      day: 4,
      name: 'LG',
      count: 5,
      price: 500,
      setTotal() {
         return this.total = this.count * this.price
      }
   },
   {
      day: 5,
      name: 'Samsung',
      count: 1,
      price: 600,
      setTotal() {
         return this.total = this.count * this.price
      }
   },
]

function print(arr) {
   let wrap = document.getElementById('table').lastElementChild
   let html = '';
   for (let item of arr) {
      item.setTotal();
      html = html + `<tr>
       <th>${item.day}</th>
       <th>${item.name}</th>
       <th>${item.count}</th>
       <th>${item.price}</th>
       <th>${item.total}</th>
   </tr> `
   }
   return wrap.insertAdjacentHTML('beforeend', html);
}

let i = true;

for (let btn of document.getElementsByClassName('sortBtn')) {
   btn.addEventListener('click', function () {
      let sortBy = this.getAttribute('id');
      if (i) {
         sort(sortBy)
         this.style.backgroundColor = '';
         i = false
      }
      else {
         sort(sortBy)
         this.style.backgroundColor = 'blue';
         i = true;
      }
      let rows = document.querySelectorAll('#table tr');
      for (let i = 1; i < rows.length; i++) {
         rows[i].remove();
      }
      print(table)
   })
}

function sort(n) {
   table.sort(function (a, b) {
      if (i) {
         return b[n] < a[n] ? -1 : 1
      } else {
         return a[n] < b[n] ? -1 : 1
      }
   })
}

print(table)