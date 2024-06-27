$(document).ready(function() {
  $('.magnific-popup').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 10, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
  });
});

$(".magnific-popup").click(function(){
  var zoom = parseInt($(this).css("zoom"));
  if(zoom==180){
      $(this).css("zoom","100%");
  }else{
      $(this).css("zoom",zoom+20+"%");
  }
});

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var hamburguerMenu = document.querySelector('.menu-hamburger')

hamburguerMenu.addEventListener('click', openNav)

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 20;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
        $('.logo-desktop-white-rotate').removeClass('text-blur-out');
        $('.logo-desktop-white-rotate').removeClass('remove-lateral-brand');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
            $('.logo-desktop-white-rotate').addClass('text-blur-out');
        }
    }
    
    lastScrollTop = st;
}

document.addEventListener("DOMContentLoaded", function() {
  // Obtén el elemento con la clase "fade-in-element"
  var element = document.querySelector(".fade-in-element");
  
  // Agrega la clase "show" después de un retraso de 1000 milisegundos (1 segundo)
  setTimeout(function() {
    element.classList.add("show");
  }, 200);
});