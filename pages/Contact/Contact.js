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
                <form id="contact-form">
                        <div class="personal-information">
                            ${contact.personalInformation
                              .map(
                                (info) => `
                                    <div>
                                        <label for="${info.for}">${info.text}</label>
                                        <input type="${info.type}" id="${info.for}" required>
                                    </div>
                                `
                              )
                              .join("")}
                        </div>
                        <div class="contact-subject">
                            <h3>${contact.form.subject}</h3>
                            <div>
                            ${contact.form.inquiries
                              .map(
                                (inquiry) => `
                                    <div>
                                        <input type="${inquiry.type}" id="${inquiry.for}" name="${inquiry.option}">
                                        <label for="${inquiry.for}">${inquiry.name}</label>
                                    </div>
                                `
                              )
                              .join("")}
                            </div>
                        </div>
                        <div class="contact-message">
                                <label for="${contact.message.for}">${
    contact.message.title
  }</label>
                                <input type="${contact.message.type}" id="${
    contact.message.for
  }" placeholder="${contact.message.write}" required>
                        </div>
                        <button type="${contact.button.buttonType}" class="${
    contact.button.class
  }">${contact.button.title}</button>
                </form>
            </div>
        </section>
        ${Footer()}
    `;
};

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", clearInput);
  }
});

function clearInput(event) {
  event.preventDefault();
  const input = document.querySelectorAll("#contact-form input");
  input.forEach((input) => {
    input.value = "";
  });
  location.reload();
}

export default Contact;
