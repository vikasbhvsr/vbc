// FIXED NAVBAR //
// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
  myFunction()
};
// Get the header
var navbar = document.querySelector(".navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Navbar toggle in mobile display //

var menuBtn = document.querySelector(".menu-btn");
var header = document.querySelector("header");
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  header.classList.toggle("show");
}