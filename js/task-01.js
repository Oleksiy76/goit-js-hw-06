const listItems = document.querySelectorAll(".item");

console.log("Number of categories:", listItems.length);

listItems.forEach((item) => {
  const category = item.firstElementChild;
  console.log("Category:", category.textContent);

  const elements = item.lastElementChild.children.length;
  console.log("Elements:", elements);
});
