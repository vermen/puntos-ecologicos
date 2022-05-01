import { hideModal, showModal, btnCancel, btnSend, contTheme } from './modal.js';
import {
  cargarSelect,
  cargarNumeroDeBasuras,
  calcularPromedio,
  actualizarNumContedor,
  obtenerPuntos
} from './funciones.js';
import puntosEcologicos from './db.js';

const aprovechablesBtn = document.querySelector('#aprovechables');
const organicosBtn = document.querySelector('#organicos');
const no_aprovechablesBtn = document.querySelector('#no_aprovechables');
const selectFilter = document.querySelector('#punto_filter');


document.addEventListener('DOMContentLoaded', () => {
  cargarSelect();
  fetch('http://localhost:4000/api/puntoEcologico')
    .then(res => res.json())
    .then(data => console.log(data))
});

selectFilter.addEventListener('change', () => {
  cargarNumeroDeBasuras();
  calcularPromedio();
})

aprovechablesBtn.addEventListener('click', () => showModal('Residuos aprovechables'));
organicosBtn.addEventListener('click', () => showModal('Residuos orgánicos aprovechables'));
no_aprovechablesBtn.addEventListener('click', () => showModal('Residuos no aprovechables'));
btnCancel.addEventListener("click", (e) => {
  e.preventDefault();
  hideModal();
});

// Agregar basura
btnSend.addEventListener('click', (e) => {
  e.preventDefault();
  actualizarNumContedor();
  calcularPromedio();
});
