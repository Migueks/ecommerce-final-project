import { Login, initLoginEvents } from "../Login/Login";
import { Logout, initLogoutEvents } from "../Logout/Logout";

const Userlog = () => {
  const user = JSON.parse(localStorage.getItem("login_success")) || false;

  if (user) {
    const logoutHTML = Logout();
    setTimeout(() => {
      initLogoutEvents();
    }, 0);
    return logoutHTML;
  } else {
    const loginHTML = Login();
    setTimeout(() => {
      initLoginEvents();
    }, 0);
    return loginHTML;
  }
};

export default Userlog;
