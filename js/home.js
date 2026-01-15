



// =============================
// MENU / BUSCADOR + HOVER GALLERY
// =============================
$(document).ready(function () {

  // =============================
  // BUSCADOR
  // =============================
  const searchInput = $('.header__search input');
  const searchClose = $('.search-close');
  const body = $('body');

  $('.header__search').on('click', function (e) {
    e.stopPropagation();
    body.addClass('search-open');
    searchInput.focus();
  });

  $('.search-close, .search-overlay').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    body.removeClass('search-open');
    searchInput.blur();
  });

  $('.search-content').on('click', function (e) {
    e.stopPropagation();
  });

  $(document).on('keydown', function (e) {
    if (e.key === "Escape") {
      body.removeClass('search-open');
      searchInput.blur();
    }
  });

  // =============================
  // GALERÍAS HOVER
  // =============================
  const galleries = {
    home: ['media/img/grid 1.png'],
    subastas: ['media/img/grid 2.png'],
    archivos: ['media/img/grid 3.png'],
    blog: ['media/img/grid 4.png']
  };

  const items = $('.search-item');
  const gallery = $('.hover-gallery');
  const hoverImages = gallery.find('img');

  items.on('mouseenter', function () {
    const key = $(this).find('p').text().toLowerCase();
    const imgs = galleries[key];
    if (!imgs) return;

    hoverImages.each(function (i) {
      $(this).attr('src', imgs[i] || imgs[0] || '');
    });

    gallery.addClass('is-visible');
  });

  $('.search-content').on('mouseleave', function () {
    gallery.removeClass('is-visible');
  });

});


// =============================
// GSAP
// =============================
gsap.registerPlugin(ScrollTrigger);


// =============================
// HERO LOGO SCROLL
// =============================
gsap.fromTo(
  "#hero-logo-img",
  { opacity: 1, scale: 1 },
  {
    opacity: 0,
    scale: 0.95,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  }
);


// =============================
// CURSOR IMAGE TRAIL
// =============================
const hero = document.querySelector(".hero");
const trailContainer = document.getElementById("cursor-trail");

const trailImages = [
  "imgs/vertigo.jpg",
  "imgs/tour-ska-p.jpg",
  "imgs/festival_1982.jpg",
  "imgs/mujeresalborde.jpg",
  "imgs/colussus digital comp.jpg",
  "imgs/blowfootball.jpg",
  "imgs/BristolBeaufighter.jpg",
  "imgs/lahine.jpg"
];

let imgIndex = 0;
let lastX = null;
let lastY = null;

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (lastX !== null) {
    const dx = x - lastX;
    const dy = y - lastY;
    if (Math.hypot(dx, dy) < 30) return;
  }

  lastX = x;
  lastY = y;

  const img = document.createElement("img");
  img.src = trailImages[imgIndex];
  img.className = "cursor-image";
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  trailContainer.appendChild(img);
  imgIndex = (imgIndex + 1) % trailImages.length;

  if (trailContainer.children.length > 25) {
    trailContainer.removeChild(trailContainer.firstChild);
  }
});

hero.addEventListener("mouseleave", () => {
  lastX = null;
  lastY = null;
});



