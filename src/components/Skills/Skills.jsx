import "./Skills.css";
import { useState } from "react";

function Skills() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="contentContainer">
      <p className="friendsText">
        Click the button below to see who I'm friends with
      </p>
      <button className="animatedButtons" onClick={handleOpen}>
        Expose teammates
        <i class="fa-solid fa-person-falling-burst"></i>
      </button>

      {open ? (
        <div className="skillIcons">
          <i className="fa-brands fa-html5" id="htmlIcon"></i>
          <i className="fa-brands fa-css3-alt" id="cssIcon"></i>
          <i className="fa-brands fa-square-js" id="jsIcon"></i>
          <i className="fa-brands fa-react" id="reactIcon"></i>
        </div>
      ) : null}
    </div>
  );
}

export default Skills;
