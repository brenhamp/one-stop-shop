const minusSymbol = document.querySelector("#subtract");
const addSymbol = document.querySelector("#add");
const quantity = document.querySelector("#quantity");
const addCartButton = document.querySelector("#cart");
const quantityGroup = document.querySelector("#quantityManager");
var itemCount = 0;

console.log(itemCount);
quantityGroup.setAttribute("style", "display:none;");

function toggleAddCart() {
  addCartButton.setAttribute("style", "display:none;");
  itemCount++;
  quantity.innerHTML = itemCount;
  quantityGroup.setAttribute("style", "display:block");
}

function incrementItem() {
  itemCount++;
  console.log(itemCount);
  quantity.innerHTML = itemCount;
  if (itemCount === 0) {
    addCartButton.setAttribute("style", "display:block;");
  }
}

function decrementItem() {
  if (itemCount > 0) {
    itemCount--;
    console.log(itemCount);
  }
  quantity.innerHTML = itemCount;
  if (itemCount === 0) {
    addCartButton.setAttribute("style", "display:block;");
    quantityGroup.setAttribute("style", "display:none;");
  }
}

minusSymbol.addEventListener("click", decrementItem);
addSymbol.addEventListener("click", incrementItem);
addCartButton.addEventListener("click", toggleAddCart);