// =============================
// CURSOR TRAIL ALEATORIO EN MÓVIL
// =============================
function initMobileTrail() {
  const hero = document.querySelector(".hero");
  const trailContainer = document.getElementById("cursor-trail");
  const trailImages = [
    "imgs/vertigo.jpg",
    "imgs/tour-ska-p.jpg",
    "imgs/festival_1982.jpg",
    "imgs/mujeresalborde.jpg",
    "imgs/colussus digital comp.jpg",
    "imgs/blowfootball.jpg",
    "imgs/BristolBeaufighter.jpg",
    "imgs/lahine.jpg"
  ];

  // Limpiamos cualquier rastro anterior
  trailContainer.innerHTML = "";

  if (window.innerWidth > 768) return; // solo móvil

  // Función que crea una imagen aleatoria en la hero
  function spawnRandomImage() {
    const img = document.createElement("img");
    img.src = trailImages[Math.floor(Math.random() * trailImages.length)];
    img.className = "cursor-image";
    
    // Tamaño más pequeño en móvil
    const size = 50 + Math.random() * 30; // 50-80px
    img.style.width = size + "px";
    img.style.height = "auto";

    // Posición aleatoria dentro de hero
    const rect = hero.getBoundingClientRect();
    const x = Math.random() * rect.width;
    const y = Math.random() * rect.height;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    // Animación de aparición y desvanecimiento
    img.style.opacity = 0;
    img.style.position = "absolute";
    img.style.pointerEvents = "none";
    img.style.transition = "opacity 1s ease, transform 1s ease";
    trailContainer.appendChild(img);

    // Forzamos reflow y animamos
    requestAnimationFrame(() => {
      img.style.opacity = 1;
      img.style.transform = `translateY(-20px)`; // pequeño movimiento
    });

    // Desaparece después de 3-5s
    setTimeout(() => {
      img.style.opacity = 0;
      setTimeout(() => {
        trailContainer.removeChild(img);
      }, 1000);
    }, 3000 + Math.random() * 2000);
  }

  // Intervalo para generar varias imágenes aleatorias
  const mobileTrailInterval = setInterval(spawnRandomImage, 400);

  // Limpiamos intervalo si se cambia a desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      clearInterval(mobileTrailInterval);
    }
  });
}

// Inicializamos al cargar la página
initMobileTrail();



// =============================
// SECCIÓN 2 – TEXT SCRAMBLE
// =============================
function scrambleText(el, finalText) {
  el.innerHTML = "";
  let bold = false;
  let italic = false;
  const spans = [];

  for (const char of finalText) {
    if (char === "*") { bold = !bold; continue; }
    if (char === "_") { italic = !italic; continue; }

    const span = document.createElement("span");

    if (char === " ") {
      span.innerHTML = "&nbsp;";
      span.style.opacity = 1;
      el.appendChild(span);
      spans.push(null);
      continue;
    }

    span.textContent = char;
    span.style.opacity = 0;
    if (bold) span.classList.add("bold");
    if (italic) span.classList.add("italic");

    el.appendChild(span);
    spans.push(span);
  }

  const chars = "A<>()[]{}+-*/%#@!?0123456789";
  const clean = finalText.replace(/[*_]/g, "");
  let frame = 0;

  const interval = setInterval(() => {
    const reveal = Math.floor(frame / 2);

    spans.forEach((span, i) => {
      if (!span) return;
      if (i < reveal) {
        span.textContent = clean[i];
        span.style.opacity = 1;
      } else {
        span.textContent = chars[Math.floor(Math.random() * chars.length)];
        span.style.opacity = 0.3;
      }
    });

    frame++;
    if (reveal >= spans.length) clearInterval(interval);
  }, 60);
}

ScrollTrigger.create({
  trigger: "#seccion-dos",
  start: "top 70%",
  once: true,
  onEnter: () => {
    document.querySelectorAll(".text-can").forEach(el => {
      scrambleText(el, el.dataset.text);
    });
  }
});


// =============================
// SECCIÓN 3 – GALERÍA STICKY RESPONSIVE
// =============================
gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray("#seccion-tres .img-seccion");
const textLeft = document.querySelector(".img-wrapper .text-left");
const textRight = document.querySelector(".img-wrapper .text-right");

const scaleMin = 0.35;
const scaleMax = 1;

// Definimos spacing según pantalla
function getSpacing() {
  return window.innerWidth <= 768 ? 40 : 70; // más juntas en móvil
}

// Inicializamos la posición de las imágenes
function setImagesInitial() {
  const spacing = getSpacing();

  images.forEach((img, i) => {
    const t = i / (images.length - 1 || 1);
    gsap.set(img, {
      x: 0,
      y: -spacing * t * images.length,
      scale: scaleMin + (scaleMax - scaleMin) * (1 - t),
      opacity: 1,
      zIndex: images.length - i
    });
  });
}

setImagesInitial();

