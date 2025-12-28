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
    const revealCount = Math.floor(iterations / 5); // ← MÁS LENTO

    letters.forEach((span, i) => {
      if (!span) return;

      if (i < revealCount) {
        span.textContent = cleanText[i];
        span.style.opacity = 1;
      } else {
        span.textContent =
          chars[Math.floor(Math.random() * chars.length)];
        span.style.opacity = 0.3;
      }
    });

    iterations++;

    if (revealCount >= letters.length) {
      clearInterval(interval);
      if (onComplete) onComplete();
    }
  }, 30); 
}

// =============================
// SECCION 3 / IMAGEN QUE SE ENCOGE
// =============================
gsap.to("#imagen-grande", {
  scale: 0.7, // tamaño final al hacer scroll
  ease: "none",
  scrollTrigger: {
    trigger: "#seccion-tres",
    start: "top bottom",  // cuando la sección empieza a entrar
    end: "bottom top",    // hasta que termina de salir
    scrub: true,          // animación sincronizada con el scroll
  }
});


// ---- ScrollTrigger sección 2 ----
const lines = document.querySelectorAll(".text-can");

ScrollTrigger.create({
  trigger: "#seccion-dos",
  start: "top 70%",
  once: true,
  onEnter: () => {
    let delay = 0;
    lines.forEach(el => {
      const text = el.getAttribute("data-text");
      gsap.delayedCall(delay, () => scrambleText(el, text));
      delay += 0.8; // un poco más de aire entre líneas
    });
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

updateLogos();
