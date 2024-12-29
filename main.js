// Onscroll Function in nav bar

const header = document.querySelector('.header');
let navbar = document.querySelector('.header .navbar');
let toggleBtn = document.querySelector('.nav-toggle');

window.onscroll = () => {
  header.classList.toggle('active', window.scrollY > 100);
}


// Swiper JavaScript

const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});




// ==Scroll Reveal===

ScrollReveal({
  reset:true,
  distance: '100px',
  duration: 2500
})

ScrollReveal().reveal('.home-text-content, .heading-text, .about-text, .product-description, .context-text', {origin : 'top'});
ScrollReveal().reveal('.about-img, .home-text-content h1, .price, .small, .order-img,  .contact-img', { origin : 'left' });
ScrollReveal().reveal('.cart-icon, .product-box h2, .order-text, .home-img, .contact-input, .heading-text p, .contact-text', { origin : 'right' });
ScrollReveal().reveal('.button,  .menu-next, .footer-content, .product-box, .gallary-box', { origin : 'bottom' });


toggleBtn.addEventListener('click', () =>{
  navbar.classList.toggle('active');
})
