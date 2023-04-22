const refs = {
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", onChangeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeBodyColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  refs.span.textContent = randomColor;
}
