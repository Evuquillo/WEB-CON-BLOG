index.html: 
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tienda - Archif.</title>

  <!-- Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

  <!-- Estilos -->
  <link rel="stylesheet" href="tienda.css" />

  <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="favicon/favicon.svg" />
<link rel="shortcut icon" href="favicon/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="Archif." />
<link rel="manifest" href="favicon/web-app-manifest-192x192.png" />
</head>

<body>
  <!-- ===== BOTÓN DARK/LIGHT MODE ===== -->
  <button id="theme-toggle" class="theme-toggle" aria-label="Cambiar tema">
    <!-- Sol -->
    <svg id="icon-sun" class="icon-theme" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
      viewBox="0 0 24 24">
      <path fill-rule="evenodd"
        d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
        clip-rule="evenodd" />
    </svg>

    <!-- Luna -->
    <svg id="icon-moon" class="icon-theme hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      fill="#ffff" viewBox="0 0 24 24">
      <path fill-rule="evenodd"
        d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
        clip-rule="evenodd" />
    </svg>
  </button>

  <!-- ===== HEADER RECTANGULAR ===== -->


  <!-- ===== SECCIÓN PRINCIPAL ===== -->
  <section id="inicio" class="section-paula container-fluid p-0">
    <div class="text-wrapper-paula">
      <h1 class="text-paula" data-text="[Subasta]"></h1>
      <h1 class="text-paula" data-text="de_"></h1>
      <h1 class="text-paula" data-text="piezas"></h1>
      <h1 class="text-paula" data-text="[únicas]"></h1>

      <div>
        <div class="about-auction-paula">
  <p>/ Pósters únicos, fotografías analógicas y obras de arte de artistas singulares.</p>
  <p>/ Cada pieza cuenta con una subasta activa y un temporizador con fecha de cierre.</p>
  <p>/ Cuando esa fecha llega, quien haya realizado la oferta más alta se queda con la pieza de archivo exclusiva.</p>
</div>

      </div>
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
      <div class="grid-item" data-index="01"><img src="imgs/grid 12.png"><div class="info-card">Greg Gorman, Divine 2, Impresión pigmentada de archivo sobre platina Legacy <br> ¡Firmado! <br> Año: 1984</div></div>
      <div class="grid-item" data-index="02"><img src="imgs/grid 2.png"><div class="info-card">¡Original Vintage WWII Poster Handen Weg! Europa Manos Fuera de Europa Guerra Países Bajos. <br>  Año: 1943 </div></div>
      <div class="grid-item" data-index="03"><img src="imgs/grid 3.png"><div class="info-card">Número especial de Illustrated publicado para conmemorar la coronación de Isabel II en 1953. <br> Autor: Illustrated Magazine <br> Año: 1953 </div></div>
      <div class="grid-item" data-index="04"><img src="imgs/grid 4.png"><div class="info-card">Aguafuerte de William Hogarth, grabado por J. Mills y publicado en 1808, con recortes de prensa contemporáneos. <br> Año: 1763-1866</div></div>
      <div class="grid-item" data-index="05"><img src="imgs/grid 5.png"><div class="info-card">Retrato original de Adolfo Best Maugard, María Luisa Cabrera de Block y Frida Kahlo.<br> Año: 1945 </div></div>
      <div class="grid-item" data-index="06"><img src="imgs/grid 10.png"><div class="info-card">Batman 1989 Cartel de cine egipcio original. <br> Año: 1989</div></div>
      <div class="grid-item" data-index="07"><img src="imgs/grid 7.png"><div class="info-card">Il Principe della Notte (La maldición del vudú) <br> Año: 1965</div></div>
      <div class="grid-item" data-index="08"><img src="imgs/grid 8.png"><div class="info-card">Gustave Le Gray y Auguste Mestral, Fachada oeste de la Catedral de Saint-Gatien, Tours <br> Negativo en papel encerado <br> Año: 1851</div></div>
      <div class="grid-item" data-index="09"><img src="imgs/grid 9.png"><div class="info-card">Raro Póster Original de Campeonatos de Esquí de La Molina España <br> Año: 1942 </div></div>
      <div class="grid-item" data-index="10"><img src="imgs/grid 6.png"><div class="info-card">Inside Information: Boombox <br> Author: Dorothy Studio.</div></div>
      <div class="grid-item" data-index="11"><img src="imgs/grid 11.png"><div class="info-card">Póster Original Vintage Tintín y las Naranjas Azules Herge Cinema Film Art <br> Año: 1964</div></div>
      <div class="grid-item" data-index="12"><img src="imgs/grid 1.png"><div class="info-card">Cartel de ferias y fiestas de Sevilla <br> Autor: Josep Renau <br> Año: 1930-31</div></div>
     
    </div>

      <!-- Flecha Scroll to Top -->
  <button id="scrollTopBtn" class="scroll-top-btn" aria-label="Volver arriba">
    ↑
  </button>

  <!-- ===== FOOTER ===== -->
