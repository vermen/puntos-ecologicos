import puntosEcologicos from './db.js';
import { contTheme, hideModal, showModal } from './modal.js';


export async function cargarSelect() {
  const URL = `http://localhost:4000/api/puntoEcologico`;
  try {
    const res = await fetch(URL);
    const data = await res.json();

    const select = document.querySelector('#punto_filter');
    data.forEach(punto => {
      const { _id, edificio, piso } = punto;
      const optionSelect = document.createElement('option');
      optionSelect.textContent = `Edificio ${edificio} - piso ${piso}`;
      optionSelect.value = _id;
      select.appendChild(optionSelect);
    });
    setTimeout(() => {

      document.querySelector('#preload').style.display = 'none';
    }, 500);
  } catch (error) {
    console.log(error);
  }
}

export async function cargarNumeroDeBasuras() {

  const URL = `http://localhost:4000/api/puntoEcologico`;
  try {
    const res = await fetch(URL);
    const data = await res.json();

    const idValue = document.querySelector('#punto_filter').value;
    const numAprovechables = document.querySelector('#num_cont1');
    const numOrganicos = document.querySelector('#num_cont2');
    const numNoAprovechables = document.querySelector('#num_cont3');

    data.forEach(element => {
      if (element._id.toString() === idValue) {
        const { resAprovechable, resNoAprovechable, resOrganico } = element;
        numAprovechables.textContent = resAprovechable;
        numNoAprovechables.textContent = resNoAprovechable;
        numOrganicos.textContent = resOrganico;
      }
    });
  } catch (error) {
    console.log(error);
  }

}

export async function calcularPromedio() {
  const URL = `http://localhost:4000/api/puntoEcologico`;
  try {
    const res = await fetch(URL);
    const data = await res.json();
    const idValue = document.querySelector('#punto_filter').value;

    data.forEach(element => {
      if (element._id.toString() === idValue) {
        document.querySelector('#punto-text').textContent = `Edificio ${element.edificio} Piso ${element.piso}  -`;

        const { estado } = element;
        document.querySelector('#estado-text').textContent = estado;

        if (estado.toLowerCase() === 'contaminado') {
          document.querySelector('.container_app').classList.replace('no_contaminacion', 'contaminacion');

        } else {
          document.querySelector('.container_app').classList.replace('contaminacion', 'no_contaminacion');
        }
      }
    });
  } catch (error) {
    console.log(error);
  }

}




export async function actualizarNumContedor() {

  const URL = `http://localhost:4000/api/puntoEcologico`;
  const num = document.querySelector('#num_basura').value;
  const idValue = document.querySelector('#punto_filter').value;

  try {
    const res = await fetch(URL);
    const data = await res.json();


    data.forEach(async element => {
      if (element._id.toString() === idValue) {

        const { resAprovechable, resNoAprovechable, resOrganico } = element;
        if (contTheme.id == 'Residuos aprovechables') {
          element.resAprovechable = resAprovechable + Number(num);
        }
        if (contTheme.id == 'Residuos orgánicos aprovechables') {
          element.resOrganico = resOrganico + Number(num);
        }

        if (contTheme.id == 'Residuos no aprovechables') {
          element.resNoAprovechable = resNoAprovechable + Number(num);
        }

        const res = await fetch(URL, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(element)
        });
        // document.querySelector('#num_cont1').textContent = element.resAprovechable;
        // document.querySelector('#num_cont2').textContent = element.resOrganico;
        // document.querySelector('#num_cont3').textContent = element.resNoAprovechable;
        console.log(res);
        cargarNumeroDeBasuras();
        hideModal();
        calcularPromedio();
      }
    });
  } catch (error) {
    console.log(error);
  }


  document.querySelector('#num_basura').value = '';
}


export function obtenerPuntos() {
  const puntos = JSON.parse(localStorage.getItem('puntosEcologicos'));
  console.log(puntos);
  puntosEcologicos = puntos;
}