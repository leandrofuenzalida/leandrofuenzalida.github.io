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
var navbarHeight = 0;

document.addEventListener("DOMContentLoaded", function () {
  navbarHeight = $("header").outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);
});

function hasScrolled() {
  var st = $(window).scrollTop();

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
    $("header").removeClass("nav-up").addClass("nav-down");
    $(".logo-desktop-white-rotate").addClass("text-blur-out");
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

function detectLanguage() {
  const path = window.location.pathname;
  return path.startsWith("/eng") ? "en" : "es";
}

function renderSidenav() {
  const lang = detectLanguage();
  const data = sidenavData[lang];
  const sidenav = document.getElementById("mySidenav");

  if (!sidenav) return;

  sidenav.innerHTML = `
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="${data.home.href}" class="categoria underline"><b>${data.home.label}</b></a>

    <p class="categoria"><b>${data.cases}</b></p>
    ${data.projects.map((p) => `<a class="item-menu" href="${p.href}">${p.label}</a>`).join("")}

    <a href="${data.visualDesign.href}" class="categoria underline"><b>${data.visualDesign.label}</b></a>
    ${data.designs.map((d) => `<a class="item-menu" href="${d.href}">${d.label}</a>`).join("")}

    <a href="${data.contact.href}" class="categoria"><b>${data.contact.label}</b></a>
    <a href="${data.about.href}" class="categoria"><b>${data.about.label}</b></a>
  `;

  // Marcar el link actual como "current"
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  document.querySelectorAll(".sidenav .item-menu").forEach((link) => {
    const linkPath = new URL(link.href).pathname.replace(/\/$/, "") || "/";
    if (linkPath === currentPath) {
      link.classList.add("current");
    }
  });
}

document.addEventListener("DOMContentLoaded", renderSidenav);
