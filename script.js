// Seleccionamos el texto de la marquesina
const texto = document.getElementById("textoMarquesina");

// Posición inicial
let posicion = 100;

// Función que mueve el texto hacia la izquierda
function moverTexto() {
  posicion--;
  texto.style.left = posicion + "px";

  // Si el texto ya no se ve, lo reiniciamos desde la derecha
  if (posicion < -texto.offsetWidth) {
    posicion = window.innerWidth;
  }

  // Llamamos a la función otra vez de forma continua
  requestAnimationFrame(moverTexto);
}

// Iniciamos la animación cuando el archivo carga
moverTexto();