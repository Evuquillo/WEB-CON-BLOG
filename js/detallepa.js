document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     GSAP + SCROLLTRIGGER (SEGURO)
  =============================== */
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ===============================
     DARK / LIGHT MODE
  =============================== */
  const toggle = document.getElementById("theme-toggle");
  const sun = document.getElementById("icon-sun");
  const moon = document.getElementById("icon-moon");
  const footerLogo = document.getElementById("footer-logo-img");

  document.body.classList.add("light-mode");

  function updateLogos() {
    const isDark = document.body.classList.contains("dark-mode");

    if (footerLogo) {
      footerLogo.src = isDark
        ? "logos/archif-logo_blanco.png"
        : "logos/archif-logo_negro.png";
    }

    if (sun && moon) {
      sun.classList.toggle("hidden", isDark);
      moon.classList.toggle("hidden", !isDark);
    }
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      document.body.classList.toggle("light-mode");
      updateLogos();
    });
  }

  /* ===============================
     ZOOM IMAGEN (MOUSE TRACK)
  =============================== */
  const zoomContainer = document.querySelector(".zoom-container");
  const zoomImage = document.querySelector(".zoom-image");

  if (zoomContainer && zoomImage) {
    zoomContainer.addEventListener("mousemove", (e) => {
      const rect = zoomContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      zoomImage.style.transformOrigin = `${x}% ${y}%`;
      zoomImage.style.transform = "scale(2)";
    });

    zoomContainer.addEventListener("mouseleave", () => {
      zoomImage.style.transform = "scale(1)";
    });
  }

  /* ===============================
     DESPLEGABLE ARCHIVOS
  =============================== */
  const archiveHeaders = document.querySelectorAll(".archive-header");

  archiveHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;

      document.querySelectorAll(".archive-item").forEach(i => {
        if (i !== item) i.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });

  /* ===============================
     SCRAMBLE TEXT
  =============================== */
  function scrambleText(el, finalText) {
    el.innerHTML = "";
    const letters = [];

    for (let i = 0; i < finalText.length; i++) {
      const span = document.createElement("span");

      if (finalText[i] === " ") {
        span.innerHTML = "&nbsp;";
        el.appendChild(span);
        letters.push(null);
        continue;
      }

      span.textContent = finalText[i];
      span.style.opacity = 0;
      el.appendChild(span);
      letters.push(span);
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let iterations = 0;

    const interval = setInterval(() => {
      letters.forEach((span, i) => {
        if (!span) return;

        if (i < iterations) {
          span.textContent = finalText[i];
          span.style.opacity = 1;
        } else {
          span.textContent = chars[Math.floor(Math.random() * chars.length)];
          span.style.opacity = 1;
        }
      });

      iterations++;
      if (iterations > letters.length) clearInterval(interval);
    }, 30);
  }

  /* ===============================
     ACTIVAR SCRAMBLE SOLO SI EXISTE
  =============================== */
  const lines = document.querySelectorAll(".text-can");
  const triggerSection = document.querySelector("#seccion-dos");

  if (
    typeof ScrollTrigger !== "undefined" &&
    triggerSection &&
    lines.length
  ) {
    ScrollTrigger.create({
      trigger: triggerSection,
      start: "top 80%",
      once: true,
      onEnter: () => {
        lines.forEach(el => {
          const text = el.getAttribute("data-text");
          if (text) scrambleText(el, text);
        });
      }
    });
  }

  /* ===============================
     REDIRECCIÓN JULES CHERET
  =============================== */
  const pieceRows = document.querySelectorAll(".piece-row");

  pieceRows.forEach(row => {
    const title = row.querySelector(".piece-title");
    if (title && title.textContent.includes("Jules")) {
      row.style.cursor = "pointer";
      row.addEventListener("click", () => {
        window.location.href = "detallepa.html";
      });
    }
  });

});
