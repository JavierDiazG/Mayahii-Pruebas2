document.addEventListener("DOMContentLoaded", function () {
  const iconoMenu = document.querySelector(".menu-icono");
  const menu = document.getElementById("menu");

  iconoMenu.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});

// Lógica para el carrusel
let indiceSlide = 0;

function moverCarrusel(direccion) {
  const carrusel = document.getElementById("carruselSlide");
  const totalSlides = carrusel.children.length;

  indiceSlide += direccion;

  if (indiceSlide < 0) indiceSlide = totalSlides - 1;
  if (indiceSlide >= totalSlides) indiceSlide = 0;

  const desplazamiento = -indiceSlide * 100;
  carrusel.style.transform = `translateX(${desplazamiento}%)`;
}
