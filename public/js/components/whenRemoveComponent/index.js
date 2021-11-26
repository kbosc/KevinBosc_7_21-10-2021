function whenRemoveComponent(item, data) {
  const initElem = item.target;
  const elemParentClassOfInit = initElem.parentNode.classList;
  const textElemSiblingOfInit = initElem.previousElementSibling;
  const components = document.querySelectorAll(".component");
  const recipes = document.querySelectorAll(".recipes");
  // Parcourir (foreach) la liste des components, variable inner text du component
  //  variable la classe du parent, condition en fonction de la classe parent (switch/case ?),
  //  itérer dans la data en fonction de la class, itérer dans les recipes,
  //  Si (Condition) variable inner text component == element de data on display block
  // la recipes soit l'élément recipes.
  components.forEach((e) => {
    const componentText = e.childNodes[1].textContent;
    const componentParentClass = e.classList;
    const itemIL = document.createElement("li");
    itemIL.appendChild(
      document.createTextNode(item.target.previousElementSibling.textContent)
    );
    switch (true) {
      case componentParentClass.contains("component-ingredient"):
        // Condition, si AU MOIN un ingrédient dans les recettes === componentText
        // Afficher la recette
        recipes.forEach((card) => {
          let contentComponent = false;
          childOfRecipes = card.querySelectorAll(".recipes-ingredient");
          childOfRecipes.forEach((cardIngredient) => {
            if (
              cardIngredient.textContent.toLowerCase().replace(/\s/g, "") ===
              componentText.toLowerCase().replace(/\s/g, "")
            ) {
              console.log("c'est égal");
              contentComponent = true;
            }
            console.log("c'est pas égale");
          });
          if (contentComponent === true) {
            card.style.display = "block";
          }
        });
        ulIngredient.appendChild(itemIL);
        break;
      case componentParentClass.contains("component-appareil"):
        // console.log("appareil");
        ulAppareil.appendChild(itemIL);
        break;
      case componentParentClass.contains("component-ustensiles"):
        // console.log("ustensiles");
        ulUstensiles.appendChild(itemIL);
        break;
      default:
        console.log("component inconnu");
    }
    // console.log(textElemSiblingOfInit.textContent.toLowerCase().replace(/\s/g, ""));
  });
}
