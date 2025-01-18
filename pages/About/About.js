import "./About.css";
import data from "../../data/data";
const { about } = data;
import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Pros from "../../components/Pros/Pros";

const About = () => {
  setTimeout(() => {
    document.querySelectorAll(".accordion-header").forEach((button) => {
      button.addEventListener("click", () => {
        const accordionItem = button.parentElement;
        const isActive = accordionItem.classList.contains("active");

        document.querySelectorAll(".accordion-item").forEach((item) => {
          item.classList.remove("active");
        });

        if (!isActive) {
          accordionItem.classList.add("active");
        }
      });
    });
  }, 0);

  return `
        ${Header()}
        <section class="about">
            <h1 class="about-title">${about.title}</h1>
            <div class="about-who">
                <div class="about-images">
                    ${about.who.images
                      .map(
                        (image) => `
                            <img src="${image.src}" alt="${image.alt}">
                        `
                      )
                      .join("")}
                </div>
                <div class="about-info">
                    <div>
                        <h3>${about.who.title}</h3>
                        <h2>${about.who.name}</h2>
                    </div>
                    <div>
                      <p>${about.who.text}</p>
                    </div>
                    <div class="metrics">
                      ${about.who.metrics
                        .map(
                          (metric) => `
                            <div class="${metric.class}">
                                <p>${metric.name}</p>
                                <p>${metric.number}</p>
                            </div>
                        `
                        )
                        .join("")}
                    </div>
                </div>
            </div>
            <div class="about-ask">
                <div class="accordion-container">
                    <div class="about-text">
                        <h3>${about.ask.subtitle}</h3>
                        <h2>${about.ask.title}</h2>
                    </div>
                    <div class="accordion">
                        ${about.ask.questions
                          .map(
                            (question) => `
                                <div class="accordion-item">
                                    <button class="accordion-header">${question.title}<span>${question.sum}</span></button>
                                    <div class="accordion-content">
                                        <p>${question.content}</p>
                                    </div>
                                </div>
                            `
                          )
                          .join("")}
                    </div>
                </div>
                <div class="accordeon-img">
                    <img src="${about.ask.img.src}" alt="${about.ask.img.alt}">
                <div>
            </div>
        </section>
        ${Pros()}
        ${Footer()}
    `;
};

export default About;
