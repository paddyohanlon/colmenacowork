document.addEventListener("DOMContentLoaded", () => {
  const menuToggleEl = document.getElementById("navbar-burger");
  const menuMenuEl = document.getElementById("main-menu");

  menuToggleEl.addEventListener("click", () => {
    if (menuToggleEl.ariaExpanded === "false") {
      menuToggleEl.ariaExpanded = "true";
    } else {
      menuToggleEl.ariaExpanded = "false";
    }

    menuToggleEl.classList.toggle("is-active");
    menuMenuEl.classList.toggle("is-invisible-mobile");
  });
});
