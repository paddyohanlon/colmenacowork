document.addEventListener("DOMContentLoaded", () => {
  const menuToggleEl = document.getElementById("navbar-burger");
  const menuMenuEl = document.getElementById("main-menu");
  console.log("menuToggleEl.ariaExpanded", menuToggleEl.ariaExpanded);

  menuToggleEl.addEventListener("click", () => {
    console.log("toggle!");

    if (menuToggleEl.ariaExpanded === "false") {
      menuToggleEl.ariaExpanded = "true";
    } else {
      menuToggleEl.ariaExpanded = "false";
    }

    menuToggleEl.classList.toggle("is-active");

    menuMenuEl.classList.toggle("is-invisible-mobile");
  });
});
