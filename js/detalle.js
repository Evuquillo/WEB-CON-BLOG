// === DARK / LIGHT MODE ===
const toggle = document.getElementById("theme-toggle");
const sun = document.getElementById("icon-sun");
const moon = document.getElementById("icon-moon");
const footerLogo = document.getElementById("footer-logo-img");

toggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode", !isDark);
  sun.classList.toggle("hidden", isDark);
  moon.classList.toggle("hidden", !isDark);
  footerLogo.src = isDark
    ? "logos/archif-logo_blanco.png"
    : "logos/archif-logo_negro.png";
});

// === ZOOM ===
const zoomContainer = document.querySelector(".zoom-container");
const zoomImage = document.querySelector(".zoom-image");
if (zoomContainer && zoomImage) {
  zoomContainer.addEventListener("mousemove", (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    zoomImage.style.transformOrigin = `${x}% ${y}%`;
    zoomImage.style.transform = "scale(2)";
  });
  zoomContainer.addEventListener("mouseleave", () => {
    zoomImage.style.transform = "scale(1)";
  });
}

// === CARGAR DETALLES DINÁMICOS ===
const piezas = {
  "01": { titulo: "Greg Gorman, Divine 2", img: "imgs/grid 12.png", descripcion: "Impresión pigmentada de archivo sobre platina Legacy. ¡Firmado!", autor: "Greg Gorman", tecnica: "Fotografía", anio: "1984" },
  "02": { titulo: "Poster WWII: Handen Weg!", img: "imgs/grid 2.png", descripcion: "Póster de propaganda original de la Segunda Guerra Mundial.", autor: "Desconocido", tecnica: "Impresión offset", anio: "1943" },
  "03": { titulo: "Coronación Isabel II - 1953", img: "imgs/grid 3.png", descripcion: "Número especial de Illustrated Magazine conmemorando la coronación.", autor: "Illustrated Magazine", tecnica: "Impresión en papel", anio: "1953" },
  "04": { titulo: "Hogarth Aguafuerte 1808", img: "imgs/grid 4.png", descripcion: "Grabado de William Hogarth publicado en 1808 con recortes de prensa.", autor: "William Hogarth", tecnica: "Aguafuerte", anio: "1808" },
  "05": { titulo: "Retrato Frida Kahlo 1945", img: "imgs/grid 5.png", descripcion: "Retrato original de Adolfo Best Maugard, María Luisa Cabrera de Block y Frida Kahlo.", autor: "Adolfo Best Maugard", tecnica: "Fotografía analógica", anio: "1945" },
  "06": { titulo: "Batman Cartel Egipcio", img: "imgs/grid 10.png", descripcion: "Cartel original de cine egipcio de Batman (1989).", autor: "Desconocido", tecnica: "Litografía", anio: "1989" },
  "07": { titulo: "Il Principe della Notte", img: "imgs/grid 7.png", descripcion: "Cartel de cine italiano de la película de terror vudú.", autor: "Studio Cini", tecnica: "Serigrafía", anio: "1965" },
  "08": { titulo: "Catedral de Saint-Gatien 1851", img: "imgs/grid 8.png", descripcion: "Fotografía en papel encerado de la catedral de Saint-Gatien, Tours.", autor: "Gustave Le Gray & Auguste Mestral", tecnica: "Negativo en papel", anio: "1851" },
  "09": { titulo: "Cartel esquí La Molina 1942", img: "imgs/grid 9.png", descripcion: "Raro póster original de campeonatos de esquí de La Molina (España).", autor: "Desconocido", tecnica: "Litografía", anio: "1942" },
  "10": { titulo: "Boombox Dorothy Studio", img: "imgs/grid 6.png", descripcion: "Inside Information: Boombox, diseño contemporáneo.", autor: "Dorothy Studio", tecnica: "Diseño digital", anio: "2010" },
  "11": { titulo: "Tintín y las Naranjas Azules", img: "imgs/grid 11.png", descripcion: "Póster original vintage de Tintín.", autor: "Hergé", tecnica: "Litografía", anio: "1964" },
  "12": { titulo: "Cartel Fiestas Sevilla 1930", img: "imgs/grid 1.png", descripcion: "Cartel de ferias y fiestas de Sevilla.", autor: "Josep Renau", tecnica: "Impresión tipográfica", anio: "1930–31" }
};

// === CARGAR DATOS DEL ID ===
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const pieza = piezas[id];
if (pieza) {
  document.getElementById("detalle-titulo").textContent = pieza.titulo;
  document.getElementById("detalle-img").src = pieza.img;
  document.getElementById("detalle-descripcion").textContent = pieza.descripcion;
  document.getElementById("detalle-autor").textContent = pieza.autor;
  document.getElementById("detalle-tecnica").textContent = pieza.tecnica;
  document.getElementById("detalle-anio").textContent = pieza.anio;
}

// === MODALES ===
const modalOfertaEl = document.getElementById("modalOferta");
const modalCompraEl = document.getElementById("modalCompra");
const modalOferta = modalOfertaEl ? new bootstrap.Modal(modalOfertaEl) : null;
const modalCompra = modalCompraEl ? new bootstrap.Modal(modalCompraEl) : null;

const btnOferta = document.getElementById("btn-oferta");
const btnCompra = document.getElementById("btn-comprar");

if (btnOferta && modalOferta) {
  btnOferta.addEventListener("click", () => modalOferta.show());
}
if (btnCompra && modalCompra) {
  btnCompra.addEventListener("click", () => modalCompra.show());
}

// === OFERTAS ===
const precioBase = 1050;
const ofertaActual = document.getElementById("oferta-actual");
if (ofertaActual) ofertaActual.textContent = `${precioBase} €`;

const confirmarBtn = document.getElementById("confirmarOferta");
if (confirmarBtn) {
  confirmarBtn.addEventListener("click", () => {
    const cantidad = parseFloat(document.getElementById("ofertaCantidad").value);
    const error = document.getElementById("ofertaError");

    if (isNaN(cantidad) || cantidad <= 900) {
      error.classList.remove("d-none");
      return;
    }

    error.classList.add("d-none");
    ofertaActual.textContent = `${cantidad.toFixed(2)} €`;
    ofertaActual.style.color = "#ff5500ff";

    if (modalOferta) modalOferta.hide();
  });
}

// === CRONÓMETRO DE CUENTA ATRÁS ===
const countdownEl = document.getElementById("countdown");
if (countdownEl) {
  const endDate = new Date("2026-02-25T23:59:59").getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = endDate - now;

    if (diff <= 0) {
      countdownEl.textContent = "¡Subasta finalizada!";
      countdownEl.style.color = "#ff5500ff";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  updateCountdown(); // inicial
  const timer = setInterval(updateCountdown, 1000);
}
/* =====================================================
   CUSTOM CURSOR (desktop only)
===================================================== */
(function initCustomCursor() {
  // Solo desktop con ratón
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!isFinePointer) return;

  // Evita duplicados si el script se carga dos veces
  if (window.__customCursorInit) return;
  window.__customCursorInit = true;

  // Si ya existe en HTML, lo usa. Si no, lo crea.
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

  // Hover sobre links y botones
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, .btn, input, textarea, select")) {
      inner.classList.add("link-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("a, button, .btn, input, textarea, select")) {
      inner.classList.remove("link-hover");
    }
  });
})();

