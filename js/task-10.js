function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  box: document.getElementById("boxes"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

let size = 30;
const elements = [];

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    size += 10;

    elements.push(divEl);
  }
  refs.box.append(...elements);
}

refs.createBtn.addEventListener("click", () => {
  createBoxes(3);
});

function destroyBoxes() {
  refs.box.innerHTML = "";
}

refs.destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
