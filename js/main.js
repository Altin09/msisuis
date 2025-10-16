(() => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");

  if (!navToggle || !navLinks) return;

  const closeMenu = () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.tagName === "A") {
      closeMenu();
    }
  });

  window.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
})();
