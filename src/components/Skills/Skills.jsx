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
          Skills<i className="fa-solid fa-gear" id="gearIcon"></i>
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
        <h3 className="languagesHeader">Languages</h3>
        <p>Swedish</p>
        <p>English</p>
        <p>Farsi</p>
      </div>
    </div>
  );
}

export default Skills;
