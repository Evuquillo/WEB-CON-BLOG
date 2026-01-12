document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

  const imgs = document.querySelectorAll(".img-paula");
  const imgContainer = document.querySelector(".image-container-paula");

  if (imgContainer) {
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
  }

  (function initCustomCursor() {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;
    if (window.__customCursorInit) return;
    window.__customCursorInit = true;

    let cursor = document.getElementById("custom-cursor");
    if (!cursor) {
      cursor = document.createElement("div");
      cursor.id = "custom-cursor";
      cursor.innerHTML = `<div class="cursor-inner"></div>`;
      document.body.appendChild(cursor);
    }

    const inner = cursor.querySelector(".cursor-inner");
    if (!inner) return;

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

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

  const toggle = document.getElementById("theme-toggle");
  const footerLogo = document.getElementById("footer-logo-img");
  const sunIcon = '<i class="fa-solid fa-sun" style="color:#000000;"></i>';
  const moonIcon = '<i class="fa-solid fa-moon" style="color:#000000;"></i>';

  document.body.classList.add("light-mode");
  if (toggle) toggle.innerHTML = moonIcon;

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      document.body.classList.toggle("light-mode", !isDark);
      toggle.innerHTML = isDark ? sunIcon : moonIcon;

      if (footerLogo) {
        footerLogo.src = isDark ? "logos/archif-logo_blanco.png" : "logos/archif-logo_negro.png";
      }
    });
  }

  const STORAGE_KEY = "archif_registered_email";

const getRegisteredEmail = () => {
  try { return localStorage.getItem(STORAGE_KEY) || ""; } catch { return ""; }
};
const setRegisteredEmail = (email) => {
  try { localStorage.setItem(STORAGE_KEY, email); } catch {}
};
const clearRegisteredEmail = () => {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
};

const userRegisterBtn = document.getElementById("user-register-btn");
const userMenuWrapper = document.getElementById("user-menu-wrapper");
const userBorrar = document.getElementById("user-borrar");

const registroEmail = document.getElementById("registroEmail");
const registroError = document.getElementById("registroError");
const btnRegistro = document.getElementById("btnRegistro");
const modalRegistroEl = document.getElementById("modalRegistro");
const modalRegistro = modalRegistroEl ? bootstrap.Modal.getOrCreateInstance(modalRegistroEl) : null;

const modalAvisoEl = document.getElementById("modalAvisoRegistro");
const btnContinuarRegistro = document.getElementById("btnContinuarRegistro");

let modalAviso = null;

function isRegistered() {
  return !!getRegisteredEmail();
}

function syncUserUI() {
  const reg = isRegistered();
  if (userRegisterBtn) userRegisterBtn.classList.toggle("d-none", reg);
  if (userMenuWrapper) userMenuWrapper.classList.toggle("d-none", !reg);
}

syncUserUI();

if (modalAvisoEl && !isRegistered()) {
  modalAviso = bootstrap.Modal.getOrCreateInstance(modalAvisoEl, {
    backdrop: "static",
    keyboard: false
  });
  modalAviso.show();

  if (btnContinuarRegistro) {
    btnContinuarRegistro.addEventListener("click", () => {
      modalAvisoEl.addEventListener("hidden.bs.modal", () => {
        modalRegistro?.show();
      }, { once: true });

      modalAviso.hide();
    });
  }
}

if (modalRegistroEl) {
  modalRegistroEl.addEventListener("hidden.bs.modal", () => {
    document.querySelectorAll(".modal-backdrop").forEach((b) => b.remove());
    document.body.classList.remove("modal-open");
    document.body.style.removeProperty("padding-right");
    document.body.style.removeProperty("overflow");

    if (btnRegistro) {
      btnRegistro.textContent = "Registrarme";
      btnRegistro.disabled = false;
    }
    if (registroEmail) registroEmail.value = "";
    if (registroError) registroError.classList.add("d-none");
  });
}

if (btnRegistro && registroEmail) {
  btnRegistro.addEventListener("click", () => {
    const email = (registroEmail.value || "").trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      if (registroError) registroError.classList.remove("d-none");
      return;
    }

    if (registroError) registroError.classList.add("d-none");

    setRegisteredEmail(email);
    syncUserUI();

    btnRegistro.textContent = "¡Listo! Revisa tu correo";
    btnRegistro.disabled = true;

    setTimeout(() => {
      modalRegistro?.hide();
      modalAviso?.hide();
    }, 700);
  });
}

if (userBorrar) {
  userBorrar.addEventListener("click", () => {
    clearRegisteredEmail();
    syncUserUI();
    location.reload();
  });
}
// scroll to top //

  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 0.5) scrollBtn.classList.add("visible");
      else scrollBtn.classList.remove("visible");
    });

    scrollBtn.addEventListener("click", () => {
      gsap.to(window, { duration: 1, scrollTo: 0, ease: "power2.out" });
    });
  }

  const searchInput = $(".header__search input");
  const searchClose = $(".search-close");
  const searchOverlay = $(".search-overlay");
  const searchItems = $(".search-item");
  const hoverGallery = $(".hover-gallery");
  const hoverImages = hoverGallery.find("img");

  const galleryImages = {
    home: ["media/img/grid 1.png"],
    subastas: ["media/img/grid 2.png"],
    archivos: ["media/img/grid 3.png"],
    blog: ["media/img/grid 4.png"],
  };

  $(".header__search").on("click", function (e) {
    e.stopPropagation();
    $("body").addClass("search-open");
    searchInput.focus();
  });

  searchClose.add(searchOverlay).on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("body").removeClass("search-open");
    searchInput.blur();
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      $("body").removeClass("search-open");
      searchInput.blur();
    }
  });

  searchItems.on("mouseenter", function () {
    const key = $(this).find("p").text().toLowerCase();
    const imgs = galleryImages[key];
    if (!imgs) return;

    hoverImages.each(function (i) {
      $(this).attr("src", imgs[i] || "");
    });

    hoverGallery.addClass("is-visible");
  });

  $(".search-content").on("mouseleave", function () {
    hoverGallery.removeClass("is-visible");
  });

  searchItems.find("a").on("click", function (e) {
    $("body").removeClass("search-open");
    searchInput.blur();
    e.stopPropagation();
  });
});
