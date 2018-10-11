// // FIXED NAVBAR //
// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {
//   myFunction();
// };
// // Get the header
// var nav = document.querySelector("nav");
// // Get the offset position of the navbar
// var sticky = nav.offsetTop;
// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     nav.classList.add("sticky-nav");
//   } else {
//     nav.classList.remove("sticky-nav");
//   }
// }

// Navbar toggle in mobile display //

// var menuBtn = document.querySelector(".menu-btn");
// var header = document.querySelector("header");
// menuBtn.addEventListener("click", toggleMenu);

// function toggleMenu() {
//   header.classList.toggle("show");
// }

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
