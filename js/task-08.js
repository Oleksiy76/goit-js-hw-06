const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const userEmail = form.elements.email.value;
  const userPassword = form.elements.password.value;
  if (userEmail === "" || userPassword === "") {
    alert("Всі поля повинні бути заповнені!");
  }

  const elements = {
    username: userEmail,
    value: userPassword,
  };

  console.log(elements);

  form.reset();
}
