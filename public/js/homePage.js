const recipesWrapper = document.querySelector("main");
const valueMainBar = document.querySelector("nav input");
// const dropDownIngredient = document.querySelector("#selections-ingredient");
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
  //////////////////////////////////////////////
  // console.log(data.recipes);
  // ulIngredient.innerHTML = liIngredient(data.recipes);
  ulIngredient.appendChild(liIngredient(data.recipes));
});
/////////////////////////////////////////////////////////////////////////////
ulIngredient = document.querySelector(".dropdown__ingredient .block-links ul");
ulAppareil = document.querySelector(".dropdown__appareil .block-links ul");
ulUstensiles = document.querySelector(".dropdown__ustensiles .block-links ul");
