var menuBtn = document.querySelector(".menu-btn");
var header = document.querySelector(".show");
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  header.classList.toggle("show");
}
