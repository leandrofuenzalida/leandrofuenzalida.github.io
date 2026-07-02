// function openNav() {
//   document.getElementById("mySidenav").style.width = "300px";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }

// var hamburguerMenu = document.querySelector(".menu-hamburger");

// hamburguerMenu.addEventListener("click", openNav);

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var hamburguerMenu = document.querySelector(".menu-hamburger");

// Avoid that the click bubbles up and closes immediately
hamburguerMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  openNav();
});

// detect click outside sidenav
document.addEventListener("click", function (event) {
  var sidenav = document.getElementById("mySidenav");

  var width = window.getComputedStyle(sidenav).width;
  var isOpen = width !== "0px";

  if (isOpen && !sidenav.contains(event.target)) {
    closeNav();
  }
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 20;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").removeClass("nav-down").addClass("nav-up");
    $(".logo-desktop-white-rotate").removeClass("text-blur-out");
    $(".logo-desktop-white-rotate").removeClass("remove-lateral-brand");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
      $(".logo-desktop-white-rotate").addClass("text-blur-out");
    }
  }

  lastScrollTop = st;
}

document.addEventListener("DOMContentLoaded", function () {
  // Obtén el elemento con la clase "fade-in-element"
  var element = document.querySelector(".fade-in-element");

  // Agrega la clase "show" después de un retraso de 1000 milisegundos (1 segundo)
  setTimeout(function () {
    element.classList.add("show");
  }, 200);
});
