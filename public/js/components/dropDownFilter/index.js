function dropDownFilter(btn, list) {
  //   si la valeur de l'input est suppérieur à 2 caractere, il compare les li avec
  //   la valeur de l'input, affiche ceux qui correspondent et cache les autres
  if (btn.value.length > 2) {
    list.forEach((element) => {
      if (element.textContent.match(".*" + btn.value.toLowerCase() + ".*")) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  }
  //   si la valeur de l'input est inférieur à 2 caractere les li
  //   sont de nouveau affiché
  if (btn.value.length <= 2) {
    list.forEach((element) => {
      element.style.display = "block";
    });
  }
}
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
