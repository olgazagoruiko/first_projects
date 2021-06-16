const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomColor = () => {
  return `rgb(
        ${getRandomNumber(255)},
        ${getRandomNumber(255)},
        ${getRandomNumber(255)})
    `;
};
const normalizeTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

class Clock {
  constructor(mountPoint = document.querySelector("body")) {
    this.mountPoint = mountPoint;
    this.activeMode = 0;
  }
  init() {
    this.render();
    this.attachEvents();
    this.setColors();
    this.renderTime();
    //this.getFull();
    this.startTime();
  }

  render() {
    this.container = document.createElement("div");
    this.content = document.createElement("h1");

    this.content.textContent = "00/00/0000";
    this.container.classList.add("clock");
    this.content.classList.add("clock_content");

    this.container.appendChild(this.content);
    this.mountPoint.appendChild(this.container);
  }
  setColors() {
    const color = getRandomColor();
    this.container.style.background = color;
    this.content.style.color = color;
  }
  renderTime() {
    let content;
    switch (this.activeMode) {
      case 1:
        content = this.getShort();
        break;
      default:
        content = this.getFull();
    }
    this.content.textContent = content;
  }
  getFull() {
    const currentDate = new Date();
    const h = normalizeTime(currentDate.getHours());
    const m = normalizeTime(currentDate.getMinutes());
    const s = normalizeTime(currentDate.getSeconds());
    return `${h}:${m}:${s}`;
  }
  getShort() {
    const currentDate = new Date();
    const h = normalizeTime(currentDate.getHours());
    const m = normalizeTime(currentDate.getMinutes());

    return `${h}:${m}`;
  }
  startTime() {
    setInterval(() => this.renderTime(), 500);
  }
  attachEvents() {
    this.container.addEventListener("click", () => {
      this.switchMode();
    });
  }
  increaseMode() {
    if (this.activeMode + 1 < 2) {
      this.activeMode++;
    } else {
      this.activeMode = 0;
    }
    console.log(this.activeMode);
  }

  switchMode() {
    this.increaseMode();
    this.renderTime();
    this.setColors();
  }
}
