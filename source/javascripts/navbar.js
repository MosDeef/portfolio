export function handleNavbar() {
  document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar-lewagon");

    const hoverZone = document.createElement("div");
    hoverZone.classList.add("hover-zone");
    document.body.appendChild(hoverZone);

    window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 50) {
        navbar.classList.add("hidden-navbar");
      } else {
        navbar.classList.remove("hidden-navbar");
      }
      lastScrollTop = scrollTop;
    });

    function showNavbar() {
      navbar.classList.remove("hidden-navbar");
    }

    function hideNavbar() {
      navbar.classList.add("hidden-navbar");
    }

    hoverZone.addEventListener("mouseenter", showNavbar);
    navbar.addEventListener("mouseenter", showNavbar);
    hoverZone.addEventListener("mouseleave", hideNavbar);
    navbar.addEventListener("mouseleave", hideNavbar);
  });
}
