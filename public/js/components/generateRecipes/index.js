// function RecipesCardsFactory(recipes) {
//   const html = recipes.reduce((acc, recipe) => {
//     const { ingredients } = recipe; // tableaux des tags des photographes
//     acc += `
//       <div class="recipes">
//       <div class="recipes__img"></div>
//       <div class="recipes__resume">
//         <div class="recipes__resume__up">
//           <h2 class="recipes__resume__up__name">${recipe.name}</h2>
//           <p>
//             <img
//               src="./img/svg/clock.svg"
//               alt="horloge pour définir le temps de préparation"
//             />
//             <span class="recipes__resume__up__time"> ${recipe.time} </span>min
//           </p>
//         </div>
//         <div class="recipes__resume__bottom">
//           <ul class="recipes__resume__bottom__ingredients">

//           ${ingredients
//             .map((element) => {
//               return `<li><span class="recipes-ingredient">${element}</span></li>`;
//             })
//             .join("")}
//           </ul>
//           <div class="recipes__resume__bottom__description">
//             <p>
//             ${recipe.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>`;
//     console.log(ingredients);
//     console.log(Object.values(ingredients));
//     return acc;
//   }, "");
//   return html;
// }
function RecipesCardsFactory(recipes) {
  const html = recipes.reduce((acc, recipe) => {
    const ingredients = recipe.ingredients.reduce((acc, ingredient) => {
      acc += `
        <li>
            <span class="recipes-ingredient">${ingredient.ingredient}</span>:
            <span class="recipes-quantity">${ingredient.quantity}</span>
            <span class="recipes-unit">${ingredient.unit}</span>
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
    console.log(ingredients);
    console.log(Object.values(ingredients));
    return acc;
  }, "");
  return html;
}

//   <div class="recipes">
//         <div class="recipes__img"></div>
//         <div class="recipes__resume">
//           <div class="recipes__resume__up">
//             <h2 class="recipes__resume__up__name">${recipe.name}</h2>
//             <p>
//               <img
//                 src="./img/svg/clock.svg"
//                 alt="horloge pour définir le temps de préparation"
//               />
//               <span class="recipes__resume__up__time"> ${recipe.time} </span>min
//             </p>
//           </div>
//           <div class="recipes__resume__bottom">
//             <ul class="recipes__resume__bottom__ingredients">
//             <li>
//     <span class="recipes-ingredient">Lait de coco</span>:
//     <span class="recipes-quantity">400</span>
//     <span class="recipes-unit">ml</span>
// </li>
//             </ul>
//             <div class="recipes__resume__bottom__description">
//               <p>
//               ${recipe.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
