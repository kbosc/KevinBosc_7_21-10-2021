btnIngredient.addEventListener("keyup", () => {
  liIngredientFilter = document.querySelectorAll(
    ".dropdown__ingredient .block-links ul li"
  );
  //   si la valeur de l'input est suppérieur à 2 caractere, il compare les li avec
  //   la valeur de l'input, affiche ceux qui correspondent et cache les autres
  if (btnIngredient.value.length > 2) {
    liIngredientFilter.forEach((element) => {
      if (element.textContent !== btnIngredient.value) {
        element.style.display = "none";
      } else {
        element.style.display = "block";
      }
    });
  }
  //   si la valeur de l'input est inférieur à 2 caractere les li
  //   sont de nouveau affiché
  if (btnIngredient.value.length <= 2) {
    liIngredientFilter.forEach((element) => {
      element.style.display = "block";
    });
  }
});
btnAppareil.addEventListener("keyup", () => {
  liAppareilFilter = document.querySelectorAll(
    ".dropdown__appareil .block-links ul li"
  );
  //   si la valeur de l'input est suppérieur à 2 caractere, il compare les li avec
  //   la valeur de l'input, affiche ceux qui correspondent et cache les autres
  if (btnAppareil.value.length > 2) {
    liAppareilFilter.forEach((element) => {
      if (element.textContent !== btnAppareil.value) {
        element.style.display = "none";
      } else {
        element.style.display = "block";
      }
    });
  }
  //   si la valeur de l'input est inférieur à 2 caractere les li
  //   sont de nouveau affiché
  if (btnAppareil.value.length <= 2) {
    liAppareilFilter.forEach((element) => {
      element.style.display = "block";
    });
  }
});
btnUstensiles.addEventListener("keyup", () => {
  liUstensilesFilter = document.querySelectorAll(
    ".dropdown__ustensiles .block-links ul li"
  );
  //   si la valeur de l'input est suppérieur à 2 caractere, il compare les li avec
  //   la valeur de l'input, affiche ceux qui correspondent et cache les autres
  if (btnUstensiles.value.length > 2) {
    liUstensilesFilter.forEach((element) => {
      if (element.textContent !== btnUstensiles.value) {
        element.style.display = "none";
      } else {
        element.style.display = "block";
      }
    });
  }
  //   si la valeur de l'input est inférieur à 2 caractere les li
  //   sont de nouveau affiché
  if (btnUstensiles.value.length <= 2) {
    liUstensilesFilter.forEach((element) => {
      element.style.display = "block";
    });
  }
});

// liIngredientFilter = document.querySelectorAll(
//   ".dropdown__ingredient .block-links ul li"
// );
// function dropDodwnFilterByInput(btn, liIngredient) {
//   btn.addEventListener("keyup", () => {
//   si la valeur de l'input est suppérieur à 2 caractere, il compare les li avec
//   la valeur de l'input, affiche ceux qui correspondent et cache les autres
//     if (btn.value.length > 2) {
//       liIngredient.forEach((element) => {
//         if (element.textContent !== btn.value) {
//           element.style.display = "none";
//           // element.remove();
//         } else {
//           element.style.display = "block";
//         }
//       });
//     }
//   si la valeur de l'input est inférieur à 2 caractere les li
//   sont de nouveau affiché
//     if (btn.value.length <= 2) {
//       liIngredient.forEach((element) => {
//         element.style.display = "block";
//       });
//     }
//   });
// }
// dropDodwnFilterByInput(btnIngredient, liIngredientFilter);
