import "./style.css";
import { Header } from "./components/Header/Header";
import { Entry } from "./components/Entry/Entry";
import { Browse } from "./components/Browse/Browse";

document.querySelector("#app").innerHTML = `
${Header()}
${Entry()}
${Browse()}
`;
