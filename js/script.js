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
const text = document.qyuerySelector('.text p');
text.innerHTML = text.innerText.split("").map((char, i) =>
    '<span style="transform:rotate(${i * 8.2}deg)"> ${char} < /span>').join("")

$('#auto_radius').circleType();