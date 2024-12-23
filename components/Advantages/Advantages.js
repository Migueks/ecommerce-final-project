import "./Advanatges.css";
import data from "../../data/data";
const { advantages } = data;

const Advantages = () => {
  return `
        <section class="advantages">
            <h2>${advantages.title}</h2>
            <div class="advantages-container">
                ${advantages.containers
                  .map(
                    (container) => `
                        <div>
                            <img src="${container.src}" alt="${container.alt}" class="${container.class}">
                            <h3>${container.title}</h3>
                            <p>${container.paragraph}</p>
                        </div>
                    `
                  )
                  .join("")}
            </div>
        </section>
    `;
};

export default Advantages;
