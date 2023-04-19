const validInput = document.getElementById("validation-input");
const numberSymbols = validInput.getAttribute("data-length");

validInput.addEventListener("blur", (event) => {
  const numberValues = event.target.value.trim().length;

  if (numberValues === Number(numberSymbols)) {
    validInput.classList.add("valid");
    validInput.classList.remove("invalid");
  } else {
    validInput.classList.add("invalid");
    validInput.classList.remove("valid");
  }
});
