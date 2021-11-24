const componentsWrapper = document.querySelector(".components-wrapper");
function addComponents(item) {
  // creation d'une div et défini ou injecter les components
  const div = document.createElement("div");
  div.classList.add("component");
  componentsWrapper.appendChild(div);
  let itemParentClass = item.parentNode.parentNode.parentNode.classList;

  //   ajoute une class aux components en fonction du parent de la liste ou l'on clique
  switch (true) {
    case itemParentClass.contains("dropdown__ingredient"):
      div.classList.add("component-ingredient");
      btnIngredient.value = "";
      //////////////TEST/////////////////

      const recipes = document.querySelectorAll(".recipes");
      // itération sur toutes les cards de recettes
      recipes.forEach((cardParent) => {
        let contentComponent = false;
        childOfRecipes = cardParent.querySelectorAll(".recipes-ingredient");
        console.log(childOfRecipes);
        // itération sur les ingrédients de la card
        childOfRecipes.forEach((cardChild) => {
          // vérifier qu'au moins 1 des cardChild (ingrédient) correspond aux component cliquer
          if (item.textContent == cardChild.innerText) {
            contentComponent = true;
          }
        });
        if (contentComponent === false) {
          cardParent.style.display = "none";
        }
      });
      // const ingredientCards = document.querySelectorAll(".recipes-ingredient");
      // ingredientCards.forEach((e) => {
      //   //   // const componentSelected = e.innerText;
      //   const cardParent =
      //     e.parentNode.parentNode.parentNode.parentNode.parentNode;
      //   if (item.textContent !== e.innerText) {
      //     cardParent.style.display = "none";
      //     //     // cardParent.remove();
      //     //     // console.log(cardParent.target);
      //   } else {
      //     cardParent.style.display = "block";
      //   }
      // });
      /////////////////////////
      break;
    case itemParentClass.contains("dropdown__appareil"):
      div.classList.add("component-appareil");
      break;
    case itemParentClass.contains("dropdown__ustensiles"):
      div.classList.add("component-ustensiles");
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
  // item.style.display = "none";
  item.remove();
  ///////////////
}

///////////////
function removeComponents(item) {
  let initElem = item.target;
  //   suppression du component et creation d'un li dans le dropdown
  //   correspondant en fonction de la class de la target
  let elemParentClass = initElem.parentNode.classList;
  if (initElem.className == "cross-item") {
    const itemUl = document.createElement("li");
    //  récupération du text component
    itemUl.appendChild(
      document.createTextNode(item.target.previousElementSibling.textContent)
    );
    // création du li dans sa dropdown en fonction de la class du parent target
    switch (true) {
      case elemParentClass.contains("component-ingredient"):
        // console.log("ingredient");
        ulIngredient.appendChild(itemUl);
        break;
      case elemParentClass.contains("component-appareil"):
        // console.log("appareil");
        ulAppareil.appendChild(itemUl);
        break;
      case elemParentClass.contains("component-ustensiles"):
        // console.log("ustensiles");
        ulUstensiles.appendChild(itemUl);
        break;
      default:
        console.log("component inconnu");
    }
    //   suppression du component
    item.target.parentNode.remove();
    itemUl.addEventListener("click", function () {
      addComponents(itemUl);
    });
  }
}
