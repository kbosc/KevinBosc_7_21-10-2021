const recipesWrapper = document.querySelector("main");
const valueMainBar = document.querySelector("nav input");
// const dropDownIngredient = document.querySelector("#selections-ingredient");
const dropDownAppareil = document.querySelector("#selections-appareil");
const dropDownUstensiles = document.querySelector("#selections-ustensiles");

document.addEventListener(onFetchData.name, (e) => {
  const { data } = e;
  // console.log(data);
  recipesWrapper.innerHTML = recipesCardsFactory(data.recipes);
  valueMainBar.addEventListener("keyup", () => {
    if (valueMainBar.value.length > 2) {
      recipesWrapper.innerHTML = recipesMainBar(data.recipes);
    }
    if (valueMainBar.value.length <= 2) {
      recipesWrapper.innerHTML = recipesCardsFactory(data.recipes);
    }
  });
  liIngredientGenerator(data.recipes);
  liUstensilesGenerator(data.recipes);
  liAppareilGenerator(data.recipes);
  const liIngredient = document.querySelectorAll(
    ".dropdown__ingredient .block-links ul li"
  );
  liIngredient.forEach(function (item) {
    item.addEventListener("click", function () {
      addComponents(item);
    });
  });
  //////////////////////////////////////////////
  const componentsItems = document.querySelectorAll(
    ".components-wrapper .component"
  );
  // componentsItems.forEach(function (item) {
  //   item.addEventListener("click", function () {
  //     removeComponents(item);
  //   });
  // });
  // componentsWrapper.addEventListener("click", function (event) {
  //   console.log(event);
  //   // Remove the element that triggered the event in the first place
  //   // componentsWrapper.removeChild(event.target);
  //   componentsItems.forEach(function (item) {
  //     console.log(item);
  //     item.addEventListener("click", function (item) {
  //       // removeComponents(item);
  //       console.log(item);
  //     });
  //   });
  // });
  componentsWrapper.addEventListener("click", function (item) {
    let initElem = item.target;
    if (initElem.className == "cross-item") {
      console.log(item.target.parentNode);
      item.target.parentNode.remove();
    }
  });
});
const componentsWrapper = document.querySelector(".components-wrapper");
function addComponents(item) {
  const div = document.createElement("div");
  componentsWrapper.appendChild(div);
  div.classList.add("component");
  div.innerHTML = `
     <p class="component__name">${item.textContent}</p>
     <img
      class="cross-item"
      src="./img/svg/cross.svg"
      alt=""
      aria-label="cross that closes the selection"
     />
   `;
  item.remove();
  item.style.display == "none";
  console.log(item);
}

// function removeComponents(item) {
//   console.log(item);
//   // item.target.style.visibility = "hidden";
// }
