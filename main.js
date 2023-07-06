const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".c-nav-menu");
const navLink = document.querySelectorAll(".c-nav");
const btn = document.querySelector(".btn");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    btn.classList.toggle("active");

}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    btn.classList.remove("active");
}

const arrow = document.querySelector(".arrow");

arrow.addEventListener("click", switchArrow);

function switchArrow() {
    arrow.classList.add(".up")
}