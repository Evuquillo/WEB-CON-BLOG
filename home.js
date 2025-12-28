document.addEventListener("DOMContentLoaded", () => {
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
  // CURSOR IMAGE TRAIL (FIXED)
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

    // Coordenadas RELATIVAS al hero
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (lastX !== null && lastY !== null) {
      const dx = x - lastX;
      const dy = y - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < distanceThreshold) return;
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

  // Limpiar cuando sales del hero
  hero.addEventListener("mouseleave", () => {
    lastX = null;
    lastY = null;
  });

  // =============================
  // SECCION 2 / SECCION TEXT
  // =============================

function scrambleText(el, finalText, onComplete) {
  el.innerHTML = ""; // limpiar contenido
  const letters = [];
  let bold = false;
  let italic = false;

  // Crear spans para cada letra y aplicar clases
  for (let i = 0; i < finalText.length; i++) {
    const char = finalText[i];

    if (char === "*") { bold = !bold; continue; }
    if (char === "_") { italic = !italic; continue; }

    const span = document.createElement("span");
    span.textContent = char;
    if (bold) span.classList.add("bold");
    if (italic) span.classList.add("italic");

    el.appendChild(span);
    letters.push(span);
  }

  // Animación scramble
  let iterations = 0;
  const maxIterations = letters.length * 3;
  const chars = "A_<()&[H]I`++J--M**QR**001+++{i¨{klm<*o&=st][00%%%4<<779?É--ÓÚ$·3#6_<()&[H]I`++J--??0-_^`";

  const interval = setInterval(() => {
    letters.forEach((span, i) => {
      if (i < iterations / 3) {
        span.style.opacity = 1;
      } else {
        span.textContent = chars[Math.floor(Math.random() * chars.length)];
        span.style.opacity = 1;
      }
    });

    iterations++;
    if (iterations > maxIterations) {
      clearInterval(interval);
      // restaurar texto final
      letters.forEach((span, i) => {
        const finalChar = finalText.replace(/\*|_/g, "")[i];
        span.textContent = finalChar;
        span.style.opacity = 1;
      });
      if (onComplete) onComplete();
    }
  }, 20);
}

// Animar todas las líneas sin loop
const lines = document.querySelectorAll(".text-can");
let delay = 0;
lines.forEach(el => {
  const text = el.getAttribute("data-text");
  gsap.delayedCall(delay, () => { scrambleText(el, text); });
  delay += 0.6;
});



  // =============================
  // DARK / LIGHT MODE
  // =============================
  const toggle = document.getElementById("theme-toggle");
  const sun = document.getElementById("icon-sun");
  const moon = document.getElementById("icon-moon");
  const footerLogo = document.getElementById("footer-logo-img");

  document.body.classList.add("light-mode");

  function updateFooterLogo() {
    footerLogo.src = document.body.classList.contains("dark-mode")
      ? "logos/archif-logo_blanco.png"
      : "logos/archif-logo_negro.png";
  }

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode", !isDark);
    sun.classList.toggle("hidden", isDark);
    moon.classList.toggle("hidden", !isDark);
    updateFooterLogo();
  });

  updateFooterLogo();

  // =============================
  // SCROLL TO TOP BUTTON (NATIVO)
  // =============================
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.classList.toggle(
        "visible",
        window.scrollY > window.innerHeight * 0.5
      );
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

