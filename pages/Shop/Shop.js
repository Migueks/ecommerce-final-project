import "./Shop.css";
import data from "../../data/data";
const { shop } = data;
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Pros from "../../components/Pros/Pros";

const Shop = () => {
  const getPhotos = async () => {
    try {
      const data = await fetch(
        "https://furniture-api.fly.dev/v1/products?limit=40"
      );
      if (!data.ok) throw new Error("There was an error getting data");
      const results = await data.json();
      const photos = results.data;
      printPhotos(photos);
      renderPaginationButtons(2);
    } catch (error) {
      console.log("There was an error in the searh: ", error);
    }
  };
  getPhotos();
  const printPhotos = (photos) => {
    const container = document.querySelector("#results");
    container.innerHTML = "";
    const message = document.querySelector("#message");

    if (photos.length === 0) {
      container.innerHTML = "";
      message.textContent = "There was no results for the search";
    } else {
      container.innerHTML = "";
      for (const photo of photos) {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="api-div">
              <img src="${photo.image_path}" loading="lazy">
              <button class="cart-button-2">Add to cart</button>
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
  };

  return `
    ${Header()}
        <div>
            <div class="shop">
                <div>
                    <h2>${shop.title}</h2>
                    <span><a href="/"> Home </a> <p>></p> Shop</span>
                </div>
                <img src="${shop.imgSrc}" alt="${shop.imgAlt}}">
            </div>
            <section id="filters">
              
            </section>
            <section class = "api-container">
                <h3 id="message"></h3>
                <ul id="results"></ul>
            </section>
        </div>
        
    ${Pros()}
    ${Footer()}    
    `;
};

export default Shop;
