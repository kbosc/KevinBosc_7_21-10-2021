const recipesWrapper = document.querySelector("main");
const valueMainBar = document.querySelector("nav input");
const dropDownAppareil = document.querySelector("#selections-appareil");
const dropDownUstensiles = document.querySelector("#selections-ustensiles");
const btnIngredient = document.querySelector(
  ".dropdown__ingredient .button input"
);
const btnAppareil = document.querySelector(".dropdown__appareil .button input");
const btnUstensiles = document.querySelector(
  ".dropdown__ustensiles .button input"
);
const componentsWrapper = document.querySelector(".components-wrapper");

document.addEventListener(onFetchData.name, (e) => {
  const { data } = e;
  recipesWrapper.innerHTML = recipesCardsFactory(data.recipes);
  valueMainBar.addEventListener("keyup", () => {
    if (valueMainBar.value.length > 2) {
      recipesMainBar(data);
      // recipesWrapper.innerHTML = recipesMainBar(data.recipes);
    }
    if (valueMainBar.value.length <= 2) {
      recipesWrapper.innerHTML = recipesCardsFactory(data.recipes);
      componentsWrapper.innerHTML = "";
      ulIngredient.innerHTML = "";
      ulAppareil.innerHTML = "";
      ulUstensiles.innerHTML = "";
      liIngredientGenerator(data.recipes);
      liUstensilesGenerator(data.recipes);
      liAppareilGenerator(data.recipes);
      ecouteLiDropdown(data);
    }
  });
  liIngredientGenerator(data.recipes);
  liUstensilesGenerator(data.recipes);
  liAppareilGenerator(data.recipes);
  ///////////////////////////////TEST///////////////////////////////////
  // add le li dropdown cliquer à la barre des components et supprimer le li de la dropdown
  ecouteLiDropdown(data);
  // remove components et les ajoutes aux li dropdown correspondant
  componentsWrapper.addEventListener("click", function (item) {
    removeComponents(item, data);
  });
  ///////////////////////////////TEST///////////////////////////////////
  //////////////////////////////////////////////
});
