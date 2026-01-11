html:
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
  <link rel="stylesheet" href="css/tienda.css" />

  <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="favicon/favicon.svg" />
<link rel="shortcut icon" href="favicon/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="Archif." />
<link rel="manifest" href="favicon/web-app-manifest-192x192.png" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">


</head>

<!-- HEADER -->
<header class="header">
  <div class="header__logo">
    <a href="index.html"><img src="media/img/archif-logo-03.png" class="logo-registered"></a>
  </div>

  <div class="header__search">
    <span class="search-prefix">/</span>
    <input type="text" placeholder="Buscar...">
    <span class="search-close">✕</span>
    <span class="search-icon">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.5"/>
    <line x1="16.65" y1="16.65" x2="22" y2="22"
          stroke="currentColor" stroke-width="1.5"/>
  </svg>
</span>

  </div>

  <!-- <div class="header__icon">☰</div> -->
</header>

<!-- OVERLAY -->
<div class="search-overlay"> 

  <div class="search-content">
    <div class="search-item">
     <span>01</span> <a href="index.html"><p>HOME</p></a>
    </div>

    <div class="search-item">
      <span>02</span><a href="subasta.html"><p>SUBASTAS</p></a> 
    </div>

    <div class="search-item">
      <span>03</span><a href="paises.html"><p>ARCHIVOS</p></a>
    </div>

     <div class="search-item">
      <span>04</span><a href="https://archifblog.cargo.site/"><p>BLOG</p></a>
    </div>
  </div>

 <div class="hover-gallery">
  <div class="hover-img-wrapper">
    <img src="" alt="">
  </div>
  <div class="hover-img-wrapper">
    <img src="" alt="">
  </div>
</div>
</div>
</div>



<body>
  <div id="custom-cursor">
  <div class="cursor-inner"></div>
</div>
  <!-- ===== BOTÓN DARK/LIGHT MODE ===== -->
<button id="theme-toggle" class="theme-toggle" aria-label="Cambiar tema">
  <i class="fa-solid fa-moon" style="color:#000000;"></i>
</button>

