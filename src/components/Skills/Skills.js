import "./Skills.css";

function Skills() {
  return (
    <div className="bars">
      <div className="skillBar">
        <h3 className="skillsHeader">Skills</h3>
        <p>
          <i className="fa-brands fa-html5" id="htmlIcon"></i>
        </p>
        <p>
          <i className="fa-brands fa-css3-alt" id="cssIcon"></i>
        </p>
        <p>
          <i className="fa-brands fa-square-js" id="jsIcon"></i>
        </p>
        <i className="fa-brands fa-react" id="reactIcon"></i>
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
