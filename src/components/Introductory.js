import React from "react";
import image1 from "../images/template1.jpg";
import image2 from "../images/template2.jpg";
import image3 from "../images/template3.jpg";
import image4 from "../images/template4.jpg";
import image5 from "../images/template5.jpg";
import image6 from "../images/template6.jpg";
import image7 from "../images/template7.jpg";
import image8 from "../images/template8.jpg";
import instagram from "../images/Instagram_white.png";
import Linked_in from "../images/LinkedIN_white.png";
import Mail from "../images/Mail_white.png";
export default function Introductory() {
  
  return (
    <>
      <div className="Intro">
        <h1>Hi,I'm Uttam Kumar Sahu!</h1>
        <h3>Scroll down to view more</h3>
        <i className="arrow down" ></i>
      </div>

      <div className="real-content" id="section-work" >
        <h1 className="heading">My work</h1>
        <div className="content">
          <a href="https://www.behance.net/gallery/140922545/Uttam-Kumar-Sahus-Portfolio">
            <img src={image1} alt="image1" className="social-temp" />
          </a>
          <a href="https://www.behance.net/gallery/140922545/Uttam-Kumar-Sahus-Portfolio">
            <img src={image2} alt="image2" className="social-temp" />
          </a>
          <a href="https://www.behance.net/gallery/140922545/Uttam-Kumar-Sahus-Portfolio">
         
            <img src={image3} alt="image3" className="social-temp" />
          </a>
          <a href="https://www.behance.net/gallery/140922545/Uttam-Kumar-Sahus-Portfolio">
            <img src={image4} alt="image4" className="social-temp" />
          </a>
          <a href="https://www.behance.net/gallery/140922545/Uttam-Kumar-Sahus-Portfolio">
            <img src={image5} alt="image5" className="social-temp" />
          </a>
          <a href="https://www.behance.net/gallery/140922545/Uttam-Kumar-Sahus-Portfolio">
            
            <img src={image6} alt="image6" className="social-temp" />
          </a>
          <a href="https://www.behance.net/gallery/140922545/Uttam-Kumar-Sahus-Portfolio">
          
            <img src={image7} alt="image7" className="social-temp" />
          </a>
          <a href="https://www.behance.net/gallery/140922545/Uttam-Kumar-Sahus-Portfolio">
            <img src={image8} alt="image8" className="social-temp" />
          </a>
        </div>
        <div className="logos">
          <a href="mailto:sahuu6175@gmail.com" alt="mail">
            <img src={Mail} />
          </a>
          <a
            href="https://www.linkedin.com/in/uttam-kumar-sahu-090456226/"
            alt="linke_in"
          >
            <img src={Linked_in} />
          </a>
          <a href="https://www.instagram.com/uttamkumarsahu22/" alt="instagram">
            <img src={instagram} />
          </a>
        </div>
        <div className="contacts" id="contact">
          <div className="contact-container">
            <h1>Contact</h1>
            <form action="mailto:yograjrjpt123@gmail.com" id="contact-form" method="post" >
              <input name="name"type="text" className="form-control" placeholder="Your Name" required/><br />
              <input name="email" type="text" className="form-control" placeholder="Your Email" required/><br />
              <textarea name="message" className="form-control-msg" rows="4" placeholder="Message" required></textarea><br />
              <input type="Submit" className="form-control submit" value="send message"/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
