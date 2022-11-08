import "./Services.css";

function Services() {
  return (
    <div>
      <h1 className="myServicesTitle">My services</h1>
      <p className="subText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        iusto officia adipisci, voluptatibus soluta tenetur!
      </p>
      <div className="grid-container">
        <div className="grid-item">
          <i className="fa-regular fa-file-video" id="videoIcon"></i>
          <p className="webDevTitle">Video Editing</p>
        </div>
        <div className="grid-item">
          <i className="fa-regular fa-file-code" id="codeIcon"></i>
          <p className="webDevTitle">Web Development</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
