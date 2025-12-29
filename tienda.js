document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

  /* === SMOOTH SCROLL mejorado === */
  const container = document.scrollingElement || document.documentElement;
  let scrollY = 0;
  let targetScrollY = 0;
  const easeFactor = 0.35;

  function smoothScroll() {
    scrollY += (targetScrollY - scrollY) * easeFactor;
    window.scrollTo(0, scrollY);
    requestAnimationFrame(smoothScroll);
  }

  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const scrollSpeed = 1.5;
      targetScrollY += e.deltaY * scrollSpeed;
      targetScrollY = Math.max(
        0,
        Math.min(targetScrollY, container.scrollHeight - window.innerHeight)
      );
    },
    { passive: false }
  );

  smoothScroll();

  /* === IMÁGENES DISPERSAS + DRAG === */
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

  /* === TEXT SCRAMBLE corregido === */
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

  function scrambleText(element, finalText, onComplete) {
    let iteration = 0;
    const total = finalText.length + 5;

    clearInterval(element.scrambleInterval); // prevenir loops previos

    element.scrambleInterval = setInterval(() => {
      const scrambled = finalText
        .split("")
        .map((c, i) => (i < iteration ? c : randomChar()))
        .join("");

      element.textContent = scrambled;
      iteration++;

      if (iteration > total) {
        clearInterval(element.scrambleInterval);
        element.textContent = finalText;
        if (onComplete) onComplete();
      }
    }, 60);
  }

  function loopScramble(firstRun = false) {
    const lines = document.querySelectorAll(".text-paula");
    if (!lines.length) return; // evita error si no hay texto
    let delay = 0;

    lines.forEach((el) => {
      const text = el.getAttribute("data-text");
      gsap.delayedCall(delay, () => {
        scrambleText(el, text, () => {
          // glitch repetido cada 3s sin sobreponer intervalos
          gsap.delayedCall(3, () => scrambleText(el, text));
        });
      });
      delay += 0.8;
    });

    gsap.delayedCall(8, () => loopScramble());
  }

  // Esperar 500 ms para asegurar que las líneas existen antes de iniciar
  setTimeout(() => loopScramble(true), 500);

  /* === GRID ANIMATIONS === */
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

  gsap.from(".grid-description", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: { trigger: ".grid-description", start: "top 85%" },
  });

  /* === MODO OSCURO / CLARO === */
  const toggle = document.getElementById("theme-toggle") || document.getElementById("modeToggle");
  const sun = document.getElementById("icon-sun");
  const moon = document.getElementById("icon-moon");
  const footerLogo = document.getElementById("footer-logo-img");

  document.body.classList.add("light-mode");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      document.body.classList.toggle("light-mode", !isDark);

      if (sun && moon) {
        sun.classList.toggle("hidden", isDark);
        moon.classList.toggle("hidden", !isDark);
      }

      if (footerLogo) {
        footerLogo.src = isDark
          ? "logos/archif-logo_blanco.png"
          : "logos/archif-logo_negro.png";
      }

      if (toggle.textContent.includes("🌙")) {
        toggle.textContent = "☀️ Modo claro";
      } else {
        toggle.textContent = "🌙 Modo oscuro";
      }
    });
  }

  /* === SCROLL TO TOP === */
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
});
