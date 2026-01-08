document.addEventListener("DOMContentLoaded", () => {
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

  /* =============================
     FILTRO POR CONTINENTES
  ============================= */
  const filterButtons = document.querySelectorAll(".filters button");
  const cards = document.querySelectorAll(".card");
  const grid = document.querySelector(".grid");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      cards.forEach(card => card.classList.remove("active"));

      if (filter === "all") {
        grid.classList.remove("filtered");
        return;
      }

      grid.classList.add("filtered");
      cards.forEach(card => {
        if (card.classList.contains(filter)) {
          card.classList.add("active");
        }
      });
    });
  });

  /* =============================
     REDIRECCIÓN AL HACER CLICK EN FRANCIA
  ============================= */
  cards.forEach(card => {
    // Aquí asumimos que la card tiene un texto con el país
    if (card.textContent.toLowerCase().includes("francia")) {
      card.addEventListener("click", () => {
        window.location.href = "selectpa.html";
      });
    }
  });
});
