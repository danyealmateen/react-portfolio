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
          Skills to pay the bills
        </button>
        {open ? (
          <div className="bars">
            <p className="fa-brands fa-html5" id="htmlIcon"></p>
            <p className="fa-brands fa-css3-alt" id="cssIcon"></p>
            <p className="fa-brands fa-square-js" id="jsIcon"></p>
            <p className="fa-brands fa-react" id="reactIcon"></p>
          </div>
        ) : null}
      </div>
      <div className="languageBar">
        <h3 className="languagesHeader">Languages</h3>
        <p>Swedish</p>
        <p>English</p>
        <p>Farsi</p>
      </div>
    </div>
  );
}

export default Skills;
