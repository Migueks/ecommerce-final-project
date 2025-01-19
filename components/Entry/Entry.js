import "./Entry.css";
import data from "../../data/data";
const { arrival } = data;

const Entry = () => {
  return `
        <section class="entry">
            <div class="container">
                <div>
                    <h2>${arrival.subtitle}</h2>
                    <h1>${arrival.title}</h1>
                    <p>${arrival.description}</p>
                    <button id=${arrival.id}>${arrival.button}</button>
                </div>
            </div>
        </section>
    `;
};

export default Entry;
