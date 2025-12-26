document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);



  // ======= EFECTO IMAGE TRAIL (solo en section-paula) =======

  const section = document.querySelector(".section-paula");
  const images = gsap.utils.toArray(".img-paula");
  const wrapper = gsap.utils.wrap(0, images.length);
  let index = 0;
  const gap = 150; // distancia mínima para generar nueva imagen

  let mousePos = { x: 0, y: 0 };
  let lastMousePos = { x: 0, y: 0 };
  let cachedMousePos = { x: 0, y: 0 };
  let trailActive = false; // <--- control de estado

  // Activar/desactivar según sección
  section.addEventListener("mouseenter", () => (trailActive = true));
  section.addEventListener("mouseleave", () => (trailActive = false));

  // Actualizar posición del ratón solo si el efecto está activo
  window.addEventListener("mousemove", (e) => {
    if (!trailActive) return;
    mousePos.x = e.x;
    mousePos.y = e.y;
  });

  // Función principal (como en el CodePen)
  function playAnimation(img) {
    const tl = gsap.timeline();
    tl.from(img, {
      scale: 0.8,
      duration: 2
    }, "<")
      .to(img, {
        y: "120vh",
        rotation: "random([360, -360])",
        ease: "back.in(.4)",
        duration: 1,
        filter: "blur(5px)"
      }, 0);
  }

  // Loop del efecto (GSAP ticker)
  gsap.ticker.add(() => {
    if (!trailActive) return; // detener animación fuera de section-paula

    const travelDistance = Math.hypot(
      lastMousePos.x - mousePos.x,
      lastMousePos.y - mousePos.y
    );

    // suavizar movimiento
    cachedMousePos.x = gsap.utils.interpolate(
      cachedMousePos.x || mousePos.x,
      mousePos.x,
      0.1
    );
    cachedMousePos.y = gsap.utils.interpolate(
      cachedMousePos.y || mousePos.y,
      mousePos.y,
      0.1
    );

    // generar nueva imagen cuando se mueve lo suficiente
    if (travelDistance > gap) {
      animateImage();
      lastMousePos = { ...mousePos };
    }
  });

  // Mostrar/animar imagen individual
  function animateImage() {
    const wrappedIndex = wrapper(index);
    const img = images[wrappedIndex];

    gsap.killTweensOf(img);
    gsap.set(img, { clearProps: "all" });

    gsap.set(img, {
      opacity: 1,
      left: mousePos.x,
      top: mousePos.y,
      xPercent: -50,
      yPercent: -50,
      scale: 0.8
    });

    playAnimation(img);
    index++;
  }

  // ======= ANIMACIÓN DE TEXTO =======
  gsap.from(".text-paula", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1.2,
    ease: "power3.out"
  });

  // ======= SCROLL ANIMATIONS =======
  gsap.utils.toArray(".grid-item").forEach((item, i) => {
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: i * 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    });
  });

  gsap.from(".grid-description", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".grid-description",
      start: "top 85%"
    }
  });
});


// ======= EFECTO DE TEXTO SCRAMBLE (tipo GreenSock pen) =======

// Caracteres usados en la animación
const chars = "!<>-_\\/[]{}—=+*^?#________";

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

function scrambleText(element, finalText) {
  let iteration = 0;
  const totalIterations = 20; // más alto = más largo el glitch

  const scrambleInterval = setInterval(() => {
    const scrambled = finalText
      .split("")
      .map((char, i) => {
        if (i < iteration) {
          return finalText[i];
        }
        return randomChar();
      })
      .join("");

    element.textContent = scrambled;

    iteration += 1;

    if (iteration > finalText.length) {
      clearInterval(scrambleInterval);
      element.textContent = finalText;
    }
  }, 60);
}

// Ejecutar efecto en secuencia
const lines = document.querySelectorAll(".text-paula");
let delay = 0;

lines.forEach((el) => {
  const text = el.getAttribute("data-text");
  gsap.delayedCall(delay, () => scrambleText(el, text));
  delay += 0.8; // tiempo entre líneas
});
 // ==== LOOP INFINITO ====
  function loopScramble() {
    const lines = document.querySelectorAll(".text-paula");
    let delay = 0;

    lines.forEach((el) => {
      const text = el.getAttribute("data-text");
      gsap.delayedCall(delay, () => {
        scrambleText(el, text, () => {
          // después de completar, limpiar texto y reiniciar después de 2s
          gsap.delayedCall(2, () => {
            el.textContent = "";
            scrambleText(el, text);
          });
        });
      });
      delay += 0.8; // tiempo entre cada línea
    });

    // repetir todo el ciclo cada ~6 segundos
    gsap.delayedCall(5, loopScramble);
  }

  // iniciar loop
  loopScramble();

  

