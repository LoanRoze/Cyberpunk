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