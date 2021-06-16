const lights = document.querySelectorAll(".traffic-lighter_light");
const ACTIVE_CLASS_NAME = "active";

function toggleoffAll() {
  for (let i = 0; i < lights.length; i++) {
    const light = lights[i];
    light.classList.remove(ACTIVE_CLASS_NAME);
  }
}

for (let i = 0; i < lights.length; i++) {
  const light = lights[i];
  light.addEventListener("click", function () {
    toggleoffAll();
    light.classList.add(ACTIVE_CLASS_NAME);
  });
}
