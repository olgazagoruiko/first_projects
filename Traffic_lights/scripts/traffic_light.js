const redLight = document.querySelector(".red");
const greenLight = document.querySelector(".green");
const yellowLight = document.querySelector(".yellow");

function toggleRed() {
  redLight.classList.add("active");
  greenLight.classList.remove("active");
  yellowLight.classList.remove("active");
}
function toggleGreen() {
  redLight.classList.remove("active");
  greenLight.classList.add("active");
  yellowLight.classList.remove("active");
}
function toggleYellow() {
  redLight.classList.remove("active");
  greenLight.classList.remove("active");
  yellowLight.classList.add("active");
}
redLight.addEventListener("click", toggleRed);
greenLight.addEventListener("click", toggleGreen);
yellowLight.addEventListener("click", toggleYellow);
