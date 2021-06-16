//let popup = document.querySelector("#myPopup");
// else {
// let showMessage = document.createElement("div");
//showMessage.innerHTML = `Thank for submiting!`;
//showMessage.classList.add("showMessage");
//const roote = document.querySelector(".roote");
//roote.appendChild(showMessage);
//setTimeout(() => {
//showMessage.remove();
//}, 3000);
//}
//};

const butSub = document.querySelector("#butSubmit");
butSub.onclick = (event) => {
  event.preventDefault();
  const uname = document.querySelector("#name");
  const uemail = document.querySelector("#email");
  const textArea = document.querySelector("#area");
  if (allLetter(uname)) {
    if (ValidateEmail(uemail)) {
      if (allText(textArea)) {
        let showMessage = document.createElement("div");
        showMessage.innerHTML = `Thank for submiting!`;
        showMessage.classList.add("showMessage");
        const roote = document.querySelector(".roote");
        roote.appendChild(showMessage);
        setTimeout(() => {
          showMessage.remove();
        }, 3000);
      }
    }
  } else {
    return false;
  }
};
function allLetter(uname) {
  // let letters = "/^[A-Za-z]+$/";
  if (uname.value) {
    return true;
  } else {
    uname.style.borderBottom = "2px solid red";
    alert("Заповніть, будь ласка, поле!");
    uname.focus();
    return false;
  }
}

function ValidateEmail(uemail) {
  //var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (uemail.value) {
    return true;
  } else {
    uemail.style.borderBottom = "2px solid red";
    alert("Вкажіть, будь ласка email address!");
    uemail.focus();
    return false;
  }
}
function allText(textArea) {
  //let letterss = /^[0-9a-zA-Z]+$/;
  if (textArea.value) {
    return true;
  } else {
    textArea.style.borderBottom = "2px solid red";
    alert("Заповніть, будь ласка, поле!");
    textArea.focus();
    return false;
  }
}
