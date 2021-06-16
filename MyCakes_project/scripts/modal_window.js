const btn = document.querySelector("#card");
const modalWindow = document.querySelector("#window");
const greyFon = document.querySelector("#grey");
const btnClose = document.querySelector(".close");
function showWindow() {
  modalWindow.style.display = "block";
  greyFon.style.display = "block";
}
function CloseWindow() {
  modalWindow.style.display = "none";
  greyFon.style.display = "none";
}
btn.addEventListener("click", showWindow);
btnClose.addEventListener("click", CloseWindow);
