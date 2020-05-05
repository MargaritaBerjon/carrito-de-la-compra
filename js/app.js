'use strict'
const cart = document.getElementById('carrito');

const coursesList = document.getElementById('lista-cursos');


//Listeners

coursesList.addEventListener('click', addCourse);


//funciones
function addCourse(ev) {
  ev.preventDefault();
  if (ev.target.classList.contains('agregar-carrito')) {
    const course = ev.target.parentElement.parentElement;

    readDataCourse(course);
  }

}

function readDataCourse(course) {
  console.log(course);
}