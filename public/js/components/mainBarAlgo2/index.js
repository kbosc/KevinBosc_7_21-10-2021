// let valueMainSearch = valueMainBar.value;
console.time("MainBarSearchAlgo2");
function MainBarSearchAlgo2(data) {
  console.time();
  const datas = data.recipes;
  let ingredientArray = [];
  let appareilArray = [];
  let ustensileArray = [];
  let newArray = [];
  let recettes = [];

  recettes = datas.filter(function (e) {
    for (let i = 0; i < e.ingredients.length; i++) {
      for (let j = 0; j < e.ustensils.length; j++) {
        if (
          e.name.match(".*" + valueMainBar.value.toLowerCase() + ".*") ||
          e.appliance.match(".*" + valueMainBar.value.toLowerCase() + ".*") ||
          e.description.match(".*" + valueMainBar.value.toLowerCase() + ".*") ||
          e.ingredients[i].ingredient.match(
            ".*" + valueMainBar.value.toLowerCase() + ".*"
          ) ||
          e.ustensils[j].match(".*" + valueMainBar.value.toLowerCase() + ".*")
        ) {
          return e;
        }
      }
    }
  });
  const html = recettes.reduce((acc, element) => {
    const listInngredients = element.ingredients.reduce((acc, ingredients) => {
      // rempli le tableau pour la dropdown correspondante
      ingredientArray.push(String([ingredients.ingredient.toLowerCase()]));
      acc += `
              <li>
                  <span class="recipes-ingredient">${
                    ingredients.ingredient
                  }</span>:
                  <span class="recipes-quantity">${
                    ingredients.quantity != undefined ? ingredients.unit : ""
                  }</span>
                  <span class="recipes-unit">${
                    ingredients.unit != undefined ? ingredients.unit : ""
                  }</span>
              </li>
              `;
      return acc;
    }, "");
    // rempli le tableau pour la dropdown correspondante
    appareilArray.push(String([element.appliance.toLowerCase()]));
    newArray = element.ustensils;
    newArray.forEach((ustensil) => {
      ustensileArray.push(ustensil);
    });
    acc += `
         <div class="recipes">
         <div class="recipes__img"></div>
         <div class="recipes__resume">
           <div class="recipes__resume__up">
             <h2 class="recipes__resume__up__name">${element.name}</h2>
             <p>
               <img
                 src="./img/svg/clock.svg"
                 alt="horloge pour définir le temps de préparation"
               />
               <span class="recipes__resume__up__time"> ${element.time} </span>min
             </p>
           </div>
           <div class="recipes__resume__bottom">
             <ul class="recipes__resume__bottom__ingredients">
             ${listInngredients}
             </ul>
             <div class="recipes__resume__bottom__description">
               <p>
               ${element.description}
               </p>
             </div>
           </div>
         </div>
       </div>`;
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
  ecouteLiDropdown(data);
  console.timeLog(label);
  return (recipesWrapper.innerHTML = html);
}
console.timeEnd("MainBarSearchAlgo2");
