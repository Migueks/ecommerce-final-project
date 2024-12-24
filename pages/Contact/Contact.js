import "./Contact.css";
import data from "../../data/data";
const { contact } = data;
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return `
        ${Header()}
        <section class="contact">
            <h2>${contact.title}</h2>
            <p class="subtitles">${contact.subtitle}</p>
            <div class="contact-main-container">
                <div class="contact-information">
                    <div>
                        <h3>${contact.contactInformation.title}</h3>
                        <p class="question">${
                          contact.contactInformation.subtitle
                        }</p>
                    </div>
                    <div>
                        <div class="contact-svg">
                            ${contact.infromations
                              .map(
                                (information) => `
                                    <div>
                                        
                                            <img src="${information.src}" alt="${information.alt}">
                                            <p>${information.info}</p>
                                        </a>                                     
                                    </div>
                                `
                              )
                              .join("")}
                        </div>
                    </div>
                    <div class="contact-social-media">
                        ${contact.svgs
                          .map(
                            (svg) => `
                                <a href="${svg.href}" target="_blank">
                                    <img src="${svg.src}" alt="${svg.alt}">
                                </a>
                            `
                          )
                          .join("")}
                    </div>
                </div>
                <div>
                    <p>Hola</p>
                </div>
            </div>
        </section>
        ${Footer()}
    `;
};

export default Contact;
