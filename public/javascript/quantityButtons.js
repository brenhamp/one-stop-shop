const minusSymbol = document.getElementsByClassName("subtract");
const addSymbol = document.getElementsByClassName("add");
const quantity = document.getElementsByClassName("quantity");
const addCartButton = document.getElementsByClassName("cart");
const quantityGroup = document.getElementsByClassName("btn-group");
const cartTotal = document.querySelector("#cartTotal");
const cartItems = document.querySelector("#cartCount");
var cartCount = 0;

for (i = 0; i < quantityGroup.length; i++) {
  quantityGroup[i].setAttribute("style", "display:none;");
}
for (i = 0; i < quantity.length; i++) {
  var itemCount = 0;
  quantity[i].innerHTML = itemCount;
}
function addButtonListeners() {
  for (i = 0; i < minusSymbol.length; i++) {
    minusSymbol[i].addEventListener("click", decrementItem);
  }
  for (i = 0; i < addSymbol.length; i++) {
    addSymbol[i].addEventListener("click", incrementItem);
  }
  for (i = 0; i < addCartButton.length; i++) {
    addCartButton[i].addEventListener("click", toggleAddCart);
  }
}

function toggleAddCart(event) {
  itemCount = 0;
  var button = event.target;
  button.setAttribute("style", "display:none;");
  var display = button.parentElement.parentElement.parentElement;
  var displayCount = display.getElementsByClassName("quantity");
  var buttonGroup = display.getElementsByClassName("btn-group");
  itemCount++;
  cartCount++;
  for (i = 0; i < buttonGroup.length; i++) {
    buttonGroup[i].setAttribute("style", "display:block;");
  }
  for (i = 0; i < displayCount.length; i++) {
    displayCount[i].innerHTML = itemCount;
  }
  updateCartItemCount();
}

function incrementItem(event) {
  var button = event.target;
  itemCount++;
  cartCount++;
  var display = button.parentElement.parentElement.parentElement;
  var displayCount = display.getElementsByClassName("quantity");
  var addCart = display.getElementsByClassName("cart");

  if (itemCount === 0) {
    for (i = 0; i < addCart.length; i++) {
      addCart[i].setAttribute("style", "display:block;");
    }
  }
  for (i = 0; i < displayCount.length; i++) {
    displayCount[i].innerHTML = itemCount;
  }
  updateCartItemCount();
}

function decrementItem(event) {
  var button = event.target;
  var display = button.parentElement.parentElement.parentElement;
  var displayCount = display.getElementsByClassName("quantity");
  var addCart = display.getElementsByClassName("cart");
  var buttonGroup = display.getElementsByClassName("btn-group");

  if (itemCount > 0) {
    for (i = 0; i < addCart.length; i++) {
      addCart[i].setAttribute("style", "display:none;");
    }
    itemCount--;
    cartCount--;
  }
  if (itemCount === 0) {
    for (i = 0; i < addCart.length; i++) {
      addCart[i].setAttribute("style", "display:block;");
    }
    for (i = 0; i < buttonGroup.length; i++) {
      buttonGroup[i].setAttribute("style", "display:none;");
    }
  }
  for (i = 0; i < displayCount.length; i++) {
    displayCount[i].innerHTML = itemCount;
  }
  updateCartItemCount();
}

function getItemCount() {
  return itemCount;
}

function updateCartItemCount() {
  var cartItemNum = cartCount;
  cartItems.innerHTML = cartItemNum;
}

function updateCartTotal() {}

addButtonListeners();
