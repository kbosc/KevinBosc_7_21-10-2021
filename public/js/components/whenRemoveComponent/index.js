function whenRemoveComponent(data) {
  const components = document.querySelectorAll(".component");
  const recipes = document.querySelectorAll(".recipes");
  // Parcourir (foreach) la liste des components, variable inner text du component
  //  variable la classe du parent, condition en fonction de la classe parent (switch/case ?),
  //  itérer dans la data en fonction de la class, itérer dans les recipes,
  //  Si (Condition) variable inner text component == element de data on display block
  // la recipes soit l'élément recipes.

  let valuesComponents = [];
  components.forEach((component) => {
    const componentText = component.childNodes[1].textContent
      .toLowerCase()
      .replace(/\s/g, "");
    valuesComponents.push(componentText);
  });

  /* chantier */

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
