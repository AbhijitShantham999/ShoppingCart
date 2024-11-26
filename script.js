const products = [
  {
    id: 1,
    name: "CA Pro Classic Unisex Sneakers",
    price: 6399,
    org_price: 7999,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380190/54/sv01/fnd/IND/fmt/png/CA-Pro-Classic-Unisex-Sneakers",
    color: "green",
    type: "shoe",
  },
  {
    id: 2,
    name: "Divecat V2 Lite Cat Unisex Slides",
    price: 1399,
    org_price: 1999,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/386713/03/sv01/fnd/IND/fmt/png/Divecat-V2-Lite-Cat-Unisex-Slides",
    color: "navy blue",
    type: "slider",
  },
  {
    id: 3,
    name: "PUMA x one8 22 FH Rubber Unisex Cricket Shoes",
    price: 4869,
    org_price: 6499,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/106713/04/sv01/fnd/IND/fmt/png/PUMA-x-one8-22-FH-Rubber-Unisex-Cricket-Shoes",
    color: "orange",
    type: "shoe",
  },
  {
    id: 4,
    name: "Pacer Future Unisex Sneakers",
    price: 3849,
    org_price: 6999,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/380367/01/sv01/fnd/IND/fmt/png/Pacer-Future-Unisex-Sneakers",
    color: "black",
    type: "shoe",
  },
  {
    id: 5,
    name: "Zeal Men's Sandals",
    price: 2249,
    org_price: 2999,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/381396/01/sv01/fnd/IND/fmt/png/Zeal-Men's-Sandals",
    color: "blue",
    type: "sandals",
  },
  {
    id: 6,
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
const cartProdctsList = document.querySelector(".cart-products");

const checkoutBtn = document.createElement("button");
checkoutBtn.textContent = "Checkout";
checkoutBtn.classList.add("checkout_btn");

// Initialize cart items and quantity
let quantity = 1;
let cartItems = [];
console.log(cartItems);

// Render products
products.forEach((product) => {
  const prodItem = document.createElement("div");
  prodItem.classList.add("prod_item");

  const prodItemDet = document.createElement("div");
  prodItemDet.classList.add("prod_item_det");

  const AddToCart = document.createElement("button");
  AddToCart.classList.add("addtocart");

  prodItem.innerHTML = `
      <img src="${product.image}" alt="" />
    `;

  prodItemDet.innerHTML = `
      <h4>${product.name}</h4>
      <div class="prod_item_price">
        <h3 class="price">₹ ${product.price}</h3>
        <p class="org-price">${product.org_price}</p>
      </div>
    `;
  AddToCart.innerHTML = "Add to Cart";

  AddToCart.addEventListener("click", () => {
    displayCartProducts(product);
    ShopIconQuant(product);
  });

  prodItemDet.appendChild(AddToCart);
  prodItem.appendChild(prodItemDet);
  prodGrid.appendChild(prodItem);
});

// ShopIconQuant function (not used but could be for updating the cart quantity on the icon)
function ShopIconQuant(product) {
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Update the cart icon with the total quantity
  cart_quant.textContent = totalQuantity;
  // localStorage.setItem("card_Quantity", cart_quant.textContent);
}

function displayCartProducts(product) {
  console.log(cartItems);

  let existingProduct = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingProduct) {
    // Update existing product in cart
    existingProduct.quantity += 1;

    const quantityDisplay = document.querySelector(
      `.cart_item_quantity[data-id="${existingProduct.id}"]`
    );
    const cartPrice = document.querySelector(
      `.cart_item_price[data-id="${existingProduct.id}"]`
    );

    if (quantityDisplay && cartPrice) {
      quantityDisplay.textContent = existingProduct.quantity;
      cartPrice.textContent = `₹ ${
        existingProduct.price * existingProduct.quantity
      }`;
    }
  } else {
    // Add new product to cart
    product.quantity = 1;
    cartItems.push(product);
    cartProductsUi(product);
  }
  console.log("Current cart:", cartItems);
}

function cartProductsUi(product) {
  console.log("cartproductui", product.id);
  const cartProductItem = document.createElement("div");
  cartProductItem.classList.add("card-product-item");
  cartProductItem.innerHTML = `
      <img class="cart_item_img" src="${product.image}" alt="${product.name}">
      <div class="cart_prod_det">
        <h5>${product.name}</h5>
        <div class="cart_prod_price">
          <h3 class="cart_item_price" data-id="${product.id}">₹ ${product.price}</h3>
          <p class="cart_item_org_price">${product.org_price}</p>
        </div>
        <div class="cart_prod_btn">
          <button class="prod_btn sub-btn">-</button>
          <p class="cart_item_quantity" data-id="${product.id}">1</p>
          <button class="prod_btn add-btn">+</button>
        </div>
      </div>
      <i id="cart_remove_icon" class="ri-delete-bin-line"></i>
    `;

  // Select elements for buttons and quantity
  const decreaseButton = cartProductItem.querySelector(".sub-btn");
  const increaseButton = cartProductItem.querySelector(".add-btn");
  const quantityDisplay = cartProductItem.querySelector(".cart_item_quantity");
  const cartPrice = cartProductItem.querySelector(".cart_item_price");

  // Append product item to cart
  cartProdctsList.appendChild(cartProductItem);
  cartSec.appendChild(cartProdctsList);
  cartSec.appendChild(checkoutBtn);

  // Handle increase and decrease of product quantity
  handleIncreaseBtn(increaseButton, product, quantityDisplay, cartPrice);
  handleDecreaseBtn(
    decreaseButton,
    product,
    quantityDisplay,
    cartPrice,
    cartProductItem
  );
  removeCartItem(product, cartProductItem);
}

function handleDecreaseBtn(
  decreaseButton,
  product,
  quantityDisplay,
  cartPrice,
  cartProductItem
) {
  decreaseButton.addEventListener("click", () => {
    if (product.quantity > 1) {
      product.quantity--;
      ShopIconQuant(product);
      updateCart(product, quantityDisplay, cartPrice);
    } else {
      cartProdctsList.removeChild(cartProductItem);
      cartItems = cartItems.filter((item) => item.id !== product.id);
      product.quantity = 0;
      ShopIconQuant(product);
    }
  });
}

function handleIncreaseBtn(
  increaseButton,
  product,
  quantityDisplay,
  cartPrice
) {
  increaseButton.addEventListener("click", () => {
    product.quantity++;
    ShopIconQuant(product);
    updateCart(product, quantityDisplay, cartPrice);
  });
}

function removeCartItem(product, cartProductItem) {
  const removeIcon = cartProductItem.querySelector("#cart_remove_icon");
  removeIcon.addEventListener("click", () => {
    cartProdctsList.removeChild(cartProductItem);
    cartItems = cartItems.filter((item) => item.id !== product.id);
    product.quantity = 0;
    ShopIconQuant(product);
  });
}

function updateCart(product, quantityDisplay, cartPrice) {
  quantityDisplay.textContent = product.quantity;
  cartPrice.textContent = `₹ ${product.price * product.quantity}`;
}
