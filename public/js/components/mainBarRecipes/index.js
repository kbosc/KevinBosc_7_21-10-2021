function recipesMainBar(data) {
  const datas = data.recipes;
  let ingredientArray = [];
  let appareilArray = [];
  let ustensileArray = [];
  let recettes = [];

  for (let h = 0; h < datas.length; h++) {
    for (let i = 0; i < datas[h].ingredients.length; i++) {
      for (let j = 0; j < datas[h].ustensils.length; j++) {
        if (
          datas[h].name.match(".*" + valueMainBar.value.toLowerCase() + ".*") ||
          datas[h].appliance.match(
            ".*" + valueMainBar.value.toLowerCase() + ".*"
          ) ||
          datas[h].description.match(
            ".*" + valueMainBar.value.toLowerCase() + ".*"
          ) ||
          datas[h].ingredients[i].ingredient.match(
            ".*" + valueMainBar.value.toLowerCase() + ".*"
          ) ||
          datas[h].ustensils[j].match(
            ".*" + valueMainBar.value.toLowerCase() + ".*"
          )
        ) {
          ingredientArray.push(
            String([datas[h].ingredients[i].ingredient.toLowerCase()])
          );
          appareilArray.push(String([datas[h].appliance.toLowerCase()]));
          ustensileArray.push(String([datas[h].ustensils[j].toLowerCase()]));
          recettes.push(datas[h]);
        }
      }
    }
  }
  function uniq(tableau) {
    let prims = { boolean: {}, number: {}, string: {} },
      objs = [];

    return tableau.filter(function (item) {
      let type = typeof item;
      if (type in prims)
        return prims[type].hasOwnProperty(item)
          ? false
          : (prims[type][item] = true);
      else return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
  }
  const recette = uniq(recettes);
  let html = "";
  recipesWrapper.innerHTML = "";
  for (let k = 0; k < recette.length; k++) {
    html += `
        <div class="recipes">
        <div class="recipes__img"></div>
        <div class="recipes__resume">
        <div class="recipes__resume__up">
        <h2 class="recipes__resume__up__name">${recette[k].name}</h2>
        <p>
        <img
        src="./img/svg/clock.svg"
        alt="horloge pour définir le temps de préparation"
        />
        <span class="recipes__resume__up__time"> ${recette[k].time} </span>min
        </p>
        </div>
        <div class="recipes__resume__bottom">
        <ul class="recipes__resume__bottom__ingredients">`;
    for (let l = 0; l < recette[k].ingredients.length; l++) {
      html += `<li>
        <span class="recipes-ingredient">${
          recette[k].ingredients[l].ingredient
        }</span>:
        <span class="recipes-quantity">${
          recette[k].ingredients[l].quantity != undefined
            ? recette[k].ingredients[l].quantity
            : ""
        }</span>
        <span class="recipes-unit">${
          recette[k].ingredients[l].unit != undefined
            ? recette[k].ingredients[l].unit
            : ""
        }</span>
        </li>`;
    }
    html += `</ul>
       <div class="recipes__resume__bottom__description">
        <p>
        ${recette[k].description}
        </p>
        </div>
        </div>
        </div>
        </div>`;
  }
  recipesWrapper.innerHTML = html;

  //  à chaque actualisation de la recherche main bar vide l'html dropdown correspondant
  ulIngredient.innerHTML = "";
  ulAppareil.innerHTML = "";
  ulUstensiles.innerHTML = "";
  // à chaque actualisation de la recherche main bar rempli la dropdown correspondante en fonction de la value main bar
  arrayToHtmlLi(ingredientArray, ulIngredient);
  arrayToHtmlLi(appareilArray, ulAppareil);
  arrayToHtmlLi(ustensileArray, ulUstensiles);
  ecouteLiDropdown(data);
}
// console.time("recipesMainBar");
// function recipesMainBar(recipes) {
//   let ingredientArray = [];
//   let appareilArray = [];
//   let ustensileArray = [];
//   let newArray = [];
//   const html = recipes.reduce((acc, recipe) => {
//     let isMatchIngredient = false;
//     recipe.ingredients.map((ingredient) => {
//       if (
//         ingredient.ingredient
//           .toLowerCase()
//           .match(".*" + valueMainBar.value.toLowerCase() + ".*")
//       ) {
//         isMatchIngredient = true;
//       }
//     });
//     // parcour tous les ingrédient et vérifier si il match, si oui passé à true isMatchIngredient
//     if (
//       recipe.name
//         .toLowerCase()
//         .match(".*" + valueMainBar.value.toLowerCase() + ".*") ||
//       isMatchIngredient ||
//       recipe.description
//         .toLowerCase()
//         .match(".*" + valueMainBar.value.toLowerCase() + ".*")
//     ) {
//       const ingredients = recipe.ingredients.reduce((acc, ingredient) => {
//         // let unytys = "";
//         // if (ingredient.quantity != undefined) {
//         //   unytys = ingredient.quantity;
//         // }
//         // rempli le tableau pour la dropdown correspondante
//         ingredientArray.push(String([ingredient.ingredient.toLowerCase()]));
//         /////////////
//         acc += `
//               <li>
//                   <span class="recipes-ingredient">${
//                     ingredient.ingredient
//                   }</span>:
//                   <span class="recipes-quantity">${
//                     ingredient.quantity != undefined ? ingredient.unit : ""
//                   }</span>
//                   <span class="recipes-unit">${
//                     ingredient.unit != undefined ? ingredient.unit : ""
//                   }</span>
//               </li>
//               `;
//         return acc;
//       }, "");
//       // rempli le tableau pour la dropdown correspondante
//       appareilArray.push(String([recipe.appliance.toLowerCase()]));
//       newArray = recipe.ustensils;
//       newArray.forEach((element) => {
//         ustensileArray.push(element);
//       });

//       acc += `
//             <div class="recipes">
//             <div class="recipes__img"></div>
//             <div class="recipes__resume">
//               <div class="recipes__resume__up">
//                 <h2 class="recipes__resume__up__name">${recipe.name}</h2>
//                 <p>
//                   <img
//                     src="./img/svg/clock.svg"
//                     alt="horloge pour définir le temps de préparation"
//                   />
//                   <span class="recipes__resume__up__time"> ${recipe.time} </span>min
//                 </p>
//               </div>
//               <div class="recipes__resume__bottom">
//                 <ul class="recipes__resume__bottom__ingredients">
//                 ${ingredients}
//                 </ul>
//                 <div class="recipes__resume__bottom__description">
//                   <p>
//                   ${recipe.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>`;
//     }
//     // à chaque actualisation de la recherche main bar vide l'html dropdown correspondant
//     ulIngredient.innerHTML = "";
//     ulAppareil.innerHTML = "";
//     ulUstensiles.innerHTML = "";
//     // à chaque actualisation de la recherche main bar rempli la dropdown correspondante en fonction de la value main bar
//     arrayToHtmlLi(ingredientArray, ulIngredient);
//     arrayToHtmlLi(appareilArray, ulAppareil);
//     arrayToHtmlLi(ustensileArray, ulUstensiles);

//     return acc;
//   }, "");
//   ecouteLiDropdown(data);
//   return (recipesWrapper.innerHTML = html);
// }
// console.timeEnd("recipesMainBar");
