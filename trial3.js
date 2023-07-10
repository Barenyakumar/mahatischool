

/*=============== estate POPULAR SWIPER ===============*/
let swiperEstatePopular = new Swiper('.estate__popular__container', {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



  
  sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`)
  sr.reveal(`.home__subtitle`,{delay: 500})
  sr.reveal(`.home__elec`, {delay: 600})
  sr.reveal(`.home__img`, {delay: 800})
  sr.reveal(`.home__car-data`, {delay: 900, interval: 100, origin: 'bottom'})
  sr.reveal(`.home__button`, {delay: 1000, origin: 'bottom'})
  sr.reveal(`.about__group, .offer__data`,{origin: 'left'})
  sr.reveal(`.about__data, .offer__img`,{origin: 'right'})
  sr.reveal(`.features__map`,{delay: 600, origin: 'bottom'})
  sr.reveal(`.features__card`,{interval: 300})
  sr.reveal(`.featured__card, .logos__content,`,{interval: 100})