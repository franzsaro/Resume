function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.onscroll = function() {stickyNav(), stickyHamburgerNav()};

var navbar = document.getElementById("desktop-nav");
var hamburgerNav = document.getElementById("hamburger-nav");
var sticky = navbar.offsetTop;
var hamburgerStick = hamburgerNav.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky")
    }
}

function stickyHamburgerNav() {
    if (window.pageYOffset >= hamburgerStick) {
        hamburgerNav.classList.add("sticky")
    }
    else {
        hamburgerNav.classList.remove("sticky")
    }
}