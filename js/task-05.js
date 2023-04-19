const input = document.querySelector("#name-input");
const nameSpan = document.querySelector("#name-output");

input.addEventListener("input", onInputText);

function onInputText(event) {
  const inputText = event.target.value.trim();
  nameSpan.textContent = inputText ? inputText : "Anonymous";
}

// function onInputText(event) {
//   const inputText = event.target.value.trim();
//   if (inputText) {
//     nameSpan.textContent = inputText;
//   } else {
//     nameSpan.textContent = "Anonymous";
//   };
// };
