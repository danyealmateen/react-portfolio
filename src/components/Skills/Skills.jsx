import "./Skills.css";
import { useState } from "react";

function Skills() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="bars">
      <div className="skillBar">
        <button className="skillsHeader" onClick={handleOpen}>
          Computer languages<i className="fa-solid fa-gear" id="gearIcon"></i>
        </button>
        {open ? (
          <div className="bars">
            <p className="fa-brands fa-html5" id="htmlIcon"></p>
            <hr className="hr"></hr>
            <p className="fa-brands fa-css3-alt" id="cssIcon"></p>
            <hr className="hr"></hr>
            <p className="fa-brands fa-square-js" id="jsIcon"></p>
            <hr className="hr"></hr>
            <p className="fa-brands fa-react" id="reactIcon"></p>
          </div>
        ) : null}
      </div>
      <div className="languageBar">
        <button>Languages</button>
        <p>
          <i class="fa-solid fa-earth-europe" id="sweGlobe"></i> <span className="sweText">Swedish</span>
        </p>
        <p>
          <i class="fa-solid fa-earth-asia" id="engGlobe"></i> <span className="engText">English</span>
        </p>
        <p>
          <i class="fa-solid fa-earth-oceania" id="farGlobe"></i> <span class="farText">Farsi</span>
        </p>
      </div>
    </div>
  );
}

export default Skills;
