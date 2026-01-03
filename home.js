// =============================
// GSAP
// =============================
gsap.registerPlugin(ScrollTrigger);

// =============================
// HERO LOGO SCROLL ANIMATION
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

const images = [
  "imgs/vertigo.jpg",
  "imgs/tour-ska-p.jpg",
  "imgs/festival_1982.jpg",
  "imgs/mujeresalborde.jpg",
  "imgs/colussus digital comp.jpg",
  "imgs/blowfootball.jpg",
  "imgs/BristolBeaufighter.jpg",
  "imgs/amelie.jpg"
];

let imageIndex = 0;
let lastX = null;
let lastY = null;
const distanceThreshold = 30;
const maxImages = 25;

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (lastX !== null && lastY !== null) {
    const dx = x - lastX;
    const dy = y - lastY;
    if (Math.sqrt(dx * dx + dy * dy) < distanceThreshold) return;
  }

  lastX = x;
  lastY = y;

  const img = document.createElement("img");
  img.src = images[imageIndex];
  img.className = "cursor-image";
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  trailContainer.appendChild(img);
  imageIndex = (imageIndex + 1) % images.length;

  if (trailContainer.children.length > maxImages) {
    trailContainer.removeChild(trailContainer.firstChild);
  }
});

hero.addEventListener("mouseleave", () => {
  lastX = null;
  lastY = null;
});

// =============================
// SECCIÓN 2 - TEXT SCRAMBLE SCROLL
// =============================
function scrambleText(el, finalText, onComplete) {
  el.innerHTML = "";
  const letters = [];
  let bold = false;
  let italic = false;

  for (let i = 0; i < finalText.length; i++) {
    const char = finalText[i];

    if (char === "*") { bold = !bold; continue; }
    if (char === "_") { italic = !italic; continue; }

    const span = document.createElement("span");

    if (char === " ") {
      span.innerHTML = "&nbsp;";
      span.style.opacity = 1;
      el.appendChild(span);
      letters.push(null);
      continue;
    }

    span.textContent = char;
    span.style.opacity = 0;

    if (bold) span.classList.add("bold");
    if (italic) span.classList.add("italic");

    el.appendChild(span);
    letters.push(span);
  }

  const chars =
    "A_<()&[H]I`++J--M**QR**001+++{i¨{klm<*o&=st][00%%%4<<779?É--ÓÚ$·3#6_<()&[H]I`++J--??0-_^`";

  const cleanText = finalText.replace(/\*|_/g, "");
  let iterations = 0;

  const interval = setInterval(() => {
    const revealCount = Math.floor(iterations / 2);

    letters.forEach((span, i) => {
      if (!span) return;

      if (i < revealCount) {
        span.textContent = cleanText[i];
        span.style.opacity = 1;
      } else {
        span.textContent = chars[Math.floor(Math.random() * chars.length)];
        span.style.opacity = 0.3;
      }
    });

    iterations++;

    if (revealCount >= letters.length) {
      clearInterval(interval);
      if (onComplete) onComplete();
    }
  }, 60);
}

// ScrollTrigger sección 2
const lines = document.querySelectorAll(".text-can");

ScrollTrigger.create({
  trigger: "#seccion-dos",
  start: "top 70%",
  once: true,
  onEnter: () => {
    lines.forEach(el => {
      const text = el.getAttribute("data-text");
      scrambleText(el, text);
    });
  }
});

// =============================
// SECCIÓN 3 – GALERÍA INTERCAMBIABLE CENTRADA
// =============================
// =============================
// SECCIÓN 3 – GALERÍA INTERCAMBIABLE CENTRADA Y VISIBLE
// =============================
const galleryImages = gsap.utils.toArray("#seccion-tres .img-seccion");
const leftTexts = gsap.utils.toArray("#seccion-tres .text-left .text-slide");
const rightTexts = gsap.utils.toArray("#seccion-tres .text-right .text-slide");

