// Toggle Js
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function(e) {
    if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
        navbar.classList.remove('active');
        toggle.classList.remove('active');
    }
}

toggle.onclick = function() {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}

// image animation