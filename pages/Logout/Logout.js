import "./Logout.css";
const { logout } = data;
import data from "../../data/data";

const Logout = () => {
  return `
        <section class="logout">
            <a href="/" class="back">${logout.home}</a>
            <h2>${logout.title}</h2>
            <button id="logout" class="submit">${logout.button}</button>
        </section>
    `;
};

const initLogoutEvents = () => {
  const logout = document.getElementById("logout");

  logout.addEventListener("click", () => {
    alert("See you soon!");
    localStorage.removeItem("login_success");
    window.location.href = "/";
  });
};

export { Logout, initLogoutEvents };
