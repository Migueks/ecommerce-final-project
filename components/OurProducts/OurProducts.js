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

  return `
          <section class="our-products">
              <h2>${ourProducts.title}</h2>
              <div class="products-container">
                ${randomProducts
                  .map(
                    (product) => `
                      <div class="product">
                        <img src="${product.image_path}" alt="${product.name}">
                        <button class="cart-button">Add to cart</button>
                        <h3>${product.name}</h3>
                        <p>${product.wood_type}</p>
                        <p class="price">${
                          product.price
                            ? `${product.price}€`
                            : `${product.discount_price}€`
                        }</p>
                    </div>
                    `
                  )
                  .join("")}
              </div>
              <button>${ourProducts.button}</button>
          </section>
      `;

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
};

export default OurProducts;
