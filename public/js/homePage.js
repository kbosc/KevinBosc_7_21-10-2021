const recipesWrapper = document.querySelector("main");
const valueMainBar = document.querySelector("nav input");
const dropDownAppareil = document.querySelector("#selections-appareil");
const dropDownUstensiles = document.querySelector("#selections-ustensiles");

document.addEventListener(onFetchData.name, (e) => {
  const { data } = e;
  // console.log(data);
  recipesWrapper.innerHTML = recipesCardsFactory(data.recipes);
  valueMainBar.addEventListener("keyup", () => {
    if (valueMainBar.value.length > 2) {
      recipesWrapper.innerHTML = recipesMainBar(data.recipes);
    }
    if (valueMainBar.value.length <= 2) {
      recipesWrapper.innerHTML = recipesCardsFactory(data.recipes);
    }
  });
  liIngredientGenerator(data.recipes);
  liUstensilesGenerator(data.recipes);
  liAppareilGenerator(data.recipes);
  // add les ingrédients à la barre des components et supprimer des li
  const liIngredient = document.querySelectorAll(
    ".dropdown__ingredient .block-links ul li"
  );
  liIngredient.forEach(function (item) {
    item.addEventListener("click", function () {
      addComponents(item);
    });
  });
  const liAppareil = document.querySelectorAll(
    ".dropdown__appareil .block-links ul li"
  );
  liAppareil.forEach(function (item) {
    item.addEventListener("click", function () {
      addComponents(item);
    });
  });
  const liUstensiles = document.querySelectorAll(
    ".dropdown__ustensiles .block-links ul li"
  );
  liUstensiles.forEach(function (item) {
    item.addEventListener("click", function () {
      addComponents(item);
    });
  });
  // remove components et les ajoutes aux li d'ingrédient
  componentsWrapper.addEventListener("click", function (item) {
    removeComponents(item);
  });
  //////////////////////////////////////////////
});
