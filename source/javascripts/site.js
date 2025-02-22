import { annotate, annotationGroup } from "https://unpkg.com/rough-notation?module";
const title = document.querySelector('.title');
const shake = document.querySelector('.shake');
const yours = document.querySelector('.yours');
const roughNotation = document.querySelector('.rough-notation');
const link = document.querySelector('.nav-link');
const list = document.querySelector('.list');
/* const a1 = annotate(title, { type: 'highlight' , color:'orange'});
const a2 = annotate(shake, {type:'highlight', color:'yellow', padding:7});
const a3 = annotate(yours, {type:'underline', color:'teal', padding:7});
const ag = annotationGroup([a1, a2, a3]);
ag.show();
 */
const textDisplay = document.getElementById('text')
let currentPhrase = []
let i = 0
let j = 0
let isDeleting = false
let isEnd = false

const phrases = [
  'Hi, this is Jim’s portfolio',
  'こんにちはこれはジムのポートフォリオです',
  'Thanks for visiting！',
  'よろしくお願いします！',
]

function loop(){
  isEnd = false
  textDisplay.innerHTML = phrases[0]

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
    j++
    textDisplay.innerHTML = currentPhrase.join('')
  }

  if (isDeleting && j <= phrases[i].length) {
    currentPhrase.pop()
    j--
    textDisplay.innerHTML = currentPhrase.join('')
  }

  if (j == phrases[i].length) {
    isEnd = true
    isDeleting = true
  }

  if (isDeleting && j === 0) {
    currentPhrase = []
    isDeleting = false
    i ++
    if ( i === phrases.length) {
      i = 0
    }
  }
}

  const spedUp = Math.random() * 100
  const normalSpeed = Math.random() * 300
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop ()

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar-lewagon");

  // Create an invisible hover zone at the top
  const hoverZone = document.createElement("div");
  hoverZone.classList.add("hover-zone");
  document.body.appendChild(hoverZone);

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 50) {
      // Scrolling down - hide navbar
      navbar.classList.add("hidden-navbar");
    } else {
      // Scrolling up - show navbar
      navbar.classList.remove("hidden-navbar");
    }
    lastScrollTop = scrollTop;
  });

  // Show navbar when mouse enters hover zone or navbar
  function showNavbar() {
    navbar.classList.remove("hidden-navbar");
  }

  // Hide navbar when mouse leaves both hover zone and navbar
  function hideNavbar() {
    navbar.classList.add("hidden-navbar");
  }

  hoverZone.addEventListener("mouseenter", showNavbar);
  navbar.addEventListener("mouseenter", showNavbar);

  hoverZone.addEventListener("mouseleave", hideNavbar);
  navbar.addEventListener("mouseleave", hideNavbar);
});
