window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("mainNav");

  function shrinkNavbar() {
    if (!navbar) return;
    if (window.scrollY === 0) {
      navbar.classList.remove("navbar-shrink");
    } else {
      navbar.classList.add("navbar-shrink");
    }
  }

  shrinkNavbar();
  document.addEventListener("scroll", shrinkNavbar);

  const navLinks = document.querySelectorAll("#navbarResponsive .nav-link");
  const navbarToggler = document.querySelector(".navbar-toggler");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const navMenu = document.getElementById("navbarResponsive");
      if (
        window.getComputedStyle(navbarToggler).display !== "none" &&
        navMenu.classList.contains("show")
      ) {
        navbarToggler.click();
      }
    });
  });
});
