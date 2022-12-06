import React from 'react';

function Certifications() {
  return (
    <div className="certifications-wrap" id="certifications-section">
      <div className="certifications-intro">
        <h1>Certifications</h1>
      </div>

      <div className="certifications-tile" data-aos="slide-up">
        <img
          src={require("./images/fcc_res_web_certif.png")}
          alt="certificate"
        />

        <a href="https://www.freecodecamp.org/Dario_Berberi" target="_blank" rel="noopener noreferrer">
          View Certificate
        </a>
      </div>
      <div className="certifications-tile" data-aos="slide-up">
        <img
          src={require("./images/fcc_js_certif.png")}
          alt="certificate"
        />
        <a href="https://www.freecodecamp.org/Dario_Berberi" target="_blank" rel="noopener noreferrer">
          View Certificate
        </a>
      </div>
      <div className="certifications-tile" data-aos="slide-up">
        <img
          src={require("./images/fcc_frontend_certif.png")}
          alt="certificate"
        />

        <a href="https://www.freecodecamp.org/Dario_Berberi" target="_blank" rel="noopener noreferrer">
          View Certificate
        </a>
      </div>
      <div className="certifications-tile" data-aos="slide-up">
        <img src={require("./images/scrimba_certif.png")} alt="certificate" />

        <a href="https://scrimba.com/learn/learnreact" target="_blank" rel="noopener noreferrer">
          View Certificate
        </a>
      </div>
    </div>
  );
}

export default Certifications;