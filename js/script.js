// Toggle Js
const header = document.getElementById("header");
const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar");

// document.onclick = function(e) {
//     if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
//         navbar.classList.remove('active');
//         toggle.classList.remove('active');
//     }
// }

toggle.onclick = function () {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
};

let slides = document.querySelectorAll(".slide-contaier");
let index = 0;

function next() {
  slides[index].classList.remove("active_slide");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active_slide");
}

function prev() {
  slides[index].classList.remove("active_slide");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active_slide");
}

var x = window.matchMedia("(max-width: 500px)");
function minimizeNavbarInMobile() {
  //   console.log($("#navbar").classList);
  if (x.matches) {
    var navbar = document.getElementById("navbar");
    var toggle = document.getElementById("toggle");
    navbar.classList.remove("active");
    toggle.classList.remove("active");
  }
}
