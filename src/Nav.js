import React from 'react';

function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        <img src={require("./images/db_logo_trans.png")} className="nav-logo" alt="nav logo" />
      </div>
      <div className="nav-legend">
        <ul className="nav-list">
          <li>
            <a href="#aboutme-section">About me</a>
          </li>
          <li>
            <a href="#projects-section">Projects</a>
          </li>
          <li>
            <a href="#certifications-section">Certifications</a>
          </li>
          <li>
            <a href="#contacts-section">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;