import "./Register.css";
import data from "../../data/data";
const { register } = data;

const Register = () => {
  const { form } = register;
  return `
        <section class="register">
            <a href="/" class="back">${register.home}</a>
            <h2>${register.title}</h2>
            <form id="${form.id}">
                <label>${form.labelTitle}</label>
                <input type="text" id="name" required autofocus>
                <label>${form.mailTitle}</label>
                <input type="email" id="email" required>
                <label>${form.password}</label>
                <input type="password" id="password" required>
                <input type="submit" value="Sign in" class="submit"/>
            </form>
            <p>Do you have already an account?<a id="login-anchor">Log in</a></p>
        <section>
    `;
};

export default Register;
