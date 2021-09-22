// Jquery add active class
// $(document).ready(function() {
//   "use strict";

//   $('.nav-item').click(function(e) {
//     // e.preventDefault();
//     $('.nav-item').removeClass('highlight');
//     $(this).addClass('highlight');
//   });
// });

document.addEventListener("DOMContentLoaded", function() {     

    // Javascript add highlight class to indicate current section
    var navMenu = document.getElementById("navmenu");
    var navItems = navMenu.getElementsByClassName("nav-item");

    for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("highlight");
        current[0].className = current[0].className.replace(" highlight", "");
        this.className += " highlight"
    });
    }

    const hamburger = document.querySelector(".hamburger");
    const navBar = document.querySelector("#navbar");
    const header = navBar.querySelector("header");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
    
        hamburger.classList.toggle("active");
        navBar.classList.toggle("active");
        navMenu.classList.toggle("active");
        header.classList.toggle("active");
    }

    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(navLink => navLink.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        navBar.classList.remove("active");
        header.classList.remove("active");
    }
});