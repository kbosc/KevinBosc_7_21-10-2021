function recipesMainBar(recipes) {
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
    return acc;
  }, "");
  return html;
}
