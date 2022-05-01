export const btnCancel = document.querySelector("#btnCancel");
export const btnSend = document.querySelector("#btnSend");
export const contTheme = document.querySelector(".cont-theme");

export function showModal(msg) {
  if (document.querySelector('#punto_filter').value === 'Elige un punto Ecológico') return;
  document.querySelector('#title_modal').textContent = msg;
  contTheme.style.display = "flex";
  contTheme.style.animation = "showModal  .5s linear";
  contTheme.id = msg;
}

export function hideModal() {
  contTheme.style.animation = "hiddeModal  1s linear";
  setTimeout(() => {
    contTheme.style.display = "none";
  }, 500);
}


