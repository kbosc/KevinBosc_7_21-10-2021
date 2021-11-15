function liIngredient(recipes) {
  let arrayIngredient = [];
  recipes.reduce((reducer, recipe) => {
    recipe.ingredients.reduce((reducer, ingredient) => {
      arrayIngredient.push(String([ingredient.ingredient.toLowerCase()]));
    });
  });
  arrayIngredients = [...new Set(arrayIngredient)];
  //   arrayIngredients.forEach((item) => {
  //     let li = document.createElement("li");
  //     ulIngredient.appendChild(li);

  //     li.innerHTML += item;
  //     // ulIngredient.innerHTML = `<li>${item}</li>`;
  //   });
  //   console.log(arrayIngredients);
  //   return arrayIngredients;

  for (let i = 0; i < arrayIngredients.length; i++) {
    // Create the list item:
    const item = document.createElement("li");

    // Set its contents:
    item.appendChild(document.createTextNode(arrayIngredients[i]));

    // Add it to the list:
    ulIngredient.appendChild(item);
  }
  return arrayIngredients;
}
