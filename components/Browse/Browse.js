import "./Browse.css";
import data from "../../data/data";
const { browse } = data;

const Browse = () => {
  return `
        <section class="browse">
            <h2>${browse.title}</h2>
            <h3>${browse.subtitle}</h3>
            <div class="images-container">
                ${browse.images
                  .map(
                    (image) => `
                    <div>
                        <a href="/">
                            <img src="${image.src}" alt="${image.alt}"></img>
                            <p>${image.title}</p>
                        </a>
                    </div>
                    `
                  )
                  .join("")}
            </div>
        </section>
    `;
};

export default Browse;
