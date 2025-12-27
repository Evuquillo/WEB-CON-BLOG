$(document).ready(function () {

  // Abrir buscador
  $('.header__search input').on('focus', function () {
    $('body').addClass('search-open');
  });

  // Cerrar buscador
  $('.search-close').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('body').removeClass('search-open');
    $('.header__search input').blur();
  });

  // ESC
  $(document).on('keydown', function (e) {
    if (e.key === "Escape") {
      $('body').removeClass('search-open');
      $('.header__search input').blur();
    }
  });

  const galleries = {
    home: ['media/img/grid 1.png'],
    subastas: ['media/img/grid 2.png'],
    archivos: ['media/img/grid 3.png'],
    blog: ['media/img/grid 4.png']
  };

  const items = $('.search-item');
  const gallery = $('.hover-gallery');
  const images = gallery.find('img');

  items.on('mouseenter', function () {
    const key = $(this).find('p').text().toLowerCase();
    const imgs = galleries[key];

    if (!imgs) return;

    // Cambiar src de las imágenes existentes
    images.each(function (i) {
      $(this).attr('src', imgs[i] || '');
    });

    // Activar animación
    gallery.addClass('is-visible');
  });

  $('.search-content').on('mouseleave', function () {
    gallery.removeClass('is-visible');
  });

});
