const titleTop = document.querySelector("#title-top > img");
const sections = document.querySelectorAll(".section");

let isScrolling = false;
let currentSection = 0;

//Event qui se passe quand on scroll sur la page et qui active la fonction ScrollToSection en fonction de sur quelle section on veut aller
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

//La fonction qui permet de scroller un une section en particulier
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
