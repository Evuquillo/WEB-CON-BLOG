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

  // === Imágenes dispersas (solo a la derecha) + Draggable ===
  const imgs = document.querySelectorAll(".img-paula");
  const imgContainer = document.querySelector(".image-container-paula");
  const containerWidth = imgContainer.offsetWidth;
  const containerHeight = imgContainer.offsetHeight;

  imgs.forEach((img) => {
    const randX = gsap.utils.random(containerWidth * 0.55, containerWidth * 0.9);
    const randY = gsap.utils.random(0, containerHeight - 200);
    gsap.set(img, { x: randX, y: randY });

    gsap.to(img, {
      opacity: 1,
      y: randY - 20,
      duration: 1.2,
      delay: gsap.utils.random(0, 0.8),
      ease: "power2.out",
    });

    Draggable.create(img, { bounds: imgContainer, inertia: true });
  });

 // === Texto glitch con LOOP + aparición del about ===
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

  function scrambleText(element, finalText, onComplete) {
    let iteration = 0;
    const totalIterations = finalText.length + 5;
    const interval = setInterval(() => {
      const scrambled = finalText.split("").map((c, i) =>
        i < iteration ? c : randomChar()
      ).join("");
      element.textContent = scrambled;
      iteration++;
      if (iteration > totalIterations) {
        clearInterval(interval);
        element.textContent = finalText;
        if (onComplete) onComplete();
      }
    }, 60);
  }

  // Función para aplicar el loop infinito y mostrar el <p> después del primer ciclo
  function loopScramble(firstRun = false) {
    const lines = document.querySelectorAll(".text-paula");
    let delay = 0;

    lines.forEach(el => {
      const text = el.getAttribute("data-text");
      gsap.delayedCall(delay, () => {
        scrambleText(el, text, () => {
          // Volver a glitchear después de 3s
          gsap.delayedCall(3, () => scrambleText(el, text));
        });
      });
      delay += 0.8;
    });

    // Si es la primera ejecución → mostrar el texto explicativo
    if (firstRun) {
      gsap.to(".about-auction-paula", {
        opacity: 1,
        y: 0,
        duration: 0.25,
        delay: delay + 0.25,
        ease: "power2.inOut"
      });
    }

    // Reiniciar el loop del scramble cada 8 segundos
    gsap.delayedCall(8, () => loopScramble());
  }

  // Iniciar el loop con flag firstRun=true para disparar el about una sola vez
  loopScramble(true);

  // === Grid ScrollTrigger ===
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
