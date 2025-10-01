const header = document.querySelector("header");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  header.classList.add("open-menu");
});
