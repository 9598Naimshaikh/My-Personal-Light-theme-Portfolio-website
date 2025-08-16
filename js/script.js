const head = document.querySelector("header");
const navbar = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");


hamburger.onclick = function(){
    navbar.classList.toggle("active");
}


document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
}, false);