<!-- ===== SECCIÓN PRINCIPAL ===== -->
<section id="inicio" class="section-paula container-fluid p-0">
  <div class="container text-section-paula">
    <div class="text-wrapper-paula">
      <h1 class="text-paula">[Subasta]</h1>
      <h1 class="text-paula">de_</h1>
      <h1 class="text-paula">piezas</h1>
      <h1 class="text-paula">[únicas]</h1>
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

    <a href="detalle.html?id=01" class="grid-item" data-index="01">
      <img src="imgs/grid 12.png" alt="Greg Gorman, Divine 2">
      <div class="info-card">
        Greg Gorman, Divine 2, Impresión pigmentada de archivo sobre platina Legacy <br>
        ¡Firmado! <br>
        Año: 1984
      </div>
    </a>

    <a href="detalle.html?id=02" class="grid-item" data-index="02">
      <img src="imgs/grid 2.png" alt="Poster WWII: Handen Weg!">
      <div class="info-card">
        ¡Original Vintage WWII Poster Handen Weg! Europa Manos Fuera de Europa Guerra Países Bajos. <br>
        Año: 1943
      </div>
    </a>

    <a href="detalle.html?id=03" class="grid-item" data-index="03">
      <img src="imgs/grid 3.png" alt="Coronación Isabel II - 1953">
      <div class="info-card">
        Número especial de Illustrated publicado para conmemorar la coronación de Isabel II en 1953. <br>
        Autor: Illustrated Magazine <br>
        Año: 1953
      </div>
    </a>

    <a href="detalle.html?id=04" class="grid-item" data-index="04">
      <img src="imgs/grid 4.png" alt="Hogarth Aguafuerte 1808">
      <div class="info-card">
        Aguafuerte de William Hogarth, grabado por J. Mills y publicado en 1808, con recortes de prensa contemporáneos. <br>
        Año: 1763–1866
      </div>
    </a>

    <a href="detalle.html?id=05" class="grid-item" data-index="05">
      <img src="imgs/grid 5.png" alt="Retrato Frida Kahlo 1945">
      <div class="info-card">
        Retrato original de Adolfo Best Maugard, María Luisa Cabrera de Block y Frida Kahlo. <br>
        Año: 1945
      </div>
    </a>

    <a href="detalle.html?id=06" class="grid-item" data-index="06">
      <img src="imgs/grid 10.png" alt="Batman Cartel Egipcio">
      <div class="info-card">
        Batman 1989 Cartel de cine egipcio original. <br>
        Año: 1989
      </div>
    </a>

    <a href="detalle.html?id=07" class="grid-item" data-index="07">
      <img src="imgs/grid 7.png" alt="Il Principe della Notte">
      <div class="info-card">
        Il Principe della Notte (La maldición del vudú) <br>
        Año: 1965
      </div>
    </a>

    <a href="detalle.html?id=08" class="grid-item" data-index="08">
      <img src="imgs/grid 8.png" alt="Catedral de Saint-Gatien 1851">
      <div class="info-card">
        Gustave Le Gray y Auguste Mestral, Fachada oeste de la Catedral de Saint-Gatien, Tours <br>
        Negativo en papel encerado <br>
        Año: 1851
      </div>
    </a>

    <a href="detalle.html?id=09" class="grid-item" data-index="09">
      <img src="imgs/grid 9.png" alt="Cartel esquí La Molina 1942">
      <div class="info-card">
        Raro Póster Original de Campeonatos de Esquí de La Molina España <br>
        Año: 1942
      </div>
    </a>

    <a href="detalle.html?id=10" class="grid-item" data-index="10">
      <img src="imgs/grid 6.png" alt="Boombox Dorothy Studio">
      <div class="info-card">
        Inside Information: Boombox <br>
        Author: Dorothy Studio.
      </div>
    </a>

    <a href="detalle.html?id=11" class="grid-item" data-index="11">
      <img src="imgs/grid 11.png" alt="Tintín Naranjas Azules">
      <div class="info-card">
        Póster Original Vintage Tintín y las Naranjas Azules Herge Cinema Film Art <br>
        Año: 1964
      </div>
    </a>

    <a href="detalle.html?id=12" class="grid-item" data-index="12">
      <img src="imgs/grid 1.png" alt="Cartel Fiestas Sevilla 1930">
      <div class="info-card">
        Cartel de ferias y fiestas de Sevilla <br>
        Autor: Josep Renau <br>
        Año: 1930–31
      </div>
    </a>

  </div>
</section>

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
<!-- jQuery (OBLIGATORIO para el menú) -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<!-- Bootstrap -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollTrigger.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollToPlugin.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/Draggable.min.js"></script>
  <script src="js/tienda.js"></script>
</body>
</html>

CSS: 

/* MENUUUUUUU */


.header {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  padding: 24px 40px;
  background: #fff;

  z-index: 1000;
}

a {
  text-decoration: none;
  color: inherit;
}


.header__logo {
  font-weight: 600;
  font-size: 20px;
  align-items: center; 
}

.header__logo span {
  font-size: 12px;
  vertical-align: super;
}

.header__logo .logo-registered {
  width: 30px; 
  height: auto; 
}


/* BUSCADOR */
.header__search {
  position: relative;
  max-width: 420px;
  margin: 0 auto;
  width: 400px;
  transition: transform 0.3s ease;
}
.search-prefix {
  position: absolute;
  left: 0;
  bottom: 8px;                 /* alinea con la línea */
  font-family: "Space Mono", monospace;
  font-size: 14px;
  color: #bbb;
  pointer-events: none;
}
.header__search input {
  width: 100%;
  padding: 8px 28px 8px 13px;
  border: none;
  border-bottom: 1px solid #000;
  border-radius: 0;
  background: transparent;
  font-size: 16px;
  outline: none;
  color: #000;
}

.header__search input::placeholder {
  color: #bbb;
}

.search-icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #bbb;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.header__icon {
  font-size: 20px;
  cursor: pointer;
}

/* OVERLAY GRIS */
.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #f0f0f0;
  padding-top: 96px; 
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;
  z-index: 10;
  inset: 0;
}

/* CONTENIDO */


.search-item {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 24px;
  cursor: pointer;
  position: relative;
}

.search-content span {
  font-size: 30x;
  color: #999;
  font-weight: 400;
  align-self: center;
}

