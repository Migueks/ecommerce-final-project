import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Shop from "../../pages/Shop/Shop";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

const linkPage = (selector, pageComponent) => {
  const anchor = document.querySelector(selector);
  if (anchor) {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const app = document.querySelector("#app");
      app.innerHTML = pageComponent();
      attachLinkEvents();
    });
  }
};

const attachLinkEvents = () => {
  linkPage("#contact-anchor", Contact);
  linkPage("#about-anchor", About);
  linkPage("#shop-anchor", Shop);
  linkPage("#loginButton", Login);
  linkPage("#register-anchor", Register);
  linkPage("#login-anchor", Login);
};

export default attachLinkEvents;
