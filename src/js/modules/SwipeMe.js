import Swiper from 'swiper';

export var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 60,
    stretch: 0,
    depth: 600,
    modifier: 2,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
