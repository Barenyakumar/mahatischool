
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper('.popular__container', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
      },
});

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

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.estate__value__accordion-item')

// 1. Select each item
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.estate__value__accordion-header')

    // 2. Select each header click
    accordionHeader.addEventListener('click', () =>{
        // 7. Create the tag
        const openItem = document.querySelector('.accordion-open')
        
        // 5. Call toggle item function
        toggleItem(item)

        // 8. Check if the class exists
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// 3. Create a constant type function
const toggleItem = (item) =>{
    // 3.1 Create the tag
    const accordionContent = item.querySelector('.estate__value__accordion-content')

    // 6. If there is another element that contains the class accordion-open remove its class
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        // 4. Add the maximum height of the content
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/* Link active featured */ 
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
    linkFeatured.forEach(l=> l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))


/*=============== MIXITUP FILTER PRODUCTS ===============*/
let mixerProducts = mixitup('.coffee__products__content', {
    selectors: {
        target: '.coffee__products__card',
    },
    animation: {
        duration: 300
    }
});

/* Default filter products */ 
mixerProducts.filter('.delicacies');

/* Link active products */ 
const linkProducts = document.querySelectorAll('.coffee__products__item')

function activeProducts(){
    linkProducts.forEach(l=> l.classList.remove('active-product'))
    this.classList.add('active-product')
}
linkProducts.forEach(l=> l.addEventListener('click', activeProducts))

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})
  
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