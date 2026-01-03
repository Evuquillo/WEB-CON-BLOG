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
  "imgs/amelie.jpg"
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
// SECCIÓN 3 – GALERÍA (FIX DEFINITIVO)
// =============================

// =============================
// SECCIÓN 3 – GSAP CANÓNICO (SIN DRIFT)
// =============================
gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray("#seccion-tres .img-seccion");
const leftTexts = gsap.utils.toArray("#seccion-tres .text-left .text-slide");
const rightTexts = gsap.utils.toArray("#seccion-tres .text-right .text-slide");

const scaleMin = 0.35;
const scaleMax = 1;
const spacing = 70;

// Estado inicial
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

gsap.set([...leftTexts, ...rightTexts], { opacity: 0 });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#seccion-tres",
    start: "top top",
    end: `+=${images.length * window.innerHeight}`,
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});

images.forEach((img, i) => {

  // Imagen principal al centro
  tl.to(img, {
    y: 0,
    scale: 1,
    duration: 0.6,
    ease: "power2.out"
  });

  // Textos
  tl.to([leftTexts[i], rightTexts[i]], {
    opacity: 1,
    duration: 0.25
  }, "<");

  // Recolocar pila
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

  // Salida
  tl.to(img, {
    y: window.innerHeight * 1.3,
    scale: 2,
    duration: 0.8,
    ease: "power2.in"
  });

  // Ocultar textos
  tl.to([leftTexts[i], rightTexts[i]], {
    opacity: 0,
    duration: 0.2
  }, "<");
});

// Refresh limpio
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
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
  const dark = document.body.classList.contains("dark-mode");
  footerLogo.src = dark ? "logos/archif-logo_blanco.png" : "logos/archif-logo_negro.png";
  heroLogo.src = dark ? "logos/archif-logo_blanco.png" : "logos/archif-logo_negro.png";
}

toggle.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode", !dark);
  sun.classList.toggle("hidden", dark);
  moon.classList.toggle("hidden", !dark);
  updateLogos();
});

updateLogos();
