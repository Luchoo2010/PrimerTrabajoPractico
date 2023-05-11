import React from "react";
import IconoCorreo from "../assets/iconoCorreo.png"
import Instagram from "../assets/Instagram.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter_PNG1.png"

const Footer = () => {

  return (
    <div className="color">
      <footer className="foot">
        <div className="img">
          <a href="https://www.instagram.com/luciano.azalot/?theme=dark" target="blank">
          <img src={Instagram} alt="" height="80" width="60" />
          </a>
          <a href="https://www.linkedin.com/in/luciano-azalot-00a6b3249/" target="blank">
          <img src={linkedin} alt="" height="80" width="60" />
          </a>
          <a href="https://twitter.com/home" target="blank"> 
          <img src={twitter}alt="" height="80" width="80" />
          </a>
          <a href="https://outlook.live.com/mail/0/" target="blank"> 
          <img src={IconoCorreo} alt="" height="80" width="80" />
          </a>
        </div>
      </footer>

    </div>
  );
};

export default Footer;
