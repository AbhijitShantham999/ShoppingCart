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
    name: "PWRFrame OP-1 Equinox Unisex Sneakers",
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
const cartSec = document.querySelector(".right")
const checkoutBtn = document.createElement("button")

quantity = 1;

products.forEach((product) => {
  const prodItem = document.createElement("div");
  prodItem.classList.add("prod_item");

  const prodItemDet = document.createElement("div");
  prodItemDet.classList.add("prod_item_det");

  const prodItemAddToCart = document.createElement("button");
  prodItemAddToCart.classList.add("addtocart");

  prodItem.innerHTML = `
     <img
    src="${product.image}"
    alt=""
  />`;

  prodItemDet.innerHTML = `
   <h4>${product.name}</h4>
    <div class="prod_item_price">
      <h3 class="price">₹${product.price}</h3>
      <p class="org-price">${product.org_price}</p>
    </div>
  `;
  prodItemAddToCart.innerHTML = `Add to Cart`;

  prodItemAddToCart.addEventListener("click", () => {
    handleCartQuant();
    cart(product);
  });

  prodItemDet.appendChild(prodItemAddToCart);
  prodItem.appendChild(prodItemDet);
  prodGrid.appendChild(prodItem);
});

function handleCartQuant() {
  cart_quant.textContent = `${quantity++}`;
  localStorage.setItem("card_Quantity", cart_quant.textContent);
}

function cart(product){
    console.log(product);
    cartSec.innerHTML=``
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
