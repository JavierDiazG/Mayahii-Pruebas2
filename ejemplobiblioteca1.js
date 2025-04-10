// Activar Slick Carousel una vez que el documento esté listo
$(document).ready(function(){
    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  