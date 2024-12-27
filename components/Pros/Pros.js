import "./Pros.css";
import data from "../../data/data";
const { pros } = data;

const Pros = () => {
  return `
    <section class="pros">
        ${pros
          .map(
            (pro) => `
                <div class="pros-containers">
                    <div class="pro-container">
                      <div>
                        <img src=${pro.src} alt="${pro.alt}">
                      </div>
                      <div class="title-container">
                          <p>${pro.title}</p>
                          <p>${pro.subtitle}</p>
                      </div>
                    </div>
                </div>
            `
          )
          .join("")}
    </section>
    `;
};

export default Pros;
