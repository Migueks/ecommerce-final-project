import "./Login.css";
import data from "../../data/data";
const { login } = data;

const Login = () => {
  const { form } = login;
  return `
        
        <section class="login">
            <a href="/" class="back">${login.home}</a> 
            <h2>${login.title}</h2>
            <form id="${form.id}">
                <label for="email">${form.labelTitle}</label>
                <input type="email" id="email" required autofocus>
                <label for="password">${form.password}</label>
                <input type="password" id="password" required>
                <input type="submit" value="Log in" class="submit"/>
            </form>

            <p>Don't you have an account?<a id="register-anchor">Sign in</a></p>
        </section>
    `;
};

export default Login;
