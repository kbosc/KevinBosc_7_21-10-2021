function ecouteLiDropdown(recipes) {
  data = recipes;
  const liIngredient = document.querySelectorAll(
    ".dropdown__ingredient .block-links ul li"
  );
  liIngredient.forEach(function (item) {
    item.addEventListener("click", function () {
      addComponents(item, data);
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
  btnIngredient.addEventListener("keyup", () => {
    liIngredientFilter = document.querySelectorAll(
      ".dropdown__ingredient .block-links ul li"
    );
    dropDownFilter(btnIngredient, liIngredientFilter);
  });
  btnAppareil.addEventListener("keyup", () => {
    liAppareilFilter = document.querySelectorAll(
      ".dropdown__appareil .block-links ul li"
    );
    dropDownFilter(btnAppareil, liAppareilFilter);
  });
  btnUstensiles.addEventListener("keyup", () => {
    liUstensilesFilter = document.querySelectorAll(
      ".dropdown__ustensiles .block-links ul li"
    );
    dropDownFilter(btnUstensiles, liUstensilesFilter);
  });
}
function addComponents(item, data) {
  // creation d'une div et défini ou injecter les components
  const div = document.createElement("div");
  div.classList.add("component");
  componentsWrapper.appendChild(div);
  let itemParentClass = item.parentNode.parentNode.parentNode.classList;
  const recipes = document.querySelectorAll(".recipes");

  //   ajoute une class aux components en fonction du parent de la liste ou l'on clique
  switch (true) {
    case itemParentClass.contains("dropdown__ingredient"):
      div.classList.add("component-ingredient");
      btnIngredient.value = "";
      // ***Filter**** Itération sur toutes les cards de recettes pour filtrer
      recipes.forEach((cardParent) => {
        let contentComponent = false;
        childOfRecipes = cardParent.querySelectorAll(".recipes-ingredient");
        // itération sur les ingrédients de la card
        childOfRecipes.forEach((cardChild) => {
          // vérifier qu'au moins 1 des cardChild (ingrédient) correspond aux component cliquer
          if (
            item.textContent.toLowerCase().replace(/\s/g, "") ===
            cardChild.innerText.toLowerCase().replace(/\s/g, "")
          ) {
            contentComponent = true;
          }
        });
        if (contentComponent === false) {
          cardParent.style.display = "none";
        }
      });
      break;
    case itemParentClass.contains("dropdown__appareil"):
      div.classList.add("component-appareil");
      recipes.forEach((cardParent) => {
        let contentComponent = false;
        NameChildOfRecipes = cardParent.querySelector(
          ".recipes__resume__up__name"
        );
        data.forEach((e) => {
          if (
            NameChildOfRecipes.textContent.toLowerCase().replace(/\s/g, "") ===
            e.name.toLowerCase().replace(/\s/g, "")
          ) {
            if (
              e.appliance.toLowerCase().replace(/\s/g, "") ===
              item.textContent.toLowerCase().replace(/\s/g, "")
            ) {
              contentComponent = true;
            }
          }
        });
        if (contentComponent === false) {
          cardParent.style.display = "none";
        }
      });
      break;
    case itemParentClass.contains("dropdown__ustensiles"):
      div.classList.add("component-ustensiles");
      recipes.forEach((cardParent) => {
        let contentComponent = false;
        NameChildOfRecipes = cardParent.querySelector(
          ".recipes__resume__up__name"
        );
        data.forEach((e) => {
          if (
            NameChildOfRecipes.textContent.toLowerCase().replace(/\s/g, "") ===
            e.name.toLowerCase().replace(/\s/g, "")
          ) {
            dataUstensils = e.ustensils;
            dataUstensils.forEach((e) => {
              if (
                e.toLowerCase().replace(/\s/g, "") ===
                item.textContent.toLowerCase().replace(/\s/g, "")
              ) {
                contentComponent = true;
              }
            });
          }
        });
        if (contentComponent === false) {
          cardParent.style.display = "none";
        }
      });
      break;
    default:
      console.log("li inconnu");
  }
  //   injecte l'html component en fonction de l'élément cliquer
  div.innerHTML = `
  <p class="component__name">${item.textContent}</p>
  <img
  class="cross-item"
  src="./img/svg/cross.svg"
  alt=""
  aria-label="cross that closes the selection"
  />
  `;
  // supprime l'élément cliquer de la dropdown
  // item.remove();
  resetLiDropDown(data, item);
}

///////////////
function removeComponents(item, data) {
  let initElem = item.target;
  //   suppression du component et creation d'un li dans le dropdown
  //   correspondant en fonction de la class de la target
  let elemParentClass = initElem.parentNode.classList;
  if (initElem.className == "cross-item") {
    const itemLI = document.createElement("li");
    //  récupération du text component
    itemLI.appendChild(
      document.createTextNode(item.target.previousElementSibling.textContent)
    );
    // création du li dans sa dropdown en fonction de la class du parent target
    item.target.parentNode.remove();
    switch (true) {
      case elemParentClass.contains("component-ingredient"):
        whenRemoveComponent(data);
        // console.log("ingredient");
        ulIngredient.appendChild(itemLI);
        break;
      case elemParentClass.contains("component-appareil"):
        whenRemoveComponent(data);
        // console.log("appareil");
        ulAppareil.appendChild(itemLI);
        break;
      case elemParentClass.contains("component-ustensiles"):
        whenRemoveComponent(data);
        // console.log("ustensiles");
        ulUstensiles.appendChild(itemLI);
        break;
      default:
        console.log("component inconnu");
    }
    //   suppression du component
    itemLI.addEventListener("click", function () {
      addComponents(itemLI, data.recipes);
    });
    if (componentsWrapper.childNodes.length === 0) {
      recipesWrapper.innerHTML = recipesMainBar(data.recipes);
    }
  }
}
