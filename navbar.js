  // // search-box open close js code
  // let navbar = document.querySelector(".navbar");
  // let searchBox = document.querySelector(".search-box .bx-search");

  // // sidebar open close js code
  // let navLinks = document.querySelector(".nav-links");
  // let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  // let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  // menuOpenBtn.onclick = function() {
  // navLinks.style.left = "0";
  // }
  // menuCloseBtn.onclick = function() {
  // navLinks.style.left = "-100%";
  // }
  
  
  // // sidebar submenu open close js code
  // let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  // htmlcssArrow.onclick = function() {
  //  navLinks.classList.toggle("show1");
  // }
  // let moreArrow = document.querySelector(".more-arrow");
  // moreArrow.onclick = function() {
  //  navLinks.classList.toggle("show2");
  // }
  // let jsArrow = document.querySelector(".js-arrow");
  // jsArrow.onclick = function() {
  //  navLinks.classList.toggle("show3");
  // }
  

  // search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};

let contact = document.querySelector(".contact");
contact.onclick = function () {
  navLinks.classList.toggle("showcontact");
};

let aboutUs = document.querySelector(".about-us");
aboutUs.onclick = function () {
  navLinks.classList.toggle("showAboutUs");
};

let academics = document.querySelector(".academics");
academics.onclick = function () {
  navLinks.classList.toggle("showacademics");
};

let rules = document.querySelector(".rules");
rules.onclick = function () {
  navLinks.classList.toggle("showrules");
};

let achievements = document.querySelector(".achievements");
achievements.onclick = function () {
  navLinks.classList.toggle("showachievements");
};



let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};

// Added event listeners for submenu arrows
// const arrows = document.querySelectorAll(".arrow");

// arrows.forEach((arrow) => {
//   arrow.addEventListener("click", (e) => {
//     e.target.parentNode.classList.toggle("active-submenu");
//   });
// });
