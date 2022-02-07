// document.addEventListener("DOMContentLoaded", function(event) { 

window.addEventListener('load', (event) => {
  //do work
  console.log('page is fully loaded');

  const HAMBURGER = document.getElementById("hamburger");
const NAVMENU = document.getElementById("nav-menu");
const LOGO = document.getElementById("logo");

HAMBURGER.addEventListener("click", mobileMenu);

function mobileMenu() {
  HAMBURGER.classList.toggle("active");
  NAVMENU.classList.toggle("active");
}

const NAVLINK = document.querySelectorAll("nav-link");

NAVLINK.forEach(NAVLINK => NAVLINK.addEventListener("click", closeMenu));

function closeMenu() {
    HAMBURGER.classList.remove("active");
    NAVMENU.classList.remove("active");
}

const NAVITEMS = NAVMENU.getElementsByClassName("nav-item");

for (var i = 0; i < NAVITEMS.length; i++) {
  NAVITEMS[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("highlight");
    current[0].className = current[0].className.replace(" highlight", "");
    this.className += " highlight"
  });
}
    
  });