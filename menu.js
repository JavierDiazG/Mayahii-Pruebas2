document.addEventListener("DOMContentLoaded", function () {
  const iconoMenu = document.querySelector(".menu-icono");
  const menu = document.getElementById("menu");

  iconoMenu.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});
