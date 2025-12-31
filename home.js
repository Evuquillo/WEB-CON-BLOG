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
// SECCION 2 / TEXT SCRAMBLE SCROLL
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
    const revealCount = Math.floor(iterations / 2); // más lento y progresivo

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
  }, 60); // intervalo más lento
}

// ---- ScrollTrigger sección 2 ----
const lines = document.querySelectorAll(".text-can");

ScrollTrigger.create({
  trigger: "#seccion-dos",
  start: "top 70%",
  once: true,
  onEnter: () => {
    // Animar todas las líneas simultáneamente
    lines.forEach(el => {
      const text = el.getAttribute("data-text");
      scrambleText(el, text);
    });
  }
});

// =============================
// SECCIÓN 3: IMÁGENES INTERCAMBIABLES
// =============================


gsap.fromTo(
  "#seccion-tres .img-seccion",
  {
    scale: 0.6
  },
  {
    scale: 1.15,
    ease: "none",
    scrollTrigger: {
      trigger: "#seccion-tres",
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
  }
);


// =============================
// SECCIÓN 3 – IMÁGENES + TEXTOS
// =============================
const imgs = gsap.utils.toArray("#seccion-tres .img-seccion");
const leftTexts = gsap.utils.toArray("#seccion-tres .text-left .text-slide");
const rightTexts = gsap.utils.toArray("#seccion-tres .text-right .text-slide");

// Hacemos que la primera imagen y texto estén visibles inicialmente
imgs[0].style.opacity = 1;
leftTexts[0].style.opacity = 1;
rightTexts[0].style.opacity = 1;

imgs.forEach((img, i) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#seccion-tres",
      start: () => `top -${i * window.innerHeight}`,
      end: () => `top -${(i + 1) * window.innerHeight}`,
      scrub: true,
    }
  });

  // IMAGEN
  if(i !== 0){
    tl.fromTo(
      img,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1.1, ease: "none", duration: 1 }
    );
  }

  // TEXTOS (ENTRAN)
  tl.fromTo(
    leftTexts[i],
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8 },
    "<"
  );

  tl.fromTo(
    rightTexts[i],
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8 },
    "<"
  );

  // TEXTOS (SALEN solo al hacer scroll a siguiente imagen)
  if (i !== imgs.length - 1) {
    tl.to(
      [leftTexts[i], rightTexts[i]],
      { opacity: 0, y: -30, duration: 0.8 },
      "+=0.5" // espera un poquito antes de desaparecer
    );

    tl.to(
      img,
      { opacity: 0, scale: 1.2, ease: "none", duration: 1 },
      "<"
    );
  }
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
