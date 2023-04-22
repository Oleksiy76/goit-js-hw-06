const refs = {
  input: document.getElementById("font-size-control"),
  span: document.getElementById("text"),
};

refs.input.addEventListener("input", changeFontSize);

refs.span.style.fontSize = `${refs.input.value}px`;

function changeFontSize(event) {
  refs.span.style.fontSize = `${event.currentTarget.value}px`;
}
