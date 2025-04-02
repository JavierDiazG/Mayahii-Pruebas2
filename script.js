const texto = document.getElementById("textoMarquesina");
let posicion = window.innerWidth;

function moverTexto() {
  posicion--;
  texto.style.left = posicion + "px";

  if (posicion < -texto.offsetWidth) {
    posicion = window.innerWidth;
  }

  requestAnimationFrame(moverTexto);
}

moverTexto();