// Timeline GSAP con ScrollTrigger
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#seccion-tres",
    start: "top top",
    end: () => `+=${images.length * window.innerHeight}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const index = Math.min(
        images.length - 1,
        Math.floor(self.progress * images.length)
      );
      const img = images[index];
      if (img) {
        // SOLO cambiamos el contenido
        textLeft.textContent = img.dataset.left;
        textRight.textContent = img.dataset.right;
      }
    }
  }
});

// Animación de las imágenes
function animateImages() {
  const spacing = getSpacing();

  images.forEach((img, i) => {
    tl.to(img, { y: 0, scale: 1, duration: 0.6, ease: "power2.out" });

    images.forEach((next, j) => {
      if (j > i) {
        const t = (j - i) / images.length;
        tl.to(next, {
          y: -spacing * t * images.length,
          scale: scaleMin + (scaleMax - scaleMin) * (1 - t),
          duration: 0.6,
          ease: "power2.out"
        }, "<");
      }
    });

    tl.to(img, {
      y: window.innerHeight * 1.3,
      scale: 2,
      duration: 0.8,
      ease: "power2.in"
    });
  });
}

animateImages();

// Refresh y recalculo al redimensionar
window.addEventListener("resize", () => {
  const spacing = getSpacing();

  // Reset posiciones
  setImagesInitial();

  // Refresh ScrollTrigger
  ScrollTrigger.refresh();
});


// DARK / LIGHT MODE

const toggle = document.getElementById("theme-toggle");
const sun = document.getElementById("icon-sun");
const moon = document.getElementById("icon-moon");

const footerLogo = document.getElementById("footer-logo-img");
const heroLogo = document.getElementById("hero-logo-img");

document.body.classList.add("light-mode");

function updateLogos() {
  const dark = document.body.classList.contains("dark-mode");
  footerLogo.src = dark
    ? "logos/archif-logo_blanco.png"
    : "logos/archif-logo_negro.png";
  heroLogo.src = dark
    ? "logos/archif-logo_blanco.png"
    : "logos/archif-logo_negro.png";
}

toggle.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode", !dark);
  sun.classList.toggle("hidden", dark);
  moon.classList.toggle("hidden", !dark);
  updateLogos();

  const toggle = document.getElementById("theme-toggle");
const headerLogo = document.querySelector(".header__logo img");
const footerLogo = document.getElementById("footer-logo-img");

// Iconos
const moonIcon = '<i class="fa-solid fa-moon" style="color:#000000;"></i>';
const sunIcon = '<i class="fa-solid fa-sun" style="color:#ffffff;"></i>';

// Recuperar modo guardado o usar claro por defecto
const savedTheme = localStorage.getItem("theme") || "light";
const isDarkStart = savedTheme === "dark";

// Aplicar modo inicial
document.body.classList.toggle("dark-mode", isDarkStart);
document.body.classList.toggle("light-mode", !isDarkStart);

// Aplicar ícono correspondiente
if (toggle) {
  toggle.innerHTML = isDarkStart ? sunIcon : moonIcon;
}

// Actualizar logos según modo
function updateLogos(isDark) {
  if (headerLogo) {
    headerLogo.src = isDark ? "logos/isotipo_blanco.png" : "logos/isotipo_negro.png";
  }
  if (footerLogo) {
    footerLogo.src = isDark ? "logos/archif-logo_blanco.png" : "logos/archif-logo_negro.png";
  }
}

// Inicializar logos
updateLogos(isDarkStart);

// Escuchar el click del botón
if (toggle) {
  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode", !isDark);

    // Cambiar icono
    toggle.innerHTML = isDark ? sunIcon : moonIcon;

    // Actualizar logos
    updateLogos(isDark);

    // Guardar preferencia
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
});

updateLogos();



// CUSTOM CURSOR (bolita que sigue al mouse + hover)
(function initCustomCursor() {

  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!isFinePointer) return;

  if (window.__customCursorInit) return;
  window.__customCursorInit = true;

  const run = () => {

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

    // Crecer en hover sobre elementos clicables
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a, button, .btn, input, textarea, select, .grid-item")) {
        inner.classList.add("link-hover");
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest("a, button, .btn, input, textarea, select, .grid-item")) {
        inner.classList.remove("link-hover");
      }
    });
  };

  // Por si el script se carga en <head> alguna vez
  if (document.body) run();
  else window.addEventListener("DOMContentLoaded", run);

})();



