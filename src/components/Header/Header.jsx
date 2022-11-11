import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="title">
        <h1>
          <span className="devName">Danyeal Mateen</span>
        </h1>
        <h1>
          <span className="devTitle">Front-end Developer</span>
        </h1>
        <p className="textContent">
          Hi, I'm Dany. I discovered my passion for coding and web development
          in the early 2022 when I decided to switch professions. I live in
          <span className="malmo"> Malmo</span>, Sweden together with my fiancee
          and Nelson - a 2 year old beige barky{" "}
          <span className="chihuahua">chihuahua</span>. Lately, most of my time
          goes to practicing coding and to challenge myself in new projects.
          When I need a break or feel the need to clear my mind I usually go{" "}
          <span className="driving">driving</span>. My biggest goal is to keep
          gathering knowledge and become really good at front end development.
          For me, there is nothing more satisfying than learning new stuff every
          single day. If I can learn something new everyday and put it to good
          use then I'm pretty much a happy camper. Also, welcome to my
          portfolio. Enjoy your stay.
        </p>
      </div>
    </div>
  );
}

export default Header;
