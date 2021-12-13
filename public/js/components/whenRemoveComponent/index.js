function whenRemoveComponent(data) {
  const components = document.querySelectorAll(".component");
  const recipes = document.querySelectorAll(".recipes");
  ulIngredient.innerHTML = "";
  ulAppareil.innerHTML = "";
  ulUstensiles.innerHTML = "";

  let valuesComponents = [];
  components.forEach((component) => {
    const componentText = component.childNodes[1].textContent
      .toLowerCase()
      .replace(/\s/g, "");
    valuesComponents.push(componentText);
  });

  recipes.forEach((card) => {
    childOfRecipes = card.querySelectorAll(".recipes-ingredient");
    let valuesRecipes = [];
    childOfRecipes.forEach((cardIngredient) => {
      valuesRecipes.push(
        cardIngredient.textContent.toLowerCase().replace(/\s/g, "")
      );
    });

    NameChildOfRecipes = card.querySelector(".recipes__resume__up__name");
    data.recipes.forEach((e) => {
      if (
        NameChildOfRecipes.textContent.toLowerCase().replace(/\s/g, "") ===
        e.name.toLowerCase().replace(/\s/g, "")
      ) {
        valuesRecipes.push(e.appliance.toLowerCase().replace(/\s/g, ""));
        valuesRecipes = valuesRecipes.concat(
          e.ustensils.map((name) => name.toLowerCase().replace(/\s/g, ""))
        );
      }
    });

    let matchAllValues = valuesComponents.filter(
      (value) => !valuesRecipes.includes(value)
    );

    if (matchAllValues.length) {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  });
}
