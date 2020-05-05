'use strict'
const cart = document.getElementById('carrito');
const coursesList = document.getElementById('lista-cursos');
const cartList = document.querySelector('#lista-carrito tbody');
const btnRemoveItems = document.getElementById('vaciar-carrito');


//Listeners

coursesList.addEventListener('click', addCourse);
cart.addEventListener('click', removeCourse);
btnRemoveItems.addEventListener('click', removeItemsCart);
document.addEventListener('DOMContentLoaded', paintFromLocalStorage);

//funciones
function addCourse(ev) {
  ev.preventDefault();
  if (ev.target.classList.contains('agregar-carrito')) {
    const card = ev.target.parentElement.parentElement;

    readDataCourse(card);
  }

}

function readDataCourse(card) {
  const info = {
    image: card.querySelector('img').src,
    name: card.querySelector('h4').innerText,
    price: card.querySelector('.precio span').innerText,
    id: card.querySelector('a').getAttribute('data-id'),
  }
  paintCoursesInCart(info);

}

function paintCoursesInCart(card) {
  const row = document.createElement('tr');

  row.innerHTML = `<td>
 <img src=${card.image} class="img-cart" />
  </td>
  <td>${card.name}</td>
  <td>${card.price}</td>
  <td> <a href="#" class="borrar-curso" data-id="${card.id}">X</a></td>
  `;
  cartList.appendChild(row)
  setLocalStorage(card);
}

function removeCourse(ev) {
  ev.preventDefault();
  let course;

  if (ev.target.classList.contains('borrar-curso')) {
    ev.target.parentElement.parentElement.remove();

  }
}

function removeItemsCart() {
  while (cartList.firstChild) {
    cartList.removeChild(cartList.firstChild);
  }
}


function setLocalStorage(card) {
  let cards;
  cards = getLocalStorage();
  cards.push(card);
  localStorage.setItem('cards', JSON.stringify(cards));

}

function getLocalStorage() {
  let cardsLS;
  if (localStorage.getItem('cards')) {
    cardsLS = JSON.parse(localStorage.getItem('cards'));
  } else {
    cardsLS = [];
  }
  return cardsLS;
}

function paintFromLocalStorage() {
  let cardsLS;
  cardsLS = getLocalStorage();
  cardsLS.map(card => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>
    <img src=${card.image} class="img-cart" />
    </td>
    <td>${card.name}</td>
    <td>${card.price}</td>
    <td> <a href="#" class="borrar-curso" data-id="${card.id}">X</a></td>
    `;
    cartList.appendChild(row);
  })
}