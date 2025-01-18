import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Shop from "../../pages/Shop/Shop";
import { Login, initLoginEvents } from "../../pages/Login/Login";
import { Register, initRegisterEvents } from "../../pages/Register/Register";
import { Userlog, initUserlogEvents } from "../../pages/Userlog/Userlog";
import Cart from "../../pages/Cart/Cart";

const linkPage = (selector, pageComponent, initEvents) => {
  const anchor = document.querySelector(selector);
  if (anchor) {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const app = document.querySelector("#app");
      app.innerHTML = pageComponent();
      window.scrollTo(0, 0);
      if (initEvents) {
        initEvents();
      }
      attachLinkEvents();
    });
  }
};

const attachLinkEvents = () => {
  linkPage("#contact-anchor", Contact);
  linkPage("#about-anchor", About);
  linkPage("#shop-anchor", Shop);
  linkPage("#loginButton", Userlog, initUserlogEvents);
  linkPage("#register-anchor", Register, initRegisterEvents);
  linkPage("#login-anchor", Login);
  linkPage("#shopping-cart", Cart);
};

export default attachLinkEvents;
