const recipesWrapper = document.querySelector("main");
const valueMainBar = document.querySelector("nav input");
const dropDownIngredient = document.querySelector("#selections-ingredient");
const dropDownAppareil = document.querySelector("#selections-appareil");
const dropDownUstensiles = document.querySelector("#selections-ustensiles");

document.addEventListener(onFetchData.name, (e) => {
  const { data } = e;
  console.log(data);
  recipesWrapper.innerHTML = RecipesCardsFactory(data.recipes);
  valueMainBar.addEventListener("keyup", () => {
    if (valueMainBar.value.length > 2) {
      recipesWrapper.innerHTML = RecipesMainBar(data.recipes);
    }
    if (valueMainBar.value.length <= 2) {
      recipesWrapper.innerHTML = RecipesCardsFactory(data.recipes);
    }
  });
  ///////////////////////////////////////////////////
  dropDownIngredient.addEventListener("click", () => {
    console.log("coucou");
  });
});
/////////////////////////////////////////////////////////////////////////////
