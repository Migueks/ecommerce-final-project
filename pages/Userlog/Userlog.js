import { Login, initLoginEvents } from "../Login/Login";
import { Logout, initLogoutEvents } from "../Logout/Logout";

const Userlog = () => {
  return `
    <div id="userlog-container">
      
    </div>
  `;
};

const initUserlogEvents = () => {
  const user = JSON.parse(localStorage.getItem("login_success")) || false;
  const userlogContainer = document.getElementById("userlog-container");

  if (!userlogContainer) {
    console.error("El contenedor principal #userlog-container no se encontró.");
    return;
  }

  if (user) {
    userlogContainer.innerHTML = Logout();
    initLogoutEvents();
  } else {
    userlogContainer.innerHTML = Login();
    initLoginEvents();
  }
};

export { Userlog, initUserlogEvents };
