//Ce qui se passe quand on clique sur le burger (si il est fermé, on l'ouvre et si il est ouvert on le ferme)
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

//La fonction qui fait arriver le menu
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
//La fonction qui fait sortir le menu
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
//Je suis conscient que je me suis répété sur ces fonctions et que j'aurais pu faire plus simple

//On fait l'event de click sur le burger
document.getElementById("burger").addEventListener("click", menuOnClick);
//On fait aussi en sorte que ça enleve le burger si on clique sur l'ecran ou dans la zone de selection du menu
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