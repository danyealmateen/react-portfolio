import "./Footer.css";

function Footer() {
  return (
    <div className="footerWrapper">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/danyealmateen"
        className="githubIcon"
      >
        <i className="githubIcon" class="fa-brands fa-github"></i>
      </a>

      <a
        className="linkedinIcon"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/danyeal-mateen-57380b151/"
      >
        <i className="linkedinIcon" class="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
}

export default Footer;