.search-content p {
  font-size: 80px;
  font-weight: 400;
  margin: 0;
  line-height: 1.1;
  cursor: pointer;
  transition: opacity 0.25s ease;
  color: #CFCFCF;
}

.search-item:hover span,
.search-item:hover p {
  color: #000;
}

.search-open .search-overlay {
  opacity: 1;
  pointer-events: auto;
}

/* .search-open .header__search input {
  background: #fff;
} */

.search-open .header {
  background: #f0f0f0;
}

/* .search-open .header__search input {
  background: #fff;
} */

.search-open .search-icon,
.search-open .header__icon {
  color: #555;
}

/* Cruz para cerrar búsqueda */
.header__search::after {
  content: "✕";
  position: absolute;
  right: 38px; 
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #777;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
}

.search-open .header__search::after {
  opacity: 1;
  pointer-events: auto;
}

.search-close {
  position: absolute;
  right: 38px;
  top: 50%;
  transform: translateY(-50%);
  transform: translateY(-50%) scale(0.5); 
  font-size: 14px;
  color: #777;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  z-index: 5;
  transition: opacity 0.3s ease, transform 0.3s ease; 
}

.search-open .search-close {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(-50%) scale(1); 
}


.search-open .header__search {
  transform: translateX(-470px); 
  transition: transform 0.3s ease; 
}

.search-item::after {
  content: "/";
  position: absolute;
  left: 26px;          /* ajusta según tu diseño */
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  color: #000;

  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}
.search-item:hover::after {
  opacity: 1;
}

/* CONTENEDOR GENERAL */
.search-wrapper {
  display: grid;
  grid-template-columns: 420px 1fr;
  height: calc(100vh - 96px);
  padding: 40px 80px;
}

/* LISTA IZQUIERDA */
.search-content {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 24px;
  row-gap: 28px;
  padding: 40px;
  margin-top: 120px;
  margin-left: 80px;
  font-family: "Space Mono", monospace;

  display: grid;
  grid-template-columns: 1fr; /* 👈 UNA columna */
  row-gap: 28px;
}

.search-content p {
  font-size: 70px;
  font-weight: 400;
  margin: 0;
  line-height: 1.1;
  cursor: pointer;
  transition: opacity 0.25s ease;
  transition: color 0.25s ease, transform 0.25s ease;
}

.search-item:hover p {
  transform: translateX(12px); /* ajusta a gusto */
}

/* GALERÍA DERECHA */
.hover-gallery {
  position: absolute;
  top: 220px;
  right: 10px;
  width: 660px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  pointer-events: none;
  opacity: 0;
  transform: translateY(80px);
  transition:
    opacity 0.35s ease,
    transform 0.6s cubic-bezier(.19,1,.22,1);
  overflow: visible;
}

/* Contenedor oculto para efecto “mascara” */
.hover-img-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden; /* 👈 oculta la parte de la imagen que está fuera */
  position: relative;
}

.hover-img-wrapper img {
  width: 100%;
  transform: translateY(50px); /* empieza abajo */
  opacity: 0;
  transition:
    transform 0.6s cubic-bezier(.19,1,.22,1),
    opacity 0.35s ease 0.1s;
}

/* Estado visible de la galería */
.hover-gallery.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Cuando la galería es visible, animamos las imágenes */
.hover-gallery.is-visible .hover-img-wrapper img {
  transform: translateY(0); /* sube desde detrás */
  opacity: 1;
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
  height: 100vh;
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
  color: black;
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

/* Oculta el cursor nativo SOLO en desktop */
@media (hover: hover) and (pointer: fine) {
  body {
    cursor: none;
  }
  a, button, input, textarea, select {
    cursor: none;
  }
}

/* wrapper fijo del cursor */
#custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 2147483647;
}

/* bola del cursor */
#custom-cursor .cursor-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;

  background: var(--cursor-color);

  border-radius: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.3s ease-in-out;
  pointer-events: none;


  mix-blend-mode: difference !important;

  /* opcional */
  unicode-bidi: isolate;
}

#custom-cursor .cursor-inner.link-hover {
  transform: translate(-50%, -50%) scale(2);
}


