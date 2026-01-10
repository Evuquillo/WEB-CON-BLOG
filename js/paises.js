$(document).ready(function () {

  // ===== BUSCADOR =====
  const searchInput = $('.header__search input');
  const searchClose = $('.search-close');
  const searchOverlay = $('.search-overlay');
  const searchItems = $('.search-item');
  const hoverGallery = $('.hover-gallery');
  const hoverImages = hoverGallery.find('img');

  const galleries = {
    home: ['media/img/grid 1.png'],
    subastas: ['media/img/grid 2.png'],
    archivos: ['media/img/grid 3.png'],
    blog: ['media/img/grid 4.png']
  };

  // Abrir buscador
  $('.header__search').on('click', function (e) {
    e.stopPropagation();
    $('body').addClass('search-open');
    searchInput.focus();
  });

  // Cerrar buscador
  searchClose.add(searchOverlay).on('click', function (e) {
    $('body').removeClass('search-open');
    searchInput.blur();
  });

  // Cerrar con ESC
  $(document).on('keydown', function (e) {
    if (e.key === "Escape") {
      $('body').removeClass('search-open');
      searchInput.blur();
    }
  });

  // Hover para galería
  searchItems.on('mouseenter', function () {
    const key = $(this).find('p').text().toLowerCase();
    const imgs = galleries[key];
    if (!imgs) return;

    hoverImages.each(function (i) {
      $(this).attr('src', imgs[i] || '');
    });

    hoverGallery.addClass('is-visible');
  });

  $('.search-content').on('mouseleave', function () {
    hoverGallery.removeClass('is-visible');
  });

  // Click en enlaces dentro del overlay -> ahora funciona
  searchItems.find('a').on('click', function (e) {
    $('body').removeClass('search-open');
    searchInput.blur();
    // e.stopPropagation() no se usa aquí para que el enlace funcione normalmente
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
  const headerLogo = document.querySelector(".logo-registered");

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
        ? "logos/isotipo_blanco.png"
        : "media/img/archif-logo-03.png";
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
