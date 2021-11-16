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
  liIngredient(data.recipes);
  liUstensiles(data.recipes);
  liAppareil(data.recipes);
  //////////////////////////////////////////////
  // console.log(data.recipes);
});
/////////////////////////////////////////////////////////////////////////////
const items = document.querySelectorAll(
  ".dropdown__ingredient .block-links ul li"
);
let tab = [];
let index = "";

// add values to the array
for (let i = 0; i < items.length; i++) {
  tab.push(items[i].innerHTML);
}

// get selected element index
for (let i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    index = tab.indexOf(this.innerHTML);
    console.log(this.innerHTML + " Index = " + index);
  };
}
