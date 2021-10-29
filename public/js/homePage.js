const recipesWrapper = document.querySelector("main");

document.addEventListener(onFetchData.name, (e) => {
  const { data } = e;
  console.log(data);
  recipesWrapper.innerHTML = RecipesCardsFactory(data.recipes);
});
