const dropdown = document.querySelector(".dropdown__ingredient");
const blockLinks = document.querySelector(".dropdown__ingredient .block-links");
// const blockLinks = document.querySelectorAll(".block-links");
const btnIngredient = document.querySelector(".btn-ingredient");
// const liItems = document.querySelectorAll(".dropdown li")
const liIngredient = document.querySelectorAll(".dropdown__ingredient li");

let toggleIndex;

btnIngredient.addEventListener("click", toggleDropDown);
function toggleDropDown() {
  const icon = this.querySelector("img");
  if (!toggleIndex) {
    blockLinks.style.display = "block";
    blockLinks.style.height = `${blockLinks.scrollHeight}px`;
    toggleIndex = true;
    icon.classList.toggle("rotate");
    return;
  }
  blockLinks.style.height = 0;
  toggleIndex = false;
  icon.classList.toggle("rotate");
}
////////////////////////////////////////////////
// Ferme la dropdown si clique sur un li
// liIngredient.forEach((li) => li.addEventListener("click", toggleDropDown));
/////////////////////////////////////////////
// Toggle chevron dropdown
// btnIngredient.addEventListener("click", function () {
//   const icon = this.querySelector("img");
//   icon.classList.toggle("rotate");
// });