body.light-mode { --cursor-color: #000000; }
body.dark-mode  { --cursor-color: #ffffff; }


@media (hover: none), (pointer: coarse) {
  #custom-cursor { display: none; }
  body { cursor: auto; }
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

JS:
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);


  /* =====================================================
     IMÁGENES DISPERSAS + DRAG
  ===================================================== */
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

  (function initCustomCursor() {
  // Solo desktop con ratón
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!isFinePointer) return;

  // Si ya está iniciado, no duplicar
  if (window.__customCursorInit) return;
  window.__customCursorInit = true;

  // Asegura que exista el HTML
  let cursor = document.getElementById("custom-cursor");
  if (!cursor) {
    cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.innerHTML = `<div class="cursor-inner"></div>`;
    document.body.appendChild(cursor);
  }

  const inner = cursor.querySelector(".cursor-inner");
  if (!inner) return;

  // Mover cursor
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // Crecer sobre links, botones y elementos “clicables”
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, .button-4, input, textarea, select, .grid-item")) {
      inner.classList.add("link-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("a, button, .button-4, input, textarea, select, .grid-item")) {
      inner.classList.remove("link-hover");
    }
  });
})();

  /* =====================================================
     TEXT SCRAMBLE
  ===================================================== */
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
      const finalText = el.textContent.trim();
      gsap.delayedCall(delay, () => scrambleText(el, finalText));
      delay += 0.6;
    });

    gsap.delayedCall(5, loopScramble);
  }

  setTimeout(loopScramble, 500);

  /* =====================================================
     GRID ANIMATIONS
  ===================================================== */
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

  /* =====================================================
     MODO OSCURO / CLARO
  ===================================================== */
  const toggle = document.getElementById("theme-toggle");
  const sunIcon  = '<i class="fa-solid fa-sun" style="color:#000000;"></i>'; 
const moonIcon = '<i class="fa-solid fa-moon" style="color:#000000;"></i>'; 
  const footerLogo = document.getElementById("footer-logo-img");

  document.body.classList.add("light-mode");
  if (toggle) toggle.innerHTML = moonIcon;

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode", !isDark);

    toggle.innerHTML = isDark ? sunIcon : moonIcon;

    if (footerLogo) {
      footerLogo.src = isDark
        ? "logos/archif-logo_blanco.png"
        : "logos/archif-logo_negro.png";
    }
  });

  /* =====================================================
     SCROLL TO TOP
  ===================================================== */
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

  /* =====================================================
     BUSCADOR + OVERLAY + GALERÍAS HOVER
  ===================================================== */
  const searchInput = $('.header__search input');
  const searchClose = $('.search-close');
  const searchOverlay = $('.search-overlay');
  const searchItems = $('.search-item');
  const hoverGallery = $('.hover-gallery');
  const hoverImages = hoverGallery.find('img');

  const galleryImages = {
    home: ['media/img/grid 1.png'],
    subastas: ['media/img/grid 2.png'],
    archivos: ['media/img/grid 3.png'],
    blog: ['media/img/grid 4.png']
  };

  // Abrir buscador
  $('.header__search').on('click', function (e) {
    e.stopPropagation();
    $('body').addClass('search-open');
    searchInput.focus();
  });

  // Cerrar buscador
  searchClose.add(searchOverlay).on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('body').removeClass('search-open');
    searchInput.blur();
  });

  // Cerrar con ESC
  $(document).on('keydown', function (e) {
    if (e.key === "Escape") {
      $('body').removeClass('search-open');
      searchInput.blur();
    }
  });

  // Hover para galería
  searchItems.on('mouseenter', function () {
    const key = $(this).find('p').text().toLowerCase();
    const imgs = galleryImages[key];
    if (!imgs) return;

    hoverImages.each(function (i) {
      $(this).attr('src', imgs[i] || '');
    });

    hoverGallery.addClass('is-visible');
  });

  $('.search-content').on('mouseleave', function () {
    hoverGallery.removeClass('is-visible');
  });

  // Click en links dentro del overlay -> CORRECCIÓN
  searchItems.find('a').on('click', function (e) {
    $('body').removeClass('search-open');
    searchInput.blur();
    e.stopPropagation(); // 🔑 evita que el overlay bloquee el enlace
    // el href del <a> funciona normalmente
  });

});
