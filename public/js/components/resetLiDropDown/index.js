function resetLiDropDown(recipes, data) {
  let ingredientArray = [];
  let appareilArray = [];
  let ustensileArray = [];
  recipes.forEach((cardParent) => {
    let ingredientOfRecipes = cardParent.querySelectorAll(
      ".recipes-ingredient"
    );
    let NameChildOfRecipes = cardParent.querySelector(
      ".recipes__resume__up__name"
    );
    if (cardParent.style.display !== "none") {
      ingredientOfRecipes.forEach((ingredient) => {
        ingredientArray.push(ingredient.textContent);
      });
      //   comparer chaque nom de la card avec ceux de la data et
      // si match chercher ustensils et appareil pour push dans array
      data.forEach((e) => {
        if (
          NameChildOfRecipes.textContent.toLowerCase().replace(/\s/g, "") ===
          e.name.toLowerCase().replace(/\s/g, "")
        ) {
          appareilArray.push(e.appliance.toLowerCase());
          ustensileArray = ustensileArray.concat(
            e.ustensils.map((name) => name.toLowerCase())
          );
        }
      });
    }
  });
  // à chaque actualisation de la recherche main bar vide l'html dropdown correspondant
  ulIngredient.innerHTML = "";
  ulAppareil.innerHTML = "";
  ulUstensiles.innerHTML = "";
  // à chaque actualisation de la recherche main bar rempli la dropdown correspondante en fonction de la value main bar
  arrayToHtmlLi(ingredientArray, ulIngredient);
  arrayToHtmlLi(appareilArray, ulAppareil);
  arrayToHtmlLi(ustensileArray, ulUstensiles);
  // relance une écoute sur les li dropdown pour filtrer
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
    // console.log(data);
    item.addEventListener("click", function () {
      addComponents(item, data);
    });
  });
  const liUstensiles = document.querySelectorAll(
    ".dropdown__ustensiles .block-links ul li"
  );
  liUstensiles.forEach(function (item) {
    item.addEventListener("click", function () {
      addComponents(item, data);
    });
  });
}
