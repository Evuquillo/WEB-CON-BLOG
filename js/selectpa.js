document.addEventListener("DOMContentLoaded", () => {
  // ===== GSAP ScrollTrigger =====
  gsap.registerPlugin(ScrollTrigger);

  // ===== MODO OSCURO / CLARO =====
  const toggle = document.getElementById("theme-toggle");
  const sun = document.getElementById("icon-sun");
  const moon = document.getElementById("icon-moon");
  const footerLogo = document.getElementById("footer-logo-img");

  document.body.classList.add("light-mode");

  function updateLogos() {
    const isDark = document.body.classList.contains("dark-mode");
    footerLogo.src = isDark
      ? "logos/archif-logo_blanco.png"
      : "logos/archif-logo_negro.png";

    sun.classList.toggle("hidden", isDark);
    moon.classList.toggle("hidden", !isDark);
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      document.body.classList.toggle("light-mode");
      updateLogos();
    });
  }
  // ===== DESPLEGABLE ARCHIVOS =====
const archiveHeaders = document.querySelectorAll(".archive-header");

archiveHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    // cerrar otros
    document.querySelectorAll(".archive-item").forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    // toggle actual
    item.classList.toggle("active");
  });
});

  // ===== FUNCION SCRAMBLE =====
  function scrambleText(el, finalText, onComplete) {
    el.innerHTML = "";
    const letters = [];
    let bold = false;
    let italic = false;

    for (let i = 0; i < finalText.length; i++) {
      const char = finalText[i];
      if (char === "*") { bold = !bold; continue; }
      if (char === "_") { italic = !italic; continue; }

      const span = document.createElement("span");
      if (char === " ") {
        span.innerHTML = "&nbsp;";
        span.style.opacity = 1;
        el.appendChild(span);
        letters.push(null);
        continue;
      }

      span.textContent = char;
      span.style.opacity = 0;
      if (bold) span.classList.add("bold");
      if (italic) span.classList.add("italic");

      el.appendChild(span);
      letters.push(span);
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    const cleanText = finalText.replace(/\*|_/g, "");
    let iterations = 0;

    const interval = setInterval(() => {
      const revealCount = Math.floor(iterations / 2);
      letters.forEach((span, i) => {
        if (!span) return;
        if (i < revealCount) {
          span.textContent = cleanText[i];
          span.style.opacity = 1;
        } else {
          span.textContent = chars[Math.floor(Math.random() * chars.length)];
          span.style.opacity = 1;
        }
      });
      iterations++;
      if (revealCount >= letters.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 30);
  }
  
  // ===== ACTIVAR SCRAMBLE CUANDO SE HAGA SCROLL =====
  const lines = document.querySelectorAll(".text-can");
  ScrollTrigger.create({
    trigger: "#seccion-dos",
    start: "top 80%",
    once: true,
    onEnter: () => {
      lines.forEach(el => {
        const text = el.getAttribute("data-text");
        scrambleText(el, text);
      });
    }
  });

});
