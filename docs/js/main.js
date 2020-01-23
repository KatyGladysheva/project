$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dotsSpeed: 900
  });
});




const menuToggle = document.querySelector("#menu-togle");
const mobileNavContainer = document.querySelector("#mobile-nav")

menuToggle.addEventListener('click', function(){
	menuToggle.classList.toggle('header__burger-active');
	mobileNavContainer.classList.toggle("mobile-nav--active");
})
document.querySelector(".burger-wrapper").addEventListener('click', function(){
	document.querySelector(".header__burger").classList.toggle("header__burger-active");
})