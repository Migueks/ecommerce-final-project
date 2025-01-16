import "../Login/Login.css";
import data from "../../data/data";
import { Login, initLoginEvents } from "../Login/Login";
const { register } = data;

const Register = () => {
  const { form } = register;
  return `
        <div id="register">
          <section class="login" >
              <a href="/" class="back">${register.home}</a>
              <h2>${register.title}</h2>
              <form id="signupForm">
                  <label>${form.labelTitle}</label>
                  <input type="text" id="name" placeholder="Enter your name" required autofocus>
                  <label>${form.mailTitle}</label>
                  <input type="email" id="email" placeholder="Enter your email" required>
                  <label>${form.password}</label>
                  <input type="password" id="password" placeholder="Enter your password" required>
                  <input type="submit" value="Sign in" class="submit" id="register-button"/>
              </form>
              <p>Do you already have an account? <a id="login-anchor">Log in</a></p>
          </section>
        </div>
    `;
};

const initRegisterEvents = () => {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {
      alert("All fields are requiered");
      return;
    }

    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserRegistered = Users.some((user) => user.email === email);

    if (isUserRegistered) {
      alert("This email is already registered! Try with other one");
      return;
    }

    Users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(Users));

    alert("Sign up successful. Welcome!");
    signupForm.reset();

    const registerSection = document.getElementById("register");
    registerSection.innerHTML = Login();

    setTimeout(() => {
      initLoginEvents();
    }, 0);
  });
};

export { Register, initRegisterEvents };
