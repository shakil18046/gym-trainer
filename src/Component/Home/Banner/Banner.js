import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="hero-area-wrapper">
      <h1 className="hero-heading">
        keep your body fit & <span className="hero-heading-inner">strong</span>
      </h1>
      <div className="hero-btn-wrapper">
        <a href="#" className="hero-btn">
          More about trainer
        </a>
      </div>
    </div>
  );
};

export default Banner;
