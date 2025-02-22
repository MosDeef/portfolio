import { startTextAnimation } from "./textAnimation.js";
import { handleNavbar } from "./navbar.js";
import { applyAnnotations } from "./annotations.js";

document.addEventListener("DOMContentLoaded", function () {
  startTextAnimation();
  handleNavbar();
  applyAnnotations();
});
