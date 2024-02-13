export default function startDropDownMenu() {
  const menu = document.querySelector(".modal");
  const listaUl = document.querySelector("[data-ul]");

  menu.addEventListener("click", () => {
    listaUl.classList.toggle("active");
    menu.classList.toggle("active");
    console.log(listaUl);
  });
}
