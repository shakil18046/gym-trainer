import React from "react";
import logo from "../../img/logofooter.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div style={{ padding: "0px 10px" }}>
        <p className="copyright">
          ©2021 G-ON. All Rights Reserved By Doodlias​
        </p>
      </div>
      <div style={{ padding: "0px 10px" }}>
        <img src={logo} alt=""></img>
      </div>
      <div style={{ padding: "0px 10px" }}>
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
