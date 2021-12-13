function resetLiDropDown(data, item) {
  const recipes = document.querySelectorAll(".recipes");
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
      data.recipes.forEach((e) => {
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
  //   à chaque actualisation de la recherche main bar rempli la dropdown
  //   correspondante en fonction de la value main bar
  arrayToHtmlLi(ingredientArray, ulIngredient);
  arrayToHtmlLi(appareilArray, ulAppareil);
  arrayToHtmlLi(ustensileArray, ulUstensiles);
  const listLi = document.querySelectorAll(".block-links ul li");
  const listComponent = document.querySelectorAll(".component");
  listLi.forEach((li) => {
    listComponent.forEach((component) => {
      const componentText = component.childNodes[1].textContent;
      if (
        li.textContent.toLowerCase().replace(/\s/g, "") ===
        componentText.toLowerCase().replace(/\s/g, "")
      ) {
        li.remove();
      }
    });
  });
  ecouteLiDropdown(data);
}
