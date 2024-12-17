import "./Entry.css";
import data from "../../data/data";
const { arrival } = data;

export const Entry = () => {
  return `
        <section class="entry">
            <div class="container">
                <div>
                    <h2>${arrival.subtitle}</h2>
                    <h1>${arrival.title}</h1>
                    <p>${arrival.description}</p>
                    <button>${arrival.button}</button>
                </div>
            </div>
        </section>
    `;
};
