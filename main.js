import "./style.css";
import { Header } from "./components/Header/Header";
import { Entry } from "./components/Entry/Entry";
import { Browse } from "./components/Browse/Browse";
import { OurProducts } from "./components/OurProducts/OurProducts";

document.querySelector("#app").innerHTML = `
${Header()}
${Entry()}
${Browse()}
${OurProducts()}
`;
