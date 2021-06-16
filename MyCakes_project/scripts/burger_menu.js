(() => {
  const menuButton = document.querySelector(".menu_button");
  const menuList = document.querySelector(".menu_list");
  menuButton.addEventListener("click", () => {
    let expanded =
      menuButton.getAttribute("aria-expanded") === "true" || "false";
    menuButton.setAttribute("aria-expanded", !expanded);
    menuButton.classList.toggle("menu_button--open");
    menuList.classList.toggle("menu_list--open");
  });
})();
