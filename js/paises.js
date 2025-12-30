document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

  // === Smooth Scroll (más rápido y responsivo) ===
  const container = document.scrollingElement || document.documentElement;
  let scrollY = 0;
  let targetScrollY = 0;
  const easeFactor = 0.35; // 🔥 antes 0.1 → ahora más rápido (ajustable entre 0.2–0.35)

  function smoothScroll() {
    scrollY += (targetScrollY - scrollY) * easeFactor;
    window.scrollTo(0, scrollY);
    requestAnimationFrame(smoothScroll);
  }

  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();

      // Sensibilidad del scroll (ajusta este valor para velocidad)
      const scrollSpeed = 1.5; // 🔥 antes 1 → más rápido
      targetScrollY += e.deltaY * scrollSpeed;

      // Limitar dentro del documento
      targetScrollY = Math.max(
        0,
        Math.min(targetScrollY, container.scrollHeight - window.innerHeight)
      );
    },
    { passive: false }
  );

  smoothScroll();

  // === Modo oscuro/claro ===
  const toggle = document.getElementById("theme-toggle");
  const sun = document.getElementById("icon-sun");
  const moon = document.getElementById("icon-moon");

  document.body.classList.add("light-mode");

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode", !isDark);
    sun.classList.toggle("hidden", isDark);
    moon.classList.toggle("hidden", !isDark);
  });

    // === Cambiar logo del footer según modo ===
  const footerLogo = document.getElementById("footer-logo-img");

  function updateFooterLogo() {
    if (document.body.classList.contains("dark-mode")) {
      footerLogo.src = "logos/archif-logo_blanco.png";
    } else {
      footerLogo.src = "logos/archif-logo_negro.png";
    }
  }

  // Llamar al inicio y cada vez que se cambia el modo
  updateFooterLogo();
  toggle.addEventListener("click", updateFooterLogo);


  // === Scroll to Top Button (funcional con smooth scroll manual) ===
  const scrollBtn = document.getElementById("scrollTopBtn");

  // Mostrar / ocultar la flecha según el scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.5) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  // Al hacer clic, animamos targetScrollY (no window.scroll)
  scrollBtn.addEventListener("click", () => {
    gsap.to(this, {
      onUpdate: () => {
        // Reducir suavemente el scroll objetivo
        targetScrollY = gsap.utils.interpolate(targetScrollY, 0, 0.1);
      },
      onComplete: () => {
        targetScrollY = 0;
        scrollY = 0;
        window.scrollTo(0, 0);
      },
    });
  });

});
