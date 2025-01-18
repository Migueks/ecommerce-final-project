import "./Header.css";
import data from "../../data/data";
const { logo, title, links, icons } = data;

const Header = () => {
  return `
        <header>
            <div class="header-div">
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
                        ${icons
                          .map((icon, index) => {
                            const isLast = index === icons.length - 1;
                            return `
                            <li>
                                <img src="${icon.src}" alt="${icon.alt}" id="${
                              icon.id
                            }"></img>
                                ${
                                  isLast
                                    ? `<span id="cart-account">${getCartCount()}</span>`
                                    : ""
                                }
                            </li>
                            `;
                          })
                          .join("")}                            
                    </ul>
                </nav>
            </div>
                
        </header>
    `;
};

function getCartCount() {
  const storedCart = localStorage.getItem("cart");
  const cart = storedCart ? JSON.parse(storedCart) : [];
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function updateCartCounter() {
  const cartAccount = document.getElementById("cart-account");
  if (cartAccount) {
    cartAccount.textContent = getCartCount();
  }
}

document.addEventListener("DOMContentLoaded", updateCartCounter);

export { Header, updateCartCounter };
