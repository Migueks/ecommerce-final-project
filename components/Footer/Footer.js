import "./Footer.css";
import data from "../../data/data";
const { footer } = data;

const Footer = () => {
  return `
        <footer>
            <div class="footer">
                <div class="footer-content">
                    <div class="footer-title">
                        <h2>${footer.title}</h2>
                        <p class="address">${footer.address}</p>
                        <p>${footer.cp}</p>
                    </div>
                    <nav class="footer-links">
                        <h3>${footer.linksTitle}</h3>
                        <ul>
                            ${footer.links
                              .map(
                                (link) => `
                                    <li>
                                        <a href="${
                                          link.place
                                        }" id="${link.name.toLowerCase()}-footer">${
                                  link.name
                                }</a>
                                    </li>
                                `
                              )
                              .join("")}
                        </ul>
                    </nav>  
                    <nav class="footer-help">
                      <h3>${footer.helpTitle}</h3>
                      <ul>
                            ${footer.helps
                              .map(
                                (help) => `
                                    <li>
                                        ${help.name}
                                    </li>
                                `
                              )
                              .join("")}  
                        </ul>
                    </nav>
                    <div class="footer-newsletter">
                        <h3>${footer.newsletter.title}</h3>
                        <form id="newsletter-form" >
                            <input type="${
                              footer.newsletter.type
                            }" placeholder="${footer.newsletter.placeholder}"
                            id="newsletter-input" 
                            required/>
                            <button type="${footer.newsletter.buttonType}">${
    footer.newsletter.subscribe
  }</button>
                        </form>
                    </div>
                </div>
                <div class="footer-copyright">
                    <p>${footer.copyright}</p>
                </div>
            </div>
        </footer>
    `;
};

export default Footer;
