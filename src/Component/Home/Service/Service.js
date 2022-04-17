import React from "react";
import { Container } from "react-bootstrap";
import gym from "../../../img/card-one.jpg";
import gymone from "../../../img/card-two.jpg";
import gymtwo from "../../../img/card-three.jpg";
import "./Service.css";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <div className="service-card-area">
      <div className="Container service-card-wrapper">
        <div className="service-card-item">
          <div className="service-card-item-image-wrapper">
            <img src={gym} alt=""></img>
          </div>
          <div className="service-card-item-content">
            <p className="price-description">
              Positive pleasure-oriented goals are much more powerful.
            </p>
            <p className="price">120$</p>
            <Link className="service-card-btn" to="/Checkout">
              Become a member
            </Link>
          </div>
        </div>
        <div className="service-card-item">
          <div className="service-card-item-image-wrapper">
            <img src={gymone} alt=""></img>
          </div>
          <div className="service-card-item-content">
            <p className="price-description">
              Make a list of your achievements toward your long-term.
            </p>
            <p className="price">120$</p>
            <Link className="service-card-btn" to="/Checkout">
              Become a member
            </Link>
          </div>
        </div>
        <div className="service-card-item">
          <div className="service-card-item-image-wrapper">
            <img src={gymtwo} alt=""></img>
          </div>
          <div className="service-card-item-content">
            <p className="price-description">
              Use a past defeat as a motivator. Remind yourself you.
            </p>
            <p className="price">120$</p>
            <Link className="service-card-btn" to="/Checkout">
              Become a member
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
