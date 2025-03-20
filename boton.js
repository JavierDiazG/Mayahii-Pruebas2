// Seleccionamos el botón por su ID
const boton = document.getElementById("miBoton");

// Creamos una función que cambia el texto y color
boton.addEventListener("click", function () {
  if (boton.innerText === "Haz clic en mí") {
    boton.innerText = "¡Gracias por hacer clic!";
    boton.style.backgroundColor = "#ff6600"; // cambia a naranja
  } else {
    boton.innerText = "Haz clic en mí";
    boton.style.backgroundColor = "#4CAF50"; // vuelve a verde
  }
});