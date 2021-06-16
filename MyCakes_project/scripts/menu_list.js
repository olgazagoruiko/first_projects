const toggler = document.querySelector(".dropdown_toggle");
const menu = document.querySelector(".dropdown_list");
const menuButtons = document.querySelectorAll(".list-item > button");

for (let i = 0; i < menuButtons.length; i++) {
  const btn = menuButtons[i]; //
  console.log(btn);
  btn.addEventListener("click", function () {
    menu.classList.remove("active");
    const textToInsert = btn.innerHTML;
    console.log(textToInsert);
    toggler.innerHTML = textToInsert;
  });
}

function toggle() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
}

toggler.addEventListener("click", toggle);
