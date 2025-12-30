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
    ScrollTrigger.update(); // 🔧 sincroniza con scrollTrigger
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

  /* === TEXT SCRAMBLE FUNCIONAL === */
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
      const finalText = el.textContent.trim(); // ✅ usa el texto real
      gsap.delayedCall(delay, () => scrambleText(el, finalText));
      delay += 0.6;
    });

    // Repetir cada 5 segundos
    gsap.delayedCall(5, loopScramble);
  }

  // Iniciar tras 500ms
  setTimeout(loopScramble, 500);

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

  /* === MODO OSCURO / CLARO (Font Awesome) === */
  const toggle = document.getElementById("theme-toggle");
  const sunIcon = '<i class="fa-solid fa-sun" style="color:#ffffff;"></i>';
  const moonIcon = '<i class="fa-solid fa-moon" style="color:#000000;"></i>';
  const footerLogo = document.getElementById("footer-logo-img");

  document.body.classList.add("light-mode");
  if (toggle) toggle.innerHTML = moonIcon; // por defecto modo claro

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode", !isDark);

    // alterna icono
    toggle.innerHTML = isDark ? sunIcon : moonIcon;

    // cambia logo footer
    if (footerLogo) {
      footerLogo.src = isDark
        ? "logos/archif-logo_blanco.png"
        : "logos/archif-logo_negro.png";
    }
  });

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
