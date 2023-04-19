let counterValue = 0;
const counterValueEl = document.querySelector("#value");

const refs = {
  decreaseValueBtn: document.querySelector('[data-action="decrement"]'),
  increaseValueBtn: document.querySelector('[data-action="increment"]'),
};

refs.decreaseValueBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});

refs.increaseValueBtn.addEventListener("click", () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});
