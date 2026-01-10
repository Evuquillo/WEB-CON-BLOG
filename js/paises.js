$(document).ready(function () {

  // ===== BUSCADOR =====
  const searchInput = $('.header__search input');
  const searchClose = $('.search-close');

  $('.header__search').on('click', function (e) {
    e.stopPropagation();
    $('body').addClass('search-open');
    searchInput.focus();
  });

  $('.search-close, .search-overlay').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('body').removeClass('search-open');
    searchInput.blur();
  });

  $(document).on('keydown', function (e) {
    if (e.key === "Escape") {
      $('body').removeClass('search-open');
      searchInput.blur();
    }
  });

  // ===== FILTROS =====
  $('.filters button').on('click', function () {
    const filter = $(this).data('filter');

    $('.filters button').removeClass('active');
    $(this).addClass('active');

    if (filter === 'all') {
      $('.grid .card').removeClass('is-active');
      $('.grid').removeClass('filtered is-filtering');
    } else {
      $('.grid').addClass('filtered is-filtering');
      $('.grid .card').removeClass('is-active');
      $(`.grid .${filter}`).addClass('is-active');
    }
  });

  // ===== GALERÍAS HOVER =====
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

    images.each(function (i) {
      $(this).attr('src', imgs[i] || '');
    });

    gallery.addClass('is-visible');
  });

  $('.search-content').on('mouseleave', function () {
    gallery.removeClass('is-visible');
  });

  // ===== REDIRECCIÓN (FRANCIA) =====
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (card.textContent.toLowerCase().includes("francia")) {
      card.addEventListener("click", () => {
        window.location.href = "selectpa.html";
      });
    }
  });

  // ===== MODO OSCURO / CLARO =====
  const toggle = document.getElementById("theme-toggle");
  const sunIcon = '<i class="fa-solid fa-sun" style="color:#ffffff;"></i>';
  const moonIcon = '<i class="fa-solid fa-moon" style="color:#000000;"></i>';
  const footerLogo = document.getElementById("footer-logo-img");
  const headerLogo = document.querySelector(".logo-registered"); // <--- NUEVO: logo del header

  document.body.classList.add("light-mode");
  if (toggle) toggle.innerHTML = moonIcon;

  toggle?.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode", !isDark);

    toggle.innerHTML = isDark ? sunIcon : moonIcon;

    // Footer
    if (footerLogo) {
      footerLogo.src = isDark
        ? "logos/archif-logo_blanco.png"
        : "logos/archif-logo_negro.png";
    }

    // Header
    if (headerLogo) {
      headerLogo.src = isDark
        ? "logos/isotipo_blanco.png" // Logo dark mode
        : "media/img/archif-logo-03.png";   // Logo light mode original
    }
  });

  // ===== OCULTAR FILTROS CUANDO EL BUSCADOR ESTÁ ABIERTO =====
  const observer = new MutationObserver(() => {
    if ($('body').hasClass('search-open')) {
      $('.filters').hide();
    } else {
      $('.filters').show();
    }
  });

  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

});
