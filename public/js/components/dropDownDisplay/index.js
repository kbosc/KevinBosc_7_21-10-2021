const btnIngredient = document.querySelectorAll(".dpd button");
btnIngredient.forEach((btn) => btn.addEventListener("click", toggleDropDown));

function toggleDropDown() {
  const icon = this.querySelector("img");
  if (this.className == "active") {
    btnIngredient.forEach((btn) => {
      btn.classList.add("active");
      this.nextElementSibling.classList.remove("active");

      if (btn.className == "active") {
        btn.nextElementSibling.style.height = 0;
        // btn.nextElementSibling.style.margin = "- 0.1rem";
        this.parentNode.classList.remove("dropdown-open");
        // console.log("condition dans la premiere condition");
        if (btn.children[1].className == "rotate") {
          btn.children[1].classList.toggle("rotate");
          // btn.parentNode.style.width = "20%";
          btn.parentNode.classList.remove("dropdown-open");
          // console.log("conditionCeption");
        }
      }
    });
    // console.log("premiere condition");
    this.parentNode.classList.add("dropdown-open");
    // this.nextElementSibling.style.margin = "-0.2rem 0";
    // this.nextElementSibling.style.display = "block";
    // this.parentNode.style.width = "40%";
    this.nextElementSibling.style.height = "30%";
    // this.nextElementSibling.style.height = `${this.nextElementSibling.scrollHeight}px`;
    icon.classList.toggle("rotate");

    this.classList.remove("active");
    return;
  }
  // console.log("else premiere condition");
  this.nextElementSibling.style.height = 0;
  // this.parentNode.style.width = "20%";
  this.parentNode.classList.remove("dropdown-open");
  icon.classList.toggle("rotate");
  this.classList.add("active");
}
