import React from "react";
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/twitter.svg";
import youtube from "../../assets/img/youtube.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="sm-icons">
          <img src={facebook} alt="facebook logo" />
          <img src={instagram} alt="instagram logo" />
          <img src={twitter} alt="twitter" />
          <img src={youtube} alt="youtube" />
        </div>
        <div className="links">
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
        <div className="credits">
          <p>&#169; 2021 MovieBox by Adriana Eka Prayudha</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
