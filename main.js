import "./style.css";
import Header from "./components/Header/Header";
import Entry from "./components/Entry/Entry";
import Browse from "./components/Browse/Browse";
import OurProducts from "./components/OurProducts/OurProducts";
import Carousel from "./components/Carousel/Carousel";
import Advantages from "./components/Advantages/Advantages";
import Footer from "./components/Footer/Footer";
import linkPage from "./utils/linkPage";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

document.querySelector("#app").innerHTML = `
${Header()}
${Entry()}
${Browse()}
${OurProducts()}
${Carousel()}
${Advantages()}
${Footer()}
`;

linkPage("#contact-anchor", Contact);
linkPage("#about-anchor", About);
