function recipesMainBar(recipes) {
  let ingredientArray = [];
  let appareilArray = [];
  let ustensileArray = [];
  let newArray = [];
  const html = recipes.reduce((acc, recipe) => {
    let isMatchIngredient = false;
    recipe.ingredients.map((ingredient) => {
      if (
        ingredient.ingredient
          .toLowerCase()
          .match(".*" + valueMainBar.value.toLowerCase() + ".*")
      ) {
        isMatchIngredient = true;
      }
    });
    // parcour tous les ingrédient et vérifier si il match, si oui passé à true isMatchIngredient
    if (
      recipe.name
        .toLowerCase()
        .match(".*" + valueMainBar.value.toLowerCase() + ".*") ||
      isMatchIngredient ||
      recipe.description
        .toLowerCase()
        .match(".*" + valueMainBar.value.toLowerCase() + ".*")
    ) {
      const ingredients = recipe.ingredients.reduce((acc, ingredient) => {
        let unytys = "";
        if (ingredient.quantity != undefined) {
          unytys = ingredient.quantity;
        }
        // rempli le tableau pour la dropdown correspondante
        ingredientArray.push(String([ingredient.ingredient.toLowerCase()]));
        /////////////
        acc += `
              <li>
                  <span class="recipes-ingredient">${
                    ingredient.ingredient
                  }</span>:
                  <span class="recipes-quantity">${unytys}</span>
                  <span class="recipes-unit">${
                    ingredient.unit != undefined ? ingredient.unit : ""
                  }</span>
              </li>
              `;
        return acc;
      }, "");
      // rempli le tableau pour la dropdown correspondante
      appareilArray.push(String([recipe.appliance.toLowerCase()]));
      newArray = recipe.ustensils;
      newArray.forEach((element) => {
        ustensileArray.push(element);
      });
      acc += `
            <div class="recipes">
            <div class="recipes__img"></div>
            <div class="recipes__resume">
              <div class="recipes__resume__up">
                <h2 class="recipes__resume__up__name">${recipe.name}</h2>
                <p>
                  <img
                    src="./img/svg/clock.svg"
                    alt="horloge pour définir le temps de préparation"
                  />
                  <span class="recipes__resume__up__time"> ${recipe.time} </span>min
                </p>
              </div>
              <div class="recipes__resume__bottom">
                <ul class="recipes__resume__bottom__ingredients">
                ${ingredients}
                </ul>
                <div class="recipes__resume__bottom__description">
                  <p>
                  ${recipe.description}
                  </p>
                </div>
              </div>
            </div>
          </div>`;
    }
    // à chaque actualisation de la recherche main bar vide l'html dropdown correspondant
    ulIngredient.innerHTML = "";
    ulAppareil.innerHTML = "";
    ulUstensiles.innerHTML = "";
    // à chaque actualisation de la recherche main bar rempli la dropdown correspondante en fonction de la value main bar
    arrayToHtmlLi(ingredientArray, ulIngredient);
    arrayToHtmlLi(appareilArray, ulAppareil);
    arrayToHtmlLi(ustensileArray, ulUstensiles);

    return acc;
  }, "");
  ////////////REFACTO///////////////
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
  ////////////REFACTO///////////////
  return html;
}
