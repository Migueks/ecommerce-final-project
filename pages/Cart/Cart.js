import "./Cart.css";
import Footer from "../../components/Footer/Footer";
import { Header, updateCartCounter } from "../../components/Header/Header";
import data from "../../data/data";
const { cart } = data;

const Cart = () => {
  const storedCart = localStorage.getItem("cart");
  const cartItems = storedCart ? JSON.parse(storedCart) : [];

  const cartHTML = `
    ${Header()}
    <section class="cart-page">
      <h1>${cart.title}</h1>
      <section class="cart-container">
        ${
          cartItems.length > 0
            ? cartItems
                .map(
                  (item) => `
          <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
              <h3>${item.name}</h3>
              <p>Price: ${item.price}€</p>
              <p>Quantity: ${item.quantity}</p>
            </div>
            <button class="remove-one-button">-</button>
            <button class="remove-item-button">X</button>
          </div>
        `
                )
                .join("")
            : `<p class="empty-cart-message">${cart.emptyMessage}</p>`
        }
      </section>
      ${
        cartItems.length > 0
          ? `<button class="clear-cart-button">${cart.clearButton}</button>`
          : ""
      }
    </section>
    ${Footer()}
  `;

  setTimeout(() => {
    addEventListeners();
  });

  return cartHTML;
};

function addEventListeners() {
  const removeOneButtons = document.querySelectorAll(".remove-one-button");
  const removeAllButtons = document.querySelectorAll(".remove-item-button");
  const clearCartButton = document.querySelector(".clear-cart-button");

  removeOneButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const cartItemElement = event.target.closest(".cart-item");
      const productId = cartItemElement.dataset.id;

      removeOneUnitFromCart(productId);
    });
  });

  removeAllButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const cartItemElement = event.target.closest(".cart-item");
      const productId = cartItemElement.dataset.id;

      removeAllFromCart(productId);
    });
  });

  if (clearCartButton) {
    clearCartButton.addEventListener("click", (event) => {
      event.preventDefault();
      clearCart();
    });
  }
}

function removeOneUnitFromCart(productId) {
  const storedCart = localStorage.getItem("cart");
  let cart = storedCart ? JSON.parse(storedCart) : [];

  const productIndex = cart.findIndex((item) => item.id === productId);

  if (productIndex !== -1) {
    if (cart[productIndex].quantity > 1) {
      cart[productIndex].quantity -= 1;
    } else {
      cart.splice(productIndex, 1);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartView();
  updateCartCounter();
}

function removeAllFromCart(productId) {
  const storedCart = localStorage.getItem("cart");
  let cart = storedCart ? JSON.parse(storedCart) : [];

  cart = cart.filter((item) => item.id !== productId);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartView();
  updateCartCounter();
}

function updateCartView() {
  const cartContainer = document.querySelector(".cart-container");
  const storedCart = localStorage.getItem("cart");
  const cartItems = storedCart ? JSON.parse(storedCart) : [];

  if (cartItems.length === 0) {
    cartContainer.innerHTML = `<p class="empty-cart-message">${data.cart.emptyMessage}</p>`;
    const clearCartButton = document.querySelector(".clear-cart-button");
    if (clearCartButton) clearCartButton.remove();
  } else {
    cartContainer.innerHTML = cartItems
      .map(
        (item) => `
          <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
              <h3>${item.name}</h3>
              <p>Price: ${item.price}€</p>
              <p>Quantity: ${item.quantity}</p>
            </div>
            <button class="remove-one-button">-</button>
            <button class="remove-item-button">X</button>
          </div>
        `
      )
      .join("");
  }

  addEventListeners();
}

function clearCart() {
  localStorage.removeItem("cart");
  updateCartCounter();
  location.reload();
}

export default Cart;
