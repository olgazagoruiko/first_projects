const userEmail = document.querySelector("#userEmail");
const butSub = document.querySelector("#butSubscribe");
let popup = document.querySelector("#myPopup");
butSub.onclick = (event) => {
  event.preventDefault();
  if (!userEmail.value) {
    userEmail.style.border = "2px solid red";
    popup.classList.toggle("show");
    setTimeout(() => {
      popup.remove();
    }, 2000);
  } else {
    let showText = document.createElement("div");
    showText.innerHTML = `Thank for submiting!`;
    showText.classList.add("showText");
    const root = document.querySelector(".root");
    root.appendChild(showText);
    setTimeout(() => {
      showText.remove();
    }, 3000);
  }
};
