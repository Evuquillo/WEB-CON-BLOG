$(document).ready(function () {
    const toggle = document.getElementById("theme-toggle");
    const sunIcon = '<i class="fa-solid fa-sun" style="color:#ffffff;"></i>';
    const moonIcon = '<i class="fa-solid fa-moon" style="color:#000000;"></i>';
    
    // LOS 3 LOGOS QUE DEBEN CAMBIAR:
    const heroLogo = document.getElementById("hero-logo-img");     // Logo grande principal
    const footerLogo = document.getElementById("footer-logo-img"); // Logo del footer
    const headerLogo = document.querySelector(".logo-registered"); // Logo del header

    // Estado inicial: Light Mode
    document.body.classList.add("light-mode");
    if (toggle) toggle.innerHTML = moonIcon;

    toggle?.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode", !isDark);

        toggle.innerHTML = isDark ? sunIcon : moonIcon;

        // Cambiar TODOS los logos:
        
        // 1. Logo HERO (el grande principal)
        if (heroLogo) {
            heroLogo.src = isDark
                ? "logos/archif-logo_blanco.png"
                : "logos/archif-logo_negro.png";
        }

        // 2. Logo FOOTER
        if (footerLogo) {
            footerLogo.src = isDark
                ? "logos/archif-logo_blanco.png"
                : "logos/archif-logo_negro.png";
        }

        // 3. Logo HEADER
        if (headerLogo) {
            headerLogo.src = isDark
                ? "logos/isotipo_blanco.png"
                : "media/img/archif-logo-03.png";
        }
    });
})