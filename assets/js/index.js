'use strict';

// Element Toggle Function

const eleToggleFunc = function (ele) {
    ele.classList.toggle("active");
};

// Header Sticky & Go To Top


const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 10) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});
// Navbar Toggle

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
    eleToggleFunc(navToggleBtn);
    eleToggleFunc(navbar);
    eleToggleFunc(document.body);

});

// Theme

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

    eleToggleFunc(themeToggleBtn);

    if (themeToggleBtn.classList.contains("active")) {
        document.body.classList.remove("dark_theme");
        document.body.classList.add("light_theme");

        localStorage.setItem("theme", "light_theme");
    } else {
        document.body.classList.add("dark_theme");
        document.body.classList.remove("light_theme");

        localStorage.setItem("theme", "dark_theme");
    }

});


//   check & apply last time selected theme from localStorage


if (localStorage.getItem("theme") === "light_theme") {
    themeToggleBtn.classList.add("active");
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
} else {
    themeToggleBtn.classList.remove("active");
    document.body.classList.remove("light_theme");
    document.body.classList.add("dark_theme");
}

// Skills Toggle


const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
    toggleBtns[i].addEventListener("click", function () {

        eleToggleFunc(toggleBtnBox);
        for (let i = 0; i < toggleBtns.length; i++) { eleToggleFunc(toggleBtns[i]); }
        eleToggleFunc(skillsBox);

    });
};

// Send Email

function sendEmail() {
    window.location.href = "mailto:krishna.dirishala05@gmail.com"
}

// Open Bento Portfolio


function bento() {
    var win = window.open('https://bento.me/thepavanchowdary', '_blank');
    win.focus();
}
