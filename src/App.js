import "./App.css";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Element } from "./components/Element/Element";

function App() {
  return (
    <div>
      <Header />
      <Services />
      <Skills />
      <Dropdown />
      <Element />
    </div>
  );
}

export default App;
