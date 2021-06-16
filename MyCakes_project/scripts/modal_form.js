const but = document.querySelector(".dropdown_but");
const formWindow = document.querySelector("#window_connect");
const greyFon = document.querySelector("#grey");
const buttonClose = document.querySelector(".close_button");
function showForm() {
  formWindow.style.display = "block";
  greyFon.style.display = "block";
}
function closeForm() {
  formWindow.style.display = "none";
  greyFon.style.display = "none";
}
but.addEventListener("click", showForm);
buttonClose.addEventListener("click", closeForm);
