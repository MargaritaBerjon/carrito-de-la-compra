'use strict'
const cart = document.getElementById('carrito');

const coursesList = document.getElementById('lista-cursos');

const cartList = document.querySelector('#lista-carrito tbody');


//Listeners

coursesList.addEventListener('click', addCourse);


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
  console.log(info);
  paintCoursesInCart(info);

}

function paintCoursesInCart(card) {
  const row = document.createElement('tr');

  row.innerHTML = `<td>
  <img scr="${card.image}"> 
  </td>
  <td>
  ${card.name}
  </td>
  `;

  cartList.appendChild(row)

}