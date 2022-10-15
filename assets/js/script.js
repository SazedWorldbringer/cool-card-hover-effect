/* <div class="card__container">
     <article class="card__article">
       <div class="card__data">
         <img class="card__img" src="./assets/img/img1.png" alt="" />

         <h1 class="card__title">Shield & Shining Star</h1>
         <p class="card__description">Beautiful card, with hover effects</p>
       </div>

       <div class="card__shapes">
         <span class="card__shape"></span>
         <span class="card__shape"></span>
         <span class="card__shape"></span>
         <span class="card__shape"></span>
         <span class="card__shape"></span>
         <span class="card__shape"></span>
         <span class="card__shape"></span>
         <span class="card__shape"></span>
       </div>
     </article>
   </div> */

/* function createHtmlChildElems(arr) {
  var list = document.createElement('div');
  list.innerHTML = '';

  arr.forEach(function(element, index) {
    var item = document.createElement('div');
    item.innerHTML = `index: ${index}`
    list.appendChild(item);
  });
  return list;
}

var foo = ['a', 'b', 'c'];
var elems = createHtmlChildElems(foo);
document.querySelector('div').append(elems); */

const cardContainer = document.querySelector(".card__container");

const article = document.createElement("article");
article.className = "card__article";
article.innerHTML = `
   <div class="card__data">
     <img class="card__img" src="./assets/img/img1.png" alt="" />

     <h1 class="card__title">Shield & Shining Star</h1>
     <p class="card__description">Beautiful card, with hover effects</p>
   </div>

   <div class="card__shapes"></div>
`;

const cardShapes = document.querySelector("card__shapes");
cardShapes.innerHTML = "";

for (let i = 0; i < 8; i++) {
  let cardShape = document.createElement("span");
  cardShape.className = "card__shape";
  cardShapes.appendChild(cardShape);
}

console.log(cardShapes);

cardContainer.append(article);
