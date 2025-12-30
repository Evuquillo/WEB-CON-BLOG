document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     MODO OSCURO / CLARO
  ============================= */

  const toggle = document.getElementById("theme-toggle");
  const sun = document.getElementById("icon-sun");
  const moon = document.getElementById("icon-moon");
  const footerLogo = document.getElementById("footer-logo-img");

  document.body.classList.add("light-mode");

  function updateFooterLogo() {
    footerLogo.src = document.body.classList.contains("dark-mode")
      ? "logos/archif-logo_blanco.png"
      : "logos/archif-logo_negro.png";
  }

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode", !isDark);

    sun.classList.toggle("hidden", isDark);
    moon.classList.toggle("hidden", !isDark);

    updateFooterLogo();
  });

  updateFooterLogo();


  /* =============================
     FILTRO POR CONTINENTES
     (OPACIDAD – NO OCULTAR)
  ============================= */

  const filterButtons = document.querySelectorAll(".filters button");
  const cards = document.querySelectorAll(".card");
  const grid = document.querySelector(".grid");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      // Estado activo del botón
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Reset cards
      cards.forEach(card => {
        card.classList.remove("active");
      });

      // Mostrar todo
      if (filter === "all") {
        grid.classList.remove("filtered");
        return;
      }

      // Activar modo filtrado
      grid.classList.add("filtered");

      // Activar solo las cards del continente
      cards.forEach(card => {
        if (card.classList.contains(filter)) {
          card.classList.add("active");
        }
      });
    });
  });

});
