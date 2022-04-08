import React from "react";
import instagram from "../images/Instagram_white.png";
import Linked_in from "../images/LinkedIN_white.png";
import Mail from "../images/Mail_white.png";
export default function Navbar() {
  let width=window.screen.width
  const handleNavClick = () => {
    const navilist=document.getElementById("felxNavContainer")
    navilist.classList.toggle("active")
  };

  const handleWork=()=>{ 
    const navilist=document.getElementById("felxNavContainer")
  navilist.classList.toggle("active")
  }
  let clicked = false;
  return (
    <div className="Main-NavContainer">
      <div className="Nav-Container" id="felxNavContainer">
        <div className="Navigations">
          <div className="Nav">
            <ul>
            <a href="#section-work" onClick={handleWork}><li>Work</li></a>
            <a href="#contact" onClick={handleWork}><li>Contact</li></a>
             
            </ul>
          </div>
        </div>
        <div className="Title">Uttam Kumar Sahu</div>
        <div className="Social-icons">
          <a
            href="https://www.linkedin.com/in/uttam-kumar-sahu-090456226/"
            alt="linke_in"
          >
            <img src={Linked_in} />
          </a>
          <a
            href="mailto:sahuu6175@gmail.com"
            alt="mail"
          >
            <img src={Mail} />
          </a>
          <a
           href="https://www.instagram.com/uttamkumarsahu22/"
           alt="instagram"
          >
            <img src={instagram} />
          </a>
        </div>
      </div>
      <div className="menu" id="menu" onClick={handleNavClick}>
        <div className="menulines"></div>
        <div className="menulines"></div>
        <div className="menulines"></div>
      </div>
    </div>
  );
}
