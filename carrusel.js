// Esperamos a que el contenido del DOM se cargue completamente.
document.addEventListener("DOMContentLoaded", function() {
  // Obtenemos las referencias del modal y sus elementos internos
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  const modalClose = document.getElementById("modalClose");

  // Seleccionamos todas las imágenes de la galería
  const galleryImages = document.querySelectorAll(".gallery-img");

  // Asignamos el evento click a cada imagen para abrir el modal
  galleryImages.forEach(image => {
    image.addEventListener("click", function() {
      modal.style.display = "block";         // Se muestra el modal
      modalImg.src = this.src;                 // Se asigna la ruta de la imagen ampliada
      modalCaption.innerText = this.alt;       // Se utiliza el atributo alt como descripción
    });
  });

  // Evento para cerrar el modal cuando se hace clic en el botón de cerrar
  modalClose.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Permitir cerrar el modal haciendo clic fuera de la imagen
  modal.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
