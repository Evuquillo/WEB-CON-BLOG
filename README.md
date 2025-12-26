HTML: 
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>(In No Particular Order) - Paula</title>

  <!-- Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

  <!-- Estilos -->
  <link rel="stylesheet" href="tienda.css" />
</head>

<body>
  <!-- ===== HEADER RECTANGULAR ===== -->
  <header class="main-header">
    <div class="header-content">
    </div>
  </header>

  <section id="inicio" class="section-paula container-fluid p-0">
  <div class="text-wrapper-paula">
    <h1 class="text-paula" data-text="[Subasta]"></h1>
    <h1 class="text-paula" data-text="de_"></h1>
    <h1 class="text-paula" data-text="piezas"></h1>
    <h1 class="text-paula" data-text="[únicas]"></h1>
  </div>

  <div id="drag-images" class="image-container-paula">
    <img src="imgs/railway-1904.jpg" class="img-paula" alt="1">
    <img src="imgs/london underground.jpg" class="img-paula" alt="2">
    <img src="imgs/blowfootball.jpg" class="img-paula" alt="3">
    <img src="imgs/Railway Whitsun Excursions 1905.jpg" class="img-paula" alt="4">
    <img src="imgs/votes for women.jpg" class="img-paula" alt="5">
    <img src="imgs/BristolBeaufighter.jpg" class="img-paula" alt="6">
    <img src="imgs/colussus digital comp.jpg" class="img-paula" alt="7">
    <img src="imgs/Toguether_poster.jpg" class="img-paula" alt="8">
    <img src="imgs/metro.jpg" class="img-paula" alt="9">
  </div>
</section>
  <!-- ===== GRID 3x3 ===== -->
  <section class="grid-paula">
    <div class="grid-container">
      <!-- Cada imagen tiene número y card de información -->
      <div class="grid-item" data-index="01">
        <img src="imgs/grid 1.jpg" alt="01">
        <div class="info-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      <div class="grid-item" data-index="02">
        <img src="imgs/grid 2.jpg" alt="02">
        <div class="info-card">Pellentesque habitant morbi tristique senectus et netus.</div>
      </div>
      <div class="grid-item" data-index="03">
        <img src="imgs/grid 3.jpg" alt="03">
        <div class="info-card">Suspendisse potenti. Morbi vel justo ut erat varius.</div>
      </div>
      <div class="grid-item" data-index="04">
        <img src="imgs/grid 4.jpg" alt="04">
        <div class="info-card">Ut fringilla nisl sit amet quam luctus, sed pulvinar.</div>
      </div>
      <div class="grid-item" data-index="05">
        <img src="imgs/grid 5.jpg" alt="05">
        <div class="info-card">Vivamus cursus magna vel neque vehicula, vel tempus.</div>
      </div>
      <div class="grid-item" data-index="06">
        <img src="imgs/grid 6.jpg" alt="06">
        <div class="info-card">Etiam sodales turpis nec tortor gravida fermentum.</div>
      </div>
      <div class="grid-item" data-index="07">
        <img src="imgs/grid 7.jpg" alt="07">
        <div class="info-card">Donec non sem at magna tempor gravida ac in libero.</div>
      </div>
      <div class="grid-item" data-index="08">
        <img src="imgs/grid 8.jpg" alt="08">
        <div class="info-card">Aliquam erat volutpat. Vestibulum ante ipsum primis.</div>
      </div>
      <div class="grid-item" data-index="09">
        <img src="imgs/grid 9.jpg" alt="09">
        <div class="info-card">Mauris a velit ac nisl tincidunt lacinia in non arcu.</div>
      </div>
      <div class="grid-item" data-index="10">
        <img src="imgs/grid 10.jpg" alt="10">
        <div class="info-card">Mauris a velit ac nisl tincidunt lacinia in non arcu.</div>
      </div>
       <div class="grid-item" data-index="11">
        <img src="imgs/grid 11.jpg" alt="11">
        <div class="info-card">Mauris a velit ac nisl tincidunt lacinia in non arcu.</div>
      </div>
      <div class="grid-item" data-index="12">
        <img src="imgs/grid 12.jpg" alt="12">
        <div class="info-card">Mauris a velit ac nisl tincidunt lacinia in non arcu.</div>
      </div>
    </div>

    <p class="grid-description">
      Space and Agency is a space that blends management and creativity. It consists of a group of synergically intertwined companies that assist luxury brands in their growth and evolution.
    </p>
  </section>

  <!-- ===== SCRIPTS ===== -->
<!-- Bootstrap -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- GSAP + ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollTrigger.min.js"></script>

<!-- SmoothScroll GSAP Plugin (ver ejemplo CodePen) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollToPlugin.min.js"></script>

<!-- Draggable -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/Draggable.min.js"></script>

<!-- ImageDraggingEffects (Codrops) -->
<script src="https://cdn.jsdelivr.net/gh/codrops/ImageDraggingEffects/js/imageDraggingEffects.js"></script>

  <script src="tienda.js"></script>
</body>
</html>

CSS: 
html {
  scroll-behavior: smooth;
}
html, body {
height: 100%;
scroll-behavior: auto;
overflow: visible; 
}

body {
  margin: 0;
  background-color: #fff;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

/* ===== HEADER ===== */
.main-header {
  width: 100%;
  height: 10vh;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 3px solid #fff;
}

/* ===== SECTION PAULA ===== */
.section-paula {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #fff;
  overflow: hidden;
}

.text-wrapper-paula {
  position: absolute;
  top: 15%;
  left: 10%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.text-paula {
  font-family: "Space Mono", monospace;
  font-size: 6vw;
  color: #000;
  letter-spacing: 1px;
  margin: 0;
}
.line1-paula { top: 8%; left: 10%; }
.line2-paula { top: 28%; left: 10%; }
.line3-paula { top: 50%; left: 55%; }
.line4-paula { top: 75%; left: 10%; }

/* ===== SECCIÓN PRINCIPAL ===== */
.section-paula {
  position: relative;
  min-height: 85vh;
  overflow: visible;
  background: var(--bs-body-bg);
}

.image-container-paula {
  position: relative;
  height: 60vh;
  width: 100%;
}

.img-paula {
  position: absolute;
  width: clamp(5rem, 12vw, 8rem);
  height: clamp(5rem, 12vw, 8rem);
  object-fit: cover;
  border-radius: 6px;
  opacity: 0;
}

.active-paula {
  opacity: 1;
  transform: scale(1.1);
}

/* ===== GRID ===== */
.grid-paula {
  background-color: #fff;
  padding: 8rem 0;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  position: relative;
}


.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2rem;
    width: 95%;
     background-color: #fff;
}

/* ===== ITEM ===== */
.grid-item {
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  border-radius: 6px;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease, filter 0.6s ease;
}

/* ===== NÚMEROS PEQUEÑOS ===== */
.grid-item::before {
  content: attr(data-index);
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 0.8rem;
  color: #212529;
  border-radius: 3px;
  padding: 2px 4px;
  z-index: 2;
  font-family: "Space Mono", monospace;
}

/* ===== INFO CARD ===== */
.info-card {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  color: #fff;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  transition: all 0.4s ease;
}

/* ===== EFECTO HOVER ===== */
.grid-item:hover img {
  transform: scale(1.1);
  filter: brightness(0.7);
}

.grid-item:hover .info-card {
  height: 100%;
  opacity: 1;
}

/* ===== DESCRIPCIÓN ===== */
.grid-description {
  margin-top: 4rem;
  text-align: center;
  max-width: 800px;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  margin-inline: auto;
}


JS:
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

  


