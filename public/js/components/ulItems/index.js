ulIngredient = document.querySelector(".dropdown__ingredient .block-links ul");
ulAppareil = document.querySelector(".dropdown__appareil .block-links ul");
ulUstensiles = document.querySelector(".dropdown__ustensiles .block-links ul");
////////////////////////////////////////
function liIngredientGenerator(recipes) {
  let arrayIngredient = [];
  recipes.reduce((reducer, recipe) => {
    recipe.ingredients.reduce((reducer, ingredient) => {
      arrayIngredient.push(String([ingredient.ingredient.toLowerCase()]));
    });
  });
  arrayIngredients = [...new Set(arrayIngredient)];
  for (let i = 0; i < arrayIngredients.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(arrayIngredients[i]));
    ulIngredient.appendChild(item);
  }
}
function liAppareilGenerator(recipes) {
  let arrayAppareil = [];
  recipes.reduce((reducer, recipe) => {
    arrayAppareil.push(String([recipe.appliance.toLowerCase()]));
  });
  arrayAppareils = [...new Set(arrayAppareil)];
  for (let i = 0; i < arrayAppareils.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(arrayAppareils[i]));
    ulAppareil.appendChild(item);
  }
}
function liUstensilesGenerator(recipes) {
  let arrayUstensile = [];
  recipes.reduce((reducer, recipe) => {
    recipe.ustensils.reduce((reducer, ustensil) => {
      arrayUstensile.push(String([ustensil.toLowerCase()]));
    });
  });
  arrayUstensiles = [...new Set(arrayUstensile)];
  for (let i = 0; i < arrayUstensiles.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(arrayUstensiles[i]));
    ulUstensiles.appendChild(item);
  }
}
