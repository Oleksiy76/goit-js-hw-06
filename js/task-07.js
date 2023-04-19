const refs = {
  input: document.getElementById("font-size-control"),
  span: document.getElementById("text"),
};

refs.input.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  refs.span.style.fontSize = `${event.currentTarget.value}px`;
}
