"use strict";

// document.getElementById('area').addEventListener('change', function () {
//    let comment = this.value;
//    localStorage.setItem('comment', comment)
// })
// let comment = localStorage.getItem('comment');
// document.getElementById('area').value = comment;

// for (let key in localStorage) {
//    if (localStorage.hasOwnProperty(key)) {
//       console.log(localStorage[key]);
//    }
// }

const articlesApi = 'https://dev.to/api/articles';


fetch(articlesApi + '?per_page=5')
   .then(response => { return response.json() })
   .then(result => {
      printContent(result)
   })
   .then(result => {
      filterByTag();
      saveComment();
      toggleFavourite();
   })
   .catch(error => {
      document.getElementById('blog').innerHTML = 'No data'
   })

function filterByTag() {
   for (let tag_item of document.getElementsByClassName('tags__item')) {
      tag_item.addEventListener('click', function () {
         let tag_text = this.textContent
         // console.log(tag_text)
         fetch(articlesApi + '?per_page=5&tag=' + tag_text)
            .then(response => { return response.json() })
            .then(result => {
               // console.log(result)
               document.getElementById('blog').innerHTML = '';
               printContent(result)
            })
            .then(result => {
               filterByTag();
               saveComment();
               toggleFavourite();

            })
            .catch(error => {
               document.getElementById('blog').innerHTML = 'No data'
            })
      })
   }
}



function printContent(result) {

   let html = '';

   result.forEach(element => {
      let text_comment = localStorage.getItem(element.id);
      let favourite = localStorage.getItem('/' + element.id);
      let textContent;
      if (!text_comment) {
         text_comment = '';
      }
      if (favourite) {
         textContent = 'Remove from Favourites';
      }
      else {
         textContent = 'Add to favourites';
      }
      html += `<article class="article" data-id="${element.id}">
               <h2 class="title">${element.title}</h2>
               <div class="tags">`
      for (let tag in element.tag_list) {
         html += `<button class="tags__item">${element.tag_list[tag]}</button>`
      }
      html += `</div>`
      if (element.cover_image) {
         html += `<img class="article__img" src="${element.cover_image}">`
      }
      html += `<p>${element.description}</p>
      <div>
      <button class="favour">${textContent}</button>
      </div>
         <div>
            <textarea class='comment__input' placeholder="Напишите сообщение здесь">${text_comment}</textarea>
         </div>
            </article>`
   });


   document.getElementById('blog').insertAdjacentHTML("beforeend", html)
}

function saveComment() {
   for (let area of document.getElementsByClassName('comment__input')) {
      area.addEventListener('change', function () {
         let article = this.closest('.article')
         let article_id = article.getAttribute('data-id')
         localStorage.setItem(article_id, this.value)
      })
   }
}

function toggleFavourite() {
   for (let btns of document.getElementsByClassName('favour')) {
      btns.addEventListener('click', function () {
         let article = btns.closest('.article')
         let article_id = '/' + article.getAttribute('data-id')
         let id = 0;
         for (let key in localStorage) {
            if (article_id != key && id === 0) {
               // console.log(article_id)
               localStorage.setItem(article_id, 'id');
               btns.textContent = 'Remove from Favourites';
            }
            else {
               localStorage.removeItem(article_id);
               id++;
               btns.textContent = 'Add to favourites';
               // console.log(article_id)
            }
         }
      })
   }
}

// function 
