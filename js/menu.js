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
  home: [
    'media/img/archif-logo_Mesa de trabajo 2.png',
    'media/img/home2.jpg',
    'media/img/home3.jpg',
    'media/img/home4.jpg'
  ],
  subastas: [
    'media/img/sub1.jpg',
    'media/img/sub2.jpg',
    'media/img/sub3.jpg',
    'media/img/sub4.jpg'
  ],
  archivos: [
    'media/img/arc1.jpg',
    'media/img/arc2.jpg',
    'media/img/arc3.jpg',
    'media/img/arc4.jpg'
  ],
  blog: [
    'media/img/blog1.jpg',
    'media/img/blog2.jpg',
    'media/img/blog3.jpg',
    'media/img/blog4.jpg'
  ]
};

$('.search-content p').on('mouseenter', function () {

  const key = $(this)
    .text()
    .toLowerCase()
    .replace('.', '')
    .split(' ')[0];

  const imgs = galleries[key];
  if (!imgs) return;

  $('.hover-gallery img').each(function (i) {
    $(this).attr('src', imgs[i]);
  });

  $('.hover-gallery').addClass('is-visible');
});

$('.search-content').on('mouseleave', function () {
  $('.hover-gallery').removeClass('is-visible');
});


});
