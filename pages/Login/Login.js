import "./Login.css";
import data from "../../data/data";
const { login } = data;

const Login = () => {
  const { form } = login;

  return `
        <section class="login">
            <a href="/" class="back">${login.home}</a> 
            <h2>${login.title}</h2>
            <form id="loginForm">
                <label for="email">${form.labelTitle}</label>
                <input type="email" id="email-login" placeholder="Enter your email" required autofocus>
                <label for="password">${form.password}</label>
                <input type="password" id="password-login" placeholder="Enter your password" required>
                <input type="submit" value="Log in" class="submit"/>
            </form>

            <p>Don't you have an account?<a id="register-anchor">Sign in</a></p>
        </section>
    `;
};

const initLoginEvents = () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email-login").value.trim();
    const password = document.getElementById("password-login").value.trim();
    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = Users.find(
      (user) => user.email === email && user.password === password
    );
    if (!validUser) {
      return alert("Incorrect username or password! Try again!");
    }
    alert(`Welcome! ${validUser.email}`);
    localStorage.setItem("login_success", JSON.stringify(validUser));
    window.location.href = "/";
  });
};

export { Login, initLoginEvents };
