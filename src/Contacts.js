import React from 'react';
import codepen_svg from "./images/codepen-svgrepo-com.svg";
import github_svg from "./images/github-color-svgrepo-com.svg";
import linkedin_svg from "./images/linkedin-svgrepo-com.svg";
import email_svg from "./images/email-svgrepo-com.svg"

function Contacts() {
  return (
    <div className="contacts-wrap" id="contacts-section">
      <div className="contacts-tile">
        <div className="contacts-tile-intro">
          <h3>View more of my work</h3>
        </div>
        <a
          href="https://codepen.io/darioberberi"
          className="contacts-link"
          data-tip="Go to CodePen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={codepen_svg} className="contacts-logo" alt="logo" />
        </a>
        <a
          href="https://github.com/dario-berberi"
          className="contacts-link"
          data-tip="Go to GitGub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github_svg} className="contacts-logo" alt="logo" />
        </a>
      </div>
      <div className="contacts-tile">
        <div className="contacts-tile-intro">
          <h3>Get in touch</h3>
        </div>
        <a
          href="https://www.linkedin.com/in/dario-berberi/"
          className="contacts-link"
          data-tip="Visit LinkedIn profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin_svg} className="contacts-logo" alt="logo" />
        </a>
        <a
          href="mailto: darioberberidev@gmail.com"
          className="contacts-link"
          data-tip="Send an email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={email_svg} className="contacts-logo" alt="logo" />
        </a>
      </div>
    </div>
  );
}
export default Contacts;
