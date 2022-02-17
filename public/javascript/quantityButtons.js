const minusSymbol = document.querySelector("#subtract");
const addSymbol = document.querySelector("#add");
const quantity = document.querySelector("#quantity");
const addCartButton = document.querySelector("#cart");
const quantityGroup = document.querySelector("#quantityManager");
const cartTotal = document.querySelector("#cartTotal");
const cartItems = document.querySelector("#cartCount");
var itemCount = 0;

quantityGroup.setAttribute("style", "display:none;");

function toggleAddCart() {
  addCartButton.setAttribute("style", "display:none;");
  itemCount++;
  quantity.innerHTML = itemCount;
  quantityGroup.setAttribute("style", "display:block");
  updateCartItemCount();
}

function incrementItem() {
  itemCount++;
  quantity.innerHTML = itemCount;
  if (itemCount === 0) {
    addCartButton.setAttribute("style", "display:block;");
  }
  updateCartItemCount();
}

function decrementItem() {
  if (itemCount > 0) {
    itemCount--;
  }
  quantity.innerHTML = itemCount;
  if (itemCount === 0) {
    addCartButton.setAttribute("style", "display:block;");
    quantityGroup.setAttribute("style", "display:none;");
  }
  updateCartItemCount();
}

function getItemCount() {
  return itemCount;
}

function updateCartItemCount() {
  var cartItemNum = itemCount;
  cartItems.innerHTML = cartItemNum;
}

function updateCartTotal() {}

minusSymbol.addEventListener("click", decrementItem);
addSymbol.addEventListener("click", incrementItem);
addCartButton.addEventListener("click", toggleAddCart);
