const btn1 = document.querySelector(".light_but_red");
const btn2 = document.querySelector(".light_but_green");
const btn3 = document.querySelector(".light_but_yellow");

function toggleRed() {
  this.style.background = "red";
}
function toggleYellow() {
  this.style.background = "yellow";
}
function toggleGreen() {
  this.style.background = "green";
}

btn1.addEventListener("click", toggleRed);
btn2.addEventListener("click", toggleYellow);
btn3.addEventListener("click", toggleGreen);
