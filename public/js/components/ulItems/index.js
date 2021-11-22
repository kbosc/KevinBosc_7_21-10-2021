ulIngredient = document.querySelector(".dropdown__ingredient .block-links ul");
ulAppareil = document.querySelector(".dropdown__appareil .block-links ul");
ulUstensiles = document.querySelector(".dropdown__ustensiles .block-links ul");
////////////////////////////////////////
// incrémente une liste en fonction du tableaux et l'element du dom donné
function arrayToHtmlLi(array, list) {
  arrayIngredients = [...new Set(array)];
  for (let i = 0; i < arrayIngredients.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(arrayIngredients[i]));
    list.appendChild(item);
  }
}
function liIngredientGenerator(recipes) {
  let arrayIngredient = [];
  recipes.reduce((reducer, recipe) => {
    recipe.ingredients.reduce((reducer, ingredient) => {
      arrayIngredient.push(String([ingredient.ingredient.toLowerCase()]));
    });
  });
  arrayToHtmlLi(arrayIngredient, ulIngredient);
}
function liAppareilGenerator(recipes) {
  let arrayAppareil = [];
  recipes.reduce((reducer, recipe) => {
    arrayAppareil.push(String([recipe.appliance.toLowerCase()]));
  });
  arrayToHtmlLi(arrayAppareil, ulAppareil);
}
function liUstensilesGenerator(recipes) {
  let arrayUstensile = [];
  recipes.reduce((reducer, recipe) => {
    recipe.ustensils.reduce((reducer, ustensil) => {
      arrayUstensile.push(String([ustensil.toLowerCase()]));
    });
  });
  arrayToHtmlLi(arrayUstensile, ulUstensiles);
}

// const btnIngredient = document.querySelector(
//   ".dropdown__ingredient button input"
// );
// if (btnIngredient.value.length > 2) {
//   console.log("coucou");
// }
