import "./Carousel.css";
import data from "../../data/data";
const { carousel } = data;

const Carousel = () => {
  setTimeout(() => {
    const big = document.querySelector(".big");
    const point = document.querySelectorAll(".point");

    point.forEach((eachPoint, i) => {
      point[i].addEventListener("click", () => {
        let position = i;
        let operation = position * -35;

        big.style.transform = `translateX(${operation}%)`;

        point.forEach((eachPoint) => {
          eachPoint.classList.remove("active");
        });
        point[i].classList.add("active");
      });
    });
  }, 0);

  return `
        <section class="background-carousel">
            <div class="carousel">
                <div class="carousel-title">
                    <h2>${carousel.title}</h2>
                    <p>${carousel.subtitle}</p>
                    <button id="${carousel.id}">${carousel.button}</button>
                </div>
                <div class="carousel-images">
                    <div class="big">
                        ${carousel.images
                          .map(
                            (image) => `
                                <img src="${image.src}" alt="${image.alt}" class="${image.class}">
                            `
                          )
                          .join("")}
                    </div>
                    <ul class="points">
                        <li class="point active"></li>
                        <li class="point"></li>
                        <li class="point"></li>
                    </ul>
                </div>
            </div>
        </section>
    `;
};

export default Carousel;
