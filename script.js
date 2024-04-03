const titleTop = document.querySelector("#title-top > img");
const sections = document.querySelectorAll(".section");

let isScrolling = false;
let currentSection = 0;

window.addEventListener(
  "wheel",
  function (event) {
    event.preventDefault();
    if (isScrolling) return;

    isScrolling = true;
    console.log("Scroll detected");

    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      console.log("Scrolling down");
      currentSection++;
    } else if (event.deltaY < 0 && currentSection > 0) {
      console.log("Scrolling up");
      currentSection--;
    }

    scrollToSection(currentSection);
  },
  { passive: false }
);

function scrollToSection(sectionIndex) {
  console.log(sections[sectionIndex].offsetTop);
  console.log(window);
  window.scrollTo({
    top: sections[sectionIndex].offsetTop,
    behavior: "smooth",
  });
  setTimeout(() => (isScrolling = false), 1000);
}

// Intervalle qui fait que toutes les 2 à 5 secondes, le titre devient l'animation de glitch pendant 0.2 à 0.5 secondes
setInterval(() => {
  titleTop.src = "assets/Cyberpunk-title-glitch.gif";
  setTimeout(
    () => (titleTop.src = "assets/Cyberpunk-title.png"),
    Math.floor(Math.random() * (500 - 200) + 200)
  );
}, Math.floor(Math.random() * (5000 - 2000) + 2000));

let burgerState = 0
function menuOnClick() {
    if (burgerState === 0) {
        animBurgerEntree(document.querySelector("#menu-bg"));
        burgerState = 1;
    }
    else {
        animBurgerSortie(document.querySelector("#menu-bg"))
        burgerState = 0
    }
}

function animBurgerEntree(burger) {
  document.querySelector("main").style.filter = "brightness(50%)";
  burger.style.display = "block";
  console.log(burger);
  let xtranslate = -100;
  let ytranslate = -80;
  burger.style.transform = "translate(" + xtranslate + "%," + ytranslate + "%)";
  let intervalle = setInterval(() => {
    xtranslate += 1;
    ytranslate += 1;
    if (xtranslate >= -60) {
      clearInterval(intervalle);
      document.querySelector("nav").style.display = "flex";
    }
    burger.style.transform =
      "translate(" + xtranslate + "%," + ytranslate + "%)";
  }, 10);
}
function animBurgerSortie(burger) {
  document.querySelector("main").style.filter = "brightness(1)";
  document.querySelector("nav").style.display = "none";
  let xtranslate = -60;
  let ytranslate = -40;
  burger.style.transform = "translate(" + xtranslate + "%," + ytranslate + "%)";
  let intervalle = setInterval(() => {
    xtranslate -= 1;
    ytranslate -= 1;
    if (xtranslate <= -100) {
      clearInterval(intervalle);
      burger.style.display = "none";
    }
    burger.style.transform =
      "translate(" + xtranslate + "%," + ytranslate + "%)";
  }, 10);
}

document.getElementById("burger").addEventListener("click", menuOnClick);
document.querySelector("main").addEventListener("click", () => {
    if (burgerState === 1) {
        animBurgerSortie(document.querySelector("#menu-bg"))
        burgerState = 0
    }
})
document.querySelector("nav ul").addEventListener("click", () => {
    animBurgerSortie(document.querySelector("#menu-bg"))
    burgerState = 0
})