import "./Header.css";
import data from "../../data/data";
const { logo, title, links, themeDay, themeNight, icons } = data;

const Header = () => {
  return `
        <header>
                <div>
                    <a href="/">
                      <img src="${logo.src}" alt="${logo.alt}"></img>
                    </a>
                    <a href="/"><h3>${title}</h3></a>
                </div>
                <nav>
                    <ul class="links">
                        ${links
                          .map(
                            (link) => `
                            <li>
                                <a href="${
                                  link.place
                                }" id="${link.name.toLowerCase()}-anchor">${
                              link.name
                            }</a>
                            </li>
                            `
                          )
                          .join("")}
                    </ul>
                </nav>
                <nav>
                    <ul class="icons">
                        <button id="themeButton" class="themeButton">${themeNight}</button>
                        ${icons
                          .map(
                            (icon) => `
                            <li>
                                <img src="${icon.src}" alr="${icon.alt}"></img>
                            </li>
                            `
                          )
                          .join("")}
                    </ul>
                </nav>
        </header>
    `;
};

export default Header;
