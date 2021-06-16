function getRandomRgb() {
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = (num >> 8) & 255;
  let b = num & 255;
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
getRandomRgb();

let count = parseInt(prompt("Введіть кількість лампочок"));
const light = document.querySelector(".light");
function lighterFactory(count) {
  for (let i = 0; i < count; i++) {
    const lightChild = document.createElement("div");
    lightChild.classList.add("light_bulb");
    let ranRgb = getRandomRgb();
    lightChild.style.backgroundColor = ranRgb;
    light.appendChild(lightChild);
  }
}

lighterFactory(count);