const scaleMin = 0.35;
const scaleMax = 1;
const yStep = 50;

// Función para calcular offset vertical responsivo
function getOffsetY() {
  // Dejamos 5% desde arriba y 5% desde abajo para que las imágenes no se corten
  return window.innerHeight * 0.05;
}

// Inicializamos offset
let offsetY = getOffsetY();

// Posición inicial de las imágenes
function setInitialGalleryPositions() {
  galleryImages.forEach((img, i) => {
    const t = i / (galleryImages.length - 1 || 1);
    gsap.set(img, {
      scale: scaleMin + (scaleMax - scaleMin) * (1 - t),
      y: -yStep * t * galleryImages.length + offsetY,
      zIndex: galleryImages.length - i,
      opacity: 1
    });
  });
}

setInitialGalleryPositions();

// Textos invisibles al inicio
gsap.set([...leftTexts, ...rightTexts], { opacity: 0 });

// Timeline GSAP
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#seccion-tres",
    start: "top top",
    end: "+=" + galleryImages.length * window.innerHeight * 1.2,
    scrub: true,
    pin: true
  }
});

galleryImages.forEach((img, i) => {
  tl.set(img, { zIndex: galleryImages.length });

  // Imagen principal al frente
  tl.to(img, {
    scale: 1,
    y: offsetY, // siempre centrado
    duration: 0.8,
    ease: "power1.out"
  });

  // Textos laterales aparecen
  tl.to([leftTexts[i], rightTexts[i]], {
    opacity: 1,
    zIndex: galleryImages.length + 1,
    duration: 0.3,
    ease: "none"
  }, "<");

  // Cola progresiva detrás
  galleryImages.forEach((nextImg, j) => {
    if (j > i) {
      const t = (j - i) / galleryImages.length;
      tl.to(nextImg, {
        scale: scaleMin + (scaleMax - scaleMin) * (1 - t),
        y: -yStep * t * galleryImages.length + offsetY,
        duration: 1,
        ease: "power1.out",
        zIndex: galleryImages.length - j
      }, "<0.1"); 
    }
  });

  // Salida de la imagen principal
  tl.to(img, {
    y: window.innerHeight * 1.5,
    scale: 2,
    duration: 1,
    ease: "power1.in"
  });

  // Textos desaparecen
  tl.to([leftTexts[i], rightTexts[i]], {
    opacity: 0,
    duration: 0.25,
    ease: "none"
  }, "<");
});

// =============================
// Ajuste dinámico al cambiar tamaño de ventana
// =============================
window.addEventListener("resize", () => {
  offsetY = getOffsetY();
  setInitialGalleryPositions();
});


// =============================
// DARK / LIGHT MODE
// =============================
const toggle = document.getElementById("theme-toggle");
const sun = document.getElementById("icon-sun");
const moon = document.getElementById("icon-moon");

const footerLogo = document.getElementById("footer-logo-img");
const heroLogo = document.getElementById("hero-logo-img");

document.body.classList.add("light-mode");

function updateLogos() {
  const isDark = document.body.classList.contains("dark-mode");

  footerLogo.src = isDark
    ? "logos/archif-logo_blanco.png"
    : "logos/archif-logo_negro.png";

  heroLogo.src = isDark
    ? "logos/archif-logo_blanco.png"
    : "logos/archif-logo_negro.png";
}

toggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode", !isDark);
  sun.classList.toggle("hidden", isDark);
  moon.classList.toggle("hidden", !isDark);
  updateLogos();
});

// Estado inicial
updateLogos();

// =============================
// Ajuste dinámico al cambiar tamaño de ventana
// =============================
window.addEventListener("resize", () => {
  const newOffsetY = window.innerHeight * 0.1;
  galleryImages.forEach((img, i) => {
    const t = i / (galleryImages.length - 1 || 1);
    gsap.set(img, {
      y: -yStep * t * galleryImages.length + newOffsetY
    });
  });
});
