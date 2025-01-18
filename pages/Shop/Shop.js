import "./Shop.css";
import data from "../../data/data";
const { shop } = data;
import { Header, updateCartCounter } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Pros from "../../components/Pros/Pros";

const Shop = () => {
  const getPhotos = async (name = "", sort = "newest", limit = 20) => {
    try {
      const url = `https://furniture-api.fly.dev/v1/products?limit=${limit}&name=${name}&sort=${sort}`;
      const data = await fetch(url);
      if (!data.ok) throw new Error("There was an error getting data");
      const results = await data.json();
      const photos = results.data;
      printPhotos(photos);
    } catch (error) {
      console.log("There was an error in the search: ", error);
    }
  };

  const printPhotos = (photos) => {
    const container = document.querySelector("#results");
    container.innerHTML = "";
    const message = document.querySelector("#message");

    if (photos.length === 0) {
      container.innerHTML = "";
      message.textContent = "There were no results for the search";
    } else {
      container.innerHTML = "";
      for (const photo of photos) {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="api-div">
              <img src="${photo.image_path}" loading="lazy">
              <button class="cart-button-2" data-id="${photo.id}" data-name="${
          photo.name
        }" data-price="${photo.price || photo.discount_price}" data-image="${
          photo.image_path
        }">Add to cart</button>
              <h4>${photo.name}</h4>
              <p>${photo.wood_type}</p>
              <p class="price-2">${
                photo.price ? `${photo.price}€` : `${photo.discount_price}€`
              }</p>
            </div>
        `;
        container.appendChild(li);
      }
    }

    const cartButtons = document.querySelectorAll(".cart-button-2");
    cartButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const product = {
          id: e.target.dataset.id,
          name: e.target.dataset.name,
          price: e.target.dataset.price,
          image: e.target.dataset.image,
        };

        addToCart(product);
      });
    });
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex === -1) {
      cart.push({ ...product, quantity: 1 });
    } else {
      cart[existingProductIndex].quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCounter();
  };

  const setupSearch = () => {
    const searchButton = document.querySelector("#search-button");
    const searchInput = document.querySelector("#search-input");
    const sortSelect = document.querySelector("#order");
    const countSelect = document.querySelector("#countInput");

    searchButton.addEventListener("click", () => {
      const name = searchInput.value.trim();
      const sort = sortSelect.value;
      const limit = parseInt(countSelect.value);
      getPhotos(name, sort, limit);
    });

    searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const name = searchInput.value.trim();
        const sort = sortSelect.value;
        const limit = parseInt(countSelect.value);
        getPhotos(name, sort, limit);
      }
    });

    sortSelect.addEventListener("change", () => {
      const name = searchInput.value.trim();
      const sort = sortSelect.value;
      const limit = parseInt(countSelect.value);
      getPhotos(name, sort, limit);
    });

    countSelect.addEventListener("change", () => {
      const name = searchInput.value.trim();
      const sort = sortSelect.value;
      const limit = parseInt(countSelect.value);
      getPhotos(name, sort, limit);
    });
  };

  setTimeout(() => {
    getPhotos();
    setupSearch();
    updateCartCounter();
  });

  return `
    ${Header()}
    <section class="shop-main-container">
      <div class="shop">
        <div>
          <h2>${shop.title}</h2>
          <span><a href="/"> Home </a> <span class="greaterThan">></span> Shop</span>
        </div>
        <img src="${shop.imgSrc}" alt="${shop.imgAlt}">
      </div>
      <section id="filters" class="shop-filters">
        <div class="search-container">
          <img src="./svg/lupa.svg" alt="Search icon" class="search-svg">
          <input type="text" id="search-input" placeholder="Search for furniture...">
          <div class="filters">
            <select id="order" class="order">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="price_desc">Price Desc</option>
              <option value="price_asc">Price Asc</option>
            </select>
            <select id="countInput" class="countInput">
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>
          </div>
        </div>
        <button id="search-button">Search</button>
      </section>
      <section class="api-container">
        <h3 id="message"></h3>
        <ul id="results"></ul>
      </section>
    </section>
    ${Pros()}
    ${Footer()}    
  `;
};

export default Shop;
