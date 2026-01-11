document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);


  /* =====================================================
     IMÁGENES DISPERSAS + DRAG
  ===================================================== */
  const imgs = document.querySelectorAll(".img-paula");
  const imgContainer = document.querySelector(".image-container-paula");
  const cw = imgContainer.offsetWidth;
  const ch = imgContainer.offsetHeight;

  imgs.forEach((img) => {
    const randX = gsap.utils.random(cw * 0.55, cw * 0.9);
    const randY = gsap.utils.random(0, ch - 200);
    gsap.set(img, { x: randX, y: randY, opacity: 0, scale: 0.8 });

    gsap.to(img, {
      opacity: 1,
      y: randY - 20,
      scale: 1,
      duration: 1.2,
      delay: gsap.utils.random(0, 0.8),
      ease: "power2.out",
    });

    Draggable.create(img, { bounds: imgContainer, inertia: true });
  });

  (function initCustomCursor() {
  // Solo desktop con ratón
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!isFinePointer) return;

  // Si ya está iniciado, no duplicar
  if (window.__customCursorInit) return;
  window.__customCursorInit = true;

  // Asegura que exista el HTML
  let cursor = document.getElementById("custom-cursor");
  if (!cursor) {
    cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.innerHTML = `<div class="cursor-inner"></div>`;
    document.body.appendChild(cursor);
  }

  const inner = cursor.querySelector(".cursor-inner");
  if (!inner) return;

  // Mover cursor
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // Crecer sobre links, botones y elementos “clicables”
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, .button-4, input, textarea, select, .grid-item")) {
      inner.classList.add("link-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("a, button, .button-4, input, textarea, select, .grid-item")) {
      inner.classList.remove("link-hover");
    }
  });
})();

  /* =====================================================
     TEXT SCRAMBLE
  ===================================================== */
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

  function scrambleText(element, finalText, duration = 1200, speed = 50, onComplete) {
    const length = finalText.length;
    let frame = 0;
    const totalFrames = Math.ceil(duration / speed);

    clearInterval(element.scrambleInterval);

    element.scrambleInterval = setInterval(() => {
      const progress = frame / totalFrames;
      const revealCount = Math.floor(progress * length);

      const scrambled = finalText
        .split("")
        .map((c, i) => (i < revealCount ? c : randomChar()))
        .join("");

      element.textContent = scrambled;

      frame++;
      if (frame > totalFrames) {
        clearInterval(element.scrambleInterval);
        element.textContent = finalText;
        if (onComplete) onComplete();
      }
    }, speed);
  }

  function loopScramble() {
    const lines = document.querySelectorAll(".text-paula");
    if (!lines.length) return;
    let delay = 0;

    lines.forEach((el) => {
      const finalText = el.textContent.trim();
      gsap.delayedCall(delay, () => scrambleText(el, finalText));
      delay += 0.6;
    });

    gsap.delayedCall(5, loopScramble);
  }

  setTimeout(loopScramble, 500);

  /* =====================================================
     GRID ANIMATIONS
  ===================================================== */
  gsap.utils.toArray(".grid-item").forEach((item, i) => {
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: i * 0.05,
      ease: "power2.out",
      scrollTrigger: { trigger: item, start: "top 90%" },
    });
  });

  /* =====================================================
     MODO OSCURO / CLARO
  ===================================================== */
  const toggle = document.getElementById("theme-toggle");
  const sunIcon = '<i class="fa-solid fa-sun" style="color:#ffffff;"></i>';
  const moonIcon = '<i class="fa-solid fa-moon" style="color:#000000;"></i>';
  const footerLogo = document.getElementById("footer-logo-img");
  

  document.body.classList.add("light-mode");
  if (toggle) toggle.innerHTML = moonIcon;

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode", !isDark);

    toggle.innerHTML = isDark ? sunIcon : moonIcon;

    if (footerLogo) {
      footerLogo.src = isDark
        ? "logos/archif-logo_blanco.png"
        : "logos/archif-logo_negro.png";
    }
  });

  /* =====================================================
     SCROLL TO TOP
  ===================================================== */
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        scrollBtn.classList.add("visible");
      } else {
        scrollBtn.classList.remove("visible");
      }
    });

    scrollBtn.addEventListener("click", () => {
      gsap.to(window, { duration: 1, scrollTo: 0, ease: "power2.out" });
      targetScrollY = 0;
      scrollY = 0;
    });
  }

  /* =====================================================
     BUSCADOR + OVERLAY + GALERÍAS HOVER
  ===================================================== */
  const searchInput = $('.header__search input');
  const searchClose = $('.search-close');
  const searchOverlay = $('.search-overlay');
  const searchItems = $('.search-item');
  const hoverGallery = $('.hover-gallery');
  const hoverImages = hoverGallery.find('img');

  const galleryImages = {
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
    e.preventDefault();
    e.stopPropagation();
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
    const imgs = galleryImages[key];
    if (!imgs) return;

    hoverImages.each(function (i) {
      $(this).attr('src', imgs[i] || '');
    });

    hoverGallery.addClass('is-visible');
  });

  $('.search-content').on('mouseleave', function () {
    hoverGallery.removeClass('is-visible');
  });

  // Click en links dentro del overlay -> CORRECCIÓN
  searchItems.find('a').on('click', function (e) {
    $('body').removeClass('search-open');
    searchInput.blur();
    e.stopPropagation(); // 🔑 evita que el overlay bloquee el enlace
    // el href del <a> funciona normalmente
  });

});