<footer class="main-footer">
  <div class="footer-container">
    <div class="footer-logo">
      <img 
        id="footer-logo-img"
        src="logos/archif-logo_negro.png" 
        alt="Archif logo"
        class="footer-logo-img"
      >
    </div>

    <div class="footer-info">
      <p>2026 Archif®. Todos los derechos reservados.</p>
      <p>Plataforma digital dedicada a la recuperación y difusión de archivos creativos poco accesibles.</p>
    </div>

    <div class="footer-links">
      <a href="#">Devoluciones</a>
      <a href="#">Contacto</a>
      <a href="#">Términos</a>
    </div>
  </div>
</footer>

  </section>


  <!-- ===== SCRIPTS ===== -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollTrigger.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollToPlugin.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/Draggable.min.js"></script>
  <script src="tienda.js"></script>
</body>
</html>

tienda.css: 
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  transition: background-color 0.5s ease, color 0.5s ease;
  overflow-x: hidden;
}

/* Temas */
:root {
  --bg-light: #ffffff;
  --bg-dark: #111111;
  --text-light: #000000;
  --text-dark: #ffffff;
}

body.light-mode {
  background-color: var(--bg-light);
  color: var(--text-light);
}

body.dark-mode {
  background-color: var(--bg-dark);
  color: var(--text-dark);
}

/* Botón modo oscuro */
.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
}

.icon-theme {
  width: 26px;
  height: 26px;
  color: inherit;
}

.hidden { display: none; }

/* Header */
.main-header {
  width: 100%;
  height: 10vh;
  background: currentColor;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Sección principal */
.section-paula {
  position: relative;
  min-height: 85vh;
  overflow: hidden;
}

.text-wrapper-paula {
  position: absolute;
  top: 15%;
  left: 10%;
  display: flex;
  flex-direction: column;
}

.text-paula {
  font-family: 'Inter';
  font-weight: 700;
  font-size: clamp(2rem, 7vw, 5rem);
}
.about-auction-paula {
  font-family: "Space Mono", monospace;
  font-size: clamp(0.9rem, 1.1vw, 1rem);
  line-height: 1.6;
  color: inherit;
  opacity: 0;
  transform: translateY(20px);
  max-width: 600px;
  margin-top: 2rem;
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.about-auction-paula p {
  text-align: justify;
  text-justify: inter-word;
  margin: 0 0 1rem 0; /* separa los párrafos un poco */
}
/* Imágenes dispersas */
.image-container-paula {
  position: relative;
  height: 85vh;
  width: 100%;
  overflow: visible;
}

.img-paula {
  position: absolute;
  max-width: 240px;
  height: auto;
  opacity: 0;
  cursor: grab;
  border-radius: 6px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  transition: transform 0.2s ease;
}

.img-paula:active {
  cursor: grabbing;
  transform: scale(1.05);
}

/* ===== GRID ===== */
.grid-paula {

  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 90%;
}

.grid-item {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  opacity: 0;
  transform: translateY(50px);
}


.grid-item::before {
  content: attr(data-index);
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 0.9rem;
  font-family: "Space Mono", monospace;
  color: inherit;
  padding: 2px 6px;
  z-index: 2;
  pointer-events: none;
  transition: background 0.3s ease;
}

body.dark-mode .grid-item::before {
  
  color: #ffffff;
}

/* === Imágenes dentro del grid === */
.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease, filter 0.6s ease;
}

.grid-item:hover img {
  transform: scale(1.1);
  filter: brightness(0.7);
}

/* === Info card === */
.info-card {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  color: #fff;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.4s ease;
  text-shadow: 1px 0px 3px rgba(0, 0, 3, 20);
   font-family: "Space Mono" ;
   font-weight: 500;
}

.grid-item:hover .info-card {
  height: 100%;
  opacity: 1;
}



/* ===== Botón Scroll to Top ===== */
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 999;
}

.scroll-top-btn:hover {
  background-color: rgba(0, 0, 0, 0.9);
  transform: scale(1.1);
}

body.dark-mode .scroll-top-btn {
  background-color: rgba(255, 255, 255, 0.8);
  color: #000;
}

.scroll-top-btn.visible {
  opacity: 1;
  pointer-events: auto;
}

/* ===== FOOTER ===== */
.main-footer {
  width: 100%;
  background-color: var(--bg-light);
  color: var(--text-light);
  padding: 3rem 2rem;
  border-top: 1px solid rgba(0,0,0,0.1);
    font-family: "Space Mono", monospace;
  transition: background-color 0.4s ease, color 0.4s ease;
}

body.dark-mode .main-footer {
  background-color: var(--bg-dark);
  color: var(--text-dark);
  border-top: 1px solid rgba(255,255,255,0.2);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.footer-logo-img {
  height: 40px;
  width: auto;
  transition: filter 0.3s ease, opacity 0.3s ease;
}

.footer-info {
  flex: 1 1 300px;
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: center;
}

.footer-links {
  display: flex;
    gap: 1.5rem;
    flex-direction: column-reverse;
    align-items: flex-end;
}

.footer-links a {
  color: inherit;
  text-decoration: none;
  font-size: 0.9rem;
  transition: opacity 0.3s ease;
}

.footer-links a:hover {
  opacity: 0.6;
}


/* ===== Responsive Grid ===== */
@media (max-width: 992px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .text-wrapper-paula { top: 10%; left: 5%; }
  .img-paula { max-width: 180px; }
  .grid-container {
    grid-template-columns: 1fr;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }

  .footer-links {
    justify-content: center;
  }
}

tienda.js: 
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
