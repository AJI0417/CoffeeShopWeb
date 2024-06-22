const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbarIcon = document.getElementById("icon");
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbarIcon.classList.toggle("fa-xmark");
  navbarIcon.classList.toggle("chColor");
});
