const products = [
  {
    name: "CA Pro Classic Unisex Sneakers",
    price: 6399,
    org_price: 7999,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380190/54/sv01/fnd/IND/fmt/png/CA-Pro-Classic-Unisex-Sneakers",
    color: "green",
    type: "shoe",
  },
  {
    name: "Divecat V2 Lite Cat Unisex Slides",
    price: 1399,
    org_price: 1999,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/386713/03/sv01/fnd/IND/fmt/png/Divecat-V2-Lite-Cat-Unisex-Slides",
    color: "navy blue",
    type: "slider",
  },
  {
    name: "PUMA x one8 22 FH Rubber Unisex Cricket Shoes",
    price: 4869,
    org_price: 6499,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/106713/04/sv01/fnd/IND/fmt/png/PUMA-x-one8-22-FH-Rubber-Unisex-Cricket-Shoes",
    color: "orange",
    type: "shoe",
  },
  {
    name: "Pacer Future Unisex Sneakers",
    price: 3849,
    org_price: 6999,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/380367/01/sv01/fnd/IND/fmt/png/Pacer-Future-Unisex-Sneakers",
    color: "black",
    type: "shoe",
  },
  {
    name: "Zeal Men's Sandals",
    price: 2249,
    org_price: 2999,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/381396/01/sv01/fnd/IND/fmt/png/Zeal-Men's-Sandals",
    color: "blue",
    type: "sandals",
  },
  {
    name: "PWR Frame OP-1 Equinox Unisex Sneakers",
    price: 6359,
    org_price: 11999,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380698/01/sv01/fnd/IND/fmt/png/PWRFrame-OP-1-Equinox-Unisex-Sneakers",
    color: "white",
    type: "shoe",
  },
];

const cart_quant = document.querySelector(".cart_quant");
const prodGrid = document.querySelector(".prod_grid");

// Cart Section
const cartSec = document.querySelector(".right");
const cartProdcts = document.querySelector(".cart-products");
const checkoutBtn = document.createElement("button");
checkoutBtn.textContent = "Checkout";
checkoutBtn.classList.add("checkout_btn");

cartProdItemQuant = 1;
quantity = 1;

products.forEach((product) => {
  const prodItem = document.createElement("div");
  prodItem.classList.add("prod_item");

  const prodItemDet = document.createElement("div");
  prodItemDet.classList.add("prod_item_det");

  const AddToCart = document.createElement("button");
  AddToCart.classList.add("addtocart");

  prodItem.innerHTML = `
     <img
    src="${product.image}"
    alt=""
  />`;

  prodItemDet.innerHTML = `
   <h4>${product.name}</h4>
    <div class="prod_item_price">
      <h3 class="price">₹ ${product.price}</h3>
      <p class="org-price">${product.org_price}</p>
    </div>
  `;
  AddToCart.innerHTML = `Add to Cart`;

  AddToCart.addEventListener("click", () => {
    console.log(product)
    ShopIconQuant();
    displayCartProducts(product);
  });

  prodItemDet.appendChild(AddToCart);
  prodItem.appendChild(prodItemDet);
  prodGrid.appendChild(prodItem);
});

function ShopIconQuant() {
  cart_quant.textContent = `${quantity++}`;
  localStorage.setItem("card_Quantity", cart_quant.textContent);
}

function displayCartProducts(product) {
  
  // Create the product card container
  const cartProductItem = document.createElement("div");
  cartProductItem.classList.add("card-product-item");
  cartProductItem.innerHTML = `
    <img class="cart_prod_img" src="${product.image}" alt="${product.name}">
    <div class="cart_prod_det">
      <h5>${product.name}</h5>
      <div class="cart_prod_price">
        <h3 class="cart_price">₹ ${product.price}</h3>
        <p class="cart_org_price">${product.org_price}</p>
      </div>
      <div class="cart_prod_btn">
        <button class="prod_btn">-</button>
        <p class="quantity_display">1</p>
        <button class="prod_btn">+</button>
      </div>
    </div>
    <i id="cart_remove_icon" class="ri-delete-bin-line"></i>
  `;

  // Append the product card to the cart
  cartProdcts.appendChild(cartProductItem);
  cartSec.appendChild(cartProdcts);
  cartSec.appendChild(checkoutBtn);

  // Select elements
  const decreaseButton = cartProductItem.querySelector(".prod_btn:first-child");
  const increaseButton = cartProductItem.querySelector(".prod_btn:last-child");
  const quantityDisplay = cartProductItem.querySelector(".quantity_display");
  const cartPrice = cartProductItem.querySelector(".cart_price");

  // Decrease quantity
  decreaseButton.addEventListener("click", () => {
    if (cartProdItemQuant > 1) {
      cartProdItemQuant--;
      handleCartQuant();
      updateCart();
    } else {
      cartProdcts.removeChild(cartProductItem);
    }
  });

  // Increase quantity
  increaseButton.addEventListener("click", () => {
    cartProdItemQuant++;
    handleCartQuant();
    updateCart();
  });

  // Remove item from cart
  cartProductItem
    .querySelector("#cart_remove_icon")
    .addEventListener("click", () => {
      cartProdcts.removeChild(cartProductItem);
    });

  // Update quantity and price
  function updateCart() {
    quantityDisplay.textContent = cartProdItemQuant;
    cartPrice.textContent = `₹ ${product.price * cartProdItemQuant}`;
  }
}

function handleCartQuant() {
  quantity = cartProdItemQuant;
  console.log(quantity);
  cart_quant.textContent = `${quantity}`;
  localStorage.setItem("card_Quantity", cart_quant.textContent);
}

function getCart_QuantLs() {
  const saveCart_Quant = localStorage.getItem("card_Quantity");
  if (saveCart_Quant === null) {
    cart_quant.textContent = 0;
  } else {
    cart_quant.textContent = saveCart_Quant;
  }
}
window.addEventListener("DOMContentLoaded", getCart_QuantLs());
