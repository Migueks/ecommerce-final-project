import "./OurProducts.css";
import data from "../../data/data";
const { ourProducts } = data;

const OurProducts = () => {
  const storedProducts = localStorage.getItem("randomProducts");
  const randomProducts = storedProducts ? JSON.parse(storedProducts) : [];

  if (randomProducts.length === 0) {
    fetchProductsAndStore();

    return `
      <section class="our-products">
        <h2>${ourProducts.title}</h2>
        <div class="products-container">
          <span>${ourProducts.loading}</span>
        </div>
        <button>${ourProducts.button}</button>
      </section>
    `;
  }

  const productsHTML = randomProducts
    .map(
      (product) => `
      <div class="product">
        <img src="${product.image_path}" alt="${product.name}">
        <button class="cart-button"
                data-id="${product.id}"
                data-name="${product.name}"
                data-price="${product.price || product.discount_price}"
                data-image="${product.image_path}">
          Add to cart
        </button>
        <h3>${product.name}</h3>
        <p>${product.wood_type}</p>
        <p class="price">${
          product.price ? `${product.price}€` : `${product.discount_price}€`
        }</p>
      </div>
    `
    )
    .join("");

  const html = `
    <section class="our-products">
      <h2>${ourProducts.title}</h2>
      <div class="products-container">
        ${productsHTML}
      </div>
      <button id="${ourProducts.id}">${ourProducts.button}</button>
    </section>
  `;

  setTimeout(() => {
    const buttons = document.querySelectorAll(".cart-button");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const product = {
          id: event.target.dataset.id,
          name: event.target.dataset.name,
          price: parseFloat(event.target.dataset.price),
          image: event.target.dataset.image,
          quantity: 1,
        };
        addToCart(product);
      });
    });
  });

  return html;
};

function addToCart(product) {
  const storedCart = localStorage.getItem("cart");
  const cart = storedCart ? JSON.parse(storedCart) : [];

  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
}

function updateCartCount() {
  const storedCart = localStorage.getItem("cart");
  const cart = storedCart ? JSON.parse(storedCart) : [];
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const cartCountElement = document.getElementById("cart-account");
  if (cartCountElement) {
    cartCountElement.textContent = totalItems;
  }
}

updateCartCount();

function fetchProductsAndStore() {
  const url = "https://furniture-api.fly.dev/v1/products?limit=100";
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }
      return res.json();
    })
    .then((data) => {
      const mixProducts = mixArray(data.data);
      const randomProducts = mixProducts.slice(0, 8);
      localStorage.setItem("randomProducts", JSON.stringify(randomProducts));
      location.reload();
    })
    .catch((error) => console.error("Error fetching products:", error));
}

function mixArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default OurProducts;